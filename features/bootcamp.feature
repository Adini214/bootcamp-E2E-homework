@wip
Feature: Bootcamp E2E
    
    Background:
        Given I am on the home page
        * I close the promo banner if it appears

    Scenario: Search bar
        When I enter the word "Windows" in the search bar
        * Click the search button
        Then I see that at least one item appears


    Scenario: Internet shop logo button
        When I open "Today's Best Deals" tab
        * Click on the Internet shop logo
        Then Main page opens