/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
class Login {
  enterUserName(strEmail) {
    cy.get("#username").type(strEmail);
  }

  enterPassword(strPassword) {
    cy.get("#password").type(strPassword);
  }

  clickLoginButton() {
    cy.get("input[type='submit']").click();
  }
}
export default Login;
