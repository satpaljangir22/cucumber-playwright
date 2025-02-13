// filepath: /Users/satpaljangir/Documents/Cucumber-Playwright/features/support/playwright-environment.ts
import { setWorldConstructor, Before, After } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "playwright";

class CustomWorld {
  browser!: Browser;
  page!: Page;

  async openBrowser() {
    this.browser = await chromium.launch();
    this.page = await this.browser.newPage();
  }

  async closeBrowser() {
    await this.page.close();
    await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);

Before(async function () {
  await this.openBrowser();
});

After(async function () {
  await this.closeBrowser();
});
