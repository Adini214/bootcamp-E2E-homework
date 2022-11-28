const { Given, When, Then } = require("@wdio/cucumber-framework");

Given("I am on the home page", async () => {
    await browser.url("https://www.newegg.com/");
});

Given("I close the promo banner if it appears", async () => {
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
When("I enter the word {string} in the search bar", async (searchWord) => {
    const searchBar = await $('[type="search"]');
    await searchBar.setValue(`${searchWord}`);
});

When("I click the search button", async () => {
    const searchButton = await $('[class="ico ico-search"]');
    await searchButton.click();
});

Then("I see that at least one item appears", async () => {
    const item = await $('[class="item-cell"]')
    await expect(item).toBeDisplayed();
});

//Logo scenario
When("I open Today's Best Deals tab", async () => {
    const button = await $(`.font-s=Today's Best Deals`);
    await button.click();
});

When("I click on the Internet shop logo", async () => {
    const button = await $('[alt="Newegg"]');
    await button.click();
});

Then("Main page opens", async () => {
    await expect(browser).toHaveUrl("https://www.newegg.com/");
});
