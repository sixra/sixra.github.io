import type { Page, Locator } from '@playwright/test';
import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class FaqPage extends BasePage {
  readonly path = '/faq';

  constructor(page: Page) {
    super(page);
  }

  // Page-specific elements
  get heading(): Locator {
    return this.page.getByRole('heading', { name: /frequently asked questions/i, level: 1 });
  }

  get subtitle(): Locator {
    return this.page.locator('p.text-xl').first();
  }

  get technicalCategory(): Locator {
    return this.page.getByRole('heading', { name: /technical skills/i, level: 2 });
  }

  get experienceCategory(): Locator {
    return this.page.getByRole('heading', { name: /experience.*background/i, level: 2 });
  }

  get generalCategory(): Locator {
    return this.page.getByRole('heading', { name: /collaboration.*networking/i, level: 2 });
  }

  getFaqItem(id: string): Locator {
    return this.page.locator(`details#${id}`);
  }

  getFaqSummary(id: string): Locator {
    return this.page.locator(`details#${id} summary`);
  }

  getFaqAnswer(id: string): Locator {
    return this.page.locator(`details#${id} div`);
  }

  // Actions
  async goto(): Promise<void> {
    await this.navigate(this.path);
  }

  async openFaqItem(id: string): Promise<void> {
    const summary = this.getFaqSummary(id);
    await summary.click();
  }

  // Assertions
  async assertPageLoaded(): Promise<void> {
    await this.assertPageTitle(/FAQ/i);
    await this.assertCommonElements();
    await expect(this.heading).toBeVisible();
  }

  async assertFaqItemVisible(id: string): Promise<void> {
    await expect(this.getFaqItem(id)).toBeVisible();
  }

  async assertFaqItemOpen(id: string): Promise<void> {
    const faqItem = this.getFaqItem(id);
    await expect(faqItem).toHaveAttribute('open');
  }

  async assertFaqItemClosed(id: string): Promise<void> {
    const faqItem = this.getFaqItem(id);
    await expect(faqItem).not.toHaveAttribute('open');
  }

  async assertAllCategoriesVisible(): Promise<void> {
    await expect(this.technicalCategory).toBeVisible();
    await expect(this.experienceCategory).toBeVisible();
    await expect(this.generalCategory).toBeVisible();
  }
}
