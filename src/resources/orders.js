"use strict"

const debug           = require("debug")("route4me")

const utils           = require("./../utils")
const errors          = require("./../errors")

class CustomInternalPostProcessing {
	/**
	 * Handle `duplicate` output
	 *
	 * @private
	 *
	 * @example <caption>Expected input</caption>
	 * Sample = {
	 * 	"optimization_problem_id":"672998C4269918AFF461E5A691BAB8D0",
	 * 	"success":true
	 * }
	 *
	 * @param  {Object} data - Internal
	 * @param  {Object} ctx  - Internal
	 * @param  {Object} res  - Internal
	 * @return {string}      - The ID of duplicate
	 */
	static duplicate(data, ctx, res) {
		if (
			!data
			|| "boolean" !== typeof data["success"]
			|| "string" !== typeof data["optimization_problem_id"]
		) {
			return new errors.Route4MeValidationError("Invalid response", data)
		}

		if (true === data["success"]) {
			return data["optimization_problem_id"]
		}

		// TODO: parse real error
		return new errors.Route4MeApiError("Failed", res)
	}
}

// ===================================

/**
 * @namespace
 */
class Orders {
	/**
	 * Orders facility
	 *
	 * @see {@link https://route4me.io/docs/#orders}
	 * @since 0.1.11
	 * @private
	 *
	 * @param  {Route4Me}      route4me - Route4Me manager
	 * @return {Orders}                 - Orders facility
	 */
	constructor(route4me) {
		this.r = route4me
	}

	/**
	 * Create an Order
	 *
	 * @example <caption>Sample input</caption>
	 *
	 * {
	 * 	"address_1": "1358 E Luzerne St, Philadelphia, PA 19124, US",
	 * 	"cached_lat"            : 48.335991,
	 * 	"cached_lng"            : 31.18287,
	 * 	"address_alias"         : "Auto test address",
	 * 	"address_city"          : "Philadelphia",
	 * 	"EXT_FIELD_first_name"  : "Igor",
	 * 	"EXT_FIELD_last_name"   : "Progman",
	 * 	"EXT_FIELD_email"       : "progman@gmail.com",
	 * 	"EXT_FIELD_phone"       : "380380380380",
	 * 	"EXT_FIELD_custom_data" : [
	 * 		{
	 * 			"order_id" : "10",
	 * 			"name"     : "Bill Soul"
	 * 		}
	 * 	]
	 * }
	 *
	 * @see {@link https://route4me.io/docs/#create-an-order}
	 * @category Orders
	 * @since 0.1.11
	 *
	 * @todo TODO: use custom input format (well formatted)
	 *
	 * @param {jsonschema:Orders.OrderInput} data          - New order
	 * @param {module:route4me-node~RequestCallback<jsonschema:Orders.Order>} [callback]
	 */
	create(data, callback) {
		const body = data	// convert data

		return this.r._makeRequest({
			method: "POST",
			path: "/api.v4/order.php",
			body,
			validationContext: "Orders.Order",
		}, callback)
	}
}

module.exports = Orders
