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
		const options = {
			limit: 100,
			//offset: 0,
		}
		route4me.Optimizations.list([1,2,3] ,options, (err, optimizations) => {
			debug("error  ", err)
			debug("result ", optimizations)

			// Expectations about result
			expect(err).is.null

			expect(optimizations).exist

			// TODO: remove `done` call from examples
			done()
		})
	})
})
