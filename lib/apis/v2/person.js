const API = require('../api');

/**
 * Person APIs (https://www.fullcontact.com/developer/docs/person/)
 *
 * @class PersonAPI
 * @extends {API.APIKeyBased}
 */
class PersonAPI extends API.APIKeyBased {
    /**
     * Creates an instance of PersonAPI.
     *
     * @param {String} apiKey
     *
     * @memberOf PersonAPI
     */
    constructor(apiKey) {
        super(apiKey);
    }

    /**
     * Looks up a person by email, phone or twitter.
     *
     * @param {Object} [opts={
     *  email,
     *  emailMD5,
     *  emailSHA256,
     *  prettyPrint,
     *  webhookUrl
     *  webhookId,
     *  webhookBody,
     *  macromeasures
     * }]
     * @returns {Promise}
     * 
     * @memberOf PersonAPI
     */
    lookup(opts = {}) {
        return this.request({
            path: '/v2/person.json',
            qs: opts,
            json: true
        });
    }
}

module.exports = PersonAPI;