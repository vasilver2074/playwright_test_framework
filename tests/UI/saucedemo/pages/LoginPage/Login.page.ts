import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage/BasePage.page";
import { LoginPageLocators } from "./LoginPageLocators";

export class LoginPage extends BasePage {
  readonly locators: LoginPageLocators = new LoginPageLocators(this.page);

  constructor(page: Page) {
    super(page);
  }

  async login(username: string, password: string): Promise<void> {
    await this.locators.userNameInputLocator.fill(username);
    await this.locators.passwordInputLocator.fill(password);
    await this.locators.loginButtonLocator.click();
  }
}
