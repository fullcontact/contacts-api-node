const API = require('../api');

class PersonAPI extends API.APIKeyBased {
    constructor(apiKey) {
        super(apiKey);
    }

    lookup(opts = {}) {
        return this.request({
            path: '/v2/person.json',
            qs: opts,
            json: true
        });
    }
}

module.exports = PersonAPI;