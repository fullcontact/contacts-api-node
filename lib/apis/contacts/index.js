const AccountAPI = require('./account');
const ContactsAPI = require('./contacts');
const TagsAPI = require('./tags');
const WebhooksAPI = require('./webhooks');
const TeamsAPI = require('./teams');

/**
 * V3 APIs
 *
 * @class V3
 */
class V3 {
    /**
     * Creates an instance of V3.
     *
     * @memberOf V3
     */
    constructor() {
        this.__instances = {
            account: new AccountAPI(),
            contacts: new ContactsAPI(),
            tags: new TagsAPI(),
            webhooks: new WebhooksAPI(),
            teams: new TeamsAPI()
        };
    }

    /**
     * Gets Account APIs
     * 
     * @readonly
     * 
     * @memberOf V3
     */
    get account() {
        return this.__instances.account;
    }

    /**
     * Gets Contacts APIs
     *
     * @readonly
     * 
     * @memberOf V3
     */
    get contacts() {
        return this.__instances.contacts;
    }

    /**
     * Gets Tags APIs
     * 
     * @readonly
     * 
     * @memberOf V3
     */
    get tags() {
        return this.__instances.tags;
    }

    /**
     * Gets Webhooks APIs
     * 
     * @readonly
     * 
     * @memberOf V3
     */
    get webhooks() {
        return this.__instances.webhooks;
    }

    /**
     * Gets Teams APIs
     * 
     * @readonly
     * 
     * @memberOf V3
     */
    get teams() {
        return this.__instances.teams;
    }
}

module.exports = V3;