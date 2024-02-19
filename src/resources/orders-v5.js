"use strict"

const utils           = require("./../utils")

/**
 * Orders facility
 *
 * @category OrdersV5
 */
class OrdersV5 {
	/**
	 * Constructor
	 *
	 * @see {@link https://route4me.io/docs/#orders}
	 * @since 1.1.0
	 * @private
	 *
	 * @param  {RequestManager} requestManager - Request Manager
	 * @return {Orders}                        - Orders facility
	 */
	constructor(requestManager) {
		this.r = requestManager
	}

	/**
	 * Create single order
	 *
	 * @example <caption>Sample input</caption>
	 *
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
	 *
	 * @see {@link https://route4me.io/docs/#create-an-order}
	 * @since 1.1.0
	 *
	 * @param {Object}   data								- Parameters of order to create
	 * @param {Number}   [data.member_id]					- Order owner ID.
	 * @param {String}   [data.address_1]					- The order Address line 1.
	 * @param {String}   [data.address_2]					- The order Address line 2.
	 * @param {String}   [data.address_alias]				- Address alias.
	 * @param {String}   [data.address_city]				- The city the address is located in.
	 * @param {String}   [data.address_state]				- The state the address is located in.
	 * @param {String}   [data.address_zip]					- The zip code the address is located in.
	 * @param {String}   [data.address_country]				- The country the address is located in.
	 * @param {Object}   data.address_geo					- GPS coords of address.
	 * @param {Number}   [data.address_geo.lat]				- Latitude.
	 * @param {Number}   [data.address_geo.lng]				- Longitude.
	 * @param {Object}   data.curbside_geo					- Curbside GPS coords of address.
	 * @param {Number}   [data.curbside_geo.lat]			- Curbside latitude.
	 * @param {Number}   [data.curbside_geo.lng]			- Curbside longitude.
	 * @param {String}   [date_scheduled_for]				- Date scheduled.
	 * Possible formats: YY-MM-DD, YYMMDD, ISO 8601
	 *
	 * @param {Number}   [data.order_status_id]				- Order status ID.
	 * @param {Boolean}  [data.is_pending]					- If true, the order is pending.
	 * @param {Boolean}  [data.is_accepted]					- If true, the order is accepted.
	 * @param {Boolean}  [data.is_started]					- If true, the order is started.
	 * @param {Boolean}  [data.is_completed]				- If true, the order is completed.
	 * @param {Boolean}  [data.is_validated]				- If true, the order is validated.
	 * @param {String}   [data.phone]						- The phone number.
	 * @param {String}   [data.first_name]					- The first name.
	 * @param {String}   [data.last_name]					- The last name.
	 * @param {String}   [data.email]						- E-mail.
	 * @param {Object}   [data.custom_data]					- Order custom data.
	 * @param {String}   [data.custom_data.barcode]			- Tracking number for order.
	 * @param {String}   [data.custom_data.airbillno]		- Additional tracking number for order.
	 * @param {String}   [data.custom_data.sorted_on_date]	- Datetime String with "T" delimiter,
	 * ISO 8601.
	 * @param {Number}   [data.custom_data.sorted_on_utc]	- Timestamp only; replaced data in
	 * `sorted_on_date` property.
	 *
	 * @param {Object[]} data.local_time_windows			- Array of Time Window objects.
	 * @param {Number}   data.local_time_windows.start		- Start of Time Window, unix timestamp.
	 * @param {Number}   data.local_time_windows.end		- End of Time Window, unix timestamp.
	 * @param {String}   [data.local_timezone_string]		- Local timezone String
	 * @param {Number}   [data.service_time]				- Consumed service time.
	 * @param {String}   [data.color]						- Color of an address, e.g., 'FF0000'.
	 * @param {String}   [data.tracking_number]				- Tracking number
	 * @param {String}   [data.address_stop_type]			- The type of stop that this is
	 * one of 'DELIVERY', 'PICKUP', 'BREAK', 'MEETUP', 'SERVICE', 'VISIT' or 'DRIVEBY'.
	 *
	 * @param {Number}   [data.last_status]
	 * @param {Number}   [data.weight]						- Weight of the cargo.
	 * @param {Number}   [data.cost]						- Cost of the cargo.
	 * @param {Number}   [data.revenue]						- The total revenue for the order.
	 * @param {Number}   [data.cube]						- The cubic volume of the cargo.
	 * @param {Number}   [data.pieces]						- The item quantity of the cargo.
	 * @param {String}   [data.group]						- The group.
	 * @param {Number}   data.address_priority				- Priority of address
	 * 0 is the highest priority, n has higher priority than n + 1
	 *
	 * @param {String}   data.address_customer_po		- The customer purchase order for
	 * the address, length <= 50.
	 *
	 * @param {Object[]} data.custom_fields					- Array of Custom Fields objects.
	 * @param {String}   data.custom_fields.order_custom_field_uuid		- HEX-String.
	 * @param {String}   data.custom_fields.order_custom_field_value	- Value of Custom Fields.
	 *
	 * @param {module:route4me-node~RequestCallback<jsonschema:Orders.Order>} [callback]
	 */
	create(data, callback) {
		return this.r._makeRequest5({
			method: "POST",
			path: "/api/v5.0/orders-platform/create",
			body: data,
			validationContext: "Orders.Order",
		}, callback)
	}

	/**
	 * Show single order by its id
	 *
	 * @see {@link https://route4me.io/docs/#get-an-order-details}
	 * @since 1.1.0
	 *
	 * @param {String}   id			- Order ID, HEX-String
	 * @param {module:route4me-node~RequestCallback<jsonschema:Orders.Order>} [callback]
	 */
	get(id, callback) {
		return this.r._makeRequest5({
			method: "GET",
			path: `/api/v5.0/orders-platform/${id}`,
			validationContext: "Orders.Order",
		}, callback)
	}

	/**
	 * Update single order by its id
	 *
	 * @example <caption>Sample input</caption>
	 *
	 * const id = "CCCCCA90F77841C693C656123F346AAA";
	 * const data = {
	 *     "first_name": "John",
	 *     "last_name": "Doe",
	 *     "email": "John@company.com",
	 * };
	 *
	 * @see {@link https://route4me.io/docs/#update-an-order}
	 * @since 1.1.0
	 *
	 * @param {String}   id			- Order ID, HEX-String
	 * @param {Object}   data		- Parameters of order to update, look for more
	 * information in create()
	 *
	 * @param {module:route4me-node~RequestCallback<jsonschema:Orders.Order>} [callback]
	 */
	update(id, data, callback) {
		return this.r._makeRequest5({
			method: "PUT",
			path: `/api/v5.0/orders-platform/${id}`,
			body: data,
			validationContext: "Orders.Order",
		}, callback)
	}

	/**
	 * Delete (soft) single order by its id
	 *
	 * @see {@link https://route4me.io/docs/#remove-an-order}
	 * @since 1.1.0
	 *
	 * @param {String}   id			- Order ID, HEX-String
	 * @param {module:route4me-node~RequestCallback} [callback]
	 */
	remove(id, callback) {
		return this.r._makeRequest5({
			method: "DELETE",
			path: `/api/v5.0/orders-platform/${id}`,
			validationContext: utils.CustomInternalPostProcessing.fromJsonWithStatus,
		}, callback)
	}

	/**
	 * Search orders in ElasticSearch storage or in Spanner database
	 *
	 * @example <caption>Sample input</caption>
	 *
		const data = {
			filters: {
				order_ids: [
					"CCCCCA90F77841C693C656123F346AAA",
					"BBB8CA90F77841C693C656123F346AAA"
				]
			}
		};
	 *
	 * @see {@link https://route4me.io/docs/#search-orders}
	 * @since 1.1.0
	 *
	 * @param {Object}   data							- Search and filter parameters.
	 * @param {String[]} [data.order_ids]				- Array of order ids, HEX-Strings.
	 * @param {Boolean}  data.return_provided_fields_as_map
	 * @param {Object[]} data.orderBy					- Search and filter parameters.
	 * @param {String}   orderBy.0						- The name of the sort field, this is
	 * one of 'address_alias', 'first_name', 'last_name', 'phone', 'is_pending', 'is_validated',
	 * 'is_accepted', 'is_completed', 'scheduled_for', 'day_added'
	 *
	 * @param {String}   [orderBy.1 = 'asc']			- Sorting direction, this is
	 * one of 'asc', 'ASC', 'desc', 'DESC'
	 *
	 * @param {Number}   data.limit = 30				- The number of orders per page.
	 * @param {Number}   data.offset = 0				- The requested page.
	 * @param {String[]} data.fields					- An array of returned fields, this is
	 * one of 'order_uuid', 'member_id', 'address_1', 'address_2', 'address_alias', 'address_city',
	 * 'address_state', 'address_zip', 'address_country', 'coordinates', 'curbside_coordinates',
	 * 'updated_timestamp', 'created_timestamp', 'day_added', 'scheduled_for', 'order_status_id',
	 * 'is_pending', 'is_started', 'is_completed', 'is_validated', 'phone', 'first_name',
	 * 'last_name', 'email', 'custom_data', 'local_time_windows', 'local_timezone', 'service_time',
	 * 'color', 'icon', 'last_visited_timestamp', 'visited_count', 'in_route_count',
	 * 'last_routed_timestamp', 'tracking_number', 'organization_id', 'root_member_id',
	 * 'address_stop_type', 'last_status', 'sorted_day_id', 'weight', 'cost', 'revenue', 'cube',
	 * 'pieces', 'done_day_id', 'possession_day_id', 'group', 'workflow_uuid', 'address_priority'
	 *
	 * @param {String[]} data.addition					- An array of additional returned fields,
	 * this is one of 'territory_ids', 'aggregation_ids'
	 *
	 * @param {Object}   [data.search]					- Search parameters.
	 * @param {String}   [data.search.query]			- The string to query to ElasticSearch.
	 * If set the `matches` and `terms` sections will be ignored.
	 *
	 * @param {Object}   [data.search.matches]							- The object to query
	 * to ElasticSearch.
	 * @param {Object}   [data.search.matches.custom_data]				- Order custom data.
	 * @param {String}   [data.search.matches.custom_data.barcode]		- Tracking number for order.
	 * @param {String}   [data.search.matches.custom_data.airbillno]	- Additional tracking number
	 * for order.
	 * @param {String}   [data.search.matches.custom_data.sorted_on_date]	- Datetime String
	 * with "T" delimiter, ISO 8601.
	 * @param {Number}   [data.search.matches.custom_data.sorted_on_utc]	- Timestamp only; replaced
	 * data in `sorted_on_date` property.
	 * @param {String}   [data.search.matches.first_name]		- The first name.
	 * @param {String}   [data.search.matches.last_name]		- The last name.
	 * @param {String}   [data.search.matches.email]			- E-mail.
	 * @param {String}   [data.search.matches.phone]			- The phone number.
	 * @param {String}   [data.search.matches.address_1]		- The order Address line 1.
	 * @param {String}   [data.search.matches.address_alias]	- Address alias.
	 * @param {String}   [data.search.matches.address_zip]		- The zip code of the address.
	 *
	 * @param {Object}   [data.search.terms]							- The object to query
	 * to ElasticSearch.
	 * @param {Object}   [data.search.terms.custom_data]				- Order custom data.
	 * @param {String}   [data.search.terms.custom_data.barcode]		- Tracking number for order.
	 * @param {String}   [data.search.terms.custom_data.airbillno]		- Additional tracking number
	 * for order.
	 * @param {String}   [data.search.terms.custom_data.sorted_on_date]	- Datetime String
	 * with "T" delimiter, ISO 8601.
	 * @param {Number}   [data.search.terms.custom_data.sorted_on_utc]	- Timestamp only; replaced
	 * data in `sorted_on_date` property.
	 * @param {String}   [data.search.terms.first_name]		- The first name.
	 * @param {String}   [data.search.terms.last_name]		- The last name.
	 * @param {String}   [data.search.terms.email]			- E-mail.
	 * @param {String}   [data.search.terms.phone]			- The phone number.
	 * @param {String}   [data.search.terms.address_1]		- The order Address line 1.
	 * @param {String}   [data.search.terms.address_alias]	- Address alias.
	 * @param {String}   [data.search.terms.address_zip]		- The zip code the address is located in.
	 *
	 * @param {Object}   [data.filters]						- Filter parameters.
	 * @param {String[]} [data.filters.order_ids]			- Array of included order ids, HEX-Strings.
	 * @param {String[]} [data.filters.excluded_ids]		- Array of excluded order ids, HEX-Strings.
	 * @param {String[]} [data.filters.tracking_numbers]	- Array of tracking number of orders.
	 * @param {Boolean}  [data.filters.only_geocoded]
	 * @param {Number|String|Object} [data.filters.updated_timestamp]	- Can be unix timestamp or
	 * ISO 8601 or Object {"start": "timestamp or ISO 8601", "end": "timestamp or ISO 8601"}.
	 *
	 * @param {Number|String|Object} [data.filters.created_timestamp]	- Can be unix timestamp or
	 * ISO 8601 or Object {"start": "timestamp or ISO 8601", "end": "timestamp or ISO 8601"}.
	 *
	 * @param {Number|String|Object} [data.filters.scheduled_for]		- Can be unix timestamp or
	 * ISO 8601 or Object {"start": "timestamp or ISO 8601", "end": "timestamp or ISO 8601"}.
	 *
	 * @param {Boolean}  [data.filters.only_unscheduled]
	 * @param {Number|String|Object} [data.filters.day_added]			- Can be unix timestamp or
	 * ISO 8601 or Object {"start": "timestamp or ISO 8601", "end": "timestamp or ISO 8601"}.
	 *
	 * @param {Number|String|Object} [data.filters.sorted_on]			- Can be unix timestamp or
	 * ISO 8601 or Object {"start": "timestamp or ISO 8601", "end": "timestamp or ISO 8601"}.
	 *
	 * @param {String[]}[data.filters.address_stop_types]				- Array of stop type names,
	 * possible values 'DELIVERY', 'PICKUP', 'BREAK', 'MEETUP', 'SERVICE', 'VISIT' or 'DRIVEBY'.
	 *
	 * @param {Number[]} [data.filters.last_statuses]					- Array of statuses.
	 * @param {Number[]} [data.filters.territory_ids]					- Array of territory ids.
	 * @param {String}   [data.filters.done_day]
	 * @param {String}   [data.filters.possession_day]
	 * @param {String[]} [data.filters.groups]
	 * @param {String}   [data.filters.display= 'all']					- Filtering by the
	 * in_route_count field, is one of 'routed', 'unrouted', 'all'
	 *
	 * @param {module:route4me-node~RequestCallback<jsonschema:Orders.List>} [callback]
	 */
	search(data, callback) {
		let body = data || {}
		let cb = callback

		if (undefined === cb && "function" === typeof body) {
			cb = body
			body = null
		}

		return this.r._makeRequest5({
			method: "POST",
			path: "/api/v5.0/orders-platform",
			body,
			validationContext: "Orders.List",
		}, cb)
	}

	/**
	 * Update the batch of orders (asynchronous, by filters)
	 *
	 * @see {@link https://route4me.io/docs/#update-an-order}
	 * @since 1.1.0
	 *
	 * @param {Object}   params				- Batch update parameters.
	 * @param {Object}   params.data		- Order values for batch update, look for more
	 * information in create()
	 *
	 * @param {Object}   params.search		- Search parameters for batch update,
	 * look for more information in search()
	 *
	 * @param {Object}   params.filters		- Filter parameters for batch update,
	 * look for more information in search()
	 *
	 * @param {module:route4me-node~RequestCallback} [callback]
	 */
	batchUpdateByFilters(params, callback) {
		return this.r._makeRequest5({
			method: "PUT",
			path: "/api/v5.0/orders-platform/batch-update/filter",
			body: params,
			validationContext: "utils.CustomInternalPostProcessing.fromJsonWithStatus",
		}, callback)
	}

	/**
	 * Delete the batch of orders
	 *
	 * @see {@link https://route4me.io/docs/#remove-an-order}
	 * @since 1.1.0
	 *
	 * @param {String}   orderIds			- Array of Order IDs, HEX-Strings.
	 * @param {module:route4me-node~RequestCallback} [callback]
	 */
	batchRemove(orderIds, callback) {
		return this.r._makeRequest5({
			method: "POST",
			path: "/api/v5.0/orders-platform/batch-delete",
			body: { order_ids: orderIds },
			validationContext: utils.CustomInternalPostProcessing.fromJsonWithStatus,
		}, callback)
	}

	/**
	 * Update the batch of orders by ids
	 *
	 * @see {@link https://route4me.io/docs/#update-an-order}
	 * @since 1.1.0
	 *
	 * @param {Object}   orderIds			- Array of Order IDs, HEX-Strings.
	 * @param {Object}   data				- Order values for batch update, look for more
	 * information in create()
	 *
	 * @param {module:route4me-node~RequestCallback<jsonschema:Orders.List>} [callback]
	 */
	batchUpdate(orderIds, data, callback) {
		return this.r._makeRequest5({
			method: "POST",
			path: "/api/v5.0/orders-platform/batch-update",
			body: {
				order_ids: orderIds,
				data
			},
			validationContext: "Orders.List",
		}, callback)
	}

	/**
	 * Create the batch of orders
	 *
	 * @see {@link https://route4me.io/docs/#update-an-order}
	 * @since 1.1.0
	 *
	 * @param {Object[]} orders				- Array of Order values for batch create,
	 * look for more information in create()
	 *
	 * @param {module:route4me-node~RequestCallback} [callback]
	 */
	batchCreate(orders, callback) {
		return this.r._makeRequest5({
			method: "POST",
			path: "/api/v5.0/orders-platform/batch-create",
			body: { data: orders },
			validationContext: utils.CustomInternalPostProcessing.fromJsonWithStatus,
		}, callback)
	}

	/**
	 * Get a list of Order Custom Fields
	 *
	 * @see {@link https://route4me.io/docs/#get-an-order-details}
	 * @since 1.1.0
	 *
	 * @param {module:route4me-node~RequestCallback<jsonschema:Orders.Response>} [callback]
	 */
	getOrderCustomFields(callback) {
		return this.r._makeRequest5({
			method: "GET",
			path: "/api/v5.0/orders-platform/order-custom-user-fields",
			validationContext: "Orders.Response",
		}, callback)
	}

	/**
	 * Create one Order Custom Field
	 *
	 * @example <caption>Sample input</caption>
	 *
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
	 *
	 * @see {@link https://route4me.io/docs/#create-an-order-custom-fields}
	 * @since 1.1.0
	 *
	 * @param {Object}   data								- Params of Order custom field
	 * @param {String}   data.order_custom_field_name		- Name, max 128 characters.
	 * @param {String}   data.order_custom_field_type		- Type, max 128 characters.
	 * @param {String}   data.order_custom_field_label		- Label, max 128 characters.
	 * @param {Object}   data.order_custom_field_type_info	- Info, as JSON Object
	 * max 4096 characters.
	 *
	 * @param {module:route4me-node~RequestCallback<jsonschema:Orders.Response>} [callback]
	 */
	createOrderCustomFields(data, callback) {
		return this.r._makeRequest5({
			method: "POST",
			path: "/api/v5.0/orders-platform/order-custom-user-fields",
			body: data,
			validationContext: "OrderCustomFields.Response",
		}, callback)
	}

	/**
	 * Update one Order Custom Fields
	 *
	 * @see {@link https://route4me.io/docs/#update-an-order-custom-fields}
	 * @since 1.1.0
	 *
	 * @param {Number}   uuid								- OrderCustomField ID, HEX-string.
	 * @param {Object}   data								- Params of Order custom field
	 * @param {String}   data.order_custom_field_type		- Type, max 128 characters.
	 * @param {String}   data.order_custom_field_label		- Label, max 128 characters.
	 * @param {Object}   data.order_custom_field_type_info	- Info, as JSON Object
	 * max 4096 characters.
	 *
	 * @param {module:route4me-node~RequestCallback<jsonschema:Orders.Response>} [callback]
	 */
	updateOrderCustomFields(uuid, data, callback) {
		return this.r._makeRequest5({
			method: "PUT",
			path: `/api/v5.0/orders-platform/order-custom-user-fields/${uuid}`,
			body: data,
			validationContext: "OrderCustomFields.Response",
		}, callback)
	}

	/**
	 * Remove an Order Custom Fields
	 *
	 * @see {@link https://route4me.io/docs/#remove-user-custom-field}
	 * @since 1.1.0
	 *
	 * @param {Number}   uuid								- OrderCustomField ID, HEX-string.
	 *
	 * @param {module:route4me-node~RequestCallback<jsonschema:Orders.Response>} [callback]
	 */
	removeOrderCustomFields(uuid, callback) {
		return this.r._makeRequest5({
			method: "DELETE",
			path: `/api/v5.0/orders-platform/order-custom-user-fields/${uuid}`,
			validationContext: "OrderCustomFields.Response",
		}, callback)
	}
}

module.exports = OrdersV5
