
let assert = require('assert');
const Account = require('../app/domain/account/account');
const Deposit = require('../app/domain/operation/deposit');
const WithDrawal = require('../app/domain/operation/withdrawal');

describe('Test class WithDrawal', function () {

    let account, deposit, withdrawal;

    beforeEach(()=> {
        account = new Account("heihong");
        deposit = new Deposit(account, 100, "05/04/1991");
        withdrawal = new WithDrawal(account, 50, "05/04/1991");


    });

    it('should test getAccount return account', function () {

        assert.equal(account, withdrawal.getAccount());
    });


    it('should test getAmount return 100', function () {
        assert.equal(50, withdrawal.getAmount());
    });

    it('should test getDateOperation return date', function () {
        let result = new Date(1991,5,4);
        let withdrawalDate = withdrawal.getDateOperation();
        assert.equal(result.getTime(), withdrawalDate.getTime());
    })

    it('should test getAction return -50', function () {

        assert.equal(-50, withdrawal.getAction());
    });

});