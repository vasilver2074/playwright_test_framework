import { Page } from "@playwright/test";
import { BasePage } from "./BasePage.page";

export class CheckoutStepTwoPage extends BasePage {

  constructor(page: Page) {
    super(page);

    page.locator('button[#finish]');
    page.locator('button[#cancel]');
    page.locator('[data-test="inventory-item-price"]');
  }
  

}