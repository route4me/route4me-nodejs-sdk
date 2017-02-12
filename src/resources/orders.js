"use strict"

const debug           = require("debug")("route4me")

const utils           = require("./../utils")
const errors          = require("./../errors")

class CustomInternalPostProcessing {
	static list(data, ctx, res) {
		if (!data
			|| !utils.isObject(data)
		) {
			return new errors.Route4MeValidationError("Invalid response", data)
		}

		if (Array.isArray(data["results"])
			&& undefined !== data["total"]
		) {
			debug("Orders:list:pp received a response with an array")
			// the response is an array of Orders
			return data["results"]
		}

		if ("number" === typeof data["order_id"]) {
			debug("Orders:list:pp received a response with one item (it will be wrapped)")
			// the response contains only one item, we should wrap it to array
			return [data]
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

	/**
	 * Get an Order Details
	 *
	 * @see {@link https://route4me.io/docs/#get-an-order-details}
	 * @category Orders
	 * @since 0.1.11
	 *
	 * @param {number} id - Order ID
	 * @param {module:route4me-node~RequestCallback<jsonschema:Orders.Order>} [callback]
	 */
	get(id, callback) {
		const pureId = Number(id)

		return this.r._makeRequest({
			method: "GET",
			path: "/api.v4/order.php",
			qs: {
				"order_id": pureId,
			},
			validationContext: "Orders.Order",
		}, callback)
	}

	/**
	 * Get all the orders created under the specific Route4Me account
	 *
	 * @see {@link https://route4me.io/docs/#get-orders-with-details}
	 * @category Orders
	 * @since 0.1.11
	 *
	 * @param {number|string|Array<number>|Array<string>} ids - Order IDs (as number,
	 * string, CSV-separated string, or an array of numbers, or an array of strings).
	 * @param {module:route4me-node~RequestCallback<jsonschema:Orders.Orders>} [callback]
	 * [callback]
	 */
	list(ids, callback) {
		const pureIds = utils.toIntArray(ids)

		return this.r._makeRequest({
			method: "GET",
			path: "/api.v4/order.php",
			qs: {
				"order_id": pureIds,
			},
			validationContext: CustomInternalPostProcessing.list,
		}, callback)
	}

	/**
	 * Remove an Order
	 *
	 * @see {@link https://route4me.io/docs/#remove-an-order}
	 * @category Orders
	 * @since 0.1.11
	 *
	 * @param {number|string|Array<number>|Array<string>}  ids - Order ID/IDs to remove in one
	 * of the following form:
	 * * CSV-string
	 * * one ID as string
	 * * one ID as number
	 * * array of strings
	 * * array of numbers
	 *
	 * @param {module:route4me-node~RequestCallback} [callback]
	 */
	remove(ids, callback) {
		const pureIds = utils.toIntArray(ids)

		const qs = {
			"redirect": 0,
		}
		const body = {
			"order_ids": pureIds
		}

		return this.r._makeRequest({
			method: "DELETE",
			path: "/api.v4/order.php",
			qs,
			body,
			validationContext: utils.CustomInternalPostProcessing.fromJsonWithStatus,
		}, callback)
	}
}

module.exports = Orders
