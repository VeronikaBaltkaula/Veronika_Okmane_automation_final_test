//  import { BasePage } from '../common/BasePage'
const BasePage = require('../common/BasePage');
class LoginPage extends BasePage {
    constructor() {
        super();
        // this.inputFieldEmail = () => browser.$('//input[@id="email"]'); //xpath
        this.inputFieldEmail = () => browser.$('#email');//css
        
        this.inputFieldPassword = () => browser.$('//input[@id="password"]');
        //#password
        //input[@aria-label="Text field for the login password"]
        //input[contains(@aria-label, "password")]           
        this.title = () => browser.$('//h1[text() = "Login"]');
        // this.linkForgotPassword = () => browser.$('//a[text() = "Forgot your password?"]'); //xpath
        this.linkForgotPassword = () => browser.$('[href="#/forgot-password"]'); //css
        // //a[contains(@class, "forgot-pw")]
        // this.buttonLogin = () => browser.$('//button[@id="loginButton"]//span[@class="mat-button-wrapper"]');
        this.buttonLogin = () => browser.$('button#loginButton span.mat-button-wrapper');
        // // this.buttonLoginWithGoogle = () => browser.$('//button[@id="loginButtonGoogle"]//span[@class="mat-button-wrapper"]');
        // this.buttonLoginWithGoogle = () => browser.$('button#loginButtonGoogle span.mat-button-wrapper');
        // // this.checkboxRememberMe = () => browser.$('//*[@class="mat-checkbox-layout"]');
        // this.checkboxRememberMe = () => browser.$('label.mat-checkbox-layout');
        // //this.linkRegister = () => browser.$('//a[@class="primary-link"]'); //xpath
        this.linkRegister = () => browser.$('[href="#/register"]'); //css
        this.inputEmailInForgotPasswordPage = () => browser.$('[aria-label="Email address field"]');
        this.clickOnSecurityQuestionField = () => browser.$('[aria-label="Field for the answer to the security question"]');
        this.securityQuestion = () => browser.$('[aria-label="Field for the answer to the security question"]');
        this.inputSecurityQuestion = () => browser.$('[aria-label="Field for the answer to the security question"]');
        this.inputNewPassword = () => browser.$('//*[@id="forgot-form"]/mat-form-field[2]/div/div[1]/div[2]');
        this.inputNewPasswordConfirm = () => browser.$('[aria-label="Field to confirm the new password"]');
    }

//     waitForLoad() {
//         this.title().waitForDisplayed();
//         this.inputFieldEmail().waitForDisplayed();
//         this.inputFieldPassword().waitForDisplayed();
//         this.buttonLogin().waitForDisplayed();
//         // this.buttonLoginWithGoogle().waitForDisplayed();
//         this.linkForgotPassword().waitForDisplayed();
//         this.checkboxRememberMe().waitForDisplayed();
//         this.linkRegister().waitForDisplayed();
//     }
}

module.exports = LoginPage;