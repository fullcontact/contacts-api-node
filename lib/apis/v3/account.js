const API = require('../api');

/**
 * Account APIs (https://api.fullcontact.com/v3/docs/methods/account.get)
 * 
 * @class AccountAPI
 * @extends {API.OAuthBased}
 */
class AccountAPI extends API.OAuthBased {
    /**
     * Creates an instance of AccountAPI.
     * 
     * 
     * @memberOf AccountAPI
     */
    constructor() {
        super();
    }

    /**
     * Gets account information for the given accessToken.
     * REQUIRED SCOPE: account.read
     *
     * @param {String} accessToken
     * @returns {Promise}
     * 
     * @memberOf AccountAPI
     */
    get(accessToken) {
        return this.request(
            accessToken,
            {
                method: 'POST',
                path: '/v3/account.get',
                body: {},
                json: true
            }
        );
    }
}

module.exports = AccountAPI;