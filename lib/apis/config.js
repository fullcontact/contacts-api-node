/**
 *
 *
 * @class Config
 */
class Config {
  /**
   * Gets the base api url for all ContactsPlus APIs
   *
   * @readonly
   *
   * @memberOf Config
   */
  get url() {
    return 'https://api.fullcontact.com';
  }

  /**
   * Gets the base app url for ContactsPlus
   *
   * @readonly
   *
   * @memberOf Config
   */
  get contactsUrl() {
    return 'https://app.contactsplus.com';
  }
}

module.exports = new Config();
