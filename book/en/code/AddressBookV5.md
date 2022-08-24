<a id="AddressBookV5" name="AddressBookV5"></a>

## AddressBookV5 ℗

AddressBookV5 facility

**Category**: AddressBookV5  
**Access**: private  
**See**: [https://route4me.io/docs/#address-book](https://route4me.io/docs/#address-book)  
**Since**: 1.0.11  

* [AddressBookV5](#AddressBookV5) ℗
    * [new AddressBookV5(requestManager)](#new_AddressBookV5_new)
    * [.addAddress(data, [callback])](#AddressBookV5+addAddress)
    * [.addMultipleAddresses(data, [callback])](#AddressBookV5+addMultipleAddresses)
    * [.getAddresses([options], callback)](#AddressBookV5+getAddresses)
    * [.getAddressesByBodyPayload([options], callback)](#AddressBookV5+getAddressesByBodyPayload)
    * [.getAddressesPaginated([options], callback)](#AddressBookV5+getAddressesPaginated)
    * [.getAddressesPaginatedByBodyPayload([options], callback)](#AddressBookV5+getAddressesPaginatedByBodyPayload)
    * [.getAddressClusters([options], callback)](#AddressBookV5+getAddressClusters)
    * [.getAddressClustersByBodyPayload([options], callback)](#AddressBookV5+getAddressClustersByBodyPayload)
    * [.getAddressById(addressId, callback)](#AddressBookV5+getAddressById)
    * [.getAddressesByIds(addressIds, callback)](#AddressBookV5+getAddressesByIds)
    * [.updateAddressById(addressId, data, callback)](#AddressBookV5+updateAddressById)
    * [.updateAddressesByIds(data, callback)](#AddressBookV5+updateAddressesByIds)
    * [.updateAddressesByAreas(filter, data, callback)](#AddressBookV5+updateAddressesByAreas)
    * [.deleteAddressesByIds(addressIds, callback)](#AddressBookV5+deleteAddressesByIds)
    * [.deleteAddressesByAreas(filter, callback)](#AddressBookV5+deleteAddressesByAreas)
    * [.getAddressCustomFields(callback)](#AddressBookV5+getAddressCustomFields)
    * [.getAddressesDepots(callback)](#AddressBookV5+getAddressesDepots)
    * [.exportAddressesByIds(addressIds, filename, callback)](#AddressBookV5+exportAddressesByIds)
    * [.exportAddressesByAreas(filter, callback)](#AddressBookV5+exportAddressesByAreas)
    * [.exportAddressesByAreaIds(territoryIds, filename, callback)](#AddressBookV5+exportAddressesByAreaIds)
    * [.getAddressesAsynchronousJobStatus(jobId, callback)](#AddressBookV5+getAddressesAsynchronousJobStatus)
    * [.getAddressesAsynchronousJobResult(jobId, callback)](#AddressBookV5+getAddressesAsynchronousJobResult)

<a id="new_AddressBookV5_new" name="new_AddressBookV5_new"></a>

### new AddressBookV5(requestManager)

Constructor

**Returns**: [<code>AddressBookV5</code>](#AddressBookV5) - - AddressBookV5 facility  

| Param | Type | Description |
| --- | --- | --- |
| requestManager | <code>RequestManager</code> | Request Manager |

<a id="AddressBookV5+addAddress" name="AddressBookV5+addAddress"></a>

### addressBookV5.addAddress(data, [callback])

Add a new Address Book Contact by sending a body payload with the corresponding parameters.

**See**: [https://route4me.io/docs/#create-a-location](https://route4me.io/docs/#create-a-location)  
**Since**: 1.0.11  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | List-parameters |
| data.address_1 | <code>String</code> | The route Address Line 1. |
| data.cached_lat | <code>Number</code> | Cached latitude. |
| data.cached_lng | <code>Number</code> | Cached longitude. |
| data.address_stop_type | <code>String</code> | The type of stop that this is one of 'DELIVERY', 'PICKUP', 'BREAK', 'MEETUP', 'SERVICE', 'VISIT' or 'DRIVEBY'. |
| [data.created_timestamp] | <code>Number</code> | When the contact created. |
| [data.address_2] | <code>String</code> | The route Address Line 2 which is not used for geocoding. |
| [data.member_id] | <code>Number</code> | Address book contact owner ID. |
| [data.address_zip] | <code>String</code> | The zip code the address is located in. |
| [data.address_group] | <code>String</code> | Address group. |
| [data.address_alias] | <code>String</code> | Address alias. |
| [data.address_city] | <code>String</code> | The city the address is located in. |
| [data.address_state_id] | <code>String</code> | The state the address is located in. |
| [data.address_country_id] | <code>String</code> | The country the address is located in. |
| [data.first_name] | <code>String</code> | The first name of the receiving address. |
| [data.last_name] | <code>String</code> | The last name of the receiving party. |
| [data.address_email] | <code>String</code> | Address email. |
| [data.address_phone_number] | <code>String</code> | The phone number for the address. |
| [data.curbside_lat] | <code>Number</code> | Curbside latitude. |
| [data.curbside_lng] | <code>Number</code> | Curbside longitude. |
| [data.address_custom_data] | <code>Object</code> | Address custom data. |
| [data.address_custom_data,'custom field name #1'] | <code>String</code> | Address custom data. |
| [data.address_custom_data,'custom field name #2'] | <code>String</code> | Address custom data. |
| [data.local_time_window_start] | <code>Number</code> | Time Window Start in seconds, relative to the route start date (midnight), UTC time zone. It is relative to start date because start time changes would shift time windows. |
| [data.local_time_window_end] | <code>Number</code> | Time Window End in seconds, relative to the route start date (midnight), UTC time zone. It is relative to start datebecause start time changes would shift time windows. |
| [data.local_time_window_start_2] | <code>Number</code> | See local_time_window_start |
| [data.local_time_window_end_2] | <code>Number</code> | See local_time_window_end |
| [data.local_timezone_string] | <code>String</code> | Local timezone string |
| [data.service_time] | <code>Number</code> | Consumed service time at an address. |
| [data.color] | <code>String</code> | Color of an address, e.g., 'FF0000'. |
| [data.address_icon] | <code>String</code> | URL to an address icon file. |
| [data.schedule] | <code>Array.&lt;Object&gt;</code> | Array of the trip schedules to a location. |
| [data.schedule[].enabled] | <code>Boolean</code> | If true, the schedule is enabled. |
| [data.schedule[].mode] | <code>String</code> | Schedule mode. |
| [data.schedule[].monthly] | <code>Object</code> | Monthly. |
| [data.schedule[].monthly.every] | <code>Number</code> | Every. |
| [data.schedule_blacklist] | <code>Array.&lt;String&gt;</code> | Array of the dates, which should be excluded from a trip schedule to a location. Also can be a date string with the 'YYYY-MM-DD' format or null. |
| [data.address_cube] | <code>Number</code> | The cubic volume of the cargo being delivered or picked up at the address. |
| [data.address_pieces] | <code>Number</code> | The item quantity of the cargo being delivered or picked up at the address. |
| [data.address_reference_no] | <code>Number</code> | The reference number for the address. |
| [data.address_revenue] | <code>Number</code> | The total revenue for the address |
| [data.address_weight] | <code>Number</code> | Weight of the cargo being delivered or picked up at the address. |
| [data.address_priority] | <code>Number</code> | Priority of address 0 is the highest priority, n has higher priority than n + 1 |
| [data.address_customer_po] | <code>String</code> | The customer purchase order for the address |
| [data.eligible_pickup] | <code>Boolean</code> | If true, the address is eligible to pickup. |
| [data.eligible_depot] | <code>Boolean</code> | If true, the addrss is eligible to depot. |
| [data.assigned_to] | <code>Object</code> | Assigned to |
| [data.assigned_to.member_id] | <code>Number</code> | A member the address assigned to. |
| [data.assigned_to.member_first_name] | <code>String</code> | Member first name. |
| [data.assigned_to.member_last_name] | <code>String</code> | Member last name. |
| [data.assigned_to.member_email] | <code>String</code> | Member email. |
| [data.assigned_to.until] | <code>String</code> | The assignment is valid until to. |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AddressBookV5.AddressBookV5&gt;</code> |  |

<a id="AddressBookV5+addMultipleAddresses" name="AddressBookV5+addMultipleAddresses"></a>

### addressBookV5.addMultipleAddresses(data, [callback])

Add multiple new Address Book Contacts by sending a body payload with the array of
the corresponding Address parameters.

**See**: [https://route4me.io/docs/#create-a-location](https://route4me.io/docs/#create-a-location)  
**Since**: 1.0.11  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Array of addresses look for more information in addAddresses. |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AddressBookV5.AddressBookV5&gt;</code> |  |

<a id="AddressBookV5+getAddresses" name="AddressBookV5+getAddresses"></a>

### addressBookV5.getAddresses([options], callback)

Get all Addresses filtered by specifying the corresponding query parameters.

**See**: [https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0](https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0)  
**Since**: 1.0.11  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | List-parameters |
| [options.fields] | <code>String</code> |  | Comma-delimited list of the address fields to be included into the search results. e.g., "address_id, address_alias, address_1). |
| [options.display] | <code>String</code> | <code>all</code> | Specify which Addresses to show in the corresponding query results. Possible values: 'all' - all records; 'routed' - only routed records; 'unrouted' - only unrouted records. |
| [options.query] | <code>String</code> |  | Search in the Addresses by the corresponding query phrase. |
| [options.page] | <code>Number</code> | <code>1</code> | Requested page. |
| [options.per_page] | <code>Number</code> | <code>30</code> | Number of Addresses per page. |
| callback | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AddressBookV5.AddressBookSearchResult&gt;</code> |  |  |

<a id="AddressBookV5+getAddressesByBodyPayload" name="AddressBookV5+getAddressesByBodyPayload"></a>

### addressBookV5.getAddressesByBodyPayload([options], callback)

Get all Addresses filtered and sorted by sending the corresponding body payload, with
the option to search by the specified areas.

**See**: [https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0](https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0)  
**Since**: 1.0.11  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | List-parameters |
| [options.fields] | <code>Array.&lt;String&gt;</code> | <code>[]</code> | An array of the fields to be included in the search result. e.g., ["address_id", "address_alias", "address_1"] |
| [options.filter] | <code>Object</code> |  | FIlter parameters |
| [options.filter.query] | <code>String</code> |  | Query string. |
| [options.filter.selected_areas] | <code>Array.&lt;Object&gt;</code> |  | Selected areas |
| [options.filter.selected_areas.type] | <code>string</code> |  | Area type. |
| [options.filter.selected_areas.value] | <code>Object</code> |  | Area parameters. Possible values: 'circle', 'polygon', 'rect'. e.g., { type: "circle", value: { center: { lat: 40, lng: 80 }, distance: 1000 }} { type: "polygon", value: { points: [{ 74, 40 }, { 88, 30 }, { 90, 25 }]}} { type: "rect", value: { top_left: { 50, 90 }, bottom_right: { 48, 70 }}} |
| [options.filter.bounding_box] | <code>Object</code> |  | Coordinates of bounding box |
| [options.filter.bounding_box.top] | <code>Number</code> |  | Top |
| [options.filter.bounding_box.left] | <code>Number</code> |  | Left |
| [options.filter.bounding_box.bottom] | <code>Number</code> |  | Bottom |
| [options.filter.bounding_box.right] | <code>Number</code> |  | Right |
| [options.filter.center] | <code>Object</code> |  | GPS coordinates of central point. |
| [options.filter.center.lat] | <code>Number</code> |  | Latitude. |
| [options.filter.center.lng] | <code>Number</code> |  | Longitude. |
| [options.filter.distance] | <code>Number</code> |  | Distance from the area center. |
| [options.filter.display] | <code>String</code> |  | Display option of the contacts. Possible values: 'all' - all records; 'routed' - only routed records; 'unrouted' - only unrouted records. |
| [options.filter.assigned_member_id] | <code>Number</code> |  | A member the contact assigned to. |
| [options.filter.is_assigned] | <code>Boolean</code> |  | If true, the contact assigned to a member. |
| [options.order_by] | <code>Array.&lt;String&gt;</code> |  | Array of order fields You can sort the results using the specified fields: address_1 address_alias first_name last_name address_phone_number address_email address_group in_route_count visited_count last_visited_timestamp last_routed_timestamp e.g., [["address_1", "asc"], ["last_name", "desc"]] |
| [options.offset] | <code>Number</code> |  | List offset |
| [options.limit] | <code>Number</code> |  | List limit |
| callback | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AddressBookV5.AddressBookSearchResult&gt;</code> |  |  |

<a id="AddressBookV5+getAddressesPaginated" name="AddressBookV5+getAddressesPaginated"></a>

### addressBookV5.getAddressesPaginated([options], callback)

Get a paginated list of all Addresses.

**See**: [https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0](https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0)  
**Since**: 1.0.11  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | List-parameters |
| [options.fields] | <code>String</code> |  | Comma-delimited list of the address fields to be included into the search results. e.g., "address_id, address_alias, address_1). |
| [options.display] | <code>String</code> | <code>all</code> | Specify which Addresses to show in the corresponding query results. Possible values: 'all' - all records; 'routed' - only routed records; 'unrouted' - only unrouted records. |
| [options.query] | <code>String</code> |  | Search in the Addresses by the corresponding query phrase. |
| [options.page] | <code>Number</code> | <code>1</code> | Requested page. |
| [options.per_page] | <code>Number</code> | <code>30</code> | Number of Addresses per page. |
| callback | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AddressBookV5.AddressBookSearchResult&gt;</code> |  |  |

<a id="AddressBookV5+getAddressesPaginatedByBodyPayload" name="AddressBookV5+getAddressesPaginatedByBodyPayload"></a>

### addressBookV5.getAddressesPaginatedByBodyPayload([options], callback)

Get the paginated list of all Addresses filtered and sorted by sending the corresponding
body payload, with the option to search by the specified areas.

**See**: [https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0](https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0)  
**Since**: 1.0.11  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | List-parameters |
| [options.fields] | <code>Array.&lt;String&gt;</code> | <code>[]</code> | An array of the fields to be included in the search result. e.g., ["address_id", "address_alias", "address_1"] |
| [options.filter] | <code>Object</code> |  | FIlter parameters |
| [options.filter.query] | <code>String</code> |  | Query string. |
| [options.filter.selected_areas] | <code>Array.&lt;Object&gt;</code> |  | Selected areas |
| [options.filter.selected_areas.type] | <code>string</code> |  | Area type. |
| [options.filter.selected_areas.value] | <code>Object</code> |  | Area parameters. Possible values: 'circle', 'polygon', 'rect'. e.g., { type: "circle", value: { center: { lat: 40, lng: 80 }, distance: 1000 }} { type: "polygon", value: { points: [{ 74, 40 }, { 88, 30 }, { 90, 25 }]}} { type: "rect", value: { top_left: { 50, 90 }, bottom_right: { 48, 70 }}} |
| [options.filter.bounding_box] | <code>Object</code> |  | Coordinates of bounding box |
| [options.filter.bounding_box.top] | <code>Number</code> |  | Top |
| [options.filter.bounding_box.left] | <code>Number</code> |  | Left |
| [options.filter.bounding_box.bottom] | <code>Number</code> |  | Bottom |
| [options.filter.bounding_box.right] | <code>Number</code> |  | Right |
| [options.filter.center] | <code>Object</code> |  | GPS coordinates of central point. |
| [options.filter.center.lat] | <code>Number</code> |  | Latitude. |
| [options.filter.center.lng] | <code>Number</code> |  | Longitude. |
| [options.filter.distance] | <code>Number</code> |  | Distance from the area center. |
| [options.filter.display] | <code>String</code> |  | Display option of the contacts. Possible values: 'all' - all records; 'routed' - only routed records; 'unrouted' - only unrouted records. |
| [options.filter.assigned_member_id] | <code>Number</code> |  | A member the contact assigned to. |
| [options.filter.is_assigned] | <code>Boolean</code> |  | If true, the contact assigned to a member. |
| [options.order_by] | <code>Array.&lt;String&gt;</code> |  | Array of order fields You can sort the results using the specified fields: address_1 address_alias first_name last_name address_phone_number address_email address_group in_route_count visited_count last_visited_timestamp last_routed_timestamp e.g., [["address_1", "asc"], ["last_name", "desc"]] |
| [options.page] | <code>Number</code> |  | Page number. |
| [options.per_page] | <code>Number</code> |  | Records number per page. |
| callback | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AddressBookV5.AddressBookSearchResult&gt;</code> |  |  |

<a id="AddressBookV5+getAddressClusters" name="AddressBookV5+getAddressClusters"></a>

### addressBookV5.getAddressClusters([options], callback)

Get the Address clusters filtered by the corresponding query text, and with the option
to filter the result by the 'routed' and 'unrouted' state.

**See**: [https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0](https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0)  
**Since**: 1.0.11  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | List-parameters |
| [options.display] | <code>String</code> | <code>all</code> | Specify which Addresses to show in the corresponding query results. Possible values: 'all' - all records; 'routed' - only routed records; 'unrouted' - only unrouted records. |
| [options.query] | <code>String</code> |  | Search in the Addresses by the corresponding query phrase. |
| callback | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AddressBookV5.AddressBookSearchResult&gt;</code> |  |  |

<a id="AddressBookV5+getAddressClustersByBodyPayload" name="AddressBookV5+getAddressClustersByBodyPayload"></a>

### addressBookV5.getAddressClustersByBodyPayload([options], callback)

Get the Address clusters by sending the corresponding body payload.

**See**: [https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0](https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0)  
**Since**: 1.0.11  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | List-parameters |
| [options.clustering] | <code>Object</code> |  | Clustering |
| [options.clustering.precision] | <code>Number</code> | <code>5</code> | Clusering precision. Possible values from 1 to 12. |
| [options.filter] | <code>Object</code> |  | FIlter parameters |
| [options.filter.query] | <code>String</code> |  | Query string. |
| [options.filter.selected_areas] | <code>Array.&lt;Object&gt;</code> |  | Selected areas |
| [options.filter.selected_areas.type] | <code>string</code> |  | Area type. |
| [options.filter.selected_areas.value] | <code>Object</code> |  | Area parameters. Possible values: 'circle', 'polygon', 'rect'. e.g., { type: "circle", value: { center: { lat: 40, lng: 80 }, distance: 1000 }} { type: "polygon", value: { points: [{ 74, 40 }, { 88, 30 }, { 90, 25 }]}} { type: "rect", value: { top_left: { 50, 90 }, bottom_right: { 48, 70 }}} |
| [options.filter.bounding_box] | <code>Object</code> |  | Coordinates of bounding box |
| [options.filter.bounding_box.top] | <code>Number</code> |  | Top |
| [options.filter.bounding_box.left] | <code>Number</code> |  | Left |
| [options.filter.bounding_box.bottom] | <code>Number</code> |  | Bottom |
| [options.filter.bounding_box.right] | <code>Number</code> |  | Right |
| [options.filter.center] | <code>Object</code> |  | GPS coordinates of central point. |
| [options.filter.center.lat] | <code>Number</code> |  | Latitude. |
| [options.filter.center.lng] | <code>Number</code> |  | Longitude. |
| [options.filter.distance] | <code>Number</code> |  | Distance from the area center. |
| [options.filter.display] | <code>String</code> | <code>all</code> | Display option of the contacts. Possible values: 'all' - all records; 'routed' - only routed records; 'unrouted' - only unrouted records. |
| [options.filter.assigned_member_id] | <code>Number</code> |  | A member the contact assigned to. |
| [options.filter.is_assigned] | <code>Boolean</code> |  | If true, the contact assigned to a member. |
| callback | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AddressBookV5.AddressBookSearchResult&gt;</code> |  |  |

<a id="AddressBookV5+getAddressById" name="AddressBookV5+getAddressById"></a>

### addressBookV5.getAddressById(addressId, callback)

Find an Address by sending the 'address_id' query parameter.

**See**: [https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0](https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0)  
**Since**: 1.0.11  

| Param | Type | Description |
| --- | --- | --- |
| addressId | <code>Number</code> | The Address ID to be searched for. |
| callback | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AddressBookV5.AddressBookSearchResult&gt;</code> |  |

<a id="AddressBookV5+getAddressesByIds" name="AddressBookV5+getAddressesByIds"></a>

### addressBookV5.getAddressesByIds(addressIds, callback)

Find multiple Addresses by sending a body payload with the array of
the corresponding Address IDs.

**See**: [https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0](https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0)  
**Since**: 1.0.11  

| Param | Type | Description |
| --- | --- | --- |
| addressIds | <code>Array.&lt;Number&gt;</code> | The Address ID to be searched for. |
| callback | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AddressBookV5.AddressBookSearchResult&gt;</code> |  |

<a id="AddressBookV5+updateAddressById" name="AddressBookV5+updateAddressById"></a>

### addressBookV5.updateAddressById(addressId, data, callback)

Update the Address Book Contact by specifying the 'address_id' path parameter
and by sending a body payload with the corresponding Address parameters.

**See**: [https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0](https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0)  
**Since**: 1.0.11  

| Param | Type | Description |
| --- | --- | --- |
| addressId | <code>Number</code> | The Address ID to update. |
| data | <code>Object</code> | Parameters of address to update,  look for more information in addAddresses |
| callback | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AddressBookV5.AddressBookSearchResult&gt;</code> |  |

<a id="AddressBookV5+updateAddressesByIds" name="AddressBookV5+updateAddressesByIds"></a>

### addressBookV5.updateAddressesByIds(data, callback)

Update multiple Address Book Contacts by sending a body payload with the array
of the corresponding Address IDs and Address parameters.

**See**: [https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0](https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0)  
**Since**: 1.0.11  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Address IDs and Address parameters |
| data.service_time | <code>Number</code> | Consumed service time at an address. |
| [data.address_ids] | <code>Array.&lt;Number&gt;</code> | An array of the address IDs. |
| [data.address_1] | <code>String</code> | The route Address Line 1. |
| [data.address_2] | <code>String</code> | The route Address Line 2 which is not used for geocoding. |
| [data.address_zip] | <code>String</code> | The zip code the address is located in. |
| [data.address_group] | <code>String</code> | Address group. |
| [data.address_alias] | <code>String</code> | Address alias. |
| [data.address_city] | <code>String</code> | The city the address is located in. |
| [data.address_state_id] | <code>String</code> | The state the address is located in. |
| [data.address_country_id] | <code>String</code> | The country the address is located in. |
| [data.first_name] | <code>String</code> | The first name of the receiving address. |
| [data.last_name] | <code>String</code> | The last name of the receiving party. |
| [data.address_email] | <code>String</code> | Address email. |
| [data.address_phone_number] | <code>String</code> | The phone number for the address. |
| [data.cached_lat] | <code>Number</code> | Cached latitude. |
| [data.cached_lng] | <code>Number</code> | Cached longitude. |
| [data.curbside_lat] | <code>Number</code> | Curbside latitude. |
| [data.curbside_lng] | <code>Number</code> | Curbside longitude. |
| [data.address_custom_data] | <code>Object</code> | Address custom data. |
| [data.address_custom_data,'custom field name #1'] | <code>String</code> | Address custom data. |
| [data.address_custom_data,'custom field name #2'] | <code>String</code> | Address custom data. |
| [data.local_time_window_start] | <code>Number</code> | Time Window Start in seconds, relative to the route start date (midnight), UTC time zone. It is relative to start date because start time changes would shift time windows. |
| [data.local_time_window_end] | <code>Number</code> | Time Window End in seconds, relative to the route start date (midnight), UTC time zone. It is relative to start datebecause start time changes would shift time windows. |
| [data.local_time_window_start_2] | <code>Number</code> | See local_time_window_start |
| [data.local_time_window_end_2] | <code>Number</code> | See local_time_window_end |
| [data.local_timezone_string] | <code>String</code> | Local timezone string |
| [data.color] | <code>String</code> | Color of an address, e.g., 'FF0000'. |
| [data.address_icon] | <code>String</code> | URL to an address icon file. |
| [data.schedule] | <code>Array.&lt;Object&gt;</code> | Array of the trip schedules to a location. |
| [data.schedule[].enabled] | <code>Boolean</code> | If true, the schedule is enabled. |
| [data.schedule[].mode] | <code>String</code> | Schedule mode. |
| [data.schedule[].monthly] | <code>Object</code> | Monthly. |
| [data.schedule[].monthly.every] | <code>Number</code> | Every. |
| [data.schedule_blacklist] | <code>Array.&lt;String&gt;</code> | Array of the dates, which should be excluded from a trip schedule to a location. Also can be a date string with the 'YYYY-MM-DD' format or null. |
| [data.address_stop_type] | <code>String</code> | The type of stop that this is one of 'DELIVERY', 'PICKUP', 'BREAK', 'MEETUP', 'SERVICE', 'VISIT' or 'DRIVEBY'. |
| [data.address_cube] | <code>Number</code> | The cubic volume of the cargo being delivered or picked up at the address. |
| [data.address_pieces] | <code>Number</code> | The item quantity of the cargo being delivered or picked up at the address. |
| [data.address_reference_no] | <code>Number</code> | The reference number for the address. |
| [data.address_revenue] | <code>Number</code> | The total revenue for the address |
| [data.address_weight] | <code>Number</code> | Weight of the cargo being delivered or picked up at the address. |
| [data.address_priority] | <code>Number</code> | Priority of address 0 is the highest priority, n has higher priority than n + 1 |
| [data.address_customer_po] | <code>String</code> | The customer purchase order for the address |
| [data.eligible_pickup] | <code>Boolean</code> | If true, the address is eligible to pickup. |
| [data.eligible_depot] | <code>Boolean</code> | If true, the addrss is eligible to depot. |
| callback | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AddressBookV5.AddressBookSearchResult&gt;</code> |  |

<a id="AddressBookV5+updateAddressesByAreas" name="AddressBookV5+updateAddressesByAreas"></a>

### addressBookV5.updateAddressesByAreas(filter, data, callback)

Update Address Book Contacts by sending a body payload with the corresponding query
text and specified territory areas.

**See**: [https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0](https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0)  
**Since**: 1.0.11  
**Todo**

- [ ] uncheckable result - 403 forbidden


| Param | Type | Description |
| --- | --- | --- |
| filter | <code>Object</code> | Filter parameters |
| [filter.query] | <code>String</code> | Search in the Addresses by the query phrase. |
| [filter.bounding_box] | <code>Object</code> | Coordinates of bounding box |
| [filter.bounding_box.top] | <code>Number</code> | Top |
| [filter.bounding_box.left] | <code>Number</code> | Left |
| [filter.bounding_box.bottom] | <code>Number</code> | Bottom |
| [filter.bounding_box.right] | <code>Number</code> | Right |
| filter.selected_areas | <code>Array.&lt;Object&gt;</code> | Selected areas |
| filter.selected_areas.type | <code>string</code> | Area type. |
| filter.selected_areas.value | <code>Object</code> | Area parameters. Possible values: 'circle', 'polygon', 'rect'. e.g., { type: "circle", value: { center: { lat: 40, lng: 80 }, distance: 1000 }} { type: "polygon", value: { points: [{ 74, 40 }, { 88, 30 }, { 90, 25 }]}} { type: "rect", value: { top_left: { 50, 90 }, bottom_right: { 48, 70 }}} |
| data | <code>Object</code> | Parameters of address to update, look for more information in addAddresses |
| [data.address_group] | <code>String</code> | Address group. |
| [data.address_alias] | <code>String</code> | Address alias. |
| [data.member_id] | <code>Number</code> | Address book contact owner ID. |
| [data.first_name] | <code>String</code> | The first name of the receiving address. |
| [data.last_name] | <code>String</code> | The last name of the receiving party. |
| [data.address_email] | <code>String</code> | Address email. |
| [data.address_phone_number] | <code>String</code> | The phone number for the address. |
| [data.address_custom_data] | <code>Object</code> | Address custom data. |
| [data.address_custom_data,'custom field name #1'] | <code>String</code> | Address custom data. |
| [data.address_custom_data,'custom field name #2'] | <code>String</code> | Address custom data. |
| [data.local_time_window_start] | <code>Number</code> | Time Window Start in seconds, relative to the route start date (midnight), UTC time zone. It is relative to start date because start time changes would shift time windows. |
| [data.local_time_window_end] | <code>Number</code> | Time Window End in seconds, relative to the route start date (midnight), UTC time zone. It is relative to start datebecause start time changes would shift time windows. |
| [data.local_time_window_start_2] | <code>Number</code> | See local_time_window_start |
| [data.local_time_window_end_2] | <code>Number</code> | See local_time_window_end |
| [data.service_time] | <code>Number</code> | Consumed service time at an address. |
| [data.local_timezone_string] | <code>String</code> | Local timezone string |
| [data.color] | <code>String</code> | Color of an address, e.g., 'FF0000'. |
| [data.address_icon] | <code>String</code> | URL to an address icon file. |
| [data.eligible_pickup] | <code>Boolean</code> | If true, the address is eligible to pickup. |
| [data.eligible_depot] | <code>Boolean</code> | If true, the addrss is eligible to depot. |
| callback | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AddressBookV5.AddressBookSearchResult&gt;</code> |  |

<a id="AddressBookV5+deleteAddressesByIds" name="AddressBookV5+deleteAddressesByIds"></a>

### addressBookV5.deleteAddressesByIds(addressIds, callback)

Delete multiple Address Book Contacts by sending a body payload with the
array of the corresponding Address IDs.

**See**: [https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0](https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0)  
**Since**: 1.0.11  

| Param | Type | Description |
| --- | --- | --- |
| addressIds | <code>Array.&lt;Number&gt;</code> | The array of Address IDs to delete. |
| callback | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AddressBookV5.AddressBookSearchResult&gt;</code> |  |

<a id="AddressBookV5+deleteAddressesByAreas" name="AddressBookV5+deleteAddressesByAreas"></a>

### addressBookV5.deleteAddressesByAreas(filter, callback)

Delete the Address Book Contacts located in the selected areas by sending
the corresponding body payload.

**See**: [https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0](https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0)  
**Since**: 1.0.11  
**Todo**

- [ ] uncheckable result - 403 forbidden


| Param | Type | Description |
| --- | --- | --- |
| filter | <code>Object</code> | Filter parameters |
| [filter.query] | <code>String</code> | Search in the Addresses by the query phrase. |
| [filter.bounding_box] | <code>Object</code> | Coordinates of bounding box |
| [filter.bounding_box.top] | <code>Number</code> | Top |
| [filter.bounding_box.left] | <code>Number</code> | Left |
| [filter.bounding_box.bottom] | <code>Number</code> | Bottom |
| [filter.bounding_box.right] | <code>Number</code> | Right |
| filter.selected_areas | <code>Array.&lt;Object&gt;</code> | Selected areas |
| filter.selected_areas.type | <code>string</code> | Area type. |
| filter.selected_areas.value | <code>Object</code> | Area parameters. Possible values: 'circle', 'polygon', 'rect'. e.g., { type: "circle", value: { center: { lat: 40, lng: 80 }, distance: 1000 }} { type: "polygon", value: { points: [{ 74, 40 }, { 88, 30 }, { 90, 25 }]}} { type: "rect", value: { top_left: { 50, 90 }, bottom_right: { 48, 70 }}} |
| callback | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AddressBookV5.AddressBookSearchResult&gt;</code> |  |

<a id="AddressBookV5+getAddressCustomFields" name="AddressBookV5+getAddressCustomFields"></a>

### addressBookV5.getAddressCustomFields(callback)

Get all Address custom fields.

**See**: [https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0](https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0)  
**Since**: 1.0.11  

| Param | Type |
| --- | --- |
| callback | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AddressBookV5.AddressBookSearchResult&gt;</code> | 

<a id="AddressBookV5+getAddressesDepots" name="AddressBookV5+getAddressesDepots"></a>

### addressBookV5.getAddressesDepots(callback)

Get depots Addresses.

**See**: [https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0](https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0)  
**Since**: 1.0.11  

| Param | Type |
| --- | --- |
| callback | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AddressBookV5.AddressBookSearchResult&gt;</code> | 

<a id="AddressBookV5+exportAddressesByIds" name="AddressBookV5+exportAddressesByIds"></a>

### addressBookV5.exportAddressesByIds(addressIds, filename, callback)

Export Address Book Contacts to the specified file by sending a body
payload with the array of the corresponding Address IDs.

**See**: [https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0](https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0)  
**Since**: 1.0.11  

| Param | Type | Description |
| --- | --- | --- |
| addressIds | <code>Array.&lt;Number&gt;</code> | Export the specified Addresses. |
| filename | <code>String</code> | The name of the file to export. |
| callback | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AddressBookV5.AddressBookSearchResult&gt;</code> |  |

<a id="AddressBookV5+exportAddressesByAreas" name="AddressBookV5+exportAddressesByAreas"></a>

### addressBookV5.exportAddressesByAreas(filter, callback)

Export the Address Book Contacts located in the selected areas
by sending the corresponding body payload.

**See**: [https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0](https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0)  
**Since**: 1.0.11  

| Param | Type | Description |
| --- | --- | --- |
| filter | <code>Object</code> | Filter parameters |
| [filter.query] | <code>String</code> | Search in the Addresses by the query phrase. |
| [filter.bounding_box] | <code>Object</code> | Coordinates of bounding box |
| [filter.bounding_box.top] | <code>Number</code> | Top |
| [filter.bounding_box.left] | <code>Number</code> | Left |
| [filter.bounding_box.bottom] | <code>Number</code> | Bottom |
| [filter.bounding_box.right] | <code>Number</code> | Right |
| filter.selected_areas | <code>Array.&lt;Object&gt;</code> | Selected areas |
| filter.selected_areas.type | <code>string</code> | Area type. |
| filter.selected_areas.value | <code>Object</code> | Area parameters. Possible values: 'circle', 'polygon', 'rect'. e.g., { type: "circle", value: { center: { lat: 40, lng: 80 }, distance: 1000 }} { type: "polygon", value: { points: [{ 74, 40 }, { 88, 30 }, { 90, 25 }]}} { type: "rect", value: { top_left: { 50, 90 }, bottom_right: { 48, 70 }}} |
| filter.filename | <code>String</code> | The name of the file to export. |
| callback | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AddressBookV5.AddressBookSearchResult&gt;</code> |  |

<a id="AddressBookV5+exportAddressesByAreaIds" name="AddressBookV5+exportAddressesByAreaIds"></a>

### addressBookV5.exportAddressesByAreaIds(territoryIds, filename, callback)

Export Addresses by the specified area IDs.

**See**: [https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0](https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0)  
**Since**: 1.0.11  

| Param | Type | Description |
| --- | --- | --- |
| territoryIds | <code>Array.&lt;String&gt;</code> | An array of the territory IDs. |
| filename | <code>String</code> | The name of the file to export. |
| callback | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AddressBookV5.AddressBookSearchResult&gt;</code> |  |

<a id="AddressBookV5+getAddressesAsynchronousJobStatus" name="AddressBookV5+getAddressesAsynchronousJobStatus"></a>

### addressBookV5.getAddressesAsynchronousJobStatus(jobId, callback)

Check the asynchronous job status by specifying the 'job_id' path parameter.

**See**: [https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0](https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0)  
**Since**: 1.0.11  

| Param | Type | Description |
| --- | --- | --- |
| jobId | <code>String</code> | Job ID to check status. |
| callback | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AddressBookV5.AddressBookSearchResult&gt;</code> |  |

<a id="AddressBookV5+getAddressesAsynchronousJobResult" name="AddressBookV5+getAddressesAsynchronousJobResult"></a>

### addressBookV5.getAddressesAsynchronousJobResult(jobId, callback)

Get the asynchronous job result by specifying the 'job_id' path parameter.

**See**: [https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0](https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0)  
**Since**: 1.0.11  

| Param | Type | Description |
| --- | --- | --- |
| jobId | <code>String</code> | Job ID to get result. |
| callback | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AddressBookV5.AddressBookSearchResult&gt;</code> |  |

