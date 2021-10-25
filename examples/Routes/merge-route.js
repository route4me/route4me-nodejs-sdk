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

		const routeIds = "56E8F6BF949670F0C0BBAC00590FD116 ,  A6DAA07A7D4737723A9C85E7C3BA2351"
		route4me.Routes.merge(routeIds, (err, route) => {
			debug("error  ", err)
			debug("result ", route)

			// Expectations about result
			expect(err).is.null
			expect(route).is.null
			//expect(route).has.property("route_id", "C896D0DB99C57B483D9F51B97260DCB5")

			// TODO: remove `done` call from examples
			done()
		})
	})
})
