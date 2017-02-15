const API = require('../api');

/**
 * Name APIs (https://www.fullcontact.com/developer/docs/name/)
 * 
 * @class NameAPI
 * @extends {API.APIKeyBased}
 */
class NameAPI extends API.APIKeyBased {
    /**
     * Creates an instance of NameAPI.
     *
     * @param {String} apiKey
     * 
     * @memberOf NameAPI
     */
    constructor(apiKey) {
        super(apiKey);
    }

    /**
     * Normalizes a name.
     *
     * @param {Object} [opts={
     *  q,
     *  casing
     * }]
     * @returns {Promise}
     * 
     * @memberOf NameAPI
     */
    normalize(opts = {}) {
        return this.request({
            path: '/v2/name/normalizer.json',
            qs: opts,
            json: true
        });
    }

    /**
     * Deduces a name
     *
     * @param {Object} [opts={
     *  email,
     *  username,
     *  casing
     * }]
     * @returns {Promise}
     * 
     * @memberOf NameAPI
     */
    deduce(opts = {}) {
        return this.request({
            path: '/v2/name/deducer.json',
            qs: opts,
            json: true
        });
    }

    /**
     * Compares two names to see how similar they are.
     *
     * @param {Object} [opts={
     *  q1,
     *  q2,
     *  casing
     * }]
     * @returns {Promise}
     * 
     * @memberOf NameAPI
     */
    similarity(opts = {}) {
        return this.request({
            path: '/v2/name/similarity.json',
            qs: opts,
            json: true
        });
    }

    /**
     * Gets stats on a name.
     *
     * @param {Object} [opts={
     *  name,
     *  givenName,
     *  familyName,
     *  casing
     * }]
     * @returns {Promise}
     * 
     * @memberOf NameAPI
     */
    stats(opts = {}) {
        return this.request({
            path: '/v2/name/stats.json',
            qs: opts,
            json: true
        });
    }

    /**
     * Parses a name
     * 
     * @param {Object} [opts={
     *  q,
     *  casing
     * }]
     * @returns {Promise}
     * 
     * @memberOf NameAPI
     */
    parser(opts = {}) {
        return this.request({
            path: '/v2/name/parser.json',
            qs: opts,
            json: true
        });
    }
}

module.exports = NameAPI;