const EmailVerificationAPI = require('../../lib/apis/v2/email-verification');
const config = require('../../lib/apis/config');
const assert = require('assert');
const chance = require('chance')();
const nock = require('nock');

nock.disableNetConnect();

describe('V2-EmailVerification', () => {
    it('should set apiKey', () => {
        const apiKey = chance.string();
        const instance = new EmailVerificationAPI({ apiKey });
        assert.equal(instance.apiKey, apiKey);
    });

    it('should send apiKey as header', done => {
        const apiKey = chance.string();
        const instance = new EmailVerificationAPI({ apiKey });
        const opts = {
            email: chance.email()
        };

        const scope = nock(config.url, { req_headers: { 'X-FullContact-ApiKey': apiKey }})
                        .get('/v2/verification/email')
                        .query(opts)
                        .reply(200, {});

        instance.single(opts)
            .then(() => {
                scope.done();
                done();
            })
            .catch(e => assert.fail(e));
    });

    it('should lookup single', done => {
        const apiKey = chance.string();
        const instance = new EmailVerificationAPI({ apiKey });
        const opts = {
            email: chance.email()
        };

        const scope = nock(config.url)
                        .get('/v2/verification/email')
                        .query(opts)
                        .reply(200, {});

        instance.single(opts)
            .then(() => {
                scope.done();
                done();
            })
            .catch(e => assert.fail(e));
    });

    it('should batch emails', done => {
        const apiKey = chance.string();
        const instance = new EmailVerificationAPI({ apiKey });

        const opts = {
            emails: [chance.email(), chance.email()],
            webhookUrl: chance.url()
        };

        const scope = nock(config.url)
                        .post('/v2/verification/emails', opts)
                        .reply(200, {});

        instance.batch(opts)
            .then(() => {
                scope.done();
                done();
            })
            .catch(e => assert.fail(e));
    });

    it('should check batch status', done => {
        const apiKey = chance.string();
        const id = chance.word();
        const path = `/v2/verification/emails/${id}`;
        const instance = new EmailVerificationAPI({ apiKey });

        const scope = nock(config.url)
                            .get(path)
                            .delayBody(100)
                            .reply(200, {});

        instance.batchStatus(id)
            .then(() => {
                scope.done();
                done();
            })
            .catch(e => assert.fail(e));
    });
});