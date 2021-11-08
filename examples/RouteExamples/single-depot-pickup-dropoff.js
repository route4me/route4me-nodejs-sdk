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
            "parameters":
            {
                "rt": true,
                "route_name": "Pickup/Dropoff Test",
                "optimize": "Time",
                "travel_mode": "Driving",
                "algorithm_type": 3,
                "parts": 999
            },
            "addresses":
            [
                {
                    "address": "L00001",
                    "alias": "Pickup - PD00001",
                    "lat": 38.141598,
                    "lng": -85.793846,
                    "time": 120,
                    "weight": 0,
                    "cube": 9,
                    "pieces": 1,
                    "joint": 1,
                    "pickup": "",
                    "dropoff": ""
                },
                {
                    "address": "L00002",
                    "alias": "Dropoff - PD00001",
                    "lat": 38.202496,
                    "lng": -85.786514,
                    "time": 120,
                    "joint": 1,
                    "weight": 10,
                    "cube": 4,
                    "pieces": 1,
                    "pickup": "",
                    "dropoff": ""
                },
                {
                    "address": "L00003",
                    "alias": "Pickup - PD00003",
                    "lat": 38.178844,
                    "lng": -85.774864,
                    "time": 120,
                    "weight": 2,
                    "cube": 1,
                    "pieces": 0,
                    "pickup": "",
                    "dropoff": ""
                },
                {
                    "address": "L00004",
                    "alias": "Dropoff - PD00003",
                    "lat": 38.248684,
                    "lng": -85.821121,
                    "time": 120,
                    "weight": 2,
                    "cube": 6,
                    "pieces": 1,
                    "pickup": "",
                    "dropoff": ""
                },
                {
                    "address": "L00005",
                    "alias": "Pickup - PD00005",
                    "lat": 38.251923,
                    "lng": -85.800034,
                    "time": 120,
                    "weight": 4,
                    "cube": 6,
                    "pieces": 1,
                    "pickup": "",
                    "dropoff": ""
                },
                {
                    "address": "L00006",
                    "alias": "Dropoff - PD00005",
                    "lat": 38.176067,
                    "lng": -85.824638,
                    "time": 120,
                    "weight": 1,
                    "cube": 3,
                    "pieces": 3,
                    "pickup": "",
                    "dropoff": ""
                },
                {
                    "address": "L00007",
                    "alias": "Pickup - PD00007",
                    "lat": 38.179806,
                    "lng": -85.775558,
                    "time": 120,
                    "weight": 0,
                    "cube": 0,
                    "pieces": 0,
                    "pickup": "",
                    "dropoff": ""
                },
                {
                    "address": "L00008",
                    "alias": "Dropoff - PD00007",
                    "lat": 38.259335,
                    "lng": -85.815094,
                    "time": 120,
                    "weight": 2,
                    "cube": 6,
                    "pieces": 2,
                    "pickup": "",
                    "dropoff": ""
                },
                {
                    "address": "L00009",
                    "alias": "Pickup - PD00009",
                    "lat": 38.179253,
                    "lng": -85.785118,
                    "time": 120,
                    "weight": 5,
                    "cube": 9,
                    "pieces": 1,
                    "pickup": "",
                    "dropoff": ""
                },
                {
                    "address": "L00010",
                    "alias": "Dropoff - PD00009",
                    "lat": 38.162472,
                    "lng": -85.792854,
                    "time": 120,
                    "weight": 0,
                    "cube": 5,
                    "pieces": 1,
                    "pickup": "",
                    "dropoff": ""
                },
                {
                    "address": "DEPOT",
                    "alias": "DEPOT",
                    "lat": 38.251698,
                    "lng": -85.757308,
                    "is_depot": true
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
