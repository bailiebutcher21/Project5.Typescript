import {AccountType} from "./AccountType";
import {Transaction} from "./Transaction";
import {TransactionOrigin} from "./TransactionOrigin";

export interface Account {
  accountHolderName: string;
  accountHolderBirthDate: Date;
  balance: number;
  accountType: AccountType;
  accountHistory: Transaction[];
  currentDate: Date;
  withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction;
  depositMoney(amount: number, description: string): Transaction;
  advanceDate(numberOfDays: number);
}