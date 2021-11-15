/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */

/**
 * @author Zeeshan Asghar
 * Dated: 28/10/2021
 */

class PartyInfo {
  // Locators
  // Enter Reference details
  getEntryReference() {
    return cy.get("app-reference-details mat-form-field input").eq(0).scrollIntoView();
  }

  getEntryType() {
    return cy.get("app-reference-details mat-form-field input").eq(1).scrollIntoView();
  }

  getAdditionalType() {
    return cy.get("app-reference-details mat-form-field input").eq(2).scrollIntoView();
  }

  getRepType() {
    return cy.get("app-reference-details mat-form-field input").eq(3).scrollIntoView();
  }

  getRepTypeValue(RepType) {
    return cy.xpath(`//span[contains(text(),'${RepType}')]`).scrollIntoView();
  }

  getPackages() {
    return cy.get("app-reference-details mat-form-field input").eq(6).scrollIntoView();
  }

  getGrossWeight() {
    return cy.get("app-reference-details mat-form-field input").eq(5).scrollIntoView();
  }

  // Enter Consignor details
  getConsignor() {
    return cy.get("app-consignor-details mat-form-field input").eq(0).scrollIntoView();
  }

  getConsignorAddress1() {
    return cy.get("app-consignor-details mat-form-field input").eq(1).scrollIntoView();
  }

  getConsignorAddress2() {
    return cy.get("app-consignor-details mat-form-field input").eq(2).scrollIntoView();
  }

  getConsignorCity() {
    return cy.get("app-consignor-details mat-form-field input").eq(3).scrollIntoView();
  }

  getConsignorState() {
    return cy.get("app-consignor-details mat-form-field input").eq(4).scrollIntoView();
  }

  getConsignorPostCode() {
    return cy.get("app-consignor-details mat-form-field input").eq(5).scrollIntoView();
  }

  getConsignorCountry() {
    return cy.get("app-consignor-details mat-form-field input").eq(6).scrollIntoView();
  }

  getConsignorEori() {
    return cy.get("app-consignor-details mat-form-field input").eq(7).scrollIntoView();
  }

  getConsignorCountryValue(country) {
    return cy.xpath(`//span[contains(text(),'${country}')]`);
  }

  // Enter Consignee details
  getConsignee() {
    return cy.get("app-consignee-details mat-form-field input").eq(0);
  }

  getConsigneeAddress1() {
    return cy.get("app-consignee-details mat-form-field input").eq(1);
  }

  getConsigneeAddress2() {
    return cy.get("app-consignee-details mat-form-field input").eq(2);
  }

  getConsigneeCity() {
    return cy.get("app-consignee-details mat-form-field input").eq(3);
  }

  getConsigneeState() {
    return cy.get("app-consignee-details mat-form-field input").eq(4);
  }

  getConsigneePostCode() {
    return cy.get("app-consignee-details mat-form-field input").eq(5);
  }

  getConsigneeCountry() {
    return cy.get("app-consignee-details mat-form-field input").eq(6);
  }

  getConsigneeCountryValue(country) {
    return cy.xpath(`//span[contains(text(),'${country}')]`);
  }

  getConsigneeEori() {
    return cy.get("app-consignee-details mat-form-field input").eq(7);
  }

  // Enter Agent details
  getAgent() {
    return cy.get("app-agent-details mat-form-field input").eq(0);
  }

  getAgentAddress1() {
    return cy.get("app-agent-details mat-form-field input").eq(1);
  }

  getAgentAddress2() {
    return cy.get("app-agent-details mat-form-field input").eq(2);
  }

  getAgentCity() {
    return cy.get("app-agent-details mat-form-field input").eq(3);
  }

  getAgentState() {
    return cy.get("app-agent-details mat-form-field input").eq(4);
  }

  getAgentPostCode() {
    return cy.get("app-agent-details mat-form-field input").eq(5);
  }

  getAgentCountry() {
    return cy.get("app-agent-details mat-form-field input").eq(6);
  }

  getAgentCountryValue(country) {
    return cy.xpath(`//span[contains(text(),'${country}')]`);
  }

  getAgentEori() {
    return cy.get("app-agent-details mat-form-field input").eq(7);
  }

  getNextButton() {
    return cy.xpath("//button[@type='button']//span[@class='mat-button-wrapper'][normalize-space()='Next']");
  }

  // enter warehouse details
  getWarehouseId() {
    return cy.xpath("//div[normalize-space()='Warehouse ID']/input");
  }

  //  *******************************************************
  //              Enter Reference Details
  //  *******************************************************

  /**
   * Generates random entry refernce and type
   */
  typeEntryReference() {
    cy.createRandomAlphaNumeric().then(($value) => {
      this.getEntryReference().type($value);
      cy.writeDataInFile("cypress/data-files/dynamic-data/dynamic-data.json", "entryReference", $value);
    });
  }

  /**
   * select entry type
   * @param entryType Type of entry i.e import, export
   */
  selectEntryType(entryType) {
    this.getEntryType().type(entryType).type("{enter}");
  }

  /**
   * select additional type
   * @param additionalType Additional type i.e Good Arrived, Goods not arrived
   */
  selectAdditionalType(additionalType) {
    this.getAdditionalType().type(additionalType).type("{enter}");
  }

  /**
   * select Representation type
   * @param repType Representation type i.e Direct Representation, Indirect Representation
   */
  selectRepType(repType) {
    this.getRepType().type(repType).type("{enter}");
    // this.getRepTypeValue(repType).click();
  }

  /**
   * Enter Gross Weight
   * @param grossWeight
   */
  typeGrossWeight(grossWeight) {
    this.getGrossWeight().type(grossWeight);
  }

  /**
   * type no of packages
   * @param packages No of packages
   */
  typePackages(packages) {
    this.getPackages().type(packages);
  }

  //  **************************************************************
  //                  Enter Consignor Details
  //  **************************************************************

  /**
   * type consignor
   * @param consignor Consignor name
   */
  typeConsignorName(consignor) {
    this.getConsignor().type(consignor);
  }

  /**
   * type consignor address1
   * @param address1 address1 of consignor
   */
  typeConsignorAddress1(address1) {
    this.getConsignorAddress1().type(address1);
  }

  /**
   * type consignor address2
   * @param address2 address1 of consignor
   */
  typeConsignorAddress2(address2) {
    this.getConsignorAddress2().type(address2);
  }

  /**
   * type consignor city
   * @param city city of consignor
   */
  typeConsignorCity(city) {
    this.getConsignorCity().type(city);
  }

  /**
   * type consignor state
   * @param state state of consignor
   */
  typeConsignorState(state) {
    this.getConsignorState().type(state);
  }

  /**
   * type consignor postcode
   * @param postCode state of consignor
   */
  typeConsignorPostCode(postCode) {
    this.getConsignorPostCode().type(postCode);
  }

  /**
   * select consignor country
   * @param country country of consignor
   */
  selectConsignorCountry(country) {
    this.getConsignorCountry().type(country).type("{enter}");
  }

  /**
   * select consignor eori
   * @param eori eori of consignor
   */
  typeConsignorEori(eori) {
    this.getConsignorEori().type(eori);
  }

  //  **************************************************************
  //                  Enter Consignee Details
  //  **************************************************************

  /**
   * type Consignee
   * @param Consignee Consignee name
   */
  typeConsigneeName(Consignee) {
    this.getConsignee().type(Consignee);
  }

  /**
   * type Consignee address1
   * @param address1 address1 of Consignee
   */
  typeConsigneeAddress1(address1) {
    this.getConsigneeAddress1().type(address1);
  }

  /**
   * type Consignee address2
   * @param address2 address1 of Consignee
   */
  typeConsigneeAddress2(address2) {
    this.getConsigneeAddress2().type(address2);
  }

  /**
   * type Consignee city
   * @param city city of Consignee
   */
  typeConsigneeCity(city) {
    this.getConsigneeCity().type(city);
  }

  /**
   * type Consignee state
   * @param state state of Consignee
   */
  typeConsigneeState(state) {
    this.getConsigneeState().type(state);
  }

  /**
   * type Consignee postcode
   * @param postCode state of Consignee
   */
  typeConsigneePostCode(postCode) {
    this.getConsigneePostCode().type(postCode);
  }

  /**
   * select Consignee country
   * @param country country of Consignee
   */
  selectConsigneeCountry(country) {
    this.getConsigneeCountry().type(country).type("{enter}");
  }

  /**
   * type EORI
   * @param eori EORI of Consignee
   */
  typeConsigneeEori(eori) {
    this.getConsigneeEori().type(eori);
  }
  //  **************************************************************
  //                  Enter Agent Details
  //  **************************************************************

  /**
   * type agent name
   * @param agentName Agent name
   */
  typeAgentName(agentName) {
    this.getAgent().type(agentName);
  }

  /**
   * type Agent address1
   * @param address1 address1 of Agent
   */
  typeAgentAddress1(address1) {
    this.getAgentAddress1().type(address1);
  }

  /**
   * type Agent address2
   * @param address2 address1 of Agent
   */
  typeAgentAddress2(address2) {
    this.getAgentAddress2().type(address2);
  }

  /**
   * type Agent city
   * @param city city of Agent
   */
  typeAgentCity(city) {
    this.getAgentCity().type(city);
  }

  /**
   * type Agent state
   * @param state state of Agent
   */
  typeAgentState(state) {
    this.getAgentState().type(state);
  }

  /**
   * type Agent postcode
   * @param postCode state of Agent
   */
  typeAgentPostCode(postCode) {
    this.getAgentPostCode().type(postCode);
  }

  /**
   * select Agent country
   * @param country country of Agent
   */
  selectAgentCountry(country) {
    this.getAgentCountry().type(country).type("{enter}");
  }

  /**
   * type EORI
   * @param eori EORI of Agent
   */
  typeAgentEori(eori) {
    this.getAgentEori().type(eori);
  }

  /**
   * click next button
   * @param
   */
  clickNextButton() {
    this.getNextButton().click();
  }

  //  **************************************************************
  //                  Enter Warehouse Details
  //  **************************************************************

  /**
   * type warehouseId
   * @param warehouseId warehouseId
   */
  typeWarehouseId(warehouseId) {
    this.getWarehouseId().type(warehouseId);
  }
}
export default PartyInfo;
