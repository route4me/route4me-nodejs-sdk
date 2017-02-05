"use strict"

// Territories
// Territory

/**
 * @namespace
 */
class Members {
	/**
	 * Members facility
	 *
	 * @see {@link https://route4me.io/docs/#territories}
	 * @since 0.1.8
	 * @private
	 * @category Members
	 *
	 * @param  {Route4Me} route4me - Route4Me manager
	 * @return {Members}           - Members facility
	 */
	constructor(route4me) {
		this.r = route4me
	}

	// /**
	//  * Create a new Territory.
	//  *
	//  * @see {@link https://route4me.io/docs/#create-a-territory Route4Me API}
	//  * @category Territories
	//  * @since 0.1.8
	//  *
	//  * @param {jsonschema:Territories.Territory}  data       - Valid Territory data.
	//  * @param {module:route4me-node~RequestCallback<jsonschema:Territories.Territory>}
	//  *        [callback]
	//  */
	// create(data, callback) {
	// 	return this.r._makeRequest({
	// 		method: "POST",
	// 		path: "/api.v4/territory.php",
	// 		body: data,
	// 		validationContext: "Territories.Territory",
	// 	}, callback)
	// }
}

module.exports = Members
