"use strict"

const utils = require("./../utils")

/**
 * Vehicles facility API v5
 *
 * @category VehiclesV5
 * @since 1.0.14
 */
class VehiclesV5 {
	/**
	 * Constructor
	 *
	 * @see {@link https://route4me.io/docs/#vehicles}
	 * @since 0.1.14
	 * @private
	 *
	 * @param  {RequestManager} requestManager	- Request Manager
	 * @return {VehiclesV5}						- Vehicles facility
	 */
	constructor(requestManager) {
		this.r = requestManager
	}

	/**
	 * Create a new Vehicle in the user"s account by sending the corresponding
	 * body payload with the Vehicle parameters.
	 * The paramater fuel_type is required in the vehicle creating process.
	 *
	 * @see {@link https://route4me.io/docs/#get-vehicles}
	 * @since 1.0.14
	 *
	 * @param {Object}	data						- Vehicle properties.
	 * @param {String}	data.vehicle_id				- A unique identification 32-char string
	 * of the vehicle.
	 * @param {Number}	data.member_id				- An unique identification number of the member.
	 * @param {Boolean}	data.is_deleted				- If true, the vehicle is deleted.
	 * @param {String}	data.vehicle_alias			- Internal name of the vehicle.
	 * @param {String}	data.vehicle_vin			- Vehicle VIN number
	 * @param {Number}	data.vehicle_reg_state_id		- An ID of the state,
	 * where vehicle was registered.
	 * @param {Number}	data.vehicle_reg_country_id		- An ID of the country,
	 * where vehicle was registered.
	 * @param {String}	data.vehicle_license_plate		- A license plate of the vehicle
	 * @param {String}	data.vehicle_type_id			- Vehicle type ID
	 * Possible values:	"sedan", "suv", "pickup_truck", "van", "18wheeler", "cabin", "hatchback",
	 * 					"motorcyle", "waste_disposal", "tree_cutting", "bigrig", "cement_mixer",
	 * 					"livestock_carrier", "dairy","tractor_trailer"
	 *
	 * @param {String}	data.timestamp_added			- When the vehicle was added.
	 * @param {String}	data.vehicle_make				- Vehicle maker brend.
	 * Possible values:	"american coleman", "bmw", "chevrolet", "ford", "freightliner", "gmc",
	 * 					"hino", "honda", "isuzu", "kenworth", "mack", "mercedes-benz", "mitsubishi",
	 * 					"navistar", "nissan", "peterbilt", "renault", "scania", "sterling", "toyota",
	 * 					"volvo", "western star"
	 *
	 * @param {Number}	data.vehicle_model_year			- A year of the vehicle model.
	 * @param {String}	data.vehicle_model				- A model of the vehicle.
	 * @param {Number}	data.vehicle_year_acquired		- A year of the vehicle acquisition.
	 * @param {Number}	data.vehicle_cost_new			- A cost of the new vehicle.
	 * @param {Boolean}	data.purchased_new				- If true, the vehicle was purchased new.
	 * @param {String}	data.license_start_date			- A start date of the license.
	 * @param {String}	data.license_end_date			- An end date of the license.
	 * @param {Boolean}	data.is_operational				- If true, the vehicle is operational.
	 * @param {String}	data.fuel_type					- A type of the fuel.
	 * Possible values:	"unleaded 87", "unleaded 89", "unleaded 91", "unleaded 93", "diesel",
	 * 					"electric", "hybrid"
	 *
	 * @param {Number}	data.external_telematics_vehicle_id		- External telematics vehicle ID.
	 * @param {Number}	data.timestamp_removed					- When he vehicle was removed.
	 * @param {Number}	data.vehicle_profile_id					- Vehicle profile ID.
	 * @param {Number}	data.fuel_consumption_city				- Fuel consumption in the city area.
	 * @param {Number}	data.fuel_consumption_highway			- Fuel consumption in the highway area.
	 * @param {String}	data.fuel_consumption_city_unit			- Fuel consumption unit in the city area.
	 * @param {String}	data.fuel_consumption_highway_unit		- Fuel consumption unit
	 * in the highway area.
	 * @param {Number}	data.mpg_city							- Miles per gallon in the city area.
	 * @param {Number}	data.mpg_highway						- Miles per gallon in the highway area.
	 * @param {String}	data.fuel_consumption_city_uf_value		- Fuel consumption UF value
	 * in the city area.
	 * @param {String}	data.fuel_consumption_highway_uf_value	- Fuel consumption UF value
	 * in the highway area.
	 * @param {module:route4me-node~RequestCallback} [callback]
	 */
	create(data, callback) {
		return this.r._makeRequest5({
			method: "POST",
			path: "/api/v5.0/vehicles",
			body: data,
			validationContext: "Vehicles.ResponseVehicles200",
		}, callback)
	}

	/**
	 * Display the list of Vehicles.
	 *
	 * @see {@link https://route4me.io/docs/#get-vehicles}
	 * @since 1.0.14
	 *
	 * @param {Object}	[options]						- Request options.
	 * @param {Number}	[options.page = 1]				- The requested page.
	 * @param {Number}	[options.per_page = 100]		- The number of Vehicles per page.
	 * @param {module:route4me-node~RequestCallback} [callback]
	 */
	list(options, callback) {
		let opt = options || {}
		let cb = callback

		if (undefined === cb && "function" === typeof opt) {
			cb = opt
			opt = {}
		}

		return this.r._makeRequest5({
			method: "GET",
			path: "/api/v5.0/vehicles",
			qs: opt,
			validationContext: "Vehicles.ResponseVehicles200",
		}, cb)
	}

	/**
	 * Get the paginated list of Vehicles.
	 *
	 * @see {@link https://route4me.io/docs/#get-vehicles}
	 * @since 1.0.14
	 *
	 * @param {Object}		[options]						- Request options.
	 * @param {Number}		[options.page = 1]				- The requested page.
	 * @param {Number}		[options.per_page = 100]		- The number of Vehicles per page.
	 * @param {String[]}	[options.order_by]				- Sorting field and its sorting direction,
	 * e.g.:	[["vehicle_type_id", "asc"], ["vehicle_alias", "desc"]]
	 * @param {String}		[options.show = "active"]		- Choose a scope to get.
	 * Possible values:	"pending", "deleted", "all" and "active"
	 * @param {String}		[options.search_query]			- Search value.
	 *
	 * @param {module:route4me-node~RequestCallback} [callback]
	 */
	getVehiclesPaginated(options, callback) {
		let opt = options || {}
		let cb = callback

		if (undefined === cb && "function" === typeof opt) {
			cb = opt
			opt = {}
		}

		return this.r._makeRequest5({
			method: "GET",
			path: "/api/v5.0/vehicles/paginate",
			qs: opt,
			indices: true,
			validationContext: "Vehicles.ResponseVehicles200",
		}, cb)
	}

	/**
	 * Get the Vehicle by specifying the path parameter ID.
	 *
	 * @see {@link https://route4me.io/docs/#get-vehicles}
	 * @since 1.0.14
	 *
	 * @param {String}	vehicleId					- Vehicle ID.
	 * @param {module:route4me-node~RequestCallback} [callback]
	 */
	get(vehicleId, callback) {
		return this.r._makeRequest5({
			method: "GET",
			path: `/api/v5.0/vehicles/${vehicleId}`,
			validationContext: "Vehicles.ResponseVehicles200",
		}, callback)
	}

	/**
	 * Delete the Vehicle by specifying the path parameter ID.
	 *
	 * @see {@link https://route4me.io/docs/#get-vehicles}
	 * @since 1.0.14
	 *
	 * @param {String}	vehicleId					- Vehicle ID.
	 * @param {module:route4me-node~RequestCallback} [callback]
	 */
	delete(vehicleId, callback) {
		return this.r._makeRequest5({
			method: "DELETE",
			path: `/api/v5.0/vehicles/${vehicleId}`,
			validationContext: "Vehicles.ResponseVehicles200",
		}, callback)
	}

	/**
	 * Update the Vehicle by specifying the path parameter ID and by sending
	 * the corresponding body payload with the Vehicle's parameters.
	 *
	 * @see {@link https://route4me.io/docs/#get-vehicles}
	 * @since 1.0.14
	 *
	 * @param {String}	vehicleId					- Vehicle ID.
	 * @param {Object}	data						- Vehicle properties.
	 * @param {String}	data.vehicle_id				- A unique identification 32-char string
	 * of the vehicle.
	 * @param {Number}	data.member_id				- An unique identification number of the member.
	 * @param {Boolean}	data.is_deleted				- If true, the vehicle is deleted.
	 * @param {String}	data.vehicle_alias			- Internal name of the vehicle.
	 * @param {String}	data.vehicle_vin			- Vehicle VIN number
	 * @param {Number}	data.vehicle_reg_state_id		- An ID of the state,
	 * where vehicle was registered.
	 * @param {Number}	data.vehicle_reg_country_id		- An ID of the country,
	 * where vehicle was registered.
	 * @param {String}	data.vehicle_license_plate		- A license plate of the vehicle
	 * @param {String}	data.vehicle_type_id			- Vehicle type ID
	 * Possible values:	"sedan", "suv", "pickup_truck", "van", "18wheeler", "cabin", "hatchback",
	 * 					"motorcyle", "waste_disposal", "tree_cutting", "bigrig", "cement_mixer",
	 * 					"livestock_carrier", "dairy","tractor_trailer"
	 *
	 * @param {String}	data.timestamp_added			- When the vehicle was added.
	 * @param {String}	data.vehicle_make				- Vehicle maker brend.
	 * Possible values:	"american coleman", "bmw", "chevrolet", "ford", "freightliner", "gmc",
	 * 					"hino", "honda", "isuzu", "kenworth", "mack", "mercedes-benz", "mitsubishi",
	 * 					"navistar", "nissan", "peterbilt", "renault", "scania", "sterling", "toyota",
	 * 					"volvo", "western star"
	 *
	 * @param {Number}	data.vehicle_model_year			- A year of the vehicle model.
	 * @param {String}	data.vehicle_model				- A model of the vehicle.
	 * @param {Number}	data.vehicle_year_acquired		- A year of the vehicle acquisition.
	 * @param {Number}	data.vehicle_cost_new			- A cost of the new vehicle.
	 * @param {Boolean}	data.purchased_new				- If true, the vehicle was purchased new.
	 * @param {String}	data.license_start_date			- A start date of the license.
	 * @param {String}	data.license_end_date			- An end date of the license.
	 * @param {Boolean}	data.is_operational				- If true, the vehicle is operational.
	 * @param {String}	data.fuel_type					- A type of the fuel.
	 * Possible values:	"unleaded 87", "unleaded 89", "unleaded 91", "unleaded 93", "diesel",
	 * 					"electric", "hybrid"
	 *
	 * @param {Number}	data.external_telematics_vehicle_id		- External telematics vehicle ID.
	 * @param {Number}	data.timestamp_removed					- When he vehicle was removed.
	 * @param {Number}	data.vehicle_profile_id					- Vehicle profile ID.
	 * @param {Number}	data.fuel_consumption_city				- Fuel consumption in the city area.
	 * @param {Number}	data.fuel_consumption_highway			- Fuel consumption in the highway area.
	 * @param {String}	data.fuel_consumption_city_unit			- Fuel consumption unit in the city area.
	 * @param {String}	data.fuel_consumption_highway_unit		- Fuel consumption unit
	 * in the highway area.
	 * @param {Number}	data.mpg_city							- Miles per gallon in the city area.
	 * @param {Number}	data.mpg_highway						- Miles per gallon in the highway area.
	 * @param {String}	data.fuel_consumption_city_uf_value		- Fuel consumption UF value
	 * in the city area.
	 * @param {String}	data.fuel_consumption_highway_uf_value	- Fuel consumption UF value
	 * in the highway area.
	 * @param {module:route4me-node~RequestCallback} [callback]
	 */
	update(vehicleId, data, callback) {
		return this.r._makeRequest5({
			method: "PATCH",
			path: `/api/v5.0/vehicles/${vehicleId}`,
			body: data,
			validationContext: "Vehicles.ResponseVehicles200",
		}, callback)
	}

	/**
	 * Get the Vehicle track by specifying the path parameter ID.
	 *
	 * @see {@link https://route4me.io/docs/#get-vehicles}
	 * @since 1.0.14
	 *
	 * @param {String}	vehicleId							- Vehicle ID.
	 * @param {Object}	[options]							- Request options.
	 * @param {String}	[options.start]						- Filter by start date.
	 * @param {String}	[options.end]						- Filter by end date.
	 * @param {module:route4me-node~RequestCallback} [callback]
	 */
	getTrack(vehicleId, options, callback) {
		let opt = options || {}
		let cb = callback

		if (undefined === cb && "function" === typeof opt) {
			cb = opt
			opt = {}
		}

		return this.r._makeRequest5({
			method: "GET",
			path: `/api/v5.0/vehicles/${vehicleId}/track`,
			qs: opt,
			validationContext: "Vehicles.VehicleTrack",
		}, cb)
	}

	/**
	 * Temporary assign the vehicle to a member by sending the corresponding body payload.
	 *
	 * @see {@link https://route4me.io/docs/#get-vehicles}
	 * @since 1.0.14
	 *
	 * @param {Object}	data							- Vehicle properties.
	 * @param {String}	[data.vehicle_id]				- A unique identification 32-char string
	 * of the vehicle.
	 * @param {String}	[data.vehicle_license_plate]	- A license plate of the vehicle
	 * @param {Number}	data.assigned_member_id			- A unique ID of a member assigned to
	 * the vehicle.
	 * @param {Number}	data.expires_at					- When will the assignment of a member
	 * to a vehicle expire (Unix timestamp).
	 * @param {Boolean}	[data.force-assignment]			- If true, the temporary assignment of
	 * a member to a vehicle will be forced.
	 * @param {module:route4me-node~RequestCallback} [callback]
	 */
	assign(data, callback) {
		return this.r._makeRequest5({
			method: "POST",
			path: "/api/v5.0/vehicles/assign",
			body: data,
			validationContext: "Vehicles.ResponseTemporalVehicles",
		}, callback)
	}

	/**
	 * Get the list of Vehicle Profiles.
	 *
	 * @see {@link https://route4me.io/docs/#get-vehicles}
	 * @since 1.0.14
	 *
	 * @param {Object}	[options]						- Request options.
	 * @param {Number}	[options.with_pagination = 1]	- If equal to 0, the Vehicle Profiles list
	 * is not paginated, otherwise it is paginated.
	 * @param {Number}	[options.page = 1]				- The requested page.
	 * @param {Number}	[options.per_page = 100]		- The number of Vehicles per page.
	 * @param {module:route4me-node~RequestCallback} [callback]
	 */
	getProfiles(options, callback) {
		let opt = options || {}
		let cb = callback

		if (undefined === cb && "function" === typeof opt) {
			cb = opt
			opt = {}
		}

		return this.r._makeRequest5({
			method: "GET",
			path: "/api/v5.0/vehicle-profiles",
			qs: opt,
			validationContext: "Vehicles.ResponseVehicleProfiles200",
		}, cb)
	}

	/**
	 * Create a new Vehicle Profile by sending the corresponding body payload with
	 * the Vehicle Profile's parameters.
	 * Note: If the profile is created with is_predefined = 1, you cannot update
	 * or delete it later.
	 *
	 * @see {@link https://route4me.io/docs/#get-vehicles}
	 * @since 1.0.14
	 *
	 * @param {Object}	data						- Profile properties.
	 * @param {String}	data.vehicle_profile_id		- A unique ID of the vehicle profile.
	 * @param {Number}	data.root_member_id			- A unique ID of the root member.
	 * @param {String}	data.name					- The name of a vehicle profile.
	 * @param {Number}	data.height					- The height of a vehicle.
	 * @param {Number}	data.width					- The width of a vehicle.
	 * @param {Number}	data.length					- The length of a vehicle.
	 * @param {Number}	data.weight					- The weight of a vehicle.
	 * @param {Number}	data.max_weight_per_axle	- The maximum weight that can be carrie
	 * per vehicle axle.
	 * @param {String}	data.created_at				- When the vehicle profile was created.
	 * @param {String}	data.updated_at				- When the vehicle profile was updated.
	 * @param {String}	data.deleted_at				- When the vehicle profile was deleted.
	 * @param {String}	data.fuel_type				- A type of the fuel.
	 * Possible values:	"unleaded 87", "unleaded 89", "unleaded 91", "unleaded 93", "diesel",
	 * 					"electric", "hybrid"
	 *
	 * @param {Number}	data.fuel_consumption_city		- Average fuel consumption in a city area.
	 * @param {Number}	data.fuel_consumption_highway	- Average fuel consumption in a highway area.
	 * @param {String}	data.hazmat_type				- A hazardous material type the vehicle carry.
	 * Possible values:	"general", "explosives", "flammable", "inhalants", "caustic", "radioactive"
	 *
	 * @param {Boolean}	data.is_predefined				- If true, the vehicle profile is predefined.
	 * Note: When is_predefined = true, a vehicle profile is not updatable or removable.
	 * @param {Boolean}	data.is_default				- If true, the vehicle profile is default.
	 * @param {String}	data.height_units			- The units in which the vehicle height is measured.
	 * @param {String}	data.width_units			- The units in which the vehicle height is measured.
	 * @param {String}	data.length_units			- The units in which the vehicle length is measured.
	 * @param {String}	data.weight_units			- The units in which the vehicle weight is measured.
	 * @param {String}	data.max_weight_per_axle_units		- The units in which the maximum weight per
	 * axle of a vehicle is measured.
	 * @param {String}	data.fuel_consumption_city_unit		- The units in which fuel consumption
	 * is measured in a city area.
	 * @param {String}	data.fuel_consumption_highway_unit	- The units in which fuel consumption
	 * is measured in a highway area.
	 * @param {String}	data.height_uf_value				- User-friendly value of a vehicle's height.
	 * @param {String}	data.width_uf_value					- User-friendly value of a vehicle's width.
	 * @param {String}	data.length_uf_value				- User-friendly value of a vehicle's length.
	 * @param {String}	data.weight_uf_value				- User-friendly value of a vehicle's weight.
	 * @param {String}	data.max_weight_per_axle_uf_value		- User-friendly value of a vehicle's
	 * maximum weight per axle.
	 * @param {String}	data.fuel_consumption_city_uf_value		- User-friendly value of a vehicle's
	 * fuel consumption in a city area.
	 * @param {String}	data.fuel_consumption_highway_uf_value	- User-friendly value of a vehicle's
	 * fuel consumption in a highway area.
	 * @param {module:route4me-node~RequestCallback} [callback]
	 */
	createProfile(data, callback) {
		return this.r._makeRequest5({
			method: "POST",
			path: "/api/v5.0/vehicle-profiles",
			body: data,
			validationContext: "Vehicles.ResponseVehicleProfile200",
		}, callback)
	}

	/**
	 * Get the Vehicle Profile by specifying the path parameter ID.
	 *
	 * @see {@link https://route4me.io/docs/#get-vehicles}
	 * @since 1.0.14
	 *
	 * @param {Number}	profileId					- Vehicle ID.
	 * @param {module:route4me-node~RequestCallback} [callback]
	 */
	getProfile(profileId, callback) {
		return this.r._makeRequest5({
			method: "GET",
			path: `/api/v5.0/vehicle-profiles/${profileId}`,
			validationContext: "Vehicles.ResponseVehicleProfile200",
		}, callback)
	}

	/**
	 * Delete the Vehicle Profile by specifying the path parameter ID
	 * Note: If the profile is created with is_predefined=1, you cannot update or delete it later.
	 *
	 * @see {@link https://route4me.io/docs/#get-vehicles}
	 * @since 1.0.14
	 *
	 * @param {Number}	profileId					- Vehicle ID.
	 * @param {module:route4me-node~RequestCallback} [callback]
	 */
	deleteProfile(profileId, callback) {
		return this.r._makeRequest5({
			method: "DELETE",
			path: `/api/v5.0/vehicle-profiles/${profileId}`,
			validationContext: "Vehicles.ResponseVehicleProfile200",
		}, callback)
	}

	/**
	 * Update the Vehicle Profile by specifying the path parameter ID and by sending
	 * the corresponding body payload with the Vehicle Profile's parameters.
	 *
	 * @see {@link https://route4me.io/docs/#get-vehicles}
	 * @since 1.0.14
	 *
	 * @param {String}	vehicleId					- Vehicle ID.
	 * @param {Object}	data						- Profile properties.
	 * @param {String}	data.vehicle_profile_id		-A unique ID of the vehicle profile.
	 * @param {Number}	data.root_member_id			- A unique ID of the root member.
	 * @param {String}	data.name					- The name of a vehicle profile.
	 * @param {Number}	data.height					- The height of a vehicle.
	 * @param {Number}	data.width					- The width of a vehicle.
	 * @param {Number}	data.length					- The length of a vehicle.
	 * @param {Number}	data.weight					- The weight of a vehicle.
	 * @param {Number}	data.max_weight_per_axle	- The maximum weight that can be carrie
	 * per vehicle axle.
	 * @param {String}	data.created_at				- When the vehicle profile was created.
	 * @param {String}	data.updated_at				- When the vehicle profile was updated.
	 * @param {String}	data.deleted_at				- When the vehicle profile was deleted.
	 * @param {String}	data.fuel_type				- A type of the fuel.
	 * Possible values:	"unleaded 87", "unleaded 89", "unleaded 91", "unleaded 93", "diesel",
	 * 					"electric", "hybrid"
	 *
	 * @param {Number}	data.fuel_consumption_city		- Average fuel consumption in a city area.
	 * @param {Number}	data.fuel_consumption_highway	- Average fuel consumption in a highway area.
	 * @param {String}	data.hazmat_type				- A hazardous material type the vehicle carry.
	 * Possible values:	"general", "explosives", "flammable", "inhalants", "caustic", "radioactive"
	 *
	 * @param {Boolean}	data.is_predefined				- If true, the vehicle profile is predefined.
	 * Note: When is_predefined = true, a vehicle profile is not updatable or removable.
	 * @param {Boolean}	data.is_default				- If true, the vehicle profile is default.
	 * @param {String}	data.height_units			- The units in which the vehicle height is measured.
	 * @param {String}	data.width_units			- The units in which the vehicle height is measured.
	 * @param {String}	data.length_units			- The units in which the vehicle length is measured.
	 * @param {String}	data.weight_units			- The units in which the vehicle weight is measured.
	 * @param {String}	data.max_weight_per_axle_units		- The units in which the maximum weight per
	 * axle of a vehicle is measured.
	 * @param {String}	data.fuel_consumption_city_unit		- The units in which fuel consumption
	 * is measured in a city area.
	 * @param {String}	data.fuel_consumption_highway_unit	- The units in which fuel consumption
	 * is measured in a highway area.
	 * @param {String}	data.height_uf_value				- User-friendly value of a vehicle's height.
	 * @param {String}	data.width_uf_value					- User-friendly value of a vehicle's width.
	 * @param {String}	data.length_uf_value				- User-friendly value of a vehicle's length.
	 * @param {String}	data.weight_uf_value				- User-friendly value of a vehicle's weight.
	 * @param {String}	data.max_weight_per_axle_uf_value		- User-friendly value of a vehicle's
	 * maximum weight per axle.
	 * @param {String}	data.fuel_consumption_city_uf_value		- User-friendly value of a vehicle's
	 * fuel consumption in a city area.
	 * @param {String}	data.fuel_consumption_highway_uf_value	- User-friendly value of a vehicle's
	 * fuel consumption in a highway area.
	 * @param {module:route4me-node~RequestCallback} [callback]
	 */
	updateProfile(vehicleId, data, callback) {
		return this.r._makeRequest5({
			method: "PATCH",
			path: `/api/v5.0/vehicle-profiles/${vehicleId}`,
			body: data,
			validationContext: "Vehicles.ResponseVehicleProfile200",
		}, callback)
	}

	/**
	 * Search for the Vehicle by sending the corresponding body payload
	 * with Vehicles ids and location.
	 *
	 * @see {@link https://route4me.io/docs/#get-vehicles}
	 * @since 1.0.14
	 *
	 * @param {Object}		data					- Vehicle properties.
	 * @param {String[]}	data.vehicle_ids		- An array of the vehicle IDs.
	 * @param {Number}		data.lat				- Latitude
	 * @param {Number}		data.lng				- Longitude
	 * @param {module:route4me-node~RequestCallback} [callback]
	 */
	search(data, callback) {
		return this.r._makeRequest5({
			method: "POST",
			path: "/api/v5.0/vehicles/search",
			body: data,
			validationContext: "Vehicles.VehiclesSearchList",
		}, callback)
	}

	/**
	 * Execute the Vehicle's Order by sending the corresponding body payload with
	 * the corresponding  location, and Vehicle ID.
	 *
	 * @see {@link https://route4me.io/docs/#get-vehicles}
	 * @since 1.0.14
	 *
	 * @param {Object}	data					- Vehicle properties.
	 * @param {String}	data.vehicle_id			- A unique identification 32-char string of the vehicle.
	 * @param {Number}	data.lat				- Latitude
	 * @param {Number}	data.lng				- Longitude
	 * @param {module:route4me-node~RequestCallback} [callback]
	 */
	execute(data, callback) {
		return this.r._makeRequest5({
			method: "POST",
			path: "/api/v5.0/vehicles/execute",
			body: data,
			validationContext: "Vehicles.inline_response_200",
		}, callback)
	}

	/**
	 * Get the Vehicle Profile by license plate.
	 *
	 * @see {@link https://route4me.io/docs/#get-vehicles}
	 * @since 1.0.14
	 *
	 * @param {String}	vehicleLicensePlate			- A license plate of the vehicle
	 * @param {module:route4me-node~RequestCallback} [callback]
	 */
	getVehicleProfileByLicense(vehicleLicensePlate, callback) {
		return this.r._makeRequest5({
			method: "GET",
			path: "/api/v5.0/vehicles/license",
			qs: { vehicle_license_plate: vehicleLicensePlate },
			validationContext: "Vehicles.ResponseVehicleLicense",
		}, callback)
	}

	/**
	 * Get the latest know vehicle's locations.
	 *
	 * @see {@link https://route4me.io/docs/#get-vehicles}
	 * @since 1.0.14
	 *
	 * @param {String[]}	vehicleIds				- Filter vehicles by ids.
	 * @param {module:route4me-node~RequestCallback} [callback]
	 */
	location(vehicleIds, callback) {
		return this.r._makeRequest5({
			method: "GET",
			path: "/api/v5.0/vehicles/location",
			qs: { ids: vehicleIds },
			indices: true,
			validationContext: "Vehicles.inline_response_200_1",
		}, callback)
	}

	/**
	 * Update the Vehicle list asynchronously by sending the corresponding body payload
	 * with the Vehicles list with their parameters.
	 *
	 * @see {@link https://route4me.io/docs/#get-vehicles}
	 * @since 1.0.14
	 *
	 * @param {Object[]}	vehicles							- Vehicle properties.
	 * @param {String}		vehicles.vehicle_id					- A unique identification
	 * 32-char string of the vehicle.
	 * @param {String}		vehicles.vehicle_alias				- Internal name of the vehicle.
	 * @param {String}		vehicles.vehicle_vin				- Vehicle VIN number
	 * @param {Number}		vehicles.vehicle_reg_state_id		- An ID of the state,
	 * where vehicle was registered.
	 * @param {Number}		vehicles.vehicle_reg_country_id		- An ID of the country,
	 * where vehicle was registered.
	 * @param {String}		vehicles.vehicle_license_plate		- A license plate of the vehicle
	 * @param {String}		vehicles.vehicle_type_id			- Vehicle type ID
	 * Possible values:	"sedan", "suv", "pickup_truck", "van", "18wheeler", "cabin", "hatchback",
	 * 					"motorcyle", "waste_disposal", "tree_cutting", "bigrig", "cement_mixer",
	 * 					"livestock_carrier", "dairy","tractor_trailer"
	 *
	 * @param {String}		vehicles.vehicle_make				- Vehicle maker brend.
	 * Possible values:	"american coleman", "bmw", "chevrolet", "ford", "freightliner", "gmc",
	 * 					"hino", "honda", "isuzu", "kenworth", "mack", "mercedes-benz", "mitsubishi",
	 * 					"navistar", "nissan", "peterbilt", "renault", "scania", "sterling", "toyota",
	 * 					"volvo", "western star"
	 *
	 * @param {Number}		vehicles.vehicle_model_year			- A year of the vehicle model.
	 * @param {String}		vehicles.vehicle_model				- A model of the vehicle.
	 * @param {Number}		vehicles.vehicle_year_acquired		- A year of the vehicle acquisition.
	 * @param {String}		vehicles.fuel_type					- A type of the fuel.
	 * Possible values:	"unleaded 87", "unleaded 89", "unleaded 91", "unleaded 93", "diesel",
	 * 					"electric", "hybrid"
	 *
	 * @param {Number}		vehicles.vehicle_profile_id			- Vehicle profile ID.
	 * @param {module:route4me-node~RequestCallback} [callback]
	 */
	bulkUpdate(vehicles, callback) {
		return this.r._makeRequest5({
			method: "POST",
			path: "/api/v5.0/vehicles/bulk/update",
			body: { vehicles },
			validationContext: "Vehicles.Accepted",
		}, callback)
	}

	/**
	 * Delete the Vehicles from the list of their ids asynchronously.
	 *
	 * @see {@link https://route4me.io/docs/#get-vehicles}
	 * @since 1.0.14
	 *
	 * @param {String[]}	vehicleIds					- Vehicle IDs to delete.
	 * @param {module:route4me-node~RequestCallback}	[callback]
	 */
	bulkDelete(vehicleIds, callback) {
		return this.r._makeRequest5({
			method: "POST",
			path: "/api/v5.0/vehicles/bulk/delete",
			qs: { vehicle_ids: vehicleIds },
			indices: true,
			validationContext: "Vehicles.Accepted",
		}, callback)
	}

	/**
	 * Activate the Vehicles from the list of their ids asynchronously.
	 *
	 * @see {@link https://route4me.io/docs/#get-vehicles}
	 * @since 1.0.14
	 *
	 * @param {String[]}	[vehicleIds]				- Array of the vehicle ids to activate.
	 * @param {module:route4me-node~RequestCallback}	[callback]
	 */
	bulkActivate(vehicleIds, callback) {
		let cb = callback

		if (undefined === cb && "function" === typeof vehicleIds) {
			cb = vehicleIds

			return this.r._makeRequest5({
				method: "POST",
				path: "/api/v5.0/vehicles/bulk/activate",
				validationContext: "Vehicles.Accepted",
			}, cb)
		}

		return this.r._makeRequest5({
			method: "POST",
			path: "/api/v5.0/vehicles/bulk/activate",
			qs: { vehicle_ids: vehicleIds },
			indices: true,
			validationContext: "Vehicles.Accepted",
		}, cb)
	}

	/**
	 * Deactivate the Vehicles from the list of their ids asynchronously.
	 *
	 * @see {@link https://route4me.io/docs/#get-vehicles}
	 * @since 1.0.14
	 *
	 * @param {String[]}	[vehicleIds]				- Array of the vehicle ids to deactivate.
	 * @param {module:route4me-node~RequestCallback}	[callback]
	 */
	bulkDeactivate(vehicleIds, callback) {
		let cb = callback

		if (undefined === cb && "function" === typeof vehicleIds) {
			cb = vehicleIds

			return this.r._makeRequest5({
				method: "POST",
				path: "/api/v5.0/vehicles/bulk/deactivate",
				validationContext: "Vehicles.Accepted",
			}, cb)
		}

		return this.r._makeRequest5({
			method: "POST",
			path: "/api/v5.0/vehicles/bulk/deactivate",
			qs: { vehicle_ids: vehicleIds },
			indices: true,
			validationContext: "Vehicles.Accepted",
		}, cb)
	}

	/**
	 * Restore the Vehicles from the list of their ids asynchronously.
	 *
	 * @see {@link https://route4me.io/docs/#get-vehicles}
	 * @since 1.0.14
	 *
	 * @param {String[]}	[vehicleIds]				- Array of the vehicle ids to restore.
	 * @param {module:route4me-node~RequestCallback}	[callback]
	 */
	bulkRestore(vehicleIds, callback) {
		let cb = callback

		if (undefined === cb && "function" === typeof vehicleIds) {
			cb = vehicleIds

			return this.r._makeRequest5({
				method: "POST",
				path: "/api/v5.0/vehicles/bulk/restore",
				validationContext: "Vehicles.Accepted",
			}, cb)
		}

		return this.r._makeRequest5({
			method: "POST",
			path: "/api/v5.0/vehicles/bulk/restore",
			qs: { vehicle_ids: vehicleIds },
			indices: true,
			validationContext: "Vehicles.Accepted",
		}, cb)
	}

	/**
	 * Sync a Pending Vehicle from Telematics.
	 * Sync the Vehicle by sending the corresponding body payload with the Vehicle's parameters
	 * and by specifiying `vehicle_alias`, `r4m_telematics_gateway_connection_id`
	 * and `r4m_telematics_gateway_vehicle_id` in this body payload.
	 *
	 * @see {@link https://route4me.io/docs/#get-vehicles}
	 * @since 1.0.14
	 *
	 * @param {Object}	data							- Vehicle properties.
	 * @param {String}	data.vehicle_alias				- Internal name of the vehicle.
	 * @param {String}	data.vehicle_vin				- Vehicle VIN number
	 * @param {Number}	data.vehicle_reg_state_id		- An ID of the state,
	 * where vehicle was registered.
	 * @param {Number}	data.vehicle_reg_country_id		- An ID of the country,
	 * where vehicle was registered.
	 * @param {String}	data.vehicle_license_plate		- A license plate of the vehicle
	 * @param {String}	data.vehicle_type_id			- Vehicle type ID
	 * Possible values:	"sedan", "suv", "pickup_truck", "van", "18wheeler", "cabin", "hatchback",
	 * 					"motorcyle", "waste_disposal", "tree_cutting", "bigrig", "cement_mixer",
	 * 					"livestock_carrier", "dairy","tractor_trailer"
	 *
	 * @param {String}	data.vehicle_make				- Vehicle maker brend.
	 * Possible values:	"american coleman", "bmw", "chevrolet", "ford", "freightliner", "gmc",
	 * 					"hino", "honda", "isuzu", "kenworth", "mack", "mercedes-benz", "mitsubishi",
	 * 					"navistar", "nissan", "peterbilt", "renault", "scania", "sterling", "toyota",
	 * 					"volvo", "western star"
	 *
	 * @param {Number}	data.vehicle_model_year			- A year of the vehicle model.
	 * @param {String}	data.vehicle_model				- A model of the vehicle.
	 * @param {Number}	data.vehicle_year_acquired		- A year of the vehicle acquisition.
	 * @param {String}	data.fuel_type					- A type of the fuel.
	 * Possible values:	"unleaded 87", "unleaded 89", "unleaded 91", "unleaded 93", "diesel",
	 * 					"electric", "hybrid"
	 *
	 * @param {Number}	data.external_telematics_vehicle_id			- External telematics vehicle ID.
	 * @param {Number}	data.r4m_telematics_gateway_connection_id	- A unique ID of the Route4Me
	 * telematics gateway connection.
	 * @param {Number}	data.r4m_telematics_gateway_vehicle_id		- A unique ID of the Route4Me
	 * telematics gateway vehicle.
	 * @param {module:route4me-node~RequestCallback}	[callback]
	 */
	syncPending(data, callback) {
		return this.r._makeRequest5({
			method: "POST",
			path: "/api/v5.0/vehicles/sync/pending",
			body: data,
			validationContext: "Vehicles.ResponseVehicle200",
		}, callback)
	}

	/**
	 * View Job Tracker Status.
	 *
	 * @see {@link https://route4me.io/docs/#get-vehicles}
	 * @since 1.0.14
	 *
	 * @param {String}	jobId						- Current Job ID..
	 * @param {module:route4me-node~RequestCallback} [callback]
	 */
	jobTrackerStatus(jobId, callback) {
		return this.r._makeRequest5({
			method: "GET",
			path: `/api/v5.0/vehicles/job-tracker/status/${jobId}`,
			validationContext: "Vehicles.Accepted",
		}, callback)
	}

	/**
	 * View Job Tracker Result.
	 *
	 * @see {@link https://route4me.io/docs/#get-vehicles}
	 * @since 1.0.14
	 *
	 * @param {String}	jobId						- Current Job ID..
	 * @param {module:route4me-node~RequestCallback} [callback]
	 */
	jobTrackerResult(jobId, callback) {
		return this.r._makeRequest5({
			method: "GET",
			path: `/api/v5.0/vehicles/job-tracker/result/${jobId}`,
			validationContext: "Vehicles.Accepted",
		}, callback)
	}

	/**
	 * List all the Vehicle Capacity Profiles.
	 * Filtering Data: Send Vehicle Capacity Profile attribute's name with
	 * the corresponding value, e.g. max_volume = 99.99
	 *
	 * @see {@link https://route4me.io/docs/#get-vehicles}
	 * @since 1.0.14
	 *
	 * @param {Object}		[options]							- Request options.
	 * @param {Boolean}		[options.mergePagesParam = false]	- Paginate all the data into
	 * one page only.
	 * @param {Number}		[options.page = 1]					- The requested page.
	 * @param {Number}		[options.per_page = 100]			- The number of Vehicles per page.
	 * @param {String[]}	[options.order_by]					- Sorting field and its sorting direction,
	 * e.g.:	[["max_volume", "asc"], ["max_revenue", "desc"]]
	 * @param {String}		[options.filters]					- Search value.
	 * @param {module:route4me-node~RequestCallback} [callback]
	 */
	listCapacityProfiles(options, callback) {
		let opt = options || {}
		let cb = callback

		if (undefined === cb && "function" === typeof opt) {
			cb = opt
			opt = {}
		} else if (opt.filters) {
			opt = utils.clone(opt)
			opt.filters = { search_query: opt.filters }
		}

		return this.r._makeRequest5({
			method: "GET",
			path: "/api/v5.0/vehicle-capacity-profiles",
			qs: opt,
			indices: true,
			validationContext: "Vehicles.ResponsePaginatedVehicleCapacityProfile",
		}, cb)
	}

	/**
	 * Create a new Vehicle Capacity Profile.
	 *
	 * @see {@link https://route4me.io/docs/#get-vehicles}
	 * @since 1.0.14
	 *
	 * @param {Object}	data								- Capacity profile properties.
	 * @param {Number}	data.vehicle_capacity_profile_id	- A unique ID of a vehicle capacity profile.
	 * @param {Number}	data.root_member_id		- A unique ID of the root member.
	 * @param {string}	data.name				- The name of a vehicle capacity profile.
	 * @param {Number}	data.max_volume			- The maximum volume a veicle can carry.
	 * @param {Number}	data.max_weight			- The maximum weight a vehicle can carry.
	 * @param {Number}	data.max_items_number	- The maximum number of items a vehicle can carry.
	 * @param {Number}	data.max_revenue		- The maximum revenue an owner company
	 * can gain from a vehicle.
	 * @param {String}	data.max_volume_unit	- A unit in which maximum volume is measured.
	 * @param {String}	data.max_weight_unit	- A unit in which maximum weight is measured.
	 * @param {module:route4me-node~RequestCallback} [callback]
	 */
	createCapacityProfiles(data, callback) {
		return this.r._makeRequest5({
			method: "POST",
			path: "/api/v5.0/vehicle-capacity-profiles",
			body: data,
			validationContext: "Vehicles.ResponseVehicleCapacityProfile200",
		}, callback)
	}

	/**
	 * Get a Vehicle Capacity Profile by its ID.
	 *
	 * @see {@link https://route4me.io/docs/#get-vehicles}
	 * @since 1.0.14
	 *
	 * @param {Number}	id							- Vehicle Capacity Profile ID.
	 * @param {module:route4me-node~RequestCallback} [callback]
	 */
	getCapacityProfiles(id, callback) {
		return this.r._makeRequest5({
			method: "GET",
			path: `/api/v5.0/vehicle-capacity-profiles/${id}`,
			validationContext: "Vehicles.ResponseVehicleCapacityProfile200",
		}, callback)
	}

	/**
	 * Delete the Vehicle Capacity Profile by its ID.
	 *
	 * @see {@link https://route4me.io/docs/#get-vehicles}
	 * @since 1.0.14
	 *
	 * @param {Number}	id							- Vehicle Capacity Profile ID.
	 * @param {module:route4me-node~RequestCallback} [callback]
	 */
	deleteCapacityProfiles(id, callback) {
		return this.r._makeRequest5({
			method: "DELETE",
			path: `/api/v5.0/vehicle-capacity-profiles/${id}`,
			validationContext: "Vehicles.ResponseVehicleCapacityProfile200",
		}, callback)
	}

	/**
	 * Update the Vehicle Capacity Profile by its ID.
	 *
	 * @see {@link https://route4me.io/docs/#get-vehicles}
	 * @since 1.0.14
	 *
	 * @param {Number}	id							- Vehicle Capacity Profile ID.
	 * @param {Object}	data								- Capacity profile properties.
	 * @param {Number}	data.vehicle_capacity_profile_id	- A unique ID of a vehicle capacity profile.
	 * @param {Number}	data.root_member_id		- A unique ID of the root member.
	 * @param {Number}	data.name				- The name of a vehicle capacity profile.
	 * @param {Number}	data.max_volume			- The maximum volume a veicle can carry.
	 * @param {Number}	data.max_weight			- The maximum weight a vehicle can carry.
	 * @param {Number}	data.max_items_number	- The maximum number of items a vehicle can carry.
	 * @param {Number}	data.max_revenue		- The maximum revenue an owner company can
	 * gain from a vehicle.
	 * @param {String}	data.created_at			- When the vehicle capacity profile was created.
	 * @param {String}	data.updated_at			- When the vehicle capacity profile was updated.
	 * @param {String}	data.deleted_at			- When the vehicle capacity profile was deleted.
	 * @param {String}	data.max_volume_unit	- A unit in which maximum volume is measured.
	 * @param {String}	data.max_weight_unit	- A unit in which maximum weight is measured.
	 * @param {module:route4me-node~RequestCallback} [callback]
	 */
	updateCapacityProfiles(id, data, callback) {
		return this.r._makeRequest5({
			method: "PATCH",
			path: `/api/v5.0/vehicle-capacity-profiles/${id}`,
			body: data,
			validationContext: "Vehicles.ResponseVehicleCapacityProfile200",
		}, callback)
	}
}

module.exports = VehiclesV5
