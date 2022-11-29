Feature: Bootcamp E2E

    Background:
        Given User is on the home page
        When User closes the promo banner if it appears

    Scenario Outline: User can search for articles on the website
        When User enters the word "<product>" in the search bar
        * User clicks the search button
        Then User should see at least one item on the list
        Examples:
            | product  |
            | Windows  |
            | Mouse    |


    Scenario: Logo button forwards the User to the main page
        When User opens Today's Best Deals tab
        * User clicks on the Internet shop logo
        Then User should see the main page
