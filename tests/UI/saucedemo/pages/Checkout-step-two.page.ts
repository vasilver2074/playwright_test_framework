import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage.page";

export class CheckoutStepTwoPage extends BasePage {

  readonly buttonFinish: Locator;
  readonly buttonCancel: Locator;
  readonly price: Locator;

  constructor(page: Page) {
    super(page);

    this.buttonFinish = page.locator('button[#finish]');
    this.buttonCancel = page.locator('button[#cancel]');
    this.price = page.locator('[data-test="inventory-item-price"]');
  }

  async finishCheckout(): Promise<void> {
    await this.buttonFinish.click();
  }

  async cancelCheckout(): Promise<void> {
    await this.buttonCancel.click();
  }

  async getPrice(): Promise<string> {
    return await this.price.innerText();
  }

}