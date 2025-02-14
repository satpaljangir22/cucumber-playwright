import { BeforeAll, Before, After, AfterAll } from "@cucumber/cucumber";
import { chromium, Browser, BrowserContext, Page } from "@playwright/test";
import { pageFixture } from "./page-fixture";

let page: Page;
let context: BrowserContext;
let browser: Browser;

BeforeAll(async function () {
  browser = await chromium.launch();
});

Before(async function () {
  context = await browser.newContext();
  page = await context.newPage();
  pageFixture.page = page;
});

After(async function () {
  await pageFixture.page.close();
  await context.close();
});

AfterAll(async function () {
  await browser.close();
});
