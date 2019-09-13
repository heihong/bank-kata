
let assert = require('assert');
const Account = require('../app/domain/account/account');
const Client = require('../app/domain/client/client');
const Deposit = require('../app/domain/operation/deposit');
const Withdrawal = require('../app/domain/operation/withdrawal');


describe('Test class Client', function () {

    let account, client;

    beforeEach(()=> {
        account = new Account(100);
        client = new Client("heihong", account);
    });

    it('should return 100', function () {

        assert.equal("heihong", client.getName())
    })

    it('should return account', function () {
        assert.equal(account, client.getAccount());
    })

    it('should return 1', function () {

        assert.equal(account, client.getAccount());
    })

    it('should return 1', function () {
        let deposit = new Deposit(client, 100, "05/04/1991");
        client.addOperation(deposit);
        assert.equal(1, client.getOperations().length);
    })

    it('should return 2', function () {
        let deposit = new Deposit(client, 100, "05/04/1991");
        let withdrawal = new Withdrawal(client, 50, "09/04/1991");
        client.addOperation(deposit);
        client.addOperation(withdrawal);
        assert.equal(2, client.getOperations().length);
    })

    it('should return 2', function () {
        let deposit = new Deposit(client, 100, "05/04/1991");
        let withdrawal = new Withdrawal(client, 300, "09/04/1991");
        client.addOperation(deposit);
        client.addOperation(withdrawal);
        assert.equal(1, client.getOperations().length);
    })



})