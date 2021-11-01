"use strict"

const path = require("path")
const debug = require("debug")("route4me-node:examples")
const chai = require("chai")

require("../init-examples-suite")
const helper  = require("./../../test/helper")

helper.describeIntegration(helper.toSuiteName(__filename), function T() {
	this.timeout(5000)
	this.slow(3000)
	it(path.basename(__filename), (done) => {
		// const Route4Me = require("route4me-node")
		const expect = chai.expect
		const apiKey   = "11111111111111111111111111111111"
		const route4me = new Route4Me(apiKey)

		const routeId = "8E20987CCC7CC8943FB279BBD8E5D226"
		const data = {
				"alias": "new address alias",
				"first_name": "Edi",
				"last_name": "Jacobson",
				"address": "230 Arbor Way Milledgeville GA 31061",
				"is_depot": false,
				"lat": 33.129695892334,
				"lng": -83.24577331543,
				"sequence_no": 9,
				"is_visited": true,
				"is_departed": false,
				"timestamp_last_visited": 36000,
				"timestamp_last_departed": null,
				"customer_po": "po_131324566",
				"invoice_no": "in549874",
				"reference_no": "7988544",
				"order_no": "on654754",
				"order_id": 4564,
				"weight": 45,
				"cost": 55.60,
				"revenue": 75.80,
				"cube": 3,
				"pieces": 30,
				"email": "ejacob111@yahoo.com",
				"phone": "111-222-333",
				"time_window_start": 36600,
				"time_window_end": 37200,
				"time": 600,
				"priority": 1,
				"curbside_lat": 33.129695892334,
				"curbside_lng": -83.24577331543,
				"time_window_start_2": 39400,
				"time_window_end_2": 40000,
				"custom_fields": {
						"animal": "lion"
				}
		}
		route4me.Routes.update(routeId, data, (err, route) => {
			debug("error  ", err)
			debug("result ", route)

			// Expectations about result
			expect(err).is.null
			expect(route).has.property("route_id", "8E20987CCC7CC8943FB279BBD8E5D226")

		})
		
		done()
	})
})
