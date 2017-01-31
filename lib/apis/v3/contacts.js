const API = require('../api');

class ContactsAPI extends API.OAuthBased {
    constructor() {
        super();
    }

    get(accessToken, body) {
        return this.request(
            accessToken,
            {
                method: 'POST',
                path: '/v3/contacts.get',
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
                path: '/v3/contacts.scroll',
                body,
                json: true
            }
        );
    }

    search(accessToken, body) {
        return this.request(
            accessToken,
            {
                method: 'POST',
                path: '/v3/contacts.search',
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
                path: '/v3/contacts.create',
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
                path: '/v3/contacts.update',
                body,
                json: true
            }
        );
    }

    manageTags(accessToken, body) {
        return this.request(
            accessToken,
            {
                method: 'POST',
                path: '/v3/contacts.manageTags',
                body,
                json: true
            }
        );
    }

    uploadPhoto(accessToken, contact, buffer) {
        return this.request(
            accessToken,
            {
                method: 'POST',
                path: '/v3/contacts.uploadPhoto',
                formData: {
                    'contact.json': {
                        value: JSON.stringify(contact),
                        options: {
                            contentDisposition: 'form-data',
                            contentType: 'application/json'
                        }
                    },
                    file3: {
                        value: buffer,
                        options: {
                            filename: 'image.png',
                            contentType: 'image/png',
                            contentDisposition: 'form-data'
                        }
                    }
                },
                json: true
            }
        );
    }

    del(accessToken, body) {
        return this.request(
            accessToken,
            {
                method: 'POST',
                path: '/v3/contacts.delete',
                body,
                json: true
            }
        );
    }
}

module.exports = ContactsAPI;