const BasePage = require("../page-objects/common/BasePage");
class OtherTest {
    constructor(storageArg) {
        this.basePage = new BasePage();
        this.storage = storageArg;
    }

    dismissInitialPopus() {
        this.basePage.waitForLangChangePopup();
        this.basePage.buttonDismissWelcomeBanner().waitForDisplayed();
        this.basePage.buttonDismissWelcomeBanner().click();
        this.basePage.buttonDismissCookies().waitForDisplayed();
        this.basePage.buttonDismissCookies().click();
    }
}

module.exports = OtherTest;