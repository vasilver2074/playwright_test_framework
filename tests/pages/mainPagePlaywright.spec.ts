import { test, expect, Page, Locator } from "@playwright/test";

interface Elements{
  locator: (page: Page) => Locator;
  name: string;
  text?: string;
  attribute?: {
    type: string;
    value: string;
  };
}

const elements: Elements[] = [
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
    locator: (page: Page): Locator => page.getByRole("link", { name: "Docs" }),
    name: "Docs link",
    text: "Docs",
    attribute: {
      type: "href",
      value: "/docs/intro",
    },
  },
  {
    locator: (page: Page): Locator => page.getByRole("link", { name: "API" }),
    name: "API link",
    text: "API",
    attribute: {
      type: "href",
      value: "/docs/api/class-playwright",
    },
  },
  {
    locator: (page: Page): Locator => page.getByRole("button", { name: "Node.js" }),
    name: "Node.js button",
    text: "Node.js",
  },
  {
    locator: (page: Page): Locator => page.getByRole("link", { name: "Community" }),
    name: "Community link",
    text: "Community",
    attribute: {
      type: "href",
      value: "/community/welcome",
    },
  },
  {
    locator: (page: Page): Locator => page.getByRole("link", { name: "GitHub repository" }),
    name: "GitHub icon",
    attribute: {
      type: "href",
      value: "https://github.com/microsoft/playwright",
    },
  },
  {
    locator: (page: Page): Locator => page.getByRole("link", { name: "Discord server" }),
    name: "Discord icon",
    attribute: {
      type: "href",
      value: "https://aka.ms/playwright/discord",
    },
  },
  {
    locator: (page: Page): Locator =>
      page.getByRole("button", { name: "Switch between dark and light" }),
    name: "Lightmode button",
  },
  {
    locator: (page: Page): Locator => page.getByRole("button", { name: "Search (Ctrl+K)" }),
    name: "Search input",
  },
  {
    locator: (page: Page): Locator => page.getByRole("heading", { name: "Playwright enables reliable" }),
    name: "Title",
    text: "Playwright enables reliable end-to-end testing for modern web apps.",
  },
  {
    locator: (page: Page): Locator => page.getByRole("link", { name: "Get started" }),
    name: "Get started button",
    text: "Get started",
    attribute: {
      type: "href",
      value: "/docs/intro",
    },
  },
];

test.describe("Main Page tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://playwright.dev/");
  });
  test("Verify element navigation displaying for header", async ({ page }) => {
    elements.forEach(({ locator, name }) => {
      test.step(`Verify displaying Playwright ${name}`, async () => {
        await expect.soft(locator(page)).toBeVisible();
      });
    });
  });

  test("Verify element navigation name for header", async ({ page }) => {
    elements.forEach(({ locator, name, text }) => {
      if (text) {
        test.step(`Verify element's name of ${name}`, async () => {
          await expect.soft(locator(page)).toContainText(text);
        });
      }
    });
  });

  test("Verify element navigation attributes href for header", async ({
    page,
  }) => {
    elements.forEach(({ locator, name, attribute }) => {
      if (attribute) {
        test.step(`Verify element's attribute href for ${name}`, async () => {
          await expect
            .soft(locator(page))
            .toHaveAttribute(attribute?.type, attribute?.value);
        });
      }
    });
  });

  test("Verify light mode switching for header", async ({ page }) => {
    await page
      .getByRole("button", { name: "Switch between dark and light" })
      .click();
    await expect
      .soft(page.getByRole("button", { name: "Switch between dark and light" }))
      .toHaveAttribute("title", "light mode");
      await expect(page).toHaveScreenshot(`pageWithLightMode.png`);
  });

  test("Verify dark mode switching for header", async ({ page }) => {
    await page
      .getByRole("button", { name: "Switch between dark and light" })
      .dblclick();
    await expect
      .soft(page.locator(".toggle_vylO.colorModeToggle_DEke > button"))
      .toHaveAttribute("title", "dark mode");
      await expect(page).toHaveScreenshot(`pageWithDarkMode.png`);
  });
});
