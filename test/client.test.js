
let assert = require('assert');
const Account = require('../app/domain/account/account');
const Client = require('../app/domain/client/client');


describe('Test class Account', function () {

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

})