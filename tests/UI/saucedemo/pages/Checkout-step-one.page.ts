import { Page } from "@playwright/test";

export class CheckoutStepOnePage {
  private page: Page;
  
  constructor(page: Page) {
    this.page = page;
  }


}

// 1) fillFirstName()
// 2) fillLastName()
// 3) fillZipCode()
// 4) continue()