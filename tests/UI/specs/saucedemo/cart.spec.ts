import { test, expect } from "@playwright/test";
import { InventoryPage } from "../../pages/saucedemo/Inventory.page";
import { CartPage } from "../../pages/saucedemo/Cart.page";
import { LoginPage } from "../../pages/saucedemo/Login.page";

test.describe("Check cart", () => {
  let inventoryPage: InventoryPage;
  let cartPage: CartPage;
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    loginPage = new LoginPage(page);

    await inventoryPage.navigate();
    await loginPage.login("standard_user", "secret_sauce");
  });

  test("authorization: successful login", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login("standard_user", "secret_sauce");

    expect(page.url()).toContain("/inventory.html");
  });

  test("Add to cart", async ({ page }) => {
    await inventoryPage.clickInventory();
    await inventoryPage.addItemToCart();
    await inventoryPage.openCart();

    const cartItems = await cartPage.getCartItems();
    expect(cartItems).toContain("Sauce Labs Backpack");
  });
});
