const API = require('../api');

class CompanyAPI extends API.APIKeyBased {
    constructor(apiKey) {
        super(apiKey);
    }

    lookup(opts = {}) {
        return this.request({
            path: '/v2/company/lookup.json',
            qs: opts,
            json: true
        });
    }

    search(opts = {}) {
        return this.request({
            path: '/v2/company/search.json',
            qs: opts,
            json: true
        });
    }
}

module.exports = CompanyAPI;