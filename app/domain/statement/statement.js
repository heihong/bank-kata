'use strict';

const Deposit = require('../operation/deposit');
const Withdrawal = require('../operation/withdrawal');

class Statement{

    constructor(client) {
        this.client = client || null;
    }

    makeHeader() {
        return `Operation for ${this.client.getName()} \n`;
    }

    printdate(operation){
        return `${operation.getMonth()}/${operation.getDate()}/${operation.getFullYear()}`;
    }


    makeContainer() {
        let result = "";
        for (let operation of this.client.getAccount().getOperations()) {
            if(operation instanceof Deposit){
                result += `Deposit ${operation.getAmount()} the ${this.printdate(operation.getDateOperation())} and the balance is ${this.client.getAccount().getTotalAmount()}\n`;
            }
            else if (operation instanceof Withdrawal){

                result += `Withdrawal ${operation.getAmount()} the ${this.printdate(operation.getDateOperation())} and the balance is ${this.client.getAccount().getTotalAmount()}\n`;

            }
        }
        return result;
    }

    makeStatement() {
        return this.makeHeader() + this.makeContainer();
    }

}

module.exports = Statement;