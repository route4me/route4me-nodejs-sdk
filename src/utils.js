"use strict"

const debug   = require("debug")("route4me")

const errors  = require("./errors")

/**
 * ILogger interface
 *
 * @interface ILogger
 * @public
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
		const cb = typeof callback !== "function" ? x => x : callback
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
		data = this._validate(data, this._validateContext)
		if (data instanceof errors.Route4MeError) {
			this._logger.warn({ "msg": "response validation error", "err": data })
			return this._cb(data, null)
		} else if (data instanceof Error) {
			this._logger.error({ "msg": "Unhandled error during validation", "err": data, "fatal": true })
			return this._cb(data, null)
		}

		this._logger.info({ "msg": "response ok" })
		return this._cb(null, data)
	}

	_handleError(err, res) {
		let e = null
		debug("response error")

		e = new errors.Route4MeApiError(err.message, res, err)

		this._logger.warn({ "msg": "response error", "err": e })
		return this._cb(e)
	}
}

function clone(obj) {
	return JSON.parse(JSON.stringify(obj))
}

/*
=============================
TYPECONV
=============================
 */
function uniq(arr) {
	const uq = {}
	const res = []
	arr.forEach((i) => {
		if (!(i in uq)) {
			uq[i] = true
			res.push(i)
		}
	})
	return res
}

function toStringArray(arg, trim) {
	let a = arg

	if (typeof a === "number") {
		return [`${a}`]
	}

	if (typeof a === "string") {
		if (trim !== false) {
			a = a.trim().split(/[,\s]+/)
		} else {
			a = a.split(/,+/)
		}
	}

	if (Array.isArray(a)) {
		a = a
			.map(x => `${x}`)

		return a
	}

	throw new errors.Route4MeError("Argument is not a number OR CSV-string OR string OR array")
}

function toIntArray(arg) {
	let a = arg
	if (typeof a === "number") {
		return [a]
	}

	if (typeof a === "string") {
		a = a.split(/[,\s]+/)
	}

	if (Array.isArray(a)) {
		a = a
			.map(x => Number(x))
			.filter(x => typeof x === "number")

		return a
	}

	throw new errors.Route4MeError("Argument is not a number OR CSV-string OR string OR array")
}

function toOptimizationStatesSafe(states) {
	function _isInStateRange(state) {
		if (state < 1) return false
		if (state > 6) return false
		return true
	}

	let arr
	try {
		arr = toIntArray(states)
	} catch (err) {
		if (err instanceof errors.Route4MeError) {
			return err
		}
		throw err
	}

	arr = uniq(arr.filter(_isInStateRange))

	return arr.join(",")
}

exports.noopLogger = new ILogger()
exports.ResponseHandler = ResponseHandler

exports.clone = clone
exports.toStringArray = toStringArray
exports.toIntArray = toIntArray
exports.toOptimizationStatesSafe = toOptimizationStatesSafe
