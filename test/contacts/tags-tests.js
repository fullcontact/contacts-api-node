const TagsAPI = require('../../lib/apis/contacts/tags');
const config = require('../../lib/apis/config');
const assert = require('assert');
const chance = require('chance')();
const nock = require('nock');

nock.disableNetConnect();

describe('ContactsAPITags', () => {
  it('should get', done => {
    const accessToken = chance.string();
    const instance = new TagsAPI();
    const body = {
      tagIds: [chance.string()]
    };

    const scope = nock(config.contactsUrl, {
      req_headers: { Authorization: `Bearer ${accessToken}` }
    })
      .post('/api/v1/tags.get', body)
      .reply(200, {});

    instance
      .get(accessToken, body)
      .then(() => {
        scope.done();
        done();
      })
      .catch(e => assert.fail(e));
  });

  it('should scroll', done => {
    const accessToken = chance.string();
    const instance = new TagsAPI();
    const body = {
      scrollCursor: chance.string()
    };

    const scope = nock(config.contactsUrl, {
      req_headers: { Authorization: `Bearer ${accessToken}` }
    })
      .post('/api/v1/tags.scroll', body)
      .reply(200, {});

    instance
      .scroll(accessToken, body)
      .then(() => {
        scope.done();
        done();
      })
      .catch(e => assert.fail(e));
  });

  it('should create', done => {
    const accessToken = chance.string();
    const instance = new TagsAPI();
    const body = {
      tag: {
        tagData: { name: chance.string() }
      }
    };

    const scope = nock(config.contactsUrl, {
      req_headers: { Authorization: `Bearer ${accessToken}` }
    })
      .post('/api/v1/tags.create', body)
      .reply(200, {});

    instance
      .create(accessToken, body)
      .then(() => {
        scope.done();
        done();
      })
      .catch(e => assert.fail(e));
  });

  it('should update', done => {
    const accessToken = chance.string();
    const instance = new TagsAPI();
    const body = {
      tag: {
        tagId: chance.string(),
        tagData: { name: chance.string() }
      }
    };

    const scope = nock(config.contactsUrl, {
      req_headers: { Authorization: `Bearer ${accessToken}` }
    })
      .post('/api/v1/tags.update', body)
      .reply(200, {});

    instance
      .update(accessToken, body)
      .then(() => {
        scope.done();
        done();
      })
      .catch(e => assert.fail(e));
  });

  it('should delete', done => {
    const accessToken = chance.string();
    const instance = new TagsAPI();
    const body = {
      tagIds: [chance.string()]
    };

    const scope = nock(config.contactsUrl, {
      req_headers: { Authorization: `Bearer ${accessToken}` }
    })
      .post('/api/v1/tags.delete', body)
      .reply(200, {});

    instance
      .del(accessToken, body)
      .then(() => {
        scope.done();
        done();
      })
      .catch(e => assert.fail(e));
  });
});
