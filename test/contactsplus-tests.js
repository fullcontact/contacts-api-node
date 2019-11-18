const assert = require('assert');
const chance = require('chance')();
const ContactsPlus = require('../lib/contactsplus');
const OAuth = require('../lib/apis/oauth');
const Contacts = require('../lib/apis/contacts');

describe('ContactsPlus', () => {
  it('should create instances', () => {
    const instance = ContactsPlus({
      clientId: chance.string(),
      clientSecret: chance.string()
    });

    assert.ok(instance.oauth instanceof OAuth);
    assert.ok(instance.contacts instanceof Contacts);
  });

  it('should configure oauth', () => {
    const conf = {
      clientId: chance.string(),
      clientSecret: chance.string(),
      scope: chance.string(),
      redirectUri: chance.url()
    };

    const instance = ContactsPlus(conf);
    assert.equal(instance.oauth.clientId, conf.clientId);
    assert.equal(instance.oauth.clientSecret, conf.clientSecret);
    assert.equal(instance.oauth.defaultScope, conf.scope);
    assert.equal(instance.oauth.redirectUri, conf.redirectUri);
  });
});
