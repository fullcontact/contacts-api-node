const ContactsAPI = require('../../lib/apis/v3/contacts');
const config = require('../../lib/apis/config');
const assert = require('assert');
const chance = require('chance')();
const nock = require('nock');

nock.disableNetConnect();

describe('V3-Contacts', () => {
    it('should get', done => {
        const accessToken = chance.string();
        const instance = new ContactsAPI();
        const body = {
            contactIds: [chance.string()]
        };

        const scope = nock(config.url, { req_headers: { Authorization: `Bearer ${accessToken}` }})
                        .post('/v3/contacts.get', body)
                        .reply(200, {});

        instance.get(accessToken, body)
            .then(() => {
                scope.done();
                done();
            })
            .catch(e => assert.fail(e));
    });

    it('should scroll', done => {
        const accessToken = chance.string();
        const instance = new ContactsAPI();
        const body = {
            scrollCursor: chance.string()
        };

        const scope = nock(config.url, { req_headers: { Authorization: `Bearer ${accessToken}` }})
                        .post('/v3/contacts.scroll', body)
                        .reply(200, {});

        instance.scroll(accessToken, body)
            .then(() => {
                scope.done();
                done();
            })
            .catch(e => assert.fail(e));
    });

    it('should create', done => {
        const accessToken = chance.string();
        const instance = new ContactsAPI();
        const body = {
            contact: {
                contactData: {
                    name: {
                        familyName: chance.last(),
                        giveName: chance.first()
                    }
                }
            }
        };

        const scope = nock(config.url, { req_headers: { Authorization: `Bearer ${accessToken}` }})
                        .post('/v3/contacts.create', body)
                        .reply(200, {});

        instance.create(accessToken, body)
            .then(() => {
                scope.done();
                done();
            })
            .catch(e => assert.fail(e));
    });

    it('should update', done => {
        const accessToken = chance.string();
        const instance = new ContactsAPI();
        const body = {
            contact: {
                contactId: chance.string(),
                contactData: {
                    name: {
                        familyName: chance.last(),
                        giveName: chance.first()
                    }
                }
            }
        };

        const scope = nock(config.url, { req_headers: { Authorization: `Bearer ${accessToken}` }})
                        .post('/v3/contacts.update', body)
                        .reply(200, {});

        instance.update(accessToken, body)
            .then(() => {
                scope.done();
                done();
            })
            .catch(e => assert.fail(e));
    });

    it('should delete', done => {
        const accessToken = chance.string();
        const instance = new ContactsAPI();
        const body = {
            contactIds: [chance.string()]
        };

        const scope = nock(config.url, { req_headers: { Authorization: `Bearer ${accessToken}` }})
                        .post('/v3/contacts.delete', body)
                        .reply(200, {});

        instance.del(accessToken, body)
            .then(() => {
                scope.done();
                done();
            })
            .catch(e => assert.fail(e));
    });

    it('should upload photo', done => {
        const accessToken = chance.string();
        const instance = new ContactsAPI();
        const contact = {
            contactId: chance.string()
        };
        const buffer = new Buffer('test');

        const scope = nock(config.url, { req_headers: { Authorization: `Bearer ${accessToken}` }})
                        .post(
                            '/v3/contacts.uploadPhoto',
                            body => {
                                const lines = body.split('\r\n');

                                return lines[1] == 'Content-Disposition: form-data; name="contact.json"' &&
                                       lines[2] == 'Content-Type: application/json' &&
                                       lines[4] == JSON.stringify(contact) &&
                                       lines[6] == 'Content-Disposition: form-data; name="file3"; filename="image.png"' &&
                                       lines[7] == 'Content-Type: image/png' &&
                                       lines[9] == 'test';
                            }
                        )
                        .reply(200, {});

        instance.uploadPhoto(accessToken, contact, buffer)
            .then(() => {
                scope.done();
                done();
            })
            .catch(e => assert.fail(e));
    });
});