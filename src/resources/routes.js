"use strict"

const utils = require("../utils")

/**
 * @namespace
 */
class Routes {
	/**
	 * Routes facility
	 *
	 * @see {@link https://route4me.io/docs/#routes}
	 * @since 0.1.8
	 * @private
	 *
	 * @param  {Route4Me}      route4me - Route4Me manager
	 * @return {Routes}                 - Routes facility
	 */
	constructor(route4me) {
		this.r = route4me
	}

	/**
	 * Get a single route.
	 *
	 * @see {@link https://route4me.io/docs/#get-a-route}
	 * @category Routes
	 * @since 0.1.8
	 *
	 * @todo TODO: describe all OPTIONS
	 *
	 * @param {string}  id       - Route ID
	 * @param {Object} [options] - Options
	 * @param {boolean} [options.includeTracking] - if `true` - the route tracking data
	 * will be included into the response.
	 * See also {@link https://route4me.io/docs/#get-route-tracking-data}
	 * @param {module:route4me-node~RequestCallback<jsonschema:Routes.Route>} [callback]
	 */
	get(id, options, callback) {
		let opt = options
		let cb = callback
		const qs = {}

		if (cb === undefined && "function" === typeof opt) {
			cb = opt
			opt = null
		}

		qs["route_id"] = id
		if (opt && true === opt["includeTracking"]) {
			qs["device_tracking_history"] = "1"
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
	 * @category Routes
	 * @since 0.1.8
	 *
	 * @param {Object} options          - List-parameters
	 * @param {number} [options.limit]  - List limit
	 * @param {number} [options.offset] - List offset
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

		return this.r._makeRequest({
			method: "GET",
			path: "/api.v4/route.php",
			qs,
			validationContext: "Routes.Routes",
		}, callback)
	}

	/**
	 * Given multiple route ID’s, remove all routes at the same time.
	 *
	 * @see {@link https://route4me.io/docs/#remove-routes}
	 * @category Routes
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
	 * @param {module:route4me-node~RequestCallback<jsonschema:Routes.RemoveResponse>}
	 * [callback]
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
	 * @category Routes
	 * @since 0.1.10
	 *
	 * @param {string}  id  - Route ID
	 * @param {Array<jsonschema:Addresses.Address>} addresses   - Array of `Addresses`
	 * @param {Object}  [options]                      - Insert options
	 * @param {boolean} [options.optimalPosition=true] - If true, an address will be
	 * inserted at optimal position of a route
	 * @param {module:route4me-node~RequestCallback<jsonschema:Routes.Route>}
	 * [callback]
	 */
	linkAddress(id, addresses, options, callback) {
		let opt = options
		let cb = callback
		if (undefined === cb
			&& "function" === typeof(opt)
		) {
			cb = opt
			opt = {}
		}

		if (!opt) {
			opt = {}
		}

		const body = {}
		body["optimal_position"] = undefined === opt.optimalPosition ? true : !!opt.optimalPosition
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
	 * Remove a destination (an address) with specified route_destination_id
	 * from an optimization problem with specified optimization_problem_id.
	 *
	 * @see {@link https://route4me.io/docs/#remove-an-address-from-an-optimization Route4Me API}
	 * @category Optimizations
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
	 * @param {number}  addressId  - Route destination ID
	 * @param {module:route4me-node~RequestCallback<jsonschema:Optimizations.UnlinkAddressResponse>}
	 * [callback]
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


	/**
	 * Duplicates the route. More information - on Route4Me API-doc site (see links section).
	 *
	 * @see {@link https://route4me.io/docs/#duplicate-a-route}
	 * @category Routes
	 * @since 0.1.8
	 *
	 * @todo TODO: There is no output schema
	 * @example
	 * SampleOutput = {
	 * 	"optimization_problem_id":"672998C4269918AFF461E5A691BAB8D0",
	 * 	"success":true
	 * }
	 *
	 * @todo TODO: parse the response
	 *
	 * @param {string}  id       - Route ID
	 * @param {module:route4me-node~RequestCallback<jsonschema:Routes.DuplicateResponse>} [callback]
	 */
	duplicate(id, callback) {
		return this.r._makeRequest({
			method: "POST",
			path: "/actions/duplicate_route.php",
			qs: {
				"route_id": id,
				"to": "none",
			},
			validationContext: "Routes.DuplicateResponse",
		}, callback)
	}

	/**
	 * Merges the list of routes. More information - on Route4Me API-doc site (see links section).
	 *
	 * @see {@link https://route4me.io/docs/#merge-routes}
	 * @category Routes
	 * @since 0.1.8
	 *
	 * @todo TODO: There is no output schema
	 * @example
	 * SampleOutput = {
	 * 	"optimization_problem_id":"672998C4269918AFF461E5A691BAB8D0",
	 * 	"success":true
	 * }
	 *
	 * @todo TODO: parse the response
	 *
	 * @param {string|Array<string>}  ids       - Array of the Route IDs to be merged.
	 * @param {module:route4me-node~RequestCallback<jsonschema:Routes.MergeResponse>} [callback]
	 */
	merge(ids, callback) {
		const idsPure = utils.toStringArray(ids)

		return this.r._makeRequest({
			method: "POST",
			path: "/actions/merge_routes.php",
			body: idsPure,
			validationContext: "Routes.MergeResponse",
		}, callback)
	}

}

module.exports = Routes
