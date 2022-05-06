// import {Header} from './Header';
// import {Footer} from './Footer';
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
