"use strict"

const debug           = require("debug")("route4me")

const utils           = require("./../utils")
const errors          = require("./../errors")

class CustomInternalPostProcessing {
	/**
	 * Handle `duplicate` output
	 *
	 * @private
	 *
	 * @example <caption>Expected input</caption>
	 * Sample = {
	 * 	"optimization_problem_id":"672998C4269918AFF461E5A691BAB8D0",
	 * 	"success":true
	 * }
	 *
	 * @param  {Object} data - Internal
	 * @param  {Object} ctx  - Internal
	 * @param  {Object} res  - Internal
	 * @return {string}      - The ID of duplicate
	 */
	static duplicate(data, ctx, res) {
		if (
			!data
			|| "boolean" !== typeof data["success"]
			|| "string" !== typeof data["optimization_problem_id"]
		) {
			return new errors.Route4MeValidationError("Invalid response", data)
		}

		if (true === data["success"]) {
			return data["optimization_problem_id"]
		}

		// TODO: parse real error
		return new errors.Route4MeApiError("Failed", res)
	}

	static pullAddress(data, ctx, res) {
		if (
			!data
			|| "boolean" !== typeof data["success"]
		) {
			return new errors.Route4MeValidationError("Invalid response", data)
		}

		if (true === data["success"]) {
			return true
		}

		// TODO: parse real error
		return new errors.Route4MeApiError("Failed", res)
	}

	/**
	 * merge post-processor
	 *
	 * @private
	 *
	 * @example
	 * Sample = {
	 * 	"optimization_problem_id":"672998C4269918AFF461E5A691BAB8D0",
	 * 	"success":true
	 * }
	 *
	 * @param  {Object} data - Internal
	 * @param  {Object} ctx  - Internal
	 * @param  {Object} res  - Internal
	 * @return {string}      - The ID of merged Route
	 */
	static merge(data, ctx, res) {
		return CustomInternalPostProcessing.duplicate(data, ctx, res)
	}

	/**
	 * unlinkAddress
	 *
	 * @private
	 *
	 * @example
	 * Sample = {
	 * 	"deleted":true
	 * }
	 *
	 * @param  {Object} data - Internal
	 * @param  {Object} ctx  - Internal
	 * @param  {Object} res  - Internal
	 * @return {boolean}     - Success
	 */
	static unlinkAddress(data, ctx, res) {
		if (!data || "boolean" !== typeof data.deleted) {
			return new errors.Route4MeValidationError("Invalid response", data)
		}

		if (true === data.deleted) {
			return true
		}

		// TODO: parse real error
		return new errors.Route4MeApiError("Failed", res)
	}
}

// ===================================

/**
 * Routes facility
 *
 * @category Routes
 */
class Routes {
	/**
	 * Constructor
	 *
	 * @see {@link https://route4me.io/docs/#routes}
	 * @since 0.1.8
	 * @private
	 *
	 * @param  {RequestManager} requestManager - Request Manager
	 * @return {Routes}                        - Routes facility
	 */
	constructor(requestManager) {
		this.r = requestManager
	}

	/**
	 * Get a single route.
	 *
	 * @see {@link https://route4me.io/docs/#get-a-route}
	 * @see {@link https://route4me.io/docs/#get-route-tracking-data}
	 * @tag Routes
	 * @tag Tracking
	 * @since 0.1.8
	 *
	 * @param {string}  id       - Route ID
	 * @param {Object} [options] - Options
	 * @param {boolean} [options.includeTracking]    - if `true` - the route tracking data
	 * will be included into the response.
	 * See also {@link https://route4me.io/docs/#get-route-tracking-data}
	 * @param {boolean} [options.includeDirections]  - if `true` - returns directions
	 * @param {boolean} [options.includeRoutePath]   - if `true` - include route path
	 * @param {boolean} [options.compressPathPoints] - if `true` - the path points in
	 * the response will be compressed
	 * @param {module:route4me-node~RequestCallback<jsonschema:Routes.Route>} [callback]
	*/
	get(id, options, callback) {
		let opt = options
		let cb = callback

		if (cb === undefined
			&& "function" === typeof opt
		) {
			cb = opt
			opt = null
		}

		if (!opt) {
			opt = {}
		}

		const qs = {}
		qs["route_id"] = id
		if (true === opt["includeTracking"]) {
			qs["device_tracking_history"] = "1"
		}

		if (true === opt["includeDirections"]) {
			qs["directions"] = "1"
		}

		if (undefined !== opt["includeRoutePath"]) {
			qs["route_path_output"] = opt.includeRoutePath ? "Points" : "None"
		}

		if (true === opt["compressPathPoints"]) {
			qs["compress_path_points"] = "1"
		}

		return this.r._makeRequest({
			method: "GET",
			path: "/api.v4/route.php",
			qs,
			validationContext: "Routes.Route",
		}, cb)
	}

	/**
	 * Get a limited number of the routes belonging to the user.
	 *
	 * @see {@link https://route4me.io/docs/#get-multiple-routes}
	 * @since 0.1.8
	 * @todo TODO: make options optional param
	 *
	 * @param {Object} options               - List-parameters
	 * @param {number} [options.limit]       - List limit
	 * @param {number} [options.offset]      - List offset
	 * @param {string} [options.startDate]   - Start date of route as "YYYY-MM-DD"
	 * @param {string} [options.endDate]     - End date of route as "YYYY-MM-DD"
	 * @param {module:route4me-node~RequestCallback<jsonschema:Routes.Routes>} [callback]
  	 */
	list(options, callback) {
		const qs = {}

		if ("limit" in options) {
			qs["limit"] = options.limit
		}

		if ("offset" in options) {
			qs["offset"] = options.offset
		}

		if ("startDate" in options) {
			qs["start_date"] = options.startDate
		}

		if ("endDate" in options) {
			qs["end_date"] = options.endDate
		}

		return this.r._makeRequest({
			method: "GET",
			path: "/api.v4/route.php",
			qs,
			validationContext: "Routes.Routes",
		}, callback)
	}

	/**
	 * Search the Routes for a Specified Text.
	 *
	 * Search for the specified text throughout all routes belonging to the user’s account.
	 *
	 * @see {@link https://route4me.io/docs/#search-routes}
	 * @since 0.1.10
	 *
	 * @param {string} query          - A text to be searched for
	 * @param {module:route4me-node~RequestCallback<jsonschema:Routes.Routes>} [callback]
	 */
	search(query, callback) {
		const qs = {
			"query": query.toString()
		}

		return this.r._makeRequest({
			method: "GET",
			path: "/api.v4/route.php",
			qs,
			validationContext: "Routes.Routes",
		}, callback)
	}

	/**
	 * Update a route’s specified parameters.
	 *
	 * @see {@link https://route4me.io/docs/#update-a-route}
	 * @since 0.1.10
	 *
	 * @param {string}                  id    - Route ID
	 * @param {jsonschema:Routes.Route} data  - New route data
	 * @param {module:route4me-node~RequestCallback<jsonschema:Routes.Route>} [callback]
	 */
	update(id, data, callback) {
		const qs = {
			"route_id": id
		}

		const body = data

		return this.r._makeRequest({
			method: "PUT",
			path: "/api.v4/route.php",
			qs,
			body,
			validationContext: "Routes.Route",
		}, callback)
	}

	/**
	 * Given multiple route ID’s, remove all routes at the same time.
	 *
	 * @see {@link https://route4me.io/docs/#remove-routes}
	 * @since 0.1.8
	 *
	 * @todo TODO: There is no schema for the response
	 * @example
	 * SampleResponse = {
	 * {
	 * 	"deleted": true,
	 * 	"route_id": "270CB108F227AD6E11827FC08EE4E2D7,C340E3F6AF28E20EFAE0FBE51759C338",
	 * 	"route_ids": [
	 * 		"270CB108F227AD6E11827FC08EE4E2D7",
	 * 		"C340E3F6AF28E20EFAE0FBE51759C338"
	 * 	]
	 * }
	 *
	 * @todo TODO: parse the response
	 *
	 * @param {(number|string|Array<number>|Array<string>)}  ids - Route ID **or** comma-separated
	 * list of route IDs **or** array of route IDs
	 * @param {module:route4me-node~RequestCallback<jsonschema:Routes.RemoveResponse>} [callback]
	 */
	remove(ids, callback) {
		const idsPure = utils.toStringArray(ids)

		return this.r._makeRequest({
			method: "DELETE",
			path: "/api.v4/route.php",
			qs: {
				"route_id": idsPure,
			},
			validationContext: "Routes.RemoveResponse",
		}, callback)
	}

	/**
	 * Add Addresses to Routes
	 *
	 * @see {@link https://route4me.io/docs/#add-addresses-to-routes}
	 * @tag Routes
	 * @tag Addresses
	 * @since 0.1.10
	 *
	 * @param {string}  id  - Route ID
	 * @param {Array<jsonschema:Addresses.Address>} addresses   - Array of `Addresses`
	 * @param {Object}  [options]                      - Insert options
	 * @param {boolean} [options.optimalPosition=true] - If true, an address will be
	 * inserted at optimal position of a route
	 * @param {module:route4me-node~RequestCallback<jsonschema:Routes.Route>} [callback]
	 */
	linkAddress(id, addresses, options, callback) {
		let opt = options
		let cb = callback
		if (undefined === cb
			&& "function" === typeof (opt)
		) {
			cb = opt
			opt = {}
		}

		if (!opt) {
			opt = {}
		}

		const optimalPosition = undefined === opt.optimalPosition ? true : !!opt.optimalPosition

		const body = {}
		body["optimal_position"] = optimalPosition
		body["addresses"] = addresses

		return this.r._makeRequest({
			method: "PUT",
			path: "/api.v4/route.php",
			qs: {
				"route_id": id,
			},
			body,
			validationContext: "Routes.Route",
		}, cb)
	}

	/**
	 * REMOVE an address from a route.
	 *
	 * @see {@link https://route4me.io/docs/#remove-addresses-from-routes}
	 * @tag Routes
	 * @tag Addresses
	 * @since 0.1.10
	 *
	 * @param {string}  id         - Route ID
	 * @param {number}  addressId  - Address ID
	 * @param {module:route4me-node~RequestCallback} [callback]
	 */
	unlinkAddress(id, addressId, callback) {
		return this.r._makeRequest({
			method: "DELETE",
			path: "/api.v4/address.php",
			qs: {
				"route_id": id,
				"route_destination_id": addressId,
			},
			validationContext: CustomInternalPostProcessing.unlinkAddress,
		}, callback)
	}

	/**
	 * Duplicates the route. More information - on Route4Me API-doc site (see links section).
	 *
	 * @see {@link https://route4me.io/docs/#duplicate-a-route}
	 * @since 0.1.8
	 *
	 * @param {string}  id       - Route ID
	 * @param {module:route4me-node~RequestCallback<string>} [callback] - callback, will be called
	 * with the ID (<string>) of the new created Route
	 */
	duplicate(id, callback) {
		return this.r._makeRequest({
			method: "POST",
			path: "/actions/duplicate_route.php",
			qs: {
				"route_id": id,
				"to": "none",
			},
			validationContext: CustomInternalPostProcessing.duplicate,
		}, callback)
	}

	/**
	 * Merges the list of routes. More information - on Route4Me API-doc site (see links section).
	 *
	 * @see {@link https://route4me.io/docs/#merge-routes}
	 * @since 0.1.8
	 *
	 * @param {string|Array<string>}  ids       - Array of the Route IDs to be merged.
	 * @param {module:route4me-node~RequestCallback<string>} [callback]
	 */
	merge(ids, callback) {
		const idsPure = utils.toStringArray(ids)

		return this.r._makeRequest({
			method: "POST",
			path: "/actions/merge_routes.php",
			body: idsPure,
			validationContext: CustomInternalPostProcessing.merge,
		}, callback)
	}

	/**
	 * Share Routes
	 *
	 * Share a route via email.
	 *
	 * @see {@link https://route4me.io/docs/#share-routes}
	 * @since 0.1.10
	 *
	 * @param {string} id     - Route ID
	 * @param {string} email  - Recipient email
	 * @param {module:route4me-node~RequestCallback} [callback]
	 */
	share(id, email, callback) {
		const qs = {
			"route_id": id,
			"response_format": "json",
		}

		const form = {
			"recipient_email": email,
		}

		return this.r._makeRequest({
			method: "POST",
			path: "/actions/route/share_route.php",
			qs,
			form,
			validationContext: utils.CustomInternalPostProcessing.fromJsonWithStatus,
		}, callback)
	}

	/**
	 * Move a Destination Into a Route
	 *
	 * _ID of the source route **is not required**_
	 *
	 * @see {@link https://route4me.io/docs/#move-a-destination-into-a-route}
	 * @since 0.1.10
	 *
	 * @param {string} id       - Destination route ID
	 * @param {number} addressId      - An address ID to be moved
	 * @param {number} afterAddressId - An address ID in a destination route after
	 * which the moved destination will be inserted
	 * @param {module:route4me-node~RequestCallback} [callback]
	 */
	pullAddress(id, addressId, afterAddressId, callback) {
		const form = {
			"to_route_id": id,
			"route_destination_id": addressId,
			"after_destination_id": afterAddressId,
		}

		return this.r._makeRequest({
			method: "POST",
			path: "/actions/route/move_route_destination.php",
			form,
			validationContext: CustomInternalPostProcessing.pullAddress,
		}, callback)
	}

	/**
	 * Manually Re-sequence a Route
	 *
	 * @see {@link https://route4me.io/docs/#manually-re-sequence-a-route}
	 * @since 0.1.10
	 *
	 * @param {string}                 id     - Route ID
	 * @param {Object<number, number>} order  - Resequence rules:
	 *
	 * * **keys**: ID of an address
	 * * **values**: new sequence order of the address (counting from `1`)
	 *
	 * @param {module:route4me-node~RequestCallback<jsonschema:Routes.Route>} [callback]
	 */
	resequence(id, order, callback) {
		const qs = {
			"route_id": id,
		}

		const addresses = Object.keys(order)
			.map(addressId => ({
				"route_destination_id": Number(addressId),
				"sequence_no": Number(order[addressId]),
			}))

		const body = {
			addresses
		}

		debug(`route resequence BODY: ${body}`)

		return this.r._makeRequest({
			method: "PUT",
			path: "/api.v4/route.php",
			qs,
			body,
			validationContext: "Routes.Route",
		}, callback)
	}

	/**
	 * Optimize and re-sequence all destinations
	 *
	 * @see {@link https://route4me.io/docs/#manually-re-sequence-a-route}
	 * @since 0.1.10
	 *
	 * @param {string} id       - Route ID
	 * @param {string} criteria - Optimization type, possible values:
	 * * `Distance` - optimize for distance
	 * * `Time`
	 * * `TimeWithTraffic`
	 * * `NoneOptimize`
	 * @param {module:route4me-node~RequestCallback} [callback]
	 */
	optimize(id, criteria, callback) {
		const qs = {
			"route_id": id,
		}
		const body = {
			"disable_optimization": "0",
			"optimize": criteria,
		}

		return this.r._makeRequest({
			method: "PUT",
			path: "/api.v4/route.php",
			qs,
			body,
			validationContext: utils.CustomInternalPostProcessing.fromJsonWithStatus,
		}, callback)
	}

	/**
	 * RouteExamples
	 *
	 * @see {@link https://route4me.io/docs/#optimizations}
	 *
	 * @param {object} param - Optimization params
	 * @param {module:route4me-node~RequestCallback}    [callback]
	 */
	routeexamples_optiomization(param, callback) {
		return this.r._makeRequest({
			method: "POST",
			path: "/api.v4/optimization_problem.php",
			body: param,
			validationContext: "Routes.routeexamples_optiomization",
		}, callback)
	}

	/**
	 * RouteExample
	 * Get Schedule Calendar
	 *
	 * @see {@link https://route4me.io/docs/#get-schedule-calendar}
	 *
	 * @param {object} param - Schedule params
	 * @param {module:route4me-node~RequestCallback}    [callback]
	 */
	get_schedule_calendar(param, callback) {
		return this.r._makeRequest({
			method: "GET",
			path: "/api/schedule_calendar_data.php",
			body: param,
			validationContext: "Routes.get_schedule_calendar",
		}, callback)
	}

	/**
	 * Store a new Driver Break in the database.
	 *
	 * @see {@link https://virtserver.swaggerhub.com/Route4Me/route-breaks/5.0}
	 * @since 1.0.12
	 *
	 * @param {object}   options                         - Routebreaks params
	 * @param {string[]} options.route_id                - Route IDs to get result.
	 * @param {object[]} options.breaks                  - Break IDs.
	 * @param {string}   options.breaks.type             - Type of break.
	 * Possible values:
	 *   - approximate_time_of_day
	 *   - certain_number_of_total_elapsed_time
	 *   - certain_number_of_travel_time
	 *   - certain_number_of_service_time
	 *   - certain_number_of_locations
	 * @param {number}   options.breaks.duration         - Duration of break.
	 * @param {number[]} options.breaks.params           - Params break.
	 * @param {boolean}  options.replace_existing_breaks - Replace existing breaks.
	 * @param {module:route4me-node~RequestCallback}       [callback]
	 */
	routeBreaks(options, callback) {
		return this.r._makeRequest5({
			method: "POST",
			path: "/api/v5.0/route-breaks",
			body: options,
			validationContext: "RouteBreaks.RequestRouteBreak",
		}, callback)
	}

	/**
	 * Get the status by specifying the path parameter ID.
	 *
	 * @see {@link https://virtserver.swaggerhub.com/Route4Me/route-status/5.0}
	 * @since 1.0.12
	 *
	 * @param {string} routeId                           - Route ID to get status.
	 * @param {module:route4me-node~RequestCallback}       [callback]
	 */
	getStatus(routeId, callback) {
		return this.r._makeRequest5({
			method: "GET",
			path: `/api/v5.0/route-status/${routeId}`,
			validationContext: "RouteStatus.ResponseStatus",
		}, callback)
	}

	/**
	 * Roll back route status by specifying the path parameter ID.
	 * Sometimes a status rollback is possible.
	 *
	 * @see {@link https://virtserver.swaggerhub.com/Route4Me/route-status/5.0}
	 * @since 1.0.12
	 *
	 * @param {string} routeId                           - Route ID to rollback status.
	 * @param {module:route4me-node~RequestCallback}       [callback]
	 */
	rollbackStatus(routeId, callback) {
		return this.r._makeRequest5({
			method: "GET",
			path: `/api/v5.0/route-status/${routeId}/rollback`,
			validationContext: "RouteStatus.ResponseStatus",
		}, callback)
	}

	/**
	 * Get route status history by specifying the path parameter ID.
	 *
	 * @see {@link https://virtserver.swaggerhub.com/Route4Me/route-status/5.0}
	 * @since 1.0.12
	 *
	 * @param {string} routeId                           - Route ID to get history status.
	 * @param {object} [options]
	 * @param {string} [options.order_by]                - Result order.
	 * Possible values: 'asc' and 'desc'
	 * @param {number} [options.start]                   - Unix timestamp in seconds.
	 * @param {number} [options.end]                     - Unix timestamp in seconds.
	 * @param {module:route4me-node~RequestCallback}       [callback]
	 */
	getHistoryStatus(routeId, options, callback) {
		let opt = options || {}
		let cb = callback

		if (undefined === cb && "function" === typeof opt) {
			cb = opt
			opt = {}
		}

		return this.r._makeRequest5({
			method: "GET",
			path: `/api/v5.0/route-status/${routeId}/history`,
			qs: opt,
			validationContext: "RouteStatus.HistoryCollection",
		}, cb)
	}

	/**
	 * Store a new Status in the database or update the status by specifying
	 * the path parameter ID.
	 * Route statuses change only forward - planned > started/paused > completed.
	 *
	 * @see {@link https://virtserver.swaggerhub.com/Route4Me/route-breaks/5.0}
	 * @since 1.0.12
	 *
	 * @param {string} routeId                           - Route ID to update status.
	 * @param {object} params
	 * @param {string} params.status                     - Value of status.
	 * Possible values: 'planned', 'started', 'paused' and 'completed'.
	 * @param {number} params.lat                         - Latitude.
	 * @param {number} params.lng                         - Longitude.
	 * @param {number} params.event_timestamp             - Unix timestamp in seconds..
	 * @param {module:route4me-node~RequestCallback}       [callback]
	 */
	updateStatus(routeId, params, callback) {
		return this.r._makeRequest5({
			method: "POST",
			path: `/api/v5.0/route-status/${routeId}`,
			body: params,
			validationContext: "RouteStatus.ResponseStatus",
		}, callback)
	}

	/**
	 * Store a new Status in the database with 'planned' status.
	 *
	 * @see {@link https://virtserver.swaggerhub.com/Route4Me/route-breaks/5.0}
	 * @since 1.0.12
	 *
	 * @param {string[]} routeIds                           - Route IDs to set 'planned' status.
	 * @param {module:route4me-node~RequestCallback}          [callback]
	 */
	setPlannedStatus(routeIds, callback) {
		return this.r._makeRequest5({
			method: "POST",
			path: "/api/v5.0/route-status/planned",
			body: { route_ids: routeIds },
			validationContext: "RouteStatus.StatusCollection",
		}, callback)
	}
}

module.exports = Routes
