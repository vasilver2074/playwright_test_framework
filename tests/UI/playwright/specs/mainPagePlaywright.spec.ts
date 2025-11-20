import { test, expect } from "../fixtures/mainPage";
import { MainPage } from "../../playwright/pages/Main.page";

test.describe("Main Page tests", () => {

  test("Verify element navigation displaying for header", async ({mainPage}) => {
    
    await mainPage.checkElementsVisibility();
  });

  test("Verify element navigation name for header", async ({mainPage}) => {
    await mainPage.checkElementsText();
  });

  test("Verify element navigation attributes href for header", async ({mainPage}) => {
    await mainPage.checkElementsHrefAttribute();
  });

  test("Verify light mode switching for header", async ({mainPage}) => {
    await test.step('Click on the switch mode icon', async () => {
      await mainPage.clickSwitchLightModeButton();
    });
    await test.step('Verify displaying light mode', async () => {
      await mainPage.checkLightThemeAttributesValue();
    });
    await test.step('Verify creating screenshot with light theme', async () => {
      await mainPage.checkLayoutWithLightMode();
    });
  });

  test("Verify dark mode switching for header", async ({mainPage}) => {
    await test.step('Double click on the switch mode icon', async () => {
      await mainPage.doubleClickSwitchDarkModeButton();
    });
    await test.step('Verify displaying dark mode', async () => {
      await mainPage.checkDarkThemeAttributesValue();
    });
    await test.step('Verify creating screenshot with dark theme', async () => {
      await mainPage.checkLayoutWithDarkMode();
    });
  });
});
