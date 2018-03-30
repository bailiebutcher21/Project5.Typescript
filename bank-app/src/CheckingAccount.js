"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var TransactionOrigin_1 = require("./TransactionOrigin");
var Decorators_1 = require("./Decorators");
var CheckingAccount = (function () {
    function CheckingAccount() {
        this.balance = 1000;
        this.dateOpened = new Date();
    }
    CheckingAccount.prototype.withdrawMoney = function (amount, description, transactionOrigin) {
        var currentBalance = this.balance;
        this.accountType = 1;
        if (TransactionOrigin_1.TransactionOrigin == TransactionOrigin_1.TransactionOrigin.branch || TransactionOrigin_1.TransactionOrigin.phone || TransactionOrigin_1.TransactionOrigin.web) {
            this.amount = amount;
            if (amount > currentBalance) {
                this.success = false;
                this.errorMessage = "Cannot Withdrawl. You have no $$";
                this.resultBalance = this.balance;
                this.transactionDate = new Date();
                this.description = description;
            }
            else {
                this.success = true;
                this.errorMessage = "";
                this.resultBalance = this.balance -= amount;
                this.transactionDate = new Date();
                this.description = description;
            }
            return;
        }
    };
    CheckingAccount.prototype.depositMoney = function (amount, description) {
        this.balance += amount;
        this.resultBalance = this.balance;
        this.success = true;
        this.description = description;
        this.errorMessage = "";
        this.transactionDate = new Date();
        return;
    };
    CheckingAccount.prototype.advanceDate = function (numberOfDays) {
        for (i = 0, i < numberOfDays, i++;;) {
            var newDate = new Date(Date.setTime(Date.getTime() + days * 86400000));
            if (currentDate.Date() == 1) {
                //calculate Interest (Moment)
            }
            return this.balance;
        }
    };
    CheckingAccount = __decorate([
        Decorators_1.displayClassName
    ], CheckingAccount);
    return CheckingAccount;
}());
exports.CheckingAccount = CheckingAccount;
