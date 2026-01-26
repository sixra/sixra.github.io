# Ratko Simidzija - Personal website

[![CI](https://github.com/sixra/sixra.dev/actions/workflows/ci.yml/badge.svg)](https://github.com/sixra/sixra.dev/actions/workflows/ci.yml)
[![Coverage](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/sixra/sixra.dev/main/.github/badges/coverage.json)](https://github.com/sixra/sixra.dev/actions/workflows/ci.yml)

[![Performance](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/sixra/sixra.dev/main/.github/badges/lighthouse-performance.json)](https://pagespeed.web.dev/)
[![Accessibility](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/sixra/sixra.dev/main/.github/badges/lighthouse-accessibility.json)](https://pagespeed.web.dev/)
[![Best Practices](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/sixra/sixra.dev/main/.github/badges/lighthouse-best-practices.json)](https://pagespeed.web.dev/)
[![SEO](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/sixra/sixra.dev/main/.github/badges/lighthouse-seo.json)](https://pagespeed.web.dev/)

Multilingual personal portfolio website. Built with Astro 5, TypeScript, Tailwind CSS, and deployed to Vercel.

**Live Site:** [sixra.dev](https://sixra.dev)

## Tech Stack

- **Framework:** Astro 5.16.11
- **Language:** TypeScript 5.9
- **Styling:** Tailwind CSS 4.1 + Custom CSS
- **Icons:** Astro Icon (Iconify)
- **i18n:** Custom multilingual setup (English, Serbian Latin, Serbian Cyrillic)
- **Deployment:** Vercel
- **Testing:** Vitest + Playwright
- **CI/CD:** GitHub Actions

## Internationalization (i18n)

The site supports three languages:

- **English** (`en`) - Default language at `/`
- **Serbian Latin** (`sr-latn`) - Available at `/sr-latn/`
- **Serbian Cyrillic** (`sr`) - Available at `/sr/`

Translations are managed in `src/i18n/ui.ts` and automatically switch based on the URL path. The language switcher in the footer allows users to toggle between languages while maintaining their current page context.

## Development

```bash
# Install dependencies
pnpm install

# Start dev server (http://localhost:4321)
pnpm dev

# Run tests
pnpm test              # Unit tests with coverage
pnpm test:e2e          # E2E tests with Playwright

# Lint & Format
pnpm lint              # ESLint
pnpm format            # Prettier

# Build
pnpm build             # Production build
pnpm preview           # Preview build locally
```

## Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>: <description>
```

**Types:**

- `feat`: Add or update features
- `fix`: Fix bugs
- `refactor`: Restructure code
- `test`: Add or update tests
- `chore`: upgrade dependencies, update configs
- `ci`: Update CI/CD

## Project Structure

```
src/
├── assets/            # Images, logos, static assets
├── components/        # Reusable Astro components
│   ├── layout/        # Header, Footer
│   ├── schemas/       # Structured data schemas
│   ├── sections/      # Page sections
│   └── ui/            # UI components
├── i18n/              # Internationalization (translations)
├── layouts/           # Page layouts
├── pages/             # Routes (index, about, contact, faq)
│   ├── sr/            # Serbian Cyrillic pages
│   └── sr-latn/       # Serbian Latin pages
├── styles/            # Global CSS
├── templates/         # Page-specific templates
└── utils/             # Helper functions
```

## Features

- ✅ 100% Lighthouse scores (Performance, Accessibility, Best Practices, SEO)
- ✅ TypeScript strict mode with full type safety
- ✅ WCAG 2.1 AAA accessible
- ✅ Multilingual support (English, Serbian Latin, Serbian Cyrillic)
- ✅ Fully responsive design with mobile-first approach
- ✅ SEO-friendly (sitemap, meta tags, structured data)
- ✅ Apple-inspired design with dark footer theme
- ✅ Smooth reveal animations with reduced motion support
- ✅ FAQ page with accessible accordion patterns
- ✅ Comprehensive test coverage (Unit + E2E with Playwright)
- ✅ Automated CI/CD with quality checks
