## Classes

<dl>
<dt><a href="#ContactsPlus">ContactsPlus</a></dt>
<dd></dd>
<dt><a href="#OAuth">OAuth</a></dt>
<dd></dd>
<dt><a href="#AccountAPI">AccountAPI</a> ⇐ <code>API.OAuthBased</code></dt>
<dd></dd>
<dt><a href="#ContactsAPI">ContactsAPI</a> ⇐ <code>API.OAuthBased</code></dt>
<dd></dd>
<dt><a href="#V3">V3</a></dt>
<dd></dd>
<dt><a href="#TagsAPI">TagsAPI</a> ⇐ <code>API.OAuthBased</code></dt>
<dd></dd>
<dt><a href="#TeamsAPI">TeamsAPI</a> ⇐ <code>API.OAuthBased</code></dt>
<dd></dd>
<dt><a href="#WebhooksAPI">WebhooksAPI</a> ⇐ <code>API.OAuthBased</code></dt>
<dd></dd>
</dl>

<a name="ContactsPlus"></a>

## ContactsPlus
**Kind**: global class  

* [ContactsPlus](#ContactsPlus)
    * _instance_
        * [.contacts](#ContactsPlus+contacts)
        * [.oauth](#ContactsPlus+oauth)
        * [.v3](#ContactsPlus+v3)
    * _static_
        * [.ContactsPlus](#ContactsPlus.ContactsPlus)
            * [new ContactsPlus(config)](#new_ContactsPlus.ContactsPlus_new)

<a name="ContactsPlus+contacts"></a>

### contactsPlus.contacts
Gets Contacts APIs

**Kind**: instance property of [<code>ContactsPlus</code>](#ContactsPlus)  
**Read only**: true  
<a name="ContactsPlus+oauth"></a>

### contactsPlus.oauth
Gets oauth client

**Kind**: instance property of [<code>ContactsPlus</code>](#ContactsPlus)  
**Read only**: true  
<a name="ContactsPlus+v3"></a>

### contactsPlus.v3
Gets v3 (alias of contacts)

**Kind**: instance property of [<code>ContactsPlus</code>](#ContactsPlus)  
**Read only**: true  
<a name="ContactsPlus.ContactsPlus"></a>

### ContactsPlus.ContactsPlus
**Kind**: static class of [<code>ContactsPlus</code>](#ContactsPlus)  
<a name="new_ContactsPlus.ContactsPlus_new"></a>

#### new ContactsPlus(config)
Creates an instance of ContactsPlus.
Config: {
 clientId,
 clientSecret,
 redirectUri,
 scope,
 baseUrl
}


| Param | Type |
| --- | --- |
| config | <code>Object</code> | 

<a name="OAuth"></a>

## OAuth
**Kind**: global class  

* [OAuth](#OAuth)
    * [new OAuth()](#new_OAuth_new)
    * _instance_
        * [.getAuthorizationUrl(scope, queryString)](#OAuth+getAuthorizationUrl) ⇒ <code>String</code>
        * [.exchangeAuthCode(code, [redirectUri])](#OAuth+exchangeAuthCode) ⇒ <code>Promise</code>
        * [.exchangeRefreshToken(refresh_token)](#OAuth+exchangeRefreshToken) ⇒ <code>Promise</code>
        * [.isExpired(auth)](#OAuth+isExpired) ⇒ <code>Boolean</code>
    * _static_
        * [.OAuth](#OAuth.OAuth)
            * [new OAuth(config)](#new_OAuth.OAuth_new)

<a name="new_OAuth_new"></a>

### new OAuth()
ContactsPlus OAuth

<a name="OAuth+getAuthorizationUrl"></a>

### oAuth.getAuthorizationUrl(scope, queryString) ⇒ <code>String</code>
Gets the Authorization URL.

**Kind**: instance method of [<code>OAuth</code>](#OAuth)  

| Param | Type |
| --- | --- |
| scope | <code>String</code> | 
| queryString | <code>Object</code> | 

<a name="OAuth+exchangeAuthCode"></a>

### oAuth.exchangeAuthCode(code, [redirectUri]) ⇒ <code>Promise</code>
Exchanges an auth code for a access_token & refresh_token.

**Kind**: instance method of [<code>OAuth</code>](#OAuth)  

| Param | Type | Default |
| --- | --- | --- |
| code | <code>String</code> |  | 
| [redirectUri] | <code>String</code> | <code>this.redirectUri</code> | 

<a name="OAuth+exchangeRefreshToken"></a>

### oAuth.exchangeRefreshToken(refresh_token) ⇒ <code>Promise</code>
Gets a new access_token using a refresh_token.

**Kind**: instance method of [<code>OAuth</code>](#OAuth)  

| Param | Type |
| --- | --- |
| refresh_token | <code>String</code> | 

<a name="OAuth+isExpired"></a>

### oAuth.isExpired(auth) ⇒ <code>Boolean</code>
**Kind**: instance method of [<code>OAuth</code>](#OAuth)  

| Param | Type |
| --- | --- |
| auth | <code>Object</code> | 

<a name="OAuth.OAuth"></a>

### OAuth.OAuth
**Kind**: static class of [<code>OAuth</code>](#OAuth)  
<a name="new_OAuth.OAuth_new"></a>

#### new OAuth(config)
Creates an instance of OAuth.


| Param | Type |
| --- | --- |
| config | <code>Object</code> | 

<a name="AccountAPI"></a>

## AccountAPI ⇐ <code>API.OAuthBased</code>
**Kind**: global class  
**Extends**: <code>API.OAuthBased</code>  

* [AccountAPI](#AccountAPI) ⇐ <code>API.OAuthBased</code>
    * [new AccountAPI()](#new_AccountAPI_new)
    * _instance_
        * [.get(accessToken)](#AccountAPI+get) ⇒ <code>Promise</code>
    * _static_
        * [.AccountAPI](#AccountAPI.AccountAPI)
            * [new AccountAPI()](#new_AccountAPI.AccountAPI_new)

<a name="new_AccountAPI_new"></a>

### new AccountAPI()
Account APIs

<a name="AccountAPI+get"></a>

### accountAPI.get(accessToken) ⇒ <code>Promise</code>
Gets account information for the given accessToken.
REQUIRED SCOPE: account.read

**Kind**: instance method of [<code>AccountAPI</code>](#AccountAPI)  

| Param | Type |
| --- | --- |
| accessToken | <code>String</code> | 

<a name="AccountAPI.AccountAPI"></a>

### AccountAPI.AccountAPI
**Kind**: static class of [<code>AccountAPI</code>](#AccountAPI)  
<a name="new_AccountAPI.AccountAPI_new"></a>

#### new AccountAPI()
Creates an instance of AccountAPI.

<a name="ContactsAPI"></a>

## ContactsAPI ⇐ <code>API.OAuthBased</code>
**Kind**: global class  
**Extends**: <code>API.OAuthBased</code>  

* [ContactsAPI](#ContactsAPI) ⇐ <code>API.OAuthBased</code>
    * [new ContactsAPI()](#new_ContactsAPI_new)
    * _instance_
        * [.get(accessToken, body)](#ContactsAPI+get) ⇒ <code>Promise</code>
        * [.scroll(accessToken, body)](#ContactsAPI+scroll) ⇒ <code>Promise</code>
        * [.search(accessToken, body)](#ContactsAPI+search) ⇒ <code>Promise</code>
        * [.create(accessToken, body)](#ContactsAPI+create) ⇒ <code>Promise</code>
        * [.update(accessToken, body)](#ContactsAPI+update) ⇒ <code>Promise</code>
        * [.manageTags(accessToken, body)](#ContactsAPI+manageTags) ⇒ <code>Promise</code>
        * [.uploadPhoto(accessToken, contact, buffer)](#ContactsAPI+uploadPhoto) ⇒ <code>Promise</code>
        * [.del(accessToken, body)](#ContactsAPI+del) ⇒ <code>Promise</code>
    * _static_
        * [.ContactsAPI](#ContactsAPI.ContactsAPI)
            * [new ContactsAPI()](#new_ContactsAPI.ContactsAPI_new)

<a name="new_ContactsAPI_new"></a>

### new ContactsAPI()
Contacts APIs

<a name="ContactsAPI+get"></a>

### contactsAPI.get(accessToken, body) ⇒ <code>Promise</code>
Gets contacts
REQUIRED SCOPE: contacts.read

**Kind**: instance method of [<code>ContactsAPI</code>](#ContactsAPI)  

| Param | Type |
| --- | --- |
| accessToken | <code>String</code> | 
| body | <code>Object</code> | 

<a name="ContactsAPI+scroll"></a>

### contactsAPI.scroll(accessToken, body) ⇒ <code>Promise</code>
Scrolls a list of contacts
REQUIRED SCOPE: contacts.read

**Kind**: instance method of [<code>ContactsAPI</code>](#ContactsAPI)  

| Param | Type |
| --- | --- |
| accessToken | <code>String</code> | 
| body | <code>Object</code> | 

<a name="ContactsAPI+search"></a>

### contactsAPI.search(accessToken, body) ⇒ <code>Promise</code>
Searches for contacts
REQUIRED SCOPE: contacts.read

**Kind**: instance method of [<code>ContactsAPI</code>](#ContactsAPI)  

| Param | Type |
| --- | --- |
| accessToken | <code>String</code> | 
| body | <code>Object</code> | 

<a name="ContactsAPI+create"></a>

### contactsAPI.create(accessToken, body) ⇒ <code>Promise</code>
Creates a new contact
REQUIRED SCOPE: contacts.write

**Kind**: instance method of [<code>ContactsAPI</code>](#ContactsAPI)  

| Param | Type |
| --- | --- |
| accessToken | <code>String</code> | 
| body | <code>Object</code> | 

<a name="ContactsAPI+update"></a>

### contactsAPI.update(accessToken, body) ⇒ <code>Promise</code>
Updates a contact
REQUIRED SCOPE: contacts.write

**Kind**: instance method of [<code>ContactsAPI</code>](#ContactsAPI)  

| Param | Type |
| --- | --- |
| accessToken | <code>String</code> | 
| body | <code>Object</code> | 

<a name="ContactsAPI+manageTags"></a>

### contactsAPI.manageTags(accessToken, body) ⇒ <code>Promise</code>
Manages tags for a contact (https://api.fullcontact.com/api/v1/docs/methods/contacts.manageTags)
REQUIRED SCOPE: contacts.write

**Kind**: instance method of [<code>ContactsAPI</code>](#ContactsAPI)  

| Param | Type |
| --- | --- |
| accessToken | <code>String</code> | 
| body | <code>Object</code> | 

<a name="ContactsAPI+uploadPhoto"></a>

### contactsAPI.uploadPhoto(accessToken, contact, buffer) ⇒ <code>Promise</code>
Uploads a contact photo (https://api.fullcontact.com/api/v1/docs/methods/contacts.uploadPhoto)
REQUIRED SCOPE: contacts.write

**Kind**: instance method of [<code>ContactsAPI</code>](#ContactsAPI)  

| Param | Type |
| --- | --- |
| accessToken | <code>String</code> | 
| contact | <code>Object</code> | 
| buffer | <code>Buffer</code> | 

<a name="ContactsAPI+del"></a>

### contactsAPI.del(accessToken, body) ⇒ <code>Promise</code>
Deletes a contact (https://api.fullcontact.com/api/v1/docs/methods/contacts.delete)
REQUIRED SCOPE: contacts.write

**Kind**: instance method of [<code>ContactsAPI</code>](#ContactsAPI)  

| Param | Type |
| --- | --- |
| accessToken | <code>String</code> | 
| body | <code>Object</code> | 

<a name="ContactsAPI.ContactsAPI"></a>

### ContactsAPI.ContactsAPI
**Kind**: static class of [<code>ContactsAPI</code>](#ContactsAPI)  
<a name="new_ContactsAPI.ContactsAPI_new"></a>

#### new ContactsAPI()
Creates an instance of ContactsAPI.

<a name="V3"></a>

## V3
**Kind**: global class  

* [V3](#V3)
    * [new V3()](#new_V3_new)
    * _instance_
        * [.account](#V3+account)
        * [.contacts](#V3+contacts)
        * [.tags](#V3+tags)
        * [.webhooks](#V3+webhooks)
        * [.teams](#V3+teams)
    * _static_
        * [.V3](#V3.V3)
            * [new V3()](#new_V3.V3_new)

<a name="new_V3_new"></a>

### new V3()
V3 APIs

<a name="V3+account"></a>

### v3.account
Gets Account APIs

**Kind**: instance property of [<code>V3</code>](#V3)  
**Read only**: true  
<a name="V3+contacts"></a>

### v3.contacts
Gets Contacts APIs

**Kind**: instance property of [<code>V3</code>](#V3)  
**Read only**: true  
<a name="V3+tags"></a>

### v3.tags
Gets Tags APIs

**Kind**: instance property of [<code>V3</code>](#V3)  
**Read only**: true  
<a name="V3+webhooks"></a>

### v3.webhooks
Gets Webhooks APIs

**Kind**: instance property of [<code>V3</code>](#V3)  
**Read only**: true  
<a name="V3+teams"></a>

### v3.teams
Gets Teams APIs

**Kind**: instance property of [<code>V3</code>](#V3)  
**Read only**: true  
<a name="V3.V3"></a>

### V3.V3
**Kind**: static class of [<code>V3</code>](#V3)  
<a name="new_V3.V3_new"></a>

#### new V3()
Creates an instance of V3.

<a name="TagsAPI"></a>

## TagsAPI ⇐ <code>API.OAuthBased</code>
**Kind**: global class  
**Extends**: <code>API.OAuthBased</code>  

* [TagsAPI](#TagsAPI) ⇐ <code>API.OAuthBased</code>
    * [new TagsAPI()](#new_TagsAPI_new)
    * _instance_
        * [.get(accessToken, body)](#TagsAPI+get) ⇒ <code>Promise</code>
        * [.scroll(accessToken, body)](#TagsAPI+scroll) ⇒ <code>Promise</code>
        * [.create(accessToken, body)](#TagsAPI+create) ⇒ <code>Promise</code>
        * [.update(accessToken, body)](#TagsAPI+update) ⇒ <code>Promise</code>
        * [.del(accessToken, body)](#TagsAPI+del) ⇒ <code>Promise</code>
    * _static_
        * [.TagsAPI](#TagsAPI.TagsAPI)
            * [new TagsAPI()](#new_TagsAPI.TagsAPI_new)

<a name="new_TagsAPI_new"></a>

### new TagsAPI()
Tags APIs

<a name="TagsAPI+get"></a>

### tagsAPI.get(accessToken, body) ⇒ <code>Promise</code>
Gets tags (https://api.fullcontact.com/api/v1/docs/methods/tags.get)
REQUIRED SCOPE: tags.read

**Kind**: instance method of [<code>TagsAPI</code>](#TagsAPI)  

| Param | Type |
| --- | --- |
| accessToken | <code>String</code> | 
| body | <code>Object</code> | 

<a name="TagsAPI+scroll"></a>

### tagsAPI.scroll(accessToken, body) ⇒ <code>Promise</code>
Scrolls a list of tags (https://api.fullcontact.com/api/v1/docs/methods/tags.scroll)
REQUIRED SCOPE: tags.read

**Kind**: instance method of [<code>TagsAPI</code>](#TagsAPI)  

| Param | Type |
| --- | --- |
| accessToken | <code>String</code> | 
| body | <code>Object</code> | 

<a name="TagsAPI+create"></a>

### tagsAPI.create(accessToken, body) ⇒ <code>Promise</code>
Creates a tag (https://api.fullcontact.com/api/v1/docs/methods/tags.create)
REQUIRED SCOPE: tags.write

**Kind**: instance method of [<code>TagsAPI</code>](#TagsAPI)  

| Param | Type |
| --- | --- |
| accessToken | <code>String</code> | 
| body | <code>Object</code> | 

<a name="TagsAPI+update"></a>

### tagsAPI.update(accessToken, body) ⇒ <code>Promise</code>
Updates a tag(https://api.fullcontact.com/api/v1/docs/methods/tags.update)
REQUIRED SCOPE: tags.write

**Kind**: instance method of [<code>TagsAPI</code>](#TagsAPI)  

| Param | Type |
| --- | --- |
| accessToken | <code>String</code> | 
| body | <code>Object</code> | 

<a name="TagsAPI+del"></a>

### tagsAPI.del(accessToken, body) ⇒ <code>Promise</code>
Deletes a tag (https://api.fullcontact.com/api/v1/docs/methods/tags.delete)
REQUIRED SCOPE: tags.write

**Kind**: instance method of [<code>TagsAPI</code>](#TagsAPI)  

| Param | Type |
| --- | --- |
| accessToken | <code>String</code> | 
| body | <code>Object</code> | 

<a name="TagsAPI.TagsAPI"></a>

### TagsAPI.TagsAPI
**Kind**: static class of [<code>TagsAPI</code>](#TagsAPI)  
<a name="new_TagsAPI.TagsAPI_new"></a>

#### new TagsAPI()
Creates an instance of TagsAPI.

<a name="TeamsAPI"></a>

## TeamsAPI ⇐ <code>API.OAuthBased</code>
**Kind**: global class  
**Extends**: <code>API.OAuthBased</code>  

* [TeamsAPI](#TeamsAPI) ⇐ <code>API.OAuthBased</code>
    * [new TeamsAPI()](#new_TeamsAPI_new)
    * _instance_
        * [.get(accessToken, body)](#TeamsAPI+get) ⇒ <code>Promise</code>
    * _static_
        * [.TeamsAPI](#TeamsAPI.TeamsAPI)
            * [new TeamsAPI()](#new_TeamsAPI.TeamsAPI_new)

<a name="new_TeamsAPI_new"></a>

### new TeamsAPI()
Teams APIs

<a name="TeamsAPI+get"></a>

### teamsAPI.get(accessToken, body) ⇒ <code>Promise</code>
Gets a list of teams for user (https://api.fullcontact.com/api/v1/docs/methods/teams.get)
REQUIRED SCOPE: teams.read

**Kind**: instance method of [<code>TeamsAPI</code>](#TeamsAPI)  

| Param | Type |
| --- | --- |
| accessToken | <code>String</code> | 
| body | <code>Object</code> | 

<a name="TeamsAPI.TeamsAPI"></a>

### TeamsAPI.TeamsAPI
**Kind**: static class of [<code>TeamsAPI</code>](#TeamsAPI)  
<a name="new_TeamsAPI.TeamsAPI_new"></a>

#### new TeamsAPI()
Creates an instance of TeamsAPI.

<a name="WebhooksAPI"></a>

## WebhooksAPI ⇐ <code>API.OAuthBased</code>
**Kind**: global class  
**Extends**: <code>API.OAuthBased</code>  

* [WebhooksAPI](#WebhooksAPI) ⇐ <code>API.OAuthBased</code>
    * [new WebhooksAPI()](#new_WebhooksAPI_new)
    * _instance_
        * [.create(accessToken, body)](#WebhooksAPI+create) ⇒ <code>Promise</code>
        * [.getTriggers(accessToken, body)](#WebhooksAPI+getTriggers) ⇒ <code>Promise</code>
        * [.get(accessToken, body)](#WebhooksAPI+get) ⇒ <code>Promise</code>
        * [.search(accessToken, body)](#WebhooksAPI+search) ⇒ <code>Promise</code>
        * [.getBatches(accessToken, body)](#WebhooksAPI+getBatches) ⇒ <code>Promise</code>
        * [.del(accessToken, body)](#WebhooksAPI+del) ⇒ <code>Promise</code>
    * _static_
        * [.WebhooksAPI](#WebhooksAPI.WebhooksAPI)
            * [new WebhooksAPI()](#new_WebhooksAPI.WebhooksAPI_new)

<a name="new_WebhooksAPI_new"></a>

### new WebhooksAPI()
Webhooks APIs

<a name="WebhooksAPI+create"></a>

### webhooksAPI.create(accessToken, body) ⇒ <code>Promise</code>
Creates a webhook (https://api.fullcontact.com/api/v1/docs/methods/webhooks.create

**Kind**: instance method of [<code>WebhooksAPI</code>](#WebhooksAPI)  

| Param | Type |
| --- | --- |
| accessToken | <code>String</code> | 
| body | <code>Object</code> | 

<a name="WebhooksAPI+getTriggers"></a>

### webhooksAPI.getTriggers(accessToken, body) ⇒ <code>Promise</code>
Gets a list of triggers for a webhook (https://api.fullcontact.com/api/v1/docs/methods/webhooks.getTriggers)

**Kind**: instance method of [<code>WebhooksAPI</code>](#WebhooksAPI)  

| Param | Type |
| --- | --- |
| accessToken | <code>String</code> | 
| body | <code>Object</code> | 

<a name="WebhooksAPI+get"></a>

### webhooksAPI.get(accessToken, body) ⇒ <code>Promise</code>
Gets a webhook (https://api.fullcontact.com/api/v1/docs/methods/webhooks.get)

**Kind**: instance method of [<code>WebhooksAPI</code>](#WebhooksAPI)  

| Param | Type |
| --- | --- |
| accessToken | <code>String</code> | 
| body | <code>Object</code> | 

<a name="WebhooksAPI+search"></a>

### webhooksAPI.search(accessToken, body) ⇒ <code>Promise</code>
Searches webhooks(https://api.fullcontact.com/api/v1/docs/methods/webhooks.search)

**Kind**: instance method of [<code>WebhooksAPI</code>](#WebhooksAPI)  

| Param | Type |
| --- | --- |
| accessToken | <code>String</code> | 
| body | <code>Object</code> | 

<a name="WebhooksAPI+getBatches"></a>

### webhooksAPI.getBatches(accessToken, body) ⇒ <code>Promise</code>
Gets batches for a webhook (https://api.fullcontact.com/api/v1/docs/methods/webhooks.getBatches)

**Kind**: instance method of [<code>WebhooksAPI</code>](#WebhooksAPI)  

| Param | Type |
| --- | --- |
| accessToken | <code>String</code> | 
| body | <code>Object</code> | 

<a name="WebhooksAPI+del"></a>

### webhooksAPI.del(accessToken, body) ⇒ <code>Promise</code>
Deletes a webhook (https://api.fullcontact.com/api/v1/docs/methods/webhooks.delete)

**Kind**: instance method of [<code>WebhooksAPI</code>](#WebhooksAPI)  

| Param | Type |
| --- | --- |
| accessToken | <code>String</code> | 
| body | <code>Object</code> | 

<a name="WebhooksAPI.WebhooksAPI"></a>

### WebhooksAPI.WebhooksAPI
**Kind**: static class of [<code>WebhooksAPI</code>](#WebhooksAPI)  
<a name="new_WebhooksAPI.WebhooksAPI_new"></a>

#### new WebhooksAPI()
Creates an instance of WebhooksAPI.

