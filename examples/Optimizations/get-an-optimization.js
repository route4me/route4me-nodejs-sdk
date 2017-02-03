"use strict"

require("../init-examples-suite")

// const Route4Me = require("route4me-node")

const apiKey   = "11111111111111111111111111111111"
const route4me = new Route4Me(apiKey)

const optimizationId = "07372F2CF3814EC6DFFAFE92E22771AA"
route4me.Optimizations.get(optimizationId, (err, optimization) => {
	console.log("error  ", err)
	console.log("result ", optimization)
})
