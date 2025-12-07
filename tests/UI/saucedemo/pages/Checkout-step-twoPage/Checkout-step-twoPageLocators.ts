import { Locator, Page } from "@playwright/test";
import { BasePageLocators } from "../BasePage/BasePageLocators";

export class CheckoutStepTwoPageLocators extends BasePageLocators {

    // readonly finishButtonLocator: Locator = this.baseLocator.locator('button#finish');
    // readonly cancelButtonLocator: Locator = this.baseLocator.locator('button#cancel');
    // readonly priceValueLocator: Locator = this.baseLocator.locator('[data-test="inventory-item-price"]');

    readonly pageTitle: Locator = this.baseLocator.locator('.title');

  readonly paymentInfoLabel: Locator = this.baseLocator.locator(
    '[data-test="payment-info-label"]'
  );
  
  readonly paymentInfoValue: Locator = this.baseLocator.locator(
    '[data-test="payment-info-value"]'
  );

  readonly shippingInfoLabel: Locator = this.baseLocator.locator(
    '[data-test="shipping-info-label"]'
  );
  
  readonly shippingInfoValue: Locator = this.baseLocator.locator(
    '[data-test="shipping-info-value"]'
  );

  readonly subtotalLabel: Locator = this.baseLocator.locator(
    '[data-test="subtotal-label"]'
  );

  readonly taxLabel: Locator = this.baseLocator.locator(
    '[data-test="tax-label"]'
  );

  readonly totalLabel: Locator = this.baseLocator.locator(
    '[data-test="total-label"]'
  );

  readonly finishButton: Locator = this.baseLocator.locator(
    '[data-test="finish"]'
  );

  readonly cancelButton: Locator = this.baseLocator.locator(
    '[data-test="cancel"]'
  );

  readonly cartItems: Locator = this.baseLocator.locator(
    '[data-test="inventory-item"]'
  );

  // Методи для отримання інформації про конкретний продукт
  getCartItemLocator(productName: string): Locator {
    return this.baseLocator.locator('[data-test="inventory-item"]').filter({
      hasText: productName
    });
  }

  getProductPriceLocator(productName: string): Locator {
    return this.getCartItemLocator(productName).locator(
      '[data-test="inventory-item-price"]'
    );
  }

  getProductQuantityLocator(productName: string): Locator {
    return this.getCartItemLocator(productName).locator('.cart_quantity');
  }
}