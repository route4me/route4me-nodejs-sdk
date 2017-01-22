"use strict"

class Optimizations {
	constructor(route4me) {
		this.r = route4me
	}

	/**
	 * GET all optimizations belonging to an user.
	 *
	 * {@link https://route4me.io/docs/#get-optimizations      GitHub}
	 *
	 * @param  {(integer|string|Array.<string>|Array.<integer>)}     state    Comma separated list of states
	 * @param  {integer}                     limit    [description]
	 * @param  {integer}                     offset   [description]
	 * @param  {Route4Me~requestCallback}    callback [description]
	 * @return {undefined}                            [description]
	 */
	list(state, limit, offset, callback) {
		return this.r._makeRequest({
			method: "GET",
			path: "api.v4/optimization_problem.php",
		}, callback)
	}
}

module.exports = Optimizations
