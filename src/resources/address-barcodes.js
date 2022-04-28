"use strict"

/**
 * AddressBarcodes facility
 *
 * @category AddressBarcodes
 */
class AddressBarcodes {
	/**
	 * Constructor
	 *
	 * @see {@link https://route4me.io/docs/#address-barcode}
	 * @since 1.0.5
	 * @private
	 *
	 * @param  {RequestManager} requestManager - Request Manager
	 * @return {AddressBarcodes}                - AddressBarcodes facility
	 */
	constructor(requestManager) {
		this.r = requestManager
	}

	/**
	 * Save a AddressBarcodes.
	 *
	 * @see {@link https://route4me.io/docs/#save-a-barcode}
	 * @since 1.0.5
	 *
	 * @param {object} data - Valid AddressBarcodes data.
	 * @param {string} data.route_id - route ID.
	 * @param {number} data.route_destination_id - route destination ID.
	 * @param {array} data.barcodes - array of barcode objects.
	 * @param {string} data.barcodes.barcode - barcode data.
	 * @param {number} data.barcodes.lat - latitude.
	 * @param {number} data.barcodes.lng - longitude.
	 * @param {number} data.barcodes.timestamp_date - local date.
	 * @param {number} data.barcodes.timestamp_utc - UTC date.
	 * @param {string} data.barcodes.scanned_at - scan date as string "Y-M-D H:M:S".
	 * @param {string} data.barcodes.scan_type - barcode scan type.
	 *
	 * @param {module:route4me-node~RequestCallback<jsonschema:
	 * AddressBarcodes.AddressBarcodes>} [callback]
	 */
	save(data, callback) {
		return this.r._makeRequest5({
			method: "POST",
			path: "/api/v5.0/address-barcodes",
			body: data,
			validationContext: "Barcodes.save" // utils.CustomInternalPostProcessing.fromJsonWithStatus,
		}, callback)
	}

	/**
	 * Get address barcodes by a specified route ID.
	 *
	 * @see {@link https://route4me.io/docs/#get-address-barcodes}
	 * @since 1.0.5
	 *
	 * @param {string} routeId - Route ID
	 * @param {number} routeDestinationId - Route destination ID
	 * @param {number} limit - Number of barcodes returning by request
	 * @param {string} cursor - Cursor ID, on first call must be null
	 *
	 * @param {module:route4me-node~RequestCallback<jsonschema:
	 * AddressBarcodes.AddressBookSearchResult>} [callback]
	 */
	get(routeId, routeDestinationId, limit, cursor, callback) {
		const qs = {
			"route_id": routeId,
			"route_destination_id": routeDestinationId,
			"limit": limit
		}

		let cb = callback
		let cr = cursor

		if (cb === undefined && "function" === typeof cr) {
			cb = cr
			cr = null
		}

		if (null !== cr && "" !== cr) qs["cursor"] = cr

		return this.r._makeRequest5({
			method: "GET",
			path: "/api/v5.0/address-barcodes",
			qs,
			validationContext: "AddressBarcodes.AddressBarcodesGetResult",
		}, cb)
	}
}

module.exports = AddressBarcodes
