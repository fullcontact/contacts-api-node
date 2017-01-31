const API = require('../api');

class TagsAPI extends API.OAuthBased {
    constructor() {
        super();
    }

    get(accessToken, body) {
        return this.request(
            accessToken,
            {
                method: 'POST',
                path: '/v3/tags.get',
                body,
                json: true
            }
        );
    }

    scroll(accessToken, body) {
        return this.request(
            accessToken,
            {
                method: 'POST',
                path: '/v3/tags.scroll',
                body,
                json: true
            }
        );
    }

    create(accessToken, body) {
        return this.request(
            accessToken,
            {
                method: 'POST',
                path: '/v3/tags.create',
                body,
                json: true
            }
        );
    }

    update(accessToken, body) {
        return this.request(
            accessToken,
            {
                method: 'POST',
                path: '/v3/tags.update',
                body,
                json: true
            }
        );
    }

    del(accessToken, body) {
        return this.request(
            accessToken,
            {
                method: 'POST',
                path: '/v3/tags.delete',
                body,
                json: true
            }
        );
    }
}

module.exports = TagsAPI;