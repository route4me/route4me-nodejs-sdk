"use strict"

// const path     = require("path")
const debug    = require("debug")("route4me")
const request  = require("superagent")

const utils           = require("./utils")
const errors          = require("./errors")

/**
 * Route4Me main SDK class
 * @protected
 */
class RequestManager {
	/**
	 * Create new API client
	 *
	 * @param  {string}  apiKey API KEY
	 * @param  {object}  [options] Additional options for new instance
	 * @param  {string}  [options.baseUrl="https://route4me.com"] Base URL for sending requests
	 * @param  {ILogger} [options.logger=null]   Logger facility
	 * @param  {boolean|function} [options.promise=false] Use promises instead of
	 * callbacks. Usage:
	 * * `false` means _no promises, use callbacks_;
	 * * `true` means _use global `Promise`_ as promises' constructor;
	 * * `constructor (function)` forces to use explicit Promise library.
	 * See also Examples section of this documentation.
	 *
	 * @param  {module:route4me-node~ValidationCallback} [options.validate=false]
	 * Validator for input and output parameters of the API methods. Set **falsey**
	 * value to skip autovalidation (in favor of manual check).
	 *
	 * @return {Route4Me}                  New API client
	 */
	constructor(apiKey, options) {
		const opt = options

		this._apiKey = apiKey
		this._baseUrl = opt["baseUrl"]
		this._userAgent = opt["userAgent"]

		this._logger = opt["logger"]
		this._validate = "function" === typeof opt["validate"] ? opt["validate"] : ix => ix

		if (true === opt["promise"]) {
			debug("promises: global Promise")
			this._promiseConstructor = Promise
		} else if ("function" === typeof opt["promise"]) {
			debug("promises: explicitly defined promise-lib")
			this._promiseConstructor = opt["promise"]
		} else {
			debug("promises: off")
			this._promiseConstructor = null
		}
	}

	/**
	 * Wrapper around {@link external:superagent} with all options applied.
	 *
	 * @todo TODO: rename this method!!!
	 * @protected
	 *
	 * @param {object} options              Request options
	 * @param {string} options.method       HTTP method
	 * @param {string} options.path         Server path
	 * @param {object} [options.qs]         Query string
	 * @param {object} [options.body]       Body
	 * @param {null|string|function} [options.validationContext=null]
	 * * `null` cause validation disabled (TODO: test this case)
	 * * `string` is threated as the name of JSON Schema
	 * * `function` will be used for validation.
	 * @param {module:route4me-node~RequestCallback}    [callback]
	 */
	_makeRequest(options, callback) {
		const qs = options.qs ||  {} /* query string */
		const body = options.body || null
		const form = options.form || null
		const timeouts = {
			response: 5000,  // Wait 5 seconds for the server to start sending,
			deadline: 10000, // but allow 10 seconds to finish loading.
		}
		let method = options.method.toLowerCase()
		if ("delete" === method) {
			method = "del"
		}

		let apiUrl
		if (options.url) {
			debug("WARNING: _makeRequest called with FULL url, but MUST be called only for partial path",
				options.url)
			apiUrl = options.url
		} else {
			apiUrl = `${this._baseUrl}${options.path}`
		}

		qs["api_key"] = this._apiKey

		if (undefined === options.validationContext) {
			// this is just a protective wall
			throw new errors.Route4MeError("validationContext should not be undefined")
		}

		let v = this._validate
		let c = options.validationContext || null
		if ("function" === typeof c) {
			v = c
			c = null
		}

		debug("sending request", method, apiUrl, qs)
		this._logger.info({
			msg: "sending request",
			method,
			url: apiUrl,
			queryString: qs,
		})

		const resHandler = new utils.ResponseHandler(
			this._promiseConstructor,
			this._logger,
			v,
			c,
			callback
		)

		// debug only!
		// qs["oldUrl"] = apiUrl
		// apiUrl = "https://httpbin.org/post"

		const req = request[method](apiUrl)
			.set("User-Agent", this._userAgent)
			.timeout(timeouts)
			.redirects(1000)	// unlimited number of redirects
			.accept("application/json")
			.query(qs)

		if (form) {
			req.type("multipart/form-data")
				.field(form)
		} else {
			req.type("application/json")
				.send(body)
		}

		req.end((err, res) => resHandler.callback(err, res))

		return resHandler.getPromise()
	}

	/**
	 * Early cancel request
	 *
	 * @todo TODO: rename this method!!!
	 * @todo TODO: write documentation
	 *
	 * @param {Error}   error    The reason the request was cancelled.
	 * @param {module:route4me-node~RequestCallback}    [callback]
	 */
	_makeError(error, callback) {
		const resHandler = new utils.ResponseHandler(
			this._promiseConstructor,
			this._logger,
			this._validate,
			null,
			callback
		)

		setTimeout(() => {
			resHandler.fail(error)
		}, 0)

		return resHandler.getPromise()
	}
}

module.exports = RequestManager
