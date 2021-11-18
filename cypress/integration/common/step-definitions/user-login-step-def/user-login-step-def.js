/* eslint-disable no-undef */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import Login from "../../../../Pages/LoginPage";

const login = new Login();

Given("I go to application", () => {
  cy.log(Cypress.env("app-url"));
  cy.visit(Cypress.env("app-url"));
});

When("I enter valid credentials", () => {
  login.enterUserName(Cypress.env("username"));
  login.enterPassword(Cypress.env("password"));
});
And("I click on login button", () => {
  login.clickLoginButton();
});

Then("Application home page opens successfully", () => {
  cy.url().should("include", "/app/landing");
});
