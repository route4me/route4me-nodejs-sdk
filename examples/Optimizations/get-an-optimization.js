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

		const apiKey   = "11111111111111111111111111111111"
		const expect = chai.expect
		const route4me = new Route4Me(apiKey)
		const optimizationId = "0613EF353999F43E17B17DD07DDED59E"
		route4me.Optimizations.get(optimizationId, (err, optimization) => {
			debug("error  ", err)
			debug("result ", optimization)

			// Expectations about result
			expect(err).is.null

			expect(optimization).has.property("optimization_problem_id", "0613EF353999F43E17B17DD07DDED59E")
			console.log(optimization)
			// TODO: remove `done` call from examples
			done()
		})
	})
})
