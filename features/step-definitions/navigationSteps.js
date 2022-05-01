const { Given } = require('@wdio/cucumber-framework');

Given(/^I open landing page$/, function () {
    browser.url("http://demo.owasp-juice.shop/#/");
    // browser.url("http://localhost:3000");
    // this.otherTest.dismissInitialPopus();
});

