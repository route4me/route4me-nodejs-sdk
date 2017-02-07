"use strict"

const debug           = require("debug")("route4me")
const errors          = require("./../errors")

/**
 * @namespace
 */
class Notes {
	/**
	 * Notes facility
	 *
	 * @see {@link https://route4me.io/docs/#tracking}
	 * @since 0.1.9
	 * @private
	 * @category Notes
	 *
	 * @param  {Route4Me} route4me - Route4Me manager
	 * @return {Notes}             - Notes facility
	 */
	constructor(route4me) {
		this.r = route4me
	}

	/**
	 * Insert Route Tracking Data
	 *
	 * Set GPS position of a device.
	 *
	 * @see {@link https://route4me.io/docs/#insert-route-tracking-data}
	 * @category Notes
	 * @since 0.1.8
	 *
	 * @param {int}   trackingData - Route Tracking Data
	 * @param {number}   trackingData.memberId - Member ID
	 * @param {string}   trackingData.routeId - Route ID
	 * @param {number}   trackingData.course - Movement course
	 * @param {number}   trackingData.speed - Movement speed
	 * @param {number}   trackingData.latitude - Latitude
	 * @param {number}   trackingData.longitude - Longitude
	 * @param {string}   trackingData.deviceType - Device type
	 * @param {string}   trackingData.deviceGuid - Device GUID
	 * @param {module:route4me-node~RequestCallback}
	 * [callback]
	 */
	createRouteTracking(trackingData, callback) {
		const qs = { "frm": "JSON" }
		qs["member_id"] = trackingData.memberId || trackingData.member_id
		qs["route_id"] = trackingData.routeId || trackingData.route_id
		qs["course"] = trackingData.course
		qs["speed"] = trackingData.speed
		qs["lat"] = trackingData.latitude || trackingData.lat
		qs["lng"] = trackingData.longitude || trackingData.lng
		qs["device_type"] = trackingData.deviceType || trackingData.device_type
		qs["device_guid"] = trackingData.deviceGuid || trackingData.device_guid

		debug(`createRouteTracking: parsed trackingData: ${qs}`)

		return this.r._makeRequest({
			method: "POST",
			path: "/track/set.php",
			qs,
			validationContext: _createRouteTrackingValidate,
		}, callback)
	}
}

module.exports = Notes
