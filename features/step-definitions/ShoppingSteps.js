const {Then, When} = require('@wdio/cucumber-framework');

When(/^I add 'Best Juice Shop Salesman Artwork' to basket and checkout$/, function () {
    this.shoppingTest.clickOnButtonOwaspJuiceShop();
    this.shoppingTest.searchForItem();
    this.shoppingTest.clickOnButtonAddToBasket();
    this.shoppingTest.clickOnButtonMyBasket();
    this.shoppingTest.clickOnButtonCheckout();
});

When(/^I choose saved address$/, function () {
    this.shoppingTest.clickOnButtonChooseSavedAddress();
    this.shoppingTest.clickOnButtonContinueAddress();
});

When(/^I choose 'One day delivery'$/, function () {
    this.shoppingTest.clickOnButtonOneDayDelivery();
    this.shoppingTest.clickOnButtonContinueDelivery();
});

When(/^I choose saved card$/, function () {
    this.shoppingTest.clickOnButtonChooseSavedCard();
    this.shoppingTest.clickOnButtonContinueCard();
});

When(/^I place order and pay$/, function () {
    this.shoppingTest.clickOnButtonPlaceOrderAndPay();
    this.shoppingTest.clickOnButtonContinueOrder();
});

When(/^I am in order completion page$/, function () {
    this.shoppingTest.validateOrderCompletionPage();
});

When(/^I see correct order address$/, function () {
    this.shoppingTest.validateCorrectOrderAddress();
});

When(/^I see order details$/, function () {
    this.shoppingTest.validateOrderDetails();
});

When(/^I see end total price$/, function () {
    this.shoppingTest.validateTotalPrice();
});