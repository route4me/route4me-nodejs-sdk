<a id="Routes" name="Routes"></a>

## Routes ℗

Routes facility

**Category**: Routes  
**Access**: private  
**See**: [https://route4me.io/docs/#routes](https://route4me.io/docs/#routes)  
**Since**: 0.1.8  

* [Routes](#Routes) ℗
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
    * [.pullAddress(id, addressId, [afterAddressId], [callback])](#Routes+pullAddress)
    * [.resequence(id, order, [callback])](#Routes+resequence)
    * [.optimize(id, criteria, [callback])](#Routes+optimize)
    * [.routeexamples_optiomization(param, [callback])](#Routes+routeexamples_optiomization)
    * [.get_schedule_calendar(param, [callback])](#Routes+get_schedule_calendar)
    * [.routeBreaks(options, [callback])](#Routes+routeBreaks)
    * [.getStatus(routeId, [callback])](#Routes+getStatus)
    * [.rollbackStatus(routeId, [callback])](#Routes+rollbackStatus)
    * [.getHistoryStatus(routeId, [options], [callback])](#Routes+getHistoryStatus)
    * [.updateStatus(routeId, params, [callback])](#Routes+updateStatus)
    * [.setPlannedStatus(routeIds, [callback])](#Routes+setPlannedStatus)
    * [.routeStopStatus(destinationIds, status, [callback])](#Routes+routeStopStatus)
    * [.reoptimization(id, [callback])](#Routes+reoptimization)
    * [.reoptimizationRemainigStop(id, [callback])](#Routes+reoptimizationRemainigStop)

<a id="new_Routes_new" name="new_Routes_new"></a>

### new Routes(requestManager)

Constructor

**Returns**: [<code>Routes</code>](#Routes) - - Routes facility  

| Param | Type | Description |
| --- | --- | --- |
| requestManager | <code>RequestManager</code> | Request Manager |

<a id="Routes+get" name="Routes+get"></a>

### routes.get(id, [options], [callback])

Get a single route.

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
| [options.compressPathPoints] | <code>boolean</code> | if `true` - the path points in the response will be compressed |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Routes.Route&gt;</code> |  |

<a id="Routes+list" name="Routes+list"></a>

### routes.list(options, [callback])

Get a limited number of the routes belonging to the user.

**See**: [https://route4me.io/docs/#get-multiple-routes](https://route4me.io/docs/#get-multiple-routes)  
**Since**: 0.1.8  
**Todo**

- [ ] TODO: make options optional param


| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | List-parameters |
| [options.limit] | <code>number</code> | List limit |
| [options.offset] | <code>number</code> | List offset |
| [options.startDate] | <code>string</code> | Start date of route as "YYYY-MM-DD" |
| [options.endDate] | <code>string</code> | End date of route as "YYYY-MM-DD" |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Routes.Routes&gt;</code> |  |

<a id="Routes+search" name="Routes+search"></a>

### routes.search(query, [callback])

Search the Routes for a Specified Text.

Search for the specified text throughout all routes belonging to the user’s account.

**See**: [https://route4me.io/docs/#search-routes](https://route4me.io/docs/#search-routes)  
**Since**: 0.1.10  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>string</code> | A text to be searched for |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Routes.Routes&gt;</code> |  |

<a id="Routes+update" name="Routes+update"></a>

### routes.update(id, data, [callback])

Update a route’s specified parameters.

**See**: [https://route4me.io/docs/#update-a-route](https://route4me.io/docs/#update-a-route)  
**Since**: 0.1.10  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Route ID |
| data | <code>jsonschema:Routes.Route</code> | New route data |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Routes.Route&gt;</code> |  |

<a id="Routes+remove" name="Routes+remove"></a>

### routes.remove(ids, [callback])

Given multiple route ID’s, remove all routes at the same time.

**See**: [https://route4me.io/docs/#remove-routes](https://route4me.io/docs/#remove-routes)  
**Since**: 0.1.8  
**Todo**

- [ ] TODO: There is no schema for the response
- [ ] TODO: parse the response


| Param | Type | Description |
| --- | --- | --- |
| ids | <code>number</code> \| <code>string</code> \| <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;string&gt;</code> | Route ID **or** comma-separated list of route IDs **or** array of route IDs |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Routes.RemoveResponse&gt;</code> |  |

**Example**  
```javascript
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
<a id="Routes+linkAddress" name="Routes+linkAddress"></a>

### routes.linkAddress(id, addresses, [options], [callback])

Add Addresses to Routes

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

<a id="Routes+unlinkAddress" name="Routes+unlinkAddress"></a>

### routes.unlinkAddress(id, addressId, [callback])

REMOVE an address from a route.

**Tag**: Routes  
**Tag**: Addresses  
**See**: [https://route4me.io/docs/#remove-addresses-from-routes](https://route4me.io/docs/#remove-addresses-from-routes)  
**Since**: 0.1.10  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Route ID |
| addressId | <code>number</code> | Address ID |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="Routes+duplicate" name="Routes+duplicate"></a>

### routes.duplicate(id, [callback])

Duplicates the route. More information - on Route4Me API-doc site (see links section).

**See**: [https://route4me.io/docs/#duplicate-a-route](https://route4me.io/docs/#duplicate-a-route)  
**Since**: 0.1.8  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Route ID |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;string&gt;</code> | callback, will be called with the ID (<string>) of the new created Route |

<a id="Routes+merge" name="Routes+merge"></a>

### routes.merge(ids, [callback])

Merges the list of routes. More information - on Route4Me API-doc site (see links section).

**See**: [https://route4me.io/docs/#merge-routes](https://route4me.io/docs/#merge-routes)  
**Since**: 0.1.8  

| Param | Type | Description |
| --- | --- | --- |
| ids | <code>string</code> \| <code>Array.&lt;string&gt;</code> | Array of the Route IDs to be merged. |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;string&gt;</code> |  |

<a id="Routes+share" name="Routes+share"></a>

### routes.share(id, email, [callback])

Share Routes

Share a route via email.

**See**: [https://route4me.io/docs/#share-routes](https://route4me.io/docs/#share-routes)  
**Since**: 0.1.10  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Route ID |
| email | <code>string</code> | Recipient email |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="Routes+pullAddress" name="Routes+pullAddress"></a>

### routes.pullAddress(id, addressId, [afterAddressId], [callback])

Move a Destination Into a Route

_ID of the source route **is not required**_

**See**: [https://route4me.io/docs/#move-a-destination-into-a-route](https://route4me.io/docs/#move-a-destination-into-a-route)  
**Since**: 1.0.22  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Destination route ID |
| addressId | <code>number</code> | An address ID to be moved |
| [afterAddressId] | <code>number</code> | An address ID in a destination route after which the moved destination will be inserted |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="Routes+resequence" name="Routes+resequence"></a>

### routes.resequence(id, order, [callback])

Manually Re-sequence a Route

**See**: [https://route4me.io/docs/#manually-re-sequence-a-route](https://route4me.io/docs/#manually-re-sequence-a-route)  
**Since**: 0.1.10  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Route ID |
| order | <code>Object.&lt;number, number&gt;</code> | Resequence rules: * **keys**: ID of an address * **values**: new sequence order of the address (counting from `1`) |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Routes.Route&gt;</code> |  |

<a id="Routes+optimize" name="Routes+optimize"></a>

### routes.optimize(id, criteria, [callback])

Optimize and re-sequence all destinations

**See**: [https://route4me.io/docs/#manually-re-sequence-a-route](https://route4me.io/docs/#manually-re-sequence-a-route)  
**Since**: 0.1.10  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Route ID |
| criteria | <code>string</code> | Optimization type, possible values: * `Distance` - optimize for distance * `Time` * `TimeWithTraffic` * `NoneOptimize` |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="Routes+routeexamples_optiomization" name="Routes+routeexamples_optiomization"></a>

### routes.routeexamples\_optiomization(param, [callback])

RouteExamples

**See**: [https://route4me.io/docs/#optimizations](https://route4me.io/docs/#optimizations)  

| Param | Type | Description |
| --- | --- | --- |
| param | <code>object</code> | Optimization params |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="Routes+get_schedule_calendar" name="Routes+get_schedule_calendar"></a>

### routes.get\_schedule\_calendar(param, [callback])

RouteExample
Get Schedule Calendar

**See**: [https://route4me.io/docs/#get-schedule-calendar](https://route4me.io/docs/#get-schedule-calendar)  

| Param | Type | Description |
| --- | --- | --- |
| param | <code>object</code> | Schedule params |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="Routes+routeBreaks" name="Routes+routeBreaks"></a>

### routes.routeBreaks(options, [callback])

Store a new Driver Break in the database.

**See**: [https://virtserver.swaggerhub.com/Route4Me/route-breaks/5.0](https://virtserver.swaggerhub.com/Route4Me/route-breaks/5.0)  
**Since**: 1.0.12  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | Routebreaks params |
| options.route_id | <code>Array.&lt;string&gt;</code> | Route IDs to get result. |
| options.breaks | <code>Array.&lt;object&gt;</code> | Break IDs. |
| options.breaks.type | <code>string</code> | Type of break. Possible values:   - approximate_time_of_day   - certain_number_of_total_elapsed_time   - certain_number_of_travel_time   - certain_number_of_service_time   - certain_number_of_locations |
| options.breaks.duration | <code>number</code> | Duration of break. |
| options.breaks.params | <code>Array.&lt;number&gt;</code> | Params break. |
| options.replace_existing_breaks | <code>boolean</code> | Replace existing breaks. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="Routes+getStatus" name="Routes+getStatus"></a>

### routes.getStatus(routeId, [callback])

Get the status by specifying the path parameter ID.

**See**: [https://virtserver.swaggerhub.com/Route4Me/route-status/5.0](https://virtserver.swaggerhub.com/Route4Me/route-status/5.0)  
**Since**: 1.0.12  

| Param | Type | Description |
| --- | --- | --- |
| routeId | <code>string</code> | Route ID to get status. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="Routes+rollbackStatus" name="Routes+rollbackStatus"></a>

### routes.rollbackStatus(routeId, [callback])

Roll back route status by specifying the path parameter ID.
Sometimes a status rollback is possible.

**See**: [https://virtserver.swaggerhub.com/Route4Me/route-status/5.0](https://virtserver.swaggerhub.com/Route4Me/route-status/5.0)  
**Since**: 1.0.12  

| Param | Type | Description |
| --- | --- | --- |
| routeId | <code>string</code> | Route ID to rollback status. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="Routes+getHistoryStatus" name="Routes+getHistoryStatus"></a>

### routes.getHistoryStatus(routeId, [options], [callback])

Get route status history by specifying the path parameter ID.

**See**: [https://virtserver.swaggerhub.com/Route4Me/route-status/5.0](https://virtserver.swaggerhub.com/Route4Me/route-status/5.0)  
**Since**: 1.0.12  

| Param | Type | Description |
| --- | --- | --- |
| routeId | <code>string</code> | Route ID to get history status. |
| [options] | <code>object</code> |  |
| [options.order_by] | <code>string</code> | Result order. Possible values: 'asc' and 'desc' |
| [options.start] | <code>number</code> | Unix timestamp in seconds. |
| [options.end] | <code>number</code> | Unix timestamp in seconds. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="Routes+updateStatus" name="Routes+updateStatus"></a>

### routes.updateStatus(routeId, params, [callback])

Store a new Status in the database or update the status by specifying
the path parameter ID.
Route statuses change only forward - planned > started/paused > completed.

**See**: [https://virtserver.swaggerhub.com/Route4Me/route-breaks/5.0](https://virtserver.swaggerhub.com/Route4Me/route-breaks/5.0)  
**Since**: 1.0.12  

| Param | Type | Description |
| --- | --- | --- |
| routeId | <code>string</code> | Route ID to update status. |
| params | <code>object</code> |  |
| params.status | <code>string</code> | Value of status. Possible values: 'planned', 'started', 'paused' and 'completed'. |
| params.lat | <code>number</code> | Latitude. |
| params.lng | <code>number</code> | Longitude. |
| params.event_timestamp | <code>number</code> | Unix timestamp in seconds.. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="Routes+setPlannedStatus" name="Routes+setPlannedStatus"></a>

### routes.setPlannedStatus(routeIds, [callback])

Store a new Status in the database with 'planned' status.

**See**: [https://virtserver.swaggerhub.com/Route4Me/route-breaks/5.0](https://virtserver.swaggerhub.com/Route4Me/route-breaks/5.0)  
**Since**: 1.0.12  

| Param | Type | Description |
| --- | --- | --- |
| routeIds | <code>Array.&lt;string&gt;</code> | Route IDs to set 'planned' status. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="Routes+routeStopStatus" name="Routes+routeStopStatus"></a>

### routes.routeStopStatus(destinationIds, status, [callback])

Insert or update route address status/statuses.

**See**: [https://virtserver.swaggerhub.com/Route4Me/route-breaks/5.0](https://virtserver.swaggerhub.com/Route4Me/route-breaks/5.0)  
**Since**: 1.0.12  

| Param | Type | Description |
| --- | --- | --- |
| destinationIds | <code>Array.&lt;number&gt;</code> | Array of destination IDs to set status. |
| status | <code>string</code> | Value od status to set. Possible values: 'Skipped', 'Completed', 'Failed' and 'Empty'. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="Routes+reoptimization" name="Routes+reoptimization"></a>

### routes.reoptimization(id, [callback])

Route reoptimization.

**Since**: 0.1.21  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Route ID |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Routes.Route&gt;</code> |  |

<a id="Routes+reoptimizationRemainigStop" name="Routes+reoptimizationRemainigStop"></a>

### routes.reoptimizationRemainigStop(id, [callback])

Route reoptimization remaining stop.

**Since**: 0.1.21  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Route ID |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Routes.Route&gt;</code> |  |

