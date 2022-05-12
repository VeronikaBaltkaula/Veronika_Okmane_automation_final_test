const { Then, When } = require('@wdio/cucumber-framework');
const { default: debug } = require('webdriverio/build/commands/browser/debug');

Then(/^I press not yet a customer$/, function () {
    this.registerTest.clickNotYetACustomer();
});

When(/^I enter email address$/, function () {
    const Email = "nika1011@inbox.lv";
    this.registerTest.inputEmailAddress(Email);
});

When(/^I enter password$/, function () {
    this.registerTest.inputPassword("pppppp");
});

When(/^I enter password reapeatedly$/, function () {
    this.registerTest.inputPasswordRepeat();
});

When(/^I select security question about elder sibling$/, function () {
    this.registerTest.selectSecurityQuestion("Your eldest siblings middle name?");
});

When(/^I enter answer$/, function () {
    this.registerTest.inputSecurityAnswer("vika");
});

When(/^I press register button$/, function () {
    this.registerTest.clickRegisterButton();
});

When(/^I see message about email must be unique$/, function () {
    this.registerTest.validatEmailUsedMessage();
});

Then(/^I am in register page$/, function () {
    this.registerTest.clickRegisterButton();
});

When(/^I have registered account$/, function () {
    this.navigationTest.clickOnHeaderButtonAccount();
    this.navigationTest.clickOnHeaderButtonLogin();
    this.navigationTest.validateUserIsOnLoginPage();
    this.loginTest.inputLoginEmail();
    this.loginTest.inputLoginPassword();
    this.loginTest.confirmLogin();
    this.loginTest.validateUserIsLoggedIn();
});

