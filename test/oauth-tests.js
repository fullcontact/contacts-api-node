const OAuth = require('../lib/apis/oauth');
const assert = require('assert');
const chance = require('chance')();
const config = require('../lib/apis/config');
const nock = require('nock');

nock.disableNetConnect();

const withTestOAuthClient = fn =>
  fn(
    new OAuth({
      clientId: chance.string(),
      clientSecret: chance.string(),
      scope: chance.string(),
      redirectUri: chance.url()
    })
  );

describe('OAuth', () => {
  it('should get set redirectUrl from config', () => {
    const redirectUrl = chance.url();

    const instance = new OAuth({
      redirectUrl
    });

    assert.equal(redirectUrl, instance.redirectUri);
  });

  it('should get authorization url', () => {
    const clientId = chance.string();
    const clientSecret = chance.string();
    const scope = chance.string();
    const redirectUri = chance.url();

    const instance = new OAuth({
      clientId,
      clientSecret,
      scope,
      redirectUri
    });

    const result = instance.getAuthorizationUrl();
    assert.equal(
      result,
      `${config.contactsUrl}/oauth/authorize?client_id=${encodeURIComponent(
        clientId
      )}&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(
        redirectUri
      )}`
    );
  });

  it('should get authorization url with queryString options', () => {
    const clientId = chance.string();
    const clientSecret = chance.string();
    const scope = chance.string();
    const redirectUri = chance.url();
    const state = chance.string();

    const instance = new OAuth({
      clientId,
      clientSecret,
      scope,
      redirectUri
    });

    const result = instance.getAuthorizationUrl(scope, { state });
    assert.equal(
      result,
      `${config.contactsUrl}/oauth/authorize?client_id=${encodeURIComponent(
        clientId
      )}&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(
        redirectUri
      )}&state=${encodeURIComponent(state)}`
    );
  });

  it('should get authorization url with non-default scope', () => {
    const clientId = chance.string();
    const clientSecret = chance.string();
    const defaultScope = chance.string();
    const scope = chance.string();
    const redirectUri = chance.url();

    const instance = new OAuth({
      clientId,
      clientSecret,
      scope: defaultScope,
      redirectUri
    });

    const result = instance.getAuthorizationUrl(scope);
    assert.equal(
      result,
      `${config.contactsUrl}/oauth/authorize?client_id=${encodeURIComponent(
        clientId
      )}&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(
        redirectUri
      )}`
    );
  });

  it('should exchange auth code', done => {
    withTestOAuthClient(client => {
      const code = chance.string();
      const scope = nock(config.url)
        .post('/api/v1/oauth.exchangeAuthCode', {
          client_id: client.clientId,
          client_secret: client.clientSecret,
          redirect_uri: client.redirectUri,
          code
        })
        .reply(200, {});
      client
        .exchangeAuthCode(code)
        .then(() => {
          scope.done();
          done();
        })
        .catch(e => assert.fail(e));
    });
  });

  it('should exchange auth code with non-default redirectUri', done => {
    withTestOAuthClient(client => {
      const redirectUri = chance.url();
      const code = chance.string();
      const scope = nock(config.url)
        .post('/api/v1/oauth.exchangeAuthCode', {
          client_id: client.clientId,
          client_secret: client.clientSecret,
          redirect_uri: redirectUri,
          code
        })
        .reply(200, {});
      client
        .exchangeAuthCode(code, redirectUri)
        .then(() => {
          scope.done();
          done();
        })
        .catch(e => assert.fail(e));
    });
  });

  it('should exchange refresh token', done => {
    withTestOAuthClient(client => {
      const refresh_token = chance.string();
      const scope = nock(config.url)
        .post('/api/v1/oauth.refreshToken', {
          client_id: client.clientId,
          client_secret: client.clientSecret,
          refresh_token
        })
        .reply(200, {});
      client
        .exchangeRefreshToken(refresh_token)
        .then(() => {
          scope.done();
          done();
        })
        .catch(e => assert.fail(e));
    });
  });

  it('auth should be expired', () => {
    withTestOAuthClient(client => {
      const auth = {
        access_token_expiration_date: '2017-02-14T21:23:54.295Z'
      };

      assert.strictEqual(client.isExpired(auth), true);
    });
  });

  it('auth should not be expired', () => {
    withTestOAuthClient(client => {
      const auth = {
        access_token_expiration_date: '2100-02-14T21:23:54.295Z'
      };

      assert.strictEqual(client.isExpired(auth), false);
    });
  });
});
