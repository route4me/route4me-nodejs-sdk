"use strict"

const utils = require("../utils")

class Optimizations {
	constructor(route4me) {
		this.r = route4me
	}


	/**
	 * GET all optimizations belonging to an user.
	 *
	 * {@link https://route4me.io/docs/#get-optimizations      GitHub}
	 *
	 * @param  {(integer|string|Array.<string>|Array.<integer>)}  states    List of states
	 * @param  {integer}                     limit    [description]
	 * @param  {integer}                     offset   [description]
	 * @param  {Route4Me~requestCallback}    callback [description]
	 * @return {undefined}                            [description]
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
