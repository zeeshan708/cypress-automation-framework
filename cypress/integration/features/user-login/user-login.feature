#
# author Zeeshan Asghar
# Dated: 09/02/2022
#

Feature: User Login
    @user-login @smoke-front-end @regression
    Scenario: Verify that user is able to login in the application on entring valid credentials
        Given I go to application
        When  I enter valid credentials
        And I click on login button
        And Application home page opens successfully
        And I mark attendance
        And I logout from application