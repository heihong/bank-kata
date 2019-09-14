
let assert = require('assert');
const Account = require('../app/domain/account/account');
const Client = require('../app/domain/client/client');
const Deposit = require('../app/domain/operation/deposit');
const Withdrawal = require('../app/domain/operation/withdrawal');


describe('Test class Client', function () {

    let account, client;

    beforeEach(()=> {
        account = new Account("heihong", 100);
        client = new Client("heihong", account);
    });

    it('should test getName and return heihong', function () {

        assert.equal("heihong", client.getName())
    });

    it('should test getAccount and return account', function () {
        assert.equal(account, client.getAccount());
    });





});