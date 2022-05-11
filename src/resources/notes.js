"use strict"

const utils           = require("./../utils")

/**
 * Notes facility
 *
 * @category Notes
 */
class Notes {
	/**
	 * Constructor
	 *
	 * @see {@link https://route4me.io/docs/#tracking}
	 * @since 0.1.9
	 * @private
	 *
	 * @param  {RequestManager} requestManager - Request Manager
	 * @return {Notes}                         - Notes facility
	 */
	constructor(requestManager) {
		this.r = requestManager
	}

	/**
	 * Add Route Notes
	 *
	 * * ADD Notes to a route.
	 * * ADD Notes to a route using file uploading.
	 *
	 * @see {@link https://route4me.io/docs/#add-route-notes}
	 * @see {@link https://route4me.io/docs/#add-a-note-file}
	 * @since 0.1.9
	 *
	 * @todo TODO: improve documentation about file attaching
	 * @todo TODO: parse response (it is the Note wrapped into an additional object)
	 *
	 * @param {Object}   data           - Note Data
	 * @param {string}   data.routeId   - Route ID
	 * @param {number}   data.addressId - Address ID
	 * @param {number}   data.deviceLatitude  - Device latitude
	 * @param {number}   data.deviceLongitude - Device longitude
	 * @param {string}   data.deviceType      - Device type
	 * @param {string}   data.note      - NOTE text
	 * @param {blob}     data.file      - FILE to use as a note
	 * @param {string}   data.type      - FILE/NOTE type. One of `DRIVER_IMG`,
	 * `VEHICLE_IMG`, `ADDRESS_IMG`, `CSV_FILE`, `XLS_FILE`, `ANY_FILE`
	 * @param {module:route4me-node~RequestCallback<jsonschema:Notes.NoteCreateResponse>} [callback]
	 */
	create(data, callback) {
		const qs = utils.mapObject(data, {
			"routeId": "route_id",
			"addressId": "address_id",
			"deviceLatitude": "dev_lat",
			"deviceLongitude": "dev_lng",
			"deviceType": "device_type",
		})

		qs["strUpdateType"] = data.type || "dropoff"

		if (data.note) {
			return this.r._makeRequest({
				method: "POST",
				path: "/actions/addRouteNotes.php",
				qs,
				form: { "strNoteContents": data.note },
				validationContext: "Notes.NoteCreateResponse",
			}, callback)
		}

		return this.r._makeRequest({
			method: "POST",
			path: "/actions/addRouteNotes.php",
			qs,
			body: data.file,
			validationContext: "Notes.NoteCreateResponse",
		}, callback)
	}
}

module.exports = Notes
