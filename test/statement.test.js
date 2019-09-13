
let assert = require('assert');
const Account = require('../app/domain/account/account');
const Client = require('../app/domain/client/client');
const Deposit = require('../app/domain/operation/deposit');
const Withdrawal = require('../app/domain/operation/withdrawal');
const Statement = require('../app/domain/statement/statement');


describe('Test class Statement', function () {

    let account, client, deposit, deposit1, withdrawal, withdrawal1, statement;

    beforeEach(()=> {
        account = new Account(100);
        client = new Client("heihong", account);
        deposit = new Deposit(client, 100, "05/04/1991");
        withdrawal = new Withdrawal(client, 50, "10/25/1773");
        deposit1 = new Deposit(client, 200, "11/31/1992");
        withdrawal1 = new Withdrawal(client, 500, "09/14/2018");
        client.addOperation(deposit);
        client.addOperation(withdrawal);
        client.addOperation(deposit1);
        client.addOperation(withdrawal1);
        statement = new Statement(client);
    });

    it('should return the header', function () {
        assert.equal("Operation for heihong \n", statement.makeHeader())
    });

    it('should return the operation date', function () {
        let result = "05/04/1991";
        assert.equal(deposit, client.getOperations()[0]);
    });




});