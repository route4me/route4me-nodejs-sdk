"use strict"

const utils           = require("./../utils")
const errors          = require("./../errors")

// ===================================

function propertyToUpper(obj, key) {
	if (key in obj) {
		// Modify original object, it is expected behaviour
		obj[key] = obj[key].toString().toUpperCase()	// eslint-disable-line no-param-reassign
	}
}

function remapUserData(data) {
	const mapped = utils.clone(data)
	mapped.dateOfBirth = mapped.dateOfBirth.toString()

	propertyToUpper(mapped, "readonlyUser")
	propertyToUpper(mapped, "hideVisitedAddresses")
	propertyToUpper(mapped, "hideRoutedAddresses")
	propertyToUpper(mapped, "hideNonfutureRoutes")
	propertyToUpper(mapped, "showAllVehicles")
	propertyToUpper(mapped, "showAllDrivers")

	return utils.mapObject(mapped, {
		"phone": "member_phone",
		"zipcode": "member_zipcode",
		"routeCount": "route_count",
		"email": "member_email",
		"type": "member_type",
		"dateOfBirth": "date_of_birth",
		"firstName": "member_first_name",
		"password": "member_password",
		"lastName": "member_last_name",
		"readonlyUser": "READONLY_USER",
		"hideVisitedAddresses": "HIDE_VISITED_ADDRESSES",
		"hideRoutedAddresses": "HIDE_ROUTED_ADDRESSES",
		"hideNonfutureRoutes": "HIDE_NONFUTURE_ROUTES",
		"showAllVehicles": "SHOW_ALL_VEHICLES",
		"showAllDrivers": "SHOW_ALL_DRIVERS",
	})
}

function remapAccountData(data) {
	const mapped = utils.clone(data)

	const res = utils.mapObject(mapped, {
		"industry": "strIndustry",
		"firstName": "strFirstName",
		"lastName": "strLastName",
		"email": "strEmail",
		"deviceType": "device_type",
		"password": "strPassword_1",
	})

	res["strPassword_2"] = data["password"]
	res["chkTerms"] = "1"
	res["format"] = "json"

	return res
}

// ===================================

function _removeValidate(data, ctx, res) {
	if (!data || "boolean" !== typeof data.status) {
		return new errors.Route4MeValidationError("Invalid response", data)
	}

	if (true === data.status) {
		return true
	}

	// TODO: parse real error
	return new errors.Route4MeApiError("Failed", res)
}

function _validateSessionValidate(data, ctx, res) {
	if (
		!data
		|| "boolean" !== typeof data.authenticated
		|| "number" !== typeof data.member_id
	) {
		return new errors.Route4MeValidationError("Invalid response", data)
	}

	if (true !== data.authenticated) {
		return new errors.Route4MeApiError("Not authenticated", res)
	}

	return data.member_id
}

/**
 * @deprecated since version 1.0.24
 * @see {@link TeamManagement.html TeamManagement}
 *
 * Members facility
 *
 * @category Members
 */
class Members {
	/**
	 * @deprecated since version 1.0.24
	 * @see {@link TeamManagement.html#new_TeamManagement_new TeamManagement}
	 *
	 * Constructor
	 *
	 * @see {@link https://route4me.io/docs/#territories}
	 * @since 0.1.8
	 * @private
	 *
	 * @param  {RequestManager} requestManager - Request Manager
	 * @return {Members}                       - Members facility
	 */
	constructor(requestManager) {
		this.r = requestManager
	}

	/**
	 * @deprecated since version 1.0.24
	 * @see {@link TeamManagement.html#TeamManagement+create TeamManagement.create}
	 *
	 * Create an User
	 *
	 * @see {@link https://route4me.io/docs/#create-an-user}
	 * @since 0.1.9
	 *
	 * @todo TODO: validate INPUT parameter with **custom** schema
	 *
	 * @example <caption>Sample input</caption>
	 * {
	 * 	"firstName": "Clay",
	 * 	"lastName": "Abraham",
	 * 	"phone": "571-259-5939",
	 * 	"zipcode": "22102",
	 * 	"routeCount": null,
	 * 	"email": "skrynkovskyy+newdispatcher@gmail.com",
	 * 	"type": "SUB_ACCOUNT_DISPATCHER",
	 * 	"dateOfBirth": 2010,
	 * 	"password": "123456",
	 * 	"readonlyUser": false,
	 * 	"hideVisitedAddresses": false,
	 * 	"hideRoutedAddresses": false,
	 * 	"hideNonfutureRoutes": false,
	 * 	"showAllVehicles": false,
	 * 	"showAllDrivers": false,
	 * }
	 *
	 * @param {Object}  data                       - Parameters of new user
	 * @param {string}  data.hideRoutedAddresses   - user parameter
	 * @param {string}  data.phone                 - user parameter
	 * @param {string}  data.zipcode               - user parameter
	 * @param {number}  data.routeCount            - user parameter
	 * @param {string}  data.email                 - user parameter
	 * @param {string}  data.type                  - user parameter
	 * @param {string}  data.dateOfBirth           - user parameter
	 * @param {string}  data.firstName             - user parameter
	 * @param {string}  data.password              - user parameter
	 * @param {string}  data.lastName              - user parameter
	 * @param {boolean} data.readonlyUser          - user parameter
	 * @param {boolean} data.hideVisitedAddresses  - user parameter
	 * @param {boolean} data.hideRoutedAddresses   - user parameter
	 * @param {boolean} data.hideNonfutureRoutes   - user parameter
	 * @param {boolean} data.showAllVehicles       - user parameter
	 * @param {boolean} data.showAllDrivers        - user parameter
	 * @param {module:route4me-node~RequestCallback<jsonschema:Members.Member>} [callback]
	 */
	create(data, callback) {
		const validData = remapUserData(data)

		return this.r._makeRequest({
			method: "POST",
			path: "/api.v4/user.php",
			body: validData,
			validationContext: "Members.Members",
		}, callback)
	}

	/**
	 * @deprecated since version 1.0.24
	 * @see {@link TeamManagement.html#TeamManagement+list TeamManagement.list}
	 *
	 * Member’s Sub-users
	 *
	 * View existing sub-users in a member’s account.
	 *
	 * @see {@link https://route4me.io/docs/#members-sub-users}
	 * @since 0.1.9
	 *
	 * @todo TODO: there is no schema for response
	 *
	 * @param {module:route4me-node~RequestCallback<jsonschema:Members.Members>} [callback]
	 */
	list(callback) {
		return this.r._makeRequest({
			method: "GET",
			path: "/api.v4/user.php",
			validationContext: "Members.Members",
		}, callback)
	}

	/**
	 * @deprecated since version 1.0.24
	 * @see {@link TeamManagement.html#TeamManagement+get TeamManagement.get}
	 *
	 * Get an User Details
	 *
	 * @see {@link https://route4me.io/docs/#get-an-user-details}
	 * @since 0.1.9
	 *
	 * @todo TODO: reformat output
	 *
	 * @param {number}  id - Member ID
	 * @param {module:route4me-node~RequestCallback<jsonschema:Members.Member>} [callback]
	 */
	get(id, callback) {
		return this.r._makeRequest({
			method: "GET",
			path: "/api.v4/user.php",
			qs: {
				"member_id": id,
			},
			validationContext: "Members.Member",
		}, callback)
	}

	/**
	 * @deprecated since version 1.0.24
	 * @see {@link TeamManagement.html#TeamManagement+update TeamManagement.update}
	 *
	 * Update an existing user.
	 *
	 * @see {@link https://route4me.io/docs/#update-an-user}
	 * @since 0.1.9
	 *
	 * @todo TODO: validate INPUT parameter with **custom** schema
	 * @todo TODO: reformat output
	 *
	 * @example <caption>Sample input</caption>
	 * {
	 * 	"firstName": "Clay",
	 * 	"lastName": "Abraham",
	 * 	"phone": "571-259-5939",
	 * 	"zipcode": "22102",
	 * 	"routeCount": null,
	 * 	"email": "skrynkovskyy+newdispatcher@gmail.com",
	 * 	"type": "SUB_ACCOUNT_DISPATCHER",
	 * 	"dateOfBirth": 2010,
	 * 	"password": "123456",
	 * 	"readonlyUser": false,
	 * 	"hideVisitedAddresses": false,
	 * 	"hideRoutedAddresses": false,
	 * 	"hideNonfutureRoutes": false,
	 * 	"showAllVehicles": false,
	 * 	"showAllDrivers": false,
	 * }
	 *
	 * @param {number}  id - Member ID
	 * @param {Object}  data                       - Parameters of new user
	 * @param {string}  data.hideRoutedAddresses   - user parameter
	 * @param {string}  data.phone                 - user parameter
	 * @param {string}  data.zipcode               - user parameter
	 * @param {number}  data.routeCount            - user parameter
	 * @param {string}  data.email                 - user parameter
	 * @param {string}  data.type                  - user parameter
	 * @param {string}  data.dateOfBirth           - user parameter
	 * @param {string}  data.firstName             - user parameter
	 * @param {string}  data.password              - user parameter
	 * @param {string}  data.lastName              - user parameter
	 * @param {boolean} data.readonlyUser          - user parameter
	 * @param {boolean} data.hideVisitedAddresses  - user parameter
	 * @param {boolean} data.hideRoutedAddresses   - user parameter
	 * @param {boolean} data.hideNonfutureRoutes   - user parameter
	 * @param {boolean} data.showAllVehicles       - user parameter
	 * @param {boolean} data.showAllDrivers        - user parameter
	 * @param {module:route4me-node~RequestCallback<jsonschema:Members.Member>} [callback]
	 */
	update(id, data, callback) {
		const validData = remapUserData(data)

		validData["member_id"] = id

		return this.r._makeRequest({
			method: "PUT",
			path: "/api.v4/user.php",
			body: validData,
			validationContext: "Members.Member",
		}, callback)
	}

	/**
	 * Add Custom Data to a User.
	 *
	 * @example <caption>Sample input</caption>
	 * {
	 * 	custom_data: {
	 * 		custom_kye_1: "custom value 1",
	 * 		custom_kye_2: "custom value 2"
	 * 	}
	 * }
	 *
	 * @see {@link https://route4me.io/docs/#add-custom-data-to-a-user}
	 * @since 1.0.6
	 *
	 * @param {number}  id - Member ID
	 * @param {Object}  data                       - Parameters of new user
	 * @param {Object}  data.custom_data           - custom data object
	 * @param {string}  data.custom_data.key       - custom key
	 * @param {string}  data.custom_data.value     - custom value
	 * @param {module:route4me-node~RequestCallback<jsonschema:Members.Member>} [callback]
	 */
	addCustomData(id, data, callback) {
		const validData = utils.clone(data)
		validData["member_id"] = id

		return this.r._makeRequest({
			method: "PUT",
			path: "/api.v4/user.php",
			body: validData,
			validationContext: "Members.Member"
		}, callback)
	}

	/**
	 * @deprecated since version 1.0.24
	 * @see {@link TeamManagement.html#TeamManagement+delete TeamManagement.delete}
	 *
	 * Remove existing user from a member’s account.
	 *
	 * @see {@link https://route4me.io/docs/#remove-an-user}
	 * @since 0.1.9
	 *
	 * @param {number}  id - Member ID
	 * @param {module:route4me-node~RequestCallback<jsonschema:Members.Member>} [callback]
	 */
	remove(id, callback) {
		const data = {
			"member_id": id
		}

		return this.r._makeRequest({
			method: "DELETE",
			path: "/api.v4/user.php",
			body: data,
			validationContext: _removeValidate,
		}, callback)
	}

	/**
	 * Authentication of a user with an email and password.
	 *
	 * @see {@link https://route4me.io/docs/#authentication-aa}
	 * @since 0.1.9
	 *
	 * @todo TODO: reformat output
	 *
	 * @param {string}  email    - Email of an user
	 * @param {string}  password - Password
	 * @param {module:route4me-node~RequestCallback<jsonschema:Members.Member>} [callback]
	 */
	authenticate(email, password, callback) {
		return this.r._makeRequest({
			method: "POST",
			path: "/actions/authenticate.php",
			body: {
				"strEmail": email,
				"strPassword": password,
				"format": "json",
			},
			validationContext: "Members.Member",
		}, callback)
	}

	/**
	 * Validate a Session
	 *
	 * Check if a session is valid.
	 *
	 * @see {@link https://route4me.io/docs/#validate-a-session}
	 * @since 0.1.9
	 *
	 * @param {number}  id        - Member ID
	 * @param {string}  sessionId - Session ID
	 * @param {module:route4me-node~RequestCallback<number>} [callback]
	 */
	validateSession(id, sessionId, callback) {
		return this.r._makeRequest({
			method: "GET",
			path: "/datafeed/session/validate_session.php",
			qs: {
				"session_guid": sessionId,
				"member_id": id,
				"frmt": "json",
			},
			validationContext: _validateSessionValidate,
		}, callback)
	}

	/**
	 * Registration of a new account.
	 *
	 * @see {@link https://route4me.io/docs/#register-an-account}
	 * @since 0.1.9
	 *
	 * @todo TODO: reformat output
	 *
	 * @param {string}  data             - Account parameters
	 * @param {string}  data.accountPlan - Account parameter
	 * @param {string}  data.industry    - Account parameter
	 * @param {string}  data.firstName   - Account parameter
	 * @param {string}  data.lastName    - Account parameter
	 * @param {string}  data.email       - Account parameter
	 * @param {string}  data.deviceType  - Account parameter
	 * @param {string}  data.password    - Account parameter
	 * @param {module:route4me-node~RequestCallback<jsonschema:Members.Account>} [callback]
	 */
	registerAccount(data, callback) {
		const validData = remapAccountData(data)

		return this.r._makeRequest({
			method: "POST",
			path: "/actions/register_action.php",
			qs: {
				"plan": data.accountPlan,
			},
			body: validData,
			validationContext: "Members.Account",
		}, callback)
	}
}

module.exports = Members
