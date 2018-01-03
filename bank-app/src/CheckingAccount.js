"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CheckingAccount = (function () {
    function CheckingAccount() {
    }
    CheckingAccount.prototype.withdrawMoney = function (amount, description, transactionOrigin) {
        this.balance -= amount;
        var output = new Transaction(true, amount, this.balance, new Date(), description, "");
        this.accountHistory.push(output);
        return output;
    };
    CheckingAccount.prototype.depositMoney = function (amount, description) {
        this.balance += amount;
        var output = new Transaction(true, amount, this.balance, new Date(), description, "");
        this.accountHistory.push(output);
        return output;
    };
    CheckingAccount.prototype.advanceDate = function (numberOfDays) {
        var startingDay = this.currentDate.getDate();
        var startingMonth = this.currentDate.getMonth();
        var startingYear = this.currentDate.getFullYear();
        if (numberOfDays < 1) {
            return this.balance;
        }
        else {
            this.currentDate.setDate(startingDay + numberOfDays);
        }
        if (startingMonth !== this.currentDate.getMonth() || startingYear !== this.currentDate.getFullYear()) {
            var recursionCounter = function (currentYear, currentMonth) {
                var counterYear = (currentYear - startingYear) * 12;
                var counterMonths = currentMonth - startingMonth;
                if (counterMonths < 0) {
                    counterMonths += startingMonth;
                }
                return counterMonths + counterYear;
            }(this.currentDate.getFullYear(), this.currentDate.getMonth());
            var rate = this.interestCategory * .01;
            this.addInterest(rate, recursionCounter);
        }
        return this.balance;
    };
    return CheckingAccount;
}());
exports.CheckingAccount = CheckingAccount;
