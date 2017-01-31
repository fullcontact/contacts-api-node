const request = require('request-promise');
const config = require('./config');

class API {
    get apiUrl() {
        return config.url;
    }

    authorize(auth, headers) { throw 'Not Implemented' }

    request(auth, opts = {}) {
        return this.authorize(auth, opts.headers)
                   .then(headers =>
                        request({
                            method: opts.method || 'GET',
                            url: `${this.apiUrl}${opts.path}`,
                            qs: opts.qs,
                            body: opts.body,
                            headers,
                            form: opts.form,
                            formData: opts.formData,
                            json: opts.json
                        })
                   );
    }
}

class APIKeyBased extends API {
    constructor(apiKey) {
        super();
        this.apiKey = apiKey;
    }

    authorize(apiKey, headers = {}) {
        headers['X-FullContact-ApiKey'] = apiKey;
        return Promise.resolve(headers);
    }

    request(opts) {
        return super.request(this.apiKey, opts);
    }
}

class OAuthBased extends API {
    constructor() {
        super();
    }

    authorize(accessToken, headers = {}) {
        headers.Authorization = `Bearer ${accessToken}`;
        return Promise.resolve(headers);
    }
}

module.exports = {
    APIKeyBased,
    OAuthBased
};