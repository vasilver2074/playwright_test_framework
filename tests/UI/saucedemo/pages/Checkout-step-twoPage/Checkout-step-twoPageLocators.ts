import { Locator, Page } from "@playwright/test";
import { BasePageLocators } from "../BasePage/BasePageLocators";

export class CheckoutStepTwoPageLocators extends BasePageLocators {

    readonly finishButtonLocator: Locator = this.baseLocator.locator('button#finish');
    readonly cancelButtonLocator: Locator = this.baseLocator.locator('button#cancel');
    readonly priceValueLocator: Locator = this.baseLocator.locator('[data-test="inventory-item-price"]');
}