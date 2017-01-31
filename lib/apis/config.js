/**
 * 
 * 
 * @class Config
 */
class Config {
    /**
     * Gets the base api url for all FullContact APIs
     * 
     * @readonly
     * 
     * @memberOf Config
     */
    get url () {
        return 'https://api.fullcontact.com';
    }
}

module.exports = new Config();