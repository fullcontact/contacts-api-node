const TeamsAPI = require('../../lib/apis/v3/teams');
const config = require('../../lib/apis/config');
const assert = require('assert');
const chance = require('chance')();
const nock = require('nock');

nock.disableNetConnect();

describe('V3-Teams', () => {
    it('should get', done => {
        const accessToken = chance.string();
        const instance = new TeamsAPI();
        const body = { };

        const scope = nock(config.url, { req_headers: { Authorization: `Bearer ${accessToken}` }})
                        .post('/v3/teams.get', body)
                        .reply(200, {});

        instance.get(accessToken, body)
            .then(() => {
                scope.done();
                done();
            })
            .catch(e => assert.fail(e));
    });
});