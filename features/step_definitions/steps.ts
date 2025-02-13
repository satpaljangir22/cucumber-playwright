import { Given, When, Then } from "@cucumber/cucumber";
import { Browser, BrowserContext, expect, Page } from "@playwright/test";
import { AjaxFormSubmit } from "../page-fixtures/ajax-form-submit";
import { chromium } from "@playwright/test";

let page: Page;
let browser: Browser;
let context: BrowserContext;
let ajaxFormSubmit: AjaxFormSubmit;

Given("I navigate to the form submit demo page", async () => {
  browser = await chromium.launch();
  context = await browser.newContext();
  page = await context.newPage();
  ajaxFormSubmit = new AjaxFormSubmit(page);
});

When(
  "I fill in the form with {string} and {string}",
  async (name: string, description: string) => {
    await ajaxFormSubmit.submitValues(name, description);
  }
);

Then("I should see a success message", async () => {
  await page.close();
  await context.close();
  await browser.close();
});
