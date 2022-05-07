const BasePage = require('../common/BasePage');
class RegisterPage extends BasePage {
    constructor() {
        super();
        this.title = () => browser.$('//h1[text()="User Registration"]');
        this.inputFieldEmail = () => browser.$('#emailControl');
        this.inputFieldPassword = () => browser.$('#passwordControl');
        this.inputFieldPasswordConfirm = () => browser.$('#repeatPasswordControl');
        this.switchShowPasswordAdvice = () => browser.$('span.mat-slide-toggle-bar');
        this.selectionSecurityQuestion = () => browser.$('[name="securityQuestion"]');
        this.optionSecurityQuestion = (option) => browser.$(`//span[@class="mat-option-text"][normalize-space(text()) = "${option}"]`);
        this.inputFieldAnswer = () => browser.$('#securityAnswerControl');
        this.buttonRegister = () => browser.$('button#registerButton');
        this.linkLogin = () => browser.$('[href="#/login"]');
        this.emailUsedMessage = () => browser.$('//div[text()="Email must be unique"]');  
    }    
}

module.exports = RegisterPage;