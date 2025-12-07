import { Locator, Page } from "@playwright/test";
import { BasePageLocators } from "../BasePage/BasePageLocators";

export class LoginPageLocators extends BasePageLocators {

    // readonly userNameInputLocator: Locator = this.baseLocator.locator("#user-name");
    // readonly passwordInputLocator: Locator = this.baseLocator.locator("#password");
    // readonly loginButtonLocator: Locator = this.baseLocator.locator("#login-button");

    readonly userNameInputLocator: Locator = this.baseLocator.getByRole(
        "textbox",
        {
            name: "Username",
        }
    );

    readonly passwordInputLocator: Locator = this.baseLocator.getByRole(
        "textbox",
        {
            name: "Password",
        }
    );

    readonly loginButtonLocator: Locator = this.baseLocator.getByRole("button", {
        name: "Login",
    });

    readonly errorMessageLocator: Locator = this.baseLocator.locator(
        ".error-message-container h3"
    );
}