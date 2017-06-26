const API = require('../api');

/**
 * Teams APIs
 * 
 * @class TeamsAPI
 * @extends {API.OAuthBased}
 */
class TeamsAPI extends API.OAuthBased {
    /**
     * Creates an instance of TeamsAPI.
     * 
     * 
     * @memberOf TeamsAPI
     */
    constructor() {
        super();
    }

    /**
     * Gets a list of teams for user (https://api.fullcontact.com/v3/docs/methods/teams.get)
     * REQUIRED SCOPE: teams.read
     *
     * @param {String} accessToken
     * @param {Object} body
     * @returns {Promise}
     * 
     * @memberOf TeamsAPI
     */
    get(accessToken, body) {
        return this.request(
            accessToken,
            {
                method: 'POST',
                path: '/v3/teams.get',
                body,
                json: true
            }
        );
    }
}

module.exports = TeamsAPI;