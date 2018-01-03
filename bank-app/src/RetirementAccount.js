"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RetirementAccount = (function () {
    function RetirementAccount() {
    }
    RetirementAccount.prototype.withdrawMoney = function (amount, description, transactionOrigin) {
        throw new Error("Method not implemented.");
    };
    RetirementAccount.prototype.depositMoney = function (amount, description) {
        throw new Error("Method not implemented.");
    };
    RetirementAccount.prototype.advanceDate = function (numberOfDays) {
        throw new Error("Method not implemented.");
    };
    return RetirementAccount;
}());
exports.RetirementAccount = RetirementAccount;
