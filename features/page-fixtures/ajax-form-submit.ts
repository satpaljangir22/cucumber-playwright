import { Locator, Page } from "@playwright/test";
import { MainPage } from "./main-page";

export class AjaxFormSubmit extends MainPage {
  private nameField: Locator;
  private descriptionField: Locator;
  private submitButton: Locator;
  constructor(page: Page) {
    super(page);
    this.nameField = this.page.locator("#title");
    this.descriptionField = this.page.locator("#description");
    this.submitButton = this.page.getByRole("button", { name: "submit" });
  }

  private async navigateToFormSubmitDemo() {
    await this.GoToBaseUrl();
    await this.page.getByRole("link", { name: "Ajax Form Submit" }).click();
    await this.page.waitForLoadState("domcontentloaded");
  }

  async submitValues(name: string, description: string) {
    await this.navigateToFormSubmitDemo();
    await this.nameField.fill(name);
    await this.descriptionField.fill(description);
    await this.submitButton.click();
  }
}
