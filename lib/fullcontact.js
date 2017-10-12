const V2 = require('./apis/v2');
const Contacts = require('./apis/contacts');
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
            contacts: new Contacts(config)
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
     * Gets v2 APIs
     *
     * @readonly
     * @deprecated Will be removed in next version
     *
     * @memberOf FullContact
     */
    get v3() {
        return this.__instances.contacts;
    }

    /**
     * Gets Contacts APIs
     * 
     * @readonly
     * 
     * @memberOf FullContact
     */
    get contacts() {
        return this.__instances.contacts;
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