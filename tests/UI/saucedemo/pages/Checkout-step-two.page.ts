import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage.page";

export class CheckoutStepTwoPage extends BasePage {

  readonly finishButtonLocator: Locator;
  readonly cancelButtonLocator: Locator;
  readonly priceValueLocator: Locator;

  constructor(page: Page) {
    super(page);

    this.finishButtonLocator = page.locator('button#finish');
    this.cancelButtonLocator = page.locator('button#cancel');
    this.priceValueLocator = page.locator('[data-test="inventory-item-price"]');
  }

  async finishCheckout(): Promise<void> {
    await this.finishButtonLocator.click();
  }

  async cancelCheckout(): Promise<void> {
    await this.cancelButtonLocator.click();
  }

  async getPrice(): Promise<string> {
    return await this.priceValueLocator.innerText();
  }

}