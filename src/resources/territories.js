"use strict"

const errors          = require("./../errors")

/**
 * @namespace
 */
class Territories {
	/**
	 * Territories facility
	 *
	 * @see {@link https://route4me.io/docs/#territories}
	 * @since 0.1.8
	 * @private
	 * @category Territories
	 *
	 * @param  {Route4Me}      route4me - Route4Me manager
	 * @return {Territories}            - Territories facility
	 */
	constructor(route4me) {
		this.r = route4me
	}

	/**
	 * Create a new Territory.
	 *
	 * @see {@link https://route4me.io/docs/#create-a-territory Route4Me API}
	 * @category Territories
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
	 * @see {@link https://route4me.io/docs/#get-a-territory Route4Me API}
	 * @category Territories
	 * @since 0.1.8
	 *
	 * @param {string}   id                       - Territory ID
	 * @param {boolean}  [includeAddresses=false] - If true, enclosed addresses will be
	 *        included in a response
	 * @param {module:route4me-node~RequestCallback<jsonschema:Territories.Territory>} [callback]
	 */
	get(id, includeAddresses, callback) {
		let cb = callback
		let ia = includeAddresses
		if (typeof cb === "undefined"
			&& typeof ia === "function") {
			cb = ia
			ia = false
		}
		if (typeof ia !== "boolean") {
			throw new errors.Route4MeError(
				`Territory.get: wrong type for argument 'includeAddresses':${typeof ia}`)
		}

		return this.r._makeRequest({
			method: "GET",
			path: "/api.v4/territory.php",
			qs: {
				"territory_id": id,
				"addresses": ia ? "1" : "0",
			},
			validationContext: "Territories.Territory",
		}, cb)
	}

	/**
	 * GET all of the Territories defined by a user.
	 *
	 * @see {@link https://route4me.io/docs/#get-multiple-territories Route4Me API}
	 * @category Territories
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
	 * @see {@link https://route4me.io/docs/#update-a-territory Route4Me API}
	 * @category Territories
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
	 * @see {@link https://route4me.io/docs/#remove-a-territory Route4Me API}
	 * @category Territories
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
			validationContext: this._removeValidator,
		}, callback)
	}

	static _removeValidator(data) {
		if (data && data.status === true) {
			return true
		}
		return new errors.Route4MeInternalValidationError("Invalid response", data)
	}
}

module.exports = Territories
