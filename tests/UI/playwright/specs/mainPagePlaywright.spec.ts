import { test, expect } from "../fixtures/mainPage";
import { MainPage } from "../../playwright/pages/Main.page";

test.describe("Main Page tests", () => {

  test("PS-000 Verify element navigation displaying for header", {
    tag: ["@positive"],
    annotation: {
      type: "description",
      description: "element navigation is displaying in header",
    },
  },
    async ({ mainPage }) => {

      await mainPage.checkElementsVisibility();
    });

  test("PS-001 Verify element navigation name for header", {
    tag: ["@positive"],
    annotation: {
      type: "description",
      description: "element navigation name is displaying in header",
    },
  },
    async ({ mainPage }) => {
      await mainPage.checkElementsText();
    });

  test("PS-002 Verify element navigation attributes href for header", {
    tag: ["@positive"],
    annotation: {
      type: "description",
      description: "element navigation attributes href are displaying in header",
    },
  },
    async ({ mainPage }) => {
      await mainPage.checkElementsHrefAttribute();
    });

  test("PS-003 Verify light mode switching for header", {
    tag: ["@positive"],
    annotation: {
      type: "description",
      description: "light mode switching is working correctly for header",
    },
  },
    async ({ mainPage }) => {
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

  test("PS-004 Verify dark mode switching for header", {
    tag: ["@positive"],
    annotation: {
      type: "description",
      description: "dark mode switching is working correctly for header",
    },
  },
    async ({ mainPage }) => {
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
