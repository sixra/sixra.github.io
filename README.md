# Portfolio Site

My portfolio and blog. Built with Astro because it's awesome and I enjoy using it.

## Tech

- Astro 5 + TypeScript
- Just CSS, no frameworks
- Deploys to GitHub Pages

## Setup

```bash
pnpm install
pnpm run dev
pnpm run build
```

## Adding Posts

Drop a markdown file in `src/content/blog/`:

```markdown
---
title: 'Post title'
description: 'Short description for SEO'
pubDate: 2026-01-16
tags: ['astro', 'typescript']
image: '/images/blog/image.jpg'
draft: false
---

Content goes here...
```

Tags are optional but useful. Images should go in `public/images/blog/`.

## Features

- Blog with tag filtering
- Reading time on posts
- Related posts based on tags
- RSS feed and sitemap
- Basic SEO stuff (Open Graph, meta tags)

## License

MIT
