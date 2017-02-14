const AccountAPI = require('../../lib/apis/v3/account');
const config = require('../../lib/apis/config');
const assert = require('assert');
const chance = require('chance')();
const nock = require('nock');

nock.disableNetConnect();

describe('V3-Account', () => {
    it('should get', done => {
        const accessToken = chance.string();
        const instance = new AccountAPI();


        const scope = nock(config.url, { req_headers: { Authorization: `Bearer ${accessToken}` }})
                        .post('/v3/account.get')
                        .reply(200, {});

        instance.get(accessToken)
            .then(() => {
                scope.done();
                done();
            })
            .catch(e => assert.fail(e));
    });
});