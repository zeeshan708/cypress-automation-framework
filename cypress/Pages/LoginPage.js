/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */

/**
 * @author Zeeshan Asghar
 * Dated: 15/11/2021
 */

class Login {
  enterUserName(strEmail) {
    cy.get("input[placeholder='Email']").type(strEmail);
  }

  enterPassword(strPassword) {
    cy.get("input[placeholder='Password']").type(strPassword);
  }

  clickLoginButton() {
    cy.get("button[type='submit']").click({ force: true });
    cy.wait(5000);
  }

  marketAttendance() {
    const now = new Date();
    const hours = now.getHours();
    cy.log(hours);
    if (hours >= 16 && hours <= 18) {
      cy.xpath("//span[contains(text(),'CLOCK IN')]").click();
      cy.log("inside clickin");
      cy.wait(5000);
    } else {
      cy.log("inside clickout");
      cy.xpath("//span[contains(text(),'Clock Out')]").click({ force: true });
    }
  }

  logOut() {
    cy.xpath("//i[@class='fa fa-chevron-right']").click({ force: true });
    cy.xpath("//a[@id='LogOut']").click({ force: true });
  }
}
export default Login;
