import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage.page";

export class InventoryPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  async addItemToCart() {
    const addCartButton = this.page.locator(
      "[data-test='add-to-cart-sauce-labs-backpack']"
    );
    const isEnabled = await addCartButton.isEnabled();
    await expect(isEnabled).toBeTruthy();
    await addCartButton.click();
  }
  async clickInventory() {
    const isVisible = await this.page
      .locator("[data-test='inventory-item-name']")
      .first()
      .isVisible();
    expect(isVisible).toBeTruthy();
  }
  async openCart() {
    await this.page.click(".shopping_cart_link");
  }
}

// 1) addToCartByTitle()
// 2) removeFromCartByTitle()
// 3) getPriceByTitle()