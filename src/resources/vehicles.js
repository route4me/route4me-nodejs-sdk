"use strict"

/**
 * Vehicles facility
 *
 * @category Vehicles
 */
class Vehicles {
    /**
     * Constructor
     *
     * @see {@link https://route4me.io/docs/#vehicles}
     * @since 0.1.4
     * @private
     *
     * @param  {RequestManager} requestManager - Request Manager
     * @return {Vehicles}                      - Vehicles facility
     */
    constructor(requestManager) {
        this.r = requestManager
    }

    /**
     * Get vehicles that belong to the Route4Me account
     *
     * @todo Fix error in API docs: there the method utilizes `POST`-http-method to get results
     *
     * @see {@link https://route4me.io/docs/#get-vehicles}
     *
     * @param {module:route4me-node~RequestCallback<jsonschema:Vehicles.ResponseMany>} [callback]
     */
    list(callback) {
        return this.r._makeRequest({
            method: "GET",
            path: "/api.v4/vehicle.php",
            validationContext: "Vehicles.ResponseMany",
        }, callback)
    }
}

module.exports = Vehicles
