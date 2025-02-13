import { Page } from "@playwright/test";

export class MainPage {
  protected page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  protected async GoToBaseUrl() {
    await this.page.goto("https://www.lambdatest.com/selenium-playground/", {
      waitUntil: "domcontentloaded",
    });
  }
}
