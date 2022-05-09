const BasePage = require("../page-objects/common/BasePage");
class ShoppingTest {
constructor(storageArg) {
        this.storage = storageArg;
        this.basePage = new BasePage();
    
    }
    clickOnButtonOwaspJuiceShop() {
        this.basePage.header.buttonOwaspJuiceShop().click();
    }

    searchForItem(priceArg ="Best Juice Shop Salesman Artwork") {
        this.basePage.header.buttonSearchBar().waitForDisplayed();
        this.basePage.header.buttonSearchBar().click();
        this.basePage.header.buttonSearchBar().setValue(priceArg);
        browser.keys("Enter");
}
clickOnButtonAddToBasket() {
    this.shoppingPage.buttonAddToBasket().waitForDisplayed();
    this.shoppingPage.buttonAddToBasket().click();
}

clickOnButtonMyBasket() {
    this.basePage.header.buttonMyBasket().click();
}

clickOnButtonCheckout() {
    this.basePage.buttonCheckout().waitForDisplayed();
    this.basePage.buttonCheckout().click();
}

clickOnButtonChooseSavedAddress() {
    this.basePage.buttonChooseSavedAddress().waitForDisplayed();
    this.basePage.buttonChooseSavedAddress().click(); 
}

clickOnButtonContinueAddress() {
    this.basePage.buttonContinueAddress().waitForDisplayed();
    this.basePage.buttonContinueAddress().click(); 
}

clickOnButtonOneDayDelivery() {
    this.basePage.buttonOneDayDelivery().waitForDisplayed();
    this.basePage.buttonOneDayDelivery().click();  
}

clickOnButtonContinueDelivery() {
    this.basePage.buttonContinueDelivery().waitForDisplayed();
    this.basePage.buttonContinueDelivery().click();   
}

clickOnButtonChooseSavedCard() {
    this.basePage.buttonChooseSavedCard().waitForDisplayed();
    this.basePage.buttonChooseSavedCard().click();   
}

clickOnButtonContinueCard() {
    this.basePage.buttonContinueCard().waitForDisplayed();
    this.basePage.buttonContinueCard().click();  
}

clickOnButtonPlaceOrderAndPay() {
    this.basePage.buttonPlaceOrderAndPay().waitForDisplayed();
    this.basePage.buttonPlaceOrderAndPay().click(); 
}

clickOnButtonContinueOrder() {
    this.basePage.buttonContinueOrder().waitForDisplayed();
    this.basePage.buttonContinueOrder().click(); 
}

validateOrderCompletionPage() {
    this.basePage.waitForLoad();
}

validateCorrectOrderAddress() {
    this.basePage.waitForLoad();
}

validateOrderDetails() {
    this.basePage.waitForLoad();  
}

validateTotalPrice() {
    this.basePage.waitForLoad();    
}
}

module.exports = ShoppingTest;