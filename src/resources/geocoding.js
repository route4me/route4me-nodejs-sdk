"use strict"

/**
 * Geocoding facility
 *
 * @category Geocoding
 */
class Geocoding {
	/**
	 * Constructor
	 *
	 * @see {@link https://route4me.io/docs/#geocoding}
	 * @since 0.1.9
	 * @private
	 *
	 * @param  {RequestManager} requestManager - Request Manager
	 * @return {Geocoding}                     - Geocoding facility
	 */
	constructor(requestManager) {
		this.r = requestManager
	}

	/**
	 * Forward Geocode Address
	 *
	 * Forward geocoding is the process of converting place name information
	 * into latitude and longitude values.
	 *
	 * @todo TODO: method-conflict. API suggest to use "POST", SDK uses "GET"
	 *
	 * @see {@link https://route4me.io/docs/#forward-geocode-address}
	 * @since 0.1.9
	 *
	 * @param {string} address - Address to `geocode`
	 * @param {module:route4me-node~RequestCallback<jsonschema:Geocoding.Forward>} [callback]
	 */
	forward(address, callback) {
		return this.r._makeRequest({
			method: "GET",
			path: "/api/geocoder.php",
			qs: {
				"format": "json",
				"addresses": address,
			},

			validationContext: "Geocoding.Forward",
		}, callback)
	}

	/**
	 * Reverse Geocode Address
	 *
	 * With the reverse geocoding you can retrieve an address name from a geographical location
	 * point (latitude, longitude). Using this method, you can get the nearest locations
	 * to a specific address name. You can also get the larger scale objects (such as street
	 * addresses, places, neighbourhoods, county, state or country) which include a specified
	 * address.
	 *
	 * @todo TODO: method-conflict. API suggest to use "POST", SDK uses "GET"
	 *
	 * @see {@link https://route4me.io/docs/#reverse-geocode-address}
	 * @since 0.1.9
	 *
	 * @param {number} latitude - Latitude of the geographic location
	 * @param {number} longitude - Longitude of the geographic location
	 * @param {module:route4me-node~RequestCallback<jsonschema:Geocoding.Reverse>} [callback]
	 */
	reverse(latitude, longitude, callback) {
		return this.r._makeRequest({
			method: "GET",
			path: "/api/geocoder.php",
			qs: {
				"format": "json",
				"addresses": `${latitude},${longitude}`,
			},

			validationContext: "Geocoding.Reverse",
		}, callback)
	}

	/**
	 * Rapid Address Search by ID
	 *
	 * Single address geocoding refers to the process of getting a geographic
	 * address by address name sent with HTTP GET data.
	 *
	 * @see {@link https://route4me.io/docs/#rapid-address-search}
	 * @since 0.1.9
	 *
	 * @param {number} id  - Sequential number in addresses list.
	 * @param {module:route4me-node~RequestCallback<jsonschema:Geocoding.Rapid>} [callback]
	 */
	rapidGet(id, callback) {
		// ----a
		// https://rapid.route4me.com/street_data/<PK>/

		const dryId = Number(id)
		const fullurl = `https://rapid.route4me.com/street_data/${dryId}/`

		return this.r._makeRequest({
			method: "GET",
			url: fullurl,
			validationContext: "Geocoding.Rapid",
		}, callback)
	}

	/**
	 * Rapid Address Search
	 *
	 * @see {@link https://route4me.io/docs/#rapid-address-search}
	 * @since 0.1.9
	 *
	 * @todo TODO: make options optional
	 *
	 * @param {Object} criteria - Search criterias, such as `zipcode`, `house number` and other
	 * @param {number|string} [criteria.zipCode]     - Zip code of the area
	 * @param {number|string} [criteria.houseNumber] - House number
	 * @param {Object} options  - Search parameters
	 * @param {number} [options.offset] - Start search position
	 * @param {number} [options.limit]  - Search results limitation
	 * @param {module:route4me-node~RequestCallback<jsonschema:Geocoding.Rapid>} [callback]
	 */
	rapidSearch(criteria, options, callback) {
		// ----b
		// https://rapid.route4me.com/street_data/
		// ----c
		// https://rapid.route4me.com/street_data/<OFFSET>/<LIMIT>/

		// ----d
		// https://rapid.route4me.com/street_data/zipcode/<ZIPCODE>/
		// ----g
		// https://rapid.route4me.com/street_data/zipcode/<ZIPCODE>/<OFFSET>/<LIMIT>/

		// ----e
		// https://rapid.route4me.com/street_data/service/<ZIPCODE>/<HOUSENUMBER>/
		// ----f
		// https://rapid.route4me.com/street_data/service/<ZIPCODE>/<HOUSENUMBER>/<OFFSET>/<LIMIT>/

		let pathopts = ""
		let pathservice = ""
		let pathparams = ""

		if (options && "number" === typeof options["offset"]
				&& "number" === typeof options["limit"]) {
			pathopts = `${options.offset}/${options.limit}/`
		}

		if (criteria) {
			const zip = criteria["zipCode"] || criteria["zipcode"]
			const house = criteria["houseNumber"] || criteria["housenumber"]
			if (zip) {
				pathservice = "zipcode/"
				pathparams = `${zip}/`
			}

			if (house) {
				pathservice = "service/"
				pathparams = `${zip}/${house}/`
			}
		}

		const fullurl = `https://rapid.route4me.com/street_data/${pathservice}${pathparams}${pathopts}`

		return this.r._makeRequest({
			method: "GET",
			url: fullurl,
			validationContext: "Geocoding.Rapid",
		}, callback)
	}
}

module.exports = Geocoding
