const { When } = require('@wdio/cucumber-framework');

When(/^I click add new card button$/, function () {
    this.myPaymentOptionTest.clickOnButtonNewCard();
});

When(/^I fill in credit card information and submit$/, function () {
    this.myPaymentOptionTest.clickOnButtonNewCardName();
    this.myPaymentOptionTest.clickOnButtonNewCardNumber();
    this.myPaymentOptionTest.clickOnButtonExpirityMonth();
    this.myPaymentOptionTest.clickOnExpirityMonthValue();
    this.myPaymentOptionTest.clickOnExirtyYear();
    this.myPaymentOptionTest.clickExpiryYearValue();
    this.myPaymentOptionTest.clickOnButtonSubmit();
});


When(/^I see confirmation message about card info$/, function () {
    this.myPaymentOptionTest.validateconfirmationMessageAboutCardInfo();
});


When(/^I click on 'My Saved Addresses' option$/, function () {
    this.myPaymentOptionTest.clickOnButtonMySavedAddressesOption();
});


When(/^I click on new Address button$/, function () {
    this.myPaymentOptionTest.clickOnButtonAddNewAddress();
});

When(/^I add address information and submit$/, function () {
    this.myPaymentOptionTest.clickOnButtonAddNewAddressCountry();
    this.myPaymentOptionTest.clickOnButtonAddNewAddressName();
    this.myPaymentOptionTest.clickOnButtonAddNewAddressMobileNumber();
    this.myPaymentOptionTest.clickOnButtonAddNewAddressZipCode();
    this.myPaymentOptionTest.clickOnButtonAddNewAddressAdress();
    this.myPaymentOptionTest.clickOnButtonAddNewAddressCity();
    this.myPaymentOptionTest.clickOnButtonAddNewAddressState();
    this.myPaymentOptionTest.clickOnButtonAddNewAddressSubmit();
});

When(/^I add 'Best Juice Shop Salesman Artwork' to basket and checkout$/, function () {
    this.myPaymentOptionTest.clickOnButtonJuiceShop();
    this.myPaymentOptionTest.clickOnSearchBar();
    this.myPaymentOptionTest.inputPriceName();
    this.myPaymentOptionTest.clickOnButtonAddToBasket();
    this.myPaymentOptionTest.clickOnButtonMyBasket();
    this.myPaymentOptionTest.clickOnButtonCheckout();
});

When(/^I choose saved address$/, function () {
    this.myPaymentOptionTest.clickOnButtonChooseSavedAddress();
    this.myPaymentOptionTest.clickOnButtonContinueAddress();
});

When(/^I choose 'One day delivery'$/, function () {
    this.myPaymentOptionTest.clickOnButtonOneDayDelivery();
    this.myPaymentOptionTest.clickOnButtonContinueDelivery();
});

When(/^I choose saved card$/, function () {
    this.myPaymentOptionTest.clickOnButtonChooseSavedCard();
    this.myPaymentOptionTest.clickOnButtonContinueCard();
});

When(/^I place order and pay$/, function () {
    this.myPaymentOptionTest.clickOnButtonPlaceOrderAndPay();
});

When(/^I am in order completion page$/, function () {
    this.myPaymentOptionTest.validateOrderCompletionPage();
});

When(/^I see correct order address$/, function () {
    this.myPaymentOptionTest.validateCorrectOrderAddress();
});

When(/^I see order details$/, function () {
    this.myPaymentOptionTest.validateOrderDetails();
});

When(/^I see end total price$/, function () {
    this.myPaymentOptionTest.validateTotalPrice();
});