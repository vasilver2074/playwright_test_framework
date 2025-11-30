import { Locator, Page } from "@playwright/test";
import { BasePageLocators } from "../BasePage/BasePageLocators";

export class CheckoutStepTwoPageLocators extends BasePageLocators {

    readonly finishButtonLocator: Locator = this.page.locator('button#finish');
    readonly cancelButtonLocator: Locator = this.page.locator('button#cancel');
    readonly priceValueLocator: Locator = this.page.locator('[data-test="inventory-item-price"]');
}