import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage.page";

export class CartPage extends BasePage {

  readonly remoeButton: Locator
  readonly checkoutButton: Locator;
  readonly continueShoppingButton: Locator;
  readonly price: Locator;

  constructor(page: Page) {
    super(page);
    this.remoeButton = page.getByRole('button', { name: 'Remove' });
    this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
    this.continueShoppingButton = page.locator('button[#continue-shopping]');
    this.price = page.locator('[data-test="inventory-item-price"]');
  }

  async getCartItems(): Promise<string[]> {
    return this.page.locator(".inventory_item_name ").allTextContents();
  }

  async checkout(): Promise<void> {
    await this.checkoutButton.click();
  }

  async continueShopping(): Promise<void> {
    await this.continueShoppingButton.click();
  }

  async removeFromCartByTitle(productTitle: string): Promise<void> {
    await this.page.locator(`#item_${productTitle}_title_link`).click();
    await this.remoeButton.click();
  }

  async getPriceByTitle(productTitle: string): Promise<string> {
    const productCard = this.page.locator(`.inventory_item:has-text("${productTitle}")`);
    return await productCard.locator('[data-test="inventory-item-price"]').innerText();
  }
}
