"use strict"

/**
 * Notes facility
 *
 * @category TeamManagement
 */
class TeamManagement {
	/**
	 * Constructor
	 *
	 * @see {@link https://route4me.io/docs/#tracking}
	 * @since 1.0.13
	 * @private
	 *
	 * @param  {RequestManager} requestManager - Request Manager
	 * @return {TeamManagement}                - Team Management
	 */
	constructor(requestManager) {
		this.r = requestManager
	}

	/**
	 * Add a new sub-user to the Member account by sending the corresponding
	 * body payload with the sub-users' parameters.
	 *
	 * @see {@link https://virtserver.swaggerhub.com/Route4Me}
	 * @since 1.0.13
	 *
	 * @param {Object}  user                                - Sub-user properties.
	 * @param {String}  user.new_password                   - Password.
	 * @param {String}  user.new_member_picture             - Member picture.
	 * @param {String}  user.member_first_name              - First name.
	 * @param {String}  user.member_last_name               - Last name.
	 * @param {String}  user.member_email                   - E-mail.
	 * @param {String}  user.member_company                 - Company.
	 * @param {String}  user.member_type                    - Member type.
	 * @param {Number}  user.OWNER_MEMBER_ID                - Owner member ID.
	 * @param {String}  user.member_phone                   - Phone.
	 * @param {String}  user.date_of_birth                  - Date of birth.
	 * @param {Number}  user.user_reg_state_id              - User state ID.
	 * @param {Number}  user.user_reg_country_id            - User country ID.
	 * @param {Number}  user.DriverHourlyRate               - Drive hourly rate.
	 * @param {Boolean} user.HIDE_ROUTED_ADDRESSES          - Hide routed addresses.
	 * @param {Boolean} user.HIDE_VISITED_ADDRESSES         - Hide visited addresses.
	 * @param {Boolean} user.HIDE_NONFUTURE_ROUTES          - Hide nonfuture routes.
	 * @param {Boolean} user.READONLY_USER                  - Readonly user.
	 * @param {Boolean} user.SHOW_SUSR_ADDR                 - Show sub-user addresses.
	 * @param {Boolean} user.SHOW_SUSR_ORDERS               - Show sub-user orders.
	 * @param {Boolean} user.SHOW_ALL_DRIVERS               - Show all drivers.
	 * @param {Boolean} user.SHOW_ALL_VEHICLES              - Show all vehicles.
	 * @param {Boolean} user.display_max_routes_future_days - Display max routes.
	 * @param {Number}  user.vendor_id                      - Vendoe ID.
	 * @param {Number}  user.driving_rate                   - Driving rate.
	 * @param {Number}  user.working_rate                   - Working rate.
	 * @param {Number}  user.mile_rate                      - Mile rate.
	 * @param {Number}  user.idling_rate                    - Idling rate.
	 * @param {String}  user.timezone                       - Timezone.
	 * @param {module:route4me-node~RequestCallback}          [callback]
	 */
	create(user, callback) {
		return this.r._makeRequest5({
			method: "POST",
			path: "/api/v5.0/team/users",
			body: user,
			validationContext: "RouteStatus.ResponseTeams",
		}, callback)
	}

	/**
	 * View all existing sub-users associated with the Member’s account.
	 *
	 * @see {@link https://virtserver.swaggerhub.com/Route4Me}
	 * @since 1.0.13
	 *
	 * @param {module:route4me-node~RequestCallback}       [callback]
	 */
	list(callback) {
		return this.r._makeRequest5({
			method: "GET",
			path: "/api/v5.0/team/users",
			validationContext: "RouteStatus.ResponseTeams",
		}, callback)
	}

	/**
	 * Get the sub-user by specifying the path parameter ID.
	 *
	 * @see {@link https://virtserver.swaggerhub.com/Route4Me}
	 * @since 1.0.13
	 *
	 * @param {Number} id                                  - User ID.
	 * @param {module:route4me-node~RequestCallback}       [callback]
	 */
	get(id, callback) {
		return this.r._makeRequest5({
			method: "GET",
			path: `/api/v5.0/team/users/${id}`,
			validationContext: "RouteStatus.ResponseTeams",
		}, callback)
	}

	/**
	 * Delete the sub-user by specifying the path parameter ID.
	 *
	 * @see {@link https://virtserver.swaggerhub.com/Route4Me}
	 * @since 1.0.13
	 *
	 * @param {Number} id                                  - User ID.
	 * @param {module:route4me-node~RequestCallback}       [callback]
	 */
	delete(id, callback) {
		return this.r._makeRequest5({
			method: "DELETE",
			path: `/api/v5.0/team/users/${id}`,
			validationContext: "RouteStatus.ResponseTeams",
		}, callback)
	}

	/**
	 * Update the sub-user by specifying the path parameter ID and by sending the
	 * corresponding body payload with the sub-user's parameters..
	 *
	 * @see {@link https://virtserver.swaggerhub.com/Route4Me}
	 * @since 1.0.13
	 *
	 * @param {Number} id                                  - User ID.
	 * @param {Object}  user                                - Sub-user properties.
	 * @param {String}  user.new_password                   - Password.
	 * @param {String}  user.new_member_picture             - Member picture.
	 * @param {String}  user.member_first_name              - First name.
	 * @param {String}  user.member_last_name               - Last name.
	 * @param {String}  user.member_email                   - E-mail.
	 * @param {String}  user.member_company                 - Company.
	 * @param {String}  user.member_type                    - Member type.
	 * @param {Number}  user.OWNER_MEMBER_ID                - Owner member ID.
	 * @param {String}  user.member_phone                   - Phone.
	 * @param {String}  user.date_of_birth                  - Date of birth.
	 * @param {Number}  user.user_reg_state_id              - User state ID.
	 * @param {Number}  user.user_reg_country_id            - User country ID.
	 * @param {Number}  user.DriverHourlyRate               - Drive hourly rate.
	 * @param {Boolean} user.HIDE_ROUTED_ADDRESSES          - Hide routed addresses.
	 * @param {Boolean} user.HIDE_VISITED_ADDRESSES         - Hide visited addresses.
	 * @param {Boolean} user.HIDE_NONFUTURE_ROUTES          - Hide nonfuture routes.
	 * @param {Boolean} user.READONLY_USER                  - Readonly user.
	 * @param {Boolean} user.SHOW_SUSR_ADDR                 - Show sub-user addresses.
	 * @param {Boolean} user.SHOW_SUSR_ORDERS               - Show sub-user orders.
	 * @param {Boolean} user.SHOW_ALL_DRIVERS               - Show all drivers.
	 * @param {Boolean} user.SHOW_ALL_VEHICLES              - Show all vehicles.
	 * @param {Boolean} user.display_max_routes_future_days - Display max routes.
	 * @param {Number}  user.vendor_id                      - Vendoe ID.
	 * @param {Number}  user.driving_rate                   - Driving rate.
	 * @param {Number}  user.working_rate                   - Working rate.
	 * @param {Number}  user.mile_rate                      - Mile rate.
	 * @param {Number}  user.idling_rate                    - Idling rate.
	 * @param {String}  user.timezone                       - Timezone.
	 * @param {module:route4me-node~RequestCallback}       [callback]
	 */
	update(id, user, callback) {
		return this.r._makeRequest5({
			method: "PATCH",
			path: `/api/v5.0/team/users/${id}`,
			body: user,
			validationContext: "RouteStatus.ResponseTeams",
		}, callback)
	}

	/**
	 * Add multiple sub-users to the User account by sending the corresponding
	 * body payload with the array of the sub-users' parameters
	 *
	 * @see {@link https://virtserver.swaggerhub.com/Route4Me}
	 * @since 1.0.13
	 *
	 * @param {Object[]} users                                  - Array of sub-user properties.
	 * @param {String}   users[].new_password                   - Password.
	 * @param {String}   users[].new_member_picture             - Member picture.
	 * @param {String}   users[].member_first_name              - First name.
	 * @param {String}   users[].member_last_name               - Last name.
	 * @param {String}   users[].member_email                   - E-mail.
	 * @param {String}   users[].member_company                 - Company.
	 * @param {String}   users[].member_type                    - Member type.
	 * @param {Number}   users[].OWNER_MEMBER_ID                - Owner member ID.
	 * @param {String}   users[].member_phone                   - Phone.
	 * @param {String}   users[].date_of_birth                  - Date of birth.
	 * @param {Number}   users[].user_reg_state_id              - User state ID.
	 * @param {Number}   users[].user_reg_country_id            - User country ID.
	 * @param {Number}   users[].DriverHourlyRate               - Drive hourly rate.
	 * @param {Boolean}  users[].HIDE_ROUTED_ADDRESSES          - Hide routed addresses.
	 * @param {Boolean}  users[].HIDE_VISITED_ADDRESSES         - Hide visited addresses.
	 * @param {Boolean}  users[].HIDE_NONFUTURE_ROUTES          - Hide nonfuture routes.
	 * @param {Boolean}  users[].READONLY_USER                  - Readonly user.
	 * @param {Boolean}  users[].SHOW_SUSR_ADDR                 - Show sub-user addresses.
	 * @param {Boolean}  users[].SHOW_SUSR_ORDERS               - Show sub-user orders.
	 * @param {Boolean}  users[].SHOW_ALL_DRIVERS               - Show all drivers.
	 * @param {Boolean}  users[].SHOW_ALL_VEHICLES              - Show all vehicles.
	 * @param {Boolean}  users[].display_max_routes_future_days - Display max routes.
	 * @param {Number}   users[].vendor_id                      - Vendoe ID.
	 * @param {Number}   users[].driving_rate                   - Driving rate.
	 * @param {Number}   users[].working_rate                   - Working rate.
	 * @param {Number}   users[].mile_rate                      - Mile rate.
	 * @param {Number}   users[].idling_rate                    - Idling rate.
	 * @param {String}   users[].timezone                       - Timezone.
	 *
	 * @param {Object}   [options]                              - Insert options.
	 * @param {String}   [options.api_key]                      - User API key.
	 * @param {String}   [options.conflicts]                    - Conflict resolving rule.
	 * Possible values: 'fail', 'overwrite' and 'skip'.
	 *
	 * @param {module:route4me-node~RequestCallback}          [callback]
	 */
	 bulkInsert(users, options, callback) {
		let opt = options || {}
		let cb = callback

		if (undefined === cb && "function" === typeof opt) {
			cb = opt
			opt = {}
		}

		return this.r._makeRequest5({
			method: "POST",
			path: "/api/v5.0/team/bulk-insert",
			qs: opt,
			body: { users },
			validationContext: "RouteStatus.ResponseTeams",
		}, cb)
	}
}

module.exports = TeamManagement
