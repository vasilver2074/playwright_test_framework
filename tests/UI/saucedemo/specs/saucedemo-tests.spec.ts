import { test, expect } from "@playwright/test";
import { ProductsPage } from "../pages/ProductsPage/Products.page";
import { CartPage } from "../pages/CartPage/Cart.page";
import { LoginPage } from "../pages/LoginPage/Login.page";
import { CheckoutStepOnePage } from "../pages/Checkout-step-onePage/Checkout-step-one.page";
import { CheckoutStepTwoPage } from "../pages/Checkout-step-twoPage/Checkout-step-two.page";

test.describe("Check cart", () => {
  let productsPage: ProductsPage;
  let cartPage: CartPage;
  let loginPage: LoginPage;
  let checkoutStepOnePage: CheckoutStepOnePage;
  let checkoutStepTwoPage: CheckoutStepTwoPage;

  const user = {
    "username": "standard_user",
    "password": "secret_sauce",
    "firstName": "John",
    "lastName": "Doe",
    "postalCode": "12345"
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
    productsPage = new ProductsPage(page);
    cartPage = new CartPage(page);
    loginPage = new LoginPage(page);
    checkoutStepOnePage = new CheckoutStepOnePage(page);
    checkoutStepTwoPage = new CheckoutStepTwoPage(page);

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

      await productsPage.addToCartByTitle(page, inventory["Sauce Labs Backpack"]);

      await cartPage.navigate("https://www.saucedemo.com/cart.html");
      const cartItems = await cartPage.getCartItems();

      expect(cartItems).toContain("Sauce Labs Backpack");
    });

  test("PS-003 Remove cart inventory by name: successful remove item from cart",
    {
      tag: ["@positive"],
      annotation: {
        type: "description",
        description: "User successfully removed inventory item from cart",
      },
    }, async ({ page }) => {

      await productsPage.addToCartByTitle(page, inventory["Sauce Labs Bolt T-Shirt"]);

      await cartPage.navigate("https://www.saucedemo.com/cart.html");
      const cartItems = await cartPage.getCartItems();

      expect(cartItems).toContain("Sauce Labs Bolt T-Shirt");

      await productsPage.navigate("https://www.saucedemo.com/inventory.html");
      await productsPage.removeFromCartByTitle(page, inventory["Sauce Labs Bolt T-Shirt"]);

      await cartPage.navigate("https://www.saucedemo.com/cart.html");
      const updatedCartItems = await cartPage.getCartItems();

      expect(updatedCartItems).not.toContain("Sauce Labs Bolt T-Shirt");
    });

  test("PS-004 Checkout process: successful checkout",
    {
      tag: ["@positive"],
      annotation: {
        type: "description",
        description: "User successfully performed checkout process",
      },
    }, async ({ page }) => {

      await productsPage.addToCartByTitle(page, inventory["Sauce Labs Onesie"]);

      await cartPage.navigate("https://www.saucedemo.com/cart.html");
      const cartItems = await cartPage.getCartItems();

      expect(cartItems).toContain("Sauce Labs Onesie");

      await cartPage.checkout();
      await checkoutStepOnePage.fillForm(user.firstName, user.lastName, user.postalCode);
      await checkoutStepTwoPage.finishCheckout();

      expect(page.url()).toContain("/checkout-complete.html");

    });

  test("PS-005 Checkout process: get price on checkout step two",
    {
      tag: ["@positive"],
      annotation: {
        type: "description",
        description: "User successfully retrieved price on checkout step two",
      },
    }, async ({ page }) => {

      await productsPage.addToCartByTitle(page, inventory["Test.allTheThings() T-Shirt (Red)"]);

      await cartPage.navigate("https://www.saucedemo.com/cart.html");
      const cartItems = await cartPage.getCartItems();

      expect(cartItems).toContain("Test.allTheThings() T-Shirt (Red)");

      await cartPage.checkout();
      await checkoutStepOnePage.fillForm(user.firstName, user.lastName, user.postalCode);
      const price = await checkoutStepTwoPage.getPrice();

      expect(price).toBe("$15.99");

    });
});
