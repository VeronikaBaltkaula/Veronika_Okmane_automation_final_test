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
    // clickOnButtonLogOut() {
    //     this.basePage.header.buttonLogOut().waitForDisplayed();
    //     this.basePage.header.buttonLogOut().click();
    //     this.basePage.header.buttonBasket().waitForDisplayed({reverse:true});
    //     this.basePage.waitForLoad();
    //     browser.pause(10000);
    // }
//     clickOnButtonForgotPassword(){
// this.loginPage.ButtonForgotPassword().waitForDisplayed();
// this.loginPage.ButtonForgotPassword().click();
//     }
    
}
module.exports = LoginTest;