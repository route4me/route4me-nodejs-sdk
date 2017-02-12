"use strict"

const debug           = require("debug")("route4me")

const utils           = require("./../utils")
const errors          = require("./../errors")

// ===================================

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
	 * @see {@link https://route4me.io/docs/#get-route-tracking-data}
	 * @category Routes
	 * @tag Routes
	 * @tag Tracking
	 * @since 0.1.8
	 *
	 * @param {string}  id       - Route ID
	 * @param {Object} [options] - Options
	 * @param {boolean} [options.includeTracking] - if `true` - the route tracking data
	 * will be included into the response.
	 * See also {@link https://route4me.io/docs/#get-route-tracking-data}
	 * @param {boolean} [options.includeDirections] - if `true` - returns directions
	 * @param {boolean} [options.includeRoutePath] - if `true` - include route path
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
	 * Search the Routes for a Specified Text.
	 *
	 * Search for the specified text throughout all routes belonging to the user’s account.
	 *
	 * @see {@link https://route4me.io/docs/#search-routes}
	 * @category Routes
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
	 * @category Routes
	 * @since 0.1.10
	 *
	 * @param {string}                            id    - Route ID
	 * @param {jsonschema:Routes.RouteParameters} data  - Route parameters
	 * @param {module:route4me-node~RequestCallback<jsonschema:Routes.Route>}
	 * [callback]
	 */
	updateParameters(id, data, callback) {
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
	 * @tag Routes
	 * @tag Addresses
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
	 * @category Routes
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
	 * @category Routes
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
	 * @category Routes
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
	 * @category Routes
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
			validationContext: CustomInternalPostProcessing.share,
		}, callback)
	}

	/**
	 * Move a Destination Into a Route
	 *
	 * _ID of the source route **is not required**_
	 *
	 * @see {@link https://route4me.io/docs/#move-a-destination-into-a-route}
	 * @category Routes
	 * @since 0.1.10
	 *
	 * @param {string} id       - Destination route ID
	 * @param {number} addressId      - An address ID to be moved
	 * @param {number} afterAddressId - An address ID in a destination route after
	 * which the moved destination will be inserted
	 * @param {module:route4me-node~RequestCallback} [callback]
	 */
	pullIn(id, addressId, afterAddressId, callback) {
		const form = {
			"to_route_id": id,
			"route_destination_id": addressId,
			"after_destination_id": afterAddressId,
		}

		return this.r._makeRequest({
			method: "POST",
			path: "/actions/route/move_route_destination.php",
			form,
			validationContext: CustomInternalPostProcessing.pullIn,
		}, callback)
	}

	/**
	 * Manually Re-sequence a Route
	 *
	 * @see {@link https://route4me.io/docs/#manually-re-sequence-a-route}
	 * @category Routes
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
	 * @category Routes
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
			"disable_optimization": "0",
			"optimize": criteria,
		}

		return this.r._makeRequest({
			method: "POST",
			path: "/api.v3/route/reoptimize_2.php",
			qs,
			validationContext: utils.CustomInternalPostProcessing.fromJsonWithStatus,
		}, callback)
	}
}

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

	static pullIn(data, ctx, res) {
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

module.exports = Routes
