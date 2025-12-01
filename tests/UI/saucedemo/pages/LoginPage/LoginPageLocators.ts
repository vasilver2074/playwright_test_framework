import { Locator, Page } from "@playwright/test";
import { BasePageLocators } from "../BasePage/BasePageLocators";

export class LoginPageLocators extends BasePageLocators {

    readonly userNameInputLocator: Locator = this.baseLocator.locator("#user-name");
    readonly passwordInputLocator: Locator = this.baseLocator.locator("#password");
    readonly loginButtonLocator: Locator = this.baseLocator.locator("#login-button");
}