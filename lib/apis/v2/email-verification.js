const API = require('../api');

/**
 * Email Verification APIs (https://www.fullcontact.com/developer/docs/email-verification/)
 * 
 * @class EmailVerificationAPI
 * @extends {API.APIKeyBased}
 */
class EmailVerificationAPI extends API.APIKeyBased {
    /**
     * Creates an instance of EmailVerificationAPI.
     * 
     * @param {string} apiKey
     * 
     * @memberOf EmailVerificationAPI
     */
    constructor(apiKey) {
        super(apiKey);
    }

    /**
     * Verifies a single email
     *
     * @param {object} [opts={
     *  email
     * }]
     * @returns
     * 
     * @memberOf EmailVerificationAPI
     */
    single(opts = {}) {
        return this.request({
            path: '/v2/verification/email',
            qs: opts,
            json: true
        });
    }

    /**
     * Verifies multiple emails
     * 
     * @param {object} [opts={
     *  emails,
     *  webhookUrl
     * }]
     * @returns
     * 
     * @memberOf EmailVerificationAPI
     */
    batch(opts = {}) {
        return this.request({
            method: 'POST',
            path: '/v2/verification/emails',
            body: opts,
            json: true
        });
    }

    /**
     * Gets the status on a batch of emails.
     *
     * @param {string} id
     * @returns
     * 
     * @memberOf EmailVerificationAPI
     */
    batchStatus(id) {
        return this.request({
            path: `/v2/verification/emails/${id}`,
            json: true
        });
    }
}

module.exports = EmailVerificationAPI;