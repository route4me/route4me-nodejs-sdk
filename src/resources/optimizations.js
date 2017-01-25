"use strict"

const utils = require("../utils")
const errors = require("../errors")

/**
 * @namespace
 */
class Optimizations {
	/**
	 * Optimizations facility
	 *
	 * @see {@link https://route4me.io/docs/#optimizations}
	 * @since 0.2.0
	 * @private
	 *
	 * @param  {Route4Me}      route4me [description]
	 * @return {Optimizations}          [description]
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
	 * @param  {jsonschema:Optimizations.CreateRequest} params Parameters for new optimization
	 * @param  {module:route4me-node~RequestCallback<jsonschema:Optimizations.Response>}  [callback]
	 */
	create(params, callback) {
		const verror = this.r._validate(params, "Optimizations.CreateRequest")
		if (verror) { return callback(verror) }

		return this.r._makeRequest({
			method: "POST",
			path: "/api.v4/optimization_problem.php",
			body: params,
			schemaName: "Optimizations.Response",
		}, callback)
	}

	/**
	 * GET a single optimization by
	 * [optimization_problem_id]{@linkcode Optimizations#get~id} parameter.
	 *
	 * @see  {@link https://route4me.io/docs/#get-an-optimization  Route4Me API}
	 * @category Optimizations
	 *
	 * @param  {string|number} id Optimization Problem ID
	 * @param  {module:route4me-node~RequestCallback<jsonschema:Optimizations.Response>} [callback]
	 */
	get(id, callback) {
		if (typeof id !== "string" && typeof id !== "number") {
			return callback(new errors.Route4MeError("'id' parameter MUST be a string"))
		}

		const qs = {
			"optimization_problem_id": id,
		}

		return this.r._makeRequest({
			method: "GET",
			path: "/api.v4/optimization_problem.php",
			qs,
			schemaName: "Optimizations.Response",
		}, callback)
	}

	/**
	 * GET all optimizations belonging to an user.
	 *
	 * @see {@link https://route4me.io/docs/#get-optimizations  Route4Me API}
	 * @category Optimizations
	 *
	 * @param {(integer|string|Array.<string>|Array.<integer>)}  states    List of states [1..6]
	 * @param {integer}                    [limit]    Search limitation
	 * @param {integer}                    [offset]   Search starting position
	 * @param {module:route4me-node~RequestCallback<jsonschema:Optimizations.ResponseMany>} [callback]
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
			schemaName: "Optimizations.ResponseMany",
		}, callback)
	}
}

module.exports = Optimizations
