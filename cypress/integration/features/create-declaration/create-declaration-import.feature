Feature: Create Declaration

    Background: Login to the application
        Given I go to application
        When  I enter valid credentials
            | username      | password   |
            | customukadmin | Admin@1234 |
        And I click on login button
        Then Application home page opens successfully

    @create-declaration @smoke-front-end @c21
    Scenario: Verify that user is able to create declaration successfully
        Given I click on manage menu on the application header
        And   I click on chief declarations link
        And   Chief declaration page opens up successfully
        And   I click on create declaration button
        When  I enter reference details
            | EntryType | AdditionalType | RepType | InventoryReference | GrossWeight | Packages |
            | IM        | C88_D          | 2       |                    | 1234.5      | 10       |
        And I enter consignor details
            | Consignor        | Address1  | Address2    | City   | State | PostCode | Country | Eori |
            | tv new consignor | 401 NORTH | LAKE STREET | LONDON | utah  | WC2N 5DU | US      |      |
        And I enter Consignee details1
            | Consignee | Address1 | Address2 | City | State | PostCode | Country | Eori           |
            | CCCC      | A1A1     | A2A2A    | CITY | STATE | PCODE    | GB      | GB445809527006 |
        And I enter agent details
            | AgentName | Address1 | Address2 | City   | State   | PostCode | Country | Eori           |
            | AGENT1    | C        | AGADRS2  | AGCITY | AGSTATE | AGPCODE  | US      | GB417141383000 |
        And I click next button
        And I enter transport details
            | CWC | Vessel                     | Flag | Location | TOT |
            | CN  | 2115RETESTING BY MASTHANBS | PA   | GBSOU    | 1   |
        And   I enter custom details
            | DUCRPartNo | DeferType1 | DeferNo1 | InvoiceAmount | Currency | VATAdjustment | CurrencyVAT |
            | T          | B          | 8104523  | 11,111.10     | GBP      | 222.20        | GBP         |
        And I click next button to go to item info page
        And I click add new item button
        And I enter terrif details
            | TerrifCode | TerrifDescription |
            | 6109100010 | T-shirt           |
        And I enter quantities
            | Value     | StatisticalValue | Qty1   | Qty2   |
            | 11,111.10 | 3                | 222.20 | 333.30 |
        And I enter item details
            | Adjustment | Percentage | Cpc     | Coo | Preference | ValMethod |
            | B          | 0          | 4000000 | CN  | 100        | 1         |
        And I enter additional Information
            | Code  | StatementText |
            | LIC99 | 3             |
        And I add previous documents
            | Class | Type | Reference |
            | Z     | 380  | test      |
        And I enter Packages
            | Count | PackageKind | Marks |
            | 10    | CT          | test  |
        And I enter documents
            | Code | Status |
            | N934 | AE     |
        And I enter Tax Lines
            | Code | Trid | Mop |
            | A00  | F    | F   |
            | B00  | S    | F   |
        And I enter supervising office details
            | SupervisingOffice | Address1 | Address2 | City | State   | PostCode | Country |
            | AGENT1            | AA1      | AA2      | CITY | AGSTATE | AGPCODE  | US      |
        And I click Add button to add item
        And I click next button to go to summary page
        And I click on submit button to submit declaration
        And I enter entry reference number in search entry on chief dashboard
        When  I click on Search button on chief dashboard
        Then  Declaration status should be as 'Entry Accepted'

