const V2 = require('./apis/v2');
const V3 = require('./apis/v3');
const OAuth = require('./apis/oauth');

/**
 * 
 * 
 * @class FullContact
 */
class FullContact {
    /**
     * Creates an instance of FullContact.
     * Config: {
     *  apiKey,
     *  clientId,
     *  clientSecret,
     *  redirectUri,
     *  scope,
     *  baseUrl
     * }
     *
     * @param {Object} config
     * 
     * @memberOf FullContact
     */
    constructor(config) {
        this.__instances = {
            oauth: new OAuth(config),
            v2: new V2(config),
            v3: new V3(config)
        };
    }

    /**
     * Gets v2 APIs
     *
     * @readonly
     *
     * @memberOf FullContact
     */
    get v2() {
        return this.__instances.v2;
    }

    /**
     * Gets v3 APIs
     * 
     * @readonly
     * 
     * @memberOf FullContact
     */
    get v3() {
        return this.__instances.v3;
    }

    /**
     * Gets oauth client
     * 
     * @readonly
     * 
     * @memberOf FullContact
     */
    get oauth() {
        return this.__instances.oauth;
    }
}

function Instantiate(config) {
    return new FullContact(config);
}

Instantiate.FullContact = FullContact;

module.exports = Instantiate;