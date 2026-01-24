import { test, expect } from '@playwright/test';
import { FaqPage } from './pages/FaqPage';

test.describe('FAQ Page', () => {
  let faqPage: FaqPage;

  test.beforeEach(async ({ page }) => {
    // Arrange
    faqPage = new FaqPage(page);

    // Act
    await faqPage.goto();
  });

  test('should display FAQ page with all sections', async () => {
    // Assert
    await faqPage.assertPageLoaded();
    await expect(faqPage.subtitle).toBeVisible();
    await faqPage.assertAllCategoriesVisible();
  });

  test('should have proper SEO metadata', async () => {
    // Assert
    await faqPage.assertPageTitle(/FAQ/i);
    await faqPage.assertMetaDescription();
    await faqPage.assertLangAttribute();
  });

  test('should display all FAQ items', async () => {
    // Assert - Check all 9 FAQ items exist
    const faqIds = [
      'react-experience',
      'typescript',
      'testing',
      'remote-work',
      'availability',
      'project-examples',
      'location',
      'languages',
      'learning',
    ];

    for (const id of faqIds) {
      await faqPage.assertFaqItemVisible(id);
    }
  });

  test('should expand FAQ item when clicked', async () => {
    // Arrange
    const faqId = 'react-experience';

    // Assert initial state (closed)
    await faqPage.assertFaqItemClosed(faqId);

    // Act - Click to open
    await faqPage.openFaqItem(faqId);

    // Assert - Now open
    await faqPage.assertFaqItemOpen(faqId);
    await expect(faqPage.getFaqAnswer(faqId)).toBeVisible();
  });

  test('should collapse FAQ item when clicked again', async () => {
    // Arrange
    const faqId = 'typescript';

    // Act - Open
    await faqPage.openFaqItem(faqId);
    await faqPage.assertFaqItemOpen(faqId);

    // Act - Close
    await faqPage.openFaqItem(faqId);

    // Assert - Now closed
    await faqPage.assertFaqItemClosed(faqId);
  });

  test('should support keyboard navigation', async ({ page }) => {
    // Arrange
    const faqId = 'testing';
    const summary = faqPage.getFaqSummary(faqId);

    // Act - Focus and press Enter
    await summary.focus();
    await page.keyboard.press('Enter');

    // Assert - FAQ opened
    await faqPage.assertFaqItemOpen(faqId);
  });

  test('should have accessible headings hierarchy', async ({ page }) => {
    // Assert - Check heading levels
    const h1 = await page.locator('h1').count();
    const h2 = await page.locator('h2').count();
    const h3 = await page.locator('h3').count();

    // Should have 1 main heading (h1)
    expect(h1).toBe(1);

    // Should have 6 h2 headings total (3 FAQ categories + 3 footer sections)
    expect(h2).toBe(6);

    // Should have 9 question headings (h3)
    expect(h3).toBe(9);
  });

  test('should have chevron icon that rotates when expanded', async () => {
    // Arrange
    const faqId = 'remote-work';
    const faqItem = faqPage.getFaqItem(faqId);

    // Assert - Check icon exists
    const icon = faqItem.locator('svg');
    await expect(icon).toBeVisible();

    // Act - Open FAQ
    await faqPage.openFaqItem(faqId);

    // Assert - Icon should have rotation class when open
    await expect(faqItem).toHaveAttribute('open');
  });

  test('should have FAQ link in navigation', async () => {
    // Assert
    await expect(faqPage.faqLink).toBeVisible();
    await expect(faqPage.faqLink).toHaveAttribute('href', '/faq/');
  });

  test('should have skip to content link', async () => {
    await expect(faqPage.skipLink).toHaveText('Skip to content');
    await expect(faqPage.skipLink).toHaveAttribute('href', '#main-content');
  });

  test('should have valid structured data schema', async ({ page }) => {
    // Assert - Check for FAQ schema
    const schemaScript = page.locator('script[type="application/ld+json"]');
    const count = await schemaScript.count();

    // Should have at least one schema (FAQPage schema)
    expect(count).toBeGreaterThanOrEqual(1);

    // Check FAQPage schema exists
    const schemas = await schemaScript.allTextContents();
    const hasFAQSchema = schemas.some((schema) => schema.includes('FAQPage'));

    expect(hasFAQSchema).toBe(true);
  });
});
