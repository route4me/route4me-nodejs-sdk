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
		const opt_id = "0613EF353999F43E17B17DD07DDED59E"
		const opt_data = {
			"parameters": {
				"algorithm_type": 1,
				"member_id" : 2126837,
				"device_type": "web",
				"distance_unit": "mi",
				"optimize": "Distance",
				"route_max_duration": 86400,
				"route_time": 0,
				"store_route": "true",
				"travel_mode": "Driving",
				"vehicle_capacity": 1,
				"vehicle_max_distance_mi": 10000
			}
		}
		route4me.Optimizations.update(opt_id, opt_data, (err, optimization) => {
			debug("error  ", err)
			debug("result ", optimization)

			// Expectations about result
			expect(err).is.null

			expect(optimization).exist

			console.log(optimization)

		})
		// TODO: remove `done` call from examples
		done()
	})
})
