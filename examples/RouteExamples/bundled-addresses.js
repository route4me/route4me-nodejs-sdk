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
                    "address"    : "3634 W Market St, Fairlawn, OH 44333",
                    "is_depot"          : true,
                    "lat"         : 41.135762259364,
                    "lng"        : -81.629313826561,
                    "time_window_start"  : null,
                    "time_window_end"    : null,
                    "time_window_start2" : null,
                    "time_window_end2"   : null,
                    "time"             : null
                  },
                  { 
                    "address"    : "1218 Ruth Ave, Cuyahoga Falls, OH 44221",
                    "lat"         : 41.135762259364,
                    "lng"        : -81.629313826561,
                    "time_window_start"  : 6 * 3600 + 0 * 60,
                    "time_window_end"    : 6 * 3600 + 30 * 60,
                    "time_window_start2" : 7 * 3600 + 0 * 60,
                    "time_window_end2"   : 7 * 3600 + 20 * 60,
                    "time"             : 300
                  },
                  { 
                    "address"    : "512 Florida Pl, Barberton, OH 44203",
                    "lat"         : 41.003671512008,
                    "lng"        : -81.598461046815,
                    "time_window_start"  : 7 * 3600 + 30 * 60,
                    "time_window_end"    : 7 * 3600 + 40 * 60,
                    "time_window_start2" : 8 * 3600 + 0 * 60,
                    "time_window_end2"   : 8 * 3600 + 10 * 60,
                    "time"             : 300
                  },
                  { 
                    "address"    : "512 Florida Pl, Barberton, OH 44203",
                    "lat"         : 41.003671512008,
                    "lng"        : -81.598461046815,
                    "time_window_start"  : 8 * 3600 + 30 * 60,
                    "time_window_end"    : 8 * 3600 + 40 * 60,
                    "time_window_start2" : 8 * 3600 + 50 * 60,
                    "time_window_end2"   : 9 * 3600 + 0 * 60,
                    "time"             : 100
                  },
                  { 
                    "address"    : "3495 Purdue St, Cuyahoga Falls, OH 44221",
                    "lat"         : 41.162971496582,
                    "lng"        : -81.479049682617,
                    "time_window_start"  : 9 * 3600 + 0 * 60,
                    "time_window_end"    : 9 * 3600 + 15 * 60,
                    "time_window_start2" : 9 * 3600 + 30 * 60,
                    "time_window_end2"   : 9 * 3600 + 45 * 60,
                    "time"             : 300
                  },
                  { 
                    "address"    : "1659 Hibbard Dr, Stow, OH 44224",
                    "lat"         : 41.194505989552,
                    "lng"        : -81.443351581693,
                    "time_window_start"  : 10 * 3600 + 0 * 60,
                    "time_window_end"    : 10 * 3600 + 15 * 60,
                    "time_window_start2" : 10 * 3600 + 30 * 60,
                    "time_window_end2"   : 10 * 3600 + 45 * 60,
                    "time"             : 300
                  },
                  {
                   "address"     : "2705 N River Rd, Stow, OH 44224",
                    "lat"         : 41.145240783691,
                    "lng"        : -81.410247802734,
                    "time_window_start"  : 11 * 3600 + 0 * 60,
                    "time_window_end"    : 11 * 3600 + 15 * 60,
                    "time_window_start2" : 11 * 3600 + 30 * 60,
                    "time_window_end2"   : 11 * 3600 + 45 * 60,
                    "time"             : 300
                  },
                  { 
                    "address"    : "10159 Bissell Dr, Twinsburg, OH 44087",
                    "lat"         : 41.340042114258,
                    "lng"        : -81.421226501465,
                    "time_window_start"  : 12 * 3600 + 0 * 60,
                    "time_window_end"    : 12 * 3600 + 15 * 60,
                    "time_window_start2" : 12 * 3600 + 30 * 60,
                    "time_window_end2"   : 12 * 3600 + 45 * 60,
                    "time"             : 300
                  },
                  {
                   "address"     : "367 Cathy Dr, Munroe Falls, OH 44262",
                    "lat"         : 41.148578643799,
                    "lng"        : -81.429229736328,
                    "time_window_start"  : 13 * 3600 + 0 * 60,
                    "time_window_end"    : 13 * 3600 + 15 * 60,
                    "time_window_start2" : 13 * 3600 + 30 * 60,
                    "time_window_end2"   : 13 * 3600 + 45 * 60,
                    "time"             : 300
                  },
                  {
                   "address"     : "367 Cathy Dr, Munroe Falls, OH 44262",
                    "lat"         : 41.148578643799,
                    "lng"        : -81.429229736328,
                    "time_window_start"  : 14 * 3600 + 0 * 60,
                    "time_window_end"    : 14 * 3600 + 15 * 60,
                    "time_window_start2" : 14 * 3600 + 30 * 60,
                    "time_window_end2"   : 14 * 3600 + 45 * 60,
                    "time"             : 300
                  },
                  {
                   "address"     : "512 Florida Pl, Barberton, OH 44203",
                    "lat"         : 41.003671512008,
                    "lng"        : -81.598461046815,
                    "time_window_start"  : 15 * 3600 + 0 * 60,
                    "time_window_end"    : 15 * 3600 + 15 * 60,
                    "time_window_start2" : 15 * 3600 + 30 * 60,
                    "time_window_end2"   : 15 * 3600 + 45 * 60,
                    "time"             : 300
                  },
                  {
                   "address"     : "559 W Aurora Rd, Northfield, OH 44067",
                    "lat"         : 41.315116882324,
                    "lng"        : -81.558746337891,
                    "time_window_start"  : 16 * 3600 + 0 * 60,
                    "time_window_end"    : 16 * 3600 + 15 * 60,
                    "time_window_start2" : 16 * 3600 + 30 * 60,
                    "time_window_end2"   : 17 * 3600 + 0 * 60,
                    "time"             : 50
                  }
			],
			"parameters": {
				"algorithm_type": 1,
                "route_name": "SD Multiple TW Address Bundling " + today.toUTCString(),
                "route_date": diffspan,
                "route_time": 5 * 3600 + 30 * 60,
                "optimize": "Distance",
                "distance_unit": "mi",
				"device_type": "web",
				"bundling": {"mode": 1, "merge_mode": 1, "service_time_rules": {"first_item_mode": 1, "additional_items_mode": 1}}
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
