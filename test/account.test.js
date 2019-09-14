
let assert = require('assert');
const Account = require('../app/domain/account/account');
const Deposit = require('../app/domain/operation/deposit');
const Withdrawal = require('../app/domain/operation/withdrawal');


describe('Test class Account', function () {

    let account, account1;

    beforeEach(()=> {
        account = new Account("heihong");
        account1 = new Account("heihong");
    });

    it('should test getTotalAmount and return 0', function () {

        assert.equal(0, account1.getTotalAmount())
    });

    it('should test setTotalAmount return 200', function () {

        assert.equal(200, account.setTotalAmount(200))
    });

    it('should test addOperation return 1', function () {
        let deposit = new Deposit(account, 100, "05/04/1991");
        account.addOperation(deposit);
        assert.equal(1, account.getOperations().length);

    });

    it('should test getTotalAmount and return 200 when making a deposit', function () {
        let deposit = new Deposit(account, 100, "05/04/1991");
        account.addOperation(deposit);
        assert.equal(1, account.getOperations().length);
        assert.equal(100, account.getTotalAmount());

    });

    it('should test getTotalAmount and return 50 when making a withdrawal', function () {
        let deposit = new Deposit(account, 100, "05/04/1991");
        let withdrawal = new Withdrawal(account, 50, "05/04/1991");
        account.addOperation(deposit);
        account.addOperation(withdrawal);
        assert.equal(2, account.getOperations().length);
        assert.equal(50, account.getTotalAmount());

    });

    it('should test getTotalAmount and return 250  when making some deposit and some withdrawal', function () {
        let deposit = new Deposit(account, 100, "05/04/1991");
        let withdrawal = new Withdrawal(account, 50, "09/04/1991");
        account.addOperation(deposit);
        account.addOperation(withdrawal);
        account.addOperation(deposit);
        assert.equal(3, account.getOperations().length);
        assert.equal(150, account.getTotalAmount());
    })

});