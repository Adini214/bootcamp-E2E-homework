const { Given, When, Then } = require("@wdio/cucumber-framework");

Given("I am on the home page", async () => {
    await browser.url("https://www.newegg.com/");
});

Given("I close the promo banner if it appears", async () => {
    const banner = await $('[class="modal-Website-img"]');
    const closeButton = await $('//*[@id="modal-Website"]/div[2]/div/button');
    try {
        await banner.waitForDisplayed(2000);
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

When("Click the search button", async () => {
    const searchButton = await $('//*[@id="app"]/header/div[1]/div[1]/div[1]/div[5]/form/div/div[2]/button');
    await searchButton.click();
});

Then("I see that at least one item appears", async () => {
    const list = await $('//*[@id="app"]/div[3]/section/div/div/div[2]/div/div/div/div[2]/div[1]/div[2]/div[2]');
    await expect(list).toHaveElementClassContaining('item-cell');
});

//Logo scenario
When("I open Today's Best Deals tab", async () => {
    const button = await $('//*[@id="trendingBanner_720202"]/span');
    await button.click();
});

When("Click on the Internet shop logo", async () => {
    const button = await $('//*[@id="app"]/header/div[1]/div[1]/div[1]/div[2]/a/img');
    await button.click();
});

Then("Main page opens", async () => {
    await expect(browser).toHaveUrl("https://www.newegg.com/");
});
