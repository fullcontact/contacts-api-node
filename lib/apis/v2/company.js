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
     * @param {string} apiKey
     * 
     * @memberOf CompanyAPI
     */
    constructor(apiKey) {
        super(apiKey);
    }

    /**
     * lookup a company by domain.
     *
     * @param {object} [opts={
     *  domain,
     *  keyPeople,
     *  prettyPrint,
     *  webhookUrl,
     *  webhookId,
     *  webhookBody
     * }]
     * @returns
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
     * @param {object} [opts={
     *  companyName,
     *  sort,
     *  location
     *  locality,
     *  region,
     *  country,
     *  prettyPrint
     * }]
     * @returns
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