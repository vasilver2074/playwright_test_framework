import test, { expect, Locator, Page } from "@playwright/test";

interface Elements {
  locator: (page: Page) => Locator;
  name: string;
  text?: string;
}

export class DouPage {
  readonly page: Page;
  readonly elements: Elements[];

  constructor(page: Page) {
    this.page = page;

    this.elements = [
      {
        locator: (page: Page): Locator =>
          page.getByRole("link", { name: "DOU Logo" }),
        name: "Logo link",
      },
      {
        locator: (page: Page): Locator =>
          page.getByRole("link", { name: "Форум" }),
        name: "Форум",
        text: "Форум",
      },
      {
        locator: (page: Page): Locator =>
          page.getByRole("link", { name: "Стрічка" }),
        name: "Стрічка",
        text: "Стрічка",
      },
      {
        locator: (page: Page): Locator =>
          page.getByRole("link", { name: "Зарплати" }),
        name: "Зарплати",
        text: "Зарплати",
      },
      {
        locator: (page: Page): Locator =>
          page.getByRole("link", { name: "Робота" }),
        name: "Робота",
        text: "Робота",
      },
      {
        locator: (page: Page): Locator =>
          page.getByRole("link", { name: "Календар" }),
        name: "Календар",
        text: "Календар",
      },
      {
        locator: (page: Page): Locator =>
          page.getByRole("link", { name: "Спільноти" }),
        name: "Спільноти",
        text: "Спільноти",
      },
      {
        locator: (page: Page): Locator =>
          page.getByRole("textbox", { name: "пошук" }),
        name: "пошук",
      },
    ];
  }

  async checkElementsVisibility() {
      for (const { locator, name } of this.elements) {
        await test.step(`Verify displaying Playwright ${name}`, async () => {
          await expect.soft(locator(this.page)).toBeVisible();
        });
      }
    }
    
  public get duoLogo(): Locator {
    return this.page.getByRole("link", { name: "DOU Logo" });
  }

  public get forumTab(): Locator {
    return this.page.getByRole("link", { name: "Форум" });
  }

  public get strichkaTab(): Locator {
    return this.page.getByRole("link", { name: "Стрічка" });
  }

  public get salaryTab(): Locator {
    return this.page.getByRole("link", { name: "Зарплати" });
  }

  public get workTab(): Locator {
    return this.page.getByRole("link", { name: "Робота" });
  }

  public get timetableTab(): Locator {
    return this.page.getByRole("link", { name: "Календар" });
  }

  public get teamsTab(): Locator {
    return this.page.getByRole("link", { name: "Спільноти" });
  }

  public get searchField(): Locator {
    return this.page.getByRole("textbox", { name: "пошук" });
  }

  async checkLogoVisibility() {
    await expect(this.duoLogo).toBeVisible();
  }

  async checkForunTabVisibility() {
    await expect(this.forumTab).toBeVisible();
  }
}
