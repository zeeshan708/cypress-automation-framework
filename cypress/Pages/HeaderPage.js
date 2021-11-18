/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */

/**
 * @author Zeeshan Asghar
 * Dated: 16/11/2021
 */

class Header {
  /**
   * clicks on declaration in menu
   */
  clickDeclarations() {
    cy.get("li[id='ics-declaration.menu']").click();
  }
}
export default Header;
