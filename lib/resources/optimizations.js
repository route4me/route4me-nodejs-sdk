"use strict"

const utils = require("../utils")
const errors = require("../errors")

/**
 * Optimizations functionality.
 *
 * See also: {@link https://route4me.io/docs/#optimizations}
 *
 * @since 0.2.0
 */
class Optimizations {
	constructor(route4me) {
		this.r = route4me
	}

	/**
	 * GET a single optimization by `optimization_problem_id` parameter.
	 *
	 * {@link https://route4me.io/docs/#get-an-optimization  Route4Me API}
	 *
	 * @param  {string}                      id       Optimization Problem ID
	 * @param  {Route4Me~requestCallback=}   callback
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
			path: "api.v4/optimization_problem.php",
			qs,
		}, callback)
	}

	/**
	 * GET all optimizations belonging to an user.
	 *
	 * {@link https://route4me.io/docs/#get-optimizations  Route4Me API}
	 *
	 * @param  {(integer|string|Array.<string>|Array.<integer>)}  states    List of states [1..6]
	 * @param  {integer=}                    limit    Search limitation
	 * @param  {integer=}                    offset   Search starting position
	 * @param  {Route4Me~requestCallback=}   callback
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
			path: "api.v4/optimization_problem.php",
			qs,
		}, callback)
	}
}

module.exports = Optimizations
