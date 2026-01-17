import { test, expect } from '@playwright/test';

test.describe('View Transitions', () => {
  test('should navigate between pages with view transitions', async ({ page }) => {
    await page.goto('/');

    const blogLink = page.locator('a[href="/blog"]').first();
    await expect(blogLink).toBeVisible();
    await blogLink.click();

    await page.waitForURL('/blog');

    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
  });

  test('should handle anchor link navigation', async ({ page }) => {
    await page.goto('/blog');

    const firstPost = page.locator('article.blog-card a').first();
    const href = await firstPost.getAttribute('href');
    await firstPost.click();

    await page.waitForURL(`${href}`);

    const headingWithId = page.locator('h2[id]').first();
    if (await headingWithId.isVisible()) {
      await headingWithId.click();

      const url = new URL(page.url());
      expect(url.hash).toBeTruthy();
      expect(url.hash).toMatch(/#.+/);
    }
  });

  test('should show toast on heading anchor click', async ({ page, context }) => {
    await context.grantPermissions(['clipboard-read', 'clipboard-write']);
    await page.goto('/blog');

    const firstPost = page.locator('article.blog-card a').first();
    const href = await firstPost.getAttribute('href');
    await firstPost.click();

    await page.waitForURL(`${href}`);

    const headingWithId = page.locator('h2[id]').first();
    if (await headingWithId.isVisible()) {
      await headingWithId.click();

      const toast = page.locator('#globalCopyToast');
      await expect(toast).toHaveClass(/show/);
      await expect(toast).toContainText('Link copied to clipboard!');

      await expect(toast).not.toHaveClass(/show/, { timeout: 3000 });
    }
  });

  test('should scroll to top on navigation', async ({ page }) => {
    await page.goto('/');

    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(100);

    await page.click('a[href="/blog"]');
    await page.waitForURL('/blog');

    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBeLessThan(10);
  });

  test('should apply blog title view transition', async ({ page }) => {
    await page.goto('/blog');

    const blogTitle = page.locator('[data-blog-title]').first();
    if (await blogTitle.isVisible()) {
      const slug = await blogTitle.getAttribute('data-slug');

      const blogCard = blogTitle.locator('..').locator('..');
      await blogCard.click();

      await page.waitForURL(`/blog/${slug}`);

      const postTitle = page.locator('h1');
      await expect(postTitle).toBeVisible();
    }
  });

  test('should handle keyboard navigation on headings', async ({ page, context }) => {
    await context.grantPermissions(['clipboard-read', 'clipboard-write']);
    await page.goto('/blog');

    const firstPost = page.locator('article.blog-card a').first();
    const href = await firstPost.getAttribute('href');
    await firstPost.click();

    await page.waitForURL(`${href}`);

    const headingWithId = page.locator('h2[id]').first();
    if (await headingWithId.isVisible()) {
      await headingWithId.focus();

      await headingWithId.press('Enter');

      const url = new URL(page.url());
      expect(url.hash).toBeTruthy();

      const toast = page.locator('#globalCopyToast');
      await expect(toast).toHaveClass(/show/);
    }
  });
});
