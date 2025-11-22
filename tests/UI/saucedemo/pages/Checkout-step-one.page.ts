import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage.page";

export class CheckoutStepOnePage extends BasePage {

  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly postalCode: Locator;
  readonly continueBtn: Locator;

  constructor(page: Page) {
    super(page);

    this.firstName = page.locator('input[#first-name]');
    this.lastName = page.locator('input[#last-name]');
    this.postalCode = page.locator('input[#postal-code]');
    this.continueBtn = page.locator('input[#continue]');
  }

  async fillForm(first: string, last: string, zip: string) {
    await this.firstName.fill(first);
    await this.lastName.fill(last);
    await this.postalCode.fill(zip);
    await this.continueBtn.click();
  }


}

// 1) fillFirstName()
// 2) fillLastName()
// 3) fillZipCode()
// 4) continue()
//https://www.saucedemo.com/checkout-step-one.html