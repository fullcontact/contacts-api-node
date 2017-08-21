const PersonAPI = require('./person');
const CompanyAPI = require('./company');
const NameAPI = require('./name');
const LocationAPI = require('./location');
const StatsAPI = require('./stats');
const EmailVerificationAPI = require('./email-verification');

/**
 * V2 APIs
 * 
 * @class V2
 */
class V2 {
    /**
     * Creates an instance of V2.
     * 
     * @param {Object} config
     * 
     * @memberOf V2
     */
    constructor(config) {
        this.__instances = {
            person: new PersonAPI(config),
            company: new CompanyAPI(config),
            name: new NameAPI(config),
            location: new LocationAPI(config),
            stats: new StatsAPI(config),
            emailVerification: new EmailVerificationAPI(config)
        };
    }

    /**
     * Gets Person APIs
     * 
     * @readonly
     * 
     * @memberOf V2
     */
    get person() {
        return this.__instances.person;
    }

    /**
     * Gets Company APIs
     * 
     * @readonly
     * 
     * @memberOf V2
     */
    get company() {
        return this.__instances.company;
    }

    /**
     * Gets Name APIs
     * 
     * @readonly
     * 
     * @memberOf V2
     */
    get name() {
        return this.__instances.name;
    }

    /**
     * Gets Location APIs
     *
     * @readonly
     * 
     * @memberOf V2
     */
    get location() {
        return this.__instances.location;
    }

    /**
     * Gets Stats APIs
     * 
     * @readonly
     * 
     * @memberOf V2
     */
    get stats() {
        return this.__instances.stats;
    }

    /**
     * Gets Email Verification APIs
     * 
     * @readonly
     * 
     * @memberOf V2
     */
    get emailVerification() {
        return this.__instances.emailVerification;
    }

    /**
     * Gets Card Reader APIs
     * Not Implemented
     * 
     * @readonly
     * 
     * @memberOf V2
     */
    get cardReader() {
        throw 'Not Implemented';
    }
}

module.exports = V2;