<a name="Routes"></a>

## Routes
Routes facility

**Kind**: global class  
**Category**: Routes  

* [Routes](#Routes)
    * [new Routes(requestManager)](#new_Routes_new)
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

<a name="new_Routes_new"></a>

### new Routes(requestManager)
Constructor


| Param | Type | Description |
| --- | --- | --- |
| requestManager | <code>RequestManager</code> | Request Manager |

<a name="Routes+get"></a>

### routes.get(id, [options], [callback])
Get a single route.

**Kind**: instance method of <code>[Routes](#Routes)</code>  
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
**See**: [https://route4me.io/docs/#manually-re-sequence-a-route](https://route4me.io/docs/#manually-re-sequence-a-route)  
**Since**: 0.1.10  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Route ID |
| criteria | <code>string</code> | Optimization type, possible values: * `Distance` - optimize for distance * `Time` * `TimeWithTraffic` * `NoneOptimize` |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

**documentation generated on Mon, 20 Feb 2017 22:25:17 GMT**
