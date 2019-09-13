
let assert = require('assert');
const Account = require('../app/domain/account/account');
const Client = require('../app/domain/client/client');
const WithDrawal = require('../app/domain/operation/withdrawal');

describe('Test class WithDrawal', function () {

    let account, client;

    beforeEach(()=> {
        account = new Account(100);
        client = new Client("heihong", account);


    });

    it('should return 100', function () {
        let withdrawal = new WithDrawal(client, 50, "05/04/1991");
        assert.equal(50, withdrawal.getAmount());
    })

    it('should return 50', function () {
        let withdrawal = new WithDrawal(client, 50, "05/04/1991");
        assert.equal(50, withdrawal.getBalance());
    })

    it('should return -1 when you have not enough money', function () {
        let withdrawal = new WithDrawal(client, 150, "05/04/1991");
        assert.equal(-1, withdrawal.getBalance());
    })

})