import type { Page, Locator } from '@playwright/test';
import { expect } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  // Common elements across all pages
  get header(): Locator {
    return this.page.locator('header');
  }

  get footer(): Locator {
    return this.page.locator('footer');
  }

  get skipLink(): Locator {
    return this.header.getByRole('link', { name: 'Skip to content' });
  }

  get logo(): Locator {
    return this.page.locator('.site-logo');
  }

  // Navigation links
  get aboutLink(): Locator {
    return this.header.getByRole('link', { name: 'About' });
  }

  get contactLink(): Locator {
    return this.header.getByRole('link', { name: 'Contact' });
  }

  get faqLink(): Locator {
    return this.header.getByRole('link', { name: 'FAQ' });
  }

  // Common actions
  async navigate(path: string): Promise<void> {
    await this.page.goto(path);
  }

  // Common assertions
  async assertPageTitle(pattern: string | RegExp): Promise<void> {
    await expect(this.page).toHaveTitle(pattern);
  }

  async assertMetaDescription(): Promise<void> {
    const metaDescription = this.page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute('content', /.+/);
  }

  async assertLangAttribute(): Promise<void> {
    const html = this.page.locator('html');
    await expect(html).toHaveAttribute('lang', 'en');
  }

  async assertCommonElements(): Promise<void> {
    await expect(this.header).toBeVisible();
    await expect(this.footer).toBeVisible();
  }
}
