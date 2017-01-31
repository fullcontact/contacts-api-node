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
     * @param {string} apiKey
     * 
     * @memberOf NameAPI
     */
    constructor(apiKey) {
        super(apiKey);
    }

    /**
     * Normalizes a name.
     *
     * @param {object} [opts={
     *  q,
     *  casing
     * }]
     * @returns
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
     * @param {object} [opts={
     *  email,
     *  username,
     *  casing
     * }]
     * @returns
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
     * @param {object} [opts={
     *  q1,
     *  q2,
     *  casing
     * }]
     * @returns
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
     * @param {object} [opts={
     *  name,
     *  givenName,
     *  familyName,
     *  casing
     * }]
     * @returns
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
     * @param {object} [opts={
     *  q,
     *  casing
     * }]
     * @returns
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