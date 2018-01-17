"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CheckingAccount_1 = require("./CheckingAccount");
var SavingsAccount_1 = require("./SavingsAccount");
var RetirementAccount_1 = require("./RetirementAccount");
var Person = (function () {
    function Person() {
        this.checking = new CheckingAccount_1.CheckingAccount();
        this.savings = new SavingsAccount_1.SavingsAccount();
        this.retirement = new RetirementAccount_1.RetirementAccount();
        this.name = name;
        this.dateOfBirth = new Date(1996, 10, 12);
        this.checkingBalance = 1000;
        this.savingsBalance = 10000;
        this.retirementBalance = 100000;
    }
    return Person;
}());
exports.Person = Person;
