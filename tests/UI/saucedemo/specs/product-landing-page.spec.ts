import { expect } from "@playwright/test";
import { test } from "../fixtures/fixtures";

test.describe("Products Landing Page Tests", () => {

  test.beforeEach(async ({ loginPage}) => {

    await loginPage.navigate("https://www.saucedemo.com/");
    await loginPage.fillUsername("standard_user");
    await loginPage.fillPassword("secret_sauce"); //зробити один метод
    await loginPage.clickLogin();
  });

  test(
    "PLP-001 - Add product to cart",
    { tag: ["@regression"] },
    async ({ productsPage }) => {
      const productName = "Sauce Labs Backpack";

      await productsPage.addToCartByTitle(productName);

      expect(await productsPage.isProductInCart(productName)).toBe(true); //переписати на expectToBeVisible замість isVisible
      expect(await productsPage.getCartItemCount()).toBe(1);
    }
  );

  test(
    "PLP-002 - Remove product from cart",
    { tag: ["@regression"] },
    async ({ productsPage }) => {
      const productName = "Sauce Labs Bike Light";

      // Додаємо
      await productsPage.addToCartByTitle(productName);
      expect(await productsPage.getCartItemCount()).toBe(1);

      // Видаляємо
      await productsPage.removeFromCartByTitle(productName);
      expect(await productsPage.getCartItemCount()).toBe(0);
    }
  );

  test(
    "PLP-003 - Get correct product price",
    { tag: ["@regression"] },
    async ({ productsPage }) => {
      const productName = "Sauce Labs Backpack";

      const price = await productsPage.getPriceByTitle(productName);

      expect(price).toBe("$29.99");
    }
  );

  test(
    "PLP-004 - Add multiple products to cart",
    { tag: ["@regression"] },
    async ({ productsPage }) => {
      const products = [
        "Sauce Labs Backpack",
        "Sauce Labs Bike Light",
        "Sauce Labs Bolt T-Shirt",
      ];

      for (const product of products) {
        await productsPage.addToCartByTitle(product);
      }

      const cartCount = await productsPage.getCartItemCount();
      expect(cartCount).toBe(3);
    }
  );
});