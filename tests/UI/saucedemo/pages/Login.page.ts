import { Page } from "@playwright/test";
import { BasePage } from "./BasePage.page";

export class LoginPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  async login(username: string, password: string) : Promise<void> {
    await this.page.fill("#user-name", username);
    await this.page.fill("#password", password);
    await this.page.click("#login-button");
  }
}
