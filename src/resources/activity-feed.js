"use strict"

const debug           = require("debug")("route4me:activity-feed")

const utils           = require("./../utils")
// const errors          = require("./../errors")

// ===================================

const activityTypeEnum = Object.freeze({
	"MarkDestinationDeparted": "mark-destination-departed",
	"MarkDestinationVisited": "mark-destination-visited",
})

const aliasedActivityTypeEnum = activityTypeEnum

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
		this.__activityTypeEnum = activityTypeEnum
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

	/**
	 * Enumerable of all known activity type
	 * @todo TODO: move to PACKAGE level (to make it easier for usage) see https://github.com/route4me/route4me-nodejs-sdk/issues/40
	 */
	get ActivityTypeEnum() {
		return this.__activityTypeEnum
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
	 * @param {string|Object}   criteria - Criteria for event filter. Depending on type will be
	 * considered as:
	 * * `string` - criteria = [Activity type]{@linkcode ActivityTypeEnum}
	 * * `Object` - criteria is a set of filters, see below
	 *
	 * @param {string}  [criteria.activityType] - [Activity type]{@linkcode ActivityTypeEnum}
	 * @param {string}  [criteria.routeId]      - Route ID
	 *
	 * @param {Object}          options  - Options for activity search
	 * @param {number}  [options.limit]   - List limit
	 * @param {number}  [options.offset]  - List offset
	 * @param {boolean} [options.includeTeamActivities=false] - Indicate, whether team
	 * activities should be included
	 * @param {module:route4me-node~RequestCallback<jsonschema:ActivityFeed.ActivityFeedResult>}
	 * [callback]
	 */
	list(criteria, options, callback) {
		const qs = {}

		let cri = criteria
		let opt = options

		if ("string" === typeof cri) {
			cri = {
				"activityType": cri,
			}
		}

		if (!utils.isObject(cri)) {
			cri = {}
		}

		if ("activityType" in cri
			&& cri["activityType"] in aliasedActivityTypeEnum
		) {
			qs["activity_type"] = aliasedActivityTypeEnum[cri["activityType"]]
		} else {
			debug("list: ignore `activity_type` filter")
		}

		if ("routeId" in cri) {
			qs["route_id"] = cri["routeId"]
		}

		// OPTIONS

		if (!utils.isObject(opt)) {
			opt = {}
		}

		if ("offset" in options) {
			qs["offset"] = options["offset"]
		}

		if ("limit" in options) {
			qs["limit"] = options["limit"]
		}

		if (options["includeTeamActivities"]) {
			qs["team"] = "true"
		}

		return this.r._makeRequest({
			method: "GET",
			path: "/api/get_activities.php",
			qs,
			validationContext: "ActivityFeed.ActivityFeedResult",
		}, callback)
	}
}

module.exports = ActivityFeed
