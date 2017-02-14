const V3 = require('../../lib/apis/v3');
const assert = require('assert');
const AccountAPI  = require('../../lib/apis/v3/account');
const ContactsAPI  = require('../../lib/apis/v3/contacts');
const TagsAPI  = require('../../lib/apis/v3/tags');


describe('V3', () => {
    it('should create instances', () => {
        const instance = new V3();
        assert.ok(instance.account instanceof AccountAPI);
        assert.ok(instance.contacts instanceof ContactsAPI);
        assert.ok(instance.tags instanceof TagsAPI);
    });
});