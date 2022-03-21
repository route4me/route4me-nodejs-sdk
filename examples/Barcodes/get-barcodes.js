"use strict"

const path = require("path")
const chai = require("chai")
const debug = require("debug")("route4me-node:examples")
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
        
		const routeId = "893E6C33F0494572DEB2FAE34B2D3E0B"
		const routeDestinationId = 705601646
		const limit = 10;

		route4me.AddressBarcodes.get(routeId, routeDestinationId, limit, (err, res) => {
			debug("error  ", err)
			debug("result ", res)
			expect(err).is.null
			expect(res).exist
			console.log(res)
		})
		// TODO: remove `done` call from examples
		done()
	})
})
