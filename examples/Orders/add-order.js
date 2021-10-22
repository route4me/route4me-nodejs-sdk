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
		const data = {
			 	"address_1": "1358 E Luzerne St, Philadelphia, PA 19124, US",
			 	"cached_lat"            : 48.335991,
				"cached_lng"            : 31.18287,
			 	"address_alias"         : "Auto test address",
			 	"address_city"          : "Philadelphia",
			 	"EXT_FIELD_first_name"  : "Igor",
			 	"EXT_FIELD_last_name"   : "Progman",
			 	"EXT_FIELD_email"       : "progman@gmail.com",
				"EXT_FIELD_phone"       : "380380380380",
			 	"EXT_FIELD_custom_data" : [
			 		{
			 			"order_id" : "10",
			 			"name"     : "Bill Soul"
					}
			 	]
		}		
		route4me.Orders.create(data, (err, orderResult) => {
			debug("error  ", err)
			debug("result ", orderResult)

			// Expectations about result
			expect(err).is.null
			expect(orderResult).exist			
			console.log(orderResult);
			//expect(noteResult).has.property("order")

		})
})
