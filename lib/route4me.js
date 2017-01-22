"use strict"

const os      = require("os")
const request = require("superagent")
const debug   = require("debug")("route4me")
const _       = require("lodash")

// const Track                 = require("./resources/track")
// const Route                 = require("./resources/route")
// const OptimizationProblem   = require("./resources/optimization_problem")
// const Order                 = require("./resources/order")

const packageJson     = require("./../package.json")
const utils           = require("./utils")
const errors          = require("./errors")

/**
 * Route4Me main SDK class
 */
class Route4Me {
	constructor(apiKey, options) {
		const opt = {}
		_.defaults(opt, options, {
			"baseUrl": "https://route4me.com",
			"logger": utils.noopLogger,
		})

		// TODO: make a decision, whether this param could be configured
		opt.userAgent = `superagent/3.3.2 (${os.type()}; Route4Me Node/${Route4Me.version})`

		debug("init", opt)
		debug("version", Route4Me.version)

		if (!apiKey) {
			throw new errors.Route4MeError("ApiKey is not set")
		}

		this._apiKey = apiKey
		this._baseUrl = opt.baseUrl
		this._logger = opt.logger
		this._userAgent = opt.userAgent

		this._logger.debug("initialized")
	}

	static get version() {
		return packageJson.version
	}

	_makeRequest(options, cb) {
		const method = options.method.toLowerCase()
		const apiUrl = `${this._baseUrl}/${options.path}`
		const qs = options.qs || null // {} /* query string */
		const body = options.body || null // {} /* body */
		const timeouts = {
			response: 1000,  // Wait 1 second for the server to start sending,
			deadline: 2000,  // but allow 10 minute  to finish loading.
		}

		const resHandler = new utils.ResponseHandler(this._logger, cb)

		debug("sending request", apiUrl, qs)
		this._logger.info("sending request", apiUrl, qs)

		request[method](apiUrl)
			.set("User-Agent", this._userAgent)
			.query("api_key", this._apiKey)
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
