const LoginPage = require("../page-objects/auth/LoginPage");
const BasePage = require("../page-objects/common/BasePage");
const RegisterPage = require("../page-objects/auth/RegisterPage");
class RegisterTest {
    constructor(storageArg) {
        this.loginPage = new LoginPage();
        this.basePage = new BasePage();
        this.registerPage = new RegisterPage();
        this.storage = storageArg;
    }

    clickNotYetACustomer() {
        this.loginPage.linkRegister().waitForDisplayed();
        this.loginPage.linkRegister().click();
    }

    inputEmailAddress(emailArg = "nika1011@inbox.lv") { 
        this.registerPage.inputFieldEmail().waitForDisplayed();
        this.registerPage.inputFieldEmail().setValue(emailArg);
        this.storage.user.email = emailArg;
    }

    inputPassword(passwArg = "pppppp") {
        this.registerPage.inputFieldPassword().waitForDisplayed();
        this.registerPage.inputFieldPassword().setValue(passwArg);
        this.storage.user.password = passwArg;
    }

    inputPasswordRepeat() {
        this.registerPage.inputFieldPasswordConfirm().waitForDisplayed();
        this.registerPage.inputFieldPasswordConfirm().setValue(this.storage.user.password);
    }

    selectSecurityQuestion(questionArg = "Your eldest siblings middle name?") {
        this.registerPage.selectionSecurityQuestion().waitForDisplayed()
        this.registerPage.selectionSecurityQuestion().click()
        this.registerPage.optionSecurityQuestion(questionArg).waitForDisplayed()
        this.registerPage.optionSecurityQuestion(questionArg).click()
    }

    inputSecurityAnswer(answerArg = "vika") {
        this.registerPage.inputFieldAnswer().waitForDisplayed()
        this.registerPage.inputFieldAnswer().setValue(answerArg)
    }

    validatEmailUsedMessage(){
        this.registerPage.emailUsedMessage().waitForDisplayed();
    }
    clickRegisterButton() {
        this.registerPage.buttonRegister().waitForDisplayed()
        this.registerPage.buttonRegister().click()
};

}



module.exports = RegisterTest;