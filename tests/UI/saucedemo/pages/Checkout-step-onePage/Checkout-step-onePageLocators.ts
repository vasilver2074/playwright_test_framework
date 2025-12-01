import { Locator, Page } from "@playwright/test";
import { BasePageLocators } from "../BasePage/BasePageLocators";

export class CheckoutStepOnePageLocators extends BasePageLocators {

    readonly firstNameInputLocator: Locator = this.baseLocator.locator('#first-name');
    readonly lastNameInputLocator: Locator = this.baseLocator.locator('#last-name');
    readonly postalCodeInputLocator: Locator = this.baseLocator.locator('#postal-code');
    readonly continueButtonLocator: Locator = this.baseLocator.locator('#continue');
    readonly cancelButtonLocator: Locator = this.baseLocator.locator('#cancel');
}