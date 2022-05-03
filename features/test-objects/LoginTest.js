const LoginPage = require("../page-objects/auth/LoginPage");
const BasePage = require("../page-objects/common/BasePage");

class LoginTest {
    constructor(storageArg) {
        this.loginPage = new LoginPage();
        this.basePage = new BasePage();
        this.storage = storageArg;
    }
    inputLoginEmail() {
        //emailArg = "nika1011@inbox.lv"
        this.loginPage.inputFieldEmail().waitForDisplayed();
        this.loginPage.inputFieldEmail().setValue(this.storage.user.email);
    } 
    inputLoginPassword() {
        //passwArg = "pppppp"
        this.loginPage.inputFieldPassword().waitForDisplayed();
        this.loginPage.inputFieldPassword().setValue(this.storage.user.password);
    }
    confirmLogin() {
        this.loginPage.buttonLogin().waitForDisplayed();
        this.loginPage.buttonLogin().click();
    }

    validateUserIsLoggedIn() {
        this.basePage.header.buttonBasket().waitForDisplayed();
        this.basePage.header.buttonAccount().waitForDisplayed();
        this.basePage.header.buttonAccount().click();
        const actualEmail = this.basePage.header.buttonUserAccount().getText();
        expect(actualEmail).to.include(this.storage.user.email);
        browser.keys("Escape");
    }
}
module.exports = LoginTest;