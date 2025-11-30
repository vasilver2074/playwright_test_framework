import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage.page";

export class CheckoutStepOnePage extends BasePage {

  readonly firstNameInputLocator: Locator;
  readonly lastNameInputLocator: Locator;
  readonly postalCodeInputLocator: Locator;
  readonly continueButtonLocator: Locator;
  readonly cancelButtonLocator: Locator;
  constructor(page: Page) {
    super(page);

    this.firstNameInputLocator = page.locator('#first-name');
    this.lastNameInputLocator = page.locator('#last-name');
    this.postalCodeInputLocator = page.locator('#postal-code');
    this.continueButtonLocator = page.locator('#continue');
    this.cancelButtonLocator = page.locator('#cancel');
  }

  async fillForm(first: string, last: string, zip: string) {
    await this.firstNameInputLocator.fill(first);
    await this.lastNameInputLocator.fill(last);
    await this.postalCodeInputLocator.fill(zip);
    await this.continueButtonLocator.click();
  }

  async cancelCheckout(): Promise<void> {
    await this.cancelButtonLocator.click();
  }

}