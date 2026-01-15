# Ratko Simidzija - Portfolio

A minimalist portfolio and blog built with Astro, featuring a dark theme inspired by jekyll-klise.

## Features

- **Lightning Fast**: Static site generation with Astro 5
- **Dark Theme Only**: Minimalist design with jekyll-klise color palette
- **SEO Optimized**: Sitemap, RSS feed, Open Graph, Twitter Cards
- **Blog System**: Content collections with type-safe frontmatter
- **View Transitions**: Smooth page navigation
- **100/100 Lighthouse Scores**: Performance, Accessibility, Best Practices, SEO

## Tech Stack

- [Astro 5](https://astro.build) - Static site generator
- Pure CSS with custom properties - No frameworks
- TypeScript - Type safety throughout
- Content Collections - Type-safe blog posts with Zod validation

## Project Structure

```
/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── BaseHead.astro      # SEO meta tags
│   │   ├── Header.astro        # Navigation
│   │   ├── Footer.astro        # Social links
│   │   ├── BlogCard.astro      # Blog post preview
│   │   └── FormattedDate.astro # Date formatting
│   ├── content/
│   │   ├── config.ts           # Content collections schema
│   │   └── blog/               # Blog posts (Markdown)
│   ├── layouts/
│   │   ├── BaseLayout.astro    # Root layout
│   │   └── BlogPost.astro      # Blog post layout
│   ├── pages/
│   │   ├── index.astro         # Home page
│   │   ├── blog/
│   │   │   ├── index.astro     # Blog archive
│   │   │   └── [slug].astro    # Dynamic blog posts
│   │   ├── rss.xml.ts          # RSS feed
│   │   └── 404.astro           # Error page
│   └── styles/
│       └── global.css          # Global styles
└── package.json
```

## Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run astro check
```

## Development

The site runs locally at `http://localhost:4321` in dev mode.

## Deployment

Automatically deploys to GitHub Pages via GitHub Actions on push to `main` branch.

### Setup GitHub Pages

1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions"
3. Push to `main` branch to trigger deployment
4. Site will be live at `https://sixra.github.io`

## Adding Blog Posts

Create a new Markdown file in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "Brief description for SEO"
pubDate: 2026-01-14
draft: false
---

Your content here...
```

## Customization

### Colors

Edit `src/styles/global.css` to change the color palette:

```css
:root {
  --color-bg: #131418; /* Dark background */
  --color-link: #ff5277; /* Pink accent */
  /* ... other colors */
}
```

### Social Links

Update the Footer component at `src/components/Footer.astro` with your:

- GitHub URL
- LinkedIn URL
- Other social profiles

### Site Info

Update site metadata in:

- `astro.config.mjs` - Site URL
- `src/pages/index.astro` - Home page content
- `src/components/BaseHead.astro` - SEO defaults

## License

MIT

## Acknowledgments

- Design inspired by [jekyll-klise](https://github.com/piharpi/jekyll-klise)
- Architecture based on [astro-nano](https://github.com/markhorn-dev/astro-nano)
- SEO patterns from [astro-paper](https://github.com/satnaing/astro-paper)
