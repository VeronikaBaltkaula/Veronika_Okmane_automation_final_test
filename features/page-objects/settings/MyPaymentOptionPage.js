const BasePage = require('../common/BasePage');
class MyPaymentOptionPage extends BasePage {
    constructor() {
        super();
        this.buttonNewCard = () => browser.$('#mat-expansion-panel-header-0'); 

        this.confirmationMessageAboutCardInfo = () => browser.$('span.mat-simple-snack-bar-content');
        this.buttonMySavedAddressesOption = () => browser.$('[aria-label="Go to saved address page"]');
        this.buttonNewAddress = () => browser.$('[aria-label="Add a new address"]');
     }
}

module.exports = MyPaymentOptionPage;