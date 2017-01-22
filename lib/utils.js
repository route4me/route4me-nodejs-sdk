"use strict"

const debug   = require("debug")("route4me")

const errors  = require("./errors")

function noop() {}

class NoopLogger {
	debug() {}    // eslint-disable-line class-methods-use-this
	info() {}     // eslint-disable-line class-methods-use-this
	warn() {}     // eslint-disable-line class-methods-use-this
	error() {}    // eslint-disable-line class-methods-use-this
}

class ResponseHandler {
	constructor(logger, callback) {
		const cb = typeof callback !== "function" ? noop : callback

		this._logger = logger
		this._cb = cb
	}

	callback(err, res) {
		if (err) {
			return this._handleError(err, res)
		}
		return this._handleResult(res)
	}

	_handleResult(res) {
		const data = res
		debug("response ok")

		this._logger.info({ "msg": "response ok" })
		return this._cb(null, data)
	}

	_handleError(err, res) {
		let e = null
		debug("response error")

		if (err.status >= 400) {
			e = new errors.Route4MeApiError(err.message, res, err)
		} else {
			e = new errors.Route4MeApiError(err.message, res, err)
		}

		this._logger.error({ "msg": "response error", "err": e })
		return this._cb(e)
	}
}

module.exports.noop = noop
module.exports.noopLogger = new NoopLogger()
module.exports.ResponseHandler = ResponseHandler
