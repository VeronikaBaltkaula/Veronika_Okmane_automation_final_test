const {Given, Then, When} = require('@wdio/cucumber-framework');


When(/^I have registered account$/, function() {
    this.navigationTest.clickOnHeaderButtonAccount();
    this.navigationTest.clickOnHeaderButtonLogin();
    this.navigationTest.validateUserIsOnLoginPage();
    this.loginTest.inputLoginEmail();
    this.loginTest.inputLoginPassword();
    this.loginTest.confirmLogin();
    this.loginTest.validateUserIsLoggedIn();
});

When(/^I press log in$/, function() {
    this.navigationTest.clickOnHeaderButtonLogin();
});

// When(/^And I press 'forgot password'$/, function() {
//     this.loginTest.clickOnButtonForgotPassword();
// });

