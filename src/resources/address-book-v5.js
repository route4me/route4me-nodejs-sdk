"use strict"

/**
 * AddressBookV5 facility
 *
 * @category AddressBookV5
 * @since 1.0.11
 */
class AddressBookV5 {
	/**
	 * Constructor
	 *
	 * @see {@link https://route4me.io/docs/#address-book}
	 * @private
	 *
	 * @param  {RequestManager} requestManager - Request Manager
	 * @return {AddressBookV5}                   - AddressBookV5 facility
	 */
	constructor(requestManager) {
		this.r = requestManager
	}

	/**
	 * Add a new Address Book Contact by sending a body payload with the corresponding parameters.
	 *
	 * @see {@link https://route4me.io/docs/#create-a-location}
	 * @since 1.0.11
	 *
	 * @param {Object}	data							- List-parameters
	 * @param {String}	data.address_1					- The route Address Line 1.
	 * @param {Number}	data.cached_lat					- Cached latitude.
	 * @param {Number}	data.cached_lng					- Cached longitude.
	 * @param {String}	data.address_stop_type			- The type of stop that this is
	 * one of 'DELIVERY', 'PICKUP', 'BREAK', 'MEETUP', 'SERVICE', 'VISIT' or 'DRIVEBY'.
	 *
	 * @param {Number}	[data.created_timestamp]		- When the contact created.
	 * @param {String}	[data.address_2]				- The route Address Line 2 which is not
	 * used for geocoding.
	 *
	 * @param {Number}	[data.member_id]				- Address book contact owner ID.
	 * @param {String}	[data.address_zip]				- The zip code the address is located in.
	 * @param {String}	[data.address_group]			- Address group.
	 * @param {String}	[data.address_alias]			- Address alias.
	 * @param {String}	[data.address_city]				- The city the address is located in.
	 * @param {String}	[data.address_state_id]			- The state the address is located in.
	 * @param {String}	[data.address_country_id]		- The country the address is located in.
	 * @param {String}	[data.first_name]				- The first name of the receiving address.
	 * @param {String}	[data.last_name]				- The last name of the receiving party.
	 * @param {String}	[data.address_email]			- Address email.
	 * @param {String}	[data.address_phone_number]		- The phone number for the address.
	 * @param {Number}	[data.curbside_lat]				- Curbside latitude.
	 * @param {Number}	[data.curbside_lng]				- Curbside longitude.
	 *
	 * @param {Object}	[data.address_custom_data]							- Address custom data.
	 * @param {String}	[data.address_custom_data,'custom field name #1']	- Address custom data.
	 * @param {String}	[data.address_custom_data,'custom field name #2']	- Address custom data.
	 *
	 * @param {Number}	[data.local_time_window_start]	- Time Window Start in seconds, relative
	 * to the route start date (midnight), UTC time zone. It is relative to start date because
	 * start time changes would shift time windows.
	 *
	 * @param {Number}	[data.local_time_window_end]	- Time Window End in seconds, relative
	 * to the route start date (midnight), UTC time zone. It is relative to start datebecause start
	 * time changes would shift time windows.
	 *
	 * @param {Number}	[data.local_time_window_start_2]	- See local_time_window_start
	 * @param {Number}	[data.local_time_window_end_2]		- See local_time_window_end
	 * @param {String}	[data.local_timezone_string]		- Local timezone string
	 * @param {Number}	[data.service_time]					- Consumed service time at an address.
	 * @param {String}	[data.color]						- Color of an address, e.g., 'FF0000'.
	 * @param {String}	[data.address_icon]					- URL to an address icon file.
	 *
	 * @param {Object[]}[data.schedule]						- Array of the trip schedules to a location.
	 * @param {Boolean}	[data.schedule[].enabled]			- If true, the schedule is enabled.
	 * @param {String}	[data.schedule[].mode]				- Schedule mode.
	 * @param {Object}	[data.schedule[].monthly]			- Monthly.
	 * @param {Number}	[data.schedule[].monthly.every]		- Every.
	 *
	 * @param {String[]}[data.schedule_blacklist]			- Array of the dates, which should be
	 * excluded from a trip schedule to a location.
	 * Also can be a date string with the 'YYYY-MM-DD' format or null.
	 *
	 * @param {Number}	[data.address_cube]			- The cubic volume of the cargo being delivered
	 * or picked up at the address.
	 *
	 * @param {Number}	[data.address_pieces]		- The item quantity of the cargo being delivered
	 * or picked up at the address.
	 *
	 * @param {String}	[data.address_reference_no]	- The reference number for the address.
	 * @param {Number}	[data.address_revenue]		- The total revenue for the address
	 * @param {Number}	[data.address_weight]		- Weight of the cargo being delivered or picked
	 * up at the address.
	 *
	 * @param {Number}	[data.address_priority]		- Priority of address
	 * 0 is the highest priority, n has higher priority than n + 1
	 *
	 * @param {String}	[data.address_customer_po]	- The customer purchase order for the address
	 * @param {Boolean}	[data.eligible_pickup]		- If true, the address is eligible to pickup.
	 * @param {Boolean}	[data.eligible_depot]		- If true, the addrss is eligible to depot.
	 *
	 * @param {Object}	[data.assigned_to]						- Assigned to
	 * @param {Number}	[data.assigned_to.member_id]			- A member the address assigned to.
	 * @param {String}	[data.assigned_to.member_first_name]	- Member first name.
	 * @param {String}	[data.assigned_to.member_last_name]		- Member last name.
	 * @param {String}	[data.assigned_to.member_email]			- Member email.
	 * @param {String}	[data.assigned_to.until]				- The assignment is valid until to.
	 *
	 * @param {module:route4me-node~RequestCallback<jsonschema:
	 * AddressBookV5.AddressBookV5>} [callback]
	 */
	addAddress(data, callback) {
		return this.r._makeRequest5({
			method: "POST",
			path: "/api/v5.0/address-book/addresses",
			body: data,
			validationContext: "AddressBookV5.ResponseAddress",
		}, callback)
	}

	/**
	 * Add multiple new Address Book Contacts by sending a body payload with the array of
	 * the corresponding Address parameters.
	 *
	 * @see {@link https://route4me.io/docs/#create-a-location}
	 * @since 1.0.11
	 *
	 * @param {Object}	data	- Array of addresses look for more information in addAddress.
	 *
	 * @param {module:route4me-node~RequestCallback<jsonschema:
	 * AddressBookV5.AddressBookV5>} [callback]
	 */
	addMultipleAddresses(data, callback) {
		return this.r._makeRequest5({
			method: "POST",
			path: "/api/v5.0/address-book/addresses/batch-create",
			body: { data },
			validationContext: "AddressBookV5.ResponseMultipleAddress",
		}, callback)
	}

	/**
	 * Get all Addresses filtered by specifying the corresponding query parameters.
	 *
	 * @see {@link https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0}
	 * @since 1.0.11
	 *
	 * @param {Object}	[options]					- List-parameters
	 * @param {String}	[options.fields]			- Comma-delimited list of the address
	 * fields to be included into the search results.
	 * e.g., "address_id, address_alias, address_1".
	 *
	 * @param {String}	[options.display = all]		- Specify which Addresses to show in the
	 * corresponding query results.
	 * Possible values:
	 * 'all' - all records;
	 * 'routed' - only routed records;
	 * 'unrouted' - only unrouted records.
	 *
	 * @param {String}	[options.query]				- Search in the Addresses by the
	 * corresponding query phrase.
	 *
	 * @param {Number}	[options.limit]				- Limit of the queried records number.
	 * @param {Number}	[options.offset]			- Offset from the beginning of the queried records.
	 *
	 * @param {module:route4me-node~RequestCallback<jsonschema:
	 * AddressBookV5.AddressBookSearchResult>} callback
	 */
	getAddresses(options, callback) {
		let opt = options || {}
		let cb = callback

		if (undefined === cb && "function" === typeof opt) {
			cb = opt
			opt = {}
		}

		return this.r._makeRequest5({
			method: "GET",
			path: "/api/v5.0/address-book/addresses/index/all",
			qs: opt,
			validationContext: "AddressBookV5.ResponseAll",
		}, cb)
	}

	/**
	 * Get all Addresses filtered and sorted by sending the corresponding body payload, with
	 * the option to search by the specified areas.
	 *
	 * @see {@link https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0}
	 * @since 1.0.11
	 *
	 * @param {Object}		[options]					- List-parameters
	 * @param {String[]}	[options.fields = []]		- An array of the fields to be
	 * included in the search result. e.g., ["address_id", "address_alias", "address_1"]
	 *
	 * @param {Object}		[options.filter]			- FIlter parameters
	 * @param {String}		[options.filter.query]		- Query string.
	 *
	 * @param {Object[]}	[options.filter.selected_areas]			- Selected areas
	 * @param {string}		[options.filter.selected_areas.type]	- Area type.
	 * @param {Object}		[options.filter.selected_areas.value]	- Area parameters.
	 * Possible values: 'circle', 'polygon', 'rect'.
	 * e.g.,
	 * { type: "circle", value: { center: { lat: 40, lng: 80 }, distance: 1000 }}
	 * { type: "polygon", value: { points: [{ 74, 40 }, { 88, 30 }, { 90, 25 }]}}
	 * { type: "rect", value: { top_left: { 50, 90 }, bottom_right: { 48, 70 }}}
	 *
	 * @param {Object}		[options.filter.bounding_box]			- Coordinates of bounding box
	 * @param {Number}		[options.filter.bounding_box.top]		- Top
	 * @param {Number}		[options.filter.bounding_box.left]		- Left
	 * @param {Number}		[options.filter.bounding_box.bottom]	- Bottom
	 * @param {Number}		[options.filter.bounding_box.right]		- Right
	 *
	 * @param {Object}		[options.filter.center]				- GPS coordinates of central point.
	 * @param {Number}		[options.filter.center.lat]			- Latitude.
	 * @param {Number}		[options.filter.center.lng]			- Longitude.
	 * @param {Number}		[options.filter.distance]			- Distance from the area center.
	 * @param {String}		[options.filter.display]			- Display option of the contacts.
	 * Possible values:
	 * 'all' - all records;
	 * 'routed' - only routed records;
	 * 'unrouted' - only unrouted records.
	 *
	 * @param {Number}		[options.filter.assigned_member_id]	- A member the contact assigned to.
	 * @param {Boolean}		[options.filter.is_assigned]		- If true, the contact assigned to
	 * a member.
	 *
	 * @param {String[]}	[options.order_by]					- Array of order fields
	 * You can sort the results using the specified fields:
	 * address_1
	 * address_alias
	 * first_name
	 * last_name
	 * address_phone_number
	 * address_email
	 * address_group
	 * in_route_count
	 * visited_count
	 * last_visited_timestamp
	 * last_routed_timestamp
	 * e.g.,
	 * [["address_1", "asc"], ["last_name", "desc"]]
	 *
	 * @param {Number}		[options.offset]		- List offset
	 * @param {Number}		[options.limit]			- List limit
	 *
	 * @param {module:route4me-node~RequestCallback<jsonschema:
	 * AddressBookV5.AddressBookSearchResult>} callback
	 */
	getAddressesByBodyPayload(options, callback) {
		let opt = options || {}
		let cb = callback

		if (undefined === cb && "function" === typeof opt) {
			cb = opt
			opt = {}
		}

		return this.r._makeRequest5({
			method: "POST",
			path: "/api/v5.0/address-book/addresses/index/all",
			body: opt,
			validationContext: "AddressBookV5.ResponseAll",
		}, cb)
	}

	/**
	 * Get a paginated list of all Addresses.
	 *
	 * @see {@link https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0}
	 * @since 1.0.11
	 *
	 * @param {Object}	[options]					- List-parameters
	 * @param {String}	[options.fields]			- Comma-delimited list of the address
	 * fields to be included into the search results.
	 * e.g., "address_id, address_alias, address_1".
	 *
	 * @param {String}	[options.display = all]		- Specify which Addresses to show in the
	 * corresponding query results.
	 * Possible values:
	 * 'all' - all records;
	 * 'routed' - only routed records;
	 * 'unrouted' - only unrouted records.
	 *
	 * @param {String}	[options.query]				- Search in the Addresses by the
	 * corresponding query phrase.
	 *
	 * @param {Number}	[options.page = 1]			- Requested page.
	 * @param {Number}	[options.per_page = 30]		- Number of Addresses per page.
	 *
	 * @param {module:route4me-node~RequestCallback<jsonschema:
	 * AddressBookV5.AddressBookSearchResult>} callback
	 */
	getAddressesPaginated(options, callback) {
		let opt = options || {}
		let cb = callback

		if (undefined === cb && "function" === typeof opt) {
			cb = opt
			opt = {}
		}

		return this.r._makeRequest5({
			method: "GET",
			path: "/api/v5.0/address-book/addresses/index/pagination",
			qs: opt,
			validationContext: "AddressBookV5.ResponsePagination",
		}, cb)
	}

	/**
	 * Get the paginated list of all Addresses filtered and sorted by sending the corresponding
	 * body payload, with the option to search by the specified areas.
	 *
	 * @see {@link https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0}
	 * @since 1.0.11
	 *
	 * @param {Object}		[options]					- List-parameters
	 * @param {String[]}	[options.fields = []]		- An array of the fields to be
	 * included in the search result. e.g., ["address_id", "address_alias", "address_1"]
	 *
	 * @param {Object}		[options.filter]			- FIlter parameters
	 * @param {String}		[options.filter.query]		- Query string.
	 *
	 * @param {Object[]}	[options.filter.selected_areas]			- Selected areas
	 * @param {string}		[options.filter.selected_areas.type]	- Area type.
	 * @param {Object}		[options.filter.selected_areas.value]	- Area parameters.
	 * Possible values: 'circle', 'polygon', 'rect'.
	 * e.g.,
	 * { type: "circle", value: { center: { lat: 40, lng: 80 }, distance: 1000 }}
	 * { type: "polygon", value: { points: [{ 74, 40 }, { 88, 30 }, { 90, 25 }]}}
	 * { type: "rect", value: { top_left: { 50, 90 }, bottom_right: { 48, 70 }}}
	 *
	 * @param {Object}		[options.filter.bounding_box]			- Coordinates of bounding box
	 * @param {Number}		[options.filter.bounding_box.top]		- Top
	 * @param {Number}		[options.filter.bounding_box.left]		- Left
	 * @param {Number}		[options.filter.bounding_box.bottom]	- Bottom
	 * @param {Number}		[options.filter.bounding_box.right]		- Right
	 *
	 * @param {Object}		[options.filter.center]				- GPS coordinates of central point.
	 * @param {Number}		[options.filter.center.lat]			- Latitude.
	 * @param {Number}		[options.filter.center.lng]			- Longitude.
	 * @param {Number}		[options.filter.distance]			- Distance from the area center.
	 * @param {String}		[options.filter.display]			- Display option of the contacts.
	 * Possible values:
	 * 'all' - all records;
	 * 'routed' - only routed records;
	 * 'unrouted' - only unrouted records.
	 *
	 * @param {Number}		[options.filter.assigned_member_id]	- A member the contact assigned to.
	 * @param {Boolean}		[options.filter.is_assigned]		- If true, the contact assigned to
	 * a member.
	 *
	 * @param {String[]}	[options.order_by]					- Array of order fields
	 * You can sort the results using the specified fields:
	 * address_1
	 * address_alias
	 * first_name
	 * last_name
	 * address_phone_number
	 * address_email
	 * address_group
	 * in_route_count
	 * visited_count
	 * last_visited_timestamp
	 * last_routed_timestamp
	 * e.g.,
	 * [["address_1", "asc"], ["last_name", "desc"]]
	 *
	 * @param {Number}		[options.page]		- Page number.
	 * @param {Number}		[options.per_page]	- Records number per page.
	 *
	 * @param {module:route4me-node~RequestCallback<jsonschema:
	 * AddressBookV5.AddressBookSearchResult>} callback
	 */
	getAddressesPaginatedByBodyPayload(options, callback) {
		let opt = options || {}
		let cb = callback

		if (undefined === cb && "function" === typeof opt) {
			cb = opt
			opt = {}
		}

		return this.r._makeRequest5({
			method: "POST",
			path: "/api/v5.0/address-book/addresses/index/pagination",
			body: opt,
			validationContext: "AddressBookV5.RequestBodyPagination",
		}, cb)
	}

	/**
	 * Get the Address clusters filtered by the corresponding query text, and with the option
	 * to filter the result by the 'routed' and 'unrouted' state.
	 *
	 * @see {@link https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0}
	 * @since 1.0.11
	 *
	 * @param {Object}	[options]					- List-parameters
	 * @param {String}	[options.display = all]		- Specify which Addresses to show in the
	 * corresponding query results.
	 * Possible values:
	 * 'all' - all records;
	 * 'routed' - only routed records;
	 * 'unrouted' - only unrouted records.
	 *
	 * @param {String}	[options.query]				- Search in the Addresses by the
	 * corresponding query phrase.
	 *
	 * @param {module:route4me-node~RequestCallback<jsonschema:
	 * AddressBookV5.AddressBookSearchResult>} callback
	 */
	getAddressClusters(options, callback) {
		let opt = options || {}
		let cb = callback

		if (undefined === cb && "function" === typeof opt) {
			cb = opt
			opt = {}
		}

		return this.r._makeRequest5({
			method: "GET",
			path: "/api/v5.0/address-book/addresses/index/clustering",
			qs: opt,
			validationContext: "AddressBookV5.ResponseClustering",
		}, cb)
	}

	/**
	 * Get the Address clusters by sending the corresponding body payload.
	 *
	 * @see {@link https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0}
	 * @since 1.0.11
	 *
	 * @param {Object}		[options]							- List-parameters
	 * @param {Object}		[options.clustering]				- Clustering
	 * @param {Number}		[options.clustering.precision = 5]	- Clusering precision.
	 * Possible values from 1 to 12.
	 *
	 * @param {Object}		[options.filter]			- FIlter parameters
	 * @param {String}		[options.filter.query]		- Query string.
	 *
	 * @param {Object[]}	[options.filter.selected_areas]			- Selected areas
	 * @param {string}		[options.filter.selected_areas.type]	- Area type.
	 * @param {Object}		[options.filter.selected_areas.value]	- Area parameters.
	 * Possible values: 'circle', 'polygon', 'rect'.
	 * e.g.,
	 * { type: "circle", value: { center: { lat: 40, lng: 80 }, distance: 1000 }}
	 * { type: "polygon", value: { points: [{ 74, 40 }, { 88, 30 }, { 90, 25 }]}}
	 * { type: "rect", value: { top_left: { 50, 90 }, bottom_right: { 48, 70 }}}
	 *
	 * @param {Object}		[options.filter.bounding_box]			- Coordinates of bounding box
	 * @param {Number}		[options.filter.bounding_box.top]		- Top
	 * @param {Number}		[options.filter.bounding_box.left]		- Left
	 * @param {Number}		[options.filter.bounding_box.bottom]	- Bottom
	 * @param {Number}		[options.filter.bounding_box.right]		- Right
	 *
	 * @param {Object}		[options.filter.center]				- GPS coordinates of central point.
	 * @param {Number}		[options.filter.center.lat]			- Latitude.
	 * @param {Number}		[options.filter.center.lng]			- Longitude.
	 * @param {Number}		[options.filter.distance]			- Distance from the area center.
	 * @param {String}		[options.filter.display = all]		- Display option of the contacts.
	 * Possible values:
	 * 'all' - all records;
	 * 'routed' - only routed records;
	 * 'unrouted' - only unrouted records.
	 *
	 * @param {Number}		[options.filter.assigned_member_id]	- A member the contact assigned to.
	 * @param {Boolean}		[options.filter.is_assigned]		- If true, the contact assigned to
	 * a member.
	 *
	 * @param {module:route4me-node~RequestCallback<jsonschema:
	 * AddressBookV5.AddressBookSearchResult>} callback
	 */
	getAddressClustersByBodyPayload(options, callback) {
		let opt = options || {}
		let cb = callback

		if (undefined === cb && "function" === typeof opt) {
			cb = opt
			opt = {}
		}

		return this.r._makeRequest5({
			method: "POST",
			path: "/api/v5.0/address-book/addresses/index/clustering",
			body: opt,
			validationContext: "AddressBookV5.ResponseClustering",
		}, cb)
	}

	/**
	 * Find an Address by sending the 'address_id' query parameter.
	 *
	 * @see {@link https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0}
	 * @since 1.0.11
	 *
	 * @param {Number}	addressId		- The Address ID to be searched for.
	 * @param {module:route4me-node~RequestCallback<jsonschema:
	 * AddressBookV5.AddressBookSearchResult>} callback
	 */
	getAddressById(addressId, callback) {
		return this.r._makeRequest5({
			method: "GET",
			path: "/api/v5.0/address-book/addresses/show",
			qs: { address_id: addressId },
			validationContext: "AddressBookV5.Address",
		}, callback)
	}

	/**
	 * Find multiple Addresses by sending a body payload with the array of
	 * the corresponding Address IDs.
	 *
	 * @see {@link https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0}
	 * @since 1.0.11
	 *
	 * @param {Number[]}	addressIds		- The Address ID to be searched for.
	 * @param {module:route4me-node~RequestCallback<jsonschema:
	 * AddressBookV5.AddressBookSearchResult>} callback
	 */
	getAddressesByIds(addressIds, callback) {
		return this.r._makeRequest5({
			method: "POST",
			path: "/api/v5.0/address-book/addresses/show",
			body: { address_ids: addressIds },
			validationContext: "AddressBookV5.Address",
		}, callback)
	}

	/**
	 * Update the Address Book Contact by specifying the 'address_id' path parameter
	 * and by sending a body payload with the corresponding Address parameters.
	 *
	 * @see {@link https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0}
	 * @since 1.0.11
	 *
	 * @param {Number}	addressId		- The Address ID to update.
	 * @param {Object}	data			- Parameters of address to update,  look for more
	 * information in addAddress
	 *
	 * @param {module:route4me-node~RequestCallback<jsonschema:
	 * AddressBookV5.AddressBookSearchResult>} callback
	 */
	updateAddressById(addressId, data, callback) {
		return this.r._makeRequest5({
			method: "PUT",
			path: `/api/v5.0/address-book/addresses/${addressId}`,
			body: data,
			validationContext: "AddressBookV5.ResponseAddress",
		}, callback)
	}

	/**
	 * Update multiple Address Book Contacts by sending a body payload with the array
	 * of the corresponding Address IDs and Address parameters.
	 *
	 * @see {@link https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0}
	 * @since 1.0.11
	 *
	 * @param {Object}	data							- Address IDs and Address parameters
	 * @param {Number}	data.service_time				- Consumed service time at an address.
	 *
	 * @param {Number[]}[data.address_ids]				- An array of the address IDs.
	 * @param {String}	[data.address_1]				- The route Address Line 1.
	 * @param {String}	[data.address_2]				- The route Address Line 2 which is not
	 * used for geocoding.
	 *
	 * @param {String}	[data.address_zip]				- The zip code the address is located in.
	 * @param {String}	[data.address_group]			- Address group.
	 * @param {String}	[data.address_alias]			- Address alias.
	 * @param {String}	[data.address_city]				- The city the address is located in.
	 * @param {String}	[data.address_state_id]			- The state the address is located in.
	 * @param {String}	[data.address_country_id]		- The country the address is located in.
	 * @param {String}	[data.first_name]				- The first name of the receiving address.
	 * @param {String}	[data.last_name]				- The last name of the receiving party.
	 * @param {String}	[data.address_email]			- Address email.
	 * @param {String}	[data.address_phone_number]		- The phone number for the address.
	 * @param {Number}	[data.cached_lat]				- Cached latitude.
	 * @param {Number}	[data.cached_lng]				- Cached longitude.
	 * @param {Number}	[data.curbside_lat]				- Curbside latitude.
	 * @param {Number}	[data.curbside_lng]				- Curbside longitude.
	 *
	 * @param {Object}	[data.address_custom_data]							- Address custom data.
	 * @param {String}	[data.address_custom_data,'custom field name #1']	- Address custom data.
	 * @param {String}	[data.address_custom_data,'custom field name #2']	- Address custom data.
	 *
	 * @param {Number}	[data.local_time_window_start]	- Time Window Start in seconds, relative
	 * to the route start date (midnight), UTC time zone. It is relative to start date because
	 * start time changes would shift time windows.
	 *
	 * @param {Number}	[data.local_time_window_end]	- Time Window End in seconds, relative
	 * to the route start date (midnight), UTC time zone. It is relative to start datebecause start
	 * time changes would shift time windows.
	 *
	 * @param {Number}	[data.local_time_window_start_2]	- See local_time_window_start
	 * @param {Number}	[data.local_time_window_end_2]		- See local_time_window_end
	 * @param {String}	[data.local_timezone_string]		- Local timezone string
	 * @param {String}	[data.color]						- Color of an address, e.g., 'FF0000'.
	 * @param {String}	[data.address_icon]					- URL to an address icon file.
	 *
	 * @param {Object[]}[data.schedule]						- Array of the trip schedules to a location.
	 * @param {Boolean}	[data.schedule[].enabled]			- If true, the schedule is enabled.
	 * @param {String}	[data.schedule[].mode]				- Schedule mode.
	 * @param {Object}	[data.schedule[].monthly]			- Monthly.
	 * @param {Number}	[data.schedule[].monthly.every]		- Every.
	 *
	 * @param {String[]}[data.schedule_blacklist]			- Array of the dates, which should be
	 * excluded from a trip schedule to a location.
	 * Also can be a date string with the 'YYYY-MM-DD' format or null.
	 *
	 * @param {String}	[data.address_stop_type]	- The type of stop that this is
	 * one of 'DELIVERY', 'PICKUP', 'BREAK', 'MEETUP', 'SERVICE', 'VISIT' or 'DRIVEBY'.
	 *
	 * @param {Number}	[data.address_cube]			- The cubic volume of the cargo being delivered
	 * or picked up at the address.
	 *
	 * @param {Number}	[data.address_pieces]		- The item quantity of the cargo being delivered
	 * or picked up at the address.
	 *
	 * @param {Number}	[data.address_reference_no]	- The reference number for the address.
	 * @param {Number}	[data.address_revenue]		- The total revenue for the address
	 * @param {Number}	[data.address_weight]		- Weight of the cargo being delivered or picked
	 * up at the address.
	 *
	 * @param {Number}	[data.address_priority]		- Priority of address
	 * 0 is the highest priority, n has higher priority than n + 1
	 *
	 * @param {String}	[data.address_customer_po]	- The customer purchase order for the address
	 * @param {Boolean}	[data.eligible_pickup]		- If true, the address is eligible to pickup.
	 * @param {Boolean}	[data.eligible_depot]		- If true, the addrss is eligible to depot.
	 *
	 * @param {module:route4me-node~RequestCallback<jsonschema:
	 * AddressBookV5.AddressBookSearchResult>} callback
	 */
	updateAddressesByIds(data, callback) {
		return this.r._makeRequest5({
			method: "PUT",
			path: "/api/v5.0/address-book/addresses/batch-update",
			body: data,
			validationContext: "AddressBookV5.ResponseAddress",
		}, callback)
	}

	/**
	 * Update Address Book Contacts by sending a body payload with the corresponding query
	 * text and specified territory areas.
	 *
	 * @see {@link https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0}
	 * @since 1.0.11
	 *
	 * @todo uncheckable result - 403 forbidden
	 *
	 * @param {Object}	filter						- Filter parameters
	 * @param {String}	[filter.query]				- Search in the Addresses by the query phrase.
	 *
	 * @param {Object}	[filter.bounding_box]			- Coordinates of bounding box
	 * @param {Number}	[filter.bounding_box.top]		- Top
	 * @param {Number}	[filter.bounding_box.left]		- Left
	 * @param {Number}	[filter.bounding_box.bottom]	- Bottom
	 * @param {Number}	[filter.bounding_box.right]		- Right
	 *
	 * @param {Object[]}	filter.selected_areas			- Selected areas
	 * @param {string}		filter.selected_areas.type		- Area type.
	 * @param {Object}		filter.selected_areas.value		- Area parameters.
	 * Possible values: 'circle', 'polygon', 'rect'.
	 * e.g.,
	 * { type: "circle", value: { center: { lat: 40, lng: 80 }, distance: 1000 }}
	 * { type: "polygon", value: { points: [{ 74, 40 }, { 88, 30 }, { 90, 25 }]}}
	 * { type: "rect", value: { top_left: { 50, 90 }, bottom_right: { 48, 70 }}}
	 *
	 * @param {Object}	data				- Parameters of address to update, look for more
	 * information in addAddresses
	 *
	 * @param {String}	[data.address_group]			- Address group.
	 * @param {String}	[data.address_alias]			- Address alias.
	 * @param {Number}	[data.member_id]				- Address book contact owner ID.
	 * @param {String}	[data.first_name]				- The first name of the receiving address.
	 * @param {String}	[data.last_name]				- The last name of the receiving party.
	 * @param {String}	[data.address_email]			- Address email.
	 * @param {String}	[data.address_phone_number]		- The phone number for the address.
	 *
	 * @param {Object}	[data.address_custom_data]							- Address custom data.
	 * @param {String}	[data.address_custom_data,'custom field name #1']	- Address custom data.
	 * @param {String}	[data.address_custom_data,'custom field name #2']	- Address custom data.
	 *
	 * @param {Number}	[data.local_time_window_start]	- Time Window Start in seconds, relative
	 * to the route start date (midnight), UTC time zone. It is relative to start date because
	 * start time changes would shift time windows.
	 *
	 * @param {Number}	[data.local_time_window_end]	- Time Window End in seconds, relative
	 * to the route start date (midnight), UTC time zone. It is relative to start datebecause start
	 * time changes would shift time windows.
	 *
	 * @param {Number}	[data.local_time_window_start_2]	- See local_time_window_start
	 * @param {Number}	[data.local_time_window_end_2]		- See local_time_window_end
	 * @param {Number}	[data.service_time]					- Consumed service time at an address.
	 * @param {String}	[data.local_timezone_string]		- Local timezone string
	 * @param {String}	[data.color]						- Color of an address, e.g., 'FF0000'.
	 * @param {String}	[data.address_icon]					- URL to an address icon file.
	 *
	 * @param {Boolean}	[data.eligible_pickup]		- If true, the address is eligible to pickup.
	 * @param {Boolean}	[data.eligible_depot]		- If true, the addrss is eligible to depot.
	 *
	 * @param {module:route4me-node~RequestCallback<jsonschema:
	 * AddressBookV5.AddressBookSearchResult>} callback
	 */
	updateAddressesByAreas(filter, data, callback) {
		return this.r._makeRequest5({
			method: "PUT",
			path: "/api/v5.0/address-book/addresses/update-by-areas",
			body: { filter, data },
			validationContext: "AddressBookV5.PathToTheStatusChecker",
		}, callback)
	}

	/**
	 * Delete multiple Address Book Contacts by sending a body payload with the
	 * array of the corresponding Address IDs.
	 *
	 * @see {@link https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0}
	 * @since 1.0.11
	 *
	 * @param {Number[]}	addressIds		- The array of Address IDs to delete.
	 *
	 * @param {module:route4me-node~RequestCallback<jsonschema:
	 * AddressBookV5.AddressBookSearchResult>} callback
	 */
	deleteAddressesByIds(addressIds, callback) {
		return this.r._makeRequest5({
			method: "DELETE",
			path: "/api/v5.0/address-book/addresses/delete",
			body: { address_ids: addressIds },
			returns: { status: true, jobId: true, location: true },
			validationContext: "AddressBookV5.ResponseAddress",
		}, callback)
	}

	/**
	 * Delete the Address Book Contacts located in the selected areas by sending
	 * the corresponding body payload.
	 *
	 * @see {@link https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0}
	 * @since 1.0.11
	 *
	 * @todo uncheckable result - 403 forbidden
	 *
	 * @param {Object}	filter						- Filter parameters
	 * @param {String}	[filter.query]				- Search in the Addresses by the query phrase.
	 *
	 * @param {Object}	[filter.bounding_box]			- Coordinates of bounding box
	 * @param {Number}	[filter.bounding_box.top]		- Top
	 * @param {Number}	[filter.bounding_box.left]		- Left
	 * @param {Number}	[filter.bounding_box.bottom]	- Bottom
	 * @param {Number}	[filter.bounding_box.right]		- Right
	 *
	 * @param {Object[]}	filter.selected_areas			- Selected areas
	 * @param {string}		filter.selected_areas.type		- Area type.
	 * @param {Object}		filter.selected_areas.value		- Area parameters.
	 * Possible values: 'circle', 'polygon', 'rect'.
	 * e.g.,
	 * { type: "circle", value: { center: { lat: 40, lng: 80 }, distance: 1000 }}
	 * { type: "polygon", value: { points: [{ 74, 40 }, { 88, 30 }, { 90, 25 }]}}
	 * { type: "rect", value: { top_left: { 50, 90 }, bottom_right: { 48, 70 }}}
	 *
	 * @param {module:route4me-node~RequestCallback<jsonschema:
	 * AddressBookV5.AddressBookSearchResult>} callback
	 */
	deleteAddressesByAreas(filter, callback) {
		return this.r._makeRequest5({
			method: "DELETE",
			path: "/api/v5.0/address-book/addresses/delete-by-areas",
			body: { filter },
			returns: { status: true, jobId: true, location: true },
			validationContext: "AddressBookV5.PathToTheStatusChecker",
		}, callback)
	}

	/**
	 * Get all Address custom fields.
	 *
	 * @see {@link https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0}
	 * @since 1.0.11
	 *
	 * @param {module:route4me-node~RequestCallback<jsonschema:
	 * AddressBookV5.AddressBookSearchResult>} callback
	 */
	getAddressCustomFields(callback) {
		return this.r._makeRequest5({
			method: "GET",
			path: "/api/v5.0/address-book/addresses/custom-fields",
			validationContext: "AddressBookV5.ResponseCustomFields",
		}, callback)
	}

	/**
	 * Get depots Addresses.
	 *
	 * @see {@link https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0}
	 * @since 1.0.11
	 *
	 * @param {module:route4me-node~RequestCallback<jsonschema:
	 * AddressBookV5.AddressBookSearchResult>} callback
	 */
	getAddressesDepots(callback) {
		return this.r._makeRequest5({
			method: "GET",
			path: "/api/v5.0/address-book/addresses/depots",
			validationContext: "AddressBookV5.ResponseAddress",
		}, callback)
	}

	/**
	 * Export Address Book Contacts to the specified file by sending a body
	 * payload with the array of the corresponding Address IDs.
	 *
	 * @see {@link https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0}
	 * @since 1.0.11
	 *
	 * @param {Number[]}	addressIds		- Export the specified Addresses.
	 * @param {String}		filename		- The name of the file to export.
	 * @param {module:route4me-node~RequestCallback<jsonschema:
	 * AddressBookV5.AddressBookSearchResult>} callback
	 */
	exportAddressesByIds(addressIds, filename, callback) {
		return this.r._makeRequest5({
			method: "POST",
			path: "/api/v5.0/address-book/addresses/export",
			body: {
				ids: addressIds,
				filename
			},
			returns: { status: true, location: true },
			validationContext: "AddressBookV5.Address",
		}, callback)
	}

	/**
	 * Export the Address Book Contacts located in the selected areas
	 * by sending the corresponding body payload.
	 *
	 * @see {@link https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0}
	 * @since 1.0.11
	 *
	 * @param {Object}		filter							- Filter parameters
	 * @param {String}	[filter.query]				- Search in the Addresses by the query phrase.
	 *
	 * @param {Object}	[filter.bounding_box]			- Coordinates of bounding box
	 * @param {Number}	[filter.bounding_box.top]		- Top
	 * @param {Number}	[filter.bounding_box.left]		- Left
	 * @param {Number}	[filter.bounding_box.bottom]	- Bottom
	 * @param {Number}	[filter.bounding_box.right]		- Right
	 *
	 * @param {Object[]}	filter.selected_areas			- Selected areas
	 * @param {string}		filter.selected_areas.type		- Area type.
	 * @param {Object}		filter.selected_areas.value		- Area parameters.
	 * Possible values: 'circle', 'polygon', 'rect'.
	 * e.g.,
	 * { type: "circle", value: { center: { lat: 40, lng: 80 }, distance: 1000 }}
	 * { type: "polygon", value: { points: [{ 74, 40 }, { 88, 30 }, { 90, 25 }]}}
	 * { type: "rect", value: { top_left: { 50, 90 }, bottom_right: { 48, 70 }}}
	 *
	 * @param {String}		filter.filename					- The name of the file to export.
	 * @param {module:route4me-node~RequestCallback<jsonschema:
	 * AddressBookV5.AddressBookSearchResult>} callback
	 */
	exportAddressesByAreas(filter, callback) {
		return this.r._makeRequest5({
			method: "POST",
			path: "/api/v5.0/address-book/addresses/export-by-areas",
			body: { filter },
			returns: { status: true, location: true },
			validationContext: "AddressBookV5.Address",
		}, callback)
	}

	/**
	 * Export Addresses by the specified area IDs.
	 *
	 * @see {@link https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0}
	 * @since 1.0.11
	 *
	 * @param {String[]}	territoryIds	- An array of the territory IDs.
	 * @param {String}		filename		- The name of the file to export.
	 * @param {module:route4me-node~RequestCallback<jsonschema:
	 * AddressBookV5.AddressBookSearchResult>} callback
	 */
	exportAddressesByAreaIds(territoryIds, filename, callback) {
		return this.r._makeRequest5({
			method: "POST",
			path: "/api/v5.0/address-book/addresses/export-by-area-ids",
			body: {
				territory_ids: territoryIds,
				filename
			},
			returns: { status: true, location: true },
			validationContext: "AddressBookV5.Address",
		}, callback)
	}

	/**
	 * Check the asynchronous job status by specifying the 'job_id' path parameter.
	 *
	 * @see {@link https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0}
	 * @since 1.0.11
	 *
	 * @param {String}	jobId		- Job ID to check status.
	 * @param {module:route4me-node~RequestCallback<jsonschema:
	 * AddressBookV5.AddressBookSearchResult>} callback
	 */
	getAddressesAsynchronousJobStatus(jobId, callback) {
		return this.r._makeRequest5({
			method: "GET",
			path: `/api/v5.0/address-book/addresses/job-tracker/status/${jobId}`,
			returns: { status: true },
			validationContext: "AddressBookV5.ResponseAddress",
		}, callback)
	}

	/**
	 * Get the asynchronous job result by specifying the 'job_id' path parameter.
	 *
	 * @see {@link https://virtserver.swaggerhub.com/Route4Me/address-book/1.0.0}
	 * @since 1.0.11
	 *
	 * @param {String}	jobId		- Job ID to get result.
	 * @param {module:route4me-node~RequestCallback<jsonschema:
	 * AddressBookV5.AddressBookSearchResult>} callback
	 */
	getAddressesAsynchronousJobResult(jobId, callback) {
		return this.r._makeRequest5({
			method: "GET",
			path: `/api/v5.0/address-book/addresses/job-tracker/result/${jobId}`,
			returns: { status: true },
			validationContext: "AddressBookV5.ResponseAddress",
		}, callback)
	}
}

module.exports = AddressBookV5
