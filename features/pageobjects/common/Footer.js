class Footer {
    constructor() {
        this.paginationTextBoxTitle = () => browser.$('//div[normalize-space(text())="Items per page:"]');
    }
}

module.exports = Footer;