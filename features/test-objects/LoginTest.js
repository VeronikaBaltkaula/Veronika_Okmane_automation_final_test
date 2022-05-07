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
    this.loginPage.securityQuestionField().waitForDisplayed();
    this.loginPage.securityQuestionField().waitForClickable();
    this.loginPage.securityQuestionField().click();
}
validateSecurityQuestion() {
    this.loginPage.waitForLoad();
}
inputSecurityQuestion(questionArg = "vika") {
    this.loginPage.securityQuestionField().waitForDisplayed();
    this.loginPage.securityQuestionField().setValue(questionArg);
    
}

inputNewPassword(newpasswordArg = "pppppp") {
    this.loginPage.newPasswordField().waitForDisplayed();
    this.loginPage.newPasswordField().setValue(newpasswordArg);
}

inputNewPasswordConfirm(newpasswordArg = "pppppp" ) {
    this.loginPage.newPasswordConfirmField().waitForDisplayed();
    this.loginPage.newPasswordConfirmField().setValue(newpasswordArg);
}

clickOnButtonChange() {
    this.basePage.buttonChange().waitForDisplayed();
    this.basePage.buttonChange().click();
}    
validateSuccesfullyChangedPasswordMessage() {
this.loginPage.succesfullyChangedPasswordMessage().isDisplayed();

}
clickOnLogIn() {
    this.loginPage.buttonLogIn().waitForDisplayed();
    this.loginPage.buttonLogIn().click();
}
}

module.exports = LoginTest;