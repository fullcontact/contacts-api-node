const TeamsAPI = require('../../lib/apis/contacts/teams');
const config = require('../../lib/apis/config');
const assert = require('assert');
const chance = require('chance')();
const nock = require('nock');

nock.disableNetConnect();

describe('ContactsAPITeams', () => {
  it('should get', done => {
    const accessToken = chance.string();
    const instance = new TeamsAPI();
    const body = {};

    const scope = nock(config.contactsUrl, {
      req_headers: { Authorization: `Bearer ${accessToken}` }
    })
      .post('/api/v1/teams.get', body)
      .reply(200, {});

    instance
      .get(accessToken, body)
      .then(() => {
        scope.done();
        done();
      })
      .catch(e => assert.fail(e));
  });
});
