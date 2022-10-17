"use strict"

const utils = require("../utils")

/**
 * Optimizations facility
 *
 * @category Optimizations
 */
class Optimizations {
	/**
	 * Constructor
	 *
	 * @see {@link https://route4me.io/docs/#optimizations}
	 * @since 0.1.3
	 * @private
	 *
	 * @param  {RequestManager} requestManager - Request Manager
	 * @return {Optimizations}                 - Optimizations facility
	 */
	constructor(requestManager) {
		this.r = requestManager
	}

	/**
	 * Create a new optimization
	 *
	 * @see {@link https://route4me.io/docs/#create-an-optimization}
	 *
	 * @param  {jsonschema:Optimizations.CreateRequest} optimization - Parameters for new optimization
	 * @param  {boolean} isRedirect
	 * @param  {module:route4me-node~RequestCallback<jsonschema:
	 * Optimizations.Response>} [callback]
	 */
	create(optimization, isRedirect, callback) {
		if (!isRedirect) {
			const qs = {}
			qs["redirect"] = 0
			return this.r._makeRequest({
				method: "POST",
				path: "/api.v4/optimization_problem.php",
				qs,
				body: optimization,
				validationContext: "Optimizations.Response",
			}, callback)
		}
		return this.r._makeRequest({
			method: "POST",
			path: "/api.v4/optimization_problem.php",
			body: optimization,
			validationContext: "Optimizations.Response",
		}, callback)
	}

	/* eslint-disable max-len */
	/**
	 * Create a new optimization with Advanced constraints
	 *
	 * @see {@link https://route4me.io/docs/#create-an-optimization}
	 * @since 0.1.15
	 *
	 * @param {object} props										- Optimization properties.
	 * Here are some required or useful properties, for full list of properties look at docs.
	 * @see {@link https://github.com/route4me/route4me-json-schemas/blob/master/Optimization_create.json}
	 *
	 * @param {object} props.parameters								- Route Parameters.
	 * Here are some required and useful parameters, for full list of properties look at docs.
	 * @see {@link https://github.com/route4me/route4me-json-schemas/blob/master/RouteParameters.json}
	 *
	 * @param {number} props.parameters.algorithm_type				- The optimization algorithm to be used.
	 * Possible values:
	 * 1 = TSP, 2 = VRP, 3 = CVRP_TW_SD, 4 = CVRP_TW_MD, 5 = TSP_TW, 6 = TSP_TW_CR, 7 = BBCVRP,
	 * 9 = ADVANCED_CVRP_TW,100 = ALG_NONE, 101 = ALG_LEGACY_DISTRIBUTED
	 *
	 * @param {string} props.parameters.device_type					- The type of the device that is
	 * creating this route.
	 * Possible values: "web", "iphone", "ipad", "android_phone", "android_tablet".
	 *
	 * @param {string} props.parameters.distance_unit				- The distance measurement unit for the route.
	 * Possible values: "mi", "km".
	 *
	 * @param {number} props.parameters.route_max_duration = 86400	- How many seconds a route can last at most.
	 * Default is 24 hours = 86400 seconds.
	 *
	 * @param {number} props.parameters.route_time = 25200			- Time when the route starts
	 * (relative to route_date) (Seconds). UTC timezone as well.
	 * Default is 07:00 UTC = 25200 seconds.
	 *
	 * @param {number} props.parameters.travel_mode					- The mode of travel that the directions
	 * should be optimized for.
	 * Possible values: "Driving", "Walking", "Bicycling".
	 *
	 * @param {string} [props.parameters.optimize]					- The driving directions will be generated
	 * biased for this selection. This has no impact on route sequencing.
	 * Possible values: "Distance", "Time", "timeWithTraffic".
	 *
	 * @param {number} [props.parameters.parts]						- Legacy feature which permits a user to
	 * request an example number of optimized routes.
	 *
	 * @param {number} [props.parameters.route_date]				- The route start date in UTC, unix timestamp
	 * seconds. Used to show users when the route will begin, also used for reporting and analytics.
	 *
	 * @param {string} [props.parameters.route_name]				- The name of this route. this route name will
	 * be accessible in the search API, and also will be displayed on the mobile device of a user.
	 *
	 * @param {boolean} [props.parameters.rt]						- The tour type of this route. rt is short
	 * for round trip, the optimization engine changes its behavior for round trip routes.
	 *
	 * @param {number} [props.parameters.vehicle_capacity]			- How much cargo can the vehicle carry
	 * (units, e.g. cubic meters)
	 *
	 * @param {number} [props.parameters.vehicle_max_distance_mi]	- Maximum distance for a single vehicle
	 * in this route (always in miles).
	 *
	 * @param {number} [props.parameters.advanced_constraints]					- Advanced Constraints.
	 * @param {number} [props.parameters.advanced_constraints.max_cargo_weight]	- Maximum cargo weight per route.
	 * @param {number} [props.parameters.advanced_constraints.max_cargo_volume]	- Maximum cargo volume per route.
	 * @param {number} [props.parameters.advanced_constraints.max_capacity]		- How much total cargo
	 * can be transported per route (units, e.g. cubic meters).
	 *
	 * @param {number} [props.parameters.advanced_constraints.members_count]	- Legacy feature which
	 * permits a user to request an example number of optimized routes.
	 *
	 * @param {array[]}  props.parameters.advanced_constraints.available_time_windows	- An array of the
	 * available time windows, e.g. [[43200, 72000], [TimeStart, TimeEnd]]
	 * Time Window Start in seconds:  7:00 am EST = (7 + 5) * 3600 = 43200
	 * Time Window End in seconds:   15:00 am EST = (15 + 5) * 3600 = 72000
	 *
	 * @param {string[]} [props.parameters.advanced_constraints.tags]					- The driver tags
	 * specified in a team member's custom data. (e.g. 'driver skills':
	 * ["Class A CDL", "Class B CDL", "Forklift", "Skid Steer Loader", "Independent Contractor"])
	 *
	 * @param {number[]} [props.parameters.advanced_constraints.route4me_members_id]		- An array of the skilled driver IDs.
	 * @param {object}   [props.parameters.advanced_constraints.depot_address]				- A depot address.
	 * @param {number}   props.parameters.advanced_constraints.depot_address.source_id		- Source ID.
	 * @param {string}   props.parameters.advanced_constraints.depot_address.source_type	- Source type (e.g. input_addresses).
	 * @param {object[]} [props.parameters.advanced_constraints.location_sequence_pattern]	- The parameter is used
	 * in advanced constraints to set the stops you plan to visit each route.
	 * Note: empty string "" means any stops,
	 * for example ["", AddresssObject1, AddresssObject2, "", AddresssObject3] means any stops
	 * before AddresssObject1 and between AddresssObject2 and AddresssObject3.
	 *
	 * @param {string} [props.parameters.advanced_constraints.location_sequence_pattern.alias]		- Location alias
	 * @param {string} [props.parameters.advanced_constraints.location_sequence_pattern.address]	- Location address
	 * @param {number} props.parameters.advanced_constraints.location_sequence_pattern.lat			- Location latitude
	 * @param {number} props.parameters.advanced_constraints.location_sequence_pattern.lng			- Location longitude
	 * @param {number} [props.parameters.advanced_constraints.location_sequence_pattern.time]		- Location service time
	 * @param {string} [props.parameters.advanced_constraints.group]								- Group name of the advanced constraints.
	 *
	 * @param {object[]} [props.depots]								- A valid array of Address objects of Depots.
	 * @param {object[]} props.addresses							- A valid array of Address objects.
	 * Here are some required and useful properties of the Address object,
	 * for full list of properties look at docs.
	 * @see {@link https://github.com/route4me/route4me-json-schemas/blob/master/Address.json}
	 *
	 * @param {number}   props.addresses.lat						- Latitude.
	 * @param {number}   props.addresses.lng						- Longitude.
	 * @param {string}   [props.addresses.alias]					- Address Alias.
	 * @param {string}   [props.addresses.address]					- The route Address Line 1.
	 * @param {boolean}  [props.addresses.is_depot = false]			- This address is a depot.
	 * @param {string}   [props.addresses.group]					- Address group.
	 * @param {number}   [props.addresses.time]						- Service time (seconds).
	 * @param {number}   [props.addresses.time_window_start]		- Time Window Start in seconds, relative to
	 * the route start date (midnight), UTC time zone. It is relative to start date because start time
	 * changes would shift time windows.
	 *
	 * @param {number}   [props.addresses.time_window_end]			- Time Window End in seconds, relative to the
	 * route start date (midnight), UTC time zone. It is relative to start date because start time
	 * changes would shift time windows.
	 *
	 * @param {string[]} [props.addresses.tags]						- Array of address tags.
	 * @param {number}   [props.addresses.contact_id]				- Address book contact id (0 means not connected
	 * to the address book).
	 *
	 * @param {string}   [props.optimized_callback_url]				- A URL that gets called when the optimization is solved,
	 * or if there is an error. The callback is called with a POST request.
	 * The POST data sent is:
	 * timestamp (Seconds) - Server timestamp of request sent;
	 * optimization_problem_id (Hash String) - ID of the optimization;
	 * state (Small Int) - The state can be one of the values:
	 *     4 = OPTIMIZATION_STATE_OPTIMIZED, which means the optimization was successful;
	 *     5 = OPTIMIZATION_STATE_ERROR, which means there was an error solving the optimization.
	 * Query string (GET fields).
	 *
	 * @param {boolean} [isRedirect]			- If set, it will be redirected. Use false for no redirection or not send.
	 *
	 * @param {RequestCallback} callback		- The callback that handles the response.
	 * @see {@link https://github.com/route4me/route4me-json-schemas/blob/master/Optimization_response.json}
	 */
	createWithAdvancedConstraints(props, isRedirect, callback) {
		let isRdr = isRedirect || false
		let cb = callback

		if (undefined === cb && "function" === typeof isRdr) {
			cb = isRdr
			isRdr = false
		}

		if (!isRdr) {
			return this.r._makeRequest({
				method: "POST",
				path: "/api.v4/optimization_problem.php",
				qs: { redirect: 0 },
				body: props,
				validationContext: "Optimizations.Response",
			}, cb)
		}

		return this.r._makeRequest({
			method: "POST",
			path: "/api.v4/optimization_problem.php",
			body: props,
			validationContext: "Optimizations.Response",
		}, cb)
	}
	/* eslint-enable max-len */

	/**
	 * GET a single optimization by
	 * [optimization_problem_id]{@link Optimizations#get~id} parameter.
	 *
	 * @see  {@link https://route4me.io/docs/#get-an-optimization}
	 *
	 * @param  {string} id - Optimization Problem ID
	 * @param  {module:route4me-node~RequestCallback<jsonschema:
	 * Optimizations.Optimization>} [callback]
	 */
	get(id, callback) {
		return this.r._makeRequest({
			method: "GET",
			path: "/api.v4/optimization_problem.php",
			qs: {
				"optimization_problem_id": id,
			},
			validationContext: "Optimizations.Optimization",
		}, callback)
	}

	/**
	 * GET all optimizations belonging to an user.
	 *
	 * @see {@link https://route4me.io/docs/#get-optimizations}
	 *
	 * @todo TODO: there is no JSON-schema for the response
	 * @todo TODO: convert options to optional parameter
	 *
	 * @param {(number|string|Array<string>|Array<number>)} states   - List of states [1..6]
	 * @param {Object} options          - List-parameters
	 * @param {number} [options.limit]  - List limit
	 * @param {number} [options.offset] - List offset
	 * @param {module:route4me-node~RequestCallback<jsonschema:
	 * Optimizations.Optimizations>} [callback]
	 */
	list(states, options, callback) {
		const validStates = utils.toOptimizationStatesSafe(states)
		if (validStates instanceof Error) {
			const err = validStates
			return this.r._makeError(err, callback)
		}

		const qs = {}
		if (validStates) { qs["states"] = validStates }

		if ("offset" in options) {
			qs["offset"] = options.offset
		}

		if ("limit" in options) {
			qs["limit"] = options.limit
		}

		return this.r._makeRequest({
			method: "GET",
			path: "/api.v4/optimization_problem.php",
			qs,
			validationContext: "Optimizations.Optimizations",
		}, callback)
	}

	/**
	 * Edit optimization
	 *
	 * Re-optimize existing optimizations by changing some parameters or addresses.
	 *
	 * @see {@link https://route4me.io/docs/#re-optimize-an-optimization}
	 * @since 0.1.7
	 *
	 * @param {string} id - Optimization Problem ID
	 * @param {jsonschema:Optimizations.CreateRequest}   data - New values for `Optimization`
	 * @param {boolean} [reoptimize=false] - Determine, whether the `Optimization`
	 * should be reoptimized
	 *
	 * @param {module:route4me-node~RequestCallback<jsonschema:Optimizations.Response>} [callback]
	 */
	update(id, data, reoptimize, callback) {
		let cb = callback
		let reopt = reoptimize

		if (undefined === cb
			&& "function" === typeof (reopt)
		) {
			cb = reopt
			reopt = false
		}

		return this.r._makeRequest({
			method: "PUT",
			path: "/api.v4/optimization_problem.php",
			qs: {
				"optimization_problem_id": id,
				"reoptimize": reopt ? "1" : "0",
			},
			body: data,
			validationContext: "Optimizations.Response",
		}, cb)
	}

	/**
	 * Remove an existing optimization belonging to an user.
	 *
	 * @see {@link https://route4me.io/docs/#remove-an-optimization}
	 * @since 0.1.7
	 *
	 * @todo TODO: There is no schema for validation an output
	 *
	 * @example
	 * const response = {
	 *	"status":true,
	 *	"removed":1
	 * }
	 *
	 * @param {string}  ids       - Optimization Problem IDs
	 * @param {module:route4me-node~RequestCallback<jsonschema:
	 * Optimizations.RemoveResponse>} [callback]
	 */
	remove(ids, callback) {
		return this.r._makeRequest({
			method: "DELETE",
			path: "/api.v4/optimization_problem.php",
			qs: {
				"optimization_problem_ids": ids,
			},
			validationContext: "Optimizations.RemoveResponse",
		}, callback)
	}

	/**
	 * Insert an address into an optimization, resulting in the recalculation of optimal routes.
	 *
	 * @see {@link https://route4me.io/docs/#insert-an-address-into-an-optimization}
	 * @tag Optimizations
	 * @tag Addresses
	 * @since 0.1.7
	 *
	 * @param {string}                              id                 - Optimization Problem ID
	 * @param {Array<jsonschema:Addresses.Address>} addresses          - Addresses array
	 * @param {boolean}                             [reoptimize=false] - Determine, whether the
	 * `Optimization` should be reoptimized
	 *
	 * @param {module:route4me-node~RequestCallback<jsonschema:Addresses.Addresses>} [callback]
	 */
	linkAddress(id, addresses, reoptimize, callback) {
		let cb = callback
		let reopt = reoptimize

		if (undefined === cb
			&& "function" === typeof (reopt)
		) {
			cb = reopt
			reopt = false
		}

		return this.r._makeRequest({
			method: "PUT",
			path: "/api.v4/optimization_problem.php",
			qs: {
				"optimization_problem_id": id,
				"reoptimize": reopt ? "1" : "0",
			},
			body: { "addresses": addresses },
			validationContext: "Addresses.Addresses",
		}, cb)
	}

	/**
	 * Remove a destination (an address) with specified route_destination_id
	 * from an optimization problem with specified optimization_problem_id.
	 *
	 * @see {@link https://route4me.io/docs/#remove-an-address-from-an-optimization}
	 * @tag Optimizations
	 * @tag Addresses
	 * @since 0.1.7
	 *
	 * @todo TODO: There is no schema for validation an output
	 *
	 * @example
	 * const response = {
	 *	"deleted":true,
	 *	"route_destination_id":1
	 * }
	 *
	 * @param {string}  id         - Optimization Problem ID
	 * @param {number}  addressId  - Address ID
	 * @param {module:route4me-node~RequestCallback<jsonschema:
	 * Optimizations.UnlinkAddressResponse>} [callback]
	 */
	unlinkAddress(id, addressId, callback) {
		return this.r._makeRequest({
			method: "DELETE",
			path: "/api.v4/address.php",
			qs: {
				"optimization_problem_id": id,
				"route_destination_id": addressId,
			},
			validationContext: "Optimizations.UnlinkAddressResponse",
		}, callback)
	}
}

module.exports = Optimizations
