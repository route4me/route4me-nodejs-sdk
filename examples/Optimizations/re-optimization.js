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

		const optimizationId = "07372F2CF3814EC6DFFAFE92E22771AA"
		const data = {
			"addresses": [
				{
					"route_destination_id": 154456307,
					"alias": "",
					"member_id": 44143,
					"address": "US",
					"is_depot": false,
					"timeframe_violation_state": null,
					"timeframe_violation_time": 0,
					"timeframe_violation_rate": 0,
					"lat": 38.89037,
					"lng": -77.03196,
					"curbside_lat": 38.89037,
					"curbside_lng": -77.03196,
					"priority": null,
					"route_id": "E01F342D4C3BA01D4628BECF4D7F092C",
					"original_route_id": "",
					"optimization_problem_id": "07372F2CF3814EC6DFFAFE92E22771AA",
					"sequence_no": 1,
					"geocoded": false,
					"preferred_geocoding": null,
					"failed_geocoding": false,
					"geocodings": [],
					"contact_id": 0,
					"address_stop_type": "DELIVERY",
					"is_visited": false,
					"timestamp_last_visited": null,
					"visited_lat": null,
					"visited_lng": null,
					"is_departed": false,
					"departed_lat": null,
					"departed_lng": null,
					"timestamp_last_departed": null,
					"group": null,
					"customer_po": null,
					"invoice_no": null,
					"reference_no": null,
					"order_no": null,
					"weight": 0,
					"cost": 0,
					"revenue": 0,
					"cube": 0,
					"pieces": 0,
					"first_name": null,
					"last_name": null,
					"email": null,
					"phone": null,
					"destination_note_count": 0,
					"drive_time_to_next_destination": null,
					"abnormal_traffic_time_to_next_destination": null,
					"uncongested_time_to_next_destination": null,
					"traffic_time_to_next_destination": null,
					"distance_to_next_destination": null,
					"channel_name": "114678d00de3bf082ccf8d448427da0c",
					"generated_time_window_start": null,
					"generated_time_window_end": null,
					"time_window_start": null,
					"time_window_end": null,
					"time_window_start_2": null,
					"time_window_end_2": null,
					"geofence_detected_visited_timestamp": null,
					"geofence_detected_departed_timestamp": null,
					"geofence_detected_service_time": null,
					"geofence_detected_visited_lat": null,
					"geofence_detected_visited_lng": null,
					"geofence_detected_departed_lat": null,
					"geofence_detected_departed_lng": null,
					"time": 0,
					"custom_fields": {
						"notes": "",
						"client name": "Veronica  Hill",
						"address line 1": "5161 San Felipe #390",
						"city\/town": "Houston",
						"state\/province\/region": "TX",
						"zip\/postal code": "77056",
						"demand": "",
						"demand2": "",
						"demand3": "",
						"time of service": "5",
						"opening time 1": "",
						"closing time 1": "",
						"opening time 2": "",
						"closing time 2": "",
						"required skills": ""
					},
					"custom_fields_str_json": "{\"notes\":\"\",\"client name\":\"Veronica  Hill\",\"address line 1\":\"5161 San Felipe #390\",\"city\\\/town\":\"Houston\",\"state\\\/province\\\/region\":\"TX\",\"zip\\\/postal code\":\"77056\",\"demand\":\"\",\"demand2\":\"\",\"demand3\":\"\",\"time of service\":\"5\",\"opening time 1\":\"\",\"closing time 1\":\"\",\"opening time 2\":\"\",\"closing time 2\":\"\",\"required skills\":\"\"}",
					"notes": []
				}
			]
		}
		const reoptimize = true
		route4me.Optimizations.update(optimizationId, data, reoptimize, (err, optimization) => {
			debug("error  ", err)
			debug("result ", optimization)

			// Expectations about result
			expect(err).is.null
			expect(optimization).has.property("optimization_problem_id", "07372F2CF3814EC6DFFAFE92E22771AA")
			
		})
		done()
	})
})
