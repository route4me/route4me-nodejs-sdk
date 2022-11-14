"use strict"

/**
 * AutomaticTerritories facility
 *
 * @category AutomaticTerritories
 * @since 1.0.16
 */
class AutomaticTerritories {
	/**
	 * Constructor
	 *
	 * @private
	 *
	 * @param  {RequestManager} requestManager - Request Manager
	 * @return {AutomaticTerritories}                   - AutomaticTerritories facility
	 */
	constructor(requestManager) {
		this.r = requestManager
	}

	/**
	 * Create job.
	 *
	 * @since 1.0.16
	 *
	 * @param {Object[]}	addresses			- An array of the address objects.
	 * @param {String}		addresses.id		- Address ID.
	 * @param {Number}		addresses.lat		- Address latitude.
	 * @param {Number}		addresses.lng		- Address longitude.
	 * @param {Number}		[mode = 0]
	 * @param {String[]}	[params = []] 		- An array of parameters.
	 * @param {module:route4me-node~RequestCallback<jsonschema:
	 * AutomaticTerritories.JobID>} callback
	 */
	createJob(addresses, mode, params, callback) {
		let md = mode || 0
		let prm = params || []
		let cb = callback

		if (undefined === cb && "function" === typeof prm) {
			cb = prm
			prm = []
		}

		if (undefined === cb && "function" === typeof md) {
			cb = md
			md = 0
		}
		return this.r._makeRequest5({
			method: "POST",
			path: "/api/v5.0/automatic-territories",
			body: {
				addresses,
				mode: md,
				params: prm
			},
			validationContext: "AutomaticTerritories.JobID",
		}, cb)
	}

	/**
	 * Check the asynchronous job status by specifying the 'job_id' path parameter.
	 *
	 * @since 1.0.16
	 *
	 * @param {String}	jobId		- Job ID to check status.
	 * @param {module:route4me-node~RequestCallback<jsonschema:
	 * AutomaticTerritories.ResponseStatus>} callback
	 */
	getJobStatus(jobId, callback) {
		return this.r._makeRequest5({
			method: "GET",
			path: `/api/v5.0/automatic-territories/job-tracker/status/${jobId}`,
			validationContext: "AutomaticTerritories.ResponseStatus",
		}, callback)
	}

	/**
	 * Get the asynchronous job result by specifying the 'job_id' path parameter.
	 *
	 * @since 1.0.16
	 *
	 * @param {String}	jobId		- Job ID to get result.
	 * @param {module:route4me-node~RequestCallback<jsonschema:
	 * AutomaticTerritories.ResponseJob>} callback
	 */
	getJobResult(jobId, callback) {
		return this.r._makeRequest5({
			method: "GET",
			path: `/api/v5.0/automatic-territories/job-tracker/result/${jobId}`,
			validationContext: "AutomaticTerritories.ResponseJob",
		}, callback)
	}
}

module.exports = AutomaticTerritories
