"use strict"

const utils = require("../utils")

/**
 * @namespace
 */
class Optimizations {
	/**
	 * Optimizations facility
	 *
	 * @see {@link https://route4me.io/docs/#optimizations}
	 * @category Optimizations
	 * @since 0.1.3
	 * @private
	 *
	 * @param  {Route4Me}      route4me - Route4Me main class
	 * @return {Optimizations}          - Optimizations facility
	 */
	constructor(route4me) {
		this.r = route4me
	}

	/**
	 * Create a new optimization
	 *
	 * @see {@link https://route4me.io/docs/#create-an-optimization Route4Me API}
	 * @category Optimizations
	 *
	 * @param  {jsonschema:Optimizations.CreateRequest} optimization - Parameters for new optimization
	 * @param  {module:route4me-node~RequestCallback<jsonschema:Optimizations.Response>}  [callback]
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
	 * [optimization_problem_id]{@linkcode Optimizations#get~id} parameter.
	 *
	 * @see  {@link https://route4me.io/docs/#get-an-optimization  Route4Me API}
	 * @category Optimizations
	 *
	 * @param  {string} id - Optimization Problem ID
	 * @param  {module:route4me-node~RequestCallback<jsonschema:Optimizations.Optimization>}
	 *         [callback]
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
	 * @see {@link https://route4me.io/docs/#get-optimizations  Route4Me API}
	 * @category Optimizations
	 *
	 * @param {(integer|string|Array.<string>|Array.<integer>)}  states    - List of states [1..6]
	 * @param {integer}                    [limit]    - Search limitation
	 * @param {integer}                    [offset]   - Search starting position
	 * @param {module:route4me-node~RequestCallback<jsonschema:Optimizations.Optimizations>}
	 *        [callback]
	 */
	list(states, limit, offset, callback) {
		const _states = utils.parseStates(states)
		if (_states instanceof Error) {
			return callback(_states)
		}

		const qs = {}
		if (_states) { qs["states"] = _states }

		utils.qsLimitAndOffset(qs, limit, offset)

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
	 * @see {@link https://route4me.io/docs/#re-optimize-an-optimization Route4Me API}
	 * @category Optimizations
	 * @since 0.1.7
	 *
	 * @todo TODO: make reoptimize optional parameter
	 *
	 * @param {string} id - Optimization Problem ID
	 * @param {jsonschema:Optimizations.CreateRequest}   optimization - New values for `Optimization`
	 * @param {boolean} reoptimize - Determine, whether the `Optimization` should be reoptimized
	 * @param {module:route4me-node~RequestCallback<jsonschema:Optimizations.Response>} [callback]
	 */
	update(id, optimization, reoptimize, callback) {
		return this.r._makeRequest({
			method: "PUT",
			path: "/api.v4/optimization_problem.php",
			qs: {
				"optimization_problem_id": id,
				"reoptimize": reoptimize ? "1" : "0",
			},
			body: optimization,
			validationContext: "Optimizations.Response",
		}, callback)
	}

	/**
	 * Remove an existing optimization belonging to an user.
	 *
	 * @see {@link https://route4me.io/docs/#remove-an-optimization  Route4Me API}
	 * @category Optimizations
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
	 *     [callback]
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
	 * @see {@link https://route4me.io/docs/#insert-an-address-into-an-optimization Route4Me API}
	 * @category Optimizations
	 * @since 0.1.7
	 *
	 * @todo TODO: make reoptimize optional parameter
	 *
	 * @param {string}  id                                   - Optimization Problem ID
	 * @param {Array<jsonschema:Addresses.Address>}   addresses   - Addresses array
	 * @param {boolean} reoptimize - Determine, whether the `Optimization` should be reoptimized
	 * @param {module:route4me-node~RequestCallback<jsonschema:Addresses.Addresses>} [callback]
	 */
	linkAddress(id, addresses, reoptimize, callback) {
		return this.r._makeRequest({
			method: "PUT",
			path: "/api.v4/optimization_problem.php",
			qs: {
				"optimization_problem_id": id,
				"reoptimize": reoptimize ? "1" : "0",
			},
			body: { "addresses" : addresses },
			validationContext: "Addresses.Addresses",
		}, callback)
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
	 *        [callback]
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
