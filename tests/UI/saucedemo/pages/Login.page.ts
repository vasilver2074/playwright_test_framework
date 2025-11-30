import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage.page";

export class LoginPage extends BasePage {
  readonly userNameLocator: Locator;
  readonly passwordLocator: Locator;
  readonly loginButtonLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.userNameLocator = page.locator("#user-name");
    this.passwordLocator = page.locator("#password");
    this.loginButtonLocator = page.locator("#login-button");
  }

  async login(username: string, password: string) : Promise<void> {
    await this.userNameLocator.fill(username);
    await this.passwordLocator.fill(password);
    await this.loginButtonLocator.click();
  }
}
