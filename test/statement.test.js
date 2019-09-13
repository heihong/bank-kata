
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
        assert.equal("Operation for heihong \n", statement.makeHeader());
    });

    it('should return the date of the first element of Operations', function () {
        let result = '5/4/1991';
        assert.equal(result, statement.printdate(client.getOperations()[0].getDateOperation()));
    });

    it('should return makeContainer', function () {
        let result = 'Deposit 100 the 5/4/1991 and the balance is 200\n' +
            'Withdrawal 50 the 10/25/1773 and the balance is 50\n' +
            'Deposit 200 the 11/31/1992 and the balance is 300\n' +
            'Fail Withdrawal 500 the 9/14/2018 and the balance is 100\n';
        assert.equal(result, statement.makeContainer());
    });

    it('should return the makeStatement', function () {
        let result = 'Operation for heihong \n'+
            'Deposit 100 the 5/4/1991 and the balance is 200\n' +
            'Withdrawal 50 the 10/25/1773 and the balance is 50\n' +
            'Deposit 200 the 11/31/1992 and the balance is 300\n' +
            'Fail Withdrawal 500 the 9/14/2018 and the balance is 100\n';
        assert.equal("Operation for heihong \n", statement.makeHeader());
    });




});