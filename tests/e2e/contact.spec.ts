import { test } from '@playwright/test';
import { ContactPage } from './pages/ContactPage';

test.describe('Contact Page', () => {
  let contactPage: ContactPage;

  test.beforeEach(async ({ page }) => {
    // Arrange
    contactPage = new ContactPage(page);

    // Act
    await contactPage.goto();
  });

  test('should display contact page', async () => {
    // Assert
    await contactPage.assertPageLoaded();
  });

  test('should display contact information', async () => {
    // Assert
    await contactPage.assertContactInformation();
  });

  test('should have working contact links', async () => {
    // Assert
    await contactPage.assertEmailLink();
    await contactPage.assertSocialLinks();
  });
});
