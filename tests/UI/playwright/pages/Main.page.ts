import test, { expect, Locator, Page } from "@playwright/test";

interface Elements {
  locator: (page: Page) => Locator;
  name: string;
  text?: string;
  attribute?: {
    type: string;
    value: string;
  };
}

export class MainPage {
  readonly page: Page;
  readonly elements: Elements[];

  constructor(page: Page) {
    this.page = page;
    this.elements = [
      {
        locator: (page: Page): Locator =>
          page.getByRole("link", { name: "Playwright logo" }),
        name: "Logo link",
        text: "Playwright",
        attribute: {
          type: "href",
          value: "/",
        },
      },
      {
        locator: (page: Page): Locator =>
          page.getByRole("link", { name: "Docs" }),
        name: "Docs link",
        text: "Docs",
        attribute: {
          type: "href",
          value: "/docs/intro",
        },
      },
      {
        locator: (page: Page): Locator =>
          page.getByRole("link", { name: "API" }),
        name: "API link",
        text: "API",
        attribute: {
          type: "href",
          value: "/docs/api/class-playwright",
        },
      },
      {
        locator: (page: Page): Locator =>
          page.getByRole("button", { name: "Node.js" }),
        name: "Node.js button",
        text: "Node.js",
      },
      {
        locator: (page: Page): Locator =>
          page.getByRole("link", { name: "Community" }),
        name: "Community link",
        text: "Community",
        attribute: {
          type: "href",
          value: "/community/welcome",
        },
      },
      {
        locator: (page: Page): Locator =>
          page.getByRole("link", { name: "GitHub repository" }),
        name: "GitHub icon",
        attribute: {
          type: "href",
          value: "https://github.com/microsoft/playwright",
        },
      },
      {
        locator: (page: Page): Locator =>
          page.getByRole("link", { name: "Discord server" }),
        name: "Discord icon",
        attribute: {
          type: "href",
          value: "https://aka.ms/playwright/discord",
        },
      },
      {
        locator: (page: Page): Locator =>
          page.getByRole("button", { name: "Switch between dark and light" }),
        name: "LightMode button",
      },
      {
        locator: (page: Page): Locator =>
          page.getByRole("button", { name: "Search (Ctrl+K)" }),
        name: "Search input",
      },
      {
        locator: (page: Page): Locator =>
          page.getByRole("heading", { name: "Playwright enables reliable" }),
        name: "Title",
        text: "Playwright enables reliable end-to-end testing for modern web apps.",
      },
      {
        locator: (page: Page): Locator =>
          page.getByRole("link", { name: "Get started" }),
        name: "Get started button",
        text: "Get started",
        attribute: {
          type: "href",
          value: "/docs/intro",
        },
      },
    ];
  }

  async openMainPage(): Promise<void> {
    await this.page.goto("https://playwright.dev/");
  }

  async checkElementsVisibility() : Promise<void> {
    for (const { locator, name } of this.elements) {
      await test.step(`Verify displaying Playwright ${name}`, async () => {
        await expect.soft(locator(this.page)).toBeVisible();
      });
    }
  }

  async checkElementsText(): Promise<void> {
    for (const { locator, name, text } of this.elements) {
      if (text) {
        await test.step(`Verify element's name of ${name}`, async () => {
          await expect.soft(locator(this.page)).toContainText(text);
        });
      }
    }
  }

  async checkElementsHrefAttribute(): Promise<void> {
    for (const { locator, name, attribute } of this.elements) {
      if (attribute) {
        if (attribute) {
          await test.step(`Verify element's attribute href for ${name}`, async () => {
            await expect
              .soft(locator(this.page))
              .toHaveAttribute(attribute?.type, attribute?.value);
          });
        }
      }
    }
  }

  async clickSwitchLightModeButton(): Promise<void> {
    await this.page
      .getByRole("button", { name: "Switch between dark and light" })
      .click();
  }

  async doubleClickSwitchDarkModeButton(): Promise<void> {
    await this.page
      .getByRole("button", { name: "Switch between dark and light" })
      .dblclick();
  }

  async checkLightThemeAttributesValue(): Promise<void> {
    await expect
      .soft(this.page.getByRole("button", { name: "Switch between dark and light" }))
      .toHaveAttribute("title", "light mode");
  }

  async checkDarkThemeAttributesValue(): Promise<void> {
    await expect
      .soft(this.page.getByRole("button", { name: "Switch between dark and light" }))
      .toHaveAttribute("title", "dark mode");
  }

  async checkLayoutWithLightMode(): Promise<void> {
    await expect(this.page).toHaveScreenshot(`pageWithLightMode.png`);
  }

  async checkLayoutWithDarkMode(): Promise<void> {
    await expect(this.page).toHaveScreenshot(`pageWithDarkMode.png`);
  }
}
