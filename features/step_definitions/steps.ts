import { Given, When, Then } from "@cucumber/cucumber";
import { AjaxFormSubmit } from "../page-fixtures/ajax-form-submit";

let ajaxFormSubmit: AjaxFormSubmit;

Given("I navigate to the form submit demo page", async function () {
  ajaxFormSubmit = new AjaxFormSubmit(this.parameters.page);
});

When(
  "I fill in the form with {string} and {string}",
  async function (name: string, description: string) {
    await ajaxFormSubmit.submitValues(name, description);
  }
);

Then("I should see a success message", async function () {});
