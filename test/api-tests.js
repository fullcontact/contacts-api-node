const assert = require('assert');

const api = require('../lib/apis/api');
const chance = require('chance')();

describe('APIKeyBased', () => {
    it('should add auth header', done => {
        const instance = new api.APIKeyBased();
        const apiKey = chance.string();
        const headers = {};

        instance.authorize(apiKey, headers)
            .then(r => {
                assert.equal(r['X-FullContact-ApiKey'], apiKey);
                done();
            })
            .catch(e => assert.fail(e));
    });
});

describe('OAuthBased', () => {
    it('should add auth header', done => {
        const instance = new api.OAuthBased();
        const accessToken = chance.string();
        const headers = {};

        instance.authorize(accessToken, headers)
            .then(r => {
                assert.equal(r.Authorization, `Bearer ${accessToken}`);
                done();
            })
            .catch(e => assert.fail(e));
    });
});