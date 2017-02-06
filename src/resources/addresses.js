"use strict"

const errors          = require("./../errors")

function _markVisitedValidate(data) {
	if (data && true === data.status) {
		return true
	}
	return new errors.Route4MeValidationError("Invalid response", data)
}

const _markDepartedValidate = _markVisitedValidate

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
	 * @see {@link https://route4me.io/docs/#update-a-route}
	 * @category Addresses
	 * @since 0.1.8
	 *
	 * @param {number} id       - Address ID
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
			validationContext: "Addresses.Address",
		}, callback)
	}

	/**
	 * Mark as Detected as Departed
	 *
	 * The example refers to the process of marking an address as Detected as Departed.
	 *
	 * This method affects:
	 * * ++ **`is_departed`**
	 * * ++ **`timestamp_last_departed`**
	 *
	 * @see {@link https://route4me.io/docs/#mark-as-detected-as-departed}
	 * @category Addresses
	 * @since 0.1.9
	 *
	 * @param {number} id       - Address ID
	 * @param {string} routeId  - Route ID
	 * @param {boolean} value   - Actual value
	 * @param {module:route4me-node~RequestCallback<Addresses.Address>} [callback]
	 */
	markDetectedDeparted(id, routeId, value, callback) {
		const qs = {
			"route_destination_id": id,
			"route_id": routeId,
		}

		return this.r._makeRequest({
			method: "PUT",
			path: "/api.v4/address.php",
			qs,
			body: {
				"is_departed": true === value,
			},
			validationContext: "Addresses.Address",
		}, callback)
	}

	/**
	 * Mark as Detected as Visited
	 *
	 * The example refers to the process of marking an address as Detected as Visited.
	 *
	 * This method affects:
	 * * ++ **`is_visited`**
	 * * ++ **`timestamp_last_visited`**
	 *
	 * @see {@link https://route4me.io/docs/#mark-as-detected-as-visited}
	 * @category Addresses
	 * @since 0.1.9
	 *
	 * @param {number} id       - Address ID
	 * @param {string} routeId  - Route ID
	 * @param {boolean} value   - Actual value
	 * @param {module:route4me-node~RequestCallback<Addresses.Address>} [callback]
	 */
	markDetectedVisited(id, routeId, value, callback) {
		const qs = {
			"route_destination_id": id,
			"route_id": routeId,
		}

		return this.r._makeRequest({
			method: "PUT",
			path: "/api.v4/address.php",
			qs,
			body: {
				"is_visited": true === value,
			},
			validationContext: "Addresses.Address",
		}, callback)
	}

	/**
	 * Mark an address of a route as visited.
	 *
	 * This method affects:
	 * * ++ **`timestamp_last_visited`**
	 * * -- `is_visited`
	 *
	 * @see {@link https://route4me.io/docs/#mark-as-visited}
	 * @category Addresses
	 * @since 0.1.9
	 *
	 * @todo HACK: method-conflict. API suggest to use "GET", SDK uses "PUT"
	 *
	 * @param {number} id       - Address ID
	 * @param {string} routeId  - Route ID
	 * @param {number} memberId - Member ID
	 * @param {boolean} value   - Actual value
	 * @param {module:route4me-node~RequestCallback<bool>} [callback]
	 */
	markVisited(id, routeId, memberId, value, callback) {
		const qs = {
			"address_id": id,
			"route_id": routeId,
			"member_id": memberId,
		}

		qs["is_visited"] = value ? "1" : "0"

		return this.r._makeRequest({
			method: "PUT",
			path: "/actions/address/update_address_visited.php",
			qs,
			validationContext: _markVisitedValidate,
		}, callback)
	}

	/**
	 * Mark an address of a route as departed.
	 *
	 * This method affects:
	 * * ++ **`timestamp_last_departed`**
	 * * -- `is_departed`
	 *
	 * @see {@link https://route4me.io/docs/#mark-as-departed}
	 * @category Addresses
	 * @since 0.1.9
	 *
	 * @todo HACK: method-conflict. API suggest to use "GET", SDK uses "PUT"
	 *
	 * @param {number} id       - Address ID
	 * @param {string} routeId  - Route ID
	 * @param {number} memberId - Member ID
	 * @param {boolean} value   - Actual value
	 * @param {module:route4me-node~RequestCallback<bool>} [callback]
	 */
	markDeparted(id, routeId, memberId, value, callback) {
		const qs = {
			"address_id": id,
			"route_id": routeId,
			"member_id": memberId,
		}

		qs["is_departed"] = value ? "1" : "0"

		return this.r._makeRequest({
			method: "PUT",
			path: "/api/route/mark_address_departed.php",
			qs,
			validationContext: _markDepartedValidate,
		}, callback)
	}
}

module.exports = Addresses
