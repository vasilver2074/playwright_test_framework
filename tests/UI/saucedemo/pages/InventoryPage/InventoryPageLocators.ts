import { Locator, Page, expect } from "@playwright/test";
import { BasePageLocators } from "../BasePage/BasePageLocators";

export class InventoryPageLocators extends BasePageLocators {

    readonly addToCartButtonLocator: Locator = this.page.locator('[data-test="add-to-cart"]');
    readonly removeFromCartButtonLocator: Locator = this.page.locator('[data-test="remove"]');
    readonly priceValueLocator: Locator = this.page.locator('[data-test="inventory-item-price"]');
}