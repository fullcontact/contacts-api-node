[![Build Status](https://travis-ci.org/fullcontact/contacts-api-node.svg?branch=master)](https://travis-ci.org/fullcontact/contacts-api-node)
[![npm version](https://badge.fury.io/js/contacts-api-node.svg)](https://badge.fury.io/js/contacts-api-node)
[![Node version](https://img.shields.io/node/v/contacts-api-node.svg?style=flat)](http://nodejs.org/download/)

*IMPORTANT: This SDK should be used server-side only. Using it in a browser would expose Client Secret*

*Looking for FullContact Enrich APIs? there is a new SDK for that: [https://github.com/fullcontact/fullcontact-node-sdk](https://github.com/fullcontact/fullcontact-node-sdk)*

### Installation

`npm install contacts-api-node --save`

### Documentation

API Documentation can be found at [https://www.contactsplus.com/developers/contacts-api](https://www.contactsplus.com/developers/contacts-api)

JSDocs can be found in [docs.md](docs.md)

### Usage

##### Configuration
---

```
var contactsplus = require('contacts-api-node')({
	clientId: '<Client ID>', //for v3 APIs. See: https://app.contactsplus.com/apps
	clientSecret: '<Client Secret>',
	redirectUri: '<Redirect URI>',
	scope: 'list,of,scopes',
	userAgent: '<AppName/Version>'
});
```

##### OAuth
---
All OAuth methods can be found under the `oauth` property on the client.

###### Supported Methods:
- getAuthorizationUrl()
- exchangeAuthCode(code)
- exchangeRefreshToken(refresh_token)

```
var url = contactsplus.oauth.getAuthorizationUrl();
```

##### Contacts APIs
---
All Contacts APIs can be found under the `contacts` property on the client.

```
contactsplus.contacts.account.get(accessToken)
	.then(res => {
		//2xx response
	})
	.catch(res => {
		//non-2xx response
	});
```

#### Tests
---

To run tests:

`npm test`

To get coverage report:

`npm run coverage`

