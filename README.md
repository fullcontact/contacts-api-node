#FullContact node.js SDK

*IMPORTANT: This SDK should be used server-side only. Using them in a browser would expose Client Secret or API Key.*

###Supported APIs

- Person API
- Company API
- Email Verification API
- Stats API
- Name API
- Location API
- Tags API
- Contacts API
- Account API

*Card Reader API is not currently supported*

###Installation

`npm install fullcontact-node --save`

###Documentation

Documentation can be found at [https://www.fullcontact.com/developer/docs/](https://www.fullcontact.com/developer/docs/)

###Usage

#####Configuration
---

```
var fullcontact = require('fullcontact-node')({
	apiKey: '<API Key>',
	clientId: '<Client ID>',
	clientSecret: '<Client Secret>',
	redirectUri: '<Redirect URI>',
	scope: 'list,of,scopes'
});
```

#####OAuth
---
All OAuth methods can be found under the `oauth` property on the client.

######Supported Methods:
- getAuthorizationUrl()
- exchangeAuthCode(code)
- exchangeRefreshToken(refresh_token)

```
var url = fullcontact.oauth.getAuthorizationUrl();
```

#####v2 APIs
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

#####v3 APIs
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

####Tests
---

Tests are coming soon
