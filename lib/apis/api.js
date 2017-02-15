const request = require('request-promise');
const config = require('./config');

/**
 * Base Class for all API Resources.
 * 
 * @class API
 */
class API {
    /**
     * Gets the base URL from the config.
     * 
     * @readonly
     * 
     * @memberOf API
     */
    get apiUrl() {
        return config.url;
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
    authorize(auth, headers) { throw 'Not Implemented' }

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
        return this.authorize(auth, opts.headers)
                   .then(headers =>
                        request({
                            method: opts.method || 'GET',
                            url: `${this.apiUrl}${opts.path}`,
                            qs: opts.qs,
                            body: opts.body,
                            headers,
                            form: opts.form,
                            formData: opts.formData,
                            json: opts.json
                        })
                   );
    }
}

/**
 * Base class for API Key authenticated resources.
 *
 * @class APIKeyBased
 * @extends {API}
 */
class APIKeyBased extends API {
    /**
     * Creates an instance of APIKeyBased.
     * 
     * @param {String} apiKey
     * 
     * @memberOf APIKeyBased
     */
    constructor(apiKey) {
        super();
        this.apiKey = apiKey;
    }

    /**
     * Sets the X-FullContact-ApiKey header with the specified key.
     *
     * @param {String} apiKey
     * @param {Object} [headers={}]
     * @returns {Promise}
     *
     * @memberOf APIKeyBased
     */
    authorize(apiKey, headers = {}) {
        headers['X-FullContact-ApiKey'] = apiKey;
        return Promise.resolve(headers);
    }

    /**
     * Wraps the base class' request method and always passes in
     * the apiKey set during construction.
     *
     * @param {Object} opts
     * @returns {Promise}
     *
     * @memberOf APIKeyBased
     */
    request(opts) {
        return super.request(this.apiKey, opts);
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
    constructor() {
        super();
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
    APIKeyBased,
    OAuthBased
};