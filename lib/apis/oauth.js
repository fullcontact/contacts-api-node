const querystring = require('querystring');
const request = require('request-promise');
const config = require('./config');
const moment = require('moment');

class OAuth {
    constructor(config) {
        this.urls = {
            authorize: `${config.url}/oauth/authorize`,
            accessToken: `${config.url}/v3/oauth.exchangeAuthCode`,
            refreshToken: `${config.url}/v3/oauth.refreshToken`
        };

        this.clientId = config.clientId;
        this.clientSecret = config.clientSecret;
        this.defaultScope = config.scope;
        this.redirectUri = config.redirectUrl;
    }

    getAuthorizationUrl(scope) {
        const qs = querystring.stringify({
            client_id: this.clientId,
            scope,
            redirect_uri: this.redirectUri
        });

        return `${this.urls.authorize}?${qs}`;
    }

    exchangeAuthCode(code, redirectUri = this.redirectUri) {
        return request({
            uri: this.urls.accessToken,
            method: 'POST',
            form: {
                client_id: this.clientId,
                client_secret: this.clientSecret,
                redirect_uri: redirectUri,
                code
            },
            json: true
        });
    }

    exchangeRefreshToken(refresh_token) {
        return request({
            uri: this.urls.refreshToken,
            method: 'POST',
            form: {
                client_id: this.clientId,
                client_secret: this.clientSecret,
                refresh_token
            },
            json: true
        });
    }

    isExpired(auth) {
        return !auth || moment(auth.access_token_expiration_date).isBefore(Date.now());
    }
}

module.exports = OAuth;