"use strict"

const request  = require("superagent")
const debug    = require("debug")("route4me")
const _        = require("lodash")
const platform = require("platform")

const Addresses       = require("./resources/addresses")
const AddressBook     = require("./resources/address-book")
const AvoidanceZones  = require("./resources/avoidance-zones")
const Optimizations   = require("./resources/optimizations")
const Routes          = require("./resources/routes")
const Territories     = require("./resources/territories")
const Vehicles        = require("./resources/vehicles")

const packageJson     = require("./../package.json")
const utils           = require("./utils")
const errors          = require("./errors")

/**
 * Route4Me main SDK class
 */
class Route4Me {
	/**
	 * Create new API client
	 * @param  {string}  apiKey API KEY
	 * @param  {object}  [options] Additional options for new instance
	 * @param  {string}  [options.baseUrl="https://route4me.com"] Base URL for sending requests
	 * @param  {ILogger} [options.logger]  Logger facility
	 * @param  {module:route4me-node~ValidationCallback} [options.validate=false]
	 * Validator for input and output parameters of the API methods. Set **falsey**
	 * value to skip autovalidation (in favor of manual check).
	 * @return {Route4Me}                  New API client
	 */
	constructor(apiKey, options) {
		const opt = {}
		_.defaults(opt, options, {
			"baseUrl": "https://route4me.com",
			"logger": utils.noopLogger,
			"validate": false,
		})

		// TODO: make a decision, whether this param could be configured
		opt.userAgent = `superagent/3.3.2 (${platform.name} ${platform.version}; Route4Me-${platform.name}/${Route4Me.version}) ${platform.description}`

		debug("init", opt)
		debug("version", Route4Me.version)

		if (!apiKey) {
			throw new errors.Route4MeError("'apiKey' is not set")
		}

		this._apiKey = apiKey
		this._baseUrl = opt.baseUrl
		this._userAgent = opt.userAgent

		this._logger = opt.logger
		this._validate = typeof opt.validate === "function" ? opt.validate : ix => ix

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
		 * @type {Vehicles}
		 */
		this.Territories = new Territories(this)
		/**
		 * **Vehicles** related API calls
		 * @type {Vehicles}
		 */
		this.Vehicles = new Vehicles(this)

		this._logger.debug({ msg: "initialized" })
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
	 *        * `null` cause validation disabled (TODO: test this case)
	 *        * `string` is threated as the name of JSON Schema
	 *        * `function` will be used for validation.
	 * @param {module:route4me-node~RequestCallback}    [callback]
	 */
	_makeRequest(options, callback) {
		const apiUrl = `${this._baseUrl}${options.path}`
		const qs = options.qs ||  {} /* query string */
		const body = options.body || null // {} /* body */
		const timeouts = {
			response: 5000,  // Wait 5 seconds for the server to start sending,
			deadline: 10000, // but allow 10 seconds to finish loading.
		}
		let method = options.method.toLowerCase()
		if (method === "delete") {
			method = "del"
		}

		let vld = this._validate
		let vctx = options.validationContext || null
		if (typeof vctx === "function") {
			vld = vctx
			vctx = true
		}

		qs["api_key"] = this._apiKey

		const resHandler = new utils.ResponseHandler(this._logger, vld, vctx, callback)

		debug("sending request", apiUrl, qs)
		this._logger.info({ msg: "sending request", "url": apiUrl, "queryString": qs })
		request[method](apiUrl)
			.set("User-Agent", this._userAgent)
			.query(qs)
			.timeout(timeouts)
			.send(body)
			.type("application/json")
			.accept("application/json")
			.redirects(1000)	// unlimited number of redirects
			.end((err, res) => resHandler.callback(err, res))
	}
}

module.exports = Route4Me
