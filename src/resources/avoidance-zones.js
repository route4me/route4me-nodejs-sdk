"use strict"

/**
 * @namespace
 * @category AvoidanceZones
 */
class AvoidanceZones {
	/**
	 * AvoidanceZones facility
	 *
	 * @see {@link https://route4me.io/docs/#avoidance-zones}
	 * @since 0.1.8
	 * @private
	 *
	 * @param  {RequestManager} requestManager - Request Manager
	 * @return {AvoidanceZones}                - AvoidanceZones facility
	 */
	constructor(requestManager) {
		this.r = requestManager
	}

	/**
	 * Create an Avoidance Zone.
	 *
	 * @see {@link https://route4me.io/docs/#duplicate-a-route}
	 * @since 0.1.8
	 *
	 * @param {jsonschema:AvoidanceZones.AvoidanceZone}  data       - Valid Avoidance Zone data.
	 * @param {module:route4me-node~RequestCallback<jsonschema:AvoidanceZones.AvoidanceZone>}
	 *        [callback]
	 */
	create(data, callback) {
		return this.r._makeRequest({
			method: "POST",
			path: "/api.v4/avoidance.php",
			body: data,
			validationContext: "AvoidanceZones.AvoidanceZone",
		}, callback)
	}

	/**
	 * GET a specified Avoidance Zone by ID.
	 *
	 * @see {@link https://route4me.io/docs/#get-an-avoidance-zone}
	 * @since 0.1.8
	 *
	 * @param {string}  id       - Avoidance zone ID
	 * @param {module:route4me-node~RequestCallback<jsonschema:AvoidanceZones.AvoidanceZone>}
	 *        [callback]
	 */
	get(id, callback) {
		return this.r._makeRequest({
			method: "GET",
			path: "/api.v4/avoidance.php",
			qs: {
				"territory_id": id,
			},
			validationContext: "AvoidanceZones.AvoidanceZone",
		}, callback)
	}

	/**
	 * GET all of the Avoidance Zones defined by a user.
	 *
	 * @see {@link https://route4me.io/docs/#get-multiple-avoidance-zones}
	 * @since 0.1.8
	 *
	 * @todo TODO: There is no schema for the response, but it is just an array of known schema
	 *
	 * @param {module:route4me-node~RequestCallback<jsonschema:AvoidanceZones.AvoidanceZones>}
	 *        [callback]
	 */
	list(callback) {
		return this.r._makeRequest({
			method: "GET",
			path: "/api.v4/avoidance.php",
			validationContext: "AvoidanceZones.AvoidanceZones",
		}, callback)
	}

	/**
	 * UPDATE a specified Avoidance Zone.
	 *
	 * @see {@link https://route4me.io/docs/#update-an-avoidance-zone}
	 * @since 0.1.8
	 *
	 * @param {string}  id       - Avoidance zone ID
	 * @param {jsonschema:AvoidanceZones.AvoidanceZone}  data       - Valid Avoidance Zone data.
	 * @param {module:route4me-node~RequestCallback<jsonschema:AvoidanceZones.AvoidanceZone>}
	 *        [callback]
	 */
	update(id, data, callback) {
		return this.r._makeRequest({
			method: "PUT",
			path: "/api.v4/avoidance.php",
			qs: {
				"territory_id": id,
			},
			body: data,
			validationContext: "AvoidanceZones.AvoidanceZone",
		}, callback)
	}

	/**
	 * DELETE a specified Avoidance Zone.
	 *
	 * @see {@link https://route4me.io/docs/#remove-an-avoidance-zone}
	 * @since 0.1.8
	 *
	 * @todo TODO: There is no schema for the response
	 * @example
	 * SampleResponse = {"status":true}
	 *
	 * @todo TODO: parse the response
	 *
	 * @param {string}  id       - Avoidance zone ID
	 * @param {module:route4me-node~RequestCallback<jsonschema:AvoidanceZones.RemoveResponse>}
	 *     [callback]
	 */
	remove(id, callback) {
		return this.r._makeRequest({
			method: "DELETE",
			path: "/api.v4/avoidance.php",
			qs: {
				"territory_id": id,
			},
			validationContext: "AvoidanceZones.RemoveResponse",
		}, callback)
	}
}

module.exports = AvoidanceZones
