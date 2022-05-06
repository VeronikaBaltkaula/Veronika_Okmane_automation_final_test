const { Given,When, Then } = require('@wdio/cucumber-framework');

Given(/^I open landing page$/, function () {
    browser.url("http://localhost:3000/#/");
    this.otherTest.dismissInitialPopus();
});

When(/^I have logged out$/, function() {
    this.navigationTest.clickOnHeaderButtonAccount();
    this.navigationTest.clickOnButtonLogOut();
 });
 
 Then(/^I press on Account button$/, function() {
    this.navigationTest.clickOnHeaderButtonAccount();
 });

 Given(/^I am on login page$/, function () {
    this.navigationTest.validateUserIsOnLoginPage();
});

When(/^I press 'forgot password'$/, function() {
    this.navigationTest.clickOnLinkForgotPassword();
});

// When(/^I enter email in forgot email page$/, function() {
//     this.loginTest.inputLoginEmailInForgotPasswordPage();
// });



