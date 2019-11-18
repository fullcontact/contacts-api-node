const querystring = require('querystring');
const request = require('request-promise');
const apiConfig = require('./config');
const moment = require('moment');
const _ = require('lodash');

/**
 * ContactsPlus OAuth
 *
 * @class OAuth
 */
class OAuth {
  /**
   * Creates an instance of OAuth.
   *
   * @param {Object} config
   *
   * @memberOf OAuth
   */
  constructor(config) {
    this.urls = {
      authorize: `${apiConfig.contactsUrl}/oauth/authorize`,
      accessToken: `${apiConfig.url}/api/v1/oauth.exchangeAuthCode`,
      refreshToken: `${apiConfig.url}/api/v1/oauth.refreshToken`
    };

    this.clientId = config.clientId;
    this.clientSecret = config.clientSecret;
    this.defaultScope = config.scope;
    this.redirectUri = config.redirectUri || config.redirectUrl;
  }

  /**
   * Gets the Authorization URL.
   *
   * @param {String} scope
   * @param {Object} queryString
   * @returns {String}
   *
   * @memberOf OAuth
   */
  getAuthorizationUrl(scope = this.defaultScope, queryString = {}) {
    const qs = querystring.stringify(
      _.extend(
        {
          client_id: this.clientId,
          scope,
          redirect_uri: this.redirectUri
        },
        queryString
      )
    );

    return `${this.urls.authorize}?${qs}`;
  }

  /**
   * Exchanges an auth code for a access_token & refresh_token.
   *
   * @param {String} code
   * @param {String} [redirectUri=this.redirectUri]
   * @returns {Promise}
   *
   * @memberOf OAuth
   */
  exchangeAuthCode(code, redirectUri = this.redirectUri) {
    return request({
      url: this.urls.accessToken,
      method: 'POST',
      form: {
        client_id: this.clientId,
        client_secret: this.clientSecret,
        redirect_uri: redirectUri,
        code
      },
      json: true
    });
  }

  /**
   * Gets a new access_token using a refresh_token.
   *
   * @param {String} refresh_token
   * @returns {Promise}
   *
   * @memberOf OAuth
   */
  exchangeRefreshToken(refresh_token) {
    return request({
      url: this.urls.refreshToken,
      method: 'POST',
      form: {
        client_id: this.clientId,
        client_secret: this.clientSecret,
        refresh_token
      },
      json: true
    });
  }

  /**
   *
   *
   * @param {Object} auth
   * @returns {Boolean}
   *
   * @memberOf OAuth
   */
  isExpired(auth) {
    return (
      !auth || moment(auth.access_token_expiration_date).isBefore(Date.now())
    );
  }
}

module.exports = OAuth;
