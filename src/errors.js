"use strict"

/**
 * The base type for all error-objects of this SDK
 *
 * @category Errors
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

		this.innerError = innerError || null
		this.name = "Route4MeError"

		// // TODO: use this code!!
		// Object.defineProperty(this, 'name', {
		// 	configurable: true,
		// 	enumerable : false,
		// 	value : this.constructor.name,
		// 	writable : true,
		// });
	}
}

/**
 * Error received from the API-server
 *
 * @category Errors
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

		// TODO: remove this line:
		this.name = "Route4MeApiError"

		if (res) {
			this.statusCode = res.statusCode
			this.apiPath = res.request.url
		}
	}
}

/**
 * Error occured during internal validation
 *
 * @category Errors
 */
class Route4MeValidationError extends Route4MeError {
	/**
	 * Create Route4MeValidationError
	 * @param  {string} msg         - Message
	 * @param  {*}      data        - Data under consideration
	 * @param  {Error}  innerError  - Error, caused this error
	 * @return {Route4MeValidationError}
	 * @private
	 * @inner
	 */
	constructor(msg, data, innerError) {
		super(msg, innerError)

		// TODO: remove this line:
		this.name = "Route4MeValidationError"

		/**
		 * Data under consideration
		 * @type {*}
		 */
		this.data = data
	}
}

exports.Route4MeError = Route4MeError
exports.Route4MeApiError = Route4MeApiError
exports.Route4MeValidationError = Route4MeValidationError
