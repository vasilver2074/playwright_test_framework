import { test, expect } from "@playwright/test";
import { InventoryPage } from "../../saucedemo/pages/Inventory.page";
import { CartPage } from "../../saucedemo/pages/Cart.page";
import { LoginPage } from "../../saucedemo/pages/Login.page";

test.describe("Check cart", () => {
  let inventoryPage: InventoryPage;
  let cartPage: CartPage;
  let loginPage: LoginPage;

  const user = {
    "username": "standard_user",
    "password": "secret_sauce",
  }

  test.beforeEach(async ({ page }) => {
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    loginPage = new LoginPage(page);

    await inventoryPage.navigate();
    await loginPage.login("standard_user", "secret_sauce");
  });

  test("PS-001 authorization: successful login",
    {
      tag: ["@positive"],
      annotation: {
        type: "description",
        description: "Mocha coffee is successfully added to Total",
      },
    },
    async ({ page }) => {

      await loginPage.navigate();
      await loginPage.login(user.username, user.password);

      expect(page.url()).toContain("/inventory.html");
    });

  test("PS-002 Add to cart: successful add item to cart",
    {
      tag: ["@positive"],
      annotation: {
        type: "description",
        description: "Mocha coffee is successfully added to Total",
      },
    }, async ({ page }) => {
      await inventoryPage.clickInventory();
      await inventoryPage.addItemToCart();
      await inventoryPage.openCart();

      const cartItems = await cartPage.getCartItems();
      expect(cartItems).toContain("Sauce Labs Backpack");
    });
});
