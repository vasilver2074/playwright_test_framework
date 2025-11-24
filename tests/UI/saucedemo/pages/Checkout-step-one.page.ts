import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage.page";

export class CheckoutStepOnePage extends BasePage {

  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly postalCode: Locator;
  readonly continueBtn: Locator;
  readonly buttonCancel: Locator;

  constructor(page: Page) {
    super(page);

    this.firstName = page.locator('#first-name');
    this.lastName = page.locator('#last-name');
    this.postalCode = page.locator('#postal-code');
    this.continueBtn = page.locator('#continue');
    this.buttonCancel = page.locator('#cancel');
  }

  async fillForm(first: string, last: string, zip: string) {
    await this.firstName.fill(first);
    await this.lastName.fill(last);
    await this.postalCode.fill(zip);
    await this.continueBtn.click();
  }

  async cancelCheckout(): Promise<void> {
    await this.buttonCancel.click();
  }

}

// 1) fillFirstName()
// 2) fillLastName()
// 3) fillZipCode()
// 4) continue()
//https://www.saucedemo.com/checkout-step-one.html