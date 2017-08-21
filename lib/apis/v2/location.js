const API = require('../api');

/**
 * Location APIs (https://www.fullcontact.com/developer/docs/location/)
 * 
 * @class LocationAPI
 * @extends {API.APIKeyBased}
 */
class LocationAPI extends API.APIKeyBased {
    /**
     * Creates an instance of LocationAPI.
     * 
     * @param {Object} config
     * 
     * @memberOf LocationAPI
     */
    constructor(config) {
        super(config);
    }

    /**
     * Normalizes a location.
     * 
     * @param {Object} [opts={
     *  place,
     *  includeZeroPopulation,
     *  casing
     * }]
     * @returns {Promise}
     *
     * @memberOf LocationAPI
     */
    normalize(opts = {}) {
        return this.request({
            path: '/v2/address/locationNormalizer.json',
            qs: opts,
            json: true
        });
    }

    /**
     * Enriches a location.
     *
     * @param {Object} [opts={
     *  place,
     *  includeZeroPopulation,
     *  casing 
     * }]
     * @returns {Promise}
     * 
     * @memberOf LocationAPI
     */
    enrich(opts = {}) {
        return this.request({
            path: '/v2/address/locationEnrichment.json',
            qs: opts,
            json: true
        });
    }
}

module.exports = LocationAPI;