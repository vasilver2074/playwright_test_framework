import { Locator, Page } from "@playwright/test";
import { BasePageLocators } from "../BasePage/BasePageLocators";

export class CartPageLocators extends BasePageLocators {

    readonly removeButtonLocator: Locator = this.baseLocator.getByRole('button', { name: 'Remove' });
    readonly checkoutButtonLocator: Locator = this.baseLocator.getByRole('button', { name: 'Checkout' });
    readonly continueShoppingButtonLocator: Locator = this.baseLocator.locator('button[#continue-shopping]');
    readonly priceValueLocator: Locator = this.baseLocator.locator('[data-test="inventory-item-price"]');
    readonly cartItemFieldLocator: Locator = this.baseLocator.locator('.inventory_item_name');
}