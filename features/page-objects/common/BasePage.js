const Header = require("./Header");
const Footer = require("./Footer");

class BasePage {
    constructor() {
        this.header = new Header();
        this.footer = new Footer();
        this.buttonDismissWelcomeBanner = () => browser.$('[aria-label="Close Welcome Banner"]');
        this.buttonDismissCookies = () => browser.$('[aria-label="dismiss cookie message"]');
        this.popUpReloadAfterLangChange = () => browser.$('//*[text()="Force page reload"]');
        this.linkForgotPassword = () => browser.$('[class="primary-link forgot-pw"]');
        this.buttonChange = () => browser.$('[aria-label="Button to confirm the changes"]');
        this.buttonOrdersPayment = () => browser.$ ('#mat-menu-panel-0 > .mat-menu-content > [aria-label="Show Orders and Payment Menu"] ');
        this.buttonMyPaymentOptions = () => browser.$ ('[aria-label="Go to saved payment methods page"]');
    }

    waitForLoad() {
        this.header.buttonAccount().waitForDisplayed();
        this.popUpReloadAfterLangChange().waitForDisplayed({reverse: true});
    }

    waitForLangChangePopup() {
        this.popUpReloadAfterLangChange().waitForDisplayed();
        this.popUpReloadAfterLangChange().waitForDisplayed({reverse: true});
    }
}

module.exports = BasePage;
