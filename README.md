# Portfolio Site

My portfolio and blog. Built with Astro because it's fast, flexible, and a pleasure to work with.

## Tech Stack

- **Astro 5** - Static site generation
- **TypeScript** - Type safety throughout
- **Vitest** - Unit testing
- **Plausible Analytics** - Privacy-respecting analytics
- **GitHub Actions** - CI/CD pipeline
- **GitHub Pages** - Hosting

## Quick Start

```bash
pnpm install
pnpm dev
```

Visit `http://localhost:4321`

## Scripts

```bash
pnpm dev          # Start dev server
pnpm build        # Production build
pnpm preview      # Preview production build
pnpm test             # Run unit tests
pnpm test:ui          # Run unit tests with UI
pnpm test:coverage    # Generate coverage report
pnpm test:e2e         # Run E2E tests with Playwright
pnpm test:e2e:ui      # Run E2E tests with Playwright UI
pnpm test:e2e:debug   # Debug E2E tests
pnpm lint             # Lint code
pnpm lint:fix         # Fix linting issues
pnpm format           # Format with Prettier
```

## Project Structure

```
src/
├── components/       # Reusable Astro components
├── content/          # Markdown content
│   └── blog/        # Blog posts
├── layouts/          # Page layouts
├── pages/           # Routes (file-based routing)
├── styles/          # Global styles
└── utils/           # Utility functions

public/              # Static assets
├── images/          # Images
└── fonts/           # Fonts (if any)

.github/
├── workflows/       # CI/CD workflows
└── lighthouse/      # Lighthouse CI config
```

## Adding Blog Posts

Create a markdown file in `src/content/blog/`:

```markdown
---
title: 'Your Post Title'
description: 'SEO-friendly description'
pubDate: 2026-01-16
tags: ['astro', 'typescript']
image: '/images/blog/your-image.jpg'
draft: false
---

Your content here...
```

- Tags are optional but help with related posts
- Images go in `public/images/blog/`
- Set `draft: true` to hide from production

## Features

- Blog with tag filtering and search
- Automatic reading time calculation
- Related posts based on tag similarity
- RSS feed (`/rss.xml`)
- Sitemap for SEO
- Open Graph and Twitter cards
- JSON-LD structured data
- Lazy-loaded images
- Dark mode support
- Accessibility optimized (ARIA, semantic HTML)
- View transitions (Astro 5.x)

## Development Guidelines

- **TypeScript**: Strict mode enabled, avoid `any` types
- **Testing**: Write tests for utility functions
- **Formatting**: Prettier runs on save
- **Linting**: ESLint with TypeScript + Astro rules
- **Commits**: Use conventional commit messages

## Deployment

The site automatically deploys to GitHub Pages when you push to `main`:

1. GitHub Actions runs tests and build
2. Lighthouse CI checks performance
3. Build artifacts deploy to `gh-pages` branch
4. Site updates at `https://sixra.github.io`

Manual deployment:

```bash
pnpm run build
# Manually deploy the dist/ folder
```

## Performance Optimizations

- Static HTML generation (no JS hydration needed)
- Automatic image compression via astro-compress
- Lazy-loaded images below the fold
- Deferred analytics script (production only)
- Minified HTML, CSS, and images
- Optimized font loading

### Lighthouse CI

Performance is monitored via Lighthouse CI:

- **PR checks**: Runs on every PR to catch regressions before merge
- **Weekly audits**: Comprehensive 3-run audits every Sunday
- **Performance budgets**: Data-driven limits on resource sizes and metrics
- **Thresholds**: Performance (90%), Accessibility (95%), Best Practices (90%), SEO (95%)

Performance budgets are calibrated to current site metrics + 15% buffer:
- FCP: 1000ms, LCP: 1900ms, TBT: 200ms, CLS: 0.1
- Total size: 110KB (Document: 6KB, CSS: 5KB, JS: 3KB, Images: 23KB)

## Troubleshooting

**Build fails with TypeScript errors:**

```bash
pnpm astro check
```

**Tests failing:**

```bash
pnpm test -- --reporter=verbose
```

**E2E tests failing - browsers not installed:**

```bash
npx playwright install
```

**First time running E2E tests:**

```bash
npx playwright install    # One-time browser installation
pnpm run build           # Build the site
pnpm test:e2e            # Run E2E tests
```

**Styles not updating:**

- Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
- Clear Astro cache: `rm -rf .astro dist`

**Images not showing:**

- Ensure images are in `public/images/blog/`
- Check image paths start with `/` (e.g., `/images/blog/image.jpg`)

## License

MIT
