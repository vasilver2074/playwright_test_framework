import { test, expect } from "@playwright/test";
import { DouPage } from "../../pages/dou/Dou.page";

test.describe("Main Page tests", () => {
    let douPage: DouPage;

    test.beforeEach(async ({ page }) => {

        douPage = new DouPage(page);
        await douPage.navigate();
    });

  test("Verify element navigation displaying for header", async ({ page }) => {
    
    await douPage.checkElementsVisibility();
  });

  test("Verify element navigation name for header", async ({page}) => {
    await douPage.checkElementsText();
  });

//   test("Verify element navigation attributes href for header", async ({page}) => {
//     await douPage.checkElementsHrefAttribute();
//   });

//   test("Verify light mode switching for header", async ({page}) => {
//     await test.step('Click on the switch mode icon', async () => {
//       await douPage.clickSwitchLightModeButton();
//     });
//     await test.step('Verify displaying light mode', async () => {
//       await douPage.checkLightThemeAttributesValue();
//     });
//     await test.step('Verify creating screenshot with light theme', async () => {
//       await douPage.checkLayoutWithLightMode();
//     });
//   });

//   test("Verify dark mode switching for header", async ({page}) => {
//     await test.step('Double click on the switch mode icon', async () => {
//       await douPage.doubleClickSwitchDarkModeButton();
//     });
//     await test.step('Verify displaying dark mode', async () => {
//       await douPage.checkDarkThemeAttributesValue();
//     });
//     await test.step('Verify creating screenshot with dark theme', async () => {
//       await douPage.checkLayoutWithDarkMode();
//     });
//   });
});
