<a id="module_route4me-node" name="module_route4me-node"></a>

## route4me-node


* [route4me-node](#module_route4me-node)
    * _static_
        * [.Route4Me](#module_route4me-node.Route4Me) : <code>Route4Me</code>
        * [.Route4MeError](#module_route4me-node.Route4MeError) : <code>Route4MeError</code>
        * [.Route4MeApiError](#module_route4me-node.Route4MeApiError) : <code>Route4MeApiError</code>
        * [.Route4MeValidationError](#module_route4me-node.Route4MeValidationError) : <code>Route4MeValidationError</code>
    * _inner_
        * [~ValidationCallback](#module_route4me-node..ValidationCallback) ⇒ <code>\*</code> \| <code>Error</code> ℗
        * _Route4Me_
            * [~RequestCallback](#module_route4me-node..RequestCallback) : <code>function</code>

<a id="module_route4me-node.Route4Me" name="module_route4me-node.Route4Me"></a>

### route4me-node.Route4Me : <code>Route4Me</code>

<a id="module_route4me-node.Route4MeError" name="module_route4me-node.Route4MeError"></a>

### route4me-node.Route4MeError : <code>Route4MeError</code>

<a id="module_route4me-node.Route4MeApiError" name="module_route4me-node.Route4MeApiError"></a>

### route4me-node.Route4MeApiError : <code>Route4MeApiError</code>

<a id="module_route4me-node.Route4MeValidationError" name="module_route4me-node.Route4MeValidationError"></a>

### route4me-node.Route4MeValidationError : <code>Route4MeValidationError</code>

<a id="module_route4me-node..ValidationCallback" name="module_route4me-node..ValidationCallback"></a>

### route4me-node~ValidationCallback ⇒ <code>\*</code> \| <code>Error</code> ℗

Validation callback, applied to each API-response

**Returns**: <code>\*</code> \| <code>Error</code> - Returns:
* [Error](Error) on validation error
* `obj` argument (modifications allowed)  
**Access**: private  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>\*</code> | Object to validate. Route4Me will pass API-responses with this argument |
| schemaName | <code>string</code> | Name of the schema to validate against. Route4Me will pass the name of appropriate schema for validation. |

<a id="module_route4me-node..RequestCallback" name="module_route4me-node..RequestCallback"></a>

### route4me-node~RequestCallback : <code>function</code>

API-response callback

**Category**: Route4Me  

| Param | Type | Description |
| --- | --- | --- |
| err | <code>Error</code> | Error (if ocurred) |
| [res] | <code>Object</code> | Value returned by API (on success) |

<a id="RequestManager" name="RequestManager"></a>

## RequestManager

Request manager, provides
* simple API for sending HTTP requests
* a way to handle HTTP responses

**Access**: protected  
**Since**: 0.1.0  

* [RequestManager](#RequestManager)
    * [new RequestManager(apiKey, options)](#new_RequestManager_new)
    * [._makeRequest(options, [callback])](#RequestManager+_makeRequest)
    * [._makeRequest5(options, [callback])](#RequestManager+_makeRequest5)
    * [._makeError(error, [callback])](#RequestManager+_makeError)

<a id="new_RequestManager_new" name="new_RequestManager_new"></a>

### new RequestManager(apiKey, options)

Creates new RequestManager. All parameters are inherited from {Route4Me}

**Returns**: [<code>RequestManager</code>](#RequestManager) - - New Request Manager  

| Param | Type | Description |
| --- | --- | --- |
| apiKey | <code>object</code> | see {Route4Me} |
| options | <code>object</code> | see {Route4Me} |

<a id="RequestManager+_makeRequest" name="RequestManager+_makeRequest"></a>

### requestManager.\_makeRequest(options, [callback])

Wrapper around [external:superagent](external:superagent) with all options applied.
Uses base url route4me API v4.0

**Access**: protected  
**Todo**

- [ ] TODO: rename this method!!!


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>object</code> |  | Request options |
| options.method | <code>string</code> |  | HTTP method |
| options.path | <code>string</code> |  | Server path |
| [options.qs] | <code>object</code> |  | Query string |
| [options.body] | <code>object</code> |  | Body |
| [options.validationContext] | <code>null</code> \| <code>string</code> \| <code>function</code> | <code></code> | * `null` cause validation disabled (TODO: test this case) * `string` is threated as the name of JSON Schema * `function` will be used for validation. |
| [options.returns] | <code>object</code> |  | Return values if present the return will be object with next structure { 		status,		// e.g. 200, 201, 202, etc 		...			// other fields, e.g. 'jobId' 		res			// result of request } |
| [options.returns.status] | <code>boolean</code> |  | Return status |
| [options.returns.jobId] | <code>boolean</code> |  | Return headers.x-job-id |
| [options.returns.location] | <code>boolean</code> |  | Return headers.location |
| [callback] | [<code>RequestCallback</code>](#module_route4me-node..RequestCallback) |  |  |

<a id="RequestManager+_makeRequest5" name="RequestManager+_makeRequest5"></a>

### requestManager.\_makeRequest5(options, [callback])

Wrapper around [external:superagent](external:superagent) with all options applied.
Uses base url route4me API v5.0

**Access**: protected  
**Todo**

- [ ] TODO: rename this method!!!


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>object</code> |  | Request options |
| options.method | <code>string</code> |  | HTTP method |
| options.path | <code>string</code> |  | Server path |
| [options.qs] | <code>object</code> |  | Query string |
| [options.body] | <code>object</code> |  | Body |
| [options.validationContext] | <code>null</code> \| <code>string</code> \| <code>function</code> | <code></code> | * `null` cause validation disabled (TODO: test this case) * `string` is threated as the name of JSON Schema * `function` will be used for validation. |
| [options.returns] | <code>object</code> |  | Return values if present the return will be object with next structure { 		status,		// e.g. 200, 201, 202, etc 		...			// other fields, e.g. 'jobId' 		res			// result of request } |
| [options.returns.status] | <code>boolean</code> |  | Return status |
| [options.returns.jobId] | <code>boolean</code> |  | Return headers.x-job-id |
| [options.returns.location] | <code>boolean</code> |  | Return headers.location |
| [callback] | [<code>RequestCallback</code>](#module_route4me-node..RequestCallback) |  |  |

<a id="RequestManager+_makeError" name="RequestManager+_makeError"></a>

### requestManager.\_makeError(error, [callback])

Early cancel request

**Todo**

- [ ] TODO: rename this method!!!
- [ ] TODO: write documentation


| Param | Type | Description |
| --- | --- | --- |
| error | <code>Error</code> | The reason the request was cancelled. |
| [callback] | [<code>RequestCallback</code>](#module_route4me-node..RequestCallback) |  |

<a id="clone" name="clone"></a>

## clone(obj) ⇒ <code>any</code>

Deep clone an object

**Returns**: <code>any</code> - - The deep copy of an object  
**Access**: protected  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>any</code> | Original object |

