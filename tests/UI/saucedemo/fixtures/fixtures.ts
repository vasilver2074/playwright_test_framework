import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { CartPage } from '../pages/CartPage/CartPage';
import { ProductsPage } from '../pages/ProductsPage/ProductsPage';
import { CheckoutStepOnePage } from '../pages/Checkout-step-onePage/Checkout-step-onePage';
import { CheckoutCompletePage } from '../pages/CheckoutCompletePage/CheckoutCompletePage';
import { CheckoutStepTwoPage } from '../pages/Checkout-step-twoPage/Checkout-step-twoPage';

type Pages = {
         loginPage: LoginPage;
         cartPage: CartPage;
         productsPage: ProductsPage;
         checkoutStepOnePage: CheckoutStepOnePage;
         checkoutStepTwoPage: CheckoutStepTwoPage;
         checkoutCompletePage: CheckoutCompletePage;
        }

export const test = base.extend<Pages>({
    
        loginPage: async ({page}, use) => {
            const loginPage = new LoginPage(page);
            await use(loginPage);
        },
        cartPage: async ({page}, use) => {
            const cartPage = new CartPage(page);
            await use(cartPage);
        },
        productsPage: async ({page}, use) => {
            const productsPage = new ProductsPage(page);
            await use(productsPage);
        },
        checkoutStepOnePage: async ({page}, use) => {
            const checkoutStepOnePage = new CheckoutStepOnePage(page);
            await use(checkoutStepOnePage);
        },
        checkoutStepTwoPage: async ({page}, use) => {
            const checkoutStepTwoPage = new CheckoutStepTwoPage(page);
            await use(checkoutStepTwoPage);
        },
        checkoutCompletePage: async ({page}, use) => {
            const checkoutCompletePage = new CheckoutCompletePage(page);
            await use(checkoutCompletePage);
        }
})