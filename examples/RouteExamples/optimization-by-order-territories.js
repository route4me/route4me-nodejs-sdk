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
        const today = new Date()

		const optParam = {		
            "addresses": [
                {
                  "address"   : "1218 Ruth Ave, Cuyahoga Falls, OH 44221",
                  "is_depot"         : true,
                  "lat"        : 41.135762259364,
                  "lng"       : -81.629313826561,
                  "time"            : 300,
                  "time_window_start" : 29465,
                  "time_window_end"   : 30529
                }
            ],
            "redirect"	 : false,
            // The territory IDs are taken from the test account- to run the test on your PC, put your territory IDs.
            // "order_territories":
            // {
            //     "split_territories": true,
            //     "territories_id": "5E66A5AFAB087B08E690DFAE4F8B151B",
            //     "filters": { "display": "all", "scheduled_for_YYMMDD": "2021-09-21" }
            // },
			"parameters": {
				"algorithm_type": 3,
                "route_name": "Optimization by order territories, " + today.toUTCString(),
                "is_dynamic_start_time": false,
                "optimize": "Time",
                "ignore_tw": false,
                "parts": 10,
                "rt": false,
                "lock_last": false,
                "disable_optimization": false,
                "vehicle_id": ""
			},
            "depots": [
            {
                "alias": "HQ1",
                "address" : "1010 N Florida ave, Tampa, FL",
                "is_depot": true,
                "lat": 27.952941,
                "lng": -82.459493,
                "time": 0
            }
            ]
		}
		
		route4me.Routes.routeexamples_optiomization(optParam, (err, route) => {
			debug("error  ", err)
			debug("result ", route)
			expect(err).is.null
			expect(route).exist
			console.log(route)
		})
		// TODO: remove `done` call from examples
		done()
	})
})
