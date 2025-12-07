import { Locator, Page } from "@playwright/test";
import { BasePageLocators } from "../BasePage/BasePageLocators";

export class CartPageLocators extends BasePageLocators {

    // readonly removeButtonLocator: Locator = this.baseLocator.getByRole('button', { name: 'Remove' });
    // readonly checkoutButtonLocator: Locator = this.baseLocator.getByRole('button', { name: 'Checkout' });
    // readonly continueShoppingButtonLocator: Locator = this.baseLocator.locator('button[#continue-shopping]');
    // readonly priceValueLocator: Locator = this.baseLocator.locator('[data-test="inventory-item-price"]');
    // readonly cartItemFieldLocator: Locator = this.baseLocator.locator('.inventory_item_name');

    readonly checkoutButton: Locator = this.baseLocator.locator(
        '[data-test="checkout"]'
    );

    readonly continueShoppingButton: Locator = this.baseLocator.locator(
        '[data-test="continue-shopping"]'
    );

    readonly shoppingCartBadge: Locator = this.baseLocator.locator(
        ".shopping_cart_badge"
    );

    readonly cartTitle: Locator = this.baseLocator.locator(
        '.title'
    );


    getCartItemLocator(productName: string): Locator {
        return this.baseLocator.locator('[data-test="inventory-item"]').filter({
            hasText: productName
        });
    }

    getRemoveButtonLocator(productName: string): Locator {
        const productId = productName.toLowerCase().replace(/\s+/g, "-");
        return this.baseLocator.locator(`[data-test="remove-${productId}"]`);
    }

    getPriceLocator(productName: string): Locator {
        return this.getCartItemLocator(productName).locator(
            '[data-test="inventory-item-price"]'
        );
    }

    getProductNameLocator(productName: string): Locator {
        return this.getCartItemLocator(productName).locator(
            '[data-test="inventory-item-name"]'
        );
    }

    getProductQuantityLocator(productName: string): Locator {
        return this.getCartItemLocator(productName).locator(
            '.cart_quantity'
        );
    }
}