import { expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { test } from "../fixtures/fixtures";

test.describe("Checkout Step One Tests", () => {

  test.beforeEach(async ({ loginPage, productsPage, cartPage, }) => {

    await loginPage.navigate("https://www.saucedemo.com/");
    await loginPage.fillUsername("standard_user");
    await loginPage.fillPassword("secret_sauce");
    await loginPage.clickLogin();

    await productsPage.addToCartByTitle("Sauce Labs Backpack");
    await productsPage.goToCart();
    await cartPage.checkout();
  });


  test("CHECKOUT-001 - Fill form with Faker data", 
    { tag: ["@regression"] }, 
    async ({ checkoutStepOnePage, page }) => {
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();
      const zipCode = faker.location.zipCode();

      await checkoutStepOnePage.fillFirstName(firstName);
      await checkoutStepOnePage.fillLastName(lastName);
      await checkoutStepOnePage.fillZipCode(zipCode);
      await checkoutStepOnePage.continue();

      await expect(page).toHaveURL(/.*checkout-step-two/);
    }
  );

  test("CHECKOUT-002 - Cancel and return to cart", 
    { tag: ["@regression"] }, 
    async ({ checkoutStepOnePage, cartPage, page }) => {
      await checkoutStepOnePage.cancel();
      await expect(page).toHaveURL(/.*cart/);
      
      expect(await cartPage.isProductInCart("Sauce Labs Backpack")).toBe(true);
    }
  );

  test("CHECKOUT-003 - Error when First Name is empty", 
    { tag: ["@regression", "@negative"] }, 
    async ({ checkoutStepOnePage, page }) => {
      await checkoutStepOnePage.fillLastName("Doe");
      await checkoutStepOnePage.fillZipCode("12345");
      await checkoutStepOnePage.continue();

      expect(await checkoutStepOnePage.isErrorVisible()).toBe(true);
      
      const errorMessage = await checkoutStepOnePage.getErrorMessage();
      expect(errorMessage).toContain("First Name is required");
    }
  );

  test("CHECKOUT-004 - Error when Last Name is empty",
    { tag: ["@regression", "@negative"] }, 
    async ({ checkoutStepOnePage, page }) => {
      await checkoutStepOnePage.fillFirstName("John");
      await checkoutStepOnePage.fillZipCode("12345");
      await checkoutStepOnePage.continue();

      expect(await checkoutStepOnePage.isErrorVisible()).toBe(true);
      
      const errorMessage = await checkoutStepOnePage.getErrorMessage();
      expect(errorMessage).toContain("Last Name is required");
    }
  );

  test("CHECKOUT-005 - Error when Zip Code is empty", 
    { tag: ["@regression", "@negative"] }, 
    async ({ checkoutStepOnePage, page }) => {
      await checkoutStepOnePage.fillFirstName("John");
      await checkoutStepOnePage.fillLastName("Doe");
      await checkoutStepOnePage.continue();

      expect(await checkoutStepOnePage.isErrorVisible()).toBe(true);
      
      const errorMessage = await checkoutStepOnePage.getErrorMessage();
      expect(errorMessage).toContain("Postal Code is required");
    }
  );

  test("CHECKOUT-006 - Error when all fields are empty", 
    { tag: ["@regression", "@negative"] }, 
    async ({ checkoutStepOnePage, page }) => {
      await checkoutStepOnePage.continue();

      expect(await checkoutStepOnePage.isErrorVisible()).toBe(true);
      
      const errorMessage = await checkoutStepOnePage.getErrorMessage();
      expect(errorMessage).toContain("First Name is required");
    }
  );
});