import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage.page";

export class CartPage extends BasePage {

  readonly removeButtonLocator: Locator;
  readonly checkoutButtonLocator: Locator;
  readonly continueShoppingButtonLocator: Locator;
  readonly priceValueLocator: Locator;
  readonly cartItemFieldLocator: Locator;


  constructor(page: Page) {
    super(page);
    this.removeButtonLocator = page.getByRole('button', { name: 'Remove' });
    this.checkoutButtonLocator = page.getByRole('button', { name: 'Checkout' });
    this.continueShoppingButtonLocator = page.locator('button[#continue-shopping]');
    this.priceValueLocator = page.locator('[data-test="inventory-item-price"]');
    this.cartItemFieldLocator = page.locator('.inventory_item_name');
  }

  async getCartItems(): Promise<string[]> {
    return this.cartItemFieldLocator.allTextContents();
  }

  async checkout(): Promise<void> {
    await this.checkoutButtonLocator.click();
  }

  async continueShopping(): Promise<void> {
    await this.continueShoppingButtonLocator.click();
  }

  async removeFromCartByTitle(productTitle: string): Promise<void> {
    await this.page.locator(`#item_${productTitle}_title_link`).click();
    await this.removeButtonLocator.click();
  }

  async getPriceByTitle(productTitle: string): Promise<string> {
    const productCard = this.page.locator(`.inventory_item:has-text("${productTitle}")`);
    return await productCard.locator('[data-test="inventory-item-price"]').innerText();
  }
}
