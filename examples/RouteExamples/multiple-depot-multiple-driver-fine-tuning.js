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
                { "address"   : "3634 W Market St, Fairlawn, OH 44333",
                "is_depot"         : true,
                "lat"        : 41.135762259364,
                "lng"       : -81.629313826561,
                "time"            : 300,
                "time_window_start"  : 28800,
                "time_window_end"    : 29465 },

              { "address"   : "1218 Ruth Ave, Cuyahoga Falls, OH 44221",
                "lat"        : 41.143505096435,
                "lng"       : -81.46549987793,
                "time"            : 300,
                "time_window_start"  : 29465,
                "time_window_end"    : 30529 },

              { "address"   : "512 Florida Pl, Barberton, OH 44203",
                "is_depot"         : true,
                "lat"        : 41.003671512008,
                "lng"       : -81.598461046815,
                "time"            : 300,
                "time_window_start"  : 33479,
                "time_window_end"    : 33944 },

              { "address"   : "3495 Purdue St, Cuyahoga Falls, OH 44221",
                "lat"        : 41.162971496582,
                "lng"       : -81.479049682617,
                "time"            : 300,
                "time_window_start"  : 33944,
                "time_window_end"    : 34801 },

              { "address"   : "1659 Hibbard Dr, Stow, OH 44224",
                "lat"        : 41.194505989552,
                "lng"       : -81.443351581693,
                "time"            : 300,
                "time_window_start"  : 34801,
                "time_window_end"    : 36366 },

              { "address"   : "2705 N River Rd, Stow, OH 44224",
                "lat"        : 41.145240783691,
                "lng"       : -81.410247802734,
                "time"            : 300,
                "time_window_start"  : 36366,
                "time_window_end"    : 39173 },

              { "address"   : "10159 Bissell Dr, Twinsburg, OH 44087",
                "lat"        : 41.340042114258,
                "lng"       : -81.421226501465,
                "time"            : 300,
                "time_window_start"  : 39173,
                "time_window_end"    : 41617 },

              { "address"   : "367 Cathy Dr, Munroe Falls, OH 44262",
                "lat"        : 41.148578643799,
                "lng"       : -81.429229736328,
                "time"            : 300,
                "time_window_start"  : 41617,
                "time_window_end"    : 43660 },

              { "address"   : "367 Cathy Dr, Munroe Falls, OH 44262",
                "lat"        : 41.148579,
                "lng"       : -81.42923,
                "time"            : 300,
                "time_window_start"  : 43660,
                "time_window_end"    : 46392 },

              { "address"   : "512 Florida Pl, Barberton, OH 44203",
                "lat"        : 41.003671512008,
                "lng"       : -81.598461046815,
                "time"            : 300,
                "time_window_start"  : 46392,
                "time_window_end"    : 48089 },

              { "address"   : "559 W Aurora Rd, Northfield, OH 44067",
                "lat"        : 41.315116882324,
                "lng"       : -81.558746337891,
                "time"            : 300,
                "time_window_start"  : 48089,
                "time_window_end"    : 48449 },

              { "address"   : "3933 Klein Ave, Stow, OH 44224",
                "lat"        : 41.169467926025,
                "lng"       : -81.429420471191,
                "time"            : 300,
                "time_window_start"  : 48449,
                "time_window_end"    : 50152 },

              { "address"   : "2148 8th St, Cuyahoga Falls, OH 44221",
                "lat"        : 41.136692047119,
                "lng"       : -81.493492126465,
                "time"            : 300,
                "time_window_start"  : 50152,
                "time_window_end"    : 51682 },

              { "address"   : "3731 Osage St, Stow, OH 44224",
                "lat"        : 41.161357879639,
                "lng"       : -81.42293548584,
                "time"            : 300,
                "time_window_start"  : 51682,
                "time_window_end"    : 54379 },

              { "address"   : "3862 Klein Ave, Stow, OH 44224",
                "lat"        : 41.167895123363,
                "lng"       : -81.429973393679,
                "time"            : 300,
                "time_window_start"  : 54379,
                "time_window_end"    : 54879 },

              { "address"   : "138 Northwood Ln, Tallmadge, OH 44278",
                "lat"        : 41.085464134812,
                "lng"       : -81.447411775589,
                "time"            : 300,
                "time_window_start"  : 54879,
                "time_window_end"    : 56613 },

              { "address"   : "3401 Saratoga Blvd, Stow, OH 44224",
                "lat"        : 41.148849487305,
                "lng"       : -81.407363891602,
                "time"            : 300,
                "time_window_start"  : 56613,
                "time_window_end"    : 57052 },

              { "address"   : "5169 Brockton Dr, Stow, OH 44224",
                "lat"        : 41.195003509521,
                "lng"       : -81.392700195312,
                "time"            : 300,
                "time_window_start"  : 57052,
                "time_window_end"    : 59004 },

              { "address"   : "5169 Brockton Dr, Stow, OH 44224",
                "lat"        : 41.195003509521,
                "lng"       : -81.392700195312,
                "time"            : 300,
                "time_window_start"  : 59004,
                "time_window_end"    : 60027 },

              { "address"   : "458 Aintree Dr, Munroe Falls, OH 44262",
                "lat"        : 41.1266746521,
                "lng"       : -81.445808410645,
                "time"            : 300,
                "time_window_start"  : 60027,
                "time_window_end"    : 60375 },

              { "address"   : "512 Florida Pl, Barberton, OH 44203",
                "lat"        : 41.003671512008,
                "lng"       : -81.598461046815,
                "time"            : 300,
                "time_window_start"  : 60375,
                "time_window_end"    : 63891 },

              { "address"   : "2299 Tyre Dr, Hudson, OH 44236",
                "lat"        : 41.250511169434,
                "lng"       : -81.420433044434,
                "time"            : 300,
                "time_window_start"  : 63891,
                "time_window_end"    : 65277 },

              { "address"   : "2148 8th St, Cuyahoga Falls, OH 44221",
                "lat"        : 41.136692047119,
                "lng"       : -81.493492126465,
                "time"            : 300,
                "time_window_start"  : 65277,
                "time_window_end"    : 68545 }
			],
			"parameters": {
				"algorithm_type": 4,
                "route_name": "Multiple Depot, Multiple Driver Fine Tuning, Time Window",
                "route_date": diffspan,
                "route_time": 60 * 60 * 7,
                "route_max_duration": 86400 * 3,
                "vehicle_capacity": 5,
				"vehicle_max_distance_mi": 10000,
                "optimize": "timeWithTraffic",
                "distance_unit": "mi",
				"device_type": "web",
				"travel_mode": "Driving",
				"metric": 4,
                "target_distance": 100,
                "target_duration": 1,
                "waiting_time": 1
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
