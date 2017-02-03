"use strict"

const path = require("path")
const debug = require("debug")("route4me-node")

require("../init-examples-suite")

// const Route4Me = require("route4me-node")

describe(path.basename(__dirname), () => {
	it(path.basename(__filename), () => {

		const apiKey   = "11111111111111111111111111111111"
		const route4me = new Route4Me(apiKey)

		const optimizationId = "07372F2CF3814EC6DFFAFE92E22771AA"
		route4me.Optimizations.get(optimizationId, (err, optimization) => {
			debug("error  ", err)
			debug("result ", optimization)

			expect(route).has.property("optimization_id", "07372F2CF3814EC6DFFAFE92E22771AA")
		})
	})
})
