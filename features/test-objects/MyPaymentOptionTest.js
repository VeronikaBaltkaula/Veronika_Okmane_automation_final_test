const MyPaymentOptionPage = require("../page-objects/settings/MyPaymentOptionPage");
const BasePage = require("../page-objects/common/BasePage");

class MyPaymentOptionTest {
    constructor(storageArg) {
        this.basePage = new BasePage();
        this.myPaymentOptionPage = new MyPaymentOptionPage();
        this.storage = storageArg;
    }
    clickOnButtonNewCard() {
        this.myPaymentOptionPage.buttonNewCard().waitForDisplayed();
        this.myPaymentOptionPage.buttonNewCard().click();
    }
    validateconfirmationMessageAboutCardInfo(){
        this.myPaymentOptionPage.confirmationMessageAboutCardInfo.isDisplayed();
    }
    clickOnButtonMySavedAddressesOption(){
        this.myPaymentOptionPage.buttonMySavedAddressesOption().waitForDisplayed();
        this.myPaymentOptionPage.buttonMySavedAddressesOption().click();
    }
    clickOnButtonNewAddress(){
        this.myPaymentOptionPage.buttonNewAddress().waitForDisplayed();
        this.myPaymentOptionPage.buttonNewAddress().click();
    }
}


module.exports = MyPaymentOptionTest;