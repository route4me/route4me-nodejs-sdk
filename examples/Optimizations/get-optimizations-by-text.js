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
		//const optimizationIds = ["0613EF353999F43E17B17DD07DDED59E"]
		const states = []
		const options = {
			offset: 0,
			limit: 10,
			query: "SD Route 10 Stops Test"
		}
		route4me.Optimizations.list(states, options, (err, result) => {
			debug("error  ", err)
			debug("result ", result)

			// Expectations about result
			expect(err).is.null
			expect(result.optimizations).is.an("array")
			
		})
		done()
	})
})
