"use strict"

const path = require("path")
const debug = require("debug")("route4me-node:examples")

require("../init-examples-suite")
const helper  = require("../../test/helper")

helper.describeIntegration(helper.toSuiteName(__filename), function T() {
	this.timeout(5000)
	this.slow(3000)
	it(path.basename(__filename), (done) => {
		// const Route4Me = require("route4me-node")

		const apiKey   = "11111111111111111111111111111111"
		const route4me = new Route4Me(apiKey, {
			// this option change the behavior of the entire route4me
			// package: instead of callback-usage, all SDK methods will
			// return PROMISE, created by choosen library
			promise: require("bluebird")		// eslint-disable-line global-require, import/no-extraneous-dependencies
		})

		const address = "Los Angeles International Airport, CA"

		route4me.Geocoding.forward(address)
			.then((coordinates) => {
				debug("result ", coordinates)

				expect(coordinates).is.not.empty
				expect(coordinates).to.have.length.at.least(1)				
			})
			.catch((err) => {
				// should never be called!
				expect(err).is.null
				debug("error  ", err)
			})
		done()	
	})
})
