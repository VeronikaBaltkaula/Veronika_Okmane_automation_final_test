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

    clickOnHeaderButtonShoppingBasket() {
        this.basePage.header.buttonBasket().waitForDisplayed();
        this.basePage.header.buttonBasket().click();
    }

    clickOnHeaderButton(buttonNameArg) {
        switch (buttonNameArg) {
            case 'Account':
                clickOnHeaderButtonAccount();
                break;
            case 'Login':
                clickOnHeaderButtonLogin();
                break;
            default: throw Error("No such button supported by test: ", buttonNameArg);
        }
    }

    // clickOnHeaderButton(buttonNameArg) {
    //     let button;
    //     switch (buttonNameArg) {
    //         case 'Account':
    //             button = this.basePage.header.buttonAccount();
    //             break;
    //         case 'Login':
    //             button = this.basePage.header.buttonLogin();
    //             break;
    //         default: throw Error("No such button supported by test: ", buttonNameArg);
    //     }
    //     button.waitForDisplayed();
    //     button.click();
    // }

    clickOnSideMenu() {
        this.basePage.header.buttonBurgerMenu().waitForDisplayed();
        this.basePage.header.buttonBurgerMenu().waitForClickable();
        this.basePage.header.buttonBurgerMenu().click();
    }

    clickOnSideMenuOption(optionArg) {
        this.basePage.header.sideMenu.menuOption(optionArg).waitForDisplayed();
        this.basePage.header.sideMenu.menuOption(optionArg).click();
    }

    validateUserIsOnLoginPage() {
        this.loginPage.waitForLoad();
    }

    // validateUserIsOnComplaintPage() {
    //     this.complaitPage.waitForLoad();
    // }

    validateSideMenuOptionIsVisible(optionsArg) {
        optionsArg.forEach(elementInsideArray => {
            this.basePage.header.sideMenu.menuOption(elementInsideArray).waitForDisplayed();
        }) 
    }
}

module.exports = NavigationTest;