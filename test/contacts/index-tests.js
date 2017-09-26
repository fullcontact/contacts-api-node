const ContactsAPI = require('../../lib/apis/contacts');
const assert = require('assert');
const AccountAPI  = require('../../lib/apis/contacts/account');
const ContactAPI  = require('../../lib/apis/contacts/contacts');
const TagsAPI  = require('../../lib/apis/contacts/tags');


describe('ContactsAPI', () => {
    it('should create instances', () => {
        const instance = new ContactsAPI();
        assert.ok(instance.account instanceof AccountAPI);
        assert.ok(instance.contacts instanceof ContactAPI);
        assert.ok(instance.tags instanceof TagsAPI);
    });
});