const V2 = require('./apis/v2');
const V3 = require('./apis/v3');
const OAuth = require('./apis/oauth');

class FullContact {
    constructor(config) {
        this.__instances = {
            oauth: new OAuth(config),
            v2: new V2(config.apiKey),
            v3: new V3()
        };
    }

    get v2() {
        return this.__instances.v2;
    }

    get v3() {
        return this.__instances.v3;
    }

    get oauth() {
        return this.__instances.oauth;
    }
}

module.exports = FullContact;