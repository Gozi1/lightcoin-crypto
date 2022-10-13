let balance = 500.00;

class Transaction {

  constructor(amount, account) {
    this.amount  = amount;
    this.account = account;
  }

  commit() {
    this.time = new Date();
    // Add the transaction to the account
    // this.account.balance += this.value;
    this.value = this.amount;
    this.account.addTransaction(this);

  }

}

class Deposit extends Transaction {

  set value(_amount) {

      this.amount = _amount;

  }

}

class Withdrawal extends Transaction {

  set value(_amount) {
    if(this.account.balance - _amount >= 0){
      this.amount = -_amount;
    }
    else {
      this.amount = 0;
    }
  }

}

class Account {

  constructor(username) {
    this.username = username;

    this.transactions = [];
  }

  get balance() {
    let currentBalance = 0;

    this.transactions.forEach(value =>{
      currentBalance += value.amount
      });

    return currentBalance;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

}
const myAccount = new Account("snow-patrol");
// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

t1 = new Withdrawal(500,myAccount);
t1.commit();
console.log('Balance:', myAccount.balance);
t2.commit();
console.log('Balance:', myAccount.balance);
t3 = new Deposit(120.00,myAccount);
t3.commit();
console.log('Transaction 3:', t3);
console.log('Balance:', myAccount.balance);
// console.log(myAccount.balance);
