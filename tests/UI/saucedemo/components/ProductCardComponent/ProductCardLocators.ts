import { Locator } from "@playwright/test";
import { BasePageLocators } from "../../pages/BasePage/BasePageLocators";

export class ProductCardLocators extends BasePageLocators {

    readonly addToCartButtonLocator: Locator = this.baseLocator.getByRole(
    "button",
    {
      name: "Add to cart",
    }
  );

  readonly removeButtonLocator: Locator = this.baseLocator.getByRole(
    "button",
    {
      name: "Remove",
    }
  );

  readonly imageLocator: Locator = this.baseLocator.locator("img");

  readonly priceLocator: Locator = this.baseLocator.locator(
    '[data-test="inventory-item-price"]'
  );

}