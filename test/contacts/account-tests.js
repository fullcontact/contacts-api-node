const AccountAPI = require('../../lib/apis/contacts/account');
const config = require('../../lib/apis/config');
const assert = require('assert');
const chance = require('chance')();
const nock = require('nock');

nock.disableNetConnect();

describe('ContactsAPIAccount', () => {
    it('should get', done => {
        const accessToken = chance.string();
        const instance = new AccountAPI();


        const scope = nock(config.contactsUrl, { req_headers: { Authorization: `Bearer ${accessToken}` }})
                        .post('/api/v1/account.get')
                        .reply(200, {});

        instance.get(accessToken)
            .then(() => {
                scope.done();
                done();
            })
            .catch(e => assert.fail(e));
    });
});