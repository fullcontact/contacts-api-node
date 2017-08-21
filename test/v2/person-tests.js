const PersonAPI = require('../../lib/apis/v2/person');
const config = require('../../lib/apis/config');
const assert = require('assert');
const chance = require('chance')();
const nock = require('nock');

nock.disableNetConnect();

describe('V2-Person', () => {
    it('should set apiKey', () => {
        const apiKey = chance.string();
        const instance = new PersonAPI({ apiKey });
        assert.equal(instance.apiKey, apiKey);
    });

    it('should send apiKey as header', done => {
        const apiKey = chance.string();
        const instance = new PersonAPI({ apiKey });
        const opts = {
            email: chance.email()
        };

        const scope = nock(config.url, { req_headers: { 'X-FullContact-ApiKey': apiKey }})
                        .get('/v2/person.json')
                        .query(opts)
                        .reply(200, {});

        instance.lookup(opts)
            .then(() => {
                scope.done();
                done();
            })
            .catch(e => assert.fail(e));
    });

    it('should lookup', done => {
        const apiKey = chance.string();
        const instance = new PersonAPI({ apiKey });
        const opts = {
            email: chance.email()
        };

        const scope = nock(config.url)
                        .get('/v2/person.json')
                        .query(opts)
                        .reply(200, {});

        instance.lookup(opts)
            .then(() => {
                scope.done();
                done();
            })
            .catch(e => assert.fail(e));
    });
});