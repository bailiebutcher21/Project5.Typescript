var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { TransactionOrigin } from "./TransactionOrigin";
import { displayClassName } from "./Decorators";
var CheckingAccount = (function () {
    function CheckingAccount() {
        this.balance = 1000;
        this.dateOpened = new Date();
    }
    CheckingAccount.prototype.withdrawMoney = function (amount, description, transactionOrigin) {
        var currentBalance = this.balance;
        this.accountType = 1;
        if (TransactionOrigin == TransactionOrigin.branch || TransactionOrigin.phone || TransactionOrigin.web) {
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
    CheckingAccount.prototype.advancedDate = function (numberOfDays) {
        for (var i = 0; i < numberOfDays; i++) {
            this.currentDate.setDate(this.currentDate.getDate() + 1);
            if (this.currentDate.Date() === 1) {
                this.balance = this.balance + (this.balance * (.01 / 12));
            }
        }
    };
    CheckingAccount = __decorate([
        displayClassName
    ], CheckingAccount);
    return CheckingAccount;
}());
export { CheckingAccount };
//# sourceMappingURL=CheckingAccount.js.map