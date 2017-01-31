const API = require('../api');

class AccountAPI extends API.OAuthBased {
    constructor() {
        super();
    }

    get(accessToken) {
        return this.request(
            accessToken,
            {
                path: '/v3/account.get',
                json: true
            }
        );
    }
}

module.exports = AccountAPI;