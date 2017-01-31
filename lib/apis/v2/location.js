const API = require('../api');

class LocationAPI extends API.APIKeyBased {
    constructor(apiKey) {
        super(apiKey);
    }

    normalize(opts = {}) {
        return this.request({
            path: '/v2/address/locationNormalizer.json',
            qs: opts,
            json: true
        });
    }

    enrich(opts = {}) {
        return this.request({
            path: '/v2/address/locationEnrichment.json',
            qs: opts,
            json: true
        });
    }
}

module.exports = LocationAPI;