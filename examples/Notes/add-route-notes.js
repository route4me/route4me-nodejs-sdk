"use strict"

const path = require("path")
const debug = require("debug")("route4me-node:examples")

require("../init-examples-suite")
const helper  = require("./../../test/helper")

helper.describeIntegration(helper.toSuiteName(__filename), function T() {
	this.timeout(5000)
	this.slow(3000)
	it.skip(path.basename(__filename), (done) => {
		// const Route4Me = require("route4me-node")

		const apiKey   = "11111111111111111111111111111111"
		const route4me = new Route4Me(apiKey)
		const noteData = {
			addressId: 167899269,
			routeId: "241466F15515D67D3F951E2DA38DE76D",
			deviceLatitude: 55.6884868,
			deviceLongitude: 12.5366426,
			deviceType: "android_phone",
			note: "Just a test note",
			type: "web",
		}

		route4me.Notes.create(noteData, (err, noteResult) => {
			debug("error  ", err)
			debug("result ", noteResult)

			// Expectations about result
			expect(err).is.null

			expect(noteResult).has.property("optimization_problem_id", "07372F2CF3814EC6DFFAFE92E22771AA")

			// TODO: remove `done` call from examples
			done()
		})
	})
})
