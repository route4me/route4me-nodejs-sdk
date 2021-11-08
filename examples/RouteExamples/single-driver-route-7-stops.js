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
        var tomorrow = new Date(today)
        tomorrow.setDate(tomorrow.getDate() + 1)
        var origintime = new Date(1970, 1, 1, 0, 0, 0, 0)
        if (tomorrow < origintime)
            tomorrow = new Date(1970, 1, 1, tomorrow.getUTCHours(), tomorrow.getUTCMinutes(), tomorrow.getUTCSeconds())
        var diffspan = Math.floor((tomorrow.getTime() - origintime.getTime())/ 1000)

		const optParam = {			
			"addresses": [
                { 
                "address" : "128 Woodland Dr, Stafford, VA 22556",
                "is_depot" : true, 
                "alias" : "HQ",
                "lat" : 38.5022586,
                "lng" : -77.5402276
                },
                { 
                "address" : "2232 Aquia Dr, Stafford, VA 22554",
                "lat" : 38.4613311,
                "lng" : -77.3733942,
                "is_depot" : false,
                "alias" : "1",
                "time_window_start" : 32400,
                "time_window_end" : 82800
                },
                { 
                "address" : "94 The Vance Way, Fredericksburg, VA 22405",
                "lat" : 38.343827,
                "lng" : -77.358127,
                "is_depot" : false,
                "alias" : "2",
                "time_window_start" : 32400,
                "time_window_end" : 82800
                },
                { 
                "address" : "3 Edgewood Circle, Fredericksburg, VA 22405",
                "lat" : 38.3560299,
                "lng" : -77.44275,
                "is_depot" : false,
                "alias" : "3",
                "time_window_start" : 32400,
                "time_window_end" : 82800
                },
                { 
                "address" :  "609 Jett St, Fredericksburg, VA 22405",
                "lat" : 38.321677,
                "lng" : -77.434507,
                "is_depot" : false,
                "alias" : "4",
                "time_window_start" : 39600,
                "time_window_end" : 82800
                },
                { 
                "address" :  "1120 Potomac Ave, Fredericksburg, VA 22405",
                "lat" : 38.3115498,
                "lng" : -77.4349647,
                "alias" : "5",
                "time_window_start" : 39600,
                "time_window_end" : 82800
                },
                { 
                "address" :  "10809 Stacy Run, Fredericksburg, VA 22408",
                "lat" : 38.258764,
                "lng" : -77.425318,
                "alias" : "6",
                "time_window_start" : 39600,
                "time_window_end" : 82800
                }
			],
			"parameters": {
				"algorithm_type": 1,
                "route_name": "Test for equal sequences Single Driver Route 7 Stops",
                "disable_optimization": false,
                "member_id": 2126837,
                "route_date": diffspan,
                "route_time": 60 * 60 * 7,
                "route_max_duration": 24 * 3600,
                "travel_mode": "Driving",
                "vehicle_capacity": 1,
				"vehicle_max_distance_mi": 10000,
                "rt": false,
                "optimize": "Distance",
                "distance_unit": "mi",
				"device_type": "web"
			}
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