import type { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly path = '/';

  constructor(page: Page) {
    super(page);
  }

  // Actions
  async goto(): Promise<void> {
    await this.navigate(this.path);
  }

  // Assertions
  async assertPageLoaded(): Promise<void> {
    await this.assertPageTitle(/Ratko Simidzija/);
    await this.assertCommonElements();
  }
}
