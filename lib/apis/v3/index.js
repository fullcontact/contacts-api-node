const AccountAPI = require('./account');
const ContactsAPI = require('./contacts');
const TagsAPI = require('./tags');

class V3 {
    constructor(apiKey) {
        this.__instances = {
            account: new AccountAPI(),
            contacts: new ContactsAPI(),
            tags: new TagsAPI()
        };
    }

    get account() {
        return this.__instances.account;
    }

    get contacts() {
        return this.__instances.contacts;
    }

    get tags() {
        return this.__instances.tags;
    }
}

module.exports = V3;