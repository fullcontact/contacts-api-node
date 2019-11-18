const Contacts = require('./apis/contacts');
const OAuth = require('./apis/oauth');

/**
 *
 *
 * @class ContactsPlus
 */
class ContactsPlus {
  /**
   * Creates an instance of ContactsPlus.
   * Config: {
   *  clientId,
   *  clientSecret,
   *  redirectUri,
   *  scope,
   *  baseUrl
   * }
   *
   * @param {Object} config
   *
   * @memberOf ContactsPlus
   */
  constructor(config) {
    this.__instances = {
      oauth: new OAuth(config),
      contacts: new Contacts(config)
    };
  }

  /**
   * Gets Contacts APIs
   *
   * @readonly
   *
   * @memberOf ContactsPlus
   */
  get contacts() {
    return this.__instances.contacts;
  }

  /**
   * Gets oauth client
   *
   * @readonly
   *
   * @memberOf ContactsPlus
   */
  get oauth() {
    return this.__instances.oauth;
  }
}

function Instantiate(config) {
  return new ContactsPlus(config);
}

Instantiate.ContactsPlus = ContactsPlus;

module.exports = Instantiate;
