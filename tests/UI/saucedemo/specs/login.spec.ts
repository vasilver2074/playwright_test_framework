import { expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { test } from "../fixtures/fixtures";

test.describe("Check cart", () => {

    test.beforeEach(async ({ loginPage }) => {

        await loginPage.navigate("https://www.saucedemo.com/");

    });

    test(
        "AUTH-001 - Login as standard user - should be logged",
        { tag: ["@regression"] },
        async ({ productsPage, loginPage }) => {

            await loginPage.fillUsername("standard_user");
            await loginPage.fillPassword("secret_sauce");
            await loginPage.clickLogin();

            //перевіряємо чи юзер залогінений наявністю бургер меню (бо він є тільки в авторизованого юзера)
            await expect(productsPage.locators.burgerMenuLocator).toBeVisible();
        }
    );

    test(
        "AUTH-002 - Login as standard user with incorrect password",
        { tag: ["@regression"] },
        async ({ loginPage }) => {

            await loginPage.fillUsername("standard_user");
            await loginPage.fillPassword(faker.internet.password());
            await loginPage.clickLogin();

            //перевіряємо, що юзер не залогінений через валідаційну помилку
            await expect(loginPage.locators.errorMessageLocator).toBeVisible();
        }
    );
})
