"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CheckingAccount_1 = require("./CheckingAccount");
var SavingsAccount_1 = require("./SavingsAccount");
var RetirementAccount_1 = require("./RetirementAccount");
var AccountType_1 = require("./AccountType");
var Person = (function () {
    function Person(name, dateOfBirth, checkingBalance, savingsBalance, retirementBalance) {
        this.checking = new CheckingAccount_1.CheckingAccount(this.name, this.dateOfBirth, this.checkingBalance, AccountType_1.AccountType.checking);
        this.savings = new SavingsAccount_1.SavingsAccount(this.name, this.dateOfBirth, this.savingsBalance, AccountType_1.AccountType.savings);
        this.retirement = new RetirementAccount_1.RetirementAccount(this.name, this.dateOfBirth, this.retirementBalance, AccountType_1.AccountType.retirement);
    }
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=Person.js.map