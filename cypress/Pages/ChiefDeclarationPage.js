/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */

/**
 * @author Zeeshan Asghar
 * Dated: 28/10/2021
 */

class ChiefDeclaration {
  // Enter Reference details
  geCreateDeclarationButton() {
    return cy.xpath("//span[normalize-space()='Create Declaration']");
  }

  getSearchEntryReference() {
    return cy.xpath("//input[@formcontrolname='searchText']");
  }

  getSearchButton() {
    return cy.xpath("//span[contains(text(),' Search ')]");
  }

  getDeclarationStatus() {
    return cy.xpath("//tr[@class='mat-row cdk-row ng-star-inserted']/td[9]/span");
  }

  getDeclarationEntryReference() {
    return cy.xpath("//tr[@class='mat-row cdk-row ng-star-inserted']/td[1]/span");
  }

  /**
   * clicks on create declration button on chief dashboard
   */
  clickCreateDeclaration() {
    this.geCreateDeclarationButton().click({ force: true });
  }

  /**
   * type entry reference
   */
  typeEntryReference() {
    cy.readFile("cypress/data-files/dynamic-data/dynamic-data.json").then((obj) => {
      const dynamicData = obj;
      this.getSearchEntryReference().type(dynamicData.entryReference);
    });
  }

  /**
   * clicks on search button on chief dashboard
   */
  clickSearchButton() {
    this.getSearchButton().click();
  }
}
export default ChiefDeclaration;
