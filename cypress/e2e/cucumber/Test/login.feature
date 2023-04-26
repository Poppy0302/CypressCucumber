Feature: Login

    Scenario: Login to Orange CRM Website

        Given User is at the login page
        When  User enters username as '<username>' and password as '<password>'
        And   User clicks on login button 
        Then  User is able to successfully login to the Website
        Examples:
            | username | password |
            | Admin    | admin123 |
    
    Scenario: Login Failed to Orange CRM Website

        Given User is at the login Failed
        When  User enters username as '<username>' and password as '<password>' Failed
        And   User clicks on login button Failed
        Then  User is able to successfully login failed to the Website
        Examples:
            | username    | password |
            | Admin123    | admin    |