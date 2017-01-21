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
		const cb = typeof callback !== "function" ?
			noop :
			callback

		this._logger = logger
		this._cb = cb
	}

	req(err, res) {
		// debug('this', this)
		// debug('err', err)
		// debug('res', res)

		debug("response accepted")

		let e = null
		let data = null

		if (err) {
			if (err.status >= 400) {
				e = new errors.Route4MeError(err.message, res, err)
			} else {
				e = new errors.Route4MeError(err.message, res, err)
			}
			this._logger.error("response error")
		} else {
			this._logger.info("response ok")
			data = res
		}

		this._cb(e, data)
	}
}

module.exports.noop = noop
module.exports.noopLogger = new NoopLogger()
module.exports.ResponseHandler = ResponseHandler
