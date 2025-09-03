import { test, expect, Page, Locator } from "@playwright/test";
import { MainPage } from "../models/MainPage";

test.describe("Main Page tests", () => {
  
  test("Verify element navigation displaying for header", async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.openMainPage();
    await mainPage.checkElementsVisibility();
  });

  test("Verify element navigation name for header", async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.openMainPage();
    await mainPage.checkElementsText();
  });

  test("Verify element navigation attributes href for header", async ({
    page,
  }) => {
    const mainPage = new MainPage(page);
    await mainPage.openMainPage();
    await mainPage.checkElementsHrefAttribute();
  });

  test("Verify light mode switching for header", async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.openMainPage();
    await mainPage.clickSwitchLightModeButton();
    await mainPage.checkLightThemeAttributesValue();
    await mainPage.checkLayoutWithLightMode();
  });

  test("Verify dark mode switching for header", async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.openMainPage();
    await mainPage.doubleClickSwitchDarkModeButton();
    await mainPage.checkDarkThemeAttributesValue();
    await mainPage.checkLayoutWithDarkMode();
  });
});
