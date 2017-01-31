const API = require('../api');

class StatsAPI extends API.APIKeyBased {
    constructor(apiKey) {
        super(apiKey);
    }

    get(opts = {}) {
        return this.request({
            path: '/v2/stats.json',
            qs: opts,
            json: true
        });
    }
}

module.exports = StatsAPI;