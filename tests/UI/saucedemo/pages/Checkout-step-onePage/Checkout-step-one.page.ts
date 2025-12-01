import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage/BasePage.page";
import { CheckoutStepOnePageLocators } from "./Checkout-step-onePageLocators";

export class CheckoutStepOnePage extends BasePage {

  readonly locators: CheckoutStepOnePageLocators = new CheckoutStepOnePageLocators(this.page.locator('#contents_wrapper'));

  constructor(page: Page) {
    super(page);
  }

  async fillForm(first: string, last: string, zip: string) {
    await this.locators.firstNameInputLocator.fill(first);
    await this.locators.lastNameInputLocator.fill(last);
    await this.locators.postalCodeInputLocator.fill(zip);
    await this.locators.continueButtonLocator.click();
  }

  async cancelCheckout(): Promise<void> {
    await this.locators.cancelButtonLocator.click();
  }

}