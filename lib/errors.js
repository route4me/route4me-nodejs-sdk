"use strict"

class Route4MeError extends Error {
	constructor(msg, res, innerError) {
		super(msg)

		this.name = "Route4MeError"
		this.innerError = innerError || null

		if (res) {
			this.apiErrorDetails = {
				statusCode: res.statusCode,
				path: res.request.url,
			}
		} else {
			this.apiErrorDetails = null
		}
	}
}

module.exports.Route4MeError = Route4MeError
