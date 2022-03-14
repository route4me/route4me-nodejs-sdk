"use strict"

const path = require("path")
const debug = require("debug")("route4me-node:examples")
const chai = require("chai");
require("../init-examples-suite")
const helper  = require("../../test/helper")

helper.describeIntegration(helper.toSuiteName(__filename), function T() {
	this.timeout(5000)
	this.slow(3000)
	var expect = chai.expect;
	it(path.basename(__filename), (done) => {
		const apiKey   = "11111111111111111111111111111111"
		const route4me = new Route4Me(apiKey)
		const orderId = "2662207"
	
		const data = {
			cursor: "",
			per_page: 10,
			filters: []
		};
				
		route4me.Orders.archive(data, (err, orderResult) => {
			debug("error  ", err)
			debug("result ", orderResult)

			// Expectations about result
			expect(err).is.null
			expect(orderResult).exist			
			console.log(orderResult);
		})
		done()
	})
})
