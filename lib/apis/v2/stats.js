const API = require('../api');

/**
 * Stats APIs (https://www.fullcontact.com/developer/docs/account-stats/)
 * 
 * @class StatsAPI
 * @extends {API.APIKeyBased}
 */
class StatsAPI extends API.APIKeyBased {
    /**
     * Creates an instance of StatsAPI.
     * 
     * @param {Object} config
     * 
     * @memberOf StatsAPI
     */
    constructor(config) {
        super(config);
    }

    /**
     * Gets APIKey Stats
     *
     * @param {Object} [opts={
     *  period
     * }]
     * @returns {Promise}
     * 
     * @memberOf StatsAPI
     */
    get(opts = {}) {
        return this.request({
            path: '/v2/stats.json',
            qs: opts,
            json: true
        });
    }
}

module.exports = StatsAPI;