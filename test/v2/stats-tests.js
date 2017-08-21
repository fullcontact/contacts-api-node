const StatsAPI = require('../../lib/apis/v2/stats');
const config = require('../../lib/apis/config');
const assert = require('assert');
const chance = require('chance')();
const nock = require('nock');

nock.disableNetConnect();

describe('V2-Stats', () => {
    it('should set apiKey', () => {
        const apiKey = chance.string();
        const instance = new StatsAPI({ apiKey });
        assert.equal(instance.apiKey, apiKey);
    });

    it('should send apiKey as header', done => {
        const apiKey = chance.string();
        const instance = new StatsAPI({ apiKey });

        const opts = {
            period: chance.string()
        };

        const scope = nock(config.url, { req_headers: { 'X-FullContact-ApiKey': apiKey }})
                        .get('/v2/stats.json')
                        .query(opts)
                        .reply(200, {});

        instance.get(opts)
            .then(() => {
                scope.done();
                done();
            })
            .catch(e => assert.fail(e));
    });

    it('should lookup', done => {
        const apiKey = chance.string();
        const instance = new StatsAPI({ apiKey });

        const opts = {
            period: chance.string()
        };

        const scope = nock(config.url)
                        .get('/v2/stats.json')
                        .query(opts)
                        .reply(200, {});

        instance.get(opts)
            .then(() => {
                scope.done();
                done();
            })
            .catch(e => assert.fail(e));
    });
});