"use strict"

const request = require("superagent")
const debug   = require("debug")("route4me")
//const _       = require("lodash")

// const Track                 = require("./resources/track")
// const Route                 = require("./resources/route")
// const OptimizationProblem   = require("./resources/optimization_problem")
// const Order                 = require("./resources/order")

const packageJson     = require("./../package.json")
const utils           = require("./utils")
const errors          = require("./errors")

const defaultUserAgent      = "Route4me nodejs sdk"

class Route4Me {
	constructor(apiKey, options) {
		options = options || {}
		options.baseUrl = options.baseUrl || "http://route4me.com"
		options.logger = options.logger || utils.noopLogger

		debug("init", options)
		debug("version", Route4Me.version)

		if (!apiKey) {
			throw new errors.Route4MeError('ApiKey is not set')
		}

		this._apiKey = apiKey
		this._baseUrl = options.baseUrl
		this._logger = options.logger
	}

	static get version() {
		return packageJson.version
	}

	_makeRequest(options, cb) {

		options.method = options.method.toLowerCase()

		const apiUrl = `${this._baseUrl}/api.v4/${options.apiPath}`
		const qs = options.qs || null // {} /* query string */
		const body = options.body || null // {} /* body */
		const timeouts = {
			response: 1000,  // Wait 1 second for the server to start sending,
			deadline: 2000,  // but allow 10 minute  to finish loading.
		}

		const resH = new utils.ResponseHandler(this._logger, cb)

		debug("sending request", apiUrl, qs)
		this._logger.info("sending request", apiUrl, qs)

		request[options.method](apiUrl)
			.set("User-Agent", defaultUserAgent)
			.query("api_key", this._apiKey)
			.query(qs)
			.timeout(timeouts)
			.send(body)
			.type("application/json")
			.accept("application/json")
			.redirects(1000)	// unlimited number of redirects
			.end((err, res) => resH.req(err, res))

		return
	}

	// Section OPTIMIZATIONS
	/**
	 * GET all optimizations belonging to an user.
	 *
	 * {@link https://route4me.io/docs/#get-optimizations      GitHub}
	 *
	 * @param  {(string|Array.<string>)}     state    [description]
	 * @param  {integer}                     limit    [description]
	 * @param  {integer}                     offset   [description]
	 * @param  {Route4Me~requestCallback}    callback [description]
	 * @return {[type]}                               [description]
	 */
	getOptimizations(state, limit, offset, callback) {
		return this._makeRequest({
			"method": "GET",
			"apiPath": "optimization_problem.php"
		}, callback)
	}
}

module.exports = Route4Me
