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
		/*const data = {
			"order_custom_field_name": "CustomField4",
			"order_custom_field_label": "Custom Field 4",
			"order_custom_field_type": "checkbox",
			"order_custom_field_type_info": {
				"short_label": "cFl4"
			}			
		}*/
		const data = {
			"order_custom_field_name": "TEST",
			"order_custom_field_label": "MENU",
			"order_custom_field_type": "dropdown",
			"order_custom_field_short_caption": "MENU",
			"order_custom_field_type_info":
			{
				"short_caption": "MENU",
				"allowed_values":
				[
					"10",
					"20",
					"30",
					"40",
					"50",
					"70",
					"80",
					"90",
					"100"
				]
			}
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
		done()
	})
})
