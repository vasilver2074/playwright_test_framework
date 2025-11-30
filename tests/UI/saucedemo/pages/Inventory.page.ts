import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage.page";

export class InventoryPage extends BasePage {

  readonly addToCartButtonLocator: Locator;

  constructor(page: Page) {
    super(page);

    this.addToCartButtonLocator = page.locator('[data-test="add-to-cart"]');

  }

  async addToCartByTitle(page: Page, productTitle: string): Promise<void> {

    await page.locator(`#item_${productTitle}_title_link`).click();
    await this.addToCartButtonLocator.click();

  }

  async removeFromCartByTitle(page: Page, productTitle: string): Promise<void> {

    await page.locator(`#item_${productTitle}_title_link`).click();

    const removeFromCartButton = page.locator('[data-test="remove"]');
    await removeFromCartButton.click();

  }

  async getPriceByTitle(page: Page, productTitle: string): Promise<string> {

    await page.locator(`#item_${productTitle}_title_link`).click();
    return await page.locator('[data-test="inventory-item-price"]').innerText();

  }
}