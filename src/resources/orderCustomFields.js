"use strict"

const debug           = require("debug")("route4me")

const utils           = require("../utils")
const errors          = require("../errors")

class CustomInternalPostProcessing {
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
 * OrderCustomFields facility
 *
 * @category OrderCustomFields
 */
class OrderCustomFields {
	/**
	 * Constructor
	 *
	 * @see {@link https://route4me.io/docs/#orders}
	 * @since 0.1.11
	 * @private
	 *
	 * @param  {RequestManager} requestManager - Request Manager
	 * @return {OrderCustomFields}             - OrderCustomFields facility
	 */
	constructor(requestManager) {
		this.r = requestManager
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
	 * @param {jsonschema:OrderCustomFields.OrderInput} data          - New OrderCustomFields
	 * @param {module:route4me-node~RequestCallback<jsonschema:OrderCustomFields.Response>} [callback]
	 */
	create(data, callback) {
		const body = data	// convert data

		return this.r._makeRequest({
			method: "POST",
			path: "/api.v4/order_custom_user_fields.php",
			body,
			validationContext: "OrderCustomFields.Response",
		}, callback)
	}

	/**
	 * Get an Order Details
	 *
	 * @see {@link https://route4me.io/docs/#get-an-order-details}
	 * @since 0.1.11
	 *
	 * @param {number} id - Order ID
	 * @param {module:route4me-node~RequestCallback<jsonschema:OrderCustomFields.Response>} [callback]
	 */
	get(id, callback) {
		const pureId = Number(id)

		return this.r._makeRequest({
			method: "GET",
			path: "/api.v4/order_custom_user_fields.php",
			qs: {
				"order_id": pureId,
			},
			validationContext: "OrderCustomFields.Response",
		}, callback)
	}


	/**
	 * Update an OrderCustomFields
	 *
	 * @see {@link https://route4me.io/docs/#update-an-order-custom-fields}
	 * @since 0.1.11
	 *
	 * @param {number}                  id   - OrderCustomFields ID
	 * @param {jsonschema:OrderCustomFields.Response} data - OrderCustomFields data
	 * @param {module:route4me-node~RequestCallback<jsonschema:OrderCustomFields.Response>} [callback]
	 */
	update(id, data, callback) {
		const qs = {
			"redirect": 0,
		}
		const body = utils.clone(data)
		body["order_custom_field_id"] = Number(id)

		return this.r._makeRequest({
			method: "PUT",
			path: "/api.v4/order_custom_user_fields.php",
			qs,
			body,
			validationContext: "OrderCustomFields.Response",
		}, callback)
	}
	
}

module.exports = OrderCustomFields
