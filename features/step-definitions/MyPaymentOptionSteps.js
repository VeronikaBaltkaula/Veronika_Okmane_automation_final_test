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

// When(/^I click on 'Orders and Payment' option$/, function () {
//     this.navigationTest.clickOnButtonOrdersPayment();
// });

    
