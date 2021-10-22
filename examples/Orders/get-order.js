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
	const apiKey   = "11111111111111111111111111111111"
	const route4me = new Route4Me(apiKey)
	const orderId = "2662207"
	route4me.Orders.get(orderId, (err, orderResult) => {
		debug("error  ", err)
		debug("result ", orderResult)

		// Expectations about result
		expect(err).is.null
		expect(orderResult).exist			
		console.log(orderResult);
		//expect(noteResult).has.property("order")

	})
})
