"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SavingsAccount = (function () {
    function SavingsAccount() {
    }
    SavingsAccount.prototype.withdrawMoney = function (amount, description, transactionOrigin) {
        this.balance -= amount;
        var output = new Transaction(true, amount, this.balance, new Date(), description, "");
        this.accountHistory.push(output);
        return output;
    };
    SavingsAccount.prototype.depositMoney = function (amount, description) {
        this.balance += amount;
        var output = new Transaction(true, amount, this.balance, new Date(), description, "");
        this.accountHistory.push(output);
        return output;
    };
    SavingsAccount.prototype.advanceDate = function (numberOfDays) {
        throw new Error("Method not implemented.");
    };
    return SavingsAccount;
}());
exports.SavingsAccount = SavingsAccount;
//# sourceMappingURL=SavingsAccount.js.map