// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: process.env.SITE_URL || 'https://sixra.dev',
  output: 'static',
  trailingSlash: 'ignore',

  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'viewport',
  },

  experimental: {
    csp: {
      directives: ["worker-src 'self'"],
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'sr-latn', 'sr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [
    icon(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          'sr-latn': 'sr-latn',
          sr: 'sr',
        },
      },
      serialize(item) {
        // Extract pathname from URL for clearer matching
        const url = new URL(item.url);
        const path = url.pathname;

        // Set priorities based on page importance (check specific pages first!)
        if (path.includes('/faq')) {
          item.priority = 0.6; // Secondary pages (FAQ)
        } else if (path.includes('/about') || path.includes('/contact')) {
          item.priority = 0.8; // Important pages (About, Contact)
        } else if (path === '/' || path === '/sr/' || path === '/sr-latn/') {
          item.priority = 1.0; // Homepage in all languages
        } else {
          item.priority = 0.5; // Other pages
        }

        // Add lastmod timestamp (current date for static build)
        item.lastmod = new Date().toISOString();

        return item;
      },
    }),
  ],

  build: {
    inlineStylesheets: 'always',
    assets: '_assets',
  },

  compressHTML: true,

  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: 'lightningcss',
      minify: 'esbuild',
      sourcemap: false,
    },
    server: {
      hmr: {
        protocol: 'ws',
        host: 'localhost',
        port: 4321,
        clientPort: 4321,
      },
      watch: {
        usePolling: false,
      },
    },
  },
});
