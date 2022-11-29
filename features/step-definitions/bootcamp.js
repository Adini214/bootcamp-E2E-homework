const { Given, When, Then } = require("@wdio/cucumber-framework");

Given("the User is on the home page", async () => {
    await browser.url("https://www.newegg.com/");
});

When("the User closes the promo banner if it appears", async () => {
    const banner = await $('[class="modal-Website-img"]');
    const closeButton = await $('[class="close"]');
    try {
        await banner.waitForDisplayed({ timeout: 5000, reverse: false });
        return closeButton.click();
    } catch (error) {
        console.log('Banner is not displayed.')
    }
});

//Search bar scenario
When("the User enters the word {string} in the search bar", async (searchWord) => {
    const searchBar = await $('[type="search"]');
    await searchBar.setValue(`${searchWord}`);
});

When("the User clicks the search button", async () => {
    const searchButton = await $('[class="ico ico-search"]');
    await searchButton.click();
});

Then("the User should see at least one item on the list", async () => {
    const item = await $('[class="item-cell"]')
    await expect(item).toBeDisplayed();
});

//Logo scenario
When("the User opens Today's Best Deals tab", async () => {
    const button = await $(`.font-s=Today's Best Deals`);
    await button.click();
});

When("the User clicks on the Internet shop logo", async () => {
    const button = await $('[alt="Newegg"]');
    await button.click();
});

Then("the User should see the main page", async () => {
    await expect(browser).toHaveUrl("https://www.newegg.com/");
});
