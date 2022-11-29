Feature: Bootcamp E2E

    Background:
        Given the User is on the home page
        When the User closes the promo banner if it appears

    Scenario Outline: User can search for articles on the website
        When the User enters the word "<product>" in the search bar
        * the User clicks the search button
        Then the User should see at least one item on the list
        Examples:
            | product  |
            | Windows  |
            | Mouse    |


    Scenario: Logo button forwards the User to the main page
        When the User opens Today's Best Deals tab
        * the User clicks on the Internet shop logo
        Then the User should see the main page
