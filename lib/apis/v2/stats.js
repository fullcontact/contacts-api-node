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
     * @param {string} apiKey
     * 
     * @memberOf StatsAPI
     */
    constructor(apiKey) {
        super(apiKey);
    }

    /**
     * Gets APIKey Stats
     *
     * @param {object} [opts={
     *  period
     * }]
     * @returns
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