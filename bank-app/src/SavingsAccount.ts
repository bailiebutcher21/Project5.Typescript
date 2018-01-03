import {AccountType} from './AccountType';
import {Transaction} from "./Transaction";
import {Account} from './Account';
import {TransactionOrigin} from "./TransactionOrigin";
import {displayClassName, displayClassNameWithPurpose} from "./Decorators";

export class SavingsAccount implements Account {
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
        throw new Error("Method not implemented.");
    }
}