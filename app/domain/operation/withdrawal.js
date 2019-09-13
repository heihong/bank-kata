'use strict';

class Withdrawal{

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
        if(this.client.getAccount().getAmount() < this.amount){
            return this.balance;
        }
        this.balance = this.client.getAccount().getAmount() - this.amount;
        return this.balance;
    }


    getDate() {
        return this.date;
    }

}

module.exports = Withdrawal;