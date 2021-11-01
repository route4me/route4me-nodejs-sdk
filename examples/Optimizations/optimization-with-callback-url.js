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

		const optimization = {
			optimized_callback_url: 'https://example_domain_com/callback_url',
			addresses: [
				{
					"lng": -85.786514,
					"lat": 38.202496,
					"is_depot": false,
					"time": 300,
					"sequence_no": 1,
					"address": "1407 MCCOY, Louisville, KY, 40215"
				},
				{
					"lng": -85.774864,
					"lat": 38.178844,
					"is_depot": false,
					"time": 300,
					"sequence_no": 2,
					"address": "4805 BELLEVUE AVE, Louisville, KY, 40215"
				}
				
			],
			"parameters": {
				"lock_last":false,
				"travel_mode": "Driving",
				"optimize": "Distance", 
				"algorithm_type": 3,
				"route_time": 21600,
				"route_max_duration": 128000,
				"metric": 4,
				"vehicle_capacity": 160,
				"vehicle_max_distance_mi": 1000000
			 }
		}
		route4me.Optimizations.create(optimization, (err, optimization) => {
			debug("error  ", err)
			debug("result ", optimization)

			// Expectations about result
			expect(err).is.null
			expect(optimization).has.property("optimization_problem_id")

		})
		
		done()
	})
})
