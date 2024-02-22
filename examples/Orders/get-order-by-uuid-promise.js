"use strict"

const path = require("path")
const chai = require("chai")
const debug = require("debug")("route4me-node:examples")
require("../init-examples-suite")
const helper  = require("../../test/helper")

helper.describeIntegration(helper.toSuiteName(__filename), function T() {
	this.timeout(5000)
	this.slow(3000)
	it(path.basename(__filename), (done) => {
		const expect = chai.expect
		const apiKey   = "11111111111111111111111111111111"

		// To use the Promise style instead of the Callback style send promise=true as an option.
		const route4me = new Route4Me(apiKey, {	promise: true })

		const data = {
			address_1: "1358 E Luzerne St, Philadelphia, PA 19124, US",
			address_alias: "Auto test address",
			address_city: "Philadelphia",
			EXT_FIELD_first_name: "John",
			EXT_FIELD_last_name: "Doe",
			EXT_FIELD_email: "some@company.com",
			EXT_FIELD_phone: "380380380380"
		};
		
		let order_uuid = undefined;
		let order_by_id = undefined;
		
		// create Order
		route4me.Orders.create(data)
			.then(data => {
				expect(data).exist

				const order_id = data.order_id;
				order_uuid = data.order_uuid;
				console.log(`Create Order with id='${order_id}' and uuid='${order_uuid}'`);
		
				// get Order by ID
				return route4me.Orders.get(order_id)
			}).then(data => {
				order_by_id = data;
				console.log(`Read Order by id, id='${order_by_id.order_id}' and uuid='${order_by_id.order_uuid}`);
		
				// get Order by UUID
				return route4me.Orders.get(order_uuid)
			}).then(order_by_uuid => {
				console.log(`Read Order by uuid, id='${order_by_uuid.order_id}' and uuid='${order_by_uuid.order_uuid}`);

				// compare Orders
				if(JSON.stringify(order_by_id) == JSON.stringify(order_by_uuid)) {
					console.log("The Orders are equal.");
				} else {
					console.log("The Orders are not equal.");
				}
		
				// delete Order by UUID
				return route4me.Orders.remove(order_uuid)
			}).then(data => {
				if(data) {
					console.log(`Order with uuid=${order_uuid} was deleted successful.`);
				} else {
					console.log(`Order with uuid=${order_uuid} was not deleted.`);
				}
			}).catch(err => {
				expect(err).exist
				// console.log("Error ", err);
		
				if(order_uuid) {
					route4me.Orders.remove(order_uuid)
						.then(data => {
							if(data) {
								console.log(`Order with uuid=${order_uuid} was cleaned up successful.`);
							} else {
								console.log(`Order with uuid=${order_uuid} was not cleaned up.`);
							}
						}).catch(err => {
							console.log("Error: cleanup, " + err);
						});
						} 
			});

		// TODO: remove `done` call from examples
		done()
	})
})
