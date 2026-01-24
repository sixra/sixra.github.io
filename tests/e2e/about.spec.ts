import { test } from '@playwright/test';
import { AboutPage } from './pages/AboutPage';

test.describe('About Page', () => {
  let aboutPage: AboutPage;

  test.beforeEach(async ({ page }) => {
    // Arrange
    aboutPage = new AboutPage(page);

    // Act
    await aboutPage.goto();
  });

  test('should display about page', async () => {
    // Assert
    await aboutPage.assertPageLoaded();
  });

  test('should display all sections', async () => {
    // Assert
    await aboutPage.assertSections();
    await aboutPage.assertWorkExperience();
  });

  test('should have social links', async () => {
    // Assert
    await aboutPage.assertSocialLinks();
  });
});
