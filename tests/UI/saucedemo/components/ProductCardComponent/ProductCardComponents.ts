import { Locator, Page } from "@playwright/test";
import { BaseComponents } from "../BaseComponents";
import { ProductCardLocators } from "./ProductCardLocators";

export class ProductCardComponents extends BaseComponents {
    locators: ProductCardLocators = new ProductCardLocators(this.baseLocator);

    // constructor(locator: Locator) {
    //     super(locator);
    // }



    async clickAddToCart() {
        await this.locators.addToCartButtonLocator.click();
    }

    async getImage() { }

    async getPrice() { }

    async clickRemove() { }
}