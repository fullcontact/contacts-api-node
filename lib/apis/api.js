const request = require('request-promise');
const config = require('./config');
const _ = require('lodash');

/**
 * Base Class for all API Resources.
 *
 * @class API
 */
class API {
  constructor(c = {}) {
    this.__baseUrl = c.baseUrl || config.url;
    this.__ua = c.userAgent || 'fullcontact-node';
  }

  /**
   * Gets the base URL from the config.
   *
   * @readonly
   *
   * @memberOf API
   */
  get apiUrl() {
    return this.__baseUrl;
  }

  /**
   * Gets the base URL from the config.
   *
   * @readonly
   *
   * @memberOf API
   */
  get userAgent() {
    return this.__ua;
  }

  /**
   * Handles setting Authorization for the request.
   * Must be implemented by child classes.
   *
   * @param {String} auth
   * @param {Object} headers
   *
   * @memberOf API
   */
  authorize(auth, headers) {
    throw 'Not Implemented';
  }

  /**
   * Performs the HTTP Request to the specified resource.
   *
   * @param {String} auth
   * @param {Object} [opts={}]
   * @returns {Promise}
   *
   * @memberOf API
   */
  request(auth, opts = {}) {
    return this.authorize(auth, opts.headers).then(headers =>
      request({
        method: opts.method || 'GET',
        url: `${this.apiUrl}${opts.path}`,
        qs: opts.qs,
        body: opts.body,
        headers: _.extend(
          {
            'User-Agent': this.userAgent
          },
          headers
        ),
        form: opts.form,
        formData: opts.formData,
        json: opts.json
      })
    );
  }
}

/**
 * Base class for OAuth authenticated resources.
 *
 * @class OAuthBased
 * @extends {API}
 */
class OAuthBased extends API {
  /**
   * Creates an instance of OAuthBased.
   *
   *
   * @memberOf OAuthBased
   */
  constructor(c) {
    super(c);
    this.__baseUrl = (c && c.baseUrl) || config.contactsUrl;
  }

  /**
   * Sets the Authorization header with the specified access_token.
   *
   * @param {string} accessToken
   * @param {object} [headers={}]
   * @returns {Promise}
   *
   * @memberOf OAuthBased
   */
  authorize(accessToken, headers = {}) {
    headers.Authorization = `Bearer ${accessToken}`;
    return Promise.resolve(headers);
  }
}

module.exports = {
  OAuthBased
};
