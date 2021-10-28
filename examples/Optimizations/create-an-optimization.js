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
		const optParam = {
			"addresses": [
				{
				"lng": -85.786514,
				"lat": 38.202496,
				"is_depot": false,
				"time": 300,
				"sequence_no": 2,
				"address": "1407 MCCOY, Louisville, KY, 40215"
			  },
			  {
				"lng": -85.774864,
				"lat": 38.178844,
				"is_depot": false,
				"time": 300,
				"sequence_no": 3,
				"address": "4805 BELLEVUE AVE, Louisville, KY, 40215"
			  },
			  {
				"lng": -85.821121,
				"lat": 38.248684,
				"is_depot": false,
				"time": 300,
				"sequence_no": 4,
				"address": "730 CECIL AVENUE, Louisville, KY, 40211"
			  },
			  {
				"lng": -85.800034,
				"lat": 38.251923,
				"is_depot": false,
				"time": 300,
				"sequence_no": 5,
				"address": "650 SOUTH 29TH ST UNIT 315, Louisville, KY, 40211"
			  },
			  {
				"lng": -85.824638,
				"lat": 38.176067,
				"is_depot": false,
				"time": 300,
				"sequence_no": 6,
				"address": "4629 HILLSIDE DRIVE, Louisville, KY, 40216"
			  },
			  {
				"lng": -85.775558,
				"lat": 38.179806,
				"is_depot": false,
				"time": 300,
				"sequence_no": 7,
				"address": "4738 BELLEVUE AVE, Louisville, KY, 40215"
			  }
			],
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
		
		route4me.Optimizations.create(optParam, (err, optimization) => {
			debug("error  ", err)
			debug("result ", optimization)
			
			expect(err).is.null
			expect(optimization).exist
			console.log(optimization)

		})
		// TODO: remove `done` call from examples
		done()
	})
})
