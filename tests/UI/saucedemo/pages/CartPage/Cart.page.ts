import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage/BasePage.page";
import { CartPageLocators } from "./CartPageLocators";

export class CartPage extends BasePage {

  readonly locators: CartPageLocators = new CartPageLocators(this.page);
  
  constructor(page: Page) {
    super(page);
  }

  async getCartItems(): Promise<string[]> {
    return this.locators.cartItemFieldLocator.allTextContents();
  }

  async checkout(): Promise<void> {
    await this.locators.checkoutButtonLocator.click();
  }

  async continueShopping(): Promise<void> {
    await this.locators.continueShoppingButtonLocator.click();
  }

  async removeFromCartByTitle(productTitle: string): Promise<void> {
    await this.page.locator(`#item_${productTitle}_title_link`).click();
    await this.locators.removeButtonLocator.click();
  }

  async getPriceByTitle(productTitle: string): Promise<string> {
    const productCard = this.page.locator(`.inventory_item:has-text("${productTitle}")`);
    return await productCard.locator('[data-test="inventory-item-price"]').innerText();
  }
}
