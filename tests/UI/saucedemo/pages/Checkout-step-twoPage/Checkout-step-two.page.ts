import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage/BasePage.page";
import { CheckoutStepTwoPageLocators } from "./Checkout-step-twoPageLocators";

export class CheckoutStepTwoPage extends BasePage {

  readonly locators: CheckoutStepTwoPageLocators = new CheckoutStepTwoPageLocators(this.page.locator('#contents_wrapper'));

  constructor(page: Page) {
    super(page);
  }

  async finishCheckout(): Promise<void> {
    await this.locators.finishButtonLocator.click();
  }

  async cancelCheckout(): Promise<void> {
    await this.locators.cancelButtonLocator.click();
  }

  async getPrice(): Promise<string> {
    return await this.locators.priceValueLocator.innerText();
  }

}