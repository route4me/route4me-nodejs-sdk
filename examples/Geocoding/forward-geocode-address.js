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

		const apiKey   = "11111111111111111111111111111111"
		const route4me = new Route4Me(apiKey)
		const expect = chai.expect
		const address = "Los Angeles International Airport, CA"

		route4me.Geocoding.forward(address, (err, coordinates) => {
			debug("error  ", err)
			debug("result ", coordinates)

			// Expectations about result
			expect(err).is.null

			expect(coordinates).is.not.empty
			expect(coordinates).to.have.length.at.least(1)			
		})		
		// TODO: remove `done` call from examples
		done()
	})
})
