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

// ( added by 0x000f, 20220910
// bc superagent has hardcoded "indices: false" it prevent to have array indexes in query string
// also added dependencies to project 'cookiejar' and 'qs'
// use in request-manager.js RequestManager._makeRequest()

/* eslint-disable func-names, yoda, no-new-object, no-param-reassign, no-var, vars-on-top,
global-require, prefer-destructuring, prefer-arrow-callback, no-plusplus, no-return-assign,
no-func-assign, eqeqeq, no-shadow, no-sequences, no-restricted-syntax */
function patchRequest(Request) {
	const parse = require("url").parse
	const qs = require("qs")
	const https = require("https")
	const http = require("http")
	const CookieJar = require("cookiejar")

	const exports = {
		protocols: {
			"http:": http,
			"https:": https,
			"http2:": null		// TODO: add http2
		}
	}

	const hasOwn = Object.hasOwn || function (object, property) {
		if (object == null) {
			throw new TypeError("Cannot convert undefined or null to object")
		}
		return Object.prototype.hasOwnProperty.call(new Object(object), property)
	}

	function _typeof(obj) {
		"@babel/helpers - typeof"

		return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
			? function (obj) {
				return typeof obj
			}
			: function (obj) {
				return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
			}, _typeof(obj)
	}

	Request.request = function () {
		var _this4 = this

		if (this.req) return this.req
		var options = {}

		try {
			var query = qs.stringify(this.qs, {
				// ( changed by 0x000f
				// indices: false,
				indices: true,
				// changed by 0x000f )
				strictNullHandling: true
			})

			if (query) {
				this.qs = {}

				this._query.push(query)
			}

			this._finalizeQueryString()
		} catch (err) {
			return this.emit("error", err)
		}

		var url = this.url
		var retries = this._retries // Capture backticks as-is from the final query string built above.
		// Note: this'll only find backticks entered in req.query(String)
		// calls, because qs.stringify unconditionally encodes backticks.

		var queryStringBackticks

		if (url.includes("`")) {
			var queryStartIndex = url.indexOf("?")

			if (queryStartIndex !== -1) {
				var queryString = url.slice(queryStartIndex + 1)
				queryStringBackticks = queryString.match(/`|%60/g)
			}
		} // default to http://

		if (url.indexOf("http") !== 0) url = "http://".concat(url)
		url = parse(url) // See https://github.com/visionmedia/superagent/issues/1367

		if (queryStringBackticks) {
			var i = 0
			url.query = url.query.replace(/%60/g, function () {
				return queryStringBackticks[i++]
			})
			url.search = "?".concat(url.query)
			url.path = url.pathname + url.search
		} // support unix sockets

		if (/^https?\+unix:/.test(url.protocol) === true) {
			// get the protocol
			url.protocol = "".concat(url.protocol.split("+")[0], ":") // get the socket, path

			var unixParts = url.path.match(/^([^/]+)(.+)$/)
			options.socketPath = unixParts[1].replace(/%2F/g, "/")
			url.path = unixParts[2]
		} // Override IP address of a hostname

		if (this._connectOverride) {
			var _url = url
			var hostname = _url.hostname
			var match = hostname in this._connectOverride ? this._connectOverride[hostname] : this._connectOverride["*"]

			if (match) {
				// backup the real host
				if (!this._header.host) {
					this.set("host", url.host)
				}

				var newHost
				var newPort

				if (_typeof(match) === "object") {
					newHost = match.host
					newPort = match.port
				} else {
					newHost = match
					newPort = url.port
				} // wrap [ipv6]

				url.host = /:/.test(newHost) ? "[".concat(newHost, "]") : newHost

				if (newPort) {
					url.host += ":".concat(newPort)
					url.port = newPort
				}

				url.hostname = newHost
			}
		} // options

		options.method = this.method
		options.port = url.port
		options.path = url.path
		options.host = url.hostname
		options.ca = this._ca
		options.key = this._key
		options.pfx = this._pfx
		options.cert = this._cert
		options.passphrase = this._passphrase
		options.agent = this._agent
		options.lookup = this._lookup
		options.rejectUnauthorized = typeof this._disableTLSCerts === "boolean" ? !this._disableTLSCerts : process.env.NODE_TLS_REJECT_UNAUTHORIZED !== "0" // Allows request.get('https://1.2.3.4/').set('Host', 'example.com')

		if (this._header.host) {
			options.servername = this._header.host.replace(/:\d+$/, "")
		}

		if (this._trustLocalhost && /^(?:localhost|127\.0\.0\.\d+|(0*:)+:0*1)$/.test(url.hostname)) {
			options.rejectUnauthorized = false
		} // initiate request

		var module_ = this._enableHttp2 ? exports.protocols["http2:"].setProtocol(url.protocol) : exports.protocols[url.protocol] // request

		this.req = module_.request(options)
		var req = this.req // set tcp no delay

		req.setNoDelay(true)

		if (options.method !== "HEAD") {
			req.setHeader("Accept-Encoding", "gzip, deflate")
		}

		this.protocol = url.protocol
		this.host = url.host // expose events

		req.once("drain", function () {
			_this4.emit("drain")
		})
		req.on("error", function (error) {
			// flag abortion here for out timeouts
			// because node will emit a faux-error "socket hang up"
			// when request is aborted before a connection is made
			// if not the same, we are in the **old** (cancelled) request,
			// so need to continue (same as for above)
			if (_this4._aborted) return

			// if we've received a response then we don't want to let
			// an error in the request blow up the response
			if (_this4._retries !== retries) return

			if (_this4.response) return

			_this4.callback(error)
		}) // auth

		if (url.auth) {
			var auth = url.auth.split(":")
			this.auth(auth[0], auth[1])
		}

		if (this.username && this.password) {
			this.auth(this.username, this.password)
		}

		for (var key in this.header) {
			if (hasOwn(this.header, key)) req.setHeader(key, this.header[key])
		} // add cookies

		if (this.cookies) {
			if (hasOwn(this._header, "cookie")) {
				// merge
				var temporaryJar = new CookieJar.CookieJar()
				temporaryJar.setCookies(this._header.cookie.split(""))
				temporaryJar.setCookies(this.cookies.split(""))
				req.setHeader("Cookie", temporaryJar.getCookies(CookieJar.CookieAccessInfo.All).toValueString())
			} else {
				req.setHeader("Cookie", this.cookies)
			}
		}
		return req
	}
}
/* eslint-disable func-names, yoda, no-new-object, no-param-reassign, no-var, vars-on-top,
global-require, prefer-destructuring, prefer-arrow-callback, no-plusplus, no-return-assign,
no-func-assign, eqeqeq, no-shadow, no-sequences, no-restricted-syntax */

exports.patchRequest = patchRequest
// added by 0x000f, 20220910 )

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
