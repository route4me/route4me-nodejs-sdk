"use strict"

const path = require("path")
const debug = require("debug")("route4me-node:examples")
const chai = require('chai')
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

		const routeId = "3A2DD89E6E1A044B2098AD1313E3138C"
		const email = "noreply@route4me.com"

		route4me.Routes.share(routeId, email, (err, nothing) => {
			debug("error  ", err)
			debug("result ", nothing)

			// Expectations about result
			expect(err).is.null

			expect(nothing).true

		})
		// TODO: remove `done` call from examples
		done()
	})
})
