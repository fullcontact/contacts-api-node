const API = require('../api');

class NameAPI extends API.APIKeyBased {
    constructor(apiKey) {
        super(apiKey);
    }

    normalize(opts = {}) {
        return this.request({
            path: '/v2/name/normalizer.json',
            qs: opts,
            json: true
        });
    }

    deduce(opts = {}) {
        return this.request({
            path: '/v2/name/deducer.json',
            qs: opts,
            json: true
        });
    }

    similarity(opts = {}) {
        return this.request({
            path: '/v2/name/similarity.json',
            qs: opts,
            json: true
        });
    }

    stats(opts = {}) {
        return this.request({
            path: '/v2/name/stats.json',
            qs: opts,
            json: true
        });
    }

    parser(opts = {}) {
        return this.request({
            path: '/v2/name/parser.json',
            qs: opts,
            json: true
        });
    }
}

module.exports = NameAPI;