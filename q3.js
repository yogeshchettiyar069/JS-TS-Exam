class Account{
    accountId;
    accountHolder;
    balance;

    constructor(accountId, accountHolder, balance){
        this.accountId = accountId;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
}

let acc = new Account(1, "Yogesh", 13000);
console.log(acc);

