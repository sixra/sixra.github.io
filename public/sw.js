const CACHE_NAME = 'sixra-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/blog/',
  '/about/',
  '/sr-logo-1000x450.png',
  '/favicon.svg',
  '/favicon.ico',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      try {
        const cache = await caches.open(CACHE_NAME);
        await cache.addAll(ASSETS_TO_CACHE);
      } catch (error) {
        console.error('Failed to cache assets:', error);
      }
    })()
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const cacheNames = await caches.keys();
      await Promise.all([
        ...cacheNames.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name)),
        self.clients.claim(),
      ]);
    })()
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    (async () => {
      const cachedResponse = await caches.match(event.request);

      if (cachedResponse) {
        // Update cache in background
        fetch(event.request)
          .then(async (networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              const cache = await caches.open(CACHE_NAME);
              await cache.put(event.request, networkResponse);
            }
          })
          .catch((error) => {
            console.error('Background fetch failed:', error);
          });
        return cachedResponse;
      }

      // No cache, fetch from network
      try {
        const networkResponse = await fetch(event.request);
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          const cache = await caches.open(CACHE_NAME);
          await cache.put(event.request, responseToCache);
        }
        return networkResponse;
      } catch (error) {
        console.error('Fetch failed:', error);
        throw error;
      }
    })()
  );
});
