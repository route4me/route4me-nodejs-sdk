"use strict"

class Route4MeError extends Error {
	constructor(msg, innerError) {
		super(msg)

		this.name = "Route4MeError"
		this.innerError = innerError || null
	}
}

class Route4MeApiError extends Route4MeError {
	constructor(msg, res, innerError) {
		super(msg, innerError)

		this.name = "Route4MeApiError"

		this.statusCode = res.statusCode
		this.apiPath = res.request.url
	}
}

module.exports.Route4MeError = Route4MeError
module.exports.Route4MeApiError = Route4MeApiError
