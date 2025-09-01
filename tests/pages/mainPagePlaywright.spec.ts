import { test, expect } from "@playwright/test";

test.describe("New Todo", () => {
  test("Verify element navigation displaying for header", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await expect
      .soft(page.getByRole("link", { name: "Playwright logo Playwright" }))
      .toBeVisible();
    await expect.soft(page.getByRole("link", { name: "Docs" })).toBeVisible();
    await expect.soft(page.getByRole("link", { name: "API" })).toBeVisible();
    await expect
      .soft(page.getByRole("button", { name: "Node.js" }))
      .toBeVisible();
    await expect
      .soft(page.getByRole("link", { name: "Community" }))
      .toBeVisible();
    await expect
      .soft(page.getByRole("link", { name: "GitHub repository" }))
      .toBeVisible();
    await expect
      .soft(page.getByRole("link", { name: "Discord server" }))
      .toBeVisible();
    await expect
      .soft(page.getByRole("button", { name: "Switch between dark and light" }))
      .toBeVisible();
    await expect
      .soft(page.getByRole("button", { name: "Search (Ctrl+K)" }))
      .toBeVisible();
  });

  test("Verify element navigation name for header", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await expect
      .soft(page.getByRole("link", { name: "Playwright logo Playwright" }))
      .toContainText("Playwright");
    await expect
      .soft(page.getByRole("link", { name: "Docs" }))
      .toContainText("Docs");
    await expect
      .soft(page.getByRole("link", { name: "API" }))
      .toContainText("API");
    await expect
      .soft(page.getByRole("button", { name: "Node.js" }))
      .toContainText("Node.js");
    await expect
      .soft(page.getByRole("link", { name: "Community" }))
      .toContainText("Community");
  });

  test("Verify element navigation attributes href for header", async ({
    page,
  }) => {
    await page.goto("https://playwright.dev/");
    await expect
      .soft(page.getByRole("link", { name: "Playwright logo Playwright" }))
      .toHaveAttribute("href", "/");
    await expect
      .soft(page.getByRole("link", { name: "Docs" }))
      .toHaveAttribute("href", "/docs/intro");
    await expect
      .soft(page.getByRole("link", { name: "API" }))
      .toHaveAttribute("href", "/docs/api/class-playwright");
    await expect
      .soft(page.getByRole("link", { name: "Community" }))
      .toHaveAttribute("href", "/community/welcome");
    await expect
      .soft(page.getByRole("link", { name: "GitHub repository" }))
      .toHaveAttribute("href", "https://github.com/microsoft/playwright");
    await expect
      .soft(page.getByRole("link", { name: "Discord server" }))
      .toHaveAttribute("href", "https://aka.ms/playwright/discord");
  });

  test("Verify light mode switching for header", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await page
      .getByRole("button", { name: "Switch between dark and light" })
      .click();
    await expect
      .soft(page.locator(".toggle_vylO.colorModeToggle_DEke > button"))
      .toHaveAttribute("title", "light mode");
  });

  test("Verify dark mode switching for header", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await page
      .getByRole("button", { name: "Switch between dark and light" })
      .dblclick();
    await expect
      .soft(page.locator(".toggle_vylO.colorModeToggle_DEke > button"))
      .toHaveAttribute("title", "dark mode");
  });

  test("Verify title of header", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await expect
      .soft(page.getByRole("heading", { name: "Playwright enables reliable" }))
      .toBeVisible();
    await expect
      .soft(page.getByRole("heading", { name: "Playwright enables reliable" }))
      .toContainText(
        "Playwright enables reliable end-to-end testing for modern web apps."
      );
  });

  test("Verify Get Started button", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await expect
      .soft(page.getByRole("link", { name: "Get started" }))
      .toBeVisible();
    await expect
      .soft(page.getByRole("link", { name: "Get started" }))
      .toContainText("Get started");
    await expect
      .soft(page.getByRole("link", { name: "Get started" }))
      .toHaveAttribute("href", "/docs/intro");
  });
});
