import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage.page";

export class CheckoutStepTwoPage extends BasePage {

  readonly buttonFinishLocator: Locator;
  readonly buttonCancelLocator: Locator;
  readonly priceLocator: Locator;

  constructor(page: Page) {
    super(page);

    this.buttonFinishLocator = page.locator('button#finish');
    this.buttonCancelLocator = page.locator('button#cancel');
    this.priceLocator = page.locator('[data-test="inventory-item-price"]');
  }

  async finishCheckout(): Promise<void> {
    await this.buttonFinishLocator.click();
  }

  async cancelCheckout(): Promise<void> {
    await this.buttonCancelLocator.click();
  }

  async getPrice(): Promise<string> {
    return await this.priceLocator.innerText();
  }

}