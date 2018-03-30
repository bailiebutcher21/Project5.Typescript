import {AccountType} from '../Enums/AccountType';
import {Transaction} from "../Transaction";
import {Account} from '../Account';
import {TransactionOrigin} from "../Enums/TransactionOrigin";
import {displayClassName, displayClassNameWithPurpose} from "../Decorators";


@displayClassName
export class SavingsAccount implements Account {
    constructor(){
        this.dateOpened = new Date();
    }

    dateOpened: Date;
    currentDate: any;
    errorMessage:string;
    transactionDate: Date;
    description: string;
    amount: number;
    success: boolean;
    resultBalance: number;
    accountHolderName: string;
    accountHolderBirthDate: Date;
    balance: number = 10000;
    accountType: AccountType;
    accountHistory: Transaction[];
    monthlyTransactions: number = 6;

    withdrawMoney(amount: number,
                  description: string,
                  transactionOrigin: TransactionOrigin): Transaction {

        let currentBalance = this.balance;
        this.accountType = 2;
        this.amount = amount;

        if (transactionOrigin == TransactionOrigin.branch || TransactionOrigin.phone ||     TransactionOrigin.web) {
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
    }
    depositMoney(amount: number, description: string) {
    };
    //
    // Transaction(){
    //     this.balance += amount;
    //     this.resultBalance =this.balance;
    //     this.success = true;
    //     this.description = description;
    //     this.errorMessage="";
    //     this.transactionDate = new Date();
    //
    //     return;
    // }
advancedDate(numberOfDays: number) {
    for (let i = 0; i < numberOfDays; i++){
        this.currentDate.setDate(this.currentDate.getDate() + 1);
        if(this.currentDate.Date() === 1) {
            this.balance = this.balance + (this.balance * (.01 / 12))
            }
         }
    }
}

