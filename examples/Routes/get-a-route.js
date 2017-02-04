"use strict"

const path = require("path")
const debug = require("debug")("route4me-node")

require("../init-examples-suite")
const helper  = require("./../../test/helper")

helper.describeIntegration(path.basename(__dirname), function T() {
	this.timeout(5000)
	this.slow(3000)
	it(path.basename(__filename), (done) => {

		// const Route4Me = require("route4me-node")

		const apiKey   = "11111111111111111111111111111111"
		const route4me = new Route4Me(apiKey)

		const routeId = "C896D0DB99C57B483D9F51B97260DCB5"
		route4me.Routes.get(routeId, (err, route) => {
			debug("error  ", err)
			debug("result ", route)

			expect(route).has.property("route_id", "C896D0DB99C57B483D9F51B97260DCB5")

			// TODO: remove `done` call from examples
			done()
		})

	})
})
