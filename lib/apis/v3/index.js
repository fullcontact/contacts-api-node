const AccountAPI = require('./account');
const ContactsAPI = require('./contacts');
const TagsAPI = require('./tags');

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
            tags: new TagsAPI()
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
}

module.exports = V3;