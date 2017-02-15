const API = require('../api');

/**
 * Tags APIs
 * 
 * @class TagsAPI
 * @extends {API.OAuthBased}
 */
class TagsAPI extends API.OAuthBased {
    /**
     * Creates an instance of TagsAPI.
     * 
     * 
     * @memberOf TagsAPI
     */
    constructor() {
        super();
    }

    /**
     * Gets tags (https://api.fullcontact.com/v3/docs/methods/tags.get)
     * REQUIRED SCOPE: tags.read
     *
     * @param {String} accessToken
     * @param {Object} body
     * @returns {Promise}
     * 
     * @memberOf TagsAPI
     */
    get(accessToken, body) {
        return this.request(
            accessToken,
            {
                method: 'POST',
                path: '/v3/tags.get',
                body,
                json: true
            }
        );
    }

    /**
     * Scrolls a list of tags (https://api.fullcontact.com/v3/docs/methods/tags.scroll)
     * REQUIRED SCOPE: tags.read
     *
     * @param {String} accessToken
     * @param {Object} body
     * @returns {Promise}
     * 
     * @memberOf TagsAPI
     */
    scroll(accessToken, body) {
        return this.request(
            accessToken,
            {
                method: 'POST',
                path: '/v3/tags.scroll',
                body,
                json: true
            }
        );
    }

    /**
     * Creates a tag (https://api.fullcontact.com/v3/docs/methods/tags.create)
     * REQUIRED SCOPE: tags.write
     *
     * @param {String} accessToken
     * @param {Object} body
     * @returns {Promise}
     * 
     * @memberOf TagsAPI
     */
    create(accessToken, body) {
        return this.request(
            accessToken,
            {
                method: 'POST',
                path: '/v3/tags.create',
                body,
                json: true
            }
        );
    }

    /**
     * Updates a tag(https://api.fullcontact.com/v3/docs/methods/tags.update)
     * REQUIRED SCOPE: tags.write
     *
     * @param {String} accessToken
     * @param {Object} body
     * @returns {Promise}
     * 
     * @memberOf TagsAPI
     */
    update(accessToken, body) {
        return this.request(
            accessToken,
            {
                method: 'POST',
                path: '/v3/tags.update',
                body,
                json: true
            }
        );
    }

    /**
     * Deletes a tag (https://api.fullcontact.com/v3/docs/methods/tags.delete)
     * REQUIRED SCOPE: tags.write
     *
     * @param {String} accessToken
     * @param {Object} body
     * @returns {Promise}
     *
     * @memberOf TagsAPI
     */
    del(accessToken, body) {
        return this.request(
            accessToken,
            {
                method: 'POST',
                path: '/v3/tags.delete',
                body,
                json: true
            }
        );
    }
}

module.exports = TagsAPI;