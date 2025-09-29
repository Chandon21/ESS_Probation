// Visibility (public, private, protected)

class BankAccount {
  public accountNumber: string;
  private balance: number;
  protected accountType: string;

  constructor(accountNumber: string, balance: number, accountType: string) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.accountType = accountType;
  }

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposited: ${amount}, New Balance: ${this.balance}`);
  }

  private withdraw(amount: number): void {
    this.balance -= amount;
    console.log(`Withdrew: ${amount}, Remaining Balance: ${this.balance}`);
  }
}

const account = new BankAccount("ACC123", 1000, "Savings");
account.deposit(500);
// account.withdraw(200); ❌ Not accessible (private)
