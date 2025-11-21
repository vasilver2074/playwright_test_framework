import { test, expect } from "@playwright/test";
import { InventoryPage } from "../pages/Inventory.page";
import { CartPage } from "../pages/Cart.page";
import { LoginPage } from "../pages/Login.page";

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

    await loginPage.navigate("https://www.saucedemo.com/");
    await loginPage.login(user.username, user.password);
  });

  test("PS-001 authorization: successful login",
    {
      tag: ["@positive"],
      annotation: {
        type: "description",
        description: "User successfully logged in with valid credentials",
      },
    },
    async ({ page }) => {

      expect(page.url()).toContain("/inventory.html");
      
    });

  test("PS-002 Add to cart: successful add item to cart",
    {
      tag: ["@positive"],
      annotation: {
        type: "description",
        description: "User successfully added item to cart",
      },
    }, async ({ page }) => {
      await inventoryPage.navigate("https://www.saucedemo.com/inventory.html");
      await inventoryPage.clickInventory();
      await inventoryPage.addItemToCart();
      await inventoryPage.openCart();

      const cartItems = await cartPage.getCartItems();
      expect(cartItems).toContain("Sauce Labs Backpack");
    });
});
