import {
  BeforeAll,
  Before,
  After,
  AfterAll,
  setDefaultTimeout,
  Status,
} from "@cucumber/cucumber";
import { chromium, Browser, BrowserContext } from "@playwright/test";

setDefaultTimeout(60000);
let context: BrowserContext;
let browser: Browser;

BeforeAll(async function () {
  browser = await chromium.launch();
});

Before(async function () {
  context = await browser.newContext();
  const page = await context.newPage();
  this.parameters.page = page;
});

After(async function (testCase) {
  if (testCase.result!.status === Status.FAILED) {
    const buffer = await this.parameters.page.screenshot();
    this.attach(buffer, { mediaType: "image/png" });
  }
  this.parameters.page.close();
  await context.close();
});

AfterAll(async function () {
  await browser.close();
});

async function takeScreenShot() {}
