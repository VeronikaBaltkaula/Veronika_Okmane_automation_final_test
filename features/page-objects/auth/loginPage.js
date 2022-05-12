//  import { BasePage } from '../common/BasePage'
const BasePage = require('../common/BasePage');
class LoginPage extends BasePage {
    constructor() {
        super();
        this.inputFieldEmail = () => browser.$('#email');
        this.inputFieldPassword = () => browser.$('//input[@id="password"]');
        this.title = () => browser.$('//h1[text() = "Login"]');
        this.linkForgotPassword = () => browser.$('[href="#/forgot-password"]');
        this.buttonLogin = () => browser.$('button#loginButton span.mat-button-wrapper');
        this.linkRegister = () => browser.$('[href="#/register"]');
        this.inputEmailInForgotPasswordPage = () => browser.$('[aria-label="Email address field"]');
        this.securityQuestionField = () => browser.$('[aria-label="Field for the answer to the security question"]');
        this.newPasswordField = () => browser.$('[aria-label="Field for New Password"]');
        this.newPasswordConfirmField = () => browser.$('[aria-label="Field to confirm the new password"]');
        this.succesfullyChangedPasswordMessage = () => browser.$('.confirmation');

    }
}

module.exports = LoginPage;