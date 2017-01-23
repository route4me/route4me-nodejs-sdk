"use strict"

const debug   = require("debug")("route4me")
const _       = require("lodash")

const errors  = require("./errors")

class NoopLogger {
	debug() {}    // eslint-disable-line class-methods-use-this
	info() {}     // eslint-disable-line class-methods-use-this
	warn() {}     // eslint-disable-line class-methods-use-this
	error() {}    // eslint-disable-line class-methods-use-this
}

class ResponseHandler {
	constructor(logger, callback) {
		const cb = typeof callback !== "function" ? _.noop : callback

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

function _isInStateRange(state) {
	return _.inRange(state, 1, 6)
}

function parseStates(states) {
	const t = typeof states
	if (t === "number") {
		if (_isInStateRange(states)) {
			return states.toString()
		}
		return ""
	}

	let arr
	if (t === "string") {
		arr = states.split(/[,\s]+/i)
	} else if (_.isArray(states)) {
		arr = states
	} else {
		return new TypeError(`unexpected type of 'states' argument: ${t}`)
	}

	return _(arr)
		.map(_.toInteger)
		.filter(_isInStateRange)
		.uniq()
		.join(",")
}

function qsLimitAndOffset(qs, limit, offset) {
	if (typeof limit === "number") { qs["limit"] = limit }      // eslint-disable-line no-param-reassign
	if (typeof offset === "number") { qs["offset"] = offset }   // eslint-disable-line no-param-reassign

	return qs
}

module.exports.noopLogger = new NoopLogger()
module.exports.ResponseHandler = ResponseHandler
module.exports.qsLimitAndOffset = qsLimitAndOffset
module.exports.parseStates = parseStates
