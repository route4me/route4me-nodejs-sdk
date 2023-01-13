"use strict"

/**
 * Schedule facility
 *
 * @category Schedules
 * @since 1.0.18
 */
class Schedules {
	/**
	 * Constructor
	 *
	 * @private
	 *
	 * @param  {RequestManager} requestManager - Request Manager
	 * @return {Schedules}                     - Schedules facility
	 */
	constructor(requestManager) {
		this.r = requestManager
	}

	/**
	 * Create a new Schedule by sending the corresponding body payload.
	 *
	 * @see {@link https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders}
	 * @since 1.0.18
	 *
	 * @param {object}   param
	 * @param {string}   param.schedule_uid
	 * @param {number}   param.root_member_id
	 * @param {string}   param.name
	 * @param {string[]} param.schedule_blacklist              - Blacklisted dates as "YYYY-MM-DD".
	 * @param {number}   [param.advance_interval = 1]
	 * @param {number}   [param.advance_schedule_interval_days = 0]
	 * @param {string}   param.schedule                        - Schedule as JSON string
	 * e.g. '{"enabled":true,"mode":"daily","daily":{"every":2},
	 * "from":"2019-06-05","timestamp":1558538737}'.
	 * @param {string}   param.timezone                        - Timezone as "America/New_York".
	 * @param {module:route4me-node~RequestCallback}             [callback]
	 */
	addSchedule(param, callback) {
		return this.r._makeRequest5({
			method: "POST",
			path: "/api/v5.0/recurring-routes/schedules",
			body: param,
			validationContext: "SchedulesStatus.ScheduleList",
		}, callback)
	}

	/**
	 * Get the Schedule by specifying the 'schedule_uid' path parameter.
	 *
	 * @see {@link https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders}
	 * @since 1.0.18
	 *
	 * @param {string} scheduleId                        - Schedule ID.
	 * @param {module:route4me-node~RequestCallback}       [callback]
	 */
	getSchedule(scheduleId, callback) {
		return this.r._makeRequest5({
			method: "GET",
			path: `/api/v5.0/recurring-routes/schedules/${scheduleId}`,
			validationContext: "SchedulesStatus.ScheduleList",
		}, callback)
	}

	/**
	 * Update the existing Schedule by sending the corresponding body payload.
	 *
	 * @see {@link https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders}
	 * @since 1.0.18
	 *
	 * @param {string}   scheduleId                            - Schudele ID to update.
	 * @param {object}   param
	 * @param {number}   param.root_member_id
	 * @param {string}   param.name
	 * @param {string[]} param.schedule_blacklist              - Blacklisted dates as "YYYY-MM-DD".
	 * @param {number}   [param.advance_interval = 1]
	 * @param {number}   [param.advance_schedule_interval_days = 0]
	 * @param {string}   param.schedule                        - Schedule as JSON string
	 * e.g. '{"enabled":true,"mode":"daily","daily":{"every":2},
	 * "from":"2019-06-05","timestamp":1558538737}'.
	 * @param {string}   param.timezone                        - Timezone as "America/New_York".
	 * @param {module:route4me-node~RequestCallback}             [callback]
	 */
	updateSchedule(scheduleId, param, callback) {
		return this.r._makeRequest5({
			method: "PUT",
			path: `/api/v5.0/recurring-routes/schedules/${scheduleId}`,
			body: param,
			validationContext: "SchedulesStatus.ScheduleList",
		}, callback)
	}

	/**
	 * Delete the specified Schedule with the option to delete the associated route.
	 *
	 * @see {@link https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders}
	 * @since 1.0.18
	 *
	 * @param {string}  scheduleId                        - Schedule ID.
	 * @param {boolean} [withRoutes = false]              - Delete the Schedule that matches
	 * the specified Schedule ID. If the deleted Schedule has one or multiple associated Routes,
	 * these Routes are also deleted.
	 * @param {module:route4me-node~RequestCallback}       [callback]
	 */
	deleteSchedule(scheduleId, withRoutes, callback) {
		const qs = { with_routes: false }
		let cb = callback

		if (undefined === cb && "function" === typeof withRoutes) {
			cb = withRoutes
		} else {
			qs.with_routes = !!withRoutes
		}

		return this.r._makeRequest5({
			method: "DELETE",
			path: `/api/v5.0/recurring-routes/schedules/${scheduleId}`,
			qs,
			validationContext: "SchedulesStatus.ScheduleList",
		}, cb)
	}

	/**
	 * Get the list of Schedules with or without pagination.
	 *
	 * @see {@link https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders}
	 * @since 1.0.18
	 *
	 * @param {Object} [options]                                       - Paginated parameters
	 * @param {bool}   [options.with_pagination = false]               - Enable the paginated output.
	 * @param {number} [options.page = 1]                              - Requested page.
	 * @param {number} [options.per_page = 15]                         - Number of Schedules per page.
	 * @param {module:route4me-node~RequestCallback}                     [callback]
	 */
	getSchedules(options, callback) {
		let opt = options || {}
		let cb = callback

		if (undefined === cb && "function" === typeof opt) {
			cb = opt
			opt = {}
		}

		let path = "/api/v5.0/recurring-routes/schedules"

		if (opt && opt.with_pagination) {
			path = "/api/v5.0/recurring-routes/schedules/pagination"
		}

		return this.r._makeRequest5({
			method: "GET",
			path,
			qs: opt,
			validationContext: "SchedulesStatus.ScheduleList",
		}, cb)
	}

	/**
	 * Get the list of Route Schedules with or without pagination.
	 *
	 * @see {@link https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders}
	 * @since 1.0.18
	 *
	 * @param {Object} [options]                              - Paginated parameters
	 * @param {bool}   [options.with_pagination = false]      - Enable the paginated output.
	 * @param {number} [options.page = 1]                     - Requested page.
	 * @param {number} [options.per_page = 15]                - Number of Route Schedules per page.
	 * @param {module:route4me-node~RequestCallback}            [callback]
	 */
	getRouteSchedules(options, callback) {
		let opt = options || {}
		let cb = callback

		if (undefined === cb && "function" === typeof opt) {
			cb = opt
			opt = {}
		}

		let path = "/api/v5.0/recurring-routes/route-schedules"

		if (opt && opt.with_pagination) {
			path = "/api/v5.0/recurring-routes/route-schedules/pagination"
		}

		return this.r._makeRequest5({
			method: "GET",
			path,
			qs: opt,
			validationContext: "SchedulesStatus.RouteScheduleList",
		}, cb)
	}

	/**
	 * Create a new Route Schedule by sending the corresponding body payload.
	 *
	 * @see {@link https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders}
	 * @since 1.0.18
	 *
	 * @param {object} param
	 * @param {string} param.route_id                          - Route ID.
	 * @param {string} param.schedule_uid                      - Schedule ID.
	 * @param {number} [param.member_id]                       - A unique ID of the root member.
	 * @param {string} [param.vehicle_id]                      - Vehicle ID.
	 * @param {module:route4me-node~RequestCallback}             [callback]
	 */
	addRouteSchedule(param, callback) {
		return this.r._makeRequest5({
			method: "POST",
			path: "/api/v5.0/recurring-routes/route-schedules",
			body: param,
			validationContext: "SchedulesStatus.RouteScheduleList",
		}, callback)
	}

	/**
	 * Get the Route Schedule by specifying the Route ID path parameter.
	 *
	 * @see {@link https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders}
	 * @since 1.0.18
	 *
	 * @param {string} routeId                           - Route ID.
	 * @param {module:route4me-node~RequestCallback}       [callback]
	 */
	getRouteSchedule(routeId, callback) {
		return this.r._makeRequest5({
			method: "GET",
			path: `/api/v5.0/recurring-routes/route-schedules/${routeId}`,
			validationContext: "SchedulesStatus.ExtendedRouteSchedule",
		}, callback)
	}

	/**
	 * Update the existing Route Schedule by sending the corresponding body payload.
	 *
	 * @see {@link https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders}
	 * @since 1.0.18
	 *
	 * @param {string} routeId                                 - Route ID.
	 * @param {object} param
	 * @param {string} param.schedule_uid                      - Schedule ID.
	 * @param {number} param.member_id                         - A unique ID of the root member.
	 * @param {string} param.vehicle_id                        - Vehicle ID.
	 * @param {module:route4me-node~RequestCallback}             [callback]
	 */
	updateRouteSchedule(routeId, param, callback) {
		return this.r._makeRequest5({
			method: "PUT",
			path: `/api/v5.0/recurring-routes/route-schedules/${routeId}`,
			body: param,
			validationContext: "SchedulesStatus.RouteScheduleList",
		}, callback)
	}

	/**
	 * Delete the route schedules.
	 *
	 * @see {@link https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders}
	 * @since 1.0.18
	 *
	 * @param {string} routeId                                 - Route ID.
	 * @param {module:route4me-node~RequestCallback}             [callback]
	 */
	deleteRouteSchedules(routeId, callback) {
		return this.r._makeRequest5({
			method: "DELETE",
			path: `/api/v5.0/recurring-routes/route-schedules/${routeId}`,
			validationContext: "SchedulesStatus.Boolean",
		}, callback)
	}

	/**
	 * Delete the specified route schedule.
	 *
	 * @see {@link https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders}
	 * @since 1.0.18
	 *
	 * @param {string} routeId                                 - Route ID.
	 * @param {module:route4me-node~RequestCallback}             [callback]
	 */
	deleteRouteSchedule(routeId, callback) {
		return this.r._makeRequest5({
			method: "DELETE",
			path: `/api/v5.0/recurring-routes/route-schedules/${routeId}/items`,
			validationContext: "SchedulesStatus.RouteScheduleList",
		}, callback)
	}

	/**
	 * Replace the existing Route Schedule by sending the corresponding body payload.
	 *
	 * @see {@link https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders}
	 * @since 1.0.18
	 *
	 * @param {string}   routeId                                 - Route ID.
	 * @param {object}   param
	 * @param {number}   param.member_id                         - A unique ID of the root member.
	 * @param {string}   param.vehicle_id                        - Vehicle ID.
	 * @param {string}   param.schedule_uid                      - Schedule ID.
	 * @param {string}   param.name
	 * @param {string[]} param.schedule_blacklist                - Blacklisted dates as YYYY-MM-DD
	 * @param {number}   [param.advance_interval = 1]
	 * @param {number}   [param.advance_schedule_interval_days = 0]
	 * @param {string}   param.schedule                          - Schedule as JSON string
	 * e.g. '{"enabled":true,"mode":"daily","daily":{"every":2},
	 * "from":"2019-06-05","timestamp":1558538737}'.
	 * @param {string}   param.timezone                          - Timezone as "America/New_York".
	 * @param {module:route4me-node~RequestCallback}               [callback]
	 */
	replaceRouteSchedule(routeId, param, callback) {
		return this.r._makeRequest5({
			method: "PUT",
			path: `/api/v5.0/recurring-routes/route-schedules/replace/${routeId}`,
			body: param,
			validationContext: "SchedulesStatus.ExtendedRouteSchedule",
		}, callback)
	}

	/**
	 * Get the Route Schedule preview by specifying the 'route_id' path parameter.
	 *
	 * @see {@link https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders}
	 * @since 1.0.18
	 *
	 * @param {string} routeId                           - Route ID.
	 * @param {string} start                             - Start date as YYYY-MM-DD
	 * @param {string} end                               - End date as YYYY-MM-DD
	 * @param {module:route4me-node~RequestCallback}       [callback]
	 */
	getRouteSchedulePreview(routeId, start, end, callback) {
		return this.r._makeRequest5({
			method: "GET",
			path: `/api/v5.0/recurring-routes/route-schedules/${routeId}/preview`,
			qs: { start, end },
			validationContext: "SchedulesStatus.RouteSchedulePreview",
		}, callback)
	}

	/**
	 * Check if the Scheduled Route was copied by specifying the 'routeId' path parameter.
	 *
	 * @see {@link https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders}
	 * @since 1.0.18
	 *
	 * @param {string} routeId                           - Route ID.
	 * @param {module:route4me-node~RequestCallback}       [callback]
	 */
	isScheduledRouteCopy(routeId, callback) {
		return this.r._makeRequest5({
			method: "GET",
			path: `/api/v5.0/recurring-routes/scheduled-routes/is-copy/${routeId}`,
			validationContext: "SchedulesStatus.Boolean",
		}, callback)
	}

	/**
	 * Get all routes copied from the specified Scheduled Route by sending
	 * the corresponding body payload.
	 *
	 * @see {@link https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders}
	 * @since 1.0.18
	 *
	 * @param {object} param
	 * @param {string} param.route_id                          - Route ID.
	 * @param {string} param.schedule_id                       - Schedule ID.
	 * @param {string} route_date                              - Route date as YYYY-MM-DD.
	 * @param {module:route4me-node~RequestCallback}             [callback]
	 */
	getScheduledRoutesCopies(param, callback) {
		return this.r._makeRequest5({
			method: "POST",
			path: "/api/v5.0/recurring-routes/scheduled-routes/get-copies",
			body: param,
			validationContext: "SchedulesStatus.ScheduledRouteGetCopies",
		}, callback)
	}

	/**
	 * Create a new Master Route by sending the corresponding body payload.
	 *
	 * @see {@link https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders}
	 * @since 1.0.18
	 *
	 * @param {object}   param
	 * @param {string}   param.route_id                          - Route ID.
	 * @param {string}   param.route_name
	 * @param {number}   param.member_id                         - A unique ID of the root member.
	 * @param {string}   param.vehicle_id                        - Vehicle ID.
	 * @param {string}   param.name
	 * @param {string[]} param.schedule_blacklist                - Blacklisted dates as YYYY-MM-DD
	 * @param {number}   [param.advance_interval = 1]
	 * @param {number}   [param.advance_schedule_interval_days = 0]
	 * @param {string}   param.schedule                          - Schedule as JSON string
	 * e.g. '{"enabled":true,"mode":"daily","daily":{"every":2},
	 * "from":"2019-06-05","timestamp":1558538737}'.
	 * @param {string}   param.timezone                          - Timezone as "America/New_York".
	 * @param {module:route4me-node~RequestCallback}               [callback]
	 */
	addMasterRoute(param, callback) {
		return this.r._makeRequest5({
			method: "POST",
			path: "/api/v5.0/recurring-routes/master-routes",
			body: param,
			validationContext: "SchedulesStatus.Boolean",
		}, callback)
	}
}

module.exports = Schedules
