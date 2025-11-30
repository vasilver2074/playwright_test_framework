import { Locator, Page } from "@playwright/test";
import { BasePageLocators } from "../BasePage/BasePageLocators";

export class CheckoutStepOnePageLocators extends BasePageLocators {

    readonly firstNameInputLocator: Locator = this.page.locator('#first-name');
    readonly lastNameInputLocator: Locator = this.page.locator('#last-name');
    readonly postalCodeInputLocator: Locator = this.page.locator('#postal-code');
    readonly continueButtonLocator: Locator = this.page.locator('#continue');
    readonly cancelButtonLocator: Locator = this.page.locator('#cancel');
}