import { Locator, Page } from "@playwright/test";

export class BaseComponents {
    protected baseLocator: Locator;

    constructor(baseLocator: Locator) {
        this.baseLocator = baseLocator;
    }
}