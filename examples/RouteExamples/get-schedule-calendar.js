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
        var beforeday = new Date(today)
        tomorrow.setDate(tomorrow.getDate() + 5)
        beforeday.setDate(beforeday.getDate() - 5)
    
        const optParam = {			
			"calendar_query": {
				"date_from_string": beforeday.toUTCString(),
                "date_to_string": tomorrow.toUTCString(),
                "timezone_offset_minutes": 4 * 60,
                "show_orders": true,
                "show_contacts": true,
                "routes_count": true
			}
		}

		route4me.Routes.get_schedule_calendar(optParam, (err, route) => {
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
