const LocationAPI = require('../../lib/apis/v2/location');
const config = require('../../lib/apis/config');
const assert = require('assert');
const chance = require('chance')();
const nock = require('nock');

nock.disableNetConnect();

describe('V2-Location', () => {
    it('should set apiKey', () => {
        const apiKey = chance.string();
        const instance = new LocationAPI({ apiKey });
        assert.equal(instance.apiKey, apiKey);
    });

    it('should send apiKey as header', done => {
        const apiKey = chance.string();
        const instance = new LocationAPI({ apiKey });
        const opts = {
            place: chance.string(),
            includeZeroPopulation: false
        };

        const scope = nock(config.url, { req_headers: { 'X-FullContact-ApiKey': apiKey }})
                        .get('/v2/address/locationNormalizer.json')
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
        const instance = new LocationAPI({ apiKey });
        const opts = {
            place: chance.string(),
            includeZeroPopulation: false
        };

        const scope = nock(config.url)
                        .get('/v2/address/locationNormalizer.json')
                        .query(opts)
                        .reply(200, {});

        instance.normalize(opts)
            .then(() => {
                scope.done();
                done();
            })
            .catch(e => assert.fail(e));
    });

    it('should enrich', done => {
        const apiKey = chance.string();
        const instance = new LocationAPI({ apiKey });
        const opts = {
            place: chance.string(),
            includeZeroPopulation: false
        };

        const scope = nock(config.url)
                        .get('/v2/address/locationEnrichment.json')
                        .query(opts)
                        .reply(200, {});

        instance.enrich(opts)
            .then(() => {
                scope.done();
                done();
            })
            .catch(e => assert.fail(e));
    });
});