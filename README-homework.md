# TA-Bootcamp-E2E

Develop E2E automated JS tests for https://www.newegg.com

Create bootcamp.feature file with the following 2 scenarios. Prepare tests only for Desktop run

Feature: Bootcamp E2E

Scenario: Search bar
1. Open the home page
2. Close the promo banner if it appears
3. Entry the word "Windows" in the search bar (top middle)
4. Click the search
5. Check that at least one item appears

Scenario: Internet shop logo button
1. Open the home page
2. Close the promo banner if it appears
3. Open "Today's Best Deals" tab
4. Click on the Internet shop logo (top right corner)
5. Check that the main page opened

# Extra requirements: 
* For task set up WebdriverIO + Cucumber (As it was done in Cucumber lectures)
* As you may already notice, the 2 first steps are the same for both scenarios. Please use `Background:` to reduce the number of steps.
* Before sending me a task prepare README.md so I can run your tests. 
* Good practice, avoid magic numbers (You can google if you don't know what it means)
* Use consts for variables
* For assertions use WebdriverIO

# Hint
* For "Close the promo banner if it appears" 2 possible ideas. You can use try-catch. Or the banner disappears if you refresh the page when the banner appears.