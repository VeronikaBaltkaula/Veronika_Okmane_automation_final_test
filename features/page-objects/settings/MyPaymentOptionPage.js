const BasePage = require('../common/BasePage');
class MyPaymentOptionPage extends BasePage {
    constructor() {
        super();
        this.buttonNewCard = () => browser.$('//mat-panel-description[contains(text(), "Add a credit or debit card")]');
        this.buttonNewCardName = () => browser.$('//mat-label[contains(text(), "Name")]//ancestor::div[contains(@class,"form-field")]//input');
        this.buttonNewCardNumber = () => browser.$('//mat-label[contains(text(), "Card Number")]//ancestor::div[contains(@class,"form-field")]//input');
        this.buttonExpirityMonth = () => browser.$('//mat-label[contains(text(), "Expiry Month")]//ancestor::div[contains(@class,"form-field")]//select');
        this.expirityMonthValue = () => browser.$('(//*[contains(text(), "")]//ancestor::div[contains(@class,"form-field")]//option[4])[1]');
        this.exirtyYear = () => browser.$('//mat-label[contains(text(), "Expiry Year")]//ancestor::div[contains(@class,"form-field")]//select');
        this.expiryYearValue = () => browser.$('//option[@value="2085"]');
        this.buttonSubmit = () => browser.$('#submitButton');
        this.buttonAddNewAddress = () => browser.$('[aria-label="Add a new address"]');
        this.buttonAddNewAddressCountry = () => browser.$('//mat-label[contains(text(), "Country")]//ancestor::div[contains(@class,"form-field")]//input');
        this.buttonAddNewAddressName = () => browser.$('//mat-label[contains(text(), "Name")]//ancestor::div[contains(@class,"form-field")]//input');
        this.buttonAddNewAddressMobileNumber = () => browser.$('//mat-label[contains(text(), "Mobile Number")]//ancestor::div[contains(@class,"form-field")]//input');
        this.buttonAddNewAddressZipCode = () => browser.$('//mat-label[contains(text(), "ZIP Code")]//ancestor::div[contains(@class,"form-field")]//input');
        this.buttonAddNewAddressAdress = () => browser.$('#address');
        this.buttonAddNewAddressCity = () => browser.$('//mat-label[contains(text(), "City")]//ancestor::div[contains(@class,"form-field")]//input');
        this.buttonAddNewAddressState = () => browser.$('//mat-label[contains(text(), "State")]//ancestor::div[contains(@class,"form-field")]//input');
        this.buttonAddNewAddressSubmit = () => browser.$('#submitButton:last-child');
        this.confirmationMessageAboutCardInfo = () => browser.$('span.mat-simple-snack-bar-content');
        this.buttonMySavedAddressesOption = () => browser.$('[aria-label="Go to saved address page"]');
        this.buttonNewAddress = () => browser.$('[aria-label="Add a new address"]');
    }
}

module.exports = MyPaymentOptionPage;