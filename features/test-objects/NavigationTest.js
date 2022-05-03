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
        this.basePage.header.buttonAccount().click();
    }

    clickOnHeaderButtonLogin() {
        this.basePage.header.buttonLogin().waitForDisplayed();
        this.basePage.header.buttonLogin().click();
    }
    validateUserIsOnLoginPage() {
        this.loginPage.waitForLoad();
    }
    clickOnHeaderButtonLogOut() {
        this.basePage.header.buttonLogOut().waitForDisplayed();
        this.basePage.header.buttonLogOut().click();
    }
}
    
module.exports = NavigationTest;