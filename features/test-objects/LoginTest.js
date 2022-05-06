const LoginPage = require("../page-objects/auth/LoginPage");
const BasePage = require("../page-objects/common/BasePage");

class LoginTest {
    constructor(storageArg) {
        this.loginPage = new LoginPage();
        this.basePage = new BasePage();
        this.storage = storageArg;
    }
    inputLoginEmail() {
        // emailArg = "nika1011@inbox.lv"
        this.loginPage.inputFieldEmail().waitForDisplayed();
        this.loginPage.inputFieldEmail().setValue(this.storage.user.email);
    } 
    inputLoginPassword() {
        // passwArg = "pppppp"
        this.loginPage.inputFieldPassword().waitForDisplayed();
        this.loginPage.inputFieldPassword().setValue(this.storage.user.password);
    }
    confirmLogin() {
        this.loginPage.buttonLogin().waitForDisplayed();
        this.loginPage.buttonLogin().click();
    }

    validateUserIsLoggedIn() {
        this.basePage.header.buttonBasket().waitForDisplayed();
        // browser.debug();
        this.basePage.header.buttonAccount().waitForDisplayed();
        this.basePage.header.buttonAccount().click();
        const actualEmail = this.basePage.header.buttonUserAccount().getText();
        expect(actualEmail).to.include(this.storage.user.email);
        browser.keys("Escape");
    }
    inputEmailInForgotPasswordPage() {
        // emailArg = "nika1011@inbox.lv"
        this.loginPage.inputEmailInForgotPasswordPage().waitForDisplayed();
        this.loginPage.inputEmailInForgotPasswordPage().setValue(this.storage.user.email);
}
clickOnSecurityQuestionField() {
    this.loginPage.clickOnSecurityQuestionField().waitForDisplayed();
    this.loginPage.clickOnSecurityQuestionField().waitForClickable();
    this.loginPage.clickOnSecurityQuestionField().click();
}
validateSecurityQuestion() {
    this.loginPage.waitForLoad();
}
inputSecurityQuestion(questionArg = "Your eldest siblings middle name") {
    this.loginPage.inputSecurityQuestion().waitForDisplayed();
    this.loginPage.inputSecurityQuestion().setValue(questionArg);
}
inputNewPassword(newpasswordArg = "aaaaaa") {
    this.loginPage.inputNewPassword().waitForDisplayed();
    this.loginPage.inputNewPassword().setValue(newpasswordArg);
}
inputNewPasswordConfirm(newpasswordArg){
    this.loginPage.inputNewPasswordConfirm().waitForDisplayed();
    this.loginPage.inputNewPasswordConfirm().setValue(newpasswordArg);

}
}


module.exports = LoginTest;