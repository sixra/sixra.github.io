import type { Page, Locator } from '@playwright/test';
import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class AboutPage extends BasePage {
  readonly path = '/about';

  constructor(page: Page) {
    super(page);
  }

  // Page-specific elements
  get heading(): Locator {
    return this.page.getByRole('heading', { name: /About/i, level: 1 });
  }

  get currentWorkHeading(): Locator {
    return this.page.locator('h2#current-work');
  }

  get experienceHeading(): Locator {
    return this.page.locator('h2#experience');
  }

  get contactHeading(): Locator {
    return this.page.locator('h2#contact');
  }

  get contactSocialLinks(): Locator {
    return this.page.locator('#contact .social-links');
  }

  getSocialLink(platform: 'github' | 'linkedin' | 'twitter'): Locator {
    const urls = {
      github: 'https://github.com/sixra',
      linkedin: 'https://www.linkedin.com/in/ratkosimidzija',
      twitter: 'https://x.com/sixra01',
    };
    return this.contactSocialLinks.locator(`a[href="${urls[platform]}"]`);
  }

  // Actions
  async goto(): Promise<void> {
    await this.navigate(this.path);
  }

  // Assertions
  async assertPageLoaded(): Promise<void> {
    await this.assertPageTitle(/About.*Ratko Simidzija/);
    await expect(this.heading).toBeVisible();
  }

  async assertSections(): Promise<void> {
    await expect(this.currentWorkHeading).toContainText("What I'm Working On");
    await expect(this.experienceHeading).toContainText('Background');
    await expect(this.contactHeading).toContainText('Get in Touch');
  }

  async assertWorkExperience(): Promise<void> {
    await expect(this.page.getByText('ePages').first()).toBeVisible();
    await expect(this.page.getByText('DCI Digital Career Institute').first()).toBeVisible();
  }

  async assertSocialLinks(): Promise<void> {
    await expect(this.getSocialLink('github')).toBeVisible();
    await expect(this.getSocialLink('linkedin')).toBeVisible();
    await expect(this.getSocialLink('twitter')).toBeVisible();
  }
}
