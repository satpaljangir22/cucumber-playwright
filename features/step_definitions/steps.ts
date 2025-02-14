import { Given, When, Then } from "@cucumber/cucumber";
import { AjaxFormSubmit } from "../page-fixtures/ajax-form-submit";
import { pageFixture } from "../support/page-fixture";

let ajaxFormSubmit: AjaxFormSubmit;

Given("I navigate to the form submit demo page", async () => {
  ajaxFormSubmit = new AjaxFormSubmit(pageFixture.page);
});

When(
  "I fill in the form with {string} and {string}",
  async (name: string, description: string) => {
    await ajaxFormSubmit.submitValues(name, description);
  }
);

Then("I should see a success message", async () => {});
