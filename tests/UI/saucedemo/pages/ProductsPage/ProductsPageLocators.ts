import { Locator, Page, expect } from "@playwright/test";
import { BasePageLocators } from "../BasePage/BasePageLocators";

export class ProductsPageLocators extends BasePageLocators {

  // readonly addToCartButtonLocator: Locator = this.baseLocator.locator('[data-test="add-to-cart"]');
  // readonly removeFromCartButtonLocator: Locator = this.baseLocator.locator('[data-test="remove"]');
  // readonly priceValueLocator: Locator = this.baseLocator.locator('[data-test="inventory-item-price"]');

  readonly burgerMenuLocator: Locator = this.baseLocator.locator(
    "#react-burger-menu-btn"
  );

  readonly shoppingCartBadge: Locator = this.baseLocator.locator(
    ".shopping_cart_badge"
  );

  readonly shoppingCartLink: Locator = this.baseLocator.locator(
    ".shopping_cart_link"
  );

  getProductItemLocator(productName: string): Locator {
    return this.baseLocator.locator(`[data-test="inventory-item"]`).filter({
      hasText: productName
    });
  }

  getAddToCartButtonLocator(productName: string): Locator {
    const productId = productName.toLowerCase().replace(/\s+/g, "-");
    return this.baseLocator.locator(`[data-test="add-to-cart-${productId}"]`);
  }

  getRemoveButtonLocator(productName: string): Locator {
    const productId = productName.toLowerCase().replace(/\s+/g, "-");
    return this.baseLocator.locator(`[data-test="remove-${productId}"]`);
  }


  getPriceLocator(productName: string): Locator {
    return this.getProductItemLocator(productName).locator(
      `[data-test="inventory-item-price"]`
    );
  }

  getProductNameLocator(productName: string): Locator {
    return this.getProductItemLocator(productName).locator(
      `[data-test="inventory-item-name"]`
    );
  }

  getProductDescriptionLocator(productName: string): Locator {
    return this.getProductItemLocator(productName).locator(
      `[data-test="inventory-item-desc"]`
    );
  }

  getProductImageLocator(productName: string): Locator {
    return this.getProductItemLocator(productName).locator("img");
  }


}