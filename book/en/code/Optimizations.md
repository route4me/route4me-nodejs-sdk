<a id="Optimizations" name="Optimizations"></a>

## Optimizations ℗

Optimizations facility

**Category**: Optimizations  
**Access**: private  
**See**: [https://route4me.io/docs/#optimizations](https://route4me.io/docs/#optimizations)  
**Since**: 0.1.3  

* [Optimizations](#Optimizations) ℗
    * [new Optimizations(requestManager)](#new_Optimizations_new)
    * [.create(optimization, isRedirect, [callback])](#Optimizations+create)
    * [.create2(props, [isRedirect], callback)](#Optimizations+create2)
    * [.get(id, [callback])](#Optimizations+get)
    * [.list(states, options, [callback])](#Optimizations+list)
    * [.update(id, data, [reoptimize], [callback])](#Optimizations+update)
    * [.remove(ids, [callback])](#Optimizations+remove)
    * [.linkAddress(id, addresses, [reoptimize], [callback])](#Optimizations+linkAddress)
    * [.unlinkAddress(id, addressId, [callback])](#Optimizations+unlinkAddress)

<a id="new_Optimizations_new" name="new_Optimizations_new"></a>

### new Optimizations(requestManager)

Constructor

**Returns**: [<code>Optimizations</code>](#Optimizations) - - Optimizations facility  

| Param | Type | Description |
| --- | --- | --- |
| requestManager | <code>RequestManager</code> | Request Manager |

<a id="Optimizations+create" name="Optimizations+create"></a>

### optimizations.create(optimization, isRedirect, [callback])

Create a new optimization

**See**: [https://route4me.io/docs/#create-an-optimization](https://route4me.io/docs/#create-an-optimization)  

| Param | Type | Description |
| --- | --- | --- |
| optimization | <code>jsonschema:Optimizations.CreateRequest</code> | Parameters for new optimization |
| isRedirect | <code>boolean</code> |  |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Optimizations.Response&gt;</code> |  |

<a id="Optimizations+create2" name="Optimizations+create2"></a>

### optimizations.create2(props, [isRedirect], callback)

Create a new optimization with Advanced constraints

**See**

- [https://route4me.io/docs/#create-an-optimization](https://route4me.io/docs/#create-an-optimization)
- [https://github.com/route4me/route4me-json-schemas/blob/master/Optimization_create.json](https://github.com/route4me/route4me-json-schemas/blob/master/Optimization_create.json)
- [https://github.com/route4me/route4me-json-schemas/blob/master/RouteParameters.json](https://github.com/route4me/route4me-json-schemas/blob/master/RouteParameters.json)
- [https://github.com/route4me/route4me-json-schemas/blob/master/Address.json](https://github.com/route4me/route4me-json-schemas/blob/master/Address.json)
- [https://github.com/route4me/route4me-json-schemas/blob/master/Optimization_response.json](https://github.com/route4me/route4me-json-schemas/blob/master/Optimization_response.json)

**Since**: 0.1.15  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| props | <code>object</code> |  | Optimization properties. Here are some required or useful properties, for full list of properties look at docs. |
| props.parameters | <code>object</code> |  | Route Parameters. Here are some required and useful parameters, for full list of properties look at docs. |
| props.parameters.algorithm_type | <code>number</code> |  | The optimization algorithm to be used. Possible values: 1 = TSP, 2 = VRP, 3 = CVRP_TW_SD, 4 = CVRP_TW_MD, 5 = TSP_TW, 6 = TSP_TW_CR, 7 = BBCVRP, 9 = ADVANCED_CVRP_TW,100 = ALG_NONE, 101 = ALG_LEGACY_DISTRIBUTED |
| props.parameters.device_type | <code>string</code> |  | The type of the device that is creating this route. Possible values: "web", "iphone", "ipad", "android_phone", "android_tablet". |
| props.parameters.distance_unit | <code>string</code> |  | The distance measurement unit for the route. Possible values: "mi", "km". |
| props.parameters.route_max_duration | <code>number</code> |  | = 86400	- How many seconds a route can last at most. Default is 24 hours = 86400 seconds. |
| props.parameters.route_time | <code>number</code> |  | = 25200			- Time when the route starts (relative to route_date) (Seconds). UTC timezone as well. Default is 07:00 UTC = 25200 seconds. |
| props.parameters.travel_mode | <code>number</code> |  | The mode of travel that the directions should be optimized for. Possible values: "Driving", "Walking", "Bicycling". |
| [props.parameters.optimize] | <code>string</code> |  | The driving directions will be generated biased for this selection. This has no impact on route sequencing. Possible values: "Distance", "Time", "timeWithTraffic". |
| [props.parameters.parts] | <code>number</code> |  | Legacy feature which permits a user to request an example number of optimized routes. |
| [props.parameters.route_date] | <code>number</code> |  | The route start date in UTC, unix timestamp seconds. Used to show users when the route will begin, also used for reporting and analytics. |
| [props.parameters.route_name] | <code>string</code> |  | The name of this route. this route name will be accessible in the search API, and also will be displayed on the mobile device of a user. |
| [props.parameters.rt] | <code>boolean</code> |  | The tour type of this route. rt is short for round trip, the optimization engine changes its behavior for round trip routes. |
| [props.parameters.vehicle_capacity] | <code>number</code> |  | How much cargo can the vehicle carry (units, e.g. cubic meters) |
| [props.parameters.vehicle_max_distance_mi] | <code>number</code> |  | Maximum distance for a single vehicle in this route (always in miles). |
| [props.parameters.advanced_constraints] | <code>number</code> |  | Advanced Constraints. |
| [props.parameters.advanced_constraints.max_cargo_weight] | <code>number</code> |  | Maximum cargo weight per route. |
| [props.parameters.advanced_constraints.max_cargo_volume] | <code>number</code> |  | Maximum cargo volume per route. |
| [props.parameters.advanced_constraints.max_capacity] | <code>number</code> |  | How much total cargo can be transported per route (units, e.g. cubic meters). |
| [props.parameters.advanced_constraints.members_count] | <code>number</code> |  | Legacy feature which permits a user to request an example number of optimized routes. |
| props.parameters.advanced_constraints.available_time_windows | <code>Array.&lt;array&gt;</code> |  | An array of the available time windows, e.g. [[43200, 72000], [TimeStart, TimeEnd]] Time Window Start in seconds:  7:00 am EST = (7 + 5) * 3600 = 43200 Time Window End in seconds:   15:00 am EST = (15 + 5) * 3600 = 72000 |
| [props.parameters.advanced_constraints.tags] | <code>Array.&lt;string&gt;</code> |  | The driver tags specified in a team member's custom data. (e.g. 'driver skills': ["Class A CDL", "Class B CDL", "Forklift", "Skid Steer Loader", "Independent Contractor"]) |
| [props.parameters.advanced_constraints.route4me_members_id] | <code>Array.&lt;number&gt;</code> |  | An array of the skilled driver IDs. |
| [props.parameters.advanced_constraints.depot_address] | <code>object</code> |  | A depot address. |
| props.parameters.advanced_constraints.depot_address.source_id | <code>number</code> |  | Source ID. |
| props.parameters.advanced_constraints.depot_address.source_type | <code>string</code> |  | Source type (e.g. input_addresses). |
| [props.parameters.advanced_constraints.location_sequence_pattern] | <code>Array.&lt;object&gt;</code> |  | The parameter is used in advanced constraints to set the stops you plan to visit each route. Note: empty string "" means any stops, for example ["", AddresssObject1, AddresssObject2, "", AddresssObject3] means any stops before AddresssObject1 and between AddresssObject2 and AddresssObject3. |
| [props.parameters.advanced_constraints.location_sequence_pattern.alias] | <code>string</code> |  | Location alias |
| [props.parameters.advanced_constraints.location_sequence_pattern.address] | <code>string</code> |  | Location address |
| props.parameters.advanced_constraints.location_sequence_pattern.lat | <code>number</code> |  | Location latitude |
| props.parameters.advanced_constraints.location_sequence_pattern.lng | <code>number</code> |  | Location longitude |
| [props.parameters.advanced_constraints.location_sequence_pattern.time] | <code>number</code> |  | Location service time |
| [props.parameters.advanced_constraints.group] | <code>string</code> |  | Group name of the advanced constraints. |
| [props.depots] | <code>Array.&lt;object&gt;</code> |  | A valid array of Address objects of Depots. |
| props.addresses | <code>Array.&lt;object&gt;</code> |  | A valid array of Address objects. Here are some required and useful properties of the Address object, for full list of properties look at docs. |
| props.addresses.lat | <code>number</code> |  | Latitude. |
| props.addresses.lng | <code>number</code> |  | Longitude. |
| [props.addresses.alias] | <code>string</code> |  | Address Alias. |
| [props.addresses.address] | <code>string</code> |  | The route Address Line 1. |
| [props.addresses.is_depot] | <code>boolean</code> | <code>false</code> | This address is a depot. |
| [props.addresses.group] | <code>string</code> |  | Address group. |
| [props.addresses.time] | <code>number</code> |  | Service time (seconds). |
| [props.addresses.time_window_start] | <code>number</code> |  | Time Window Start in seconds, relative to the route start date (midnight), UTC time zone. It is relative to start date because start time changes would shift time windows. |
| [props.addresses.time_window_end] | <code>number</code> |  | Time Window End in seconds, relative to the route start date (midnight), UTC time zone. It is relative to start date because start time changes would shift time windows. |
| [props.addresses.tags] | <code>Array.&lt;string&gt;</code> |  | Array of address tags. |
| [props.addresses.contact_id] | <code>number</code> |  | Address book contact id (0 means not connected to the address book). |
| [props.optimized_callback_url] | <code>string</code> |  | A URL that gets called when the optimization is solved, or if there is an error. The callback is called with a POST request. The POST data sent is: timestamp (Seconds) - Server timestamp of request sent; optimization_problem_id (Hash String) - ID of the optimization; state (Small Int) - The state can be one of the values:     4 = OPTIMIZATION_STATE_OPTIMIZED, which means the optimization was successful;     5 = OPTIMIZATION_STATE_ERROR, which means there was an error solving the optimization. Query string (GET fields). |
| [isRedirect] | <code>boolean</code> |  | If set, it will be redirected. Use false for no redirection or not send. |
| callback | <code>RequestCallback</code> |  | The callback that handles the response. |

<a id="Optimizations+get" name="Optimizations+get"></a>

### optimizations.get(id, [callback])

GET a single optimization by
[optimization_problem_id](Optimizations#get~id) parameter.

**See**: [https://route4me.io/docs/#get-an-optimization](https://route4me.io/docs/#get-an-optimization)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Optimization Problem ID |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Optimizations.Optimization&gt;</code> |  |

<a id="Optimizations+list" name="Optimizations+list"></a>

### optimizations.list(states, options, [callback])

GET all optimizations belonging to an user.

**See**: [https://route4me.io/docs/#get-optimizations](https://route4me.io/docs/#get-optimizations)  
**Todo**

- [ ] TODO: there is no JSON-schema for the response
- [ ] TODO: convert options to optional parameter


| Param | Type | Description |
| --- | --- | --- |
| states | <code>number</code> \| <code>string</code> \| <code>Array.&lt;string&gt;</code> \| <code>Array.&lt;number&gt;</code> | List of states [1..6] |
| options | <code>Object</code> | List-parameters |
| [options.limit] | <code>number</code> | List limit |
| [options.offset] | <code>number</code> | List offset |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Optimizations.Optimizations&gt;</code> |  |

<a id="Optimizations+update" name="Optimizations+update"></a>

### optimizations.update(id, data, [reoptimize], [callback])

Edit optimization

Re-optimize existing optimizations by changing some parameters or addresses.

**See**: [https://route4me.io/docs/#re-optimize-an-optimization](https://route4me.io/docs/#re-optimize-an-optimization)  
**Since**: 0.1.7  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>string</code> |  | Optimization Problem ID |
| data | <code>jsonschema:Optimizations.CreateRequest</code> |  | New values for `Optimization` |
| [reoptimize] | <code>boolean</code> | <code>false</code> | Determine, whether the `Optimization` should be reoptimized |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Optimizations.Response&gt;</code> |  |  |

<a id="Optimizations+remove" name="Optimizations+remove"></a>

### optimizations.remove(ids, [callback])

Remove an existing optimization belonging to an user.

**See**: [https://route4me.io/docs/#remove-an-optimization](https://route4me.io/docs/#remove-an-optimization)  
**Since**: 0.1.7  
**Todo**

- [ ] TODO: There is no schema for validation an output


| Param | Type | Description |
| --- | --- | --- |
| ids | <code>string</code> | Optimization Problem IDs |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Optimizations.RemoveResponse&gt;</code> |  |

**Example**  
```javascript
const response = {
	"status":true,
	"removed":1
}
```
<a id="Optimizations+linkAddress" name="Optimizations+linkAddress"></a>

### optimizations.linkAddress(id, addresses, [reoptimize], [callback])

Insert an address into an optimization, resulting in the recalculation of optimal routes.

**Tag**: Optimizations  
**Tag**: Addresses  
**See**: [https://route4me.io/docs/#insert-an-address-into-an-optimization](https://route4me.io/docs/#insert-an-address-into-an-optimization)  
**Since**: 0.1.7  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>string</code> |  | Optimization Problem ID |
| addresses | <code>Array.&lt;jsonschema:Addresses.Address&gt;</code> |  | Addresses array |
| [reoptimize] | <code>boolean</code> | <code>false</code> | Determine, whether the `Optimization` should be reoptimized |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Addresses.Addresses&gt;</code> |  |  |

<a id="Optimizations+unlinkAddress" name="Optimizations+unlinkAddress"></a>

### optimizations.unlinkAddress(id, addressId, [callback])

Remove a destination (an address) with specified route_destination_id
from an optimization problem with specified optimization_problem_id.

**Tag**: Optimizations  
**Tag**: Addresses  
**See**: [https://route4me.io/docs/#remove-an-address-from-an-optimization](https://route4me.io/docs/#remove-an-address-from-an-optimization)  
**Since**: 0.1.7  
**Todo**

- [ ] TODO: There is no schema for validation an output


| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Optimization Problem ID |
| addressId | <code>number</code> | Address ID |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Optimizations.UnlinkAddressResponse&gt;</code> |  |

**Example**  
```javascript
const response = {
	"deleted":true,
	"route_destination_id":1
}
```
