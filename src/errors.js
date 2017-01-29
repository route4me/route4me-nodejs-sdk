"use strict"

/**
 * The base type for all error-objects of this SDK
 */
class Route4MeError extends Error {
	/**
	 * Create Route4MeError
	 * @param  {string}           msg           [description]
	 * @param  {Error}            innerError    [description]
	 * @return {Route4MeError}                  [description]
	 * @private
	 * @inner
	 */
	constructor(msg, innerError) {
		super(msg)

		this.name = "Route4MeError"
		this.innerError = innerError || null
	}
}

/**
 * Error received from the API-server
 */
class Route4MeApiError extends Route4MeError {
	/**
	 * Create Route4MeApiError
	 * @param  {string}             msg         [description]
	 * @param  {Object}             res         [description]
	 * @param  {Error}              innerError  [description]
	 * @return {Route4MeApiError}               [description]
	 * @private
	 * @inner
	 */
	constructor(msg, res, innerError) {
		super(msg, innerError)

		this.name = "Route4MeApiError"

		this.statusCode = res.statusCode
		this.apiPath = res.request.url
	}
}

/**
 * Error occured during internal validation
 */
class Route4MeInternalValidationError extends Route4MeError {
	/**
	 * Create Route4MeInternalValidationError
	 * @param  {string} msg         - Message
	 * @param  {*}      data        - Data under consideration
	 * @param  {Error}  innerError  - Error, caused this error
	 * @return {Route4MeInternalValidationError}
	 * @private
	 * @inner
	 */
	constructor(msg, data, innerError) {
		super(msg, innerError)

		this.name = "Route4MeInternalValidationError"

		/**
		 * Data under consideration
		 * @type {*}
		 */
		this.data = data
	}
}

exports.Route4MeError = Route4MeError
exports.Route4MeApiError = Route4MeApiError
exports.Route4MeInternalValidationError = Route4MeInternalValidationError
