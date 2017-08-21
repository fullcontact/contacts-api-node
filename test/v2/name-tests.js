const NameAPI = require('../../lib/apis/v2/name');
const config = require('../../lib/apis/config');
const assert = require('assert');
const chance = require('chance')();
const nock = require('nock');

nock.disableNetConnect();

describe('V2-Name', () => {
    it('should set apiKey', () => {
        const apiKey = chance.string();
        const instance = new NameAPI({ apiKey });
        assert.equal(instance.apiKey, apiKey);
    });

    it('should send apiKey as header', done => {
        const apiKey = chance.string();
        const instance = new NameAPI({ apiKey });
        const opts = {
            q: chance.string()
        };

        const scope = nock(config.url, { req_headers: { 'X-FullContact-ApiKey': apiKey }})
                        .get('/v2/name/normalizer.json')
                        .query(opts)
                        .reply(200, {});

        instance.normalize(opts)
            .then(() => {
                scope.done();
                done();
            })
            .catch(e => assert.fail(e));
    });

    it('should normalize', done => {
        const apiKey = chance.string();
        const instance = new NameAPI({ apiKey });
        const opts = {
            q: chance.string()
        };

        const scope = nock(config.url)
                        .get('/v2/name/normalizer.json')
                        .query(opts)
                        .reply(200, {});

        instance.normalize(opts)
            .then(() => {
                scope.done();
                done();
            })
            .catch(e => assert.fail(e));
    });

    it('should check similarity', done => {
        const apiKey = chance.string();
        const instance = new NameAPI({ apiKey });
        const opts = {
            q1: chance.string(),
            q2: chance.string()
        };

        const scope = nock(config.url)
                        .get('/v2/name/similarity.json')
                        .query(opts)
                        .reply(200, {});

        instance.similarity(opts)
            .then(() => {
                scope.done();
                done();
            })
            .catch(e => assert.fail(e));
    });

    it('should get stats', done => {
        const apiKey = chance.string();
        const instance = new NameAPI({ apiKey });
        const opts = {
            q: chance.string()
        };

        const scope = nock(config.url)
                        .get('/v2/name/stats.json')
                        .query(opts)
                        .reply(200, {});

        instance.stats(opts)
            .then(() => {
                scope.done();
                done();
            })
            .catch(e => assert.fail(e));
    });

    it('should parse', done => {
        const apiKey = chance.string();
        const instance = new NameAPI({ apiKey });
        const opts = {
            q: chance.string()
        };

        const scope = nock(config.url)
                        .get('/v2/name/parser.json')
                        .query(opts)
                        .reply(200, {});

        instance.parser(opts)
            .then(() => {
                scope.done();
                done();
            })
            .catch(e => assert.fail(e));
    });
});