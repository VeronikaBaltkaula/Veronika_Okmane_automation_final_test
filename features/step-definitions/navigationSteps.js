const { Given } = require('@wdio/cucumber-framework');

Given(/^I open landing page$/, function () {
    browser.url("http://localhost:3000/#/");
   this.otherTest.dismissInitialPopus();
});

// When (/^I have registered account$/, function () {   
//     this.navigationTest.
// });

// When (/^I have logged out$/, function () {  
//     this.navigationTest  
// });

// When (/^I press on Account button$/, function () {    
//     this.navigationTest.clickOnHeaderButtonAccount();
// });

// When (/^I press log in$/, function () {    

// });

// When (/^I press not yet a customer$/, function () {    
// });

// When (/^I enter email address$/, function () {    
//     this.navigationTest.inputEmail();
// });

// When (/^I enter password$/, function () {  
//     this.navigationTest.inputPassword();  
// });

// When (/^I enter password reapeatedly$/, function () {    
// });

// When (/^I select security question about elder sibling$/, function () {    
// });

// When (/^I enter answer$/, function () {    
// });

// When (/^I press register button$/, function () {    
// });

// Then (/^I see message about email must be unique$/, function () {    
// });

// When (/^I am in register page$/, function () {    
// });



