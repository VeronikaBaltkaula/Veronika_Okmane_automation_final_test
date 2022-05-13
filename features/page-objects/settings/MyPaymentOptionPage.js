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
        this.buttonJuiceShop = () => browser.$('//span[contains(text(), " OWASP Juice Shop")]');
        this.priceName = () => browser.$('//mat-search-bar//input');
        this.buttonChooseSavedAddress = () => browser.$('//mat-row[descendant-or-self::mat-cell[contains(text(), "John")]]//mat-radio-button');
        this.buttonContinueAddress = () => browser.$('//span[contains(text(), "Continue")]');
        this.buttonOneDayDelivery = () => browser.$('//mat-row[descendant-or-self::mat-cell[contains(text(), "One Day Delivery")]]//mat-radio-button');
        this.buttonContinueDelivery = () => browser.$('//span[contains(text(), "Continue")]');
        this.buttonChooseSavedCard = () => browser.$('//mat-row[descendant-or-self::mat-cell[contains(text(), "John")]]//mat-radio-button');
        this.buttonContinueCard = () => browser.$('//span[contains(text(), "Continue")]');
        this.buttonPlaceOrderAndPay = () => browser.$('[aria-label="Complete your purchase"]');

        this.itemRow = (nameArg,  cardNumberArg, expirityMonthArg, exirtyYearArg ) => browser.$(`//mat-label[contains(text(), "Name")]//ancestor::div[contains(@class,"form-field")]//input, "${nameArg}")]
        //mat-label[contains(text(), "Card Number")]//ancestor::div[contains(@class,"form-field")]//input,"${cardNumberArg}")]
        //mat-label[contains(text(), "Expiry Month")]//ancestor::div[contains(@class,"form-field")]//select,"${expirityMonthArg}")]
        //mat-label[contains(text(), "Expiry Year")]//ancestor::div[contains(@class,"form-field")]//select,"${exirtyYearArg}")]]`);
       
        this.itemRow = (countryArg,  nameArg, mobileNumberArg, zipCodeArg, addressArg, cityArg, stateArg ) => browser.$(`//mat-label[contains(text(), "Country")]//ancestor::div[contains(@class,"form-field")]//input, "${countryArg}")]
        //mat-label[contains(text(), "Name")]//ancestor::div[contains(@class,"form-field")]//input,"${nameArg}")]
        //mat-label[contains(text(), "Mobile Number")]//ancestor::div[contains(@class,"form-field")]//input,"${mobileNumberArg}")]
        //mat-label[contains(text(), "ZIP Code")]//ancestor::div[contains(@class,"form-field")]//input,"${zipCodeArg}")]
        #address,"${addressArg}")]//mat-label[contains(text(), "City")]//ancestor::div[contains(@class,"form-field")]//input,"${cityArg}")]
        //mat-label[contains(text(), "State")]//ancestor::div[contains(@class,"form-field")]//input,"${stateArg}")]]`);
         
        // this.correctAddress = (productArg, priceArg, quantityArg, totalPriceArg) => browser.$(`(//*[contains(@role, "cell")])[1],"${productArg}")]
        // (//*[contains(@role, "cell")])[2], "${priceArg}")]
        // (//*[contains(@role, "cell")])[3], "${quantityArg}")]
        // (//*[contains(@role, "cell")])[4], "${totalPriceArg}")]]`);
    }
}

module.exports = MyPaymentOptionPage;