"use strict"

// const path     = require("path")
const request  = require("superagent")
const debug    = require("debug")("route4me")
const platform = require("platform")

const Addresses       = require("./resources/addresses")
const AddressBook     = require("./resources/address-book")
const AvoidanceZones  = require("./resources/avoidance-zones")
const Geocoding       = require("./resources/geocoding")
const Members         = require("./resources/members")
const Notes           = require("./resources/notes")
const Optimizations   = require("./resources/optimizations")
const Routes          = require("./resources/routes")
const Territories     = require("./resources/territories")
const Tracking        = require("./resources/tracking")
const Vehicles        = require("./resources/vehicles")

const packageJson     = require("./../package.json")  // eslint-disable-line import/no-dynamic-require
const utils           = require("./utils")
const errors          = require("./errors")

/**
 * Route4Me main SDK class
 */
class Route4Me {
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
		const opt = {}

		opt["baseUrl"]  = utils.get(options, "baseUrl", "https://route4me.com")
		opt["logger"]   = utils.get(options, "logger",   utils.noopLogger)
		opt["promise"]  = utils.get(options, "promise",  false)
		opt["validate"] = utils.get(options, "validate", false)

		// TODO: make a decision, whether this param could be configured
		opt["userAgent"] = `superagent/3.3.2 (${platform.name} ${platform.version}; Route4Me-${platform.name}/${Route4Me.version}) ${platform.description}`

		debug("init", opt)
		debug("version", Route4Me.version)

		if (!apiKey) {
			throw new errors.Route4MeError("'apiKey' is not set")
		}

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

		/**
		 * **AddressBook** related API calls
		 * @type {AddressBook}
		 * @since 0.1.8
		 */
		this.AddressBook = new AddressBook(this)
		/**
		 * **Addresses** related API calls
		 * @type {Addresses}
		 * @since 0.1.8
		 */
		this.Addresses = new Addresses(this)
		/**
		 * **AvoidanceZones** related API calls
		 * @type {AvoidanceZones}
		 * @since 0.1.8
		 */
		this.AvoidanceZones = new AvoidanceZones(this)
		/**
		 * **Geocoding** related API calls
		 * @type {Geocoding}
		 * @since 0.1.9
		 */
		this.Geocoding = new Geocoding(this)
		/*
		 * **Members** related API calls
		 * @type {Members}
		 * @since 0.1.8
		 */
		this.Members = new Members(this)
		/**
		 * **Notes** related API calls
		 * @type {Notes}
		 * @since 0.1.9
		 */
		this.Notes = new Notes(this)
		/**
		 * **Optimizations** related API calls
		 * @type {Optimizations}
		 */
		this.Optimizations = new Optimizations(this)
		/**
		 * **Routes** related API calls
		 * @type {Routes}
		 * @since 0.1.8
		 */
		this.Routes = new Routes(this)
		/**
		 * **Territories** related API calls
		 * @type {Territories}
		 */
		this.Territories = new Territories(this)
		/**
		 * **Tracking** related API calls
		 * @type {Tracking}
		 */
		this.Tracking = new Tracking(this)
		/**
		 * **Vehicles** related API calls
		 * @type {Vehicles}
		 */
		this.Vehicles = new Vehicles(this)

		this._logger.debug({ msg: "initialized", version: Route4Me.version })
	}

	/**
	 * Version of this API client
	 *
	 * @since 0.1.3
	 *
	 * @return {string} Version
	 * @static
	 * @readonly
	 */
	static get version() {
		return packageJson.version
	}

	/**
	 * Wrapper around {@link external:superagent} with all options applied.
	 *
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

module.exports = Route4Me
