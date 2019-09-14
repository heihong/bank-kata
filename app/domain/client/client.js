'use strict';

class Client{

    constructor(name, account) {
        this.name = name || "";
        this.account = account || null;
    }

    getName() {
        return this.name;
    }


    getAccount() {
        return this.account;
    }



}

module.exports = Client;