// Service Worker - Best Practices Implementation
// Docs: https://developer.chrome.com/docs/workbox/caching-strategies-overview/
/* eslint-disable @typescript-eslint/explicit-function-return-type */

const CACHE_NAME = 'sixra-v2.1';

const CACHE_CONFIG = {
  MAX_ENTRIES: {
    static: 50,
    pages: 20,
    assets: 100,
  },
  MAX_AGE: {
    static: 30 * 24 * 60 * 60 * 1000, // 30 days
    pages: 24 * 60 * 60 * 1000, // 1 day
    assets: 365 * 24 * 60 * 60 * 1000, // 1 year
  },
};

const CACHES = {
  static: `${CACHE_NAME}-static`,
  pages: `${CACHE_NAME}-pages`,
  assets: `${CACHE_NAME}-assets`,
};

const ASSETS_TO_CACHE = [
  '/',
  '/about/',
  '/contact/',
  '/faq/',
  '/favicon.svg',
  '/favicon.ico',
  '/apple-touch-icon.png',
];

// Trim cache to max entries (LRU eviction)
async function trimCache(cacheName, maxItems) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();

  if (keys.length > maxItems) {
    const keysToDelete = keys.slice(0, keys.length - maxItems);
    await Promise.all(keysToDelete.map((key) => cache.delete(key)));
  }
}

// Check if cached response is expired
function isCacheExpired(cachedResponse, maxAge) {
  const cachedTime = cachedResponse.headers.get('sw-cache-time');
  if (!cachedTime) return false;

  const age = Date.now() - parseInt(cachedTime, 10);
  return age > maxAge;
}

// Add timestamp to response for expiration tracking
function addCacheTimestamp(response) {
  const clonedResponse = response.clone();
  const headers = new Headers(clonedResponse.headers);
  headers.append('sw-cache-time', Date.now().toString());

  return new Response(clonedResponse.body, {
    status: clonedResponse.status,
    statusText: clonedResponse.statusText,
    headers,
  });
}

// Network First: Try network, fallback to cache
async function networkFirst(request, cacheName) {
  try {
    const response = await fetch(request);
    if (response.status === 200) {
      const cache = await caches.open(cacheName);
      const responseToCache = addCacheTimestamp(response);
      await cache.put(request, responseToCache);
      await trimCache(cacheName, CACHE_CONFIG.MAX_ENTRIES.pages);
    }
    return response;
  } catch {
    const cached = await caches.match(request);
    if (cached) return cached;

    const offlineFallback = await caches.match('/404/');
    if (offlineFallback) return offlineFallback;

    return new Response('Offline - No cached version available', {
      status: 503,
      statusText: 'Service Unavailable',
      headers: { 'Content-Type': 'text/plain' },
    });
  }
}

// Cache First: Check cache, fallback to network
async function cacheFirst(request, cacheName) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.status === 200) {
      const cache = await caches.open(cacheName);
      const responseToCache = addCacheTimestamp(response);
      await cache.put(request, responseToCache);
      await trimCache(cacheName, CACHE_CONFIG.MAX_ENTRIES.assets);
    }
    return response;
  } catch {
    return new Response('Asset not available', {
      status: 503,
      statusText: 'Service Unavailable',
      headers: { 'Content-Type': 'text/plain' },
    });
  }
}

// Stale-While-Revalidate: Return cached immediately, update in background
// Docs: https://web.dev/articles/stale-while-revalidate
async function staleWhileRevalidate(request, cacheName, maxAge) {
  const cached = await caches.match(request);

  const fetchPromise = fetch(request)
    .then(async (response) => {
      if (response.status === 200) {
        const cache = await caches.open(cacheName);
        const responseToCache = addCacheTimestamp(response);
        await cache.put(request, responseToCache);
        await trimCache(cacheName, CACHE_CONFIG.MAX_ENTRIES.static);
      }
      return response;
    })
    .catch(() => null);

  if (cached) {
    if (!isCacheExpired(cached, maxAge)) {
      void fetchPromise; // Update in background
      return cached;
    }
    return (await fetchPromise) || cached;
  }

  return (
    (await fetchPromise) ||
    new Response('Asset not available', {
      status: 503,
      statusText: 'Service Unavailable',
      headers: { 'Content-Type': 'text/plain' },
    })
  );
}

// Install: Precache critical assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHES.pages);

      await Promise.allSettled(
        ASSETS_TO_CACHE.map(async (url) => {
          try {
            const response = await fetch(url);
            if (response.ok) {
              await cache.put(url, response);
            } else {
              console.warn(`Failed to precache ${url}: ${response.status}`);
            }
          } catch (error) {
            console.warn(`Failed to precache ${url}:`, error);
          }
        })
      );
    })()
  );
  self.skipWaiting();
});

// Activate: Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const cacheNames = await caches.keys();
      const validCacheNames = Object.values(CACHES);

      await Promise.all(
        cacheNames
          .filter((name) => !validCacheNames.includes(name))
          .map((name) => caches.delete(name))
      );

      await self.clients.claim();
    })()
  );
});

// Fetch: Route requests to appropriate strategy
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    return;
  }

  const { request } = event;
  const url = new URL(request.url);

  // Skip dev server resources
  if (
    url.protocol === 'ws:' ||
    url.protocol === 'wss:' ||
    url.pathname.startsWith('/@') ||
    url.pathname.includes('__vite') ||
    url.pathname.includes('node_modules') ||
    url.searchParams.has('html-proxy') ||
    url.port === '4321' ||
    url.port === '5173'
  ) {
    return;
  }

  // HTML pages → Network First
  if (request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(networkFirst(request, CACHES.pages));
    return;
  }

  // Hashed assets → Cache First
  if (url.pathname.startsWith('/_assets/')) {
    event.respondWith(cacheFirst(request, CACHES.assets));
    return;
  }

  // Other assets → Stale-While-Revalidate
  event.respondWith(staleWhileRevalidate(request, CACHES.static, CACHE_CONFIG.MAX_AGE.static));
});

// Message handler for cache clearing
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(cacheNames.map((name) => caches.delete(name)));
      })
    );
  }
});
