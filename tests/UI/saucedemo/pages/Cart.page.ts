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
}

// 1) removeFromCartByTitle()
// 2) getPriceByTitle()
// 3) checkout()
// 4) continueShopping()
