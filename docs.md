## Classes

<dl>
<dt><a href="#FullContact">FullContact</a></dt>
<dd></dd>
<dt><a href="#OAuth">OAuth</a></dt>
<dd></dd>
<dt><a href="#CompanyAPI">CompanyAPI</a> ⇐ <code>API.APIKeyBased</code></dt>
<dd></dd>
<dt><a href="#EmailVerificationAPI">EmailVerificationAPI</a> ⇐ <code>API.APIKeyBased</code></dt>
<dd></dd>
<dt><a href="#V2">V2</a></dt>
<dd></dd>
<dt><a href="#LocationAPI">LocationAPI</a> ⇐ <code>API.APIKeyBased</code></dt>
<dd></dd>
<dt><a href="#NameAPI">NameAPI</a> ⇐ <code>API.APIKeyBased</code></dt>
<dd></dd>
<dt><a href="#PersonAPI">PersonAPI</a> ⇐ <code>API.APIKeyBased</code></dt>
<dd></dd>
<dt><a href="#StatsAPI">StatsAPI</a> ⇐ <code>API.APIKeyBased</code></dt>
<dd></dd>
<dt><a href="#AccountAPI">AccountAPI</a> ⇐ <code>API.OAuthBased</code></dt>
<dd></dd>
<dt><a href="#ContactsAPI">ContactsAPI</a> ⇐ <code>API.OAuthBased</code></dt>
<dd></dd>
<dt><a href="#V3">V3</a></dt>
<dd></dd>
<dt><a href="#TagsAPI">TagsAPI</a> ⇐ <code>API.OAuthBased</code></dt>
<dd></dd>
<dt><a href="#WebhooksAPI">WebhooksAPI</a> ⇐ <code>API.OAuthBased</code></dt>
<dd></dd>
</dl>

<a name="FullContact"></a>

## FullContact
**Kind**: global class  

* [FullContact](#FullContact)
    * _instance_
        * [.v2](#FullContact+v2)
        * [.v3](#FullContact+v3)
        * [.oauth](#FullContact+oauth)
    * _static_
        * [.FullContact](#FullContact.FullContact)
            * [new FullContact(config)](#new_FullContact.FullContact_new)

<a name="FullContact+v2"></a>

### fullContact.v2
Gets v2 APIs

**Kind**: instance property of <code>[FullContact](#FullContact)</code>  
**Read only**: true  
<a name="FullContact+v3"></a>

### fullContact.v3
Gets v3 APIs

**Kind**: instance property of <code>[FullContact](#FullContact)</code>  
**Read only**: true  
<a name="FullContact+oauth"></a>

### fullContact.oauth
Gets oauth client

**Kind**: instance property of <code>[FullContact](#FullContact)</code>  
**Read only**: true  
<a name="FullContact.FullContact"></a>

### FullContact.FullContact
**Kind**: static class of <code>[FullContact](#FullContact)</code>  
<a name="new_FullContact.FullContact_new"></a>

#### new FullContact(config)
Creates an instance of FullContact.
Config: {
 apiKey,
 clientId,
 clientSecret,
 redirectUri,
 scope
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
        * [.getAuthorizationUrl(scope)](#OAuth+getAuthorizationUrl) ⇒ <code>String</code>
        * [.exchangeAuthCode(code, [redirectUri])](#OAuth+exchangeAuthCode) ⇒ <code>Promise</code>
        * [.exchangeRefreshToken(refresh_token)](#OAuth+exchangeRefreshToken) ⇒ <code>Promise</code>
        * [.isExpired(auth)](#OAuth+isExpired) ⇒ <code>Boolean</code>
    * _static_
        * [.OAuth](#OAuth.OAuth)
            * [new OAuth(config)](#new_OAuth.OAuth_new)

<a name="new_OAuth_new"></a>

### new OAuth()
FullContact OAuth (https://api.fullcontact.com/v3/docs/authentication/)

<a name="OAuth+getAuthorizationUrl"></a>

### oAuth.getAuthorizationUrl(scope) ⇒ <code>String</code>
Gets the Authorization URL.

**Kind**: instance method of <code>[OAuth](#OAuth)</code>  

| Param | Type |
| --- | --- |
| scope | <code>String</code> | 

<a name="OAuth+exchangeAuthCode"></a>

### oAuth.exchangeAuthCode(code, [redirectUri]) ⇒ <code>Promise</code>
Exchanges an auth code for a access_token & refresh_token.

**Kind**: instance method of <code>[OAuth](#OAuth)</code>  

| Param | Type | Default |
| --- | --- | --- |
| code | <code>String</code> |  | 
| [redirectUri] | <code>String</code> | <code>this.redirectUri</code> | 

<a name="OAuth+exchangeRefreshToken"></a>

### oAuth.exchangeRefreshToken(refresh_token) ⇒ <code>Promise</code>
Gets a new access_token using a refresh_token.

**Kind**: instance method of <code>[OAuth](#OAuth)</code>  

| Param | Type |
| --- | --- |
| refresh_token | <code>String</code> | 

<a name="OAuth+isExpired"></a>

### oAuth.isExpired(auth) ⇒ <code>Boolean</code>
**Kind**: instance method of <code>[OAuth](#OAuth)</code>  

| Param | Type |
| --- | --- |
| auth | <code>Object</code> | 

<a name="OAuth.OAuth"></a>

### OAuth.OAuth
**Kind**: static class of <code>[OAuth](#OAuth)</code>  
<a name="new_OAuth.OAuth_new"></a>

#### new OAuth(config)
Creates an instance of OAuth.


| Param | Type |
| --- | --- |
| config | <code>Object</code> | 

<a name="CompanyAPI"></a>

## CompanyAPI ⇐ <code>API.APIKeyBased</code>
**Kind**: global class  
**Extends:** <code>API.APIKeyBased</code>  

* [CompanyAPI](#CompanyAPI) ⇐ <code>API.APIKeyBased</code>
    * [new CompanyAPI()](#new_CompanyAPI_new)
    * _instance_
        * [.lookup([opts={
 domain,
 keyPeople,
 prettyPrint,
 webhookUrl,
 webhookId,
 webhookBody
}])](#CompanyAPI+lookup) ⇒ <code>Promise</code>
        * [.search([opts={
 companyName,
 sort,
 location
 locality,
 region,
 country,
 prettyPrint
}])](#CompanyAPI+search) ⇒ <code>Promise</code>
    * _static_
        * [.CompanyAPI](#CompanyAPI.CompanyAPI)
            * [new CompanyAPI(apiKey)](#new_CompanyAPI.CompanyAPI_new)

<a name="new_CompanyAPI_new"></a>

### new CompanyAPI()
Company APIs (https://www.fullcontact.com/developer/docs/company)

<a name="CompanyAPI+lookup"></a>

### companyAPI.lookup([opts={
 domain,
 keyPeople,
 prettyPrint,
 webhookUrl,
 webhookId,
 webhookBody
}]) ⇒ <code>Promise</code>
lookup a company by domain.

**Kind**: instance method of <code>[CompanyAPI](#CompanyAPI)</code>  

| Param | Type |
| --- | --- |
| [opts={
 domain,
 keyPeople,
 prettyPrint,
 webhookUrl,
 webhookId,
 webhookBody
}] | <code>Object</code> | 

<a name="CompanyAPI+search"></a>

### companyAPI.search([opts={
 companyName,
 sort,
 location
 locality,
 region,
 country,
 prettyPrint
}]) ⇒ <code>Promise</code>
Search for companies by name

**Kind**: instance method of <code>[CompanyAPI](#CompanyAPI)</code>  

| Param | Type |
| --- | --- |
| [opts={
 companyName,
 sort,
 location
 locality,
 region,
 country,
 prettyPrint
}] | <code>Object</code> | 

<a name="CompanyAPI.CompanyAPI"></a>

### CompanyAPI.CompanyAPI
**Kind**: static class of <code>[CompanyAPI](#CompanyAPI)</code>  
<a name="new_CompanyAPI.CompanyAPI_new"></a>

#### new CompanyAPI(apiKey)
Creates an instance of CompanyAPI.


| Param | Type |
| --- | --- |
| apiKey | <code>String</code> | 

<a name="EmailVerificationAPI"></a>

## EmailVerificationAPI ⇐ <code>API.APIKeyBased</code>
**Kind**: global class  
**Extends:** <code>API.APIKeyBased</code>  

* [EmailVerificationAPI](#EmailVerificationAPI) ⇐ <code>API.APIKeyBased</code>
    * [new EmailVerificationAPI()](#new_EmailVerificationAPI_new)
    * _instance_
        * [.single([opts={
 email
}])](#EmailVerificationAPI+single) ⇒ <code>Promise</code>
        * [.batch([opts={
 emails,
 webhookUrl
}])](#EmailVerificationAPI+batch) ⇒ <code>Promise</code>
        * [.batchStatus(id)](#EmailVerificationAPI+batchStatus) ⇒ <code>Promise</code>
    * _static_
        * [.EmailVerificationAPI](#EmailVerificationAPI.EmailVerificationAPI)
            * [new EmailVerificationAPI(apiKey)](#new_EmailVerificationAPI.EmailVerificationAPI_new)

<a name="new_EmailVerificationAPI_new"></a>

### new EmailVerificationAPI()
Email Verification APIs (https://www.fullcontact.com/developer/docs/email-verification/)

<a name="EmailVerificationAPI+single"></a>

### emailVerificationAPI.single([opts={
 email
}]) ⇒ <code>Promise</code>
Verifies a single email

**Kind**: instance method of <code>[EmailVerificationAPI](#EmailVerificationAPI)</code>  

| Param | Type |
| --- | --- |
| [opts={
 email
}] | <code>Object</code> | 

<a name="EmailVerificationAPI+batch"></a>

### emailVerificationAPI.batch([opts={
 emails,
 webhookUrl
}]) ⇒ <code>Promise</code>
Verifies multiple emails

**Kind**: instance method of <code>[EmailVerificationAPI](#EmailVerificationAPI)</code>  

| Param | Type |
| --- | --- |
| [opts={
 emails,
 webhookUrl
}] | <code>Object</code> | 

<a name="EmailVerificationAPI+batchStatus"></a>

### emailVerificationAPI.batchStatus(id) ⇒ <code>Promise</code>
Gets the status on a batch of emails.

**Kind**: instance method of <code>[EmailVerificationAPI](#EmailVerificationAPI)</code>  

| Param | Type |
| --- | --- |
| id | <code>String</code> | 

<a name="EmailVerificationAPI.EmailVerificationAPI"></a>

### EmailVerificationAPI.EmailVerificationAPI
**Kind**: static class of <code>[EmailVerificationAPI](#EmailVerificationAPI)</code>  
<a name="new_EmailVerificationAPI.EmailVerificationAPI_new"></a>

#### new EmailVerificationAPI(apiKey)
Creates an instance of EmailVerificationAPI.


| Param | Type |
| --- | --- |
| apiKey | <code>String</code> | 

<a name="V2"></a>

## V2
**Kind**: global class  

* [V2](#V2)
    * [new V2()](#new_V2_new)
    * _instance_
        * [.person](#V2+person)
        * [.company](#V2+company)
        * [.name](#V2+name)
        * [.location](#V2+location)
        * [.stats](#V2+stats)
        * [.emailVerification](#V2+emailVerification)
        * [.cardReader](#V2+cardReader)
    * _static_
        * [.V2](#V2.V2)
            * [new V2(apiKey)](#new_V2.V2_new)

<a name="new_V2_new"></a>

### new V2()
V2 APIs

<a name="V2+person"></a>

### v2.person
Gets Person APIs

**Kind**: instance property of <code>[V2](#V2)</code>  
**Read only**: true  
<a name="V2+company"></a>

### v2.company
Gets Company APIs

**Kind**: instance property of <code>[V2](#V2)</code>  
**Read only**: true  
<a name="V2+name"></a>

### v2.name
Gets Name APIs

**Kind**: instance property of <code>[V2](#V2)</code>  
**Read only**: true  
<a name="V2+location"></a>

### v2.location
Gets Location APIs

**Kind**: instance property of <code>[V2](#V2)</code>  
**Read only**: true  
<a name="V2+stats"></a>

### v2.stats
Gets Stats APIs

**Kind**: instance property of <code>[V2](#V2)</code>  
**Read only**: true  
<a name="V2+emailVerification"></a>

### v2.emailVerification
Gets Email Verification APIs

**Kind**: instance property of <code>[V2](#V2)</code>  
**Read only**: true  
<a name="V2+cardReader"></a>

### v2.cardReader
Gets Card Reader APIs
Not Implemented

**Kind**: instance property of <code>[V2](#V2)</code>  
**Read only**: true  
<a name="V2.V2"></a>

### V2.V2
**Kind**: static class of <code>[V2](#V2)</code>  
<a name="new_V2.V2_new"></a>

#### new V2(apiKey)
Creates an instance of V2.


| Param | Type |
| --- | --- |
| apiKey | <code>String</code> | 

<a name="LocationAPI"></a>

## LocationAPI ⇐ <code>API.APIKeyBased</code>
**Kind**: global class  
**Extends:** <code>API.APIKeyBased</code>  

* [LocationAPI](#LocationAPI) ⇐ <code>API.APIKeyBased</code>
    * [new LocationAPI()](#new_LocationAPI_new)
    * _instance_
        * [.normalize([opts={
 place,
 includeZeroPopulation,
 casing
}])](#LocationAPI+normalize) ⇒ <code>Promise</code>
        * [.enrich([opts={
 place,
 includeZeroPopulation,
 casing 
}])](#LocationAPI+enrich) ⇒ <code>Promise</code>
    * _static_
        * [.LocationAPI](#LocationAPI.LocationAPI)
            * [new LocationAPI(apiKey)](#new_LocationAPI.LocationAPI_new)

<a name="new_LocationAPI_new"></a>

### new LocationAPI()
Location APIs (https://www.fullcontact.com/developer/docs/location/)

<a name="LocationAPI+normalize"></a>

### locationAPI.normalize([opts={
 place,
 includeZeroPopulation,
 casing
}]) ⇒ <code>Promise</code>
Normalizes a location.

**Kind**: instance method of <code>[LocationAPI](#LocationAPI)</code>  

| Param | Type |
| --- | --- |
| [opts={
 place,
 includeZeroPopulation,
 casing
}] | <code>Object</code> | 

<a name="LocationAPI+enrich"></a>

### locationAPI.enrich([opts={
 place,
 includeZeroPopulation,
 casing 
}]) ⇒ <code>Promise</code>
Enriches a location.

**Kind**: instance method of <code>[LocationAPI](#LocationAPI)</code>  

| Param | Type |
| --- | --- |
| [opts={
 place,
 includeZeroPopulation,
 casing 
}] | <code>Object</code> | 

<a name="LocationAPI.LocationAPI"></a>

### LocationAPI.LocationAPI
**Kind**: static class of <code>[LocationAPI](#LocationAPI)</code>  
<a name="new_LocationAPI.LocationAPI_new"></a>

#### new LocationAPI(apiKey)
Creates an instance of LocationAPI.


| Param | Type |
| --- | --- |
| apiKey | <code>String</code> | 

<a name="NameAPI"></a>

## NameAPI ⇐ <code>API.APIKeyBased</code>
**Kind**: global class  
**Extends:** <code>API.APIKeyBased</code>  

* [NameAPI](#NameAPI) ⇐ <code>API.APIKeyBased</code>
    * [new NameAPI()](#new_NameAPI_new)
    * _instance_
        * [.normalize([opts={
 q,
 casing
}])](#NameAPI+normalize) ⇒ <code>Promise</code>
        * [.deduce([opts={
 email,
 username,
 casing
}])](#NameAPI+deduce) ⇒ <code>Promise</code>
        * [.similarity([opts={
 q1,
 q2,
 casing
}])](#NameAPI+similarity) ⇒ <code>Promise</code>
        * [.stats([opts={
 name,
 givenName,
 familyName,
 casing
}])](#NameAPI+stats) ⇒ <code>Promise</code>
        * [.parser([opts={
 q,
 casing
}])](#NameAPI+parser) ⇒ <code>Promise</code>
    * _static_
        * [.NameAPI](#NameAPI.NameAPI)
            * [new NameAPI(apiKey)](#new_NameAPI.NameAPI_new)

<a name="new_NameAPI_new"></a>

### new NameAPI()
Name APIs (https://www.fullcontact.com/developer/docs/name/)

<a name="NameAPI+normalize"></a>

### nameAPI.normalize([opts={
 q,
 casing
}]) ⇒ <code>Promise</code>
Normalizes a name.

**Kind**: instance method of <code>[NameAPI](#NameAPI)</code>  

| Param | Type |
| --- | --- |
| [opts={
 q,
 casing
}] | <code>Object</code> | 

<a name="NameAPI+deduce"></a>

### nameAPI.deduce([opts={
 email,
 username,
 casing
}]) ⇒ <code>Promise</code>
Deduces a name

**Kind**: instance method of <code>[NameAPI](#NameAPI)</code>  

| Param | Type |
| --- | --- |
| [opts={
 email,
 username,
 casing
}] | <code>Object</code> | 

<a name="NameAPI+similarity"></a>

### nameAPI.similarity([opts={
 q1,
 q2,
 casing
}]) ⇒ <code>Promise</code>
Compares two names to see how similar they are.

**Kind**: instance method of <code>[NameAPI](#NameAPI)</code>  

| Param | Type |
| --- | --- |
| [opts={
 q1,
 q2,
 casing
}] | <code>Object</code> | 

<a name="NameAPI+stats"></a>

### nameAPI.stats([opts={
 name,
 givenName,
 familyName,
 casing
}]) ⇒ <code>Promise</code>
Gets stats on a name.

**Kind**: instance method of <code>[NameAPI](#NameAPI)</code>  

| Param | Type |
| --- | --- |
| [opts={
 name,
 givenName,
 familyName,
 casing
}] | <code>Object</code> | 

<a name="NameAPI+parser"></a>

### nameAPI.parser([opts={
 q,
 casing
}]) ⇒ <code>Promise</code>
Parses a name

**Kind**: instance method of <code>[NameAPI](#NameAPI)</code>  

| Param | Type |
| --- | --- |
| [opts={
 q,
 casing
}] | <code>Object</code> | 

<a name="NameAPI.NameAPI"></a>

### NameAPI.NameAPI
**Kind**: static class of <code>[NameAPI](#NameAPI)</code>  
<a name="new_NameAPI.NameAPI_new"></a>

#### new NameAPI(apiKey)
Creates an instance of NameAPI.


| Param | Type |
| --- | --- |
| apiKey | <code>String</code> | 

<a name="PersonAPI"></a>

## PersonAPI ⇐ <code>API.APIKeyBased</code>
**Kind**: global class  
**Extends:** <code>API.APIKeyBased</code>  

* [PersonAPI](#PersonAPI) ⇐ <code>API.APIKeyBased</code>
    * [new PersonAPI()](#new_PersonAPI_new)
    * _instance_
        * [.lookup([opts={
 email,
 emailMD5,
 emailSHA256,
 prettyPrint,
 webhookUrl
 webhookId,
 webhookBody,
 macromeasures
}])](#PersonAPI+lookup) ⇒ <code>Promise</code>
    * _static_
        * [.PersonAPI](#PersonAPI.PersonAPI)
            * [new PersonAPI(apiKey)](#new_PersonAPI.PersonAPI_new)

<a name="new_PersonAPI_new"></a>

### new PersonAPI()
Person APIs (https://www.fullcontact.com/developer/docs/person/)

<a name="PersonAPI+lookup"></a>

### personAPI.lookup([opts={
 email,
 emailMD5,
 emailSHA256,
 prettyPrint,
 webhookUrl
 webhookId,
 webhookBody,
 macromeasures
}]) ⇒ <code>Promise</code>
Looks up a person by email, phone or twitter.

**Kind**: instance method of <code>[PersonAPI](#PersonAPI)</code>  

| Param | Type |
| --- | --- |
| [opts={
 email,
 emailMD5,
 emailSHA256,
 prettyPrint,
 webhookUrl
 webhookId,
 webhookBody,
 macromeasures
}] | <code>Object</code> | 

<a name="PersonAPI.PersonAPI"></a>

### PersonAPI.PersonAPI
**Kind**: static class of <code>[PersonAPI](#PersonAPI)</code>  
<a name="new_PersonAPI.PersonAPI_new"></a>

#### new PersonAPI(apiKey)
Creates an instance of PersonAPI.


| Param | Type |
| --- | --- |
| apiKey | <code>String</code> | 

<a name="StatsAPI"></a>

## StatsAPI ⇐ <code>API.APIKeyBased</code>
**Kind**: global class  
**Extends:** <code>API.APIKeyBased</code>  

* [StatsAPI](#StatsAPI) ⇐ <code>API.APIKeyBased</code>
    * [new StatsAPI()](#new_StatsAPI_new)
    * _instance_
        * [.get([opts={
 period
}])](#StatsAPI+get) ⇒ <code>Promise</code>
    * _static_
        * [.StatsAPI](#StatsAPI.StatsAPI)
            * [new StatsAPI(apiKey)](#new_StatsAPI.StatsAPI_new)

<a name="new_StatsAPI_new"></a>

### new StatsAPI()
Stats APIs (https://www.fullcontact.com/developer/docs/account-stats/)

<a name="StatsAPI+get"></a>

### statsAPI.get([opts={
 period
}]) ⇒ <code>Promise</code>
Gets APIKey Stats

**Kind**: instance method of <code>[StatsAPI](#StatsAPI)</code>  

| Param | Type |
| --- | --- |
| [opts={
 period
}] | <code>Object</code> | 

<a name="StatsAPI.StatsAPI"></a>

### StatsAPI.StatsAPI
**Kind**: static class of <code>[StatsAPI](#StatsAPI)</code>  
<a name="new_StatsAPI.StatsAPI_new"></a>

#### new StatsAPI(apiKey)
Creates an instance of StatsAPI.


| Param | Type |
| --- | --- |
| apiKey | <code>String</code> | 

<a name="AccountAPI"></a>

## AccountAPI ⇐ <code>API.OAuthBased</code>
**Kind**: global class  
**Extends:** <code>API.OAuthBased</code>  

* [AccountAPI](#AccountAPI) ⇐ <code>API.OAuthBased</code>
    * [new AccountAPI()](#new_AccountAPI_new)
    * _instance_
        * [.get(accessToken)](#AccountAPI+get) ⇒ <code>Promise</code>
    * _static_
        * [.AccountAPI](#AccountAPI.AccountAPI)
            * [new AccountAPI()](#new_AccountAPI.AccountAPI_new)

<a name="new_AccountAPI_new"></a>

### new AccountAPI()
Account APIs (https://api.fullcontact.com/v3/docs/methods/account.get)

<a name="AccountAPI+get"></a>

### accountAPI.get(accessToken) ⇒ <code>Promise</code>
Gets account information for the given accessToken.
REQUIRED SCOPE: account.read

**Kind**: instance method of <code>[AccountAPI](#AccountAPI)</code>  

| Param | Type |
| --- | --- |
| accessToken | <code>String</code> | 

<a name="AccountAPI.AccountAPI"></a>

### AccountAPI.AccountAPI
**Kind**: static class of <code>[AccountAPI](#AccountAPI)</code>  
<a name="new_AccountAPI.AccountAPI_new"></a>

#### new AccountAPI()
Creates an instance of AccountAPI.

<a name="ContactsAPI"></a>

## ContactsAPI ⇐ <code>API.OAuthBased</code>
**Kind**: global class  
**Extends:** <code>API.OAuthBased</code>  

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
Gets contacts (https://api.fullcontact.com/v3/docs/methods/contacts.get)
REQUIRED SCOPE: contacts.read

**Kind**: instance method of <code>[ContactsAPI](#ContactsAPI)</code>  

| Param | Type |
| --- | --- |
| accessToken | <code>String</code> | 
| body | <code>Object</code> | 

<a name="ContactsAPI+scroll"></a>

### contactsAPI.scroll(accessToken, body) ⇒ <code>Promise</code>
Scrolls a list of contacts (https://api.fullcontact.com/v3/docs/methods/contacts.scroll)
REQUIRED SCOPE: contacts.read

**Kind**: instance method of <code>[ContactsAPI](#ContactsAPI)</code>  

| Param | Type |
| --- | --- |
| accessToken | <code>String</code> | 
| body | <code>Object</code> | 

<a name="ContactsAPI+search"></a>

### contactsAPI.search(accessToken, body) ⇒ <code>Promise</code>
Searches for contacts (https://api.fullcontact.com/v3/docs/methods/contacts.search)
REQUIRED SCOPE: contacts.read

**Kind**: instance method of <code>[ContactsAPI](#ContactsAPI)</code>  

| Param | Type |
| --- | --- |
| accessToken | <code>String</code> | 
| body | <code>Object</code> | 

<a name="ContactsAPI+create"></a>

### contactsAPI.create(accessToken, body) ⇒ <code>Promise</code>
Creates a new contact (https://api.fullcontact.com/v3/docs/methods/contacts.create)
REQUIRED SCOPE: contacts.write

**Kind**: instance method of <code>[ContactsAPI](#ContactsAPI)</code>  

| Param | Type |
| --- | --- |
| accessToken | <code>String</code> | 
| body | <code>Object</code> | 

<a name="ContactsAPI+update"></a>

### contactsAPI.update(accessToken, body) ⇒ <code>Promise</code>
Updates a contact (https://api.fullcontact.com/v3/docs/methods/contacts.update)
REQUIRED SCOPE: contacts.write

**Kind**: instance method of <code>[ContactsAPI](#ContactsAPI)</code>  

| Param | Type |
| --- | --- |
| accessToken | <code>String</code> | 
| body | <code>Object</code> | 

<a name="ContactsAPI+manageTags"></a>

### contactsAPI.manageTags(accessToken, body) ⇒ <code>Promise</code>
Manages tags for a contact (https://api.fullcontact.com/v3/docs/methods/contacts.manageTags)
REQUIRED SCOPE: contacts.write

**Kind**: instance method of <code>[ContactsAPI](#ContactsAPI)</code>  

| Param | Type |
| --- | --- |
| accessToken | <code>String</code> | 
| body | <code>Object</code> | 

<a name="ContactsAPI+uploadPhoto"></a>

### contactsAPI.uploadPhoto(accessToken, contact, buffer) ⇒ <code>Promise</code>
Uploads a contact photo (https://api.fullcontact.com/v3/docs/methods/contacts.uploadPhoto)
REQUIRED SCOPE: contacts.write

**Kind**: instance method of <code>[ContactsAPI](#ContactsAPI)</code>  

| Param | Type |
| --- | --- |
| accessToken | <code>String</code> | 
| contact | <code>Object</code> | 
| buffer | <code>Buffer</code> | 

<a name="ContactsAPI+del"></a>

### contactsAPI.del(accessToken, body) ⇒ <code>Promise</code>
Deletes a contact (https://api.fullcontact.com/v3/docs/methods/contacts.delete)
REQUIRED SCOPE: contacts.write

**Kind**: instance method of <code>[ContactsAPI](#ContactsAPI)</code>  

| Param | Type |
| --- | --- |
| accessToken | <code>String</code> | 
| body | <code>Object</code> | 

<a name="ContactsAPI.ContactsAPI"></a>

### ContactsAPI.ContactsAPI
**Kind**: static class of <code>[ContactsAPI](#ContactsAPI)</code>  
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
    * _static_
        * [.V3](#V3.V3)
            * [new V3()](#new_V3.V3_new)

<a name="new_V3_new"></a>

### new V3()
V3 APIs

<a name="V3+account"></a>

### v3.account
Gets Account APIs

**Kind**: instance property of <code>[V3](#V3)</code>  
**Read only**: true  
<a name="V3+contacts"></a>

### v3.contacts
Gets Contacts APIs

**Kind**: instance property of <code>[V3](#V3)</code>  
**Read only**: true  
<a name="V3+tags"></a>

### v3.tags
Gets Tags APIs

**Kind**: instance property of <code>[V3](#V3)</code>  
**Read only**: true  
<a name="V3+webhooks"></a>

### v3.webhooks
Gets Webhooks APIs

**Kind**: instance property of <code>[V3](#V3)</code>  
**Read only**: true  
<a name="V3.V3"></a>

### V3.V3
**Kind**: static class of <code>[V3](#V3)</code>  
<a name="new_V3.V3_new"></a>

#### new V3()
Creates an instance of V3.

<a name="TagsAPI"></a>

## TagsAPI ⇐ <code>API.OAuthBased</code>
**Kind**: global class  
**Extends:** <code>API.OAuthBased</code>  

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
Gets tags (https://api.fullcontact.com/v3/docs/methods/tags.get)
REQUIRED SCOPE: tags.read

**Kind**: instance method of <code>[TagsAPI](#TagsAPI)</code>  

| Param | Type |
| --- | --- |
| accessToken | <code>String</code> | 
| body | <code>Object</code> | 

<a name="TagsAPI+scroll"></a>

### tagsAPI.scroll(accessToken, body) ⇒ <code>Promise</code>
Scrolls a list of tags (https://api.fullcontact.com/v3/docs/methods/tags.scroll)
REQUIRED SCOPE: tags.read

**Kind**: instance method of <code>[TagsAPI](#TagsAPI)</code>  

| Param | Type |
| --- | --- |
| accessToken | <code>String</code> | 
| body | <code>Object</code> | 

<a name="TagsAPI+create"></a>

### tagsAPI.create(accessToken, body) ⇒ <code>Promise</code>
Creates a tag (https://api.fullcontact.com/v3/docs/methods/tags.create)
REQUIRED SCOPE: tags.write

**Kind**: instance method of <code>[TagsAPI](#TagsAPI)</code>  

| Param | Type |
| --- | --- |
| accessToken | <code>String</code> | 
| body | <code>Object</code> | 

<a name="TagsAPI+update"></a>

### tagsAPI.update(accessToken, body) ⇒ <code>Promise</code>
Updates a tag(https://api.fullcontact.com/v3/docs/methods/tags.update)
REQUIRED SCOPE: tags.write

**Kind**: instance method of <code>[TagsAPI](#TagsAPI)</code>  

| Param | Type |
| --- | --- |
| accessToken | <code>String</code> | 
| body | <code>Object</code> | 

<a name="TagsAPI+del"></a>

### tagsAPI.del(accessToken, body) ⇒ <code>Promise</code>
Deletes a tag (https://api.fullcontact.com/v3/docs/methods/tags.delete)
REQUIRED SCOPE: tags.write

**Kind**: instance method of <code>[TagsAPI](#TagsAPI)</code>  

| Param | Type |
| --- | --- |
| accessToken | <code>String</code> | 
| body | <code>Object</code> | 

<a name="TagsAPI.TagsAPI"></a>

### TagsAPI.TagsAPI
**Kind**: static class of <code>[TagsAPI](#TagsAPI)</code>  
<a name="new_TagsAPI.TagsAPI_new"></a>

#### new TagsAPI()
Creates an instance of TagsAPI.

<a name="WebhooksAPI"></a>

## WebhooksAPI ⇐ <code>API.OAuthBased</code>
**Kind**: global class  
**Extends:** <code>API.OAuthBased</code>  

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
Creates a webhook (https://api.fullcontact.com/v3/docs/methods/webhooks.create
REQUIRED SCOPE: webhooks.write

**Kind**: instance method of <code>[WebhooksAPI](#WebhooksAPI)</code>  

| Param | Type |
| --- | --- |
| accessToken | <code>String</code> | 
| body | <code>Object</code> | 

<a name="WebhooksAPI+getTriggers"></a>

### webhooksAPI.getTriggers(accessToken, body) ⇒ <code>Promise</code>
Gets a list of triggers for a webhook (https://api.fullcontact.com/v3/docs/methods/webhooks.getTriggers)
REQUIRED SCOPE: webhooks.read

**Kind**: instance method of <code>[WebhooksAPI](#WebhooksAPI)</code>  

| Param | Type |
| --- | --- |
| accessToken | <code>String</code> | 
| body | <code>Object</code> | 

<a name="WebhooksAPI+get"></a>

### webhooksAPI.get(accessToken, body) ⇒ <code>Promise</code>
Gets a webhook (https://api.fullcontact.com/v3/docs/methods/webhooks.get)
REQUIRED SCOPE: webhooks.read

**Kind**: instance method of <code>[WebhooksAPI](#WebhooksAPI)</code>  

| Param | Type |
| --- | --- |
| accessToken | <code>String</code> | 
| body | <code>Object</code> | 

<a name="WebhooksAPI+search"></a>

### webhooksAPI.search(accessToken, body) ⇒ <code>Promise</code>
Searches webhooks(https://api.fullcontact.com/v3/docs/methods/webhooks.search)
REQUIRED SCOPE: webhooks.read

**Kind**: instance method of <code>[WebhooksAPI](#WebhooksAPI)</code>  

| Param | Type |
| --- | --- |
| accessToken | <code>String</code> | 
| body | <code>Object</code> | 

<a name="WebhooksAPI+getBatches"></a>

### webhooksAPI.getBatches(accessToken, body) ⇒ <code>Promise</code>
Gets batches for a webhook (https://api.fullcontact.com/v3/docs/methods/webhooks.getBatches)
REQUIRED SCOPE: webhooks.read

**Kind**: instance method of <code>[WebhooksAPI](#WebhooksAPI)</code>  

| Param | Type |
| --- | --- |
| accessToken | <code>String</code> | 
| body | <code>Object</code> | 

<a name="WebhooksAPI+del"></a>

### webhooksAPI.del(accessToken, body) ⇒ <code>Promise</code>
Deletes a webhook (https://api.fullcontact.com/v3/docs/methods/webhooks.delete)
REQUIRED SCOPE: webhooks.write

**Kind**: instance method of <code>[WebhooksAPI](#WebhooksAPI)</code>  

| Param | Type |
| --- | --- |
| accessToken | <code>String</code> | 
| body | <code>Object</code> | 

<a name="WebhooksAPI.WebhooksAPI"></a>

### WebhooksAPI.WebhooksAPI
**Kind**: static class of <code>[WebhooksAPI](#WebhooksAPI)</code>  
<a name="new_WebhooksAPI.WebhooksAPI_new"></a>

#### new WebhooksAPI()
Creates an instance of WebhooksAPI.

