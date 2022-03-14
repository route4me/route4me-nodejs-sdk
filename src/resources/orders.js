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

	static customFields(data, ctx, res) {
		if (!data
			|| !Array.isArray(data)
		) {
			return new errors.Route4MeValidationError("Invalid response", data)
		}

		if (Array.isArray(data)) {
			debug("Orders:customFields:pp received a response with an array")
			// the response is an array of Custom Fields
			return data
		}

		// TODO: parse real error
		return new errors.Route4MeApiError("Failed", res)
	}
}

// ===================================

/**
 * Orders facility
 *
 * @category Orders
 */
class Orders {
	/**
	 * Constructor
	 *
	 * @see {@link https://route4me.io/docs/#orders}
	 * @since 0.1.11
	 * @private
	 *
	 * @param  {RequestManager} requestManager - Request Manager
	 * @return {Orders}                        - Orders facility
	 */
	constructor(requestManager) {
		this.r = requestManager
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
	 * @since 0.1.11
	 *
	 * @param {number|string|Array<number>|Array<string>} [ids] - Order IDs in one
	 * of the following form:
	 * * CSV-string
	 * * one ID as string
	 * * one ID as number
	 * * array of strings
	 * * array of numbers
	 *
	 * If you want to load all Orders:
	 * * **Don't pass** this parameter
	 * * **OR** pass `ids=undefined`
	 * * **OR** pass `ids=false`
	 *
	 * @param {module:route4me-node~RequestCallback<jsonschema:Orders.Orders>} [callback]
	 * [callback]
	 */
	list(ids, callback) {
		let pureIds = ids
		let cb = callback

		if (undefined === cb
			&& "function" === typeof pureIds
		) {
			cb = pureIds
			pureIds = undefined
		}

		const qs = {}

		if (pureIds || 0 === pureIds) {
			pureIds = utils.toIntArray(pureIds)
			qs["order_id"] = pureIds
		}

		return this.r._makeRequest({
			method: "GET",
			path: "/api.v4/order.php",
			qs,
			validationContext: CustomInternalPostProcessing.list,
		}, callback)
	}

	/**
	 * Remove an Order
	 *
	 * @see {@link https://route4me.io/docs/#remove-an-order}
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

	/**
	 * Update an Order
	 *
	 * @see {@link https://route4me.io/docs/#update-an-order}
	 * @since 0.1.11
	 *
	 * @param {number}                  id   - Order ID
	 * @param {jsonschema:Orders.Order} data - Order data
	 * @param {module:route4me-node~RequestCallback<jsonschema:Orders.Order>} [callback]
	 */
	update(id, data, callback) {
		const qs = {
			"redirect": 0,
		}
		const body = utils.clone(data)
		body["order_id"] = Number(id)

		return this.r._makeRequest({
			method: "PUT",
			path: "/api.v4/order.php",
			qs,
			body,
			validationContext: "Orders.Order",
		}, callback)
	}

	/**
	 * Search Orders
	 *
	 * @see {@link https://route4me.io/docs/#search-orders}
	 * @since 0.1.11
	 *
	 * @todo TODO: Parse response
	 * @todo TODO: Test timezone for this method {@link https://github.com/route4me/route4me-nodejs-sdk/issues/42}
	 * @todo TODO: Handle the diffrerent format of the output (when fields are set,
	 * see https://github.com/route4me/route4me-nodejs-sdk/issues/38)
	 *
	 * @param {string|Object} criteria            - Searched text or searching criteria
	 * @param {Date}         [criteria.byAddDate]       - Date order was inserted
	 * @param {Date}         [criteria.byScheduledDate] - Date order was scheduled for
	 * @param {string}       [criteria.query]           - The text searched for
	 *
	 * @param {Object} [options]        - List-parameters
	 * @param {number} [options.limit]  - List limit
	 * @param {number} [options.offset] - List offset
	 * @param {module:route4me-node~RequestCallback<jsonschema:Orders.Orders>} [callback]
	 */
	search(criteria, options, callback) {
		const qs = {
			"redirect": 0,
		}
		let cri = criteria
		let opt = options
		let cb = callback

		if ("string" === typeof cri) {
			cri = {
				"query": cri
			}
		}
		if (!utils.isObject(cri)) {
			cri = {}
		}

		if (undefined === cb
			&& "function" === typeof opt
		) {
			cb = opt
			opt = {}
		}
		if (!utils.isObject(opt)) {
			opt = {}
		}

		// OPTIONS

		if ("offset" in opt) {
			qs["offset"] = opt.offset
		}

		if ("limit" in opt) {
			qs["limit"] = opt.limit
		}

		if ("fields" in opt) {
			qs["fields"] = opt.fields
		}

		// CRITERIA

		if ("query" in cri) {
			qs["query"] = cri["query"]
		}

		if ("byAddDate" in cri) {
			const d = cri["byAddDate"]
			qs["day_added_YYMMDD"] = utils.toIsoDateString(d)
		}

		if ("byScheduledDate" in cri) {
			const d = cri["byScheduledDate"]
			qs["scheduled_for_YYMMDD"] = utils.toIsoDateString(d)
		}

		return this.r._makeRequest({
			method: "GET",
			path: "/api.v4/order.php",
			qs,
			validationContext: CustomInternalPostProcessing.list,
		}, callback)
	}

	/**
	 * Create an OrderCustomFields
	 *
	 * @example <caption>Sample input</caption>
	 * Order Type Checkbox
	 * {
			"order_custom_field_name": "CustomField4",
			"order_custom_field_label": "Custom Field 4",
			"order_custom_field_type": "checkbox",
			"order_custom_field_type_info": {
				"short_label": "cFl4"
			}
		}
	 * Order Type Dropdown
	 * {
			"order_custom_field_name": "TEST",
			"order_custom_field_label": "MENU",
			"order_custom_field_type": "dropdown",
			"order_custom_field_short_caption": "MENU",
			"order_custom_field_type_info":
			{
				"short_caption": "MENU",
				"allowed_values":
				[
					"10",
					"20",
					"30",
					"40",
					"50",
					"70",
					"80",
					“100”
				]
			}
		}
	 *
	 * @see {@link https://route4me.io/docs/#create-an-order-custom-fields}
	 * @since 0.1.11
	 *
	 * @todo TODO: use custom input format (well formatted)
	 *
	 * @param {jsonschema:Orders.OrderInput} data          - New OrderCustomFields
	 * @param {module:route4me-node~RequestCallback<jsonschema:Orders.Response>} [callback]
	 */
	createOrderCustomFields(data, callback) {
		const body = data	// convert data

		return this.r._makeRequest({
			method: "POST",
			path: "/api.v4/order_custom_user_fields.php",
			body,
			validationContext: "OrderCustomFields.Response",
		}, callback)
	}

	/**
	 * Get an Order Custom Fields Details
	 *
	 * @see {@link https://route4me.io/docs/#get-an-order-details}
	 * @since 0.1.11
	 *
	 * @param {number} id - Order ID
	 * @param {module:route4me-node~RequestCallback<jsonschema:Orders.Response>} [callback]
	 */
	getOrderCustomFields(id, callback) {
		const pureId = Number(id)

		return this.r._makeRequest({
			method: "GET",
			path: "/api.v4/order_custom_user_fields.php",
			qs: {
				"order_id": pureId,
			},
			validationContext: "Orders.Response",
		}, callback)
	}

	/**
	 * Update an OrderCustomFields
	 *
	 * @see {@link https://route4me.io/docs/#update-an-order-custom-fields}
	 * @since 0.1.11
	 *
	 * @param {number}                  id   - OrderCustomFields ID
	 * @param {jsonschema:Orders.Response} data - OrderCustomFields data
	 * @param {module:route4me-node~RequestCallback<jsonschema:Orders.Response>} [callback]
	 */
	updateOrderCustomFields(id, data, callback) {
		const qs = {
			"redirect": 0,
		}
		const body = utils.clone(data)
		body["order_id"] = Number(id)

		return this.r._makeRequest({
			method: "PUT",
			path: "/api.v4/order_custom_user_fields.php",
			qs,
			body,
			validationContext: "OrderCustomFields.Response",
		}, callback)
	}

	/**
	 * Get all the archive orders created under the specific Route4Me account
	 *
	 * @see {@link https://route4me.io/docs}
	 * @since 1.0.4
	 *
	 * @param {Object} [data] - Archive params
	 * can have next fields
	 * cursor: string - id of next page of orders, empty string on first call
	 * per_page: integer - number of orders per page
	 * filters: object
	 *
	 * @param {module:route4me-node~RequestCallback<jsonschema:Orders.Orders>} [callback]
	 * [callback]
	 */
	archive(data, callback) {
		const body = utils.clone(data)

		return this.r._makeRequest5({
			method: "POST",
			path: "/api/v5.0/orders/archive",
			qs: null,
			body,
			validationContext: "Orders.archive",
		}, callback)
	}

	/**
	 * Get the orders history created under the specific Route4Me account
	 *
	 * @see {@link https://route4me.io/docs}
	 * @since 1.0.4
	 *
	 * @param {number} [orderId] - Order ID
	 * @param {string} [trackingNumber] - Tracking number
	 *
	 * @param {module:route4me-node~RequestCallback<jsonschema:Orders.Orders>} [callback]
	 * [callback]
	 */
	history(orderId, trackingNumber, callback) {
		const qs = {
			order_id: orderId,
			tracking_number: trackingNumber
		}

		return this.r._makeRequest5({
			method: "GET",
			path: "/api/v5.0/orders/history",
			qs,
			validationContext: "Orders.history",
		}, callback)
	}
}

module.exports = Orders
