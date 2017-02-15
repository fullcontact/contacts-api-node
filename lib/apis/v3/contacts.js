const API = require('../api');

/**
 * Contacts APIs
 * 
 * @class ContactsAPI
 * @extends {API.OAuthBased}
 */
class ContactsAPI extends API.OAuthBased {
    /**
     * Creates an instance of ContactsAPI.
     * 
     * 
     * @memberOf ContactsAPI
     */
    constructor() {
        super();
    }

    /**
     * Gets contacts (https://api.fullcontact.com/v3/docs/methods/contacts.get)
     * REQUIRED SCOPE: contacts.read
     *
     * @param {String} accessToken
     * @param {Object} body
     * @returns {Promise}
     * 
     * @memberOf ContactsAPI
     */
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

    /**
     * Scrolls a list of contacts (https://api.fullcontact.com/v3/docs/methods/contacts.scroll)
     * REQUIRED SCOPE: contacts.read
     *
     * @param {String} accessToken
     * @param {Object} body
     * @returns {Promise}
     * 
     * @memberOf ContactsAPI
     */
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

    /**
     * Searches for contacts (https://api.fullcontact.com/v3/docs/methods/contacts.search)
     * REQUIRED SCOPE: contacts.read
     * 
     * @param {String} accessToken
     * @param {Object} body
     * @returns {Promise}
     * 
     * @memberOf ContactsAPI
     */
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

    /**
     * Creates a new contact (https://api.fullcontact.com/v3/docs/methods/contacts.create)
     * REQUIRED SCOPE: contacts.write
     *
     * @param {String} accessToken
     * @param {Object} body
     * @returns {Promise}
     * 
     * @memberOf ContactsAPI
     */
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

    /**
     * Updates a contact (https://api.fullcontact.com/v3/docs/methods/contacts.update)
     * REQUIRED SCOPE: contacts.write
     *
     * @param {String} accessToken
     * @param {Object} body
     * @returns {Promise}
     * 
     * @memberOf ContactsAPI
     */
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

    /**
     * Manages tags for a contact (https://api.fullcontact.com/v3/docs/methods/contacts.manageTags)
     * REQUIRED SCOPE: contacts.write
     *
     * @param {String} accessToken
     * @param {Object} body
     * @returns {Promise}
     * 
     * @memberOf ContactsAPI
     */
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

    /**
     * Uploads a contact photo (https://api.fullcontact.com/v3/docs/methods/contacts.uploadPhoto)
     * REQUIRED SCOPE: contacts.write
     *
     * @param {String} accessToken
     * @param {Object} contact
     * @param {Buffer} buffer
     * @returns {Promise}
     * 
     * @memberOf ContactsAPI
     */
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

    /**
     * Deletes a contact (https://api.fullcontact.com/v3/docs/methods/contacts.delete)
     * REQUIRED SCOPE: contacts.write
     *
     * @param {String} accessToken
     * @param {Object} body
     * @returns {Promise}
     * 
     * @memberOf ContactsAPI
     */
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