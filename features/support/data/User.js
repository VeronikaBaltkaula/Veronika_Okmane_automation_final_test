class User {
    constructor(emailArg = "nika1011@inbox.lv", passwordArg = "pppppp") {
        this.email = emailArg;
        this.password = passwordArg;
        // this.securityQuestion = securityQuestionArg;
    }
}

module.exports = User;