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
		const route4me = new Route4Me(apiKey, {	promise: true });

		(async () => {
			let order_uuid = undefined;

			const data = {
				address_1: "1358 E Luzerne St, Philadelphia, PA 19124, US",
				address_alias: "Auto test address",
				address_city: "Philadelphia",
				address_geo: {
					lat: "48.335991",
					lng: "31.18287",
				},
				phone: "380380380380",
				first_name: "John",
				last_name: "Doe",
				email: "some@company.com"
			};
			
			try {
				// create order
				const order = await route4me.OrdersV5.create(data);
				expect(order).exist

				order_uuid = order.order_uuid;
				console.log(`Create Order with uuid='${order_uuid}'`);
		
				// read order
				const read_order = await route4me.OrdersV5.get(order_uuid);
				console.log(`Read Order first_name is '${read_order.first_name}'`);
		
				// update order
				const order_data = {
					first_name: "Jane"
				};
				const update_order = await route4me.OrdersV5.update(order_uuid, order_data);
				console.log(`Update Order first_name is '${update_order.first_name}'`);
				
				// delete order
				if(await route4me.OrdersV5.remove(order_uuid)) {
					console.log(`Order with uuid=${order_uuid} was deleted successful.`);
				} else {
					console.log(`Order with uuid=${order_uuid} was not deleted.`);
				}
			}
			catch(err) {
				expect(err).exist
				// console.log("Error  ", err);

				if(order_uuid) {
					try {
						if(await route4me.OrdersV5.remove(order_uuid)) {
							console.log(`Order with uuid=${order_uuid} was cleaned up successful.`);
						} else {
							console.log(`Order with uuid=${order_uuid} was not cleaned up.`);
						}
					}
					catch(err) {
						console.log("Error: cleanup, " + err);
					}
				}
			}
		})();

		// TODO: remove `done` call from examples
		done()
	})
})
