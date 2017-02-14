"use strict"

// const debug           = require("debug")("route4me")

const utils           = require("./../utils")
// const errors          = require("./../errors")

// ===================================

/**
 * @namespace
 */
class ActivityFeed {
	/**
	 * ActivityFeed facility
	 *
	 * @see {@link https://route4me.io/docs/#activity-feed}
	 * @category ActivityFeed
	 * @since 0.1.12
	 * @private
	 *
	 * @param  {Route4Me}      route4me - Route4Me manager
	 * @return {ActivityFeed}           - ActivityFeed facility
	 */
	constructor(route4me) {
		this.r = route4me
	}

	/**
	 * Log a Specific Message
	 *
	 * This example demonstrates how to permanently store a specific message
	 * directly to the activity feed. For example, this can be used for one or
	 * two-way chat.
	 *
	 * @see {@link https://route4me.io/docs/#log-a-specific-message}
	 * @category ActivityFeed
	 * @since 0.1.12
	 *
	 * @param {Object} data          - Activity Feed item
	 * @param {string} data.routeId  - Route ID
	 * @param {string} data.message  - A message text for logging into the activity feed
	 * @param {module:route4me-node~RequestCallback} [callback]
	 */
	create(data, callback) {
		const body = {}

		body["activity_type"] = "user_message"
		body["activity_message"] = data["message"]
		body["route_id"] = data["routeId"]

		return this.r._makeRequest({
			method: "POST",
			path: "/api.v4/activity_feed.php",
			body,
			validationContext: utils.CustomInternalPostProcessing.fromJsonWithStatus,
		}, callback)
	}

}

module.exports = ActivityFeed
