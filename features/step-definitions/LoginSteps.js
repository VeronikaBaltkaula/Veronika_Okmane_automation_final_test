const { Given, Then, When } = require('@wdio/cucumber-framework');


When(/^I press log in$/, function () {
    this.navigationTest.clickOnHeaderButtonLogin();
});

When(/^I enter email in forgot email page$/, function () {
    this.loginTest.inputEmailInForgotPasswordPage();
});

When(/^I click on security question field$/, function () {
    this.loginTest.clickOnSecurityQuestionField();
});

When(/^I see security question$/, function () {
    this.loginTest.validateSecurityQuestion();
});

When(/^I enter security question$/, function () {
    this.loginTest.inputSecurityQuestion();
});

When(/^I enter new password and confirm$/, function () {
    this.loginTest.inputNewPassword();
    this.loginTest.inputNewPasswordConfirm();
    this.loginTest.clickOnButtonChange();
});

When(/^I see message about succesfully changed password$/, function () {
    this.loginTest.validateSuccesfullyChangedPasswordMessage();
});

