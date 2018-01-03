import { TransactionOrigin } from "./src/TransactionOrigin";
import { Person } from "./src/Person";

const accountHolder: string = "Bailie";
const checkingBalance: number = 1000;
const savingsBalance: number = 10000;
const retirementBalance: number = 100000;
const dateOfBirth: Date = new Date(1996, 12, 10);

const bailie = new Person(accountHolder, dateOfBirth, checkingBalance, savingsBalance, retirementBalance);

bailie.checking.advanceDate(30);

bailie.savings.depositMoney(100, "money from grandma");

bailie.retirement.withdrawMoney(1000, "broke", TransactionOrigin.web);

console.log(savingsBalance);
