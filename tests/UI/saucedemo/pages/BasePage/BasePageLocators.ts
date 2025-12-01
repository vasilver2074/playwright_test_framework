import { Locator, Page } from "@playwright/test";

export abstract class BasePageLocators {
    protected baseLocator: Locator;

    constructor(baseLocator: Locator) {
        this.baseLocator = baseLocator;
    }
}