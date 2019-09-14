
let assert = require('assert');
const Account = require('../app/domain/account/account');
const Client = require('../app/domain/client/client');
const Deposit = require('../app/domain/operation/deposit');
const Withdrawal = require('../app/domain/operation/withdrawal');
const Statement = require('../app/domain/statement/statement');


describe('Test class Statement', function () {

    let account, client, deposit, deposit1, withdrawal, statement;

    beforeEach(()=> {
        account = new Account("heihong", 100);
        client = new Client("heihong", account);
        deposit = new Deposit(account, 100, "05/04/1991");
        withdrawal = new Withdrawal(account, 50, "10/25/1773");
        deposit1 = new Deposit(account, 200, "11/31/1992");
        account.addOperation(deposit);
        account.addOperation(withdrawal);
        account.addOperation(deposit1);
        statement = new Statement(client);
    });

    it('should test makeHeader return the result', function () {
        let result = "Operation for heihong \n";
        assert.equal(result, statement.makeHeader());
    });

    it('should test printdate return 5/4/1991', function () {
        let result = '5/4/1991';
        assert.equal(result, statement.printdate(account.getOperations()[0].getDateOperation()));
    });

    it('should test makeContainer return result', function () {
        let result = 'Deposit 100 the 5/4/1991 and the balance is 250\n'+
            'Withdrawal 50 the 10/25/1773 and the balance is 250\n'+
            'Deposit 200 the 11/31/1992 and the balance is 250\n';
        assert.equal(250, account.getTotalAmount());
        assert.equal(result, statement.makeContainer());
    });

    it('should return the statement', function () {
        let result = 'Operation for heihong \n'+
            'Deposit 100 the 5/4/1991 and the balance is 250\n'+
            'Withdrawal 50 the 10/25/1773 and the balance is 250\n'+
            'Deposit 200 the 11/31/1992 and the balance is 250\n';
        assert.equal(result, statement.makeStatement());
    });




});