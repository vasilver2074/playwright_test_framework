import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "../BasePage/BasePage.page";
import { ProductsPageLocators } from "./ProductsPageLocators";
import { ProductCardComponents } from "../../components/ProductCardComponent/ProductCardComponents";

export class ProductsPage extends BasePage {

  //readonly locators: ProductsPageLocators = new ProductsPageLocators(this.page.locator('#contents_wrapper'));

  // async addToCartByTitle(page: Page, productTitle: string): Promise<void> {

  //   await page.locator(`#item_${productTitle}_title_link`).click();
  //   await this.locators.addToCartButtonLocator.click();

  // }

  // async removeFromCartByTitle(page: Page, productTitle: string): Promise<void> {

  //   await page.locator(`#item_${productTitle}_title_link`).click();

  //   await this.locators.removeFromCartButtonLocator.click();

  // }

  // async getPriceByTitle(page: Page, productTitle: string): Promise<string> {

  //   await page.locator(`#item_${productTitle}_title_link`).click();
  //   return await this.locators.priceValueLocator.innerText();

  // }

  locators: ProductsPageLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new ProductsPageLocators(page.locator("body"));
  }

  private getBaseCardLocator = (productName: string) =>
    `//*[@data-test="inventory-item-name" and text() = '${productName}']/ancestor::div[@data-test="inventory-item"]`;

  getProductCard(productName: string) {
    const card = new ProductCardComponents(
      this.page.locator(this.getBaseCardLocator(productName))
    );
    return card;
  }

   async addToCartByTitle(productName: string): Promise<void> {
    await this.locators.getAddToCartButtonLocator(productName).click();
  }

  async removeFromCartByTitle(productName: string): Promise<void> {
    await this.locators.getRemoveButtonLocator(productName).click();
  }

  async getPriceByTitle(productName: string): Promise<string> {
    const priceText = await this.locators.getPriceLocator(productName).textContent();
    return priceText?.trim() || "";
  }

  async getCartItemCount(): Promise<number> {
    const badge = this.locators.shoppingCartBadge;
    const isVisible = await badge.isVisible();
    
    if (!isVisible) {
      return 0;
    }
    
    const count = await badge.textContent();
    return parseInt(count || "0", 10);
  }

  async goToCart(): Promise<void> {
    await this.locators.shoppingCartLink.click();
  }

  async isProductInCart(productName: string): Promise<boolean> {
    return await this.locators.getRemoveButtonLocator(productName).isVisible();
  }

}