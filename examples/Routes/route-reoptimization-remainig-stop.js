"use strict"

const path = require("path")
const debug = require("debug")("route4me-node:examples")
const chai = require("chai")

require("../init-examples-suite")
const helper  = require("./../../test/helper")

helper.describeIntegration(helper.toSuiteName(__filename), function T() {
	this.timeout(5000)
	this.slow(3000)
	it(path.basename(__filename), (done) => {
		// const Route4Me = require("route4me-node")
		const expect = chai.expect
		const apiKey   = "11111111111111111111111111111111"
		const route4me = new Route4Me(apiKey)

		const routeId = "8E20987CCC7CC8943FB279BBD8E5D226"
		route4me.Routes.reoptimizationRemainigStop(routeId, (err, route) => {
			debug("error  ", err)
			debug("result ", route)

			// Expectations about result
			expect(err).is.null
			expect(route).exist

		})
		
		done()
	})
})
