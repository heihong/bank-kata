'use strict';

class Client{

    constructor(name, account) {
        this.name = name || "";
        this.account = account || null;
        this.operations = [];
    }

    getName() {
        return this.name;
    }


    getAccount() {
        return this.account;
    }

    getOperations() {
        return this.operations;
    }

    addOperation(operation){
        this.operations.push(operation);
    }



}

module.exports = Client;