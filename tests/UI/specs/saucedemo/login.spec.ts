import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/saucedemo/Login.page"

    test("authorization: successful login", async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.navigate();
        await loginPage.login("standard_user", "secret_sauce");

        expect(page.url()).toContain("/inventory.html");
});