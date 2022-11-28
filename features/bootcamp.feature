Feature: Bootcamp E2E

    Background:
        Given I am on the home page
        * I close the promo banner if it appears
    @finished
    Scenario: Finding articles on the website
        When I enter the word "Windows" in the search bar
        * I click the search button
        Then I see that at least one item appears

    @finished
    Scenario: Functionality of Logo button
        When I open Today's Best Deals tab
        * I click on the Internet shop logo
        Then Main page opens
