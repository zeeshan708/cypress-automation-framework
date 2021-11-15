Feature: User Login
    @user-login @smoke-front-end @regression
    Scenario: Verify that user is able to login in the application on entring valid credentials
        Given I go to application
        When  I enter valid credentials
            | username      | password   |
            | customukadmin | Admin@1234 |
        And I click on login button
        Then Application home page opens successfully
    @user-login @smoke-front-end
    Scenario: Verify that user is able to login in the application on entring valid credentials- failure
        Given I go to application
        When  I enter valid credentials
            | username      | password |
            | customukadmin | Admin    |
        And I click on login button
        Then Application home page opens successfully