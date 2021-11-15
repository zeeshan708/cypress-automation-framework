/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */

/**
 * @author Zeeshan Asghar
 * Dated: 03/11/2021
 */

class SummaryPage {
  // Locators
  getSubmitButton() {
    return cy.xpath("//span[normalize-space()='Submit']");
  }

  /**
   * click submit button
   */
  clickSubmitButton() {
    this.getSubmitButton().click();
    cy.get("mat-dialog-container mat-form-field mat-select").click();
    cy.get("div.mat-select-panel mat-option").eq(1).click();
    cy.get("mat-dialog-actions button").eq(1).click();
  }
}
export default SummaryPage;
