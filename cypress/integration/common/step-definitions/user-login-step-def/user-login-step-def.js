/* eslint-disable no-undef */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import Login from "../../../../Pages/LoginPage";

const login = new Login();

// enter credentials
function enterCredentials(datatable) {
  datatable.hashes().forEach((element) => {
    login.enterUserName(element.username);
    login.enterPassword(element.password);
  });
}

Given("I go to application", () => {
  cy.log(Cypress.env("app-url"));
  cy.visit(Cypress.env("app-url"));
});

When("I enter valid credentials", enterCredentials);
And("I click on login button", () => {
  login.clickLoginButton();
});

Then("Application home page opens successfully", () => {
  cy.url().should("include", "/common/landing");
});
