"use strict"

/*
 * @module route4me-node/utils
 * @protected
 */

const debug   = require("debug")("route4me:utils")

const errors  = require("./errors")

/**
 * ILogger interface
 *
 * @interface ILogger
 * @category Route4Me
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
	// eslint-disable-next-line class-methods-use-this, no-unused-vars
	debug(arg) {
	}
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

class CustomInternalPostProcessing {
	/**
	 * status
	 *
	 * @private
	 *
	 * @example
	 * Sample = {
	 * 	"status": true
	 * }
	 *
	 * @param  {Object} data - Internal
	 * @param  {Object} ctx  - Internal
	 * @param  {Object} res  - Internal
	 * @return {boolean}     - Success
	 */
	static fromJsonWithStatus(data, ctx, res) {
		// HACK: currently, API returns 'text/plain', so
		// the response in not parsed automatically
		if ("{\"status\":true}" === res.text) {
			debug("fromJsonWithStatus: HACK for wrong content-type")
			return true
		}

		if (!data || "boolean" !== typeof data["status"]) {
			return new errors.Route4MeValidationError("Invalid response", data)
		}

		if (true === data["status"]) {
			return true
		}

		// TODO: parse real error
		return new errors.Route4MeApiError("Failed", res)
	}

}

/*
=============================
TYPECONV
=============================
 */
function isObject(obj) {
	return null !== obj && "object" === typeof obj
}

function get(obj, prop, def) {
	if (undefined === obj || null === obj) {
		return def
	}

	const val = obj[prop]
	if (undefined === val) {
		return def
	}

	return val
}

function mapObject(obj, map) {
	if (null === obj || undefined === obj) {
		return obj
	}

	const res = {}

	Object.keys(map).forEach((tgt) => {
		const src = map[tgt]
		res[src] = obj[tgt]
	})

	return res
}

/**
 * Deep clone an object
 *
 * @protected
 *
 * @param  {any} obj - Original object
 * @return {any}     - The deep copy of an object
 */
function clone(obj) {
	return JSON.parse(JSON.stringify(obj))
}

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

	if ("number" === typeof a) {
		return [`${a}`]
	}

	if ("string" === typeof a) {
		if (false !== trim) {
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
	if ("number" === typeof a) {
		return [a]
	}

	if ("string" === typeof a) {
		a = a.split(/[,\s]+/)
	}

	if (Array.isArray(a)) {
		a = a
			.map(x => Number(x))
			.filter(x => "number" === typeof x)

		return a
	}

	throw new errors.Route4MeError("Argument is not a number OR CSV-string OR string OR array")
}

function toOptimizationStatesSafe(states) {
	function _isInStateRange(state) {
		if (1 > state) return false
		if (6 < state) return false
		return true
	}

	let arr
	try {
		arr = toIntArray(states)
	} catch (err) {
		return err
	}

	arr = uniq(arr.filter(_isInStateRange))

	return arr.join(",")
}

function toIsoDateString(d) {
	return d.toISOString().substring(0, 10)
}

exports.ILogger = ILogger
exports.CustomInternalPostProcessing = CustomInternalPostProcessing

exports.isObject = isObject
exports.get = get
exports.clone = clone
exports.mapObject = mapObject
exports.toStringArray = toStringArray
exports.toIntArray = toIntArray
exports.toOptimizationStatesSafe = toOptimizationStatesSafe
exports.toIsoDateString = toIsoDateString
