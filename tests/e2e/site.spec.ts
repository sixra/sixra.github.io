import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should display homepage correctly', async ({ page }) => {
    await page.goto('/');

    // Header and navigation
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('.site-logo')).toBeVisible();
    await expect(page.locator('nav .nav-links a[href="/"]')).toBeVisible();
    await expect(page.locator('nav .nav-links a[href="/blog"]')).toBeVisible();

    // Recent posts section
    await expect(page.getByRole('heading', { name: 'Recent Posts' })).toBeVisible();

    // Footer
    await expect(page.locator('footer')).toBeVisible();
  });
});

test.describe('Blog', () => {
  test('should display blog posts on index', async ({ page }) => {
    await page.goto('/blog');
    await expect(page.locator('h1')).toContainText('Blog');
    const blogCards = page.locator('.blog-card');
    const count = await blogCards.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should navigate to individual blog post', async ({ page }) => {
    await page.goto('/blog');
    const firstPost = page.locator('.blog-card').first();
    await firstPost.click();

    await page.waitForURL(/\/blog\/.+/);
    await expect(page.locator('article h1')).toBeVisible();
  });

  test('should display blog post with reading time and author', async ({ page }) => {
    await page.goto('/blog/hello-world');
    await expect(page.getByText(/\d+ min read/)).toBeVisible();
    await expect(page.locator('.author-bio')).toBeVisible();
    await expect(page.locator('.author-bio')).toContainText('Ratko Simidzija');
  });
});

test.describe('Tags', () => {
  test('should display tags on blog posts', async ({ page }) => {
    await page.goto('/blog');
    const tags = page.locator('.tag');
    const count = await tags.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should navigate to tag page when clicking tag', async ({ page }) => {
    await page.goto('/blog');
    const firstTag = page.locator('.tag').first();
    await firstTag.click();

    await page.waitForURL(/\/tags\/.+/);
    await expect(page.locator('h1')).toContainText('Posts tagged');
  });

  test('should display posts filtered by tag', async ({ page }) => {
    await page.goto('/tags/astro');
    const blogCards = page.locator('.blog-card');
    const count = await blogCards.count();
    expect(count).toBeGreaterThan(0);
  });
});

test.describe('Accessibility', () => {
  test('should have proper page title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Ratko Simidzija/);
  });

  test('should have meta description', async ({ page }) => {
    await page.goto('/');
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute('content', /.+/);
  });

  test('should have lang attribute', async ({ page }) => {
    await page.goto('/');
    const html = page.locator('html');
    await expect(html).toHaveAttribute('lang', 'en');
  });

  test('should have skip to content link', async ({ page }) => {
    await page.goto('/');
    const skipLink = page.locator('a.skip-link');
    await expect(skipLink).toHaveText('Skip to main content');
    await expect(skipLink).toHaveAttribute('href', '#main-content');
  });
});

test.describe('Images', () => {
  test('should lazy load blog card images', async ({ page }) => {
    await page.goto('/blog');
    const cardImages = page.locator('.card-image');
    const firstImage = cardImages.first();

    if ((await cardImages.count()) > 0) {
      await expect(firstImage).toHaveAttribute('loading', 'lazy');
    }
  });
});

