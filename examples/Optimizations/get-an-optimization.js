"use strict"

const path = require("path")
const debug = require("debug")("route4me-node")

require("../init-examples-suite")
const helper  = require("./../../test/helper")

helper.describeIntegration(path.basename(__dirname), function T() {
	this.timeout(5000)
	this.slow(3000)
	it(path.basename(__filename), (done) => {

		// const Route4Me = require("route4me-node")

		const apiKey   = "11111111111111111111111111111111"
		const route4me = new Route4Me(apiKey)

		const optimizationId = "07372F2CF3814EC6DFFAFE92E22771AA"
		route4me.Optimizations.get(optimizationId, (err, optimization) => {
			debug("error  ", err)
			debug("result ", optimization)

			expect(optimization).has.property("optimization_problem_id", "07372F2CF3814EC6DFFAFE92E22771AA")

			// TODO: remove `done` call from examples
			done()
		})
	})
})
