"use strict"

const utils           = require("./../utils")

/**
 * Territories facility
 *
 * @category Territories
 */
class Territories {
	/**
	 * Constructor
	 *
	 * @see {@link https://route4me.io/docs/#territories}
	 * @since 0.1.8
	 * @private
	 *
	 * @param  {RequestManager} requestManager - Request Manager
	 * @return {Territories}                   - Territories facility
	 */
	constructor(requestManager) {
		this.r = requestManager
	}

	/**
	 * Create a new Territory.
	 *
	 * @see {@link https://route4me.io/docs/#create-a-territory}
	 * @since 0.1.8
	 *
	 * @param {jsonschema:Territories.Territory}  data       - Valid Territory data.
	 * @param {module:route4me-node~RequestCallback<jsonschema:Territories.Territory>}
	 *        [callback]
	 */
	create(data, callback) {
		return this.r._makeRequest({
			method: "POST",
			path: "/api.v4/territory.php",
			body: data,
			validationContext: "Territories.Territory",
		}, callback)
	}

	/**
	 * Get a specified Territory by ID.
	 *
	 * @see {@link https://route4me.io/docs/#get-a-territory}
	 * @since 0.1.8
	 *
	 * @param {string}   id        - Territory ID
	 * @param {Object}   [options] - Additional options for `get`
	 * @param {boolean}  [options.includeAddresses=false] - If true, enclosed
	 * addresses will be included in a response
	 * @param {module:route4me-node~RequestCallback<jsonschema:Territories.Territory>} [callback]
	 */
	get(id, options, callback) {
		let cb = callback
		let opt = options
		if ("undefined" === typeof cb
			&& "function" === typeof opt) {
			cb = opt
			opt = {}
		}

		opt = opt || {}

		let includeAddresses = false
		if (undefined !== opt.includeAddresses) {
			includeAddresses = !!opt.includeAddresses
		}

		return this.r._makeRequest({
			method: "GET",
			path: "/api.v4/territory.php",
			qs: {
				"territory_id": id,
				"addresses": includeAddresses ? "1" : "0",
			},
			validationContext: "Territories.Territory",
		}, cb)
	}

	/**
	 * GET all of the Territories defined by a user.
	 *
	 * @see {@link https://route4me.io/docs/#get-multiple-territories}
	 * @since 0.1.8
	 *
	 * @todo TODO: There is no schema for the response, but it is just an array of known schema
	 *
	 * @param {module:route4me-node~RequestCallback<jsonschema:Territories.Territories>} [callback]
	 */
	list(callback) {
		return this.r._makeRequest({
			method: "GET",
			path: "/api.v4/territory.php",
			validationContext: "Territories.Territories",
		}, callback)
	}

	/**
	 * UPDATE a specified Territory.
	 *
	 * @see {@link https://route4me.io/docs/#update-a-territory}
	 * @since 0.1.8
	 *
	 * @param {string}  id       - Territory ID
	 * @param {jsonschema:Territories.Territory}  data       - Valid Territory data.
	 * @param {module:route4me-node~RequestCallback<jsonschema:Territories.Territory>}
	 *        [callback]
	 */
	update(id, data, callback) {
		return this.r._makeRequest({
			method: "PUT",
			path: "/api.v4/territory.php",
			qs: {
				"territory_id": id,
			},
			body: data,
			validationContext: "Territories.Territory",
		}, callback)
	}

	/**
	 * DELETE a specified Territory.
	 *
	 * @see {@link https://route4me.io/docs/#remove-a-territory}
	 * @since 0.1.8
	 *
	 * @param {string}  id       - Territory ID
	 * @param {module:route4me-node~RequestCallback<boolean>}
	 *     [callback]
	 */
	remove(id, callback) {
		return this.r._makeRequest({
			method: "DELETE",
			path: "/api.v4/territory.php",
			qs: {
				"territory_id": id,
			},
			validationContext: utils.CustomInternalPostProcessing.fromJsonWithStatus,
		}, callback)
	}
}

module.exports = Territories
