"use strict"

const utils           = require("./../utils")
// const errors          = require("./../errors")

// ===================================

/**
 * Enum for all known **activity type**.
 * @readonly
 * @enum {string}
 * @alias ActivityTypeEnum
 * @category Route4Me
 */
const activityTypeEnum = {
	/* eslint-disable key-spacing */
	AreaAdded:               "area-added",
	AreaRemoved:             "area-removed",
	AreaUpdated:             "area-updated",

	GeofenceEntered:         "geofence-entered",
	GeofenceLeft:            "geofence-left",

	RouteDelete:             "route-delete",
	RouteOptimized:          "route-optimized",
	RouteOwnerChanged:       "route-owner-changed",

	DeleteDestination:       "delete-destination",
	DestinationOutSequence:  "destination-out-sequence",
	InsertDestination:       "insert-destination",
	MarkDestinationDeparted: "mark-destination-departed",
	MarkDestinationVisited:  "mark-destination-visited",
	MoveDestination:         "move-destination",
	UpdateDestinations:      "update-destinations",

	/**
	 * Get driver arrived early activities
	 *
	 * {@link https://route4me.io/docs/#driver-arrived-early}
	 *
	 * @type {string}
	 */
	DriverArrivedEarly:      "driver-arrived-early",
	DriverArrivedLate:       "driver-arrived-late",
	DriverArrivedOnTime:     "driver-arrived-on-time",

	MemberCreated:           "member-created",
	MemberDeleted:           "member-deleted",
	MemberModified:          "member-modified",

	NoteInsert:              "note-insert",

	UserMessage:             "user_message",
	/* eslint-enable key-spacing */
}

const _aliases = {}
Object.keys(activityTypeEnum)
	.forEach((key) => {
		const v = activityTypeEnum[key]
		_aliases[key] = v
		_aliases[v] = v
	})

const aliasedActivityTypeEnum = Object.freeze(_aliases)

/**
 * ActivityFeed facility
 *
 * @category ActivityFeed
 */
class ActivityFeed {
	/**
	 * Constructor
	 *
	 * @see {@link https://route4me.io/docs/#activity-feed}
	 * @since 0.1.12
	 * @private
	 *
	 * @param  {RequestManager} requestManager - Request Manager
	 * @return {ActivityFeed}                  - ActivityFeed facility
	 */
	constructor(requestManager) {
		this.r = requestManager
		this.__activityTypeEnum = activityTypeEnum
	}

	/**
	 * Log a Specific Message
	 *
	 * This example demonstrates how to permanently store a specific message
	 * directly to the activity feed. For example, this can be used for one or
	 * two-way chat.
	 *
	 * **The created activity will have `activityType === "user_message"`**
	 *
	 * @see {@link https://route4me.io/docs/#log-a-specific-message}
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
	 * @todo TODO: move to PACKAGE level (to make it easier for usage) see {@link https://github.com/route4me/route4me-nodejs-sdk/issues/40}
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
	 * @since 0.1.12
	 *
	 * @todo TODO: convert options to optional
	 *
	 * @param {string|Object}   criteria - Criteria for event filter. Depending on type will be
	 * considered as:
	 * * `string` - criteria is a string representation of [Activity type]{@link ActivityTypeEnum}
	 * * `Object` - criteria is a set of filters, see below
	 *
	 * @param {string}  [criteria.activityType] - [Activity type]{@link ActivityTypeEnum}
	 * @param {string}  [criteria.routeId]      - Route ID
	 *
	 * @param {Object}  [options]          - Options for activity search
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
		let cb = callback

		// ARITY
		if (typeof cb === "undefined"
			&& typeof opt === "function") {
			// there are two params, and the second is CALLBACK
			cb = opt
			opt = undefined
		}

		// CRITERIA
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
			this.r.logger.debug({
				src: "route4me:activity-feed:list",
				msg: "ignore 'activity_type' filter"
			})
		}

		if ("routeId" in cri) {
			qs["route_id"] = cri["routeId"]
		}

		// OPTIONS

		if (!utils.isObject(opt)) {
			opt = {}
		}

		if ("offset" in opt) {
			qs["offset"] = opt["offset"]
		}

		if ("limit" in opt) {
			qs["limit"] = opt["limit"]
		}

		if (opt["includeTeamActivities"]) {
			qs["team"] = "true"
		}

		return this.r._makeRequest({
			method: "GET",
			path: "/api/get_activities.php",
			qs,
			validationContext: "ActivityFeed.ActivityFeedResult",
		}, cb)
	}
}

module.exports = ActivityFeed
