const User = require("./User");
class Storage {
    constructor() {
        this.user = new User();
    }
}

module.exports = Storage;