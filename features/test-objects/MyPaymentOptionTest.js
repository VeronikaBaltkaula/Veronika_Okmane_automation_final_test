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
    validateconfirmationMessageAboutCardInfo() {
        this.myPaymentOptionPage.confirmationMessageAboutCardInfo().isDisplayed();
    }
    clickOnButtonMySavedAddressesOption() {
        this.myPaymentOptionPage.buttonMySavedAddressesOption().waitForDisplayed();
        this.myPaymentOptionPage.buttonMySavedAddressesOption().click();
    }
    clickOnButtonNewAddress() {
        this.myPaymentOptionPage.buttonNewAddress().waitForDisplayed();
        this.myPaymentOptionPage.buttonNewAddress().click();
    }

    clickOnButtonNewCardName(newCardName = "John Goodman") {

        this.myPaymentOptionPage.buttonNewCardName().waitForDisplayed();
        this.myPaymentOptionPage.buttonNewCardName().click();
        this.myPaymentOptionPage.buttonNewCardName().click();
        this.myPaymentOptionPage.buttonNewCardName().setValue(newCardName);
    }

    clickOnButtonNewCardNumber(newCardNumberArg = "1234567812345678") {
        this.myPaymentOptionPage.buttonNewCardNumber().waitForDisplayed();
        this.myPaymentOptionPage.buttonNewCardNumber().setValue(newCardNumberArg);
    }
    clickOnButtonExpirityMonth() {
        this.myPaymentOptionPage.buttonExpirityMonth().waitForDisplayed();
        this.myPaymentOptionPage.buttonExpirityMonth().click();

    }

    clickOnExpirityMonthValue() {
        this.myPaymentOptionPage.expirityMonthValue().waitForDisplayed();
        this.myPaymentOptionPage.expirityMonthValue().click();
    }
    clickOnExirtyYear() {
        this.myPaymentOptionPage.exirtyYear().waitForDisplayed();
        this.myPaymentOptionPage.exirtyYear().click();
    }

    clickExpiryYearValue() {
        this.myPaymentOptionPage.expiryYearValue().waitForDisplayed();
        this.myPaymentOptionPage.expiryYearValue().click();
    }
    clickOnButtonSubmit() {
        this.myPaymentOptionPage.buttonSubmit().waitForDisplayed();
        this.myPaymentOptionPage.buttonSubmit().click();
    }
    clickOnButtonAddNewAddress() {
        this.myPaymentOptionPage.buttonAddNewAddress().waitForDisplayed();
        this.myPaymentOptionPage.buttonAddNewAddress().click();

    }
    clickOnButtonAddNewAddressCountry(countryArg = "United States") {
        this.myPaymentOptionPage.buttonAddNewAddressCountry().waitForDisplayed();
        this.myPaymentOptionPage.buttonAddNewAddressCountry().click();
        this.myPaymentOptionPage.buttonAddNewAddressCountry().setValue(countryArg);
    }
    clickOnButtonAddNewAddressName(addressNameArg = "John Goodman") {
        this.myPaymentOptionPage.buttonAddNewAddressName().waitForDisplayed();
        this.myPaymentOptionPage.buttonAddNewAddressName().click();
        this.myPaymentOptionPage.buttonAddNewAddressName().setValue(addressNameArg);
    }
    clickOnButtonAddNewAddressMobileNumber(mobileNumberArg = "1234567891") {
        this.myPaymentOptionPage.buttonAddNewAddressMobileNumber().waitForDisplayed();
        this.myPaymentOptionPage.buttonAddNewAddressMobileNumber().click();
        this.myPaymentOptionPage.buttonAddNewAddressMobileNumber().setValue(mobileNumberArg);
    }
    clickOnButtonAddNewAddressZipCode(zipCoderArg = "00000") {
        this.myPaymentOptionPage.buttonAddNewAddressZipCode().waitForDisplayed();
        this.myPaymentOptionPage.buttonAddNewAddressZipCode().click();
        this.myPaymentOptionPage.buttonAddNewAddressZipCode().setValue(zipCoderArg);
    }
    clickOnButtonAddNewAddressAdress(AddressArg = "sunset bv") {
        this.myPaymentOptionPage.buttonAddNewAddressAdress().waitForDisplayed();
        this.myPaymentOptionPage.buttonAddNewAddressAdress().click();
        this.myPaymentOptionPage.buttonAddNewAddressAdress().setValue(AddressArg);
    }
    clickOnButtonAddNewAddressCity(cityArg = "Los Angeles") {
        this.myPaymentOptionPage.buttonAddNewAddressCity().waitForDisplayed();
        this.myPaymentOptionPage.buttonAddNewAddressCity().click();
        this.myPaymentOptionPage.buttonAddNewAddressCity().setValue(cityArg);
    }
    clickOnButtonAddNewAddressState(stateArg = "California") {
        this.myPaymentOptionPage.buttonAddNewAddressState().waitForDisplayed();
        this.myPaymentOptionPage.buttonAddNewAddressState().click();
        this.myPaymentOptionPage.buttonAddNewAddressState().setValue(stateArg);
    }
    clickOnButtonAddNewAddressSubmit() {
        this.myPaymentOptionPage.buttonAddNewAddressSubmit().waitForDisplayed();
        this.myPaymentOptionPage.buttonAddNewAddressSubmit().click();
    }

    clickOnButtonJuiceShop() {
        this.myPaymentOptionPage.buttonJuiceShop().waitForDisplayed();
        this.myPaymentOptionPage.buttonJuiceShop().click();
    }

    clickOnSearchBar() {
        this.basePage.searchBar().waitForDisplayed();
        this.basePage.searchBar().click();
    }
    inputPriceName(priceArg = "Best Juice Shop Salesman Artwork") { // Best Juice Shop Salesman Artwork Apple Juice
        this.myPaymentOptionPage.priceName().setValue(priceArg);
        browser.keys("Enter");
    }

    clickOnButtonAddToBasket() {
        this.myPaymentOptionPage.buttonAddToBasket().waitForDisplayed();
        this.myPaymentOptionPage.buttonAddToBasket().click();
    }

    clickOnButtonMyBasket() {
        this.basePage.header.buttonMyBasket().click();
    }

    clickOnButtonCheckout() {
        this.basePage.buttonCheckout().waitForDisplayed();
        this.basePage.buttonCheckout().click();
    }

    clickOnButtonChooseSavedAddress() {
        this.myPaymentOptionPage.buttonChooseSavedAddress().waitForDisplayed();
        this.myPaymentOptionPage.buttonChooseSavedAddress().click();
    }

    clickOnButtonContinueAddress() {
        this.myPaymentOptionPage.buttonContinueAddress().waitForDisplayed();
        this.myPaymentOptionPage.buttonContinueAddress().click();
    }

    clickOnButtonOneDayDelivery() {
        this.myPaymentOptionPage.buttonOneDayDelivery().waitForDisplayed();
        this.myPaymentOptionPage.buttonOneDayDelivery().click();
    }

    clickOnButtonContinueDelivery() {
        this.myPaymentOptionPage.buttonContinueDelivery().waitForDisplayed();
        this.myPaymentOptionPage.buttonContinueDelivery().click();
    }

    clickOnButtonChooseSavedCard() {
        this.myPaymentOptionPage.buttonChooseSavedCard().waitForDisplayed();
        this.myPaymentOptionPage.buttonChooseSavedCard().click();
    }

    clickOnButtonContinueCard() {
        this.myPaymentOptionPage.buttonContinueCard().waitForDisplayed();
        this.myPaymentOptionPage.buttonContinueCard().click();
    }

    clickOnButtonPlaceOrderAndPay() {
        this.myPaymentOptionPage.buttonPlaceOrderAndPay().waitForDisplayed();
        this.myPaymentOptionPage.buttonPlaceOrderAndPay().click();
    }

    validateOrderCompletionPage() {
        browser.pause(2000)
        this.myPaymentOptionPage.waitForLoad();
    }

    validateCorrectOrderAddress() {
        this.myPaymentOptionPage.waitForLoad();
    }

    validateOrderDetails() {
        this.myPaymentOptionPage.waitForLoad();
    }

    validateTotalPrice() {
        this.myPaymentOptionPage.waitForLoad();
    }
}


module.exports = MyPaymentOptionTest;