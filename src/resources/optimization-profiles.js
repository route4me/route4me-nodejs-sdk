"use strict"

/**
 * Optimization profiles
 *
 * @category OptimizationProfiles
 * @since 1.2.0
*/
class OptimizationProfiles {
	/**
	 * Constructor
	 *
	 * @see {@link https://route4me.io/docs/#create-an-optimization}
	 * @private
	 *
	 * @param  {RequestManager} requestManager - Request Manager
	 * @return {OptimizationProfiles}					  - OptimizationProfiles facility
	 */
	constructor(requestManager) {
		this.r = requestManager
	}

	/**
	 * Get list of optimization profiles belong to the Route4Me account
	 *
	 * @since 1.2.0
	 *
	 * @param {OptimizationProfiles.ResponseMany} [callback]
	 */
	list(callback) {
		return this.r._makeRequest5({
			method: "GET",
			path: "/api/v5.0/optimization-profiles/data-list",
			validationContext: "OptimizationProfiles.ResponseMany",
		}, callback)
	}

	/**
	 * Save a OptimizationProfiles.
	 *
	 * @since 1.2.0
	 *
	 * @param {object}   data						- valid save data
	 * @param {object[]} data.items					- array of objects to save
	 * @param {string}   data.items.guid			- GUID
	 * @param {string}   data.items.id				- ID
	 * @param {object[]} data.items.parts			- aray of parts
	 * @param {string}   data.items.parts.guid		- GUID
	 * @param {object}   data.items.parts.data		- data
	 *
	 * @param {OptimizationProfiles.ResponseSave} [callback]
	*/
	save(data, callback) {
		return this.r._makeRequest5({
			method: "POST",
			path: "/api/v5.0/optimization-profiles/save-entities",
			body: data,
			validationContext: "OptimizationProfiles.save"
		}, callback)
	}

	/**
	 * Remove a OptimizationProfiles.
	 *
	 * @since 1.2.0
	 *
	 * @param {object}   data						- valid remove data
	 * @param {object[]} data.items					- array of objects to remove
	 * @param {string}   data.items.id				- ID
	 *
	 * @param {OptimizationProfiles.ResponseRemove} [callback]
	*/
	remove(data, callback) {
		return this.r._makeRequest5({
			method: "POST",
			path: "/api/v5.0/optimization-profiles/delete-entities",
			body: data,
			validationContext: "OptimizationProfiles.remove"
		}, callback)
	}
}

module.exports = OptimizationProfiles
