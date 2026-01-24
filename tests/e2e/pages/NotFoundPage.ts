import type { Page, Locator } from '@playwright/test';
import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class NotFoundPage extends BasePage {
  readonly path = '/404';

  constructor(page: Page) {
    super(page);
  }

  // Page-specific elements
  get homeLink(): Locator {
    return this.page.locator('.link-button[href="/"]');
  }

  // Actions
  async goto(): Promise<void> {
    await this.navigate(this.path);
  }

  async clickGoHome(): Promise<void> {
    await this.homeLink.click();
  }

  // Assertions
  async assertHomeLink(): Promise<void> {
    await expect(this.homeLink).toBeVisible();
    await expect(this.homeLink).toContainText('Go Home');
  }
}
