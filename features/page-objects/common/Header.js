// import { SideMenu } from './SideMenu';
const SideMenu = require('./SideMenu');
class Header {
    constructor() {
        this.sideMenu = new SideMenu();
        this.buttonBurgerMenu = () => browser.$('[aria-label="Open Sidenav"] span.mat-button-wrapper');
        this.buttonLogIn = () => browser.$('#navbarLoginButton');
        // this.buttonUserAccount = () => browser.$('button[aria-label="Go to user profile"] span');
        this.buttonUserAccount = () => browser.$('[aria-label= "Go to user profile"].mat-menu-item span');
        this.buttonAccount = () => browser.$('#navbarAccount');
        this.buttonSearch = () => browser.$('//mat-icon[contains(text(), "search")]');
        this.buttonBasket = () => browser.$('[routerlink="/basket"] [role="img"]');
        this.buttonCloseSearch = () => browser.$('//mat-icon[contains(text(), "close")]');
        this.searchBar = () => browser.$('//mat-search-bar//input');
        this.logo = () => browser.$('//img[@class = "logo"]');
        this.buttonLogOut = () => browser.$('#navbarLogoutButton');
        // this.buttonForgotPassword = () => browser.$('#navbarLogoutButton')
        
    }
}

module.exports = Header;