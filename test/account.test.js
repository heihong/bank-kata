
let assert = require('assert');
const Account = require('../app/domain/account/account');


describe('Test class Account', function () {

    let account;

    beforeEach(()=> {
        account = new Account(100);
    });

    it('should return 100', function () {

        assert.equal(100, account.getAmount())
    })

})