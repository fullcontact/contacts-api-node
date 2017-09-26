const API = require('../api');

/**
 * Webhooks APIs
 * 
 * @class WebhooksAPI
 * @extends {API.OAuthBased}
 */
class WebhooksAPI extends API.OAuthBased {
    /**
     * Creates an instance of WebhooksAPI.
     * 
     * 
     * @memberOf WebhooksAPI
     */
    constructor() {
        super();
    }

    /**
     * Creates a webhook (https://api.fullcontact.com/api/v1/docs/methods/webhooks.create
     * REQUIRED SCOPE: webhooks.write
     *
     * @param {String} accessToken
     * @param {Object} body
     * @returns {Promise}
     * 
     * @memberOf WebhooksAPI
     */
    create(accessToken, body) {
        return this.request(
            accessToken,
            {
                method: 'POST',
                path: '/api/v1/webhooks.create',
                body,
                json: true
            }
        );
    }

    /**
     * Gets a list of triggers for a webhook (https://api.fullcontact.com/api/v1/docs/methods/webhooks.getTriggers)
     * REQUIRED SCOPE: webhooks.read
     *
     * @param {String} accessToken
     * @param {Object} body
     * @returns {Promise}
     * 
     * @memberOf WebhooksAPI
     */
    getTriggers(accessToken, body) {
        return this.request(
            accessToken,
            {
                method: 'POST',
                path: '/api/v1/webhooks.getTriggers',
                body,
                json: true
            }
        );
    }

    /**
     * Gets a webhook (https://api.fullcontact.com/api/v1/docs/methods/webhooks.get)
     * REQUIRED SCOPE: webhooks.read
     *
     * @param {String} accessToken
     * @param {Object} body
     * @returns {Promise}
     * 
     * @memberOf WebhooksAPI
     */
    get(accessToken, body) {
        return this.request(
            accessToken,
            {
                method: 'POST',
                path: '/api/v1/webhooks.get',
                body,
                json: true
            }
        );
    }

    /**
     * Searches webhooks(https://api.fullcontact.com/api/v1/docs/methods/webhooks.search)
     * REQUIRED SCOPE: webhooks.read
     *
     * @param {String} accessToken
     * @param {Object} body
     * @returns {Promise}
     * 
     * @memberOf WebhooksAPI
     */
    search(accessToken, body) {
        return this.request(
            accessToken,
            {
                method: 'POST',
                path: '/api/v1/webhooks.search',
                body,
                json: true
            }
        );
    }

    /**
     * Gets batches for a webhook (https://api.fullcontact.com/api/v1/docs/methods/webhooks.getBatches)
     * REQUIRED SCOPE: webhooks.read
     *
     * @param {String} accessToken
     * @param {Object} body
     * @returns {Promise}
     *
     * @memberOf WebhooksAPI
     */
    getBatches(accessToken, body) {
        return this.request(
            accessToken,
            {
                method: 'POST',
                path: '/api/v1/webhooks.getBatches',
                body,
                json: true
            }
        );
    }

    /**
     * Deletes a webhook (https://api.fullcontact.com/api/v1/docs/methods/webhooks.delete)
     * REQUIRED SCOPE: webhooks.write
     *
     * @param {String} accessToken
     * @param {Object} body
     * @returns {Promise}
     *
     * @memberOf WebhooksAPI
     */
    del(accessToken, body) {
        return this.request(
            accessToken,
            {
                method: 'POST',
                path: '/api/v1/webhooks.delete',
                body,
                json: true
            }
        );
    }
}

module.exports = WebhooksAPI;