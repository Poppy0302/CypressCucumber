Feature: Admin

    Scenario: Go to Admin page

        Given User is at the login page go to admin page
        When  User complete username as '<username>' and password as '<password>'
        And   User click on login button 
        And   User successfully login to the Website
        And   User go to Admin page 
        Then  User live Admin page
        Examples:
            | username | password |
            | Admin    | admin123 |