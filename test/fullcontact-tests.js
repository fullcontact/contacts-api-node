const assert = require('assert');
const chance = require('chance')();
const FullContact = require('../lib/fullcontact');
const OAuth = require('../lib/apis/oauth');
const V2 = require('../lib/apis/v2');
const Contacts = require('../lib/apis/contacts');

describe('FullContact', () => {
    it('should create instances', () => {
        const instance = FullContact({
            clientId: chance.string(),
            clientSecret: chance.string()
        });

        assert.ok(instance.oauth instanceof OAuth);
        assert.ok(instance.contacts instanceof Contacts);
        //Backwards compatibility
        assert.ok(instance.v3 instanceof Contacts);
        assert.ok(instance.v2 instanceof V2);
    });

    it('should configure oauth', () => {
        const conf = {
            clientId: chance.string(),
            clientSecret: chance.string(),
            scope: chance.string(),
            redirectUri: chance.url()
        };

        const instance = FullContact(conf);
        assert.equal(instance.oauth.clientId, conf.clientId);
        assert.equal(instance.oauth.clientSecret, conf.clientSecret);
        assert.equal(instance.oauth.defaultScope, conf.scope);
        assert.equal(instance.oauth.redirectUri, conf.redirectUri);
    });

    it('should configure apiKey', () => {
        const conf = {
            apiKey: chance.string()
        };

        const instance = FullContact(conf);
        assert.equal(instance.v2.person.apiKey, conf.apiKey);
        assert.equal(instance.v2.emailVerification.apiKey, conf.apiKey);
        assert.equal(instance.v2.location.apiKey, conf.apiKey);
        assert.equal(instance.v2.name.apiKey, conf.apiKey);
        assert.equal(instance.v2.stats.apiKey, conf.apiKey);
        assert.equal(instance.v2.company.apiKey, conf.apiKey);
    });
});