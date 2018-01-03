import {AccountType} from './AccountType';
import {Transaction} from './Transaction';
import {Account} from './Account';
import {TransactionOrigin} from "./TransactionOrigin";
import {displayClassName, displayClassNameWithPurpose} from "./Decorators";

export class CheckingAccount implements Account {
    displayName: string;
    id: string;
    imageURL?: string;
    name?: string;
    rpDisplayName: string;
    accountHolderName: string;
    accountHolderBirthDate: Date;
    balance: number;
    accountType: AccountType;
    accountHistory: Transaction[];

    withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction {
        this.balance -= amount;
        const output = new Transaction(true, amount, this.balance, new Date(), description, "");
        this.accountHistory.push(output);
        return output;
    }

    depositMoney(amount: number, description: string): Transaction {
        this.balance += amount;
        const output = new Transaction(true, amount, this.balance, new Date(), description, "");
        this.accountHistory.push(output);
        return output;
    }

    advanceDate(numberOfDays: number) {
        const startingDay: number = this.currentDate.getDate();
        const startingMonth: number = this.currentDate.getMonth();
        const startingYear: number = this.currentDate.getFullYear();

        if (numberOfDays < 1) {
            return this.balance;
        } else {
            this.currentDate.setDate(startingDay + numberOfDays);
        }

        if (startingMonth !== this.currentDate.getMonth() || startingYear !== this.currentDate.getFullYear()) {
            const recursionCounter = function (currentYear: number, currentMonth: number): number {

                const counterYear: number = (currentYear - startingYear) * 12;
                let counterMonths: number = currentMonth - startingMonth;

                if (counterMonths < 0) {
                    counterMonths += startingMonth;
                }
                return counterMonths + counterYear;

            }(this.currentDate.getFullYear(), this.currentDate.getMonth());

            const rate: number = this.interestCategory * .01;
            this.addInterest(rate, recursionCounter);
        }
        return this.balance;
    }
}
