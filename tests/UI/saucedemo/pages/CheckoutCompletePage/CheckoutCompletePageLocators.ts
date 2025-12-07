
import { Locator } from "@playwright/test";
import { BasePageLocators } from "../BasePage/BasePageLocators";

export class CheckoutCompleteLocators extends BasePageLocators {
  readonly pageTitle: Locator = this.baseLocator.locator('.title');

  // Success message
  readonly completeHeader: Locator = this.baseLocator.locator(
    '[data-test="complete-header"]'
  );

  readonly completeText: Locator = this.baseLocator.locator(
    '[data-test="complete-text"]'
  );

  // Success image/icon
  readonly ponyExpressImage: Locator = this.baseLocator.locator(
    '[data-test="pony-express"]'
  );

  // Back Home button
  readonly backHomeButton: Locator = this.baseLocator.locator(
    '[data-test="back-to-products"]'
  );
}
