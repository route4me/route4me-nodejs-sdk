"use strict"

// const path     = require("path")
const debug    = require("debug")("route4me")
const request  = require("superagent")

const errors          = require("./errors")

class ResponseHandler {
	constructor(PromiseConstructor, logger, validate, validateContext, callback) {
		const cb = "function" !== typeof callback ? x => x : callback
		this._logger = logger

		this._validate = validate
		this._validateContext = validateContext

		if (PromiseConstructor) {
			const self = this
			this._p = new PromiseConstructor((res, rej) => {
				self._res = res
				self._rej = rej
			})
		} else {
			this._p = undefined
			this._res = res => cb(null, res)
			this._rej = err => cb(err)
		}
	}

	callback(err, res) {
		if (err) {
			return this._handleError(err, res)
		}
		return this._handleOk(res)
	}

	fail(err) {
		return this._rej(err)
	}

	getPromise() {
		return this._p
	}

	_handleOk(res) {
		debug("response ok")

		const data = this._validate(res.body, this._validateContext, res)

		if (data instanceof errors.Route4MeError) {
			// TODO: include url and method to the log message
			this._logger.warn({ "msg": "response validation error", "err": data })
			return this.fail(data)
		} else if (data instanceof Error) {
			// TODO: include url and method to the log message
			this._logger.error({ "msg": "Unhandled error during validation", "err": data, "fatal": true })
			return this.fail(data)
		}

		// TODO: include url and method to the log message
		this._logger.info({ "msg": "response ok" })
		return this._res(data)
	}

	_handleError(err, res) {
		debug("response error")
		const e = new errors.Route4MeApiError(err.message, res, err)

		// TODO: include url and method to the log message
		this._logger.warn({ "msg": "response error", "err": e })
		return this.fail(e)
	}
}

/**
 * Request manager, provides
 * * simple API for sending HTTP requests
 * * a way to handle HTTP responses
 *
 * @since 0.1.0
 *
 * @protected
 */
class RequestManager {
	/**
	 * Creates new RequestManager. All parameters are inherited from {Route4Me}
	 *
	 * @param {object} apiKey  - see {Route4Me}
	 * @param {object} options - see {Route4Me}
	 * @return {RequestManager} - New Request Manager
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

		const resHandler = new ResponseHandler(
			this._promiseConstructor,
			this._logger,
			v,
			c,
			callback
		)

		// debug only!
		// qs["oldUrl"] = apiUrl
		// apiUrl = "https://httpbin.org/get"

		const req = request[method](apiUrl)
			.set("Route4Me-User-Agent", this._userAgent)
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
		const resHandler = new ResponseHandler(
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
