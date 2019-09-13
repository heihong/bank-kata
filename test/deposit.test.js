
let assert = require('assert');
const Account = require('../app/domain/account/account');
const Client = require('../app/domain/client/client');
const Deposit = require('../app/domain/operation/deposit');

describe('Test class Deposit', function () {

    let account, client, deposit;

    beforeEach(()=> {
        account = new Account(100);
        client = new Client("heihong", account);
        deposit = new Deposit(client, 100, "05/04/1991");

    });

    it('should return 100', function () {

        assert.equal(100, deposit.getAmount());
    })

    it('should return 200', function () {

        assert.equal(200, deposit.getBalance());
    })


    it('should return client', function () {

        assert.equal(client, deposit.getClient());
    })

    it('should return date', function () {
        let result = new Date(1991,5,4);
        let depositDate = deposit.getDateOperation();
        assert.equal(result.getTime(), depositDate.getTime());
    })
})