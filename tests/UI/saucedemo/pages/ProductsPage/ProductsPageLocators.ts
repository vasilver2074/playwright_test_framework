import { Locator, Page, expect } from "@playwright/test";
import { BasePageLocators } from "../BasePage/BasePageLocators";

export class ProductsPageLocators extends BasePageLocators {

    readonly addToCartButtonLocator: Locator = this.baseLocator.locator('[data-test="add-to-cart"]');
    readonly removeFromCartButtonLocator: Locator = this.baseLocator.locator('[data-test="remove"]');
    readonly priceValueLocator: Locator = this.baseLocator.locator('[data-test="inventory-item-price"]');
}