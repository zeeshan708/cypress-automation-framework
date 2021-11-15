/* eslint-disable no-undef */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Given, When, And } from "cypress-cucumber-preprocessor/steps";
import Header from "../../../../Pages/HeaderPage";
import ChiefDeclaration from "../../../../Pages/ChiefDeclarationPage";
import PartyInfo from "../../../../Pages/PartyInfoPage";
import HeaderInfo from "../../../../Pages/HeaderInfoPage";
import ItemInfo from "../../../../Pages/ItemInfoPage";
import SummaryPage from "../../../../Pages/SummaryPage";

/// <reference types="Cypress" />

const header = new Header();
const chiefDeclartion = new ChiefDeclaration();
const partyInfo = new PartyInfo();
const headerInfo = new HeaderInfo();
const itemInfo = new ItemInfo();
const summary = new SummaryPage();

// Enter reference details
function enterReferenceDetails(datatable) {
  partyInfo.typeEntryReference();
  datatable.hashes().forEach((element) => {
    partyInfo.selectEntryType(element.EntryType);
    partyInfo.selectAdditionalType(element.AdditionalType);
    partyInfo.selectRepType(element.RepType);
    partyInfo.typeGrossWeight(element.GrossWeight);
    partyInfo.typePackages(element.Packages);
  });
}

// Enter consignor details
function enterConsignorDetails(datatable) {
  datatable.hashes().forEach((element) => {
    partyInfo.typeConsignorName(element.Consignor);
    partyInfo.typeConsignorAddress1(element.Address1);
    partyInfo.typeConsignorAddress2(element.Address2);
    partyInfo.typeConsignorCity(element.City);
    partyInfo.typeConsignorState(element.State);
    partyInfo.typeConsignorPostCode(element.PostCode);
    partyInfo.selectConsignorCountry(element.Country);
  });
}

// Enter consignee details
function enterConsigneeDetails(datatable) {
  datatable.hashes().forEach((element) => {
    partyInfo.typeConsigneeName(element.Consignee);
    partyInfo.typeConsigneeAddress1(element.Address1);
    partyInfo.typeConsigneeAddress2(element.Address2);
    partyInfo.typeConsigneeCity(element.City);
    partyInfo.typeConsigneeState(element.State);
    partyInfo.typeConsigneePostCode(element.PostCode);
    partyInfo.selectConsigneeCountry(element.Country);
    partyInfo.typeConsigneeEori(element.Eori);
  });
}

// Enter agent details
function enterAgentDetails(datatable) {
  datatable.hashes().forEach((element) => {
    partyInfo.typeAgentName(element.AgentName);
    partyInfo.typeAgentAddress1(element.Address1);
    partyInfo.typeAgentAddress2(element.Address2);
    partyInfo.typeAgentCity(element.City);
    partyInfo.typeAgentState(element.State);
    partyInfo.typeAgentPostCode(element.PostCode);
    partyInfo.selectAgentCountry(element.Country);
    partyInfo.typeAgentEori(element.Eori);
  });
}

// Enter transport details
function enterTransportDetails(datatable) {
  datatable.hashes().forEach((element) => {
    headerInfo.selectCWC(element.CWC);
    headerInfo.selectFlag(element.Flag);
    headerInfo.selectLocation(element.Location);
    headerInfo.selectTOT(element.TOT);
  });
}

// Enter custom details
function enterCustomDetails(datatable) {
  headerInfo.typeDUCR();

  datatable.hashes().forEach((element) => {
    // headerInfo.selectDUCRPartNo(element.DUCRPartNo);
    headerInfo.selectDeferType1(element.DeferType1);
    headerInfo.selectDeferNo1(element.DeferNo1);
    headerInfo.selectInvoiceAmount(element.InvoiceAmount);
    headerInfo.selectCurrency(element.Currency);
    headerInfo.selectVATAdjustment(element.VATAdjustment);
    headerInfo.selectCurrencyVAT(element.CurrencyVAT);
  });
}
// Enter item terrif details
function enterTerrifDetails(datatable) {
  datatable.hashes().forEach((element) => {
    itemInfo.typeTerrifCode(element.TerrifCode);
    itemInfo.typeTerrifDescription(element.TerrifDescription);
  });
}

// Enter item quantities details
function enterQauntitiesDetails(datatable) {
  datatable.hashes().forEach((element) => {
    itemInfo.typeQuantitiesValue(element.Value);
    // itemInfo.typeQuantitiesStatisticalValue(element.StatisticalValue);
    itemInfo.typeQty1(element.Qty1);
    itemInfo.typeQty2(element.Qty2);
  });
}

// Enter item  details
function enterItemDetails(datatable) {
  datatable.hashes().forEach((element) => {
    itemInfo.selectAdjustment(element.Adjustment);
    itemInfo.typeDetailPercentage(element.Percentage);
    itemInfo.typeCpc(element.Cpc);
    itemInfo.typeDetailCoo(element.Coo);
    itemInfo.selectPreference(element.Preference);
    itemInfo.selectValMethod(element.ValMethod);
  });
}

// Enter additional information
function enterAdditionalInformation(datatable) {
  datatable.hashes().forEach((element) => {
    itemInfo.clickAddAdditionalInformationButton();
    itemInfo.selectCodeValue(element.Code);
    // itemInfo.typeStatementText(element.StatementText);
    itemInfo.clickSaveButtonAddtionalInformation();
  });
}

// Enter previous documents information
function addPreviousDocuments(datatable) {
  datatable.hashes().forEach((element) => {
    itemInfo.clickAddPreviousDocumentButton();
    itemInfo.selectClass(element.Class);
    itemInfo.selectType(element.Type);
    itemInfo.selectReference(element.Reference);
    itemInfo.clickSaveButton();
  });
}

// Add Packages
function addPackages(datatable) {
  datatable.hashes().forEach((element) => {
    itemInfo.clickAddPackagesButton();
    itemInfo.typeCount(element.Count);
    itemInfo.selectPackageKind(element.PackageKind);
    itemInfo.typeMarks(element.Marks);
    itemInfo.clickSavePackagesButton();
  });
}

// Add Documents
function addDocuments(datatable) {
  datatable.hashes().forEach((element) => {
    itemInfo.clickAddDocumentsButton();
    itemInfo.selectDocumentCode(element.Code);
    itemInfo.selectStatus(element.Status);
    itemInfo.clickSaveDocumentsButton();
  });
}

// Add Tax Lines
function addTaxLines(datatable) {
  datatable.hashes().forEach((element) => {
    itemInfo.clickAddTaxLinesButton();
    itemInfo.selectTaxCode(element.Code);
    itemInfo.selectTrid(element.Trid);
    itemInfo.selectMop(element.Mop);
    itemInfo.clickSaveTaxLineButton();
  });
}

// Add Supervising Office Details
function addSupervisingOffice(datatable) {
  datatable.hashes().forEach((element) => {
    itemInfo.clickAddSupervisingOfficeButton();
    itemInfo.typeSupervisingOffice(element.SupervisingOffice);
    itemInfo.typeAddress1(element.Address1);
    itemInfo.typeAddress2(element.Address2);
    itemInfo.typeCity(element.City);
    itemInfo.typeState(element.State);
    itemInfo.typePostCode(element.PostCode);
    itemInfo.selectCountry(element.Country);
    // itemInfo.clickSaveSupervisingOfficeButton();
  });
}

Given("I click on manage menu on the application header", () => {
  header.clickManage();
});
And("I click on chief declarations link", () => {
  header.clickChiefDeclarations();
});
And("Chief declaration page opens up successfully", () => {
  cy.get(".text-primary.my-2").should("have.text", " Search Declaration ");
});
And("I click on create declaration button", () => {
  chiefDeclartion.clickCreateDeclaration();
});
When("I enter reference details", enterReferenceDetails);
When("I enter consignor details", enterConsignorDetails);
When("I enter Consignee details1", enterConsigneeDetails);
When("I enter agent details", enterAgentDetails);
When("I click next button", () => {
  partyInfo.clickNextButton();
  // cy.xpath(
  //   "//app-header-info[@class='ng-star-inserted']//span[@class='mat-button-wrapper'][normalize-space()='Next']"
  // ).click();
});
And("I enter transport details", enterTransportDetails);
And("I enter custom details", enterCustomDetails);
And("I click next button to go to item info page", () => {
  headerInfo.clickNextButton();
});

When("I click add new item button", () => {
  itemInfo.clickAddItemInfoButton();
});
When("I enter terrif details", enterTerrifDetails);
When("I enter quantities", enterQauntitiesDetails);
When("I enter item details", enterItemDetails);
When("I enter additional Information", enterAdditionalInformation);
When("I add previous documents", addPreviousDocuments);
When("I enter Packages", addPackages);
When("I enter documents", addDocuments);
When("I enter Tax Lines", addTaxLines);
When("I enter supervising office details", addSupervisingOffice);
When("I click Add button to add item", () => {
  itemInfo.clickAddButton();
});

When("I click next button to go to summary page", () => {
  itemInfo.clickNextButton();
});

When("I click on submit button to submit declaration", () => {
  summary.clickSubmitButton();
});

Then("I click on create declaration button", () => {
  chiefDeclartion.clickCreateDeclaration();
});

// ************verify declaration status**************
And("I enter entry reference number in search entry on chief dashboard", () => {
  chiefDeclartion.typeEntryReference();
});
When("I click on Search button on chief dashboard", () => {
  chiefDeclartion.clickSearchButton();
});
When("Declaration status should be as {string}", (entryStatus) => {
  cy.readFile("cypress/data-files/dynamic-data/dynamic-data.json").then((obj) => {
    const dynamicData = obj;
    chiefDeclartion.getDeclarationEntryReference().should("have.text", dynamicData.entryReference);
  });
  chiefDeclartion.getDeclarationStatus().should("have.text", entryStatus);
});
