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
	 * @param  {module:route4me-node~RequestCallback<jsonschema:Optimizations.Response>}
	 * [callback]
	 */
	create(optimization, callback) {
		return this.r._makeRequest({
			method: "POST",
			path: "/api.v4/optimization_problem.php",
			body: optimization,
			validationContext: "Optimizations.Response",
		}, callback)
	}

	/**
	 * GET a single optimization by
	 * [optimization_problem_id]{@link Optimizations#get~id} parameter.
	 *
	 * @see  {@link https://route4me.io/docs/#get-an-optimization}
	 *
	 * @param  {string} id - Optimization Problem ID
	 * @param  {module:route4me-node~RequestCallback<jsonschema:Optimizations.Optimization>}
	 * [callback]
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
	 *
	 * @param {(number|string|Array<string>|Array<number>)} states   - List of states [1..6]
	 * @param {Object} options          - List-parameters
	 * @param {number} [options.limit]  - List limit
	 * @param {number} [options.offset] - List offset
	 * @param {module:route4me-node~RequestCallback<jsonschema:Optimizations.Optimizations>}
	 * [callback]
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

	/*
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
	 * @param {module:route4me-node~RequestCallback<jsonschema:Optimizations.Response>}
	 * [callback]
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
	 * @param {string}  id       - Optimization Problem ID
	 * @param {module:route4me-node~RequestCallback<jsonschema:Optimizations.RemoveResponse>}
	 * [callback]
	 */
	remove(id, callback) {
		return this.r._makeRequest({
			method: "DELETE",
			path: "/api.v4/optimization_problem.php",
			qs: {
				"optimization_problem_id": id,
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
	 * @param {module:route4me-node~RequestCallback<jsonschema:Addresses.Addresses>}
	 * [callback]
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

}

module.exports = Optimizations
