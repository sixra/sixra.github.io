import { test, expect } from '@playwright/test';
import { NotFoundPage } from './pages/NotFoundPage';

test.describe('404 Page', () => {
  test('should return 404 status for invalid URLs', async ({ page }) => {
    // Arrange & Act
    const response = await page.goto('/this-page-does-not-exist');

    // Assert
    expect(response?.status()).toBe(404);
  });

  test('should have navigation back to home', async ({ page }) => {
    // Arrange
    const notFoundPage = new NotFoundPage(page);

    // Act
    await notFoundPage.goto();

    // Assert
    await notFoundPage.assertHomeLink();
  });
});
