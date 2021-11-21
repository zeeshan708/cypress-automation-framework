/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */

/**
 * @author Zeeshan Asghar
 * Dated: 17/11/2021
 */

class Declaration {
  // Declration page locators
  getDeclarationNumber() {
    return cy.get("#declarationNumber");
  }

  getSearchButton() {
    return cy.get("#submitForm");
  }

  getThreeDotsButton() {
    return cy.xpath("//a[@class='ant-btn ant-dropdown-link ant-dropdown-trigger ant-btn-icon-only']");
  }

  getCopyToNewButton() {
    return cy.get("#copyToNew");
  }

  getHistoryButton() {
    return cy.xpath("//div[contains(text(),'History')]");
  }

  getSubmitButton() {
    return cy.xpath("//span[contains(text(),' Submit')]");
  }

  getSubmissionNotificationText() {
    return cy.xpath("//nz-alert[@nztype='success']");
  }

  getAdvanceSearchHeader() {
    return cy.xpath("//body//app-root//h1[1]");
  }

  /**
   * type declaration number
   */
  typeDeclarationNumber(registrationNumber) {
    this.getDeclarationNumber().type(registrationNumber);
  }

  /**
   * clicks on search button on declaration page
   */
  clickSearchButton() {
    this.getSearchButton().click();
  }

  /**
   * click on three dots button
   */
  clickthreeDotsButton() {
    this.getThreeDotsButton().click();
  }

  /**
   * click on copy to new button
   */
  clickCopyToNewButton() {
    this.getCopyToNewButton().click();
  }

  /**
   * click history button
   */
  clickHistoryButton() {
    this.getHistoryButton().click({ force: true });
  }

  /**
   * click history button
   */
  clickSubmitButton() {
    this.getSubmitButton().click({ force: true });
  }
}
export default Declaration;
