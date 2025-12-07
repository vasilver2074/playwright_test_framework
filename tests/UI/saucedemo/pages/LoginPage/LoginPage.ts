import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage/BasePage.page";
import { LoginPageLocators } from "./LoginPageLocators";

export class LoginPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  // async login(username: string, password: string): Promise<void> {
  //   await this.locators.userNameInputLocator.fill(username);
  //   await this.locators.passwordInputLocator.fill(password);
  //   await this.locators.loginButtonLocator.click();
  // }

  readonly locators: LoginPageLocators = new LoginPageLocators(
    this.page.locator('[data-test="login-container"]')
  );

  async fillUsername(username: string): Promise<void> {
    await this.locators.userNameInputLocator.fill(username);
  }

  async fillPassword(password: string): Promise<void> {
    await this.locators.passwordInputLocator.fill(password);
  }

  async clickLogin(): Promise<void> {
    await this.locators.loginButtonLocator.click();
  }
}
