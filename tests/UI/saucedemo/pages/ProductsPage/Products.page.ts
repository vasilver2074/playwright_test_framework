import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "../BasePage/BasePage.page";
import { ProductsPageLocators } from "./ProductsPageLocators";

export class ProductsPage extends BasePage {

  readonly locators: ProductsPageLocators = new ProductsPageLocators(this.page.locator('#contents_wrapper'));

  constructor(page: Page) {
    super(page);
  }

  async addToCartByTitle(page: Page, productTitle: string): Promise<void> {

    await page.locator(`#item_${productTitle}_title_link`).click();
    await this.locators.addToCartButtonLocator.click();

  }

  async removeFromCartByTitle(page: Page, productTitle: string): Promise<void> {

    await page.locator(`#item_${productTitle}_title_link`).click();

    await this.locators.removeFromCartButtonLocator.click();

  }

  async getPriceByTitle(page: Page, productTitle: string): Promise<string> {

    await page.locator(`#item_${productTitle}_title_link`).click();
    return await this.locators.priceValueLocator.innerText();

  }
}