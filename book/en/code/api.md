## Modules

<dl>
<dt><a href="#module_route4me-node">route4me-node</a></dt>
<dd></dd>
<dt><a href="#module_route4me-node/utils">route4me-node/utils</a></dt>
<dd></dd>
</dl>

## Classes

<dl>
<dt><a href="#Route4MeError">Route4MeError</a></dt>
<dd><p>The base type for all error-objects of this SDK</p>
</dd>
<dt><a href="#Route4MeApiError">Route4MeApiError</a></dt>
<dd><p>Error received from the API-server</p>
</dd>
<dt><a href="#Route4MeValidationError">Route4MeValidationError</a></dt>
<dd><p>Error occured during internal validation</p>
</dd>
<dt><a href="#RequestManager">RequestManager</a></dt>
<dd><p>Request manager, provides</p>
<ul>
<li>simple API for sending HTTP requests</li>
<li>a way to handle HTTP responses</li>
</ul>
</dd>
<dt><a href="#Route4Me">Route4Me</a></dt>
<dd><p>Route4Me main SDK class</p>
</dd>
</dl>

## Objects

<dl>
<dt><a href="#ActivityFeed">ActivityFeed</a> : <code>object</code></dt>
<dd><p>ActivityFeed facility</p>
</dd>
<dt><a href="#AddressBook">AddressBook</a> : <code>object</code></dt>
<dd><p>AddressBook facility</p>
</dd>
<dt><a href="#Addresses">Addresses</a> : <code>object</code></dt>
<dd><p>Addresses facility</p>
</dd>
<dt><a href="#AvoidanceZones">AvoidanceZones</a> : <code>object</code></dt>
<dd><p>AvoidanceZones facility</p>
</dd>
<dt><a href="#Geocoding">Geocoding</a> : <code>object</code></dt>
<dd><p>Geocoding facility</p>
</dd>
<dt><a href="#Members">Members</a> : <code>object</code></dt>
<dd><p>Members facility</p>
</dd>
<dt><a href="#Notes">Notes</a> : <code>object</code></dt>
<dd><p>Notes facility</p>
</dd>
<dt><a href="#Optimizations">Optimizations</a> : <code>object</code></dt>
<dd><p>Optimizations facility</p>
</dd>
<dt><a href="#Orders">Orders</a> : <code>object</code></dt>
<dd><p>Orders facility</p>
</dd>
<dt><a href="#Routes">Routes</a> : <code>object</code></dt>
<dd><p>Routes facility</p>
</dd>
<dt><a href="#Territories">Territories</a> : <code>object</code></dt>
<dd><p>Territories facility</p>
</dd>
<dt><a href="#Tracking">Tracking</a> : <code>object</code></dt>
<dd><p>Tracking facility</p>
</dd>
<dt><a href="#Vehicles">Vehicles</a> : <code>object</code></dt>
<dd><p>Vehicles facility</p>
</dd>
</dl>

<a name="module_route4me-node"></a>

## route4me-node

* [route4me-node](#module_route4me-node)
    * [.Route4Me](#module_route4me-node.Route4Me) : <code>[Route4Me](#Route4Me)</code>
    * [.Route4MeError](#module_route4me-node.Route4MeError) : <code>[Route4MeError](#Route4MeError)</code>
    * [.Route4MeApiError](#module_route4me-node.Route4MeApiError) : <code>[Route4MeApiError](#Route4MeApiError)</code>
    * [.Route4MeValidationError](#module_route4me-node.Route4MeValidationError) : <code>[Route4MeValidationError](#Route4MeValidationError)</code>

<a name="module_route4me-node.Route4Me"></a>

### route4me-node.Route4Me : <code>[Route4Me](#Route4Me)</code>
**Kind**: static property of <code>[route4me-node](#module_route4me-node)</code>  
<a name="module_route4me-node.Route4MeError"></a>

### route4me-node.Route4MeError : <code>[Route4MeError](#Route4MeError)</code>
**Kind**: static property of <code>[route4me-node](#module_route4me-node)</code>  
<a name="module_route4me-node.Route4MeApiError"></a>

### route4me-node.Route4MeApiError : <code>[Route4MeApiError](#Route4MeApiError)</code>
**Kind**: static property of <code>[route4me-node](#module_route4me-node)</code>  
<a name="module_route4me-node.Route4MeValidationError"></a>

### route4me-node.Route4MeValidationError : <code>[Route4MeValidationError](#Route4MeValidationError)</code>
**Kind**: static property of <code>[route4me-node](#module_route4me-node)</code>  
<a name="module_route4me-node/utils"></a>

## route4me-node/utils
**Access:** protected  

* [route4me-node/utils](#module_route4me-node/utils)
    * [~ILogger](#module_route4me-node/utils..ILogger)
        * [.debug([arg])](#module_route4me-node/utils..ILogger+debug)
        * [.info([arg])](#module_route4me-node/utils..ILogger+info)
        * [.warn([arg])](#module_route4me-node/utils..ILogger+warn)
        * [.error([arg])](#module_route4me-node/utils..ILogger+error)
    * [~clone(obj)](#module_route4me-node/utils..clone) ⇒ <code>any</code>

<a name="module_route4me-node/utils..ILogger"></a>

### route4me-node/utils~ILogger
ILogger interface

**Kind**: inner interface of <code>[route4me-node/utils](#module_route4me-node/utils)</code>  
**Access:** public  

* [~ILogger](#module_route4me-node/utils..ILogger)
    * [.debug([arg])](#module_route4me-node/utils..ILogger+debug)
    * [.info([arg])](#module_route4me-node/utils..ILogger+info)
    * [.warn([arg])](#module_route4me-node/utils..ILogger+warn)
    * [.error([arg])](#module_route4me-node/utils..ILogger+error)

<a name="module_route4me-node/utils..ILogger+debug"></a>

#### iLogger.debug([arg])
Debug

**Kind**: instance method of <code>[ILogger](#module_route4me-node/utils..ILogger)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [arg] | <code>[LoggerParams](#ILogger..LoggerParams)</code> &#124; <code>Error</code> &#124; <code>string</code> | Something to log |

<a name="module_route4me-node/utils..ILogger+info"></a>

#### iLogger.info([arg])
Info

**Kind**: instance method of <code>[ILogger](#module_route4me-node/utils..ILogger)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [arg] | <code>[LoggerParams](#ILogger..LoggerParams)</code> &#124; <code>Error</code> &#124; <code>string</code> | Something to log |

<a name="module_route4me-node/utils..ILogger+warn"></a>

#### iLogger.warn([arg])
Warning

**Kind**: instance method of <code>[ILogger](#module_route4me-node/utils..ILogger)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [arg] | <code>[LoggerParams](#ILogger..LoggerParams)</code> &#124; <code>Error</code> &#124; <code>string</code> | Something to log |

<a name="module_route4me-node/utils..ILogger+error"></a>

#### iLogger.error([arg])
Error

**Kind**: instance method of <code>[ILogger](#module_route4me-node/utils..ILogger)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [arg] | <code>[LoggerParams](#ILogger..LoggerParams)</code> &#124; <code>Error</code> &#124; <code>string</code> | Something to log |

<a name="module_route4me-node/utils..clone"></a>

### route4me-node/utils~clone(obj) ⇒ <code>any</code>
Deep clone an object

**Kind**: inner method of <code>[route4me-node/utils](#module_route4me-node/utils)</code>  
**Returns**: <code>any</code> - - The deep copy of an object  
**Access:** protected  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>any</code> | Original object |

<a name="Route4MeError"></a>

## Route4MeError
The base type for all error-objects of this SDK

**Kind**: global class  
<a name="new_Route4MeError_new"></a>

### new Route4MeError(msg, innerError)
Create Route4MeError


| Param | Type | Description |
| --- | --- | --- |
| msg | <code>string</code> | [description] |
| innerError | <code>Error</code> | [description] |

<a name="Route4MeApiError"></a>

## Route4MeApiError
Error received from the API-server

**Kind**: global class  
<a name="new_Route4MeApiError_new"></a>

### new Route4MeApiError(msg, res, innerError)
Create Route4MeApiError


| Param | Type | Description |
| --- | --- | --- |
| msg | <code>string</code> | [description] |
| res | <code>Object</code> | [description] |
| innerError | <code>Error</code> | [description] |

<a name="Route4MeValidationError"></a>

## Route4MeValidationError
Error occured during internal validation

**Kind**: global class  

* [Route4MeValidationError](#Route4MeValidationError)
    * [new Route4MeValidationError(msg, data, innerError)](#new_Route4MeValidationError_new)
    * [.data](#Route4MeValidationError+data) : <code>\*</code>

<a name="new_Route4MeValidationError_new"></a>

### new Route4MeValidationError(msg, data, innerError)
Create Route4MeValidationError


| Param | Type | Description |
| --- | --- | --- |
| msg | <code>string</code> | Message |
| data | <code>\*</code> | Data under consideration |
| innerError | <code>Error</code> | Error, caused this error |

<a name="Route4MeValidationError+data"></a>

### route4MeValidationError.data : <code>\*</code>
Data under consideration

**Kind**: instance property of <code>[Route4MeValidationError](#Route4MeValidationError)</code>  
<a name="RequestManager"></a>

## RequestManager
Request manager, provides
* simple API for sending HTTP requests
* a way to handle HTTP responses

**Kind**: global class  
**Access:** protected  
**Since**: 0.1.0  

* [RequestManager](#RequestManager)
    * [new RequestManager(apiKey, options)](#new_RequestManager_new)
    * [._makeRequest(options, [callback])](#RequestManager+_makeRequest)
    * [._makeError(error, [callback])](#RequestManager+_makeError)

<a name="new_RequestManager_new"></a>

### new RequestManager(apiKey, options)
Query API. All parameters are inherited from {Route4Me}


| Param | Type | Description |
| --- | --- | --- |
| apiKey | <code>object</code> | see {Route4Me} |
| options | <code>object</code> | see {Route4Me} |

<a name="RequestManager+_makeRequest"></a>

### requestManager._makeRequest(options, [callback])
Wrapper around [external:superagent](external:superagent) with all options applied.

**Kind**: instance method of <code>[RequestManager](#RequestManager)</code>  
**Access:** protected  
**Todo**

- [ ] TODO: rename this method!!!


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>object</code> |  | Request options |
| options.method | <code>string</code> |  | HTTP method |
| options.path | <code>string</code> |  | Server path |
| [options.qs] | <code>object</code> |  | Query string |
| [options.body] | <code>object</code> |  | Body |
| [options.validationContext] | <code>null</code> &#124; <code>string</code> &#124; <code>function</code> | <code></code> | * `null` cause validation disabled (TODO: test this case) * `string` is threated as the name of JSON Schema * `function` will be used for validation. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |  |

<a name="RequestManager+_makeError"></a>

### requestManager._makeError(error, [callback])
Early cancel request

**Kind**: instance method of <code>[RequestManager](#RequestManager)</code>  
**Todo**

- [ ] TODO: rename this method!!!
- [ ] TODO: write documentation


| Param | Type | Description |
| --- | --- | --- |
| error | <code>Error</code> | The reason the request was cancelled. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a name="Route4Me"></a>

## Route4Me
Route4Me main SDK class

**Kind**: global class  

* [Route4Me](#Route4Me)
    * [new Route4Me(apiKey, [options])](#new_Route4Me_new)
    * _instance_
        * [.ActivityFeed](#Route4Me+ActivityFeed) : <code>[ActivityFeed](#ActivityFeed)</code>
        * [.AddressBook](#Route4Me+AddressBook) : <code>[AddressBook](#AddressBook)</code>
        * [.Addresses](#Route4Me+Addresses) : <code>[Addresses](#Addresses)</code>
        * [.AvoidanceZones](#Route4Me+AvoidanceZones) : <code>[AvoidanceZones](#AvoidanceZones)</code>
        * [.Geocoding](#Route4Me+Geocoding) : <code>[Geocoding](#Geocoding)</code>
        * [.Notes](#Route4Me+Notes) : <code>[Notes](#Notes)</code>
        * [.Optimizations](#Route4Me+Optimizations) : <code>[Optimizations](#Optimizations)</code>
        * [.Orders](#Route4Me+Orders) : <code>[Orders](#Orders)</code>
        * [.Routes](#Route4Me+Routes) : <code>[Routes](#Routes)</code>
        * [.Territories](#Route4Me+Territories) : <code>[Territories](#Territories)</code>
        * [.Tracking](#Route4Me+Tracking) : <code>[Tracking](#Tracking)</code>
        * [.Vehicles](#Route4Me+Vehicles) : <code>[Vehicles](#Vehicles)</code>
    * _static_
        * [.version](#Route4Me.version) ⇒ <code>string</code>

<a name="new_Route4Me_new"></a>

### new Route4Me(apiKey, [options])
Create new API client


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| apiKey | <code>string</code> |  | API KEY |
| [options] | <code>object</code> |  | Additional options for new instance |
| [options.baseUrl] | <code>string</code> | <code>&quot;\&quot;https://route4me.com\&quot;&quot;</code> | Base URL for sending requests |
| [options.logger] | <code>ILogger</code> | <code></code> | Logger facility |
| [options.promise] | <code>boolean</code> &#124; <code>function</code> | <code>false</code> | Use promises instead of callbacks. Usage: * `false` means _no promises, use callbacks_; * `true` means _use global `Promise`_ as promises' constructor; * `constructor (function)` forces to use explicit Promise library. See also Examples section of this documentation. |
| [options.validate] | <code>module:route4me-node~ValidationCallback</code> | <code>false</code> | Validator for input and output parameters of the API methods. Set **falsey** value to skip autovalidation (in favor of manual check). |

<a name="Route4Me+ActivityFeed"></a>

### route4Me.ActivityFeed : <code>[ActivityFeed](#ActivityFeed)</code>
**ActivityFeed** related API calls

**Kind**: instance property of <code>[Route4Me](#Route4Me)</code>  
**Since**: 0.1.12  
<a name="Route4Me+AddressBook"></a>

### route4Me.AddressBook : <code>[AddressBook](#AddressBook)</code>
**AddressBook** related API calls

**Kind**: instance property of <code>[Route4Me](#Route4Me)</code>  
**Since**: 0.1.8  
<a name="Route4Me+Addresses"></a>

### route4Me.Addresses : <code>[Addresses](#Addresses)</code>
**Addresses** related API calls

**Kind**: instance property of <code>[Route4Me](#Route4Me)</code>  
**Since**: 0.1.8  
<a name="Route4Me+AvoidanceZones"></a>

### route4Me.AvoidanceZones : <code>[AvoidanceZones](#AvoidanceZones)</code>
**AvoidanceZones** related API calls

**Kind**: instance property of <code>[Route4Me](#Route4Me)</code>  
**Since**: 0.1.8  
<a name="Route4Me+Geocoding"></a>

### route4Me.Geocoding : <code>[Geocoding](#Geocoding)</code>
**Geocoding** related API calls

**Kind**: instance property of <code>[Route4Me](#Route4Me)</code>  
**Since**: 0.1.9  
<a name="Route4Me+Notes"></a>

### route4Me.Notes : <code>[Notes](#Notes)</code>
**Notes** related API calls

**Kind**: instance property of <code>[Route4Me](#Route4Me)</code>  
**Since**: 0.1.9  
<a name="Route4Me+Optimizations"></a>

### route4Me.Optimizations : <code>[Optimizations](#Optimizations)</code>
**Optimizations** related API calls

**Kind**: instance property of <code>[Route4Me](#Route4Me)</code>  
<a name="Route4Me+Orders"></a>

### route4Me.Orders : <code>[Orders](#Orders)</code>
**Orders** related API calls

**Kind**: instance property of <code>[Route4Me](#Route4Me)</code>  
<a name="Route4Me+Routes"></a>

### route4Me.Routes : <code>[Routes](#Routes)</code>
**Routes** related API calls

**Kind**: instance property of <code>[Route4Me](#Route4Me)</code>  
**Since**: 0.1.8  
<a name="Route4Me+Territories"></a>

### route4Me.Territories : <code>[Territories](#Territories)</code>
**Territories** related API calls

**Kind**: instance property of <code>[Route4Me](#Route4Me)</code>  
<a name="Route4Me+Tracking"></a>

### route4Me.Tracking : <code>[Tracking](#Tracking)</code>
**Tracking** related API calls

**Kind**: instance property of <code>[Route4Me](#Route4Me)</code>  
<a name="Route4Me+Vehicles"></a>

### route4Me.Vehicles : <code>[Vehicles](#Vehicles)</code>
**Vehicles** related API calls

**Kind**: instance property of <code>[Route4Me](#Route4Me)</code>  
<a name="Route4Me.version"></a>

### Route4Me.version ⇒ <code>string</code>
Version of this API client

**Kind**: static property of <code>[Route4Me](#Route4Me)</code>  
**Returns**: <code>string</code> - Version  
**Read only**: true  
**Since**: 0.1.3  
<a name="ActivityFeed"></a>

## ActivityFeed : <code>object</code>
ActivityFeed facility

**Kind**: global namespace  

| Param | Type | Description |
| --- | --- | --- |
| route4me | <code>[RequestManager](#RequestManager)</code> | Request Manager |


* [ActivityFeed](#ActivityFeed) : <code>object</code>
    * [.ActivityTypeEnum](#ActivityFeed+ActivityTypeEnum)
    * _ActivityFeed_
        * [.create(data, [callback])](#ActivityFeed+create)
        * [.list(criteria, options, [callback])](#ActivityFeed+list)

<a name="ActivityFeed+ActivityTypeEnum"></a>

### activityFeed.ActivityTypeEnum
Enumerable of all known activity type

**Kind**: instance property of <code>[ActivityFeed](#ActivityFeed)</code>  
**Todo**

- [ ] TODO: move to PACKAGE level (to make it easier for usage) see [https://github.com/route4me/route4me-nodejs-sdk/issues/40](https://github.com/route4me/route4me-nodejs-sdk/issues/40)

<a name="ActivityFeed+create"></a>

### activityFeed.create(data, [callback])
Log a Specific Message

This example demonstrates how to permanently store a specific message
directly to the activity feed. For example, this can be used for one or
two-way chat.

**The created activity will have `activityType === "user_message"`**

**Kind**: instance method of <code>[ActivityFeed](#ActivityFeed)</code>  
**Category**: ActivityFeed  
**See**: [https://route4me.io/docs/#log-a-specific-message](https://route4me.io/docs/#log-a-specific-message)  
**Since**: 0.1.12  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Activity Feed item |
| data.routeId | <code>string</code> | Route ID |
| data.message | <code>string</code> | A message text for logging into the activity feed |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a name="ActivityFeed+list"></a>

### activityFeed.list(criteria, options, [callback])
Log a Specific Message

This example demonstrates how to permanently store a specific message
directly to the activity feed. For example, this can be used for one or
two-way chat.

**Kind**: instance method of <code>[ActivityFeed](#ActivityFeed)</code>  
**Category**: ActivityFeed  
**See**: [https://route4me.io/docs/#log-a-specific-message](https://route4me.io/docs/#log-a-specific-message)  
**Since**: 0.1.12  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| criteria | <code>string</code> &#124; <code>Object</code> |  | Criteria for event filter. Depending on type will be considered as: * `string` - criteria is a string representation of [Activity type]{@linkcode ActivityTypeEnum} * `Object` - criteria is a set of filters, see below |
| [criteria.activityType] | <code>string</code> |  | [Activity type]{@linkcode ActivityTypeEnum} |
| [criteria.routeId] | <code>string</code> |  | Route ID |
| options | <code>Object</code> |  | Options for activity search |
| [options.limit] | <code>number</code> |  | List limit |
| [options.offset] | <code>number</code> |  | List offset |
| [options.includeTeamActivities] | <code>boolean</code> | <code>false</code> | Indicate, whether team activities should be included |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:ActivityFeed.ActivityFeedResult&gt;</code> |  |  |

<a name="AddressBook"></a>

## AddressBook : <code>object</code>
AddressBook facility

**Kind**: global namespace  

| Param | Type | Description |
| --- | --- | --- |
| route4me | <code>[Route4Me](#Route4Me)</code> | Route4Me manager |


* [AddressBook](#AddressBook) : <code>object</code>
    * [.create(data, [callback])](#AddressBook+create)
    * [.getMany(ids, [callback])](#AddressBook+getMany)
    * [.list(options, [callback])](#AddressBook+list)
    * [.search(query, options, [callback])](#AddressBook+search)
    * [.update(id, data, [callback])](#AddressBook+update)
    * [.remove(ids, [callback])](#AddressBook+remove)

<a name="AddressBook+create"></a>

### addressBook.create(data, [callback])
Create a new AddressBook.

**Kind**: instance method of <code>[AddressBook](#AddressBook)</code>  
**Category**: AddressBook  
**See**: [https://route4me.io/docs/#create-a-location](https://route4me.io/docs/#create-a-location)  
**Since**: 0.1.8  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>jsonschema:AddressBook.AddressBook</code> | Valid AddressBook data. |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AddressBook.AddressBook&gt;</code> |  |

<a name="AddressBook+getMany"></a>

### addressBook.getMany(ids, [callback])
GET locations from an address book by a specified list of locations IDs.

**Kind**: instance method of <code>[AddressBook](#AddressBook)</code>  
**Category**: AddressBook  
**See**: [https://route4me.io/docs/#get-locations-by-ids](https://route4me.io/docs/#get-locations-by-ids)  
**Since**: 0.1.8  
**Todo**

- [ ] TODO: Parse response
- [ ] TODO: Remove this method in favor of `list` [https://github.com/route4me/route4me-nodejs-sdk/issues/41](https://github.com/route4me/route4me-nodejs-sdk/issues/41)


| Param | Type | Description |
| --- | --- | --- |
| ids | <code>number</code> &#124; <code>string</code> &#124; <code>Array.&lt;number&gt;</code> &#124; <code>Array.&lt;string&gt;</code> | Address IDs (as number, string, CSV-separated string, or an array of numbers, or an array of strings). |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AddressBook.AddressBookSearchResult&gt;</code> |  |

<a name="AddressBook+list"></a>

### addressBook.list(options, [callback])
GET all locations from a user’s address book.

**Kind**: instance method of <code>[AddressBook](#AddressBook)</code>  
**Category**: AddressBook  
**See**: [https://route4me.io/docs/#get-locations](https://route4me.io/docs/#get-locations)  
**Since**: 0.1.8  
**Todo**

- [ ] TODO: Parse response
- [ ] TODO: Describe ALL options (in one place, list+search)


| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | List-parameters |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AddressBook.AddressBookSearchResult&gt;</code> |  |

<a name="AddressBook+search"></a>

### addressBook.search(query, options, [callback])
Search an address book location by containing specified text in any
field/defined fields.

**Kind**: instance method of <code>[AddressBook](#AddressBook)</code>  
**Category**: AddressBook  
**See**

- [https://route4me.io/docs/#get-a-location](https://route4me.io/docs/#get-a-location)
- [https://route4me.io/docs/#location-search](https://route4me.io/docs/#location-search)

**Since**: 0.1.8  
**Todo**

- [ ] TODO: Parse response
- [ ] TODO: Describe ALL options (in one place, list+search)
- [ ] TODO: Handle the diffrerent format of the output (when fields are set,
see https://github.com/route4me/route4me-nodejs-sdk/issues/38)


| Param | Type | Description |
| --- | --- | --- |
| query | <code>string</code> | Searched text |
| options | <code>Object</code> | List-parameters |
| [options.limit] | <code>number</code> | List limit |
| [options.offset] | <code>number</code> | List offset |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AddressBook.AddressBookSearchResult&gt;</code> |  |

<a name="AddressBook+update"></a>

### addressBook.update(id, data, [callback])
UPDATE existing address book location parameters.

**Kind**: instance method of <code>[AddressBook](#AddressBook)</code>  
**Category**: AddressBook  
**See**: [https://route4me.io/docs/#update-a-location](https://route4me.io/docs/#update-a-location)  
**Since**: 0.1.8  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | AddressBook item ID |
| data | <code>jsonschema:AddressBook.AddressBook</code> | Valid AddressBook data. |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AddressBook.AddressBook&gt;</code> |  |

<a name="AddressBook+remove"></a>

### addressBook.remove(ids, [callback])
REMOVE locations from an address book.

**Kind**: instance method of <code>[AddressBook](#AddressBook)</code>  
**Category**: AddressBook  
**See**: [https://route4me.io/docs/#remove-locations](https://route4me.io/docs/#remove-locations)  
**Since**: 0.1.8  
**Todo**

- [ ] TODO: There is no schema for the response
- [ ] TODO: parse the response


| Param | Type | Description |
| --- | --- | --- |
| ids | <code>number</code> &#124; <code>string</code> &#124; <code>Array.&lt;number&gt;</code> &#124; <code>Array.&lt;string&gt;</code> | locations IDs, CSV-string OR one ID as string OR one ID as number OR array of strings/numbers |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;boolean&gt;</code> |  |

**Example**  
```js
SampleResponse = {"status":true}
```
<a name="Addresses"></a>

## Addresses : <code>object</code>
Addresses facility

**Kind**: global namespace  

| Param | Type | Description |
| --- | --- | --- |
| route4me | <code>[Route4Me](#Route4Me)</code> | Route4Me manager |


* [Addresses](#Addresses) : <code>object</code>
    * [.get(id, routeId, [options], [callback])](#Addresses+get)
    * [.updateCustomData(id, routeId, customFields, [callback])](#Addresses+updateCustomData)
    * [.markDetectedDeparted(id, routeId, value, [callback])](#Addresses+markDetectedDeparted)
    * [.markDetectedVisited(id, routeId, value, [callback])](#Addresses+markDetectedVisited)
    * [.markVisited(id, routeId, memberId, value, [callback])](#Addresses+markVisited)
    * [.markDeparted(id, routeId, memberId, value, [callback])](#Addresses+markDeparted)

<a name="Addresses+get"></a>

### addresses.get(id, routeId, [options], [callback])
Get an Address from a Route

Get an address with specified `addressId` from a route with specified `routeId`.

**Kind**: instance method of <code>[Addresses](#Addresses)</code>  
**Category**: Addresses  
**Tag**: Addresses  
**Tag**: Notes  
**See**

- [https://route4me.io/docs/#get-an-address-from-a-route](https://route4me.io/docs/#get-an-address-from-a-route)
- [https://route4me.io/docs/#get-notes](https://route4me.io/docs/#get-notes)

**Since**: 0.1.9  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>number</code> |  | Address ID |
| routeId | <code>string</code> |  | Route ID |
| [options] | <code>Object</code> |  | Additional options for `get` |
| [options.includeNotes] | <code>boolean</code> | <code>false</code> | Aquire address' notes |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Addresses.Address&gt;</code> |  |  |

<a name="Addresses+updateCustomData"></a>

### addresses.updateCustomData(id, routeId, customFields, [callback])
Update custom data of the address (as a route destination).

**Kind**: instance method of <code>[Addresses](#Addresses)</code>  
**Category**: Addresses  
**Tag**: Routes  
**Tag**: Addresses  
**See**: [https://route4me.io/docs/#update-a-route](https://route4me.io/docs/#update-a-route)  
**Since**: 0.1.8  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Address ID |
| routeId | <code>string</code> | Route ID |
| customFields | <code>Object.&lt;string, string&gt;</code> | Any string dictionary |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Addresses.Address&gt;</code> |  |

<a name="Addresses+markDetectedDeparted"></a>

### addresses.markDetectedDeparted(id, routeId, value, [callback])
Mark as Detected as Departed

The example refers to the process of marking an address as Detected as Departed.

This method affects:
* ++ **`is_departed`**
* ++ **`timestamp_last_departed`**

**Kind**: instance method of <code>[Addresses](#Addresses)</code>  
**Category**: Addresses  
**See**: [https://route4me.io/docs/#mark-as-detected-as-departed](https://route4me.io/docs/#mark-as-detected-as-departed)  
**Since**: 0.1.9  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Address ID |
| routeId | <code>string</code> | Route ID |
| value | <code>boolean</code> | Actual value |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;Addresses.Address&gt;</code> |  |

<a name="Addresses+markDetectedVisited"></a>

### addresses.markDetectedVisited(id, routeId, value, [callback])
Mark as Detected as Visited

The example refers to the process of marking an address as Detected as Visited.

This method affects:
* ++ **`is_visited`**
* ++ **`timestamp_last_visited`**

**Kind**: instance method of <code>[Addresses](#Addresses)</code>  
**Category**: Addresses  
**See**: [https://route4me.io/docs/#mark-as-detected-as-visited](https://route4me.io/docs/#mark-as-detected-as-visited)  
**Since**: 0.1.9  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Address ID |
| routeId | <code>string</code> | Route ID |
| value | <code>boolean</code> | Actual value |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;Addresses.Address&gt;</code> |  |

<a name="Addresses+markVisited"></a>

### addresses.markVisited(id, routeId, memberId, value, [callback])
Mark an address of a route as visited.

This method affects:
* ++ **`timestamp_last_visited`**
* -- `is_visited`

**Kind**: instance method of <code>[Addresses](#Addresses)</code>  
**Category**: Addresses  
**See**: [https://route4me.io/docs/#mark-as-visited](https://route4me.io/docs/#mark-as-visited)  
**Since**: 0.1.9  
**Todo**

- [ ] HACK: method-conflict. API suggest to use "GET", SDK uses "PUT"


| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Address ID |
| routeId | <code>string</code> | Route ID |
| memberId | <code>number</code> | Member ID |
| value | <code>boolean</code> | Actual value |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;bool&gt;</code> |  |

<a name="Addresses+markDeparted"></a>

### addresses.markDeparted(id, routeId, memberId, value, [callback])
Mark an address of a route as departed.

This method affects:
* ++ **`timestamp_last_departed`**
* -- `is_departed`

**Kind**: instance method of <code>[Addresses](#Addresses)</code>  
**Category**: Addresses  
**See**: [https://route4me.io/docs/#mark-as-departed](https://route4me.io/docs/#mark-as-departed)  
**Since**: 0.1.9  
**Todo**

- [ ] HACK: method-conflict. API suggest to use "GET", SDK uses "PUT"


| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Address ID |
| routeId | <code>string</code> | Route ID |
| memberId | <code>number</code> | Member ID |
| value | <code>boolean</code> | Actual value |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;bool&gt;</code> |  |

<a name="AvoidanceZones"></a>

## AvoidanceZones : <code>object</code>
AvoidanceZones facility

**Kind**: global namespace  

| Param | Type | Description |
| --- | --- | --- |
| route4me | <code>[Route4Me](#Route4Me)</code> | Route4Me manager |


* [AvoidanceZones](#AvoidanceZones) : <code>object</code>
    * [.create(data, [callback])](#AvoidanceZones+create)
    * [.get(id, [callback])](#AvoidanceZones+get)
    * [.list([callback])](#AvoidanceZones+list)
    * [.update(id, data, [callback])](#AvoidanceZones+update)
    * [.remove(id, [callback])](#AvoidanceZones+remove)

<a name="AvoidanceZones+create"></a>

### avoidanceZones.create(data, [callback])
Create an Avoidance Zone.

**Kind**: instance method of <code>[AvoidanceZones](#AvoidanceZones)</code>  
**Category**: AvoidanceZones  
**See**: [Route4Me API](https://route4me.io/docs/#duplicate-a-route)  
**Since**: 0.1.8  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>jsonschema:AvoidanceZones.AvoidanceZone</code> | Valid Avoidance Zone data. |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AvoidanceZones.AvoidanceZone&gt;</code> |  |

<a name="AvoidanceZones+get"></a>

### avoidanceZones.get(id, [callback])
GET a specified Avoidance Zone by ID.

**Kind**: instance method of <code>[AvoidanceZones](#AvoidanceZones)</code>  
**Category**: AvoidanceZones  
**See**: [Route4Me API](https://route4me.io/docs/#get-an-avoidance-zone)  
**Since**: 0.1.8  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Avoidance zone ID |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AvoidanceZones.AvoidanceZone&gt;</code> |  |

<a name="AvoidanceZones+list"></a>

### avoidanceZones.list([callback])
GET all of the Avoidance Zones defined by a user.

**Kind**: instance method of <code>[AvoidanceZones](#AvoidanceZones)</code>  
**Category**: AvoidanceZones  
**See**: [Route4Me API](https://route4me.io/docs/#get-multiple-avoidance-zones)  
**Since**: 0.1.8  
**Todo**

- [ ] TODO: There is no schema for the response, but it is just an array of known schema


| Param | Type |
| --- | --- |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AvoidanceZones.AvoidanceZones&gt;</code> | 

<a name="AvoidanceZones+update"></a>

### avoidanceZones.update(id, data, [callback])
UPDATE a specified Avoidance Zone.

**Kind**: instance method of <code>[AvoidanceZones](#AvoidanceZones)</code>  
**Category**: AvoidanceZones  
**See**: [Route4Me API](https://route4me.io/docs/#update-an-avoidance-zone)  
**Since**: 0.1.8  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Avoidance zone ID |
| data | <code>jsonschema:AvoidanceZones.AvoidanceZone</code> | Valid Avoidance Zone data. |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AvoidanceZones.AvoidanceZone&gt;</code> |  |

<a name="AvoidanceZones+remove"></a>

### avoidanceZones.remove(id, [callback])
DELETE a specified Avoidance Zone.

**Kind**: instance method of <code>[AvoidanceZones](#AvoidanceZones)</code>  
**Category**: AvoidanceZones  
**See**: [Route4Me API](https://route4me.io/docs/#remove-an-avoidance-zone)  
**Since**: 0.1.8  
**Todo**

- [ ] TODO: There is no schema for the response
- [ ] TODO: parse the response


| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Avoidance zone ID |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AvoidanceZones.RemoveResponse&gt;</code> |  |

**Example**  
```js
SampleResponse = {"status":true}
```
<a name="Geocoding"></a>

## Geocoding : <code>object</code>
Geocoding facility

**Kind**: global namespace  

| Param | Type | Description |
| --- | --- | --- |
| route4me | <code>[Route4Me](#Route4Me)</code> | Route4Me manager |


* [Geocoding](#Geocoding) : <code>object</code>
    * [.forward(address, [callback])](#Geocoding+forward)
    * [.reverse(latitude, longitude, [callback])](#Geocoding+reverse)
    * ~~[.rapidGet(id, [callback])](#Geocoding+rapidGet)~~
    * ~~[.rapidSearch(criteria, options, [callback])](#Geocoding+rapidSearch)~~

<a name="Geocoding+forward"></a>

### geocoding.forward(address, [callback])
Forward Geocode Address

Forward geocoding is the process of converting place name information
into latitude and longitude values.

**Kind**: instance method of <code>[Geocoding](#Geocoding)</code>  
**Category**: Geocoding  
**See**: [https://route4me.io/docs/#forward-geocode-address](https://route4me.io/docs/#forward-geocode-address)  
**Since**: 0.1.9  
**Todo**

- [ ] TODO: method-conflict. API suggest to use "POST", SDK uses "GET"


| Param | Type | Description |
| --- | --- | --- |
| address | <code>string</code> | Address to `geocode` |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Geocoding.Forward&gt;</code> |  |

<a name="Geocoding+reverse"></a>

### geocoding.reverse(latitude, longitude, [callback])
Reverse Geocode Address

With the reverse geocoding you can retrieve an address name from a geographical location
point (latitude, longitude). Using this method, you can get the nearest locations
to a specific address name. You can also get the larger scale objects (such as street
addresses, places, neighbourhoods, county, state or country) which include a specified
address.

**Kind**: instance method of <code>[Geocoding](#Geocoding)</code>  
**Category**: Geocoding  
**See**: [https://route4me.io/docs/#reverse-geocode-address](https://route4me.io/docs/#reverse-geocode-address)  
**Since**: 0.1.9  
**Todo**

- [ ] TODO: method-conflict. API suggest to use "POST", SDK uses "GET"


| Param | Type | Description |
| --- | --- | --- |
| latitude | <code>number</code> | Latitude of the geographic location |
| longitude | <code>number</code> | Longitude of the geographic location |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Geocoding.Reverse&gt;</code> |  |

<a name="Geocoding+rapidGet"></a>

### ~~geocoding.rapidGet(id, [callback])~~
***Deprecated***

Rapid Address Search by ID

Single address geocoding refers to the process of getting a geographic
address by address name sent with HTTP GET data.

**Kind**: instance method of <code>[Geocoding](#Geocoding)</code>  
**Category**: Geocoding  
**See**: [https://route4me.io/docs/#rapid-address-search](https://route4me.io/docs/#rapid-address-search)  
**Since**: 0.1.9  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Sequential number in addresses list. |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Geocoding.Rapid&gt;</code> |  |

<a name="Geocoding+rapidSearch"></a>

### ~~geocoding.rapidSearch(criteria, options, [callback])~~
***Deprecated***

Rapid Address Search

**Kind**: instance method of <code>[Geocoding](#Geocoding)</code>  
**Category**: Geocoding  
**See**: [https://route4me.io/docs/#rapid-address-search](https://route4me.io/docs/#rapid-address-search)  
**Since**: 0.1.9  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>Object</code> | Search criterias, such as `zipcode`, `house number` and other |
| [criteria.zipCode] | <code>number</code> &#124; <code>string</code> | Zip code of the area |
| [criteria.houseNumber] | <code>number</code> &#124; <code>string</code> | House number |
| options | <code>Object</code> | Search parameters |
| [options.offset] | <code>number</code> | Start search position |
| [options.limit] | <code>number</code> | Search results limitation |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Geocoding.Rapid&gt;</code> |  |

<a name="Members"></a>

## Members : <code>object</code>
Members facility

**Kind**: global namespace  

| Param | Type | Description |
| --- | --- | --- |
| route4me | <code>[Route4Me](#Route4Me)</code> | Route4Me manager |


* [Members](#Members) : <code>object</code>
    * [.create(data, [callback])](#Members+create)
    * [.list([callback])](#Members+list)
    * [.get(id, [callback])](#Members+get)
    * [.update(id, data, [callback])](#Members+update)
    * [.remove(id, [callback])](#Members+remove)
    * [.authenticate(email, password, [callback])](#Members+authenticate)
    * [.validateSession(id, sessionId, [callback])](#Members+validateSession)
    * [.registerAccount(data, [callback])](#Members+registerAccount)

<a name="Members+create"></a>

### members.create(data, [callback])
Create an User

**Kind**: instance method of <code>[Members](#Members)</code>  
**Category**: Members  
**See**: [https://route4me.io/docs/#create-an-user](https://route4me.io/docs/#create-an-user)  
**Since**: 0.1.9  
**Todo**

- [ ] TODO: validate INPUT parameter with **custom** schema


| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Parameters of new user |
| data.hideRoutedAddresses | <code>string</code> | user parameter |
| data.phone | <code>string</code> | user parameter |
| data.zipcode | <code>string</code> | user parameter |
| data.routeCount | <code>number</code> | user parameter |
| data.email | <code>string</code> | user parameter |
| data.type | <code>string</code> | user parameter |
| data.dateOfBirth | <code>string</code> | user parameter |
| data.firstName | <code>string</code> | user parameter |
| data.password | <code>string</code> | user parameter |
| data.lastName | <code>string</code> | user parameter |
| data.readonlyUser | <code>boolean</code> | user parameter |
| data.hideVisitedAddresses | <code>boolean</code> | user parameter |
| data.hideRoutedAddresses | <code>boolean</code> | user parameter |
| data.hideNonfutureRoutes | <code>boolean</code> | user parameter |
| data.showAllVehicles | <code>boolean</code> | user parameter |
| data.showAllDrivers | <code>boolean</code> | user parameter |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Members.Member&gt;</code> |  |

**Example** *(Sample input)*  
```js
{
	"firstName": "Clay",
	"lastName": "Abraham",
	"phone": "571-259-5939",
	"zipcode": "22102",
	"routeCount": null,
	"email": "skrynkovskyy+newdispatcher@gmail.com",
	"type": "SUB_ACCOUNT_DISPATCHER",
	"dateOfBirth": 2010,
	"password": "123456",
	"readonlyUser": false,
	"hideVisitedAddresses": false,
	"hideRoutedAddresses": false,
	"hideNonfutureRoutes": false,
	"showAllVehicles": false,
	"showAllDrivers": false,
}
```
<a name="Members+list"></a>

### members.list([callback])
Member’s Sub-users

View existing sub-users in a member’s account.

**Kind**: instance method of <code>[Members](#Members)</code>  
**Category**: Members  
**See**: [https://route4me.io/docs/#members-sub-users](https://route4me.io/docs/#members-sub-users)  
**Since**: 0.1.9  
**Todo**

- [ ] TODO: there is no schema for response


| Param | Type |
| --- | --- |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Members.Members&gt;</code> | 

<a name="Members+get"></a>

### members.get(id, [callback])
Get an User Details

**Kind**: instance method of <code>[Members](#Members)</code>  
**Category**: Members  
**See**: [https://route4me.io/docs/#get-an-user-details](https://route4me.io/docs/#get-an-user-details)  
**Since**: 0.1.9  
**Todo**

- [ ] TODO: reformat output


| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Member ID |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Members.Member&gt;</code> |  |

<a name="Members+update"></a>

### members.update(id, data, [callback])
Update an existing user.

**Kind**: instance method of <code>[Members](#Members)</code>  
**Category**: Members  
**See**: [https://route4me.io/docs/#update-an-user](https://route4me.io/docs/#update-an-user)  
**Since**: 0.1.9  
**Todo**

- [ ] TODO: validate INPUT parameter with **custom** schema
- [ ] TODO: reformat output


| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Member ID |
| data | <code>Object</code> | Parameters of new user |
| data.hideRoutedAddresses | <code>string</code> | user parameter |
| data.phone | <code>string</code> | user parameter |
| data.zipcode | <code>string</code> | user parameter |
| data.routeCount | <code>number</code> | user parameter |
| data.email | <code>string</code> | user parameter |
| data.type | <code>string</code> | user parameter |
| data.dateOfBirth | <code>string</code> | user parameter |
| data.firstName | <code>string</code> | user parameter |
| data.password | <code>string</code> | user parameter |
| data.lastName | <code>string</code> | user parameter |
| data.readonlyUser | <code>boolean</code> | user parameter |
| data.hideVisitedAddresses | <code>boolean</code> | user parameter |
| data.hideRoutedAddresses | <code>boolean</code> | user parameter |
| data.hideNonfutureRoutes | <code>boolean</code> | user parameter |
| data.showAllVehicles | <code>boolean</code> | user parameter |
| data.showAllDrivers | <code>boolean</code> | user parameter |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Members.Member&gt;</code> |  |

**Example** *(Sample input)*  
```js
{
	"firstName": "Clay",
	"lastName": "Abraham",
	"phone": "571-259-5939",
	"zipcode": "22102",
	"routeCount": null,
	"email": "skrynkovskyy+newdispatcher@gmail.com",
	"type": "SUB_ACCOUNT_DISPATCHER",
	"dateOfBirth": 2010,
	"password": "123456",
	"readonlyUser": false,
	"hideVisitedAddresses": false,
	"hideRoutedAddresses": false,
	"hideNonfutureRoutes": false,
	"showAllVehicles": false,
	"showAllDrivers": false,
}
```
<a name="Members+remove"></a>

### members.remove(id, [callback])
Remove existing user from a member’s account.

**Kind**: instance method of <code>[Members](#Members)</code>  
**Category**: Members  
**See**: [https://route4me.io/docs/#remove-an-user](https://route4me.io/docs/#remove-an-user)  
**Since**: 0.1.9  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Member ID |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Members.Member&gt;</code> |  |

<a name="Members+authenticate"></a>

### members.authenticate(email, password, [callback])
Authentication of a user with an email and password.

**Kind**: instance method of <code>[Members](#Members)</code>  
**Category**: Members  
**See**: [https://route4me.io/docs/#authentication-aa](https://route4me.io/docs/#authentication-aa)  
**Since**: 0.1.9  
**Todo**

- [ ] TODO: reformat output


| Param | Type | Description |
| --- | --- | --- |
| email | <code>string</code> | Email of an user |
| password | <code>string</code> | Password |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Members.Member&gt;</code> |  |

<a name="Members+validateSession"></a>

### members.validateSession(id, sessionId, [callback])
Validate a Session

Check if a session is valid.

**Kind**: instance method of <code>[Members](#Members)</code>  
**Category**: Members  
**See**: [https://route4me.io/docs/#validate-a-session](https://route4me.io/docs/#validate-a-session)  
**Since**: 0.1.9  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Member ID |
| sessionId | <code>string</code> | Session ID |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;number&gt;</code> |  |

<a name="Members+registerAccount"></a>

### members.registerAccount(data, [callback])
Registration of a new account.

**Kind**: instance method of <code>[Members](#Members)</code>  
**Category**: Members  
**See**: [https://route4me.io/docs/#register-an-account](https://route4me.io/docs/#register-an-account)  
**Since**: 0.1.9  
**Todo**

- [ ] TODO: reformat output


| Param | Type | Description |
| --- | --- | --- |
| data | <code>string</code> | Account parameters |
| data.accountPlan | <code>string</code> | Account parameter |
| data.industry | <code>string</code> | Account parameter |
| data.firstName | <code>string</code> | Account parameter |
| data.lastName | <code>string</code> | Account parameter |
| data.email | <code>string</code> | Account parameter |
| data.deviceType | <code>string</code> | Account parameter |
| data.password | <code>string</code> | Account parameter |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Members.Account&gt;</code> |  |

<a name="Notes"></a>

## Notes : <code>object</code>
Notes facility

**Kind**: global namespace  

| Param | Type | Description |
| --- | --- | --- |
| route4me | <code>[Route4Me](#Route4Me)</code> | Route4Me manager |

<a name="Notes+create"></a>

### notes.create(data, [callback])
Add Route Notes

* ADD Notes to a route.
* ADD Notes to a route using file uploading.

**Kind**: instance method of <code>[Notes](#Notes)</code>  
**Category**: Notes  
**See**

- [https://route4me.io/docs/#add-route-notes](https://route4me.io/docs/#add-route-notes)
- [https://route4me.io/docs/#add-a-note-file](https://route4me.io/docs/#add-a-note-file)

**Since**: 0.1.9  
**Todo**

- [ ] TODO: improve documentation about file attaching
- [ ] TODO: parse response (it is the Note wrapped into an additional object)


| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Note Data |
| data.routeId | <code>string</code> | Route ID |
| data.addressId | <code>number</code> | Address ID |
| data.deviceLatitude | <code>number</code> | Device latitude |
| data.deviceLongitude | <code>number</code> | Device longitude |
| data.deviceType | <code>string</code> | Device type |
| data.note | <code>string</code> | NOTE text |
| data.file | <code>blob</code> | FILE to use as a note |
| data.type | <code>string</code> | FILE/NOTE type. One of `DRIVER_IMG`, `VEHICLE_IMG`, `ADDRESS_IMG`, `CSV_FILE`, `XLS_FILE`, `ANY_FILE` |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Notes.NoteCreateResponse&gt;</code> |  |

<a name="Optimizations"></a>

## Optimizations : <code>object</code>
Optimizations facility

**Kind**: global namespace  

| Param | Type | Description |
| --- | --- | --- |
| route4me | <code>[Route4Me](#Route4Me)</code> | Route4Me main class |


* [Optimizations](#Optimizations) : <code>object</code>
    * [.create(optimization, [callback])](#Optimizations+create)
    * [.get(id, [callback])](#Optimizations+get)
    * [.list(states, options, [callback])](#Optimizations+list)
    * [.remove(id, [callback])](#Optimizations+remove)
    * [.linkAddress(id, addresses, [reoptimize], [callback])](#Optimizations+linkAddress)
    * [.unlinkAddress(id, addressId, [callback])](#Optimizations+unlinkAddress)

<a name="Optimizations+create"></a>

### optimizations.create(optimization, [callback])
Create a new optimization

**Kind**: instance method of <code>[Optimizations](#Optimizations)</code>  
**Category**: Optimizations  
**See**: [Route4Me API](https://route4me.io/docs/#create-an-optimization)  

| Param | Type | Description |
| --- | --- | --- |
| optimization | <code>jsonschema:Optimizations.CreateRequest</code> | Parameters for new optimization |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Optimizations.Response&gt;</code> |  |

<a name="Optimizations+get"></a>

### optimizations.get(id, [callback])
GET a single optimization by
[optimization_problem_id]{@linkcode Optimizations#get~id} parameter.

**Kind**: instance method of <code>[Optimizations](#Optimizations)</code>  
**Category**: Optimizations  
**See**: [ Route4Me API](https://route4me.io/docs/#get-an-optimization)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Optimization Problem ID |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Optimizations.Optimization&gt;</code> |  |

<a name="Optimizations+list"></a>

### optimizations.list(states, options, [callback])
GET all optimizations belonging to an user.

**Kind**: instance method of <code>[Optimizations](#Optimizations)</code>  
**Category**: Optimizations  
**See**: [ Route4Me API](https://route4me.io/docs/#get-optimizations)  
**Todo**

- [ ] TODO: there is no JSON-schema for the response


| Param | Type | Description |
| --- | --- | --- |
| states | <code>number</code> &#124; <code>string</code> &#124; <code>Array.&lt;string&gt;</code> &#124; <code>Array.&lt;number&gt;</code> | List of states [1..6] |
| options | <code>Object</code> | List-parameters |
| [options.limit] | <code>number</code> | List limit |
| [options.offset] | <code>number</code> | List offset |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Optimizations.Optimizations&gt;</code> |  |

<a name="Optimizations+remove"></a>

### optimizations.remove(id, [callback])
Remove an existing optimization belonging to an user.

**Kind**: instance method of <code>[Optimizations](#Optimizations)</code>  
**Category**: Optimizations  
**See**: [ Route4Me API](https://route4me.io/docs/#remove-an-optimization)  
**Since**: 0.1.7  
**Todo**

- [ ] TODO: There is no schema for validation an output


| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Optimization Problem ID |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Optimizations.RemoveResponse&gt;</code> |  |

**Example**  
```js
const response = {
	"status":true,
	"removed":1
}
```
<a name="Optimizations+linkAddress"></a>

### optimizations.linkAddress(id, addresses, [reoptimize], [callback])
Insert an address into an optimization, resulting in the recalculation of optimal routes.

**Kind**: instance method of <code>[Optimizations](#Optimizations)</code>  
**Category**: Optimizations  
**Tag**: Optimizations  
**Tag**: Addresses  
**See**: [Route4Me API](https://route4me.io/docs/#insert-an-address-into-an-optimization)  
**Since**: 0.1.7  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>string</code> |  | Optimization Problem ID |
| addresses | <code>Array.&lt;jsonschema:Addresses.Address&gt;</code> |  | Addresses array |
| [reoptimize] | <code>boolean</code> | <code>false</code> | Determine, whether the `Optimization` should be reoptimized |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Addresses.Addresses&gt;</code> |  |  |

<a name="Optimizations+unlinkAddress"></a>

### optimizations.unlinkAddress(id, addressId, [callback])
Remove a destination (an address) with specified route_destination_id
from an optimization problem with specified optimization_problem_id.

**Kind**: instance method of <code>[Optimizations](#Optimizations)</code>  
**Category**: Optimizations  
**Tag**: Optimizations  
**Tag**: Addresses  
**See**: [Route4Me API](https://route4me.io/docs/#remove-an-address-from-an-optimization)  
**Since**: 0.1.7  
**Todo**

- [ ] TODO: There is no schema for validation an output


| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Optimization Problem ID |
| addressId | <code>number</code> | Address ID |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Optimizations.UnlinkAddressResponse&gt;</code> |  |

**Example**  
```js
const response = {
	"deleted":true,
	"route_destination_id":1
}
```
<a name="Orders"></a>

## Orders : <code>object</code>
Orders facility

**Kind**: global namespace  

| Param | Type | Description |
| --- | --- | --- |
| route4me | <code>[Route4Me](#Route4Me)</code> | Route4Me manager |


* [Orders](#Orders) : <code>object</code>
    * [.create(data, [callback])](#Orders+create)
    * [.get(id, [callback])](#Orders+get)
    * [.list([ids], [callback])](#Orders+list)
    * [.remove(ids, [callback])](#Orders+remove)
    * [.update(id, data, [callback])](#Orders+update)
    * [.search(criteria, [options], [callback])](#Orders+search)

<a name="Orders+create"></a>

### orders.create(data, [callback])
Create an Order

**Kind**: instance method of <code>[Orders](#Orders)</code>  
**Category**: Orders  
**See**: [https://route4me.io/docs/#create-an-order](https://route4me.io/docs/#create-an-order)  
**Since**: 0.1.11  
**Todo**

- [ ] TODO: use custom input format (well formatted)


| Param | Type | Description |
| --- | --- | --- |
| data | <code>jsonschema:Orders.OrderInput</code> | New order |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Orders.Order&gt;</code> |  |

**Example** *(Sample input)*  
```js

{
	"address_1": "1358 E Luzerne St, Philadelphia, PA 19124, US",
	"cached_lat"            : 48.335991,
	"cached_lng"            : 31.18287,
	"address_alias"         : "Auto test address",
	"address_city"          : "Philadelphia",
	"EXT_FIELD_first_name"  : "Igor",
	"EXT_FIELD_last_name"   : "Progman",
	"EXT_FIELD_email"       : "progman@gmail.com",
	"EXT_FIELD_phone"       : "380380380380",
	"EXT_FIELD_custom_data" : [
		{
			"order_id" : "10",
			"name"     : "Bill Soul"
		}
	]
}
```
<a name="Orders+get"></a>

### orders.get(id, [callback])
Get an Order Details

**Kind**: instance method of <code>[Orders](#Orders)</code>  
**Category**: Orders  
**See**: [https://route4me.io/docs/#get-an-order-details](https://route4me.io/docs/#get-an-order-details)  
**Since**: 0.1.11  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Order ID |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Orders.Order&gt;</code> |  |

<a name="Orders+list"></a>

### orders.list([ids], [callback])
Get all the orders created under the specific Route4Me account

**Kind**: instance method of <code>[Orders](#Orders)</code>  
**Category**: Orders  
**See**: [https://route4me.io/docs/#get-orders-with-details](https://route4me.io/docs/#get-orders-with-details)  
**Since**: 0.1.11  

| Param | Type | Description |
| --- | --- | --- |
| [ids] | <code>number</code> &#124; <code>string</code> &#124; <code>Array.&lt;number&gt;</code> &#124; <code>Array.&lt;string&gt;</code> | Order IDs in one of the following form: * CSV-string * one ID as string * one ID as number * array of strings * array of numbers If you want to load all Orders: * **Don't pass** this parameter * **OR** pass `ids=undefined` * **OR** pass `ids=false` |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Orders.Orders&gt;</code> | [callback] |

<a name="Orders+remove"></a>

### orders.remove(ids, [callback])
Remove an Order

**Kind**: instance method of <code>[Orders](#Orders)</code>  
**Category**: Orders  
**See**: [https://route4me.io/docs/#remove-an-order](https://route4me.io/docs/#remove-an-order)  
**Since**: 0.1.11  

| Param | Type | Description |
| --- | --- | --- |
| ids | <code>number</code> &#124; <code>string</code> &#124; <code>Array.&lt;number&gt;</code> &#124; <code>Array.&lt;string&gt;</code> | Order ID/IDs to remove in one of the following form: * CSV-string * one ID as string * one ID as number * array of strings * array of numbers |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a name="Orders+update"></a>

### orders.update(id, data, [callback])
Update an Order

**Kind**: instance method of <code>[Orders](#Orders)</code>  
**Category**: Orders  
**See**: [https://route4me.io/docs/#update-an-order](https://route4me.io/docs/#update-an-order)  
**Since**: 0.1.11  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Order ID |
| data | <code>jsonschema:Orders.Order</code> | Order data |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Orders.Order&gt;</code> |  |

<a name="Orders+search"></a>

### orders.search(criteria, [options], [callback])
Search Orders

**Kind**: instance method of <code>[Orders](#Orders)</code>  
**Category**: Orders  
**See**: [https://route4me.io/docs/#search-orders](https://route4me.io/docs/#search-orders)  
**Since**: 0.1.11  
**Todo**

- [ ] TODO: Parse response
- [ ] TODO: Test timezone for this method [https://github.com/route4me/route4me-nodejs-sdk/issues/42](https://github.com/route4me/route4me-nodejs-sdk/issues/42)
- [ ] TODO: Handle the diffrerent format of the output (when fields are set,
see https://github.com/route4me/route4me-nodejs-sdk/issues/38)


| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>string</code> &#124; <code>Object</code> | Searched text or searching criteria |
| [criteria.byAddDate] | <code>Date</code> | Date order was inserted |
| [criteria.byScheduledDate] | <code>Date</code> | Date order was scheduled for |
| [criteria.query] | <code>string</code> | The text searched for |
| [options] | <code>Object</code> | List-parameters |
| [options.limit] | <code>number</code> | List limit |
| [options.offset] | <code>number</code> | List offset |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Orders.Orders&gt;</code> |  |

<a name="Routes"></a>

## Routes : <code>object</code>
Routes facility

**Kind**: global namespace  

| Param | Type | Description |
| --- | --- | --- |
| route4me | <code>[Route4Me](#Route4Me)</code> | Route4Me manager |


* [Routes](#Routes) : <code>object</code>
    * [.get(id, [options], [callback])](#Routes+get)
    * [.list(options, [callback])](#Routes+list)
    * [.search(query, [callback])](#Routes+search)
    * [.update(id, data, [callback])](#Routes+update)
    * [.remove(ids, [callback])](#Routes+remove)
    * [.linkAddress(id, addresses, [options], [callback])](#Routes+linkAddress)
    * [.unlinkAddress(id, addressId, [callback])](#Routes+unlinkAddress)
    * [.duplicate(id, [callback])](#Routes+duplicate)
    * [.merge(ids, [callback])](#Routes+merge)
    * [.share(id, email, [callback])](#Routes+share)
    * [.pullAddress(id, addressId, afterAddressId, [callback])](#Routes+pullAddress)
    * [.resequence(id, order, [callback])](#Routes+resequence)
    * [.optimize(id, criteria, [callback])](#Routes+optimize)

<a name="Routes+get"></a>

### routes.get(id, [options], [callback])
Get a single route.

**Kind**: instance method of <code>[Routes](#Routes)</code>  
**Category**: Routes  
**Tag**: Routes  
**Tag**: Tracking  
**See**

- [https://route4me.io/docs/#get-a-route](https://route4me.io/docs/#get-a-route)
- [https://route4me.io/docs/#get-route-tracking-data](https://route4me.io/docs/#get-route-tracking-data)

**Since**: 0.1.8  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Route ID |
| [options] | <code>Object</code> | Options |
| [options.includeTracking] | <code>boolean</code> | if `true` - the route tracking data will be included into the response. See also [https://route4me.io/docs/#get-route-tracking-data](https://route4me.io/docs/#get-route-tracking-data) |
| [options.includeDirections] | <code>boolean</code> | if `true` - returns directions |
| [options.includeRoutePath] | <code>boolean</code> | if `true` - include route path |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Routes.Route&gt;</code> |  |

<a name="Routes+list"></a>

### routes.list(options, [callback])
Get a limited number of the routes belonging to the user.

**Kind**: instance method of <code>[Routes](#Routes)</code>  
**Category**: Routes  
**See**: [https://route4me.io/docs/#get-multiple-routes](https://route4me.io/docs/#get-multiple-routes)  
**Since**: 0.1.8  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | List-parameters |
| [options.limit] | <code>number</code> | List limit |
| [options.offset] | <code>number</code> | List offset |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Routes.Routes&gt;</code> |  |

<a name="Routes+search"></a>

### routes.search(query, [callback])
Search the Routes for a Specified Text.

Search for the specified text throughout all routes belonging to the user’s account.

**Kind**: instance method of <code>[Routes](#Routes)</code>  
**Category**: Routes  
**See**: [https://route4me.io/docs/#search-routes](https://route4me.io/docs/#search-routes)  
**Since**: 0.1.10  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>string</code> | A text to be searched for |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Routes.Routes&gt;</code> |  |

<a name="Routes+update"></a>

### routes.update(id, data, [callback])
Update a route’s specified parameters.

**Kind**: instance method of <code>[Routes](#Routes)</code>  
**Category**: Routes  
**See**: [https://route4me.io/docs/#update-a-route](https://route4me.io/docs/#update-a-route)  
**Since**: 0.1.10  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Route ID |
| data | <code>jsonschema:Routes.Route</code> | New route data |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Routes.Route&gt;</code> |  |

<a name="Routes+remove"></a>

### routes.remove(ids, [callback])
Given multiple route ID’s, remove all routes at the same time.

**Kind**: instance method of <code>[Routes](#Routes)</code>  
**Category**: Routes  
**See**: [https://route4me.io/docs/#remove-routes](https://route4me.io/docs/#remove-routes)  
**Since**: 0.1.8  
**Todo**

- [ ] TODO: There is no schema for the response
- [ ] TODO: parse the response


| Param | Type | Description |
| --- | --- | --- |
| ids | <code>number</code> &#124; <code>string</code> &#124; <code>Array.&lt;number&gt;</code> &#124; <code>Array.&lt;string&gt;</code> | Route ID **or** comma-separated list of route IDs **or** array of route IDs |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Routes.RemoveResponse&gt;</code> |  |

**Example**  
```js
SampleResponse = {
{
	"deleted": true,
	"route_id": "270CB108F227AD6E11827FC08EE4E2D7,C340E3F6AF28E20EFAE0FBE51759C338",
	"route_ids": [
		"270CB108F227AD6E11827FC08EE4E2D7",
		"C340E3F6AF28E20EFAE0FBE51759C338"
	]
}
```
<a name="Routes+linkAddress"></a>

### routes.linkAddress(id, addresses, [options], [callback])
Add Addresses to Routes

**Kind**: instance method of <code>[Routes](#Routes)</code>  
**Category**: Routes  
**Tag**: Routes  
**Tag**: Addresses  
**See**: [https://route4me.io/docs/#add-addresses-to-routes](https://route4me.io/docs/#add-addresses-to-routes)  
**Since**: 0.1.10  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>string</code> |  | Route ID |
| addresses | <code>Array.&lt;jsonschema:Addresses.Address&gt;</code> |  | Array of `Addresses` |
| [options] | <code>Object</code> |  | Insert options |
| [options.optimalPosition] | <code>boolean</code> | <code>true</code> | If true, an address will be inserted at optimal position of a route |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Routes.Route&gt;</code> |  |  |

<a name="Routes+unlinkAddress"></a>

### routes.unlinkAddress(id, addressId, [callback])
REMOVE an address from a route.

**Kind**: instance method of <code>[Routes](#Routes)</code>  
**Category**: Routes  
**Tag**: Routes  
**Tag**: Addresses  
**See**: [https://route4me.io/docs/#remove-addresses-from-routes](https://route4me.io/docs/#remove-addresses-from-routes)  
**Since**: 0.1.10  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Route ID |
| addressId | <code>number</code> | Address ID |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a name="Routes+duplicate"></a>

### routes.duplicate(id, [callback])
Duplicates the route. More information - on Route4Me API-doc site (see links section).

**Kind**: instance method of <code>[Routes](#Routes)</code>  
**Category**: Routes  
**See**: [https://route4me.io/docs/#duplicate-a-route](https://route4me.io/docs/#duplicate-a-route)  
**Since**: 0.1.8  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Route ID |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;string&gt;</code> | callback, will be called with the ID (<string>) of the new created Route |

<a name="Routes+merge"></a>

### routes.merge(ids, [callback])
Merges the list of routes. More information - on Route4Me API-doc site (see links section).

**Kind**: instance method of <code>[Routes](#Routes)</code>  
**Category**: Routes  
**See**: [https://route4me.io/docs/#merge-routes](https://route4me.io/docs/#merge-routes)  
**Since**: 0.1.8  

| Param | Type | Description |
| --- | --- | --- |
| ids | <code>string</code> &#124; <code>Array.&lt;string&gt;</code> | Array of the Route IDs to be merged. |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;string&gt;</code> |  |

<a name="Routes+share"></a>

### routes.share(id, email, [callback])
Share Routes

Share a route via email.

**Kind**: instance method of <code>[Routes](#Routes)</code>  
**Category**: Routes  
**See**: [https://route4me.io/docs/#share-routes](https://route4me.io/docs/#share-routes)  
**Since**: 0.1.10  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Route ID |
| email | <code>string</code> | Recipient email |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a name="Routes+pullAddress"></a>

### routes.pullAddress(id, addressId, afterAddressId, [callback])
Move a Destination Into a Route

_ID of the source route **is not required**_

**Kind**: instance method of <code>[Routes](#Routes)</code>  
**Category**: Routes  
**See**: [https://route4me.io/docs/#move-a-destination-into-a-route](https://route4me.io/docs/#move-a-destination-into-a-route)  
**Since**: 0.1.10  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Destination route ID |
| addressId | <code>number</code> | An address ID to be moved |
| afterAddressId | <code>number</code> | An address ID in a destination route after which the moved destination will be inserted |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a name="Routes+resequence"></a>

### routes.resequence(id, order, [callback])
Manually Re-sequence a Route

**Kind**: instance method of <code>[Routes](#Routes)</code>  
**Category**: Routes  
**See**: [https://route4me.io/docs/#manually-re-sequence-a-route](https://route4me.io/docs/#manually-re-sequence-a-route)  
**Since**: 0.1.10  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Route ID |
| order | <code>Object.&lt;number, number&gt;</code> | Resequence rules: * **keys**: ID of an address * **values**: new sequence order of the address (counting from `1`) |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Routes.Route&gt;</code> |  |

<a name="Routes+optimize"></a>

### routes.optimize(id, criteria, [callback])
Optimize and re-sequence all destinations

**Kind**: instance method of <code>[Routes](#Routes)</code>  
**Category**: Routes  
**See**: [https://route4me.io/docs/#manually-re-sequence-a-route](https://route4me.io/docs/#manually-re-sequence-a-route)  
**Since**: 0.1.10  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Route ID |
| criteria | <code>string</code> | Optimization type, possible values: * `Distance` - optimize for distance * `Time` * `TimeWithTraffic` * `NoneOptimize` |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a name="Territories"></a>

## Territories : <code>object</code>
Territories facility

**Kind**: global namespace  

| Param | Type | Description |
| --- | --- | --- |
| route4me | <code>[Route4Me](#Route4Me)</code> | Route4Me manager |


* [Territories](#Territories) : <code>object</code>
    * [.create(data, [callback])](#Territories+create)
    * [.get(id, [options], [callback])](#Territories+get)
    * [.list([callback])](#Territories+list)
    * [.update(id, data, [callback])](#Territories+update)
    * [.remove(id, [callback])](#Territories+remove)

<a name="Territories+create"></a>

### territories.create(data, [callback])
Create a new Territory.

**Kind**: instance method of <code>[Territories](#Territories)</code>  
**Category**: Territories  
**See**: [Route4Me API](https://route4me.io/docs/#create-a-territory)  
**Since**: 0.1.8  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>jsonschema:Territories.Territory</code> | Valid Territory data. |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Territories.Territory&gt;</code> |  |

<a name="Territories+get"></a>

### territories.get(id, [options], [callback])
Get a specified Territory by ID.

**Kind**: instance method of <code>[Territories](#Territories)</code>  
**Category**: Territories  
**See**: [Route4Me API](https://route4me.io/docs/#get-a-territory)  
**Since**: 0.1.8  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>string</code> |  | Territory ID |
| [options] | <code>Object</code> |  | Additional options for `get` |
| [options.includeAddresses] | <code>boolean</code> | <code>false</code> | If true, enclosed addresses will be included in a response |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Territories.Territory&gt;</code> |  |  |

<a name="Territories+list"></a>

### territories.list([callback])
GET all of the Territories defined by a user.

**Kind**: instance method of <code>[Territories](#Territories)</code>  
**Category**: Territories  
**See**: [Route4Me API](https://route4me.io/docs/#get-multiple-territories)  
**Since**: 0.1.8  
**Todo**

- [ ] TODO: There is no schema for the response, but it is just an array of known schema


| Param | Type |
| --- | --- |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Territories.Territories&gt;</code> | 

<a name="Territories+update"></a>

### territories.update(id, data, [callback])
UPDATE a specified Territory.

**Kind**: instance method of <code>[Territories](#Territories)</code>  
**Category**: Territories  
**See**: [Route4Me API](https://route4me.io/docs/#update-a-territory)  
**Since**: 0.1.8  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Territory ID |
| data | <code>jsonschema:Territories.Territory</code> | Valid Territory data. |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Territories.Territory&gt;</code> |  |

<a name="Territories+remove"></a>

### territories.remove(id, [callback])
DELETE a specified Territory.

**Kind**: instance method of <code>[Territories](#Territories)</code>  
**Category**: Territories  
**See**: [Route4Me API](https://route4me.io/docs/#remove-a-territory)  
**Since**: 0.1.8  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Territory ID |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;boolean&gt;</code> |  |

<a name="Tracking"></a>

## Tracking : <code>object</code>
Tracking facility

**Kind**: global namespace  

| Param | Type | Description |
| --- | --- | --- |
| route4me | <code>[Route4Me](#Route4Me)</code> | Route4Me manager |


* [Tracking](#Tracking) : <code>object</code>
    * [.getAssetTracking(tracking, [callback])](#Tracking+getAssetTracking)
    * [.getRouteTrackingHistory(routeId, period, [callback])](#Tracking+getRouteTrackingHistory)
    * [.createRouteTracking(trackingData, [callback])](#Tracking+createRouteTracking)

<a name="Tracking+getAssetTracking"></a>

### tracking.getAssetTracking(tracking, [callback])
Get Asset Tracking Data

**Kind**: instance method of <code>[Tracking](#Tracking)</code>  
**Category**: Tracking  
**See**: [https://route4me.io/docs/#get-asset-tracking-data](https://route4me.io/docs/#get-asset-tracking-data)  
**Since**: 0.1.8  

| Param | Type | Description |
| --- | --- | --- |
| tracking | <code>string</code> | Tracking number |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Tracking.AssetTracking&gt;</code> |  |

<a name="Tracking+getRouteTrackingHistory"></a>

### tracking.getRouteTrackingHistory(routeId, period, [callback])
Get a device’s location history from a time range.

**Be carefull:** custom dates are considered as in local timezone!

**Kind**: instance method of <code>[Tracking](#Tracking)</code>  
**Category**: Tracking  
**See**: [https://route4me.io/docs/#get-route-tracking-data](https://route4me.io/docs/#get-route-tracking-data)  
**Since**: 0.1.8  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| routeId | <code>string</code> |  | Route ID |
| period | <code>string</code> &#124; <code>Object</code> |  | Time period. Object with `from` and `trim` dates, or one of predefined strings: * `today` * `yesterday` * `thismonth` * `7days` * `14days` * `30days` * `60days` * `90days` * `all_time` |
| [period.span] | <code>string</code> | <code>&quot;\&quot;custom\&quot;&quot;</code> | One of predefined strings (this is an another one way to determine it) |
| period.from | <code>Date</code> |  | Custom start date |
| period.trim | <code>Date</code> |  | Custom end date |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Tracking.TrackingHistory&gt;</code> |  |  |

<a name="Tracking+createRouteTracking"></a>

### tracking.createRouteTracking(trackingData, [callback])
Insert Route Tracking Data

Set GPS position of a device.

**Kind**: instance method of <code>[Tracking](#Tracking)</code>  
**Category**: Tracking  
**See**: [https://route4me.io/docs/#insert-route-tracking-data](https://route4me.io/docs/#insert-route-tracking-data)  
**Since**: 0.1.8  

| Param | Type | Description |
| --- | --- | --- |
| trackingData | <code>int</code> | Route Tracking Data |
| trackingData.memberId | <code>number</code> | Member ID |
| trackingData.routeId | <code>string</code> | Route ID |
| trackingData.course | <code>number</code> | Movement course |
| trackingData.speed | <code>number</code> | Movement speed |
| trackingData.latitude | <code>number</code> | Latitude |
| trackingData.longitude | <code>number</code> | Longitude |
| trackingData.deviceType | <code>string</code> | Device type |
| trackingData.deviceGuid | <code>string</code> | Device GUID |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a name="Vehicles"></a>

## Vehicles : <code>object</code>
Vehicles facility

**Kind**: global namespace  

| Param | Type | Description |
| --- | --- | --- |
| route4me | <code>[Route4Me](#Route4Me)</code> | Route4Me manager |

<a name="Vehicles+list"></a>

### vehicles.list([callback])
GET all optimizations belonging to an user.

**Kind**: instance method of <code>[Vehicles](#Vehicles)</code>  
**Category**: Vehicles  
**See**: [ Route4Me API](https://route4me.io/docs/#get-vehicles)  
**Todo**

- [ ] Fix error in API docs: there the method utilizes `POST`-http-method to get results


| Param | Type |
| --- | --- |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Vehicles.ResponseMany&gt;</code> | 

<a name="activityTypeEnum"></a>

## activityTypeEnum : <code>enum</code>
Enum for all known **activity type**.

**Kind**: global enum  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| AreaAdded | <code>string</code> | <code>&quot;area-added&quot;</code> |  |
| AreaRemoved | <code>string</code> | <code>&quot;area-removed&quot;</code> |  |
| AreaUpdated | <code>string</code> | <code>&quot;area-updated&quot;</code> |  |
| GeofenceEntered | <code>string</code> | <code>&quot;geofence-entered&quot;</code> |  |
| GeofenceLeft | <code>string</code> | <code>&quot;geofence-left&quot;</code> |  |
| RouteDelete | <code>string</code> | <code>&quot;route-delete&quot;</code> |  |
| RouteOptimized | <code>string</code> | <code>&quot;route-optimized&quot;</code> |  |
| RouteOwnerChanged | <code>string</code> | <code>&quot;route-owner-changed&quot;</code> |  |
| DeleteDestination | <code>string</code> | <code>&quot;delete-destination&quot;</code> |  |
| DestinationOutSequence | <code>string</code> | <code>&quot;destination-out-sequence&quot;</code> |  |
| InsertDestination | <code>string</code> | <code>&quot;insert-destination&quot;</code> |  |
| MarkDestinationDeparted | <code>string</code> | <code>&quot;mark-destination-departed&quot;</code> |  |
| MarkDestinationVisited | <code>string</code> | <code>&quot;mark-destination-visited&quot;</code> |  |
| MoveDestination | <code>string</code> | <code>&quot;move-destination&quot;</code> |  |
| UpdateDestinations | <code>string</code> | <code>&quot;update-destinations&quot;</code> |  |
| DriverArrivedEarly | <code>string</code> | <code>&quot;driver-arrived-early&quot;</code> | Get driver arrived early activities [https://route4me.io/docs/#driver-arrived-early](https://route4me.io/docs/#driver-arrived-early) |
| DriverArrivedLate | <code>string</code> | <code>&quot;driver-arrived-late&quot;</code> |  |
| DriverArrivedOnTime | <code>string</code> | <code>&quot;driver-arrived-on-time&quot;</code> |  |
| MemberCreated | <code>string</code> | <code>&quot;member-created&quot;</code> |  |
| MemberDeleted | <code>string</code> | <code>&quot;member-deleted&quot;</code> |  |
| MemberModified | <code>string</code> | <code>&quot;member-modified&quot;</code> |  |
| NoteInsert | <code>string</code> | <code>&quot;note-insert&quot;</code> |  |
| UserMessage | <code>string</code> | <code>&quot;user_message&quot;</code> |  |

