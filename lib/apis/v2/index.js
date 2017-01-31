const PersonAPI = require('./person');
const CompanyAPI = require('./company');
const NameAPI = require('./name');
const LocationAPI = require('./location');
const StatsAPI = require('./stats');
const EmailVerificationAPI = require('./email-verification');

class V2 {
    constructor(apiKey) {
        this.__instances = {
            person: new PersonAPI(apiKey),
            company: new CompanyAPI(apiKey),
            name: new NameAPI(apiKey),
            location: new LocationAPI(apiKey),
            stats: new StatsAPI(apiKey),
            emailVerification: new EmailVerificationAPI(apiKey)
        };
    }

    get person() {
        return this.__instances.person;
    }

    get company() {
        return this.__instances.company;
    }

    get name() {
        return this.__instances.name;
    }

    get location() {
        return this.__instances.location;
    }

    get stats() {
        return this.__instances.stats;
    }

    get emailVerification() {
        return this.__instances.emailVerification;
    }

    get cardReader() {
        throw 'Not Implemented';
    }
}

module.exports = V2;