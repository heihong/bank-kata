'use strict';

class Account{

    constructor(nameClient, amount) {
        this.nameClient = nameClient || "";
        this.totalAmount  = 0;
        this.operations = [];
    }

    getTotalAmount() {
        if (this.totalAmount ==  0) {
            this.totalAmount = this.sumAllOperations();
        }
        return this.totalAmount;
    }

    setTotalAmount(totalAmount) {

        return this.totalAmount = totalAmount;
    }

    sumAllOperations() {
        return this.operations.reduce((total, operations) => total + operations.getAction(), 0);
    }

    getOperations() {
        return this.operations;
    }

    addOperation(operation){
        this.operations.push(operation);
    }

}

module.exports = Account;