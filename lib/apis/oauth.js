const querystring = require('querystring');
const request = require('request-promise');
const apiConfig = require('./config');
const moment = require('moment');

/**
 * FullContact OAuth (https://api.fullcontact.com/v3/docs/authentication/)
 * 
 * @class OAuth
 */
class OAuth {
    /**
     * Creates an instance of OAuth.
     * 
     * @param {any} config
     * 
     * @memberOf OAuth
     */
    constructor(config) {
        this.urls = {
            authorize: `${apiConfig.url}/oauth/authorize`,
            accessToken: `${apiConfig.url}/v3/oauth.exchangeAuthCode`,
            refreshToken: `${apiConfig.url}/v3/oauth.refreshToken`
        };

        this.clientId = config.clientId;
        this.clientSecret = config.clientSecret;
        this.defaultScope = config.scope;
        this.redirectUri = config.redirectUri || config.redirectUrl;
    }

    /**
     * Gets the Authorization URL.
     *
     * @param {string} scope
     * @returns
     * 
     * @memberOf OAuth
     */
    getAuthorizationUrl(scope = this.defaultScope) {
        const qs = querystring.stringify({
            client_id: this.clientId,
            scope,
            redirect_uri: this.redirectUri
        });

        return `${this.urls.authorize}?${qs}`;
    }

    /**
     * Exchanges an auth code for a access_token & refresh_token.
     *
     * @param {string} code
     * @param {string} [redirectUri=this.redirectUri]
     * @returns
     * 
     * @memberOf OAuth
     */
    exchangeAuthCode(code, redirectUri = this.redirectUri) {
        return request({
            url: this.urls.accessToken,
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

    /**
     * Gets a new access_token using a refresh_token.
     *
     * @param {string} refresh_token
     * @returns
     * 
     * @memberOf OAuth
     */
    exchangeRefreshToken(refresh_token) {
        return request({
            url: this.urls.refreshToken,
            method: 'POST',
            form: {
                client_id: this.clientId,
                client_secret: this.clientSecret,
                refresh_token
            },
            json: true
        });
    }

    /**
     * 
     * 
     * @param {any} auth
     * @returns
     * 
     * @memberOf OAuth
     */
    isExpired(auth) {
        return !auth || moment(auth.access_token_expiration_date).isBefore(Date.now());
    }
}

module.exports = OAuth;