/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */

/**
 * @author Zeeshan Asghar
 * Dated: 03/11/2021
 */

class ItemInfoPage {
  // Locators
  // Enter Terrif details
  getAddItemInfoButton() {
    return cy.xpath("//span[normalize-space()='ADD NEW ITEM']");
  }

  getTerrifCode() {
    return cy.get("app-tariff input").eq(0);
  }

  getTerrifDescription() {
    return cy.get("mat-form-field textarea");
  }

  // Enter Quantities details
  getQuantitiesValue() {
    return cy.get("app-quantities input").eq(0);
  }

  getQuantitiesStatisticalValue() {
    return cy.get("app-quantities input").eq(1);
  }

  getGross() {
    return cy.xpath("//div[normalize-space()='Gross']/input");
  }

  getQty1() {
    return cy.get("app-quantities input").eq(3);
  }

  getQty2() {
    return cy.get("app-quantities input").eq(4);
  }

  getAddButton() {
    return cy.xpath("//span[normalize-space()='ADD']");
  }

  getNextButton() {
    return cy.xpath(
      "//app-item-info[@class='ng-star-inserted']//span[@class='mat-button-wrapper'][normalize-space()='Next']"
    );
  }

  // Enter item details
  getAdjustment() {
    return cy.get("app-detail input").eq(0);
  }

  getAdjustmentValue(adjustment) {
    return cy.xpath(`//span[contains(text(),'${adjustment}')]`);
  }

  getDetailPercentage() {
    return cy.get("app-detail input").eq(1);
  }

  getCpc() {
    return cy.get("app-detail input").eq(2);
  }

  getCoo() {
    return cy.get("app-detail input").eq(3);
  }

  getDispatchCountry() {
    return cy.get("app-detail input").eq(4);
  }

  getDispatchCountryValue(country) {
    return cy.xpath(`//span[contains(text(),'${country}')]`);
  }

  getDestinationCountry() {
    return cy.get("app-detail input").eq(5);
  }

  getDestinationCountryValue(country) {
    return cy.xpath(`//span[contains(text(),'${country}')]`);
  }

  getPreference() {
    return cy.get("app-detail input").eq(6);
  }

  getPreferenceValue(preference) {
    return cy.xpath(`//span[contains(text(),'${preference}')]`);
  }

  getValMethod() {
    return cy.get("app-detail input").eq(7);
  }

  getValMethodValue(valMethod) {
    return cy.xpath(`//span[contains(text(),'${valMethod}')]`);
  }

  // enter additional information
  getAddAdditionalInformationButton() {
    return cy.get("app-additional-info button").eq(0);
  }

  getCode() {
    return cy.get("app-additional-info input").eq(0);
  }

  getCodeValue(codeValue) {
    return cy.xpath(`//span[contains(text(),'${codeValue}')]`);
  }

  getStatementText() {
    return cy.get("app-additional-info input").eq(1);
  }

  getSaveButtonAddtionalInformation() {
    return cy.get("app-additional-info button").eq(3);
  }

  // Locators for Previous Document

  getAddPreviousDocumentsButton() {
    return cy.get("app-previous-documents button").eq(0);
  }

  getClass() {
    return cy.get("app-previous-documents input").eq(0);
  }

  getType() {
    return cy.get("app-previous-documents input").eq(1);
  }

  getReference() {
    return cy.get("app-previous-documents input").eq(2);
  }

  getSaveButton() {
    return cy.get("app-previous-documents button").eq(4);
  }

  getAddPackagesButton() {
    return cy.get("app-packages button").eq(0);
  }

  getCount() {
    return cy.get("app-packages input").eq(0);
  }

  getPackageKind() {
    return cy.get("app-packages input").eq(1);
  }

  getMarks() {
    return cy.get("app-packages input").eq(2);
  }

  getSavePackagesButton() {
    return cy.get("app-packages button").eq(4);
  }

  getAddDocumentsButton() {
    return cy.get("app-documents button").eq(0);
  }

  getDocumentCode() {
    return cy.get("app-documents input").eq(0);
  }

  getStatus() {
    return cy.get("app-documents input").eq(1);
  }

  getDocumentReference() {
    return cy.get("app-documents input").eq(2);
  }

  getSaveDocumentsButton() {
    return cy.get("app-documents button").eq(7);
  }

  getAddTaxLinesButton() {
    return cy.get("app-tax-lines button").eq(0);
  }

  getTaxCode() {
    return cy.get("app-tax-lines input").eq(0);
  }

  getTrid() {
    return cy.get("app-tax-lines input").eq(1);
  }

  getMop() {
    return cy.get("app-tax-lines input").eq(5);
  }

  getSaveTaxLinesButton() {
    return cy.get("app-tax-lines button").eq(8);
  }

  getAddSupervisingOfficeButton() {
    return cy.get("app-item-supervisor button").eq(0);
  }

  getSupervisingOffice() {
    return cy.get("app-item-supervisor input").eq(0);
  }

  getAddress1() {
    return cy.get("app-item-supervisor input").eq(1);
  }

  getAddress2() {
    return cy.get("app-item-supervisor input").eq(2);
  }

  getCity() {
    return cy.get("app-item-supervisor input").eq(3);
  }

  getState() {
    return cy.get("app-item-supervisor input").eq(4);
  }

  getPostCode() {
    return cy.get("app-item-supervisor input").eq(5);
  }

  getCountry() {
    return cy.get("app-item-supervisor input").eq(6);
  }

  getSaveSupervisingOfficeButton() {
    return cy.get("button._fullWidth").eq(1);
  }

  //  **************************************************************
  //                  Enter Terrif Details
  //  **************************************************************

  /**
   * click  item info button to add item
   */
  clickAddItemInfoButton() {
    this.getAddItemInfoButton().click();
  }

  /**
   * type terrif code
   * @param terrifCode terrif code of item
   */
  typeTerrifCode(terrifCode) {
    this.getTerrifCode().type(terrifCode);
  }

  /**
   * type terrif Description
   * @param terrifDescription terrif description of item
   */
  typeTerrifDescription(terrifDescription) {
    this.getTerrifDescription().type(terrifDescription);
  }

  //  **************************************************************
  //                  Enter Quantities Details
  //  **************************************************************

  /**
   * type quantity value
   * @param quantityValue quantity value of item
   */
  typeQuantitiesValue(quantityValue) {
    this.getQuantitiesValue().type(quantityValue);
  }

  /**
   * type statistical value
   * @param statisticalValue statistical value of item
   */
  typeQuantitiesStatisticalValue(statisticalValue) {
    this.getQuantitiesStatisticalValue().type(statisticalValue);
  }

  /**
   * type gross value
   * @param gross gross value of item
   */
  typeGross(gross) {
    this.getGross().type(gross);
  }

  /**
   * type qty1
   * @param qty1 qty1 value of item
   */
  typeQty1(qty1) {
    this.getQty1().type(qty1);
  }

  /**
   * type qty2
   * @param qty2 qty2 value of item
   */
  typeQty2(qty2) {
    this.getQty2().type(qty2);
  }

  /**
   * click add button to add item
   */
  clickAddButton() {
    this.getAddButton().click();
  }

  /**
   * click next button
   * @param
   */
  clickNextButton() {
    this.getNextButton().click();
  }

  //  **************************************************************
  //                  Enter Item Details
  //  **************************************************************
  /**
   * select consignor country
   * @param country country of consignor
   */
  selectAdjustment(adjustment) {
    this.getAdjustment().type(adjustment).type("{enter}");
  }

  /**
   * type percentage value
   * @param  percentage value of percentage
   */
  typeDetailPercentage(percentage) {
    this.getDetailPercentage().type(percentage);
  }

  /**
   * type Detialcpc value
   * @param  Detialcpc value of CPC
   */
  typeCpc(Detialcpc) {
    this.getCpc().type(Detialcpc).type("{enter}");
  }

  /**
   * type detailCoo value
   * @param  detailCoo value of COO
   */
  typeDetailCoo(detailCoo) {
    this.getCoo().type(detailCoo).type("{enter}");
  }

  /**
   * select dispatch country
   * @param country country to dispatch
   */
  selectDispatchCountry(country) {
    this.getDispatchCountry.type(country).type("{enter}");
  }

  /**
   * select destination country
   * @param destination country of destination
   */
  selectDestinationCountry(country) {
    this.getDestinationCountry.type(country).type("{enter}");
  }

  /**
   * select preference value
   * @param  preference value of preference
   */
  selectPreference(preference) {
    this.getPreference().click();
    this.getPreferenceValue(preference).click();
  }

  /**
   * select valMethod value
   * @param  valMethod value of Val Method
   */
  selectValMethod(valMethod) {
    this.getValMethod().type(valMethod).type("{enter}");
  }
  //  **************************************************************
  //                  Enter Additional information
  //  **************************************************************

  /**
   * click add button to add additional information
   */
  clickAddAdditionalInformationButton() {
    this.getAddAdditionalInformationButton().click();
  }

  /**
   * select code value
   * @param  codeValue value of code
   */
  selectCodeValue(codeValue) {
    this.getCode().type(codeValue).type("{enter}");
  }

  /**
   * type statementText value
   * @param  statementText value of statment text
   */
  typeStatementText(statementText) {
    this.getStatementText().type(statementText);
  }

  /**
   * click Save Button
   */
  clickSaveButtonAddtionalInformation() {
    this.getSaveButtonAddtionalInformation().click();
  }

  /**
   * click Add button to add previous documents
   */
  clickAddPreviousDocumentButton() {
    this.getAddPreviousDocumentsButton().click();
  }

  /**
   * select class
   */
  selectClass(documentClass) {
    this.getClass().type(documentClass).type("{downarrow}").type("{enter}");
  }

  /**
   * select type
   */
  selectType(type) {
    this.getType().type(type).type("{downarrow}").type("{enter}");
  }

  /**
   * select Reference
   */
  selectReference(reference) {
    this.getReference().type(reference);
  }

  /**
   * click Save Button
   */
  clickSaveButton() {
    this.getSaveButton().click();
  }

  /**
   * click Add button to add packages
   */
  clickAddPackagesButton() {
    this.getAddPackagesButton().click();
  }

  /**
   * type count
   */
  typeCount(count) {
    this.getCount().type(count);
  }

  /**
   * select Package Kind
   */
  selectPackageKind(packageKind) {
    this.getPackageKind().type(packageKind).type("{downarrow}").type("{enter}");
  }

  /**
   * type Marks
   */
  typeMarks(marks) {
    this.getMarks().type(marks);
  }

  /**
   * click Save Packages Button
   */
  clickSavePackagesButton() {
    this.getSavePackagesButton().click();
  }

  /**
   * click Add button to add Documents
   */
  clickAddDocumentsButton() {
    this.getAddDocumentsButton().click();
  }

  /**
   * select Document Code
   */
  selectDocumentCode(documentCode) {
    this.getDocumentCode().type(documentCode).type("{downarrow}").type("{enter}");
  }

  /**
   * select Status
   */
  selectStatus(status) {
    this.getStatus().type(status).type("{downarrow}").type("{enter}");
  }

  /**
   * select Status
   */
  typeDocumentReference(reference) {
    this.getDocumentReference().type(reference);
  }

  /**
   * click Save Documents Button
   */
  clickSaveDocumentsButton() {
    this.getSaveDocumentsButton().click();
  }

  /**
   * click Add button to add Tax Lines
   */
  clickAddTaxLinesButton() {
    this.getAddTaxLinesButton().click();
  }

  /**
   * select Tax Code
   */
  selectTaxCode(taxCode) {
    this.getTaxCode().type(taxCode).type("{downarrow}").type("{enter}");
  }

  /**
   * select Trid
   */
  selectTrid(trid) {
    this.getTrid().type(trid).type("{downarrow}").type("{enter}");
  }

  /**
   * select Mop
   */
  selectMop(Mop) {
    this.getMop().type(Mop).type("{downarrow}").type("{enter}");
  }

  /**
   * click Save Tax Lines Button
   */
  clickSaveTaxLineButton() {
    this.getSaveTaxLinesButton().click();
  }

  /**
   * click Add button to add Supervising Office
   */
  clickAddSupervisingOfficeButton() {
    this.getAddSupervisingOfficeButton().click();
    cy.get("app-add-or-update-party button").eq(9).click();
  }

  /**
   * select Tax Code
   */
  typeSupervisingOffice(supervisingOffice) {
    this.getSupervisingOffice().type(supervisingOffice);
  }

  /**
   * select Trid
   */
  typeAddress1(address1) {
    this.getAddress1().type(address1);
  }

  /**
   * select Mop
   */
  typeAddress2(address2) {
    this.getAddress2().type(address2);
  }

  /**
   * select Mop
   */
  typeCity(city) {
    this.getCity().type(city);
  }

  /**
   * select State
   */
  typeState(state) {
    this.getState().type(state);
  }

  /**
   * select PostCode
   */
  typePostCode(postalCode) {
    this.getPostCode().type(postalCode);
  }

  /**
   * select Country
   */
  selectCountry(country) {
    this.getCountry().type(country).type("{downarrow}").type("{enter}");
  }

  /**
   * click Save Supervising Office Button
   */
  clickSaveSupervisingOfficeButton() {
    this.getSaveSupervisingOfficeButton().click();
  }
}
export default ItemInfoPage;
