/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */

/**
 * @author Ahmad Sohail, Zeeshan Asghar
 * Dated: 28/10/2021
 */

class HeaderInfo {
  // Locators

  // transport details section
  getCWCDropdown() {
    return cy.get("app-transport-details input").eq(1);
  }

  getFlagDropdown() {
    return cy.get("app-transport-details input").eq(4);
  }

  getLocation() {
    return cy.get("app-transport-details input").eq(5);
  }

  getTOT() {
    return cy.get("app-transport-details input").eq(6);
  }

  getDispatchCountry() {
    return cy.get("app-transport-details input").eq(1);
  }

  getDestinationCountry() {
    return cy.get("app-transport-details input").eq(2);
  }

  getVessel() {
    return cy.xpath("//div[normalize-space()='Vessel/Flight']/input");
  }

  // customs detail section
  getDUCR() {
    return cy.get("app-customs-details input").eq(0);
  }

  getDUCRPartNo() {
    return cy.get("app-customs-details input").eq(1);
  }

  getDeferType1Dropwdown() {
    return cy.get("app-customs-details input").eq(4);
  }

  getDeferNo1() {
    return cy.get("app-customs-details input").eq(5);
  }

  getInvoiceAmount() {
    return cy.get("app-customs-details input").eq(8);
  }

  getCurrency() {
    return cy.get("app-customs-details input").eq(9);
  }

  getVATAdjustment() {
    return cy.get("app-customs-details input").eq(20);
  }

  getCurrencyVAT() {
    return cy.get("app-customs-details input").eq(21);
  }

  getNextButton() {
    return cy.xpath(
      "//app-header-info[@class='ng-star-inserted']//span[@class='mat-button-wrapper'][normalize-space()='Next']"
    );
  }

  /**
   * select dispatch country
   * @param country country to dispatch
   */
  selectDispatchCountry(country) {
    this.getDispatchCountry().type(country).type("{enter}");
  }

  /**
   * select destination country
   * @param destination country of destination
   */
  selectDestinationCountry(country) {
    this.getDestinationCountry().type(country).type("{enter}");
  }

  /**
   * select vessel
   * @param vessel vessel of transport
   */
  selectVessel(vessel) {
    this.getVessel().type(vessel).type("{enter}");
  }

  /**
   * Select CWC
   */
  selectCWC(cwc) {
    this.getCWCDropdown().type(cwc).type("{enter}");
  }

  /**
   * Select Flag Dropdown
   */
  selectFlag(flag) {
    this.getFlagDropdown().type(flag).type("{enter}");
  }

  /**
   * Select Location Text Field
   */
  selectLocation(location) {
    this.getLocation().type(location);
  }

  /**
   * Select TOT Text Field
   */
  selectTOT(tot) {
    this.getTOT().type(tot).type("{enter}");
  }

  /**
   * Select DUCR
   */
  typeDUCR() {
    cy.createRandomAlphaNumeric().then(($value) => {
      const randomDUCR = `1GB01001-010101-${$value}`;
      cy.log(randomDUCR);
      this.getDUCR().type(randomDUCR);
    });
  }

  /**
   * Select DUCR
   */
  typeExportDUCR() {
    cy.createRandomAlphaNumeric14().then(($value) => {
      const randomDUCR = `1GB615081466000-TVEX${$value}`;
      cy.log(randomDUCR);
      this.getDUCR().type(randomDUCR);
    });
  }

  /**
   * Select DUCR Part No Field
   */
  selectDUCRPartNo(DUCRPartNo) {
    this.getDUCRPartNo().type(DUCRPartNo);
  }

  /**
   * Select Defer Type 1
   */
  selectDeferType1(deferType1) {
    this.getDeferType1Dropwdown().type(deferType1).type("{enter}");
  }

  /**
   * Select Defer No 1
   */
  selectDeferNo1(deferNo1) {
    this.getDeferNo1().type(deferNo1);
  }

  /**
   * Enter Invoice Amount
   */
  selectInvoiceAmount(invoiceAmount) {
    this.getInvoiceAmount().type(invoiceAmount);
  }

  /**
   * Select Currency
   */
  selectCurrency(currency) {
    this.getCurrency().type(currency).type("{enter}");
  }

  /**
   * Select VAT Adjustment
   */
  selectVATAdjustment(vatAdjustment) {
    this.getVATAdjustment().type(vatAdjustment);
  }

  /**
   * Select Currency VAT
   */
  selectCurrencyVAT(currencyVAT) {
    this.getCurrencyVAT().type(currencyVAT).type("{enter}");
  }

  /**
   * click Next button
   */
  clickNextButton() {
    this.getNextButton().click();
  }
}
export default HeaderInfo;
