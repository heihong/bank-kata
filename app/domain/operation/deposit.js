'use strict';

class Deposit{

    constructor(client, amount, date) {
        this.client = client;
        this.amount = amount || "";
        this.date = date;
        this.balance = -1;
    }

    getClient() {
        return this.client;
    }


    getAmount() {
        return this.amount;
    }

    getBalance() {
        this.balance = this.client.getAccount().getAmount() + this.amount;
        return this.balance;
    }



    getDate() {
        return this.date;
    }


}

module.exports = Deposit;