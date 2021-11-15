/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */

/**
 * @author Zeeshan Asghar
 * Dated: 28/10/2021
 */

class Header {
  /**
   * Hovers on Manage link in menu
   */
  clickManage() {
    cy.get("#dtNavbar a[data-i18n='menuManage']").realHover();
  }

  /**
   * clicks on chief declaration in menu
   */
  clickChiefDeclarations() {
    cy.xpath("//div[@id='dtNavbar']//ul//a[normalize-space()='CHIEF Declarations']").click();
  }
}
export default Header;
