const { Given, When, Then } = require('@wdio/cucumber-framework');

Given(/^I open landing page$/, function () {
    browser.url("http://localhost:3000/#/");
    this.otherTest.dismissInitialPopus();
});

When(/^I have logged out$/, function () {
    this.navigationTest.clickOnHeaderButtonAccount();
    this.navigationTest.clickOnButtonLogOut();
});

Then(/^I press on Account button$/, function () {
    this.navigationTest.clickOnHeaderButtonAccount();
});

Given(/^I am on login page$/, function () {
    this.navigationTest.validateUserIsOnLoginPage();
});

When(/^I press 'forgot password'$/, function () {
    this.navigationTest.clickOnLinkForgotPassword();
});

Then(/^I have logged in$/, function () {
    this.navigationTest.clickOnHeaderButtonAccount();
    this.navigationTest.clickOnHeaderButtonLogin();
    this.navigationTest.validateUserIsOnLoginPage();
    this.loginTest.inputLoginEmail();
    this.loginTest.inputLoginPassword();
    this.loginTest.confirmLogin();
    this.loginTest.validateUserIsLoggedIn();
});

Then(/^I click on acconut button$/, function () {
    this.navigationTest.clickOnHeaderButtonAccount();
});

When(/^I click on 'Orders and Payment' option$/, function () {
    this.navigationTest.clickOnButtonOrdersPayment();
});

When(/^I click on 'My payment Options' option$/, function () {
    this.navigationTest.clickOnButtonMyPaymentOptions();
});
