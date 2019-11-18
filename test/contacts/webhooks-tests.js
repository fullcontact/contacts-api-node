const WebhooksAPI = require('../../lib/apis/contacts/webhooks');
const config = require('../../lib/apis/config');
const assert = require('assert');
const chance = require('chance')();
const nock = require('nock');

nock.disableNetConnect();

describe('ContactsAPIWebhooks', () => {
  it('should get', done => {
    const accessToken = chance.string();
    const instance = new WebhooksAPI();
    const body = {
      webhookIds: [chance.string()]
    };

    const scope = nock(config.contactsUrl, {
      req_headers: { Authorization: `Bearer ${accessToken}` }
    })
      .post('/api/v1/webhooks.get', body)
      .reply(200, {});

    instance
      .get(accessToken, body)
      .then(() => {
        scope.done();
        done();
      })
      .catch(e => assert.fail(e));
  });

  it('should search', done => {
    const accessToken = chance.string();
    const instance = new WebhooksAPI();
    const body = {
      url: chance.url()
    };

    const scope = nock(config.contactsUrl, {
      req_headers: { Authorization: `Bearer ${accessToken}` }
    })
      .post('/api/v1/webhooks.search', body)
      .reply(200, {});

    instance
      .search(accessToken, body)
      .then(() => {
        scope.done();
        done();
      })
      .catch(e => assert.fail(e));
  });

  it('should create', done => {
    const accessToken = chance.string();
    const instance = new WebhooksAPI();
    const body = {
      triggerIds: ['contact.added', 'contact.updated'],
      url: chance.url()
    };

    const scope = nock(config.contactsUrl, {
      req_headers: { Authorization: `Bearer ${accessToken}` }
    })
      .post('/api/v1/webhooks.create', body)
      .reply(200, {});

    instance
      .create(accessToken, body)
      .then(() => {
        scope.done();
        done();
      })
      .catch(e => assert.fail(e));
  });

  it('should getTriggers', done => {
    const accessToken = chance.string();
    const instance = new WebhooksAPI();
    const body = {};

    const scope = nock(config.contactsUrl, {
      req_headers: { Authorization: `Bearer ${accessToken}` }
    })
      .post('/api/v1/webhooks.getTriggers', body)
      .reply(200, {});

    instance
      .getTriggers(accessToken, body)
      .then(() => {
        scope.done();
        done();
      })
      .catch(e => assert.fail(e));
  });

  it('should delete', done => {
    const accessToken = chance.string();
    const instance = new WebhooksAPI();
    const body = {
      webhookId: chance.string()
    };

    const scope = nock(config.contactsUrl, {
      req_headers: { Authorization: `Bearer ${accessToken}` }
    })
      .post('/api/v1/webhooks.delete', body)
      .reply(200, {});

    instance
      .del(accessToken, body)
      .then(() => {
        scope.done();
        done();
      })
      .catch(e => assert.fail(e));
  });

  it('should getBatches', done => {
    const accessToken = chance.string();
    const instance = new WebhooksAPI();
    const body = {
      webhookId: chance.string(),
      batchId: chance.string()
    };

    const scope = nock(config.contactsUrl, {
      req_headers: { Authorization: `Bearer ${accessToken}` }
    })
      .post('/api/v1/webhooks.getBatches', body)
      .reply(200, {});

    instance
      .getBatches(accessToken, body)
      .then(() => {
        scope.done();
        done();
      })
      .catch(e => assert.fail(e));
  });
});
