class SideMenu {
    constructor() {
        this.subtitleContact = () => browser.$('//h3[text()="Contact"]');
        this.menuOptionCustumerFeedback = () => browser.$('//mat-nav-list/a//span[contains(@class, "menu-text")][contains(text(), "Customer Feedback")]');
        this.menuOption = (option) => browser.$(`//mat-nav-list/a//span[contains(@class, "menu-text")][contains(text(), "${option}")]`);; // homework - this should be universal function so you can call any menu option
        this.menuOptionAboutUs // homework - use the function menuOption()
        this.textBoxAppVersion // homework
    }
}

module.exports = SideMenu;