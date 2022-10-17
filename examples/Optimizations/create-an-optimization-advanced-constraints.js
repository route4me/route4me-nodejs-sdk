"use strict"

/////////////////////////////////////////////////////////
// Driver's Time Shift 
//
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

		const parameters = {
			algorithm_type: 9,					// ADVANCED_CVRP_TW,
			store_route: false,
			rt: true,
			parts: 3,
			route_name: "Driver Shift Example",
			route_time: 0,
			optimize: "Distance",
			distance_unit: "mi",
			device_type: "web",
			travel_mode: "Driving",
			vehicle_capacity: 100,
			vehicle_max_distance_mi: 10000,
			route_max_duration: 86400,
			advanced_constraints: [{
					max_cargo_volume: 0.0,
					max_capacity: 200,
					members_count: 2,
					available_time_windows: [[25200, 75000]],
					tags: ["TAG001", "TAG002"],
				}, {
					max_cargo_volume: 0.0,
					max_capacity: 500,
					members_count: 3,
					available_time_windows: [[45200, 55000], [62000, 85000]],
					tags: ["TAG003"],
				}
			]
		};
		
		const addresses = [{ 
				address: "1407 MCCOY, Louisville, KY, 40215",
				lat: 38.202496,
				lng: -85.786514,
				time: 300,
				tags: ["TAG001", "TAG002"]
			}, { 
				address: "730 CECIL AVENUE, Louisville, KY, 40211",
				lat: 38.248684,
				lng: -85.821121,
				time: 300,
				tags: ["TAG001", "TAG002"]
			}, { 
				address: "4629 HILLSIDE DRIVE, Louisville, KY, 40216",
				lat: 38.176067,
				lng: -85.824638,
				time: 300,
				tags: ["TAG003"],
				time_window_start: 41348,
				time_window_end: 42261
			}
		];
		
		const depots = [{
			address: "1604 PARKRIDGE PKWY, Louisville, KY, 40214",
			is_depot: true,
			lat: 38.141598,
			lng: -85.793846,
			time: 300
		}];
		
		route4me.Optimizations.createWithAdvancedConstraints({ parameters, addresses, depots }, (err, optimization) => {
			debug("error  ", err)
			debug("result ", optimization)
			
			expect(err).is.null
			expect(optimization).exist
			console.log(optimization)
		});
		// TODO: remove `done` call from examples
		done()
	})
})
