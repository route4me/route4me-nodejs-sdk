"use strict"

const debug   = require("debug")("route4me")
const _       = require("lodash")

const errors  = require("./errors")

/**
 * ILogger interface
 *
 * @interface ILogger
 */
class ILogger {
	/**
	 * @typedef ILogger~LoggerParams
	 * @property {string} [msg] Message to log
	 * @property {Error}  [err] Error object, if error occured
	 */

	/**
	 * Debug
	 * @param {ILogger~LoggerParams|Error|string} [arg]    Something to log
	 */
	debug(arg) {}    // eslint-disable-line class-methods-use-this, no-unused-vars
	/**
	 * Info
	 * @param {ILogger~LoggerParams|Error|string} [arg]    Something to log
	 */
	info(arg) {}     // eslint-disable-line class-methods-use-this, no-unused-vars
	/**
	 * Warning
	 * @param {ILogger~LoggerParams|Error|string} [arg]    Something to log
	 */
	warn(arg) {}     // eslint-disable-line class-methods-use-this, no-unused-vars
	/**
	 * Error
	 * @param {ILogger~LoggerParams|Error|string} [arg]    Something to log
	 */
	error(arg) {}    // eslint-disable-line class-methods-use-this, no-unused-vars
}

class ResponseHandler {
	constructor(logger, validate, validateContext, callback) {
		const cb = typeof callback !== "function" ? _.noop : callback
		this._logger = logger
		this._cb = cb

		this._validate = validate
		this._validateContext = validateContext
	}

	callback(err, res) {
		if (err) {
			return this._handleError(err, res)
		}
		return this._handleOk(res)
	}

	_handleOk(res) {
		debug("response ok")

		let data = res.body

		if (this._validateContext) {
			data = this._validate(data, this._validateContext)
			if (data instanceof Error) {
				this._logger.error({ "msg": "response validation error", "err": data })
				return this._cb(data, null)
			}
		}
		this._logger.info({ "msg": "response ok" })
		return this._cb(null, data)
	}

	_handleError(err, res) {
		let e = null
		debug("response error")

		e = new errors.Route4MeApiError(err.message, res, err)

		this._logger.error({ "msg": "response error", "err": e })
		return this._cb(e)
	}
}

function parseStates(states) {
	function _isInStateRange(state) {
		return _.inRange(state, 1, 6)
	}

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

exports.noopLogger = new ILogger()
exports.ResponseHandler = ResponseHandler
exports.qsLimitAndOffset = qsLimitAndOffset
exports.parseStates = parseStates
