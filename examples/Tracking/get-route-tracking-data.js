"use strict"

const path = require("path")
const debug = require("debug")("route4me-node:examples")

require("../init-examples-suite")
const helper  = require("./../../test/helper")

helper.describeIntegration(helper.toSuiteName(__filename), function T() {
	this.timeout(5000)
	this.slow(3000)
	it(path.basename(__filename), (done) => {
		// const Route4Me = require("route4me-node")

		const apiKey   = "11111111111111111111111111111111"
		const route4me = new Route4Me(apiKey)

		const routeId = "32F63FD03B08A5754CF2D516198FC8BA"
		const options = { includeTracking: true }

		route4me.Routes.get(routeId, options, (err, route) => {
			debug("error  ", err)
			debug("result ", route)

			// Expectations about result
			expect(err).is.null

			expect(route).is.not.empty
			expect(route).has.property("route_id", "32F63FD03B08A5754CF2D516198FC8BA")
			expect(route).has.property("tracking_history")
				.that.is.an("array")

			// TODO: remove `done` call from examples
			done()
		})
	})
})
