import { CheckingAccount } from "./CheckingAccount";
import { SavingsAccount } from "./SavingsAccount";
import { RetirementAccount } from "./RetirementAccount";
var Person = (function () {
    function Person() {
        this.checking = new CheckingAccount();
        this.savings = new SavingsAccount();
        this.retirement = new RetirementAccount();
        this.name = name;
        this.dateOfBirth = new Date(1996, 10, 12);
        this.checkingBalance = 1000;
        this.savingsBalance = 10000;
        this.retirementBalance = 100000;
    }
    return Person;
}());
export { Person };
//# sourceMappingURL=Person.js.map