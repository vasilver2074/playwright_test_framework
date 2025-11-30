import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage.page";

export class CheckoutStepOnePage extends BasePage {

  readonly firstNameLocator: Locator;
  readonly lastNameLocator: Locator;
  readonly postalCodeLocator: Locator;
  readonly continueBatonLocator: Locator;
  readonly buttonCancelLocator: Locator;
  constructor(page: Page) {
    super(page);

    this.firstNameLocator = page.locator('#first-name');
    this.lastNameLocator = page.locator('#last-name');
    this.postalCodeLocator = page.locator('#postal-code');
    this.continueBatonLocator = page.locator('#continue');
    this.buttonCancelLocator = page.locator('#cancel');
  }

  async fillForm(first: string, last: string, zip: string) {
    await this.firstNameLocator.fill(first);
    await this.lastNameLocator.fill(last);
    await this.postalCodeLocator.fill(zip);
    await this.continueBatonLocator.click();
  }

  async cancelCheckout(): Promise<void> {
    await this.buttonCancelLocator.click();
  }

}