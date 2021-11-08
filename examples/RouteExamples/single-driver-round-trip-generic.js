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
                "address" : "754 5th Ave New York, NY 10019",
                "alias"         : "Bergdorf Goodman",
                "is_depot"       : true,
                "lat"      : 40.7636197,
                "lng"     : -73.9744388,
                "time"          : 0
            },
            {
                "address" : "717 5th Ave New York, NY 10022",
                "alias"         : "Giorgio Armani",
                "lat"      : 40.7669692,
                "lng"     : -73.9693864,
                "time"          : 0
            },
            {
                "address" : "888 Madison Ave New York, NY 10014",
                "alias"         : "Ralph Lauren Women's and Home",
                "lat"      : 40.7715154,
                "lng"     : -73.9669241,
                "time"          : 0
            },
            {
                "address" : "1011 Madison Ave New York, NY 10075",
                "alias"         : "Yigal Azrou'l",
                "lat"      : 40.7772129,
                "lng"     : -73.9669,
                "time"          : 0
            },
            {
                "address" : "440 Columbus Ave New York, NY 10024",
                "alias"         : "Frank Stella Clothier",
                "lat"      : 40.7808364,
                "lng"     : -73.9732729,
                "time"          : 0
            },
            {
                "address" : "324 Columbus Ave #1 New York, NY 10023",
                "alias"         : "Liana",
                "lat"      : 40.7803123,
                "lng"     : -73.9793079,
                "time"          : 0
            },
            {
                "address" : "110 W End Ave New York, NY 10023",
                "alias"         : "Toga Bike Shop",
                "lat"      : 40.7753077,
                "lng"     : -73.9861529,
                "time"          : 0
            },
            {
                "address" : "555 W 57th St New York, NY 10019",
                "alias"         : "BMW of Manhattan",
                "lat"      : 40.7718005,
                "lng"     : -73.9897716,
                "time"          : 0
            },
            {
                "address" : "57 W 57th St New York, NY 10019",
                "alias"         : "Verizon Wireless",
                "lat"      : 40.7558695,
                "lng"     : -73.9862019,
                "time"          : 0
            }
			],
			"parameters": {
				"algorithm_type": 1,
                "route_name": "Single Driver Round Trip",
                "route_date": diffspan,
                "route_time": 60 * 60 * 7,
                "route_max_duration": 86400,
                "vehicle_capacity": 1,
				"vehicle_max_distance_mi": 10000,
                "optimize": "Distance",
                "distance_unit": "mi",
				"device_type": "web",
				"travel_mode": "Driving",
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