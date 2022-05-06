const {Given, Then, When} = require('@wdio/cucumber-framework');


When(/^I press log in$/, function() {
    this.navigationTest.clickOnHeaderButtonLogin();
});


