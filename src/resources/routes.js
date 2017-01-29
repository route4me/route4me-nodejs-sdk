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
	 * Duplicates the route. More information - on Route4Me API-doc site (see links section).
	 *
	 * @see {@link https://route4me.io/docs/#duplicate-a-route Route4Me API}
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
			schemaName: "Routes.DuplicateResponse",
		}, callback)
	}

	/**
	 * Merges the list of routes. More information - on Route4Me API-doc site (see links section).
	 *
	 * @see {@link https://route4me.io/docs/#merge-routes Route4Me API}
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
		const idsPure = typeof ids === "string" ?
			ids.split(/\s*,\s*/) :
			ids

		return this.r._makeRequest({
			method: "POST",
			path: "/actions/merge_routes.php",
			body: idsPure,
			schemaName: "Routes.MergeResponse",
		}, callback)
	}

	/**
	 * Get a single route.
	 *
	 * @see {@link https://route4me.io/docs/#get-a-route Route4Me API}
	 * @category Routes
	 * @since 0.1.8
	 *
	 * @param {string}  id       - Route ID
	 * @param {module:route4me-node~RequestCallback<jsonschema:Routes.Route>} [callback]
	 */
	get(id, callback) {
		return this.r._makeRequest({
			method: "GET",
			path: "/api.v4/route.php",
			qs: {
				"route_id": id,
			},
			schemaName: "Routes.Route",
		}, callback)
	}

	/**
	 * Get a limited number of the routes belonging to the user.
	 *
	 * @see {@link https://route4me.io/docs/#get-multiple-routes Route4Me API}
	 * @category Routes
	 * @since 0.1.8
	 *
	 * @param {number}                    [limit]    - Search limitation
	 * @param {number}                    [offset]   - Search starting position
	 * @param {module:route4me-node~RequestCallback<jsonschema:Routes.Routes>} [callback]
	 */
	list(limit, offset, callback) {
		const qs = {}
		utils.qsLimitAndOffset(qs, limit, offset)

		return this.r._makeRequest({
			method: "GET",
			path: "/api.v4/route.php",
			qs,
			schemaName: "Routes.Routes",
		}, callback)
	}

	/**
	 * Given multiple route ID’s, remove all routes at the same time.
	 *
	 * @see {@link https://route4me.io/docs/#remove-routes Route4Me API}
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
	 *        list of route IDs **or** array of route IDs
	 * @param {Object}         [options] - Options for SDK method
	 * @param {boolean|number} [options.queryLimit=false] - `false` means, that query will be sent
	 *        "as is". `number` value cause to split the original request to several chunks,
	 *        limited in size by this parameter, chunks will be sent sequentionally.
	 * @param {module:route4me-node~RequestCallback<jsonschema:Routes.RemoveResponse>}
	 *     [callback]
	 */
	remove(ids, options, callback) {
		const idsPure = typeof ids === "string" ?
			ids.replace(/\s+/g, "") :
			ids

		let cb = callback
		if (typeof cb === "undefined"
			&& typeof options === "function"
		) {
			cb = options
		}

		if (options && options.queryLimit) {
			// TODO: split ids for max allowed request parameter lengh
			// and perform several queries
			this.r._logger.error("Route.remove with options.queryLimit is not implemented")
		}

		return this.r._makeRequest({
			method: "DELETE",
			path: "/api.v4/route.php",
			qs: {
				"route_id": idsPure,
			},
			schemaName: "Routes.RemoveResponse",
		}, cb)
	}
}

module.exports = Routes
