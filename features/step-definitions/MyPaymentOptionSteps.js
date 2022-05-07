const { When } = require('@wdio/cucumber-framework');

When(/^I click add new card button$/, function () {
    this.myPaymentOptionTest.clickOnButtonNewCard();
});

When(/^I fill in credit card information and submit$/, function () {
    this.myPaymentOptionTest.clickOnBut();
});


When(/^I see confirmation message about card info$/, function () {
    this.myPaymentOptionTest.validateconfirmationMessageAboutCardInfo();
});


When(/^I click on 'My Saved Addresses' option$/, function () {
    this.myPaymentOptionTest.clickOnButtonMySavedAddressesOption();
});

When(/^I click on new Address button$/, function () {
    this.myPaymentOptionTest.clickOnButtonNewAddress();
});