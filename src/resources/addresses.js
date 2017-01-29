"use strict"

// const utils = require("../utils")

/**
 * @namespace
 */
class Addresses {
	/**
	 * Addresses facility
	 *
	 * @see {@link https://route4me.io/docs/#addresses}
	 * @since 0.1.8
	 * @private
	 *
	 * @param  {Route4Me}  route4me - Route4Me manager
	 * @return {Addresses}          - Addresses facility
	 */
	constructor(route4me) {
		this.r = route4me
	}

	/**
	 * Update custom data of the address (as a route destination).
	 *
	 * @see {@link https://route4me.io/docs/#update-a-route Route4Me API}
	 * @category Addresses
	 * @since 0.1.8
	 *
	 * @param {number} id       - Route destination (address) ID
	 * @param {string} routeId  - Route ID
	 * @param {Object<string, string>} customFields - Any string dictionary
	 * @param {module:route4me-node~RequestCallback<jsonschema:Addresses.Address>} [callback]
	 */
	updateCustomData(id, routeId, customFields, callback) {
		return this.r._makeRequest({
			method: "PUT",
			path: "/api.v4/address.php",
			qs: {
				"route_id": routeId,
				"route_destination_id": id,
			},
			body: customFields,
			schemaName: "Addresses.Address",
		}, callback)
	}
}

module.exports = Addresses
