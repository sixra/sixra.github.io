# Portfolio Site

[![Test](https://github.com/sixra/sixra.github.io/actions/workflows/test.yml/badge.svg)](https://github.com/sixra/sixra.github.io/actions/workflows/test.yml)
[![Lighthouse CI](https://github.com/sixra/sixra.github.io/actions/workflows/lighthouse.yml/badge.svg)](https://github.com/sixra/sixra.github.io/actions/workflows/lighthouse.yml)
[![Coverage](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/sixra/sixra.github.io/main/.github/badges/coverage.json)](https://github.com/sixra/sixra.github.io/actions/workflows/update-badges.yml)

[![Performance](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/sixra/sixra.github.io/main/.github/badges/lighthouse-performance.json)](https://pagespeed.web.dev/)
[![Accessibility](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/sixra/sixra.github.io/main/.github/badges/lighthouse-accessibility.json)](https://pagespeed.web.dev/)
[![Best Practices](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/sixra/sixra.github.io/main/.github/badges/lighthouse-best-practices.json)](https://pagespeed.web.dev/)
[![SEO](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/sixra/sixra.github.io/main/.github/badges/lighthouse-seo.json)](https://pagespeed.web.dev/)

[![FCP](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/sixra/sixra.github.io/main/.github/badges/fcp.json)](https://web.dev/articles/fcp)
[![LCP](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/sixra/sixra.github.io/main/.github/badges/lcp.json)](https://web.dev/articles/lcp)
[![Bundle Size](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/sixra/sixra.github.io/main/.github/badges/size.json)](https://github.com/sixra/sixra.github.io)

Personal portfolio and blog built with Astro 5, TypeScript, and deployed to GitHub Pages.

## Quick Start

```bash
pnpm install
pnpm dev       # http://localhost:4321
pnpm build     # Production build
```

## Adding Blog Posts

Create `src/content/blog/your-post.md`:

```markdown
---
title: 'Post Title'
description: 'SEO description'
pubDate: 2026-01-16
tags: ['astro', 'typescript']
image: '/images/blog/image.jpg'
draft: false
---

Your content here...
```

Images go in `public/images/blog/`

## License

MIT
