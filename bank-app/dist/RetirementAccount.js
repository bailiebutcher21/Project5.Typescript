"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Transaction__1 = require("./Transaction\";");
var RetirementAccount = (function () {
    function RetirementAccount() {
    }
    RetirementAccount.prototype.withdrawMoney = function (amount, description, transactionOrigin) {
        var minAge = 60;
        var age = 2018 - this.accountHolderBirthDate.getTime();
        var withdrawlFee = amount * .10;
        if (this.balance > amount) {
        }
    };
    RetirementAccount.prototype.depositMoney = function (amount, description) {
        this.balance += amount;
        var output = new Transaction__1.Transaction(true, amount, this.balance, new Date(), description, "");
        this.accountHistory.push(output);
        return output;
    };
    RetirementAccount.prototype.advanceDate = function (numberOfDays) {
        throw new Error("Method not implemented.");
    };
    return RetirementAccount;
}());
exports.RetirementAccount = RetirementAccount;
//# sourceMappingURL=RetirementAccount.js.map