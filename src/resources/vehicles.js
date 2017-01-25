"use strict"

/**
 * @namespace
 */
class Vehicles {
	/**
	 * Vehicles facility
	 *
	 * @see {@link https://route4me.io/docs/#vehicles}
	 * @since 0.2.0
	 * @private
	 *
	 * @param  {Route4Me}      route4me [description]
	 * @return {Vehicles}               [description]
	 */
	constructor(route4me) {
		this.r = route4me
	}

	/**
	 * GET all optimizations belonging to an user.
	 *
	 * @todo Fix error in API docs: there the method utilizes `POST`-http-method to get results
	 *
	 * @see {@link https://route4me.io/docs/#get-vehicles  Route4Me API}
	 * @category Vehicles
	 *
	 * @param {module:route4me-node~RequestCallback<jsonschema:Vehicles.ResponseMany>} [callback]
	 */
	list(callback) {
		return this.r._makeRequest({
			method: "GET",
			path: "api/vehicles/view_vehicles.php",
			schemaName: "Vehicles.ResponseMany",
		}, callback)
	}
}

module.exports = Vehicles
