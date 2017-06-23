# FullContact node.js SDK

[![Build Status](https://travis-ci.org/fullcontact/fullcontact-node.svg?branch=master)](https://travis-ci.org/fullcontact/fullcontact-node)
[![npm version](https://badge.fury.io/js/fullcontact-node.svg)](https://badge.fury.io/js/fullcontact-node)
[![Node version](https://img.shields.io/node/v/fullcontact-node.svg?style=flat)](http://nodejs.org/download/)

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

*Card Reader API is not currently supported*

### Installation

`npm install fullcontact-node --save`

### Documentation

API Documentation can be found at [https://www.fullcontact.com/developer/docs/](https://www.fullcontact.com/developer/docs/)

JSDocs can be found in [docs.md](docs.md)

### Usage

##### Configuration
---

```
var fullcontact = require('fullcontact-node')({
	apiKey: '<API Key>', //for v2 APIs. See: https://www.fullcontact.com/developer/
	clientId: '<Client ID>', //for v3 APIs. See: https://app.fullcontact.com/apps
	clientSecret: '<Client Secret>',
	redirectUri: '<Redirect URI>',
	scope: 'list,of,scopes'
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

##### v3 APIs
---
All v3 APIs can be found under the `v2` property on the client.

```
fullcontact.v3.account.get(accessToken)
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

