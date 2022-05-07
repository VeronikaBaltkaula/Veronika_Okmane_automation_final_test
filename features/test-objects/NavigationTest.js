const { default: click } = require("webdriverio/build/commands/element/click");
const LoginPage = require("../page-objects/auth/LoginPage");
const BasePage = require("../page-objects/common/BasePage");
// const ComplaintPage = require("../page-objects/customerservice/ComplaintPage");

class NavigationTest {
    constructor(storageArg) {
        this.basePage = new BasePage();
        this.loginPage = new LoginPage();
        // this.complaitPage = new ComplaintPage();
        this.storage = storageArg;
    }

    clickOnHeaderButtonAccount() {
        this.basePage.header.buttonAccount().waitForDisplayed();
        this.basePage.header.buttonAccount().waitForClickable();
        this.basePage.header.buttonAccount().click();
    }

    clickOnHeaderButtonLogin() {
        this.basePage.header.buttonLogIn().waitForDisplayed();
        this.basePage.header.buttonLogIn().click();
    }
    validateUserIsOnLoginPage() {
        this.loginPage.waitForLoad();
    }
    clickOnButtonLogOut() {
        this.basePage.header.buttonLogOut().waitForDisplayed();
        this.basePage.header.buttonLogOut().click();
        this.basePage.header.buttonBasket().waitForDisplayed({reverse:true});
        this.basePage.waitForLoad();
        
    }
    clickOnLinkForgotPassword() {
        this.basePage.linkForgotPassword().waitForDisplayed();
        this.basePage.linkForgotPassword().scrollIntoView();
        // this.basePage.linkForgotPassword().waitForClickable();
        // this.basePage.linkForgotPassword().click();
        browser.url('http://localhost:3000/#/forgot-password');
    }
    
    clickOnButtonOrdersPayment() {
        this.basePage.buttonOrdersPayment().waitForDisplayed();
        this.basePage.buttonOrdersPayment().click();
    }
    
    clickOnButtonMyPaymentOptions() {
        this.basePage.buttonMyPaymentOptions().waitForDisplayed();
        this.basePage.buttonMyPaymentOptions().click();
    }

}

module.exports = NavigationTest;