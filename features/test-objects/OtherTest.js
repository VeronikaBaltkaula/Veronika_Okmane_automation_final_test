const BasePage = require("../page-objects/common/BasePage");
class OtherTest {
    constructor(storageArg) {
        this.basePage = new BasePage();
        this.storage = storageArg;
    }

    dismissInitialPopus() {
        this.basePage.waitForLangChangePopup();
        this.basePage.buttonDismissCookies().waitForDisplayed();
        this.basePage.buttonDismissCookies().click();
        this.basePage.buttonDismissWelcomeBanner().waitForDisplayed();
        this.basePage.buttonDismissWelcomeBanner().click();
    }
}

module.exports = OtherTest;