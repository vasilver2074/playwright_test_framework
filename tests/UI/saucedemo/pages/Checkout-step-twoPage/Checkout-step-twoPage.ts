import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage/BasePage.page";
import { CheckoutStepTwoPageLocators } from "./Checkout-step-twoPageLocators";

export class CheckoutStepTwoPage extends BasePage {

  // readonly locators: CheckoutStepTwoPageLocators = new CheckoutStepTwoPageLocators(this.page.locator('#contents_wrapper'));

  // constructor(page: Page) {
  //   super(page);
  // }

  // async finishCheckout(): Promise<void> {
  //   await this.locators.finishButtonLocator.click();
  // }

  // async cancelCheckout(): Promise<void> {
  //   await this.locators.cancelButtonLocator.click();
  // }

  // async getPrice(): Promise<string> {
  //   return await this.locators.priceValueLocator.innerText();
  // }

  locators: CheckoutStepTwoPageLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new CheckoutStepTwoPageLocators(page.locator("body"));
  }

  async finish(): Promise<void> {
    await this.locators.finishButton.click();
  }

  async cancel(): Promise<void> {
    await this.locators.cancelButton.click();
  }

  async getPaymentInfo(): Promise<string> {
    const paymentText = await this.locators.paymentInfoValue.textContent();
    return paymentText?.trim() || "";
  }

  async getShippingInfo(): Promise<string> {
    const shippingText = await this.locators.shippingInfoValue.textContent();
    return shippingText?.trim() || "";
  }

  async getSubtotal(): Promise<string> {
    const subtotalText = await this.locators.subtotalLabel.textContent();
    return subtotalText?.trim() || "";
  }

  async getTax(): Promise<string> {
    const taxText = await this.locators.taxLabel.textContent();
    return taxText?.trim() || "";
  }

  async getTotal(): Promise<string> {
    const totalText = await this.locators.totalLabel.textContent();
    return totalText?.trim() || "";
  }

  async getProductPrice(productName: string): Promise<string> {
    const priceText = await this.locators
      .getProductPriceLocator(productName)
      .textContent();
    return priceText?.trim() || "";
  }

  async isProductInOverview(productName: string): Promise<boolean> {
    return await this.locators.getCartItemLocator(productName).isVisible();
  }

  async getItemsCount(): Promise<number> {
    return await this.locators.cartItems.count();
  }

  async isOnCheckoutStepTwoPage(): Promise<boolean> {
    const title = await this.locators.pageTitle.textContent();
    return title?.trim() === "Checkout: Overview";
  }

}