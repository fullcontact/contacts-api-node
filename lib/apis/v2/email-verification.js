const API = require('../api');

class EmailVerificationAPI extends API.APIKeyBased {
    constructor(apiKey) {
        super(apiKey);
    }

    single(opts = {}) {
        return this.request({
            path: '/v2/verification/email',
            qs: opts,
            json: true
        });
    }

    batch(opts = {}) {
        return this.request({
            method: 'POST',
            path: '/v2/verification/emails',
            body: opts,
            json: true
        });
    }

    batchStatus(id) {
        return this.request({
            path: `/v2/verification/emails/${id}`,
            json: true
        });
    }
}

module.exports = EmailVerificationAPI;