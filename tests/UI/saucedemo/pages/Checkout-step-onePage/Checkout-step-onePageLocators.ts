import { Locator, Page } from "@playwright/test";
import { BasePageLocators } from "../BasePage/BasePageLocators";

export class CheckoutStepOnePageLocators extends BasePageLocators {

    // readonly firstNameInputLocator: Locator = this.baseLocator.locator('#first-name');
    // readonly lastNameInputLocator: Locator = this.baseLocator.locator('#last-name');
    // readonly postalCodeInputLocator: Locator = this.baseLocator.locator('#postal-code');
    // readonly continueButtonLocator: Locator = this.baseLocator.locator('#continue');
    // readonly cancelButtonLocator: Locator = this.baseLocator.locator('#cancel');

    readonly firstNameInput: Locator = this.baseLocator.locator(
        '[data-test="firstName"]'
    );

    readonly lastNameInput: Locator = this.baseLocator.locator(
        '[data-test="lastName"]'
    );

    readonly zipCodeInput: Locator = this.baseLocator.locator(
        '[data-test="postalCode"]'
    );

    readonly continueButton: Locator = this.baseLocator.locator(
        '[data-test="continue"]'
    );

    readonly cancelButton: Locator = this.baseLocator.locator(
        '[data-test="cancel"]'
    );

    readonly errorMessage: Locator = this.baseLocator.locator(
        '[data-test="error"]'
    );

    readonly pageTitle: Locator = this.baseLocator.locator('.title');
}