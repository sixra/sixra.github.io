import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
  site: 'https://sixra.github.io',
  integrations: [
    sitemap(),
    compress({
      CSS: true,
      HTML: {
        removeAttributeQuotes: false,
        removeComments: true,
      },
      Image: true,
      JavaScript: true,
      SVG: true,
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['noopener', 'noreferrer'],
        },
      ],
    ],
  },
});
