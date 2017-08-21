const CompanyAPI = require('../../lib/apis/v2/company');
const config = require('../../lib/apis/config');
const assert = require('assert');
const chance = require('chance')();
const nock = require('nock');

nock.disableNetConnect();

describe('V2-Company', () => {    
    it('should set apiKey', () => {
        const apiKey = chance.string();
        const instance = new CompanyAPI({ apiKey });
        assert.equal(instance.apiKey, apiKey);
    });

    it('should send apiKey as header', done => {
        const apiKey = chance.string();
        const instance = new CompanyAPI({ apiKey });
        const opts = {
            domain: chance.domain(),
            keyPeople: true,
            prettyPrint: false,
            webhookUrl: chance.url(),
            webhookId: chance.string(),
            webhookBody: chance.string()
        };

        const scope = nock(config.url, { req_headers: { 'X-FullContact-ApiKey': apiKey }})
                        .get('/v2/company/lookup.json')
                        .query(opts)
                        .reply(200, {});

        instance.lookup(opts)
            .then(() => {
                scope.done();
                done();
            })
            .catch(e => assert.fail(e));
    });

    it('should lookup by domain', done => {
        const apiKey = chance.string();
        const instance = new CompanyAPI({ apiKey });
        const opts = {
            domain: chance.domain(),
            keyPeople: true,
            prettyPrint: false,
            webhookUrl: chance.url(),
            webhookId: chance.string(),
            webhookBody: chance.string()
        };

        const scope = nock(config.url)
                        .get('/v2/company/lookup.json')
                        .query(opts)
                        .reply(200, {});

        instance.lookup(opts)
            .then(() => {
                scope.done();
                done();
            })
            .catch(e => assert.fail(e));
    });

    it('should search by name', done => {
        const apiKey = chance.string();
        const instance = new CompanyAPI({ apiKey });
        const opts = {
            companyName: chance.name(),
            keyPeople: true,
            prettyPrint: false,
            webhookUrl: chance.url(),
            webhookId: chance.string(),
            webhookBody: chance.string()
        };

        const scope = nock(config.url)
                        .get('/v2/company/search.json')
                        .query(opts)
                        .reply(200, {});

        instance.search(opts)
            .then(() => {
                scope.done();
                done();
            })
            .catch(e => assert.fail(e));
    });
});