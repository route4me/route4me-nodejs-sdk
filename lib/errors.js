class Route4MeError extends Error {
	constructor(msg, res, causedByError) {
		super(msg)

		this.name = "Route4MeError"

		if (res) {
			this.apiErrorDetails = {
				"statusCode": res.statusCode,
				"path": res.request.url,
			}
		} else {
			this.apiErrorDetails = null
		}
	}
}

module.exports.Route4MeError = Route4MeError
