import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';

test.describe('Homepage', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    // Arrange
    homePage = new HomePage(page);

    // Act
    await homePage.goto();
  });

  test('should display all core elements', async () => {
    // Assert
    await homePage.assertPageLoaded();
    await expect(homePage.logo).toBeVisible();
    await expect(homePage.aboutLink).toBeVisible();
    await expect(homePage.contactLink).toBeVisible();
    await expect(homePage.faqLink).toBeVisible();
  });

  test('should have proper SEO metadata', async () => {
    // Assert
    await homePage.assertPageTitle(/Ratko Simidzija/);
    await homePage.assertMetaDescription();
    await homePage.assertLangAttribute();
  });
});
