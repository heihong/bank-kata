'use strict';

const Deposit = require('../operation/deposit');
const Withdrawal = require('../operation/withdrawal');

class Statement{

    constructor(client) {
        this.client = client || null;
    }

    getClient() {
        return this.client;
    }

    makeHeader() {
        return `Operation for ${this.client.getName()} \n`;
    }

    printdate(operation){
      //  return `${operation.getDate().getMonth()}/${operation.getDate().getDay()}/${operation.getDate().getFullYear()}`;
        return operation.getDateOperation();
    }


    makeContainer() {
        let result = "";
        for (let operation of this.client.getOperations()) {
            if(operation instanceof Deposit){
                result += `Deposit ${operation.getAmount()} the ${this.printdate(operation)} and the balance is ${operation.getBalance()}\n`;
            }
            else if (operation instanceof Withdrawal){
                if(operation.getBalance() == -1){
                    result += `Fail Withdrawal ${operation.getAmount()} the ${this.printdate(operation)} and the balance is ${client.getAccount().getAmount()}\n`;
                }
                else{
                    result += `Withdrawal ${operation.getAmount()} the ${this.printdate(operation)} and the balance is ${operation.getBalance()}\n`;
                }
            }
        }
        return result
    }

    makeStatement() {
        return this.makeHeader() + this.makeContainer() ;
    }

}

module.exports = Statement;