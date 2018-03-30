import { AccountType } from './AccountType';
var RetirementAccount = (function () {
    function RetirementAccount() {
        this.Transaction = {
            constructor: function () {
                this.dateOpened = new Date();
            },
            accountHolderName: string,
            currentDate: any,
            accountBirthDate: Date,
            balance: number = 100000,
            accountType: AccountType,
            accountHistory: Transaction[],
            success: boolean,
            resultBalance: number,
            amount: number,
            description: string,
            tranactionDate: Date,
            errorMessage: string,
            dateOpened: Date,
            monthlyTransaction: number = 6,
            userAge: number = 64,
            earlyWithdrawl: number = (this.balance * .1),
            withdrawMoney: function (amount, description, transactionOrigin) {
                var currentBalance = this.balance;
                this.accountType = 3;
                this.amount = amount;
                if (transactionOrigin == 1 || transactionOrigin == 2) {
                    if (this.monthlyTransaction >= 1) {
                        if (amount > currentBalance) {
                            this.success = false;
                            this.errorMessage = "message";
                            this.resultBalance = this.balance;
                            this.tranactionDate = new Date();
                            this.description = description;
                        }
                        else {
                            if (this.userAge <= 65) {
                                this.balance -= this.earlyWithdrawl;
                                this.success = true;
                                this.errorMessage = "";
                                this.resultBalance = this.balance -= amount;
                                this.tranactionDate = new Date();
                                this.description = description;
                                this.monthlyTransaction--;
                            }
                            else {
                                this.success = true;
                                this.errorMessage = "";
                                this.resultBalance = this.balance -= amount;
                                this.tranactionDate = new Date();
                                this.description = description;
                                this.monthlyTransaction--;
                            }
                        }
                    }
                    else {
                        this.errorMessage = "number of transaction exceeded federal limits";
                    }
                }
                else {
                    this.amount = amount;
                    if (amount > currentBalance) {
                        this.success = false;
                        this.errorMessage = "cannot withdrawl more than the available balance.";
                        this.resultBalance = this.balance;
                        this.tranactionDate = new Date();
                    }
                    else {
                        this.success = true;
                        this.errorMessage = "";
                        this.resultBalance = this.balance -= amount;
                        this.tranactionDate = new Date();
                        this.description = description;
                    }
                }
                return;
            },
            depositMoney: function (amount, description) {
                this.balance += amount;
                this.resultBalance = this.balance;
                this.success = true;
                this.description = description;
                this.errorMessage = "";
                this.tranactionDate = new Date();
                return;
            },
            advancedDate: function (numberOfDays) {
                for (var i = 0; i < numberOfDays; i++) {
                    this.currentDate.setDate(this.currentDate.getDate() + 1);
                    if (this.currentDate.Date() === 1) {
                        this.balance = this.balance + (this.balance * (.01 / 12));
                    }
                }
            }
        };
    }
    return RetirementAccount;
}());
export { RetirementAccount };
//# sourceMappingURL=RetirementAccount.js.map