
let assert = require('assert');
const Account = require('../app/domain/account/account');
const Deposit = require('../app/domain/operation/deposit');

describe('Test class Deposit', function () {

    let account, deposit;

    beforeEach(()=> {
        account = new Account("heihong");
        deposit = new Deposit(account, 100, "05/04/1991");

    });

    it('should test getAccount return account', function () {

        assert.equal(account, deposit.getAccount());
    });

    it('should test getAmount return 100', function () {

        assert.equal(100, deposit.getAmount());
    });


    it('should test getDateOperation return date', function () {
        let result = new Date(1991,5,4);
        let depositDate = deposit.getDateOperation();
        assert.equal(result.getTime(), depositDate.getTime());
    });

    it('should test getAction return 100', function () {

        assert.equal(100, deposit.getAction());
    });
});