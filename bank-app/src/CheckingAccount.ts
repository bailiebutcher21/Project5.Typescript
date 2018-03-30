import {AccountType} from './AccountType';
import {Transaction} from './Transaction';
import {Account} from './Account';
import {TransactionOrigin} from "./TransactionOrigin";
import {displayClassName, displayClassNameWithPurpose} from "./Decorators";

@displayClassName

    export class CheckingAccount implements Account, Transaction {

    constructor() {
        this.dateOpened = new Date();
    }

    accountHolderName: string;
    accountHolderBirthDate: Date;
    balance: number = 1000;
    accountType: AccountType;
    accountHistory: Transaction[];
    success: boolean;
    resultBalance: number;
    amount: number;
    description: string;
    transactionDate: Date;
    errorMessage: string;
    dateOpened: Date;
    advanceDate: any;
    currentDate: any;

    withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction {
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
    }

    depositMoney(amount: number, description: string): Transaction {
        this.balance += amount;
        this.resultBalance = this.balance;
        this.success = true;
        this.description = description;
        this.errorMessage = "";
        this.transactionDate = new Date();

        return;

    }

    advancedDate(numberOfDays: number) {
        for (let i = 0; i < numberOfDays; i++){
            this.currentDate.setDate(this.currentDate.getDate() + 1);
            if(this.currentDate.Date() === 1) {
                this.balance = this.balance + (this.balance * (.01 / 12))
            }
        }
    }
}


