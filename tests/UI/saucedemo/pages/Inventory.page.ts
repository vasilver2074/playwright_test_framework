import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage.page";

export class InventoryPage extends BasePage {

  readonly addToCartButtonLocator: Locator;
  readonly removeFromCartButtonLocator: Locator;
  readonly priceValueLocator: Locator;

  constructor(page: Page) {
    super(page);

    this.addToCartButtonLocator = page.locator('[data-test="add-to-cart"]');
    this.removeFromCartButtonLocator = page.locator('[data-test="remove"]');
    this.priceValueLocator = page.locator('[data-test="inventory-item-price"]');

  }

  async addToCartByTitle(page: Page, productTitle: string): Promise<void> {

    await page.locator(`#item_${productTitle}_title_link`).click();
    await this.addToCartButtonLocator.click();

  }

  async removeFromCartByTitle(page: Page, productTitle: string): Promise<void> {

    await page.locator(`#item_${productTitle}_title_link`).click();

    await this.removeFromCartButtonLocator.click();

  }

  async getPriceByTitle(page: Page, productTitle: string): Promise<string> {

    await page.locator(`#item_${productTitle}_title_link`).click();
    return await this.priceValueLocator.innerText();

  }
}