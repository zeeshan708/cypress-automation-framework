/**
 * @author Zeeshan Asghar
 * Dated: 15/11/2021
 */

/* eslint-disable no-undef */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Given, When, And } from "cypress-cucumber-preprocessor/steps";
import Header from "../../../../Pages/HeaderPage";
import Declaration from "../../../../Pages/DeclarationPage";

/// <reference types="Cypress" />

const header = new Header();
const declaration = new Declaration();

Given("I click on declarations button in header menu", () => {
  header.clickDeclarations();
});
And("Declaration page opens up successfully", () => {
  declaration.getAdvanceSearchHeader().should("have.text", " Advance Search More ");
});

When("I search existing declaration by registration number", () => {
  declaration.typeDeclarationNumber();
  declaration.clickSearchButton();
});

And("I click on copy to new button", () => {
  declaration.clickthreeDotsButton();
  declaration.clickCopyToNewButton();
});

And("I click on history button", () => {
  declaration.clickHistoryButton();
});

And("I click on submit button to submit declaration", () => {
  declaration.clickSubmitButton();
});

And("Declaration should be submitted successfully", () => {
  declaration.getSubmissionNotificationText().should("have.text", "Document submitted successfully.");
});
