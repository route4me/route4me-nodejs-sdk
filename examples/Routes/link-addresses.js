"use strict"

const path = require("path")
const debug = require("debug")("route4me-node:examples")

require("../init-examples-suite")
const helper  = require("../../test/helper")
const chai = require("chai")
helper.describeIntegration(helper.toSuiteName(__filename), function T() {
	this.timeout(5000)
	this.slow(3000)
	it(path.basename(__filename), (done) => {
		// const Route4Me = require("route4me-node")
		const expect = chai.expect
		const apiKey   = "11111111111111111111111111111111"
		const route4me = new Route4Me(apiKey)
		const addresses = [
			{
				"address": "Cabo Rojo, Cabo Rojo 00623, Puerto Rico",
				"alias": "",
				"lat": 18.086627,
				"lng": -67.145735,
				"curbside_lat": 18.086627,
				"curbside_lng": -67.145735,
				"contact_id": null,
				"sequence_no": 14,
				"is_departed": false,
				"is_visited": false
			}
		]
		const options = {
			optimalPosition: true,
		}

		route4me.Routes.linkAddress("5C15E83A4BE005BCD1537955D28D51D7", addresses, options, (err, routes) => {
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
