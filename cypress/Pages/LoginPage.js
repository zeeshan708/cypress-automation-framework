/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */

/**
 * @author Zeeshan Asghar
 * Dated: 15/11/2021
 */

class Login {
  enterUserName(strEmail) {
    cy.get("input[placeholder='Username']").type(strEmail);
  }

  enterPassword(strPassword) {
    cy.get("input[placeholder='Password']").type(strPassword);
  }

  clickLoginButton() {
    cy.xpath("//span[text()='Sign in']").click({ force: true });
  }
}
export default Login;
