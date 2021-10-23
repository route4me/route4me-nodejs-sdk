"use strict"

const path = require("path")
const debug = require("debug")("route4me-node:examples")

require("../init-examples-suite")
const helper  = require("../../test/helper")

helper.describeIntegration(helper.toSuiteName(__filename), function T() {
	this.timeout(5000)
	this.slow(3000)
	it(path.basename(__filename), (done) => {
		// const Route4Me = require("route4me-node")

		const apiKey   = "11111111111111111111111111111111"
		const route4me = new Route4Me(apiKey)
		const optimizationId = "07372F2CF3814EC6DFFAFE92E22771AA"
		route4me.Optimizations.remove(optimizationId, (err, optimization) => {
			debug("error  ", err)
			debug("result ", optimization)

			// Expectations about result
			expect(err).is.null

			// TODO: remove `done` call from examples
			done()
		})
	})
})
