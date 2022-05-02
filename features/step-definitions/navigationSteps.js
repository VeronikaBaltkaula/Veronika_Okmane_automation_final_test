const { Given, When, Then } = require('@wdio/cucumber-framework');

Given(/^I open landing page$/, function () {
    browser.url("http://demo.owasp-juice.shop/#/");
    // browser.url("http://localhost:3000");
    // this.otherTest.dismissInitialPopus();
});

When (/^I have registered account$/, function () {   
});

When (/^I have logged out$/, function () {    
});

When (/^I press on Account button$/, function () {    
});

When (/^I press log in$/, function () {    
});

When (/^I press not yet a customer$/, function () {    
});

When (/^I enter email address$/, function () {    
});

When (/^I enter password$/, function () {    
});

When (/^I enter password reapeatedly$/, function () {    
});

When (/^I select security question about elder sibling$/, function () {    
});

When (/^I enter answer$/, function () {    
});

When (/^I press register button$/, function () {    
});

Then (/^I see message about email must be unique$/, function () {    
});

When (/^I am in register page$/, function () {    
});