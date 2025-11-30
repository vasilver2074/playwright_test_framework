import { Locator, Page } from "@playwright/test";
import { BasePageLocators } from "../BasePage/BasePageLocators";

export class LoginPageLocators extends BasePageLocators {
    
    readonly userNameInputLocator: Locator = this.page.locator("#user-name");
    readonly passwordInputLocator: Locator = this.page.locator("#password");
    readonly loginButtonLocator: Locator = this.page.locator("#login-button");
}