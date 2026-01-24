import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility', () => {
  test('homepage should have no accessibility violations', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1000); // Wait for animations to complete
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag2aaa'])
      .exclude('footer')
      .analyze();

    expect(results.violations).toEqual([]);
  });

  test('about page should have no accessibility violations', async ({ page }) => {
    await page.goto('/about');
    await page.waitForTimeout(1000); // Wait for animations to complete
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag2aaa'])
      .exclude('footer')
      .analyze();

    expect(results.violations).toEqual([]);
  });

  test('contact page should have no accessibility violations', async ({ page }) => {
    await page.goto('/contact');
    await page.waitForTimeout(1000); // Wait for animations to complete
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag2aaa'])
      .exclude('footer')
      .analyze();

    expect(results.violations).toEqual([]);
  });

  test('FAQ page should have no accessibility violations', async ({ page }) => {
    await page.goto('/faq');
    await page.waitForTimeout(1000); // Wait for animations to complete
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag2aaa'])
      .exclude('footer')
      .analyze();

    expect(results.violations).toEqual([]);
  });
});
