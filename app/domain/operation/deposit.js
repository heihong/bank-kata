'use strict';

class Deposit{

    constructor(account, amount, date) {
        this.account = account;
        this.amount = amount || "";
        this.date = date;
        this.action = -1;
    }

    getAccount() {
        return this.account;
    }


    getAmount() {
        return this.amount;
    }


    getDateOperation() {
        let [month, day, year] = this.date.split("/");
        return new Date(year, month, day);
    }

    getAction(){
        this.action = this.amount;
        return this.action;
    }

}

module.exports = Deposit;