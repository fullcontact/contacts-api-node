[![Build Status](https://travis-ci.org/fullcontact/contacts-api-node.svg?branch=master)](https://travis-ci.org/fullcontact/contacts-api-node)
[![npm version](https://badge.fury.io/js/contacts-api-node.svg)](https://badge.fury.io/js/fullcontact-node)
[![Node version](https://img.shields.io/node/v/contacts-api-node.svg?style=flat)](http://nodejs.org/download/)

*IMPORTANT: This SDK should be used server-side only. Using it in a browser would expose Client Secret or API Key.*

### Supported APIs

- Person API
- Company API
- Email Verification API
- Stats API
- Name API
- Location API
- Tags API
- Contacts API
- Account API
- Webhooks API
- Teams API

*Card Reader API is not currently supported*

### Installation

`npm install contacts-api-node --save`

### Documentation

API Documentation can be found at [https://www.fullcontact.com/apps/docs](https://www.fullcontact.com/apps/docs)

JSDocs can be found in [docs.md](docs.md)

### Usage

##### Configuration
---

```
var fullcontact = require('contacts-api-node')({
	apiKey: '<API Key>', //for v2 APIs. See: https://www.fullcontact.com/developer/
	clientId: '<Client ID>', //for v3 APIs. See: https://app.fullcontact.com/apps
	clientSecret: '<Client Secret>',
	redirectUri: '<Redirect URI>',
	scope: 'list,of,scopes',
	userAgent: '<AppName/Version>',
	baseUrl: '<URL>' //to override base api url
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
var url = fullcontact.oauth.getAuthorizationUrl();
```

##### v2 APIs
---
All v2 APIs can be found under the `v2` property on the client.

```
fullcontact.v2.person.lookup({
	email: 'john@doe.com'
})
	.then(res => {
		//2xx response
	})
	.catch(res => {
		//non-2xx response
	});
```

##### Contacts APIs
---
All Contacts APIs can be found under the `contacts` property on the client.

```
fullcontact.contacts.account.get(accessToken)
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

