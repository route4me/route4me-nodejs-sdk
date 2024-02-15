<a id="OrdersV5" name="OrdersV5"></a>

## OrdersV5 ℗

Orders facility

**Category**: OrdersV5  
**Access**: private  
**See**: [https://route4me.io/docs/#orders](https://route4me.io/docs/#orders)  
**Since**: 1.0.30  

* [OrdersV5](#OrdersV5) ℗
    * [new OrdersV5(requestManager)](#new_OrdersV5_new)
    * [.create(data, [date_scheduled_for], [callback])](#OrdersV5+create)
    * [.get(id, [callback])](#OrdersV5+get)
    * [.update(id, data, [callback])](#OrdersV5+update)
    * [.remove(id, [callback])](#OrdersV5+remove)
    * [.search(data, [callback])](#OrdersV5+search)
    * [.batchUpdateByFilters(params, [callback])](#OrdersV5+batchUpdateByFilters)
    * [.batchRemove(orderIds, [callback])](#OrdersV5+batchRemove)
    * [.batchUpdate(orderIds, data, [callback])](#OrdersV5+batchUpdate)
    * [.batchCreate(orders, [callback])](#OrdersV5+batchCreate)
    * [.getOrderCustomFields([callback])](#OrdersV5+getOrderCustomFields)
    * [.createOrderCustomFields(data, [callback])](#OrdersV5+createOrderCustomFields)
    * [.updateOrderCustomFields(uuid, data, [callback])](#OrdersV5+updateOrderCustomFields)
    * [.removeOrderCustomFields(uuid, [callback])](#OrdersV5+removeOrderCustomFields)

<a id="new_OrdersV5_new" name="new_OrdersV5_new"></a>

### new OrdersV5(requestManager)

Constructor

**Returns**: <code>Orders</code> - - Orders facility  

| Param | Type | Description |
| --- | --- | --- |
| requestManager | <code>RequestManager</code> | Request Manager |

<a id="OrdersV5+create" name="OrdersV5+create"></a>

### ordersV5.create(data, [date_scheduled_for], [callback])

Create single order

**See**: [https://route4me.io/docs/#create-an-order](https://route4me.io/docs/#create-an-order)  
**Since**: 1.0.30  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Parameters of order to create |
| [data.member_id] | <code>Number</code> | Order owner ID. |
| [data.address_1] | <code>String</code> | The order Address line 1. |
| [data.address_2] | <code>String</code> | The order Address line 2. |
| [data.address_alias] | <code>String</code> | Address alias. |
| [data.address_city] | <code>String</code> | The city the address is located in. |
| [data.address_state] | <code>String</code> | The state the address is located in. |
| [data.address_zip] | <code>String</code> | The zip code the address is located in. |
| [data.address_country] | <code>String</code> | The country the address is located in. |
| data.address_geo | <code>Object</code> | GPS coords of address. |
| [data.address_geo.lat] | <code>Number</code> | Latitude. |
| [data.address_geo.lng] | <code>Number</code> | Longitude. |
| data.curbside_geo | <code>Object</code> | Curbside GPS coords of address. |
| [data.curbside_geo.lat] | <code>Number</code> | Curbside latitude. |
| [data.curbside_geo.lng] | <code>Number</code> | Curbside longitude. |
| [date_scheduled_for] | <code>String</code> | Date scheduled. Possible formats: YY-MM-DD, YYMMDD, ISO 8601 |
| [data.order_status_id] | <code>Number</code> | Order status ID. |
| [data.is_pending] | <code>Boolean</code> | If true, the order is pending. |
| [data.is_accepted] | <code>Boolean</code> | If true, the order is accepted. |
| [data.is_started] | <code>Boolean</code> | If true, the order is started. |
| [data.is_completed] | <code>Boolean</code> | If true, the order is completed. |
| [data.is_validated] | <code>Boolean</code> | If true, the order is validated. |
| [data.phone] | <code>String</code> | The phone number. |
| [data.first_name] | <code>String</code> | The first name. |
| [data.last_name] | <code>String</code> | The last name. |
| [data.email] | <code>String</code> | E-mail. |
| [data.custom_data] | <code>Object</code> | Order custom data. |
| [data.custom_data.barcode] | <code>String</code> | Tracking number for order. |
| [data.custom_data.airbillno] | <code>String</code> | Additional tracking number for order. |
| [data.custom_data.sorted_on_date] | <code>String</code> | Datetime String with "T" delimiter, ISO 8601. |
| [data.custom_data.sorted_on_utc] | <code>Number</code> | Timestamp only; replaced data in `sorted_on_date` property. |
| data.local_time_windows | <code>Array.&lt;Object&gt;</code> | Array of Time Window objects. |
| data.local_time_windows.start | <code>Number</code> | Start of Time Window, unix timestamp. |
| data.local_time_windows.end | <code>Number</code> | End of Time Window, unix timestamp. |
| [data.local_timezone_string] | <code>String</code> | Local timezone String |
| [data.service_time] | <code>Number</code> | Consumed service time. |
| [data.color] | <code>String</code> | Color of an address, e.g., 'FF0000'. |
| [data.tracking_number] | <code>String</code> | Tracking number |
| [data.address_stop_type] | <code>String</code> | The type of stop that this is one of 'DELIVERY', 'PICKUP', 'BREAK', 'MEETUP', 'SERVICE', 'VISIT' or 'DRIVEBY'. |
| [data.last_status] | <code>Number</code> |  |
| [data.weight] | <code>Number</code> | Weight of the cargo. |
| [data.cost] | <code>Number</code> | Cost of the cargo. |
| [data.revenue] | <code>Number</code> | The total revenue for the order. |
| [data.cube] | <code>Number</code> | The cubic volume of the cargo. |
| [data.pieces] | <code>Number</code> | The item quantity of the cargo. |
| [data.group] | <code>String</code> | The group. |
| data.address_priority | <code>Number</code> | Priority of address 0 is the highest priority, n has higher priority than n + 1 |
| data.address_customer_po | <code>String</code> | The customer purchase order for the address, length <= 50. |
| data.custom_fields | <code>Array.&lt;Object&gt;</code> | Array of Custom Fields objects. |
| data.custom_fields.order_custom_field_uuid | <code>String</code> | HEX-String. |
| data.custom_fields.order_custom_field_value | <code>String</code> | Value of Custom Fields. |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Orders.Order&gt;</code> |  |

**Example** *(Sample input)*  
```javascript

		const data = {
			"address_1": "1358 E Luzerne St, Philadelphia, PA 19124, US",
			"address_alias": "Auto test address",
			"address_city": "Philadelphia",
			"address_geo": {
				"lat": "48.335991",
				"lng": "31.18287",
			},
			"phone": "380380380380",
			"first_name": "Igor",
			"last_name": "Progman",
			"email": "progman@gmail.com",
			"custom_data": {
				"barcode": "12345678901",
				"sorted_on_utc": "1702744115"
			}
		};
```
<a id="OrdersV5+get" name="OrdersV5+get"></a>

### ordersV5.get(id, [callback])

Show single order by its id

**See**: [https://route4me.io/docs/#get-an-order-details](https://route4me.io/docs/#get-an-order-details)  
**Since**: 1.0.30  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | Order ID, HEX-String |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Orders.Order&gt;</code> |  |

<a id="OrdersV5+update" name="OrdersV5+update"></a>

### ordersV5.update(id, data, [callback])

Update single order by its id

**See**: [https://route4me.io/docs/#update-an-order](https://route4me.io/docs/#update-an-order)  
**Since**: 1.0.30  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | Order ID, HEX-String |
| data | <code>Object</code> | Parameters of order to update, look for more information in create() |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Orders.Order&gt;</code> |  |

**Example** *(Sample input)*  
```javascript

const id = "CCCCCA90F77841C693C656123F346AAA";
const data = {
    "first_name": "John",
    "last_name": "Doe",
    "email": "John@company.com",
};
```
<a id="OrdersV5+remove" name="OrdersV5+remove"></a>

### ordersV5.remove(id, [callback])

Delete (soft) single order by its id

**See**: [https://route4me.io/docs/#remove-an-order](https://route4me.io/docs/#remove-an-order)  
**Since**: 1.0.30  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | Order ID, HEX-String |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="OrdersV5+search" name="OrdersV5+search"></a>

### ordersV5.search(data, [callback])

Search orders in ElasticSearch storage or in Spanner database

**See**: [https://route4me.io/docs/#search-orders](https://route4me.io/docs/#search-orders)  
**Since**: 1.0.30  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | <code>Object</code> |  | Search and filter parameters. |
| [data.order_ids] | <code>Array.&lt;String&gt;</code> |  | Array of order ids, HEX-Strings. |
| data.return_provided_fields_as_map | <code>Boolean</code> |  |  |
| data.orderBy | <code>Array.&lt;Object&gt;</code> |  | Search and filter parameters. |
| orderBy.0 | <code>String</code> |  | The name of the sort field, this is one of 'address_alias', 'first_name', 'last_name', 'phone', 'is_pending', 'is_validated', 'is_accepted', 'is_completed', 'scheduled_for', 'day_added' |
| [orderBy.1] | <code>String</code> | <code>&#x27;asc&#x27;</code> | Sorting direction, this is one of 'asc', 'ASC', 'desc', 'DESC' |
| data.limit | <code>Number</code> |  | = 30				- The number of orders per page. |
| data.offset | <code>Number</code> |  | = 0				- The requested page. |
| data.fields | <code>Array.&lt;String&gt;</code> |  | An array of returned fields, this is one of 'order_uuid', 'member_id', 'address_1', 'address_2', 'address_alias', 'address_city', 'address_state', 'address_zip', 'address_country', 'coordinates', 'curbside_coordinates', 'updated_timestamp', 'created_timestamp', 'day_added', 'scheduled_for', 'order_status_id', 'is_pending', 'is_started', 'is_completed', 'is_validated', 'phone', 'first_name', 'last_name', 'email', 'custom_data', 'local_time_windows', 'local_timezone', 'service_time', 'color', 'icon', 'last_visited_timestamp', 'visited_count', 'in_route_count', 'last_routed_timestamp', 'tracking_number', 'organization_id', 'root_member_id', 'address_stop_type', 'last_status', 'sorted_day_id', 'weight', 'cost', 'revenue', 'cube', 'pieces', 'done_day_id', 'possession_day_id', 'group', 'workflow_uuid', 'address_priority' |
| data.addition | <code>Array.&lt;String&gt;</code> |  | An array of additional returned fields, this is one of 'territory_ids', 'aggregation_ids' |
| [data.search] | <code>Object</code> |  | Search parameters. |
| [data.search.query] | <code>String</code> |  | The string to query to ElasticSearch. If set the `matches` and `terms` sections will be ignored. |
| [data.search.matches] | <code>Object</code> |  | The object to query to ElasticSearch. |
| [data.search.matches.custom_data] | <code>Object</code> |  | Order custom data. |
| [data.search.matches.custom_data.barcode] | <code>String</code> |  | Tracking number for order. |
| [data.search.matches.custom_data.airbillno] | <code>String</code> |  | Additional tracking number for order. |
| [data.search.matches.custom_data.sorted_on_date] | <code>String</code> |  | Datetime String with "T" delimiter, ISO 8601. |
| [data.search.matches.custom_data.sorted_on_utc] | <code>Number</code> |  | Timestamp only; replaced data in `sorted_on_date` property. |
| [data.search.matches.first_name] | <code>String</code> |  | The first name. |
| [data.search.matches.last_name] | <code>String</code> |  | The last name. |
| [data.search.matches.email] | <code>String</code> |  | E-mail. |
| [data.search.matches.phone] | <code>String</code> |  | The phone number. |
| [data.search.matches.address_1] | <code>String</code> |  | The order Address line 1. |
| [data.search.matches.address_alias] | <code>String</code> |  | Address alias. |
| [data.search.matches.address_zip] | <code>String</code> |  | The zip code of the address. |
| [data.search.terms] | <code>Object</code> |  | The object to query to ElasticSearch. |
| [data.search.terms.custom_data] | <code>Object</code> |  | Order custom data. |
| [data.search.terms.custom_data.barcode] | <code>String</code> |  | Tracking number for order. |
| [data.search.terms.custom_data.airbillno] | <code>String</code> |  | Additional tracking number for order. |
| [data.search.terms.custom_data.sorted_on_date] | <code>String</code> |  | Datetime String with "T" delimiter, ISO 8601. |
| [data.search.terms.custom_data.sorted_on_utc] | <code>Number</code> |  | Timestamp only; replaced data in `sorted_on_date` property. |
| [data.search.terms.first_name] | <code>String</code> |  | The first name. |
| [data.search.terms.last_name] | <code>String</code> |  | The last name. |
| [data.search.terms.email] | <code>String</code> |  | E-mail. |
| [data.search.terms.phone] | <code>String</code> |  | The phone number. |
| [data.search.terms.address_1] | <code>String</code> |  | The order Address line 1. |
| [data.search.terms.address_alias] | <code>String</code> |  | Address alias. |
| [data.search.terms.address_zip] | <code>String</code> |  | The zip code the address is located in. |
| [data.filters] | <code>Object</code> |  | Filter parameters. |
| [data.filters.order_ids] | <code>Array.&lt;String&gt;</code> |  | Array of included order ids, HEX-Strings. |
| [data.filters.excluded_ids] | <code>Array.&lt;String&gt;</code> |  | Array of excluded order ids, HEX-Strings. |
| [data.filters.tracking_numbers] | <code>Array.&lt;String&gt;</code> |  | Array of tracking number of orders. |
| [data.filters.only_geocoded] | <code>Boolean</code> |  |  |
| [data.filters.updated_timestamp] | <code>Number</code> \| <code>String</code> \| <code>Object</code> |  | Can be unix timestamp or ISO 8601 or Object {"start": "timestamp or ISO 8601", "end": "timestamp or ISO 8601"}. |
| [data.filters.created_timestamp] | <code>Number</code> \| <code>String</code> \| <code>Object</code> |  | Can be unix timestamp or ISO 8601 or Object {"start": "timestamp or ISO 8601", "end": "timestamp or ISO 8601"}. |
| [data.filters.scheduled_for] | <code>Number</code> \| <code>String</code> \| <code>Object</code> |  | Can be unix timestamp or ISO 8601 or Object {"start": "timestamp or ISO 8601", "end": "timestamp or ISO 8601"}. |
| [data.filters.only_unscheduled] | <code>Boolean</code> |  |  |
| [data.filters.day_added] | <code>Number</code> \| <code>String</code> \| <code>Object</code> |  | Can be unix timestamp or ISO 8601 or Object {"start": "timestamp or ISO 8601", "end": "timestamp or ISO 8601"}. |
| [data.filters.sorted_on] | <code>Number</code> \| <code>String</code> \| <code>Object</code> |  | Can be unix timestamp or ISO 8601 or Object {"start": "timestamp or ISO 8601", "end": "timestamp or ISO 8601"}. |
| [data.filters.address_stop_types] | <code>Array.&lt;String&gt;</code> |  | Array of stop type names, possible values 'DELIVERY', 'PICKUP', 'BREAK', 'MEETUP', 'SERVICE', 'VISIT' or 'DRIVEBY'. |
| [data.filters.last_statuses] | <code>Array.&lt;Number&gt;</code> |  | Array of statuses. |
| [data.filters.territory_ids] | <code>Array.&lt;Number&gt;</code> |  | Array of territory ids. |
| [data.filters.done_day] | <code>String</code> |  |  |
| [data.filters.possession_day] | <code>String</code> |  |  |
| [data.filters.groups] | <code>Array.&lt;String&gt;</code> |  |  |
| [data.filters.display] | <code>String</code> | <code>&#x27;all&#x27;</code> | Filtering by the in_route_count field, is one of 'routed', 'unrouted', 'all' |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Orders.List&gt;</code> |  |  |

**Example** *(Sample input)*  
```javascript

		const data = {
			filters: {
				order_ids: [
					"CCCCCA90F77841C693C656123F346AAA",
					"BBB8CA90F77841C693C656123F346AAA"
				]
			}
		};
```
<a id="OrdersV5+batchUpdateByFilters" name="OrdersV5+batchUpdateByFilters"></a>

### ordersV5.batchUpdateByFilters(params, [callback])

Update the batch of orders (asynchronous, by filters)

**See**: [https://route4me.io/docs/#update-an-order](https://route4me.io/docs/#update-an-order)  
**Since**: 1.0.30  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Batch update parameters. |
| params.data | <code>Object</code> | Order values for batch update, look for more information in create() |
| params.search | <code>Object</code> | Search parameters for batch update, look for more information in search() |
| params.filters | <code>Object</code> | Filter parameters for batch update, look for more information in search() |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="OrdersV5+batchRemove" name="OrdersV5+batchRemove"></a>

### ordersV5.batchRemove(orderIds, [callback])

Delete the batch of orders

**See**: [https://route4me.io/docs/#remove-an-order](https://route4me.io/docs/#remove-an-order)  
**Since**: 1.0.30  

| Param | Type | Description |
| --- | --- | --- |
| orderIds | <code>String</code> | Array of Order IDs, HEX-Strings. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="OrdersV5+batchUpdate" name="OrdersV5+batchUpdate"></a>

### ordersV5.batchUpdate(orderIds, data, [callback])

Update the batch of orders by ids

**See**: [https://route4me.io/docs/#update-an-order](https://route4me.io/docs/#update-an-order)  
**Since**: 1.0.30  

| Param | Type | Description |
| --- | --- | --- |
| orderIds | <code>Object</code> | Array of Order IDs, HEX-Strings. |
| data | <code>Object</code> | Order values for batch update, look for more information in create() |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Orders.List&gt;</code> |  |

<a id="OrdersV5+batchCreate" name="OrdersV5+batchCreate"></a>

### ordersV5.batchCreate(orders, [callback])

Create the batch of orders

**See**: [https://route4me.io/docs/#update-an-order](https://route4me.io/docs/#update-an-order)  
**Since**: 1.0.30  

| Param | Type | Description |
| --- | --- | --- |
| orders | <code>Array.&lt;Object&gt;</code> | Array of Order values for batch create, look for more information in create() |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="OrdersV5+getOrderCustomFields" name="OrdersV5+getOrderCustomFields"></a>

### ordersV5.getOrderCustomFields([callback])

Get a list of Order Custom Fields

**See**: [https://route4me.io/docs/#get-an-order-details](https://route4me.io/docs/#get-an-order-details)  
**Since**: 1.0.30  

| Param | Type |
| --- | --- |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Orders.Response&gt;</code> | 

<a id="OrdersV5+createOrderCustomFields" name="OrdersV5+createOrderCustomFields"></a>

### ordersV5.createOrderCustomFields(data, [callback])

Create one Order Custom Field

**See**: [https://route4me.io/docs/#create-an-order-custom-fields](https://route4me.io/docs/#create-an-order-custom-fields)  
**Since**: 1.0.30  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Params of Order custom field |
| data.order_custom_field_name | <code>String</code> | Name, max 128 characters. |
| data.order_custom_field_type | <code>String</code> | Type, max 128 characters. |
| data.order_custom_field_label | <code>String</code> | Label, max 128 characters. |
| data.order_custom_field_type_info | <code>Object</code> | Info, as JSON Object max 4096 characters. |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Orders.Response&gt;</code> |  |

**Example** *(Sample input)*  
```javascript

		const orderTypeCheckbox = {
			order_custom_field_name: "CustomField4",
			order_custom_field_label: "Custom Field 4",
			order_custom_field_type: "checkbox",
			order_custom_field_type_info: { short_label: "cFl4" }
		}

		const = orderTypeDropdown = {
			order_custom_field_name: "TEST",
			order_custom_field_label: "MENU",
			order_custom_field_type: "dropdown",
			order_custom_field_short_caption: "MENU",
			order_custom_field_type_info: {
				short_caption: "MENU",
				allowed_values: ["10", "30", "50", “100”]
			}
		}
```
<a id="OrdersV5+updateOrderCustomFields" name="OrdersV5+updateOrderCustomFields"></a>

### ordersV5.updateOrderCustomFields(uuid, data, [callback])

Update one Order Custom Fields

**See**: [https://route4me.io/docs/#update-an-order-custom-fields](https://route4me.io/docs/#update-an-order-custom-fields)  
**Since**: 1.0.30  

| Param | Type | Description |
| --- | --- | --- |
| uuid | <code>Number</code> | OrderCustomField ID, HEX-string. |
| data | <code>Object</code> | Params of Order custom field |
| data.order_custom_field_type | <code>String</code> | Type, max 128 characters. |
| data.order_custom_field_label | <code>String</code> | Label, max 128 characters. |
| data.order_custom_field_type_info | <code>Object</code> | Info, as JSON Object max 4096 characters. |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Orders.Response&gt;</code> |  |

<a id="OrdersV5+removeOrderCustomFields" name="OrdersV5+removeOrderCustomFields"></a>

### ordersV5.removeOrderCustomFields(uuid, [callback])

Remove an Order Custom Fields

**See**: [https://route4me.io/docs/#remove-user-custom-field](https://route4me.io/docs/#remove-user-custom-field)  
**Since**: 1.0.30  

| Param | Type | Description |
| --- | --- | --- |
| uuid | <code>Number</code> | OrderCustomField ID, HEX-string. |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Orders.Response&gt;</code> |  |

