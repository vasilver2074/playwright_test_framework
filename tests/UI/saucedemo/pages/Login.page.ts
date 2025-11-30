import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage.page";

export class LoginPage extends BasePage {
  readonly userNameInputLocator: Locator;
  readonly passwordInputLocator: Locator;
  readonly loginButtonLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.userNameInputLocator = page.locator("#user-name");
    this.passwordInputLocator = page.locator("#password");
    this.loginButtonLocator = page.locator("#login-button");
  }

  async login(username: string, password: string) : Promise<void> {
    await this.userNameInputLocator.fill(username);
    await this.passwordInputLocator.fill(password);
    await this.loginButtonLocator.click();
  }
}
