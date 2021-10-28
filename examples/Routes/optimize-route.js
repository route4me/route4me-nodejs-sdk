"use strict"

const path = require("path")
const debug = require("debug")("route4me-node:examples")
const chai = require("chai")
require("../init-examples-suite")
const helper  = require("../../test/helper")

helper.describeIntegration(helper.toSuiteName(__filename), function T() {
	this.timeout(5000)
	this.slow(3000)
	it(path.basename(__filename), (done) => {
		// const Route4Me = require("route4me-node")
		const expect = chai.expect
		const apiKey   = "11111111111111111111111111111111"
		const route4me = new Route4Me(apiKey)
		const id = "5C15E83A4BE005BCD1537955D28D51D7"
		const routeId = "241466F15515D67D3F951E2DA38DE76D"
		const criteria = "Distance"

		route4me.Routes.optimize(routeId, criteria, (err, routes) => {
			debug("error  ", err)
			debug("result ", routes)

			// Expectations about result
			expect(err).is.null
			expect(routes).exist
			
		})
		// TODO: remove `done` call from examples
		done()
	})
})
