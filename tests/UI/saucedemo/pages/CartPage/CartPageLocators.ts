import { Locator, Page } from "@playwright/test";
import { BasePageLocators } from "../BasePage/BasePageLocators";

export class CartPageLocators extends BasePageLocators {

    readonly removeButtonLocator: Locator = this.page.getByRole('button', { name: 'Remove' });
    readonly checkoutButtonLocator: Locator = this.page.getByRole('button', { name: 'Checkout' });
    readonly continueShoppingButtonLocator: Locator = this.page.locator('button[#continue-shopping]');
    readonly priceValueLocator: Locator = this.page.locator('[data-test="inventory-item-price"]');
    readonly cartItemFieldLocator: Locator = this.page.locator('.inventory_item_name');

}