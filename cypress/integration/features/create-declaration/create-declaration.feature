#
# author Zeeshan Asghar
# Dated: 15/11/2021
#

Feature: Create Declaration

    Background: Login to the application
        Given I go to application
        When  I enter valid credentials
        And   I click on login button
        Then  Application home page opens successfully

    @create-declaration
    Scenario: Verify that user is able to submit declaration by copy to new
        Given I click on declarations button in header menu
        And   Declaration page opens up successfully
        When  I search existing declaration by registration number
        And   I click on copy to new button
        And   I click on history button
        And   I click on submit button to submit declaration
        Then  Declaration should be submitted successfully
