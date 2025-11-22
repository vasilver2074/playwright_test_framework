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

  const inventory = {
    "Sauce Labs Backpack": "4",
    "Sauce Labs Bike Light": "0",
    "Sauce Labs Bolt T-Shirt": "1",
    "Sauce Labs Fleece Jacket": "5",
    "Sauce Labs Onesie": "2",
    "Test.allTheThings() T-Shirt (Red)": "3"
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

  test("PS-002 Add to cart inventory by name: successful add item to cart",
    {
      tag: ["@positive"],
      annotation: {
        type: "description",
        description: "User successfully added inventory item to cart",
      },
    }, async ({ page }) => {
      await inventoryPage.navigate("https://www.saucedemo.com/inventory.html");
      await inventoryPage.addToCartByTitle(page, inventory["Sauce Labs Backpack"]);

      await cartPage.navigate("https://www.saucedemo.com/cart.html");
      const cartItems = await cartPage.getCartItems();
      
      expect(cartItems).toContain("Sauce Labs Backpack");
    });

    
});
