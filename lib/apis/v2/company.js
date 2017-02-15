const API = require('../api');

/**
 * Company APIs (https://www.fullcontact.com/developer/docs/company)
 * 
 * @class CompanyAPI
 * @extends {API.APIKeyBased}
 */
class CompanyAPI extends API.APIKeyBased {
    /**
     * Creates an instance of CompanyAPI.
     * 
     * @param {String} apiKey
     * 
     * @memberOf CompanyAPI
     */
    constructor(apiKey) {
        super(apiKey);
    }

    /**
     * lookup a company by domain.
     *
     * @param {Object} [opts={
     *  domain,
     *  keyPeople,
     *  prettyPrint,
     *  webhookUrl,
     *  webhookId,
     *  webhookBody
     * }]
     * @returns {Promise}
     * 
     * @memberOf CompanyAPI
     */
    lookup(opts = {}) {
        return this.request({
            path: '/v2/company/lookup.json',
            qs: opts,
            json: true
        });
    }

    /**
     * Search for companies by name
     * 
     * @param {Object} [opts={
     *  companyName,
     *  sort,
     *  location
     *  locality,
     *  region,
     *  country,
     *  prettyPrint
     * }]
     * @returns {Promise}
     * 
     * @memberOf CompanyAPI
     */
    search(opts = {}) {
        return this.request({
            path: '/v2/company/search.json',
            qs: opts,
            json: true
        });
    }
}

module.exports = CompanyAPI;