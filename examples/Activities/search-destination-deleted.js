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

		var routeid = ""
		var addressid = -1
		
		const param = {
			"addresses": [
				{ 
					"address" : "151 Arbor Way Milledgeville GA 31061",                     
					"is_depot" : true, 
					"lat" : 33.132675170898,
					"lng" : -83.244743347168,
					"time" : 0, 
					"CustomFields" : {"color": "red" , "size": "huge"}
				},
				{ 
					"address" : "230 Arbor Way Milledgeville GA 31061",
					"lat" : 33.129695892334,
					"lng" : -83.24577331543,
					"time" : 0
				},
				{ 
					"address" : "148 Bass Rd NE Milledgeville GA 31061",
					"lat" : 33.143497,
					"lng" : -83.224487,
					"time" : 0
				},
				{ 
					"address" : "117 Bill Johnson Rd NE Milledgeville GA 31061",
					"lat" : 33.141784667969,
					"lng" : -83.237518310547,
					"time" : 0
				},
				{ 
					"address" : "119 Bill Johnson Rd NE Milledgeville GA 31061",
					"lat" : 33.141086578369,
					"lng" : -83.238258361816,
					"time" : 0
				},
				{ 
					"address" :  "131 Bill Johnson Rd NE Milledgeville GA 31061",
					"lat" : 33.142036437988,
					"lng" : -83.238845825195,
					"time" : 0
				},
				{ 
					"address" :  "138 Bill Johnson Rd NE Milledgeville GA 31061",
					"lat" : 33.14307,
					"lng" : -83.239334,
					"time" : 0
				},
				{ 
					"address" :  "139 Bill Johnson Rd NE Milledgeville GA 31061",
					"lat" : 33.142734527588,
					"lng" : -83.237442016602,
					"time" : 0
				},
				{ 
					"address" :  "145 Bill Johnson Rd NE Milledgeville GA 31061",
					"lat" : 33.143871307373,
					"lng" : -83.237342834473,
					"time" : 0
				},
				{ 
					"address" :  "221 Blake Cir Milledgeville GA 31061",
					"lat" : 33.081462860107,
					"lng" : -83.208511352539,
					"time" : 0
				}
			],
			"parameters": {
				"algorithm_type": 1,
                "route_name": "SD Route 10 Stops Test " + today.toUTCString(),
                "route_date": diffspan,
                "route_time": 60 * 60 * 7,
                "optimize": "Distance",
                "distance_unit": "mi",
				"device_type": "web"
			}
		}

		route4me.Routes.routeexamples_optiomization(param, (err, sdroute10stopsresult) => {
			debug("error  ", err)
			debug("result ", sdroute10stopsresult)
			expect(err).is.null
			expect(sdroute10stopsresult).exist
			routeid = sdroute10stopsresult.routes[0].route_id
			addressid = sdroute10stopsresult.addresses[2].route_destination_id

			route4me.Routes.unlinkAddress(routeid, addressid, (err, unlinkroute) => {
				debug("error  ", err)
				debug("result ", unlinkroute)
				expect(err).is.null
				expect(unlinkroute).exist
				if (!unlinkroute)
				{
					console.log("Cannot remove the test destination.")
					return
				}
				else
				{
					const data = {			
						"activity_type": "delete-destination",
						"route_id": routeid
					}
					
					route4me.ActivityFeed.getactivities_example(data, (err, activity_feed) => {
						debug("error  ", err)
						debug("result ", activity_feed)
						expect(err).is.null
						expect(activity_feed).exist
						console.log(activity_feed)
					})
				}
			})
		})
		// TODO: remove `done` call from examples
		done()
	})
})
