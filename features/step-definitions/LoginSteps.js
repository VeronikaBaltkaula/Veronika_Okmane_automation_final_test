const {Given, Then, When} = require('@wdio/cucumber-framework');


Given(/^I have registered account$/, function() {
    this.navigationTest.clickOnHeaderButtonAccount();
    this.navigationTest.clickOnHeaderButtonLogin();
    this.navigationTest.validateUserIsOnLoginPage();
    this.loginTest.inputLoginEmail();
    this.loginTest.inputLoginPassword();
    this.loginTest.confirmLogin();
    this.loginTest.validateUserIsLoggedIn();
});

Given(/^I press log in$/, function() {
    this.navigationTest.clickOnHeaderButtonLogin();
});



