"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var TransactionOrigin_1 = require("../Enums/TransactionOrigin");
var Decorators_1 = require("../Decorators");
var SavingsAccount = (function () {
    function SavingsAccount() {
        this.balance = 10000;
        this.monthlyTransactions = 6;
        this.dateOpened = new Date();
    }
    SavingsAccount.prototype.withdrawMoney = function (amount, description, transactionOrigin) {
        var currentBalance = this.balance;
        this.accountType = 2;
        this.amount = amount;
        if (transactionOrigin == TransactionOrigin_1.TransactionOrigin.branch || TransactionOrigin_1.TransactionOrigin.phone || TransactionOrigin_1.TransactionOrigin.web) {
            this.amount = amount;
            if (this.monthlyTransactions >= 1) {
                if (amount > currentBalance) {
                    this.success = false;
                    this.errorMessage = "Cannot withdrawl more than the available balance.";
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
                    this.monthlyTransactions--;
                }
            }
            else {
                this.errorMessage = "Number of transactions exceed federal monthly limit";
            }
        }
        else {
            this.amount = amount;
            if (amount > currentBalance) {
                this.success = false;
                this.errorMessage = "Can't withdrawl more than the available balance";
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
        }
        return;
    };
    SavingsAccount.prototype.depositMoney = function (amount, description) {
    };
    ;
    SavingsAccount = __decorate([
        Decorators_1.displayClassName
    ], SavingsAccount);
    return SavingsAccount;
}());
exports.SavingsAccount = SavingsAccount;
