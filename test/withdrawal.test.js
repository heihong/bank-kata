
let assert = require('assert');
const Account = require('../app/domain/account/account');
const Client = require('../app/domain/client/client');
const WithDrawal = require('../app/domain/operation/withdrawal');

describe('Test class WithDrawal', function () {

    let account, client, withdrawal;

    beforeEach(()=> {
        account = new Account(100);
        client = new Client("heihong", account);
        withdrawal = new WithDrawal(client, 50, "05/04/1991");


    });

    it('should return 100', function () {
        assert.equal(50, withdrawal.getAmount());
    });

    it('should return 50', function () {
        assert.equal(50, withdrawal.getBalance());
    });

    it('should return -1 when you have not enough money', function () {
       let withdrawalMoney = new WithDrawal(client, 300, "05/04/1991");
        assert.equal(-1, withdrawalMoney.getBalance());
    });


    it('should return client', function () {
        assert.equal(client, withdrawal.getClient());
    });

    it('should return date', function () {
        let result = new Date(1991,5,4);
        let withdrawalDate = withdrawal.getDateOperation();
        assert.equal(result.getTime(), withdrawalDate.getTime());
    })


});