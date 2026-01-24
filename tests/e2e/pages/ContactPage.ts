import type { Page, Locator } from '@playwright/test';
import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ContactPage extends BasePage {
  readonly path = '/contact';

  constructor(page: Page) {
    super(page);
  }

  // Page-specific elements
  get heading(): Locator {
    return this.page.getByRole('heading', { name: 'Get in Touch', level: 1 });
  }

  get contactDetailsHeading(): Locator {
    return this.page.locator('h2#contact-details');
  }

  get emailLink(): Locator {
    return this.page.getByRole('link', { name: /comm\.sr@tuta\.com/ });
  }

  get contactSocialLinks(): Locator {
    return this.page.locator('#contact-details .flex.gap-4');
  }

  getSocialLink(platform: 'github' | 'linkedin'): Locator {
    const urls = {
      github: 'https://github.com/sixra',
      linkedin: 'https://www.linkedin.com/in/ratkosimidzija',
    };
    return this.contactSocialLinks.locator(`a[href="${urls[platform]}"]`);
  }

  // Actions
  async goto(): Promise<void> {
    await this.navigate(this.path);
  }

  // Assertions
  async assertPageLoaded(): Promise<void> {
    await this.assertPageTitle(/Contact.*Ratko Simidzija/);
    await expect(this.heading).toBeVisible();
  }

  async assertContactInformation(): Promise<void> {
    await expect(this.contactDetailsHeading).toBeVisible();
    await expect(this.contactDetailsHeading).toContainText('Contact Information');
    await expect(this.emailLink).toBeVisible();
  }

  async assertEmailLink(): Promise<void> {
    await expect(this.page.locator('.email-link[href="mailto:comm.sr@tuta.com"]')).toHaveAttribute(
      'href',
      'mailto:comm.sr@tuta.com'
    );
  }

  async assertSocialLinks(): Promise<void> {
    const github = this.getSocialLink('github');
    const linkedin = this.getSocialLink('linkedin');

    await expect(github).toHaveAttribute('href', /github\.com/);
    await expect(linkedin).toHaveAttribute('href', /linkedin\.com/);
  }
}
