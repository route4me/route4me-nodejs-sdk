"use strict"

const debug           = require("debug")("route4me")

const utils           = require("./../utils")
const errors          = require("./../errors")

function _createRouteTrackingValidate(data, ctx, res) {
	if (!data || "boolean" !== typeof data.status) {
		return new errors.Route4MeValidationError("Invalid response", data)
	}

	if (true === data.status) {
		return true
	}

	// TODO: parse real error
	return new errors.Route4MeApiError("Failed", res)
}

/**
 * Tracking facility
 *
 * @category Tracking
 */
class Tracking {
	/**
	 * Constructor
	 *
	 * @see {@link https://route4me.io/docs/#tracking}
	 * @since 0.1.8
	 * @private
	 *
	 * @param  {RequestManager} requestManager - Request Manager
	 * @return {Tracking}                      - Tracking facility
	 */
	constructor(requestManager) {
		this.r = requestManager
	}

	/**
	 * Get Asset Tracking Data
	 *
	 * @see {@link https://route4me.io/docs/#get-asset-tracking-data}
	 * @since 0.1.8
	 *
	 * @param {string}  tracking       - Tracking number
	 * @param {module:route4me-node~RequestCallback<jsonschema:Tracking.AssetTracking>} [callback]
	 */
	getAssetTracking(tracking, callback) {
		return this.r._makeRequest({
			method: "GET",
			path: "/api.v4/status.php",
			qs: {
				"tracking": tracking,
			},
			validationContext: "Tracking.AssetTracking",
		}, callback)
	}

	/**
	 * Get a device’s location history from a time range.
	 *
	 * **Be carefull:** custom dates are considered as in local timezone!
	 *
	 * @see {@link https://route4me.io/docs/#get-route-tracking-data}
	 * @since 0.1.8
	 *
	 * @param {string}  routeId           - Route ID
	 * @param {string|Object}  period     - Time period. Object with `from` and `trim` dates,
	 * or one of predefined strings:
	 * * `today`
	 * * `yesterday`
	 * * `thismonth`
	 * * `7days`
	 * * `14days`
	 * * `30days`
	 * * `60days`
	 * * `90days`
	 * * `all_time`
	 * @param {string} [period.span="custom"] - One of predefined strings (this is an another
	 * one way to determine it)
	 * @param {Date}   period.from   - Custom start date
	 * @param {Date}   period.trim   - Custom end date
	 * @param {module:route4me-node~RequestCallback<jsonschema:Tracking.TrackingHistory>} [callback]
	 */
	getRouteTrackingHistory(routeId, period, callback) {
		const qs = {
			"route_id": routeId,
		}

		if (utils.isObject(period)) {
			const span = period.span || "custom"

			if ("custom" === span) {
				const from = period.from || period.start || period.begin
				const trim = period.trim || period.finish || period.end
				qs["start_date"]  = Math.floor(from.valueOf() / 1000)
				qs["end_date"]    = Math.floor(trim.valueOf() / 1000)
			}
			qs["time_period"] = span
		} else {
			qs["time_period"] = period.toString()
		}

		return this.r._makeRequest({
			method: "GET",
			path: "/get_device_location.php",
			qs,
			validationContext: "Tracking.TrackingHistory",
		}, callback)
	}

	/**
	 * Insert Route Tracking Data
	 *
	 * Set GPS position of a device.
	 *
	 * @see {@link https://route4me.io/docs/#insert-route-tracking-data}
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
	 * @param {module:route4me-node~RequestCallback} [callback]
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

module.exports = Tracking
