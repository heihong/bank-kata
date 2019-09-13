'use strict';

class Account{

    constructor(amount) {
        this.amount  = amount;
    }

    getAmount() {
        return this.amount;
    }

    setAmount(amount) {
        return this.amount = amount;
    }

}

module.exports = Account;