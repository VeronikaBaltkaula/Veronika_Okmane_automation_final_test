const {Then} = require('@wdio/cucumber-framework');

Then(/^I press not yet a customer$/, function() {
    this.registerTest.clickNotYetACustomer();
});