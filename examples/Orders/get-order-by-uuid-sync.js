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
					
			try {
				// create Order
				const order = await route4me.Orders.create(data);
				expect(order).exist

				const order_id = order.order_id;
				order_uuid = order.order_uuid;
				console.log(`Create Order with id='${order_id}' and uuid='${order_uuid}'`);

				// get Order by ID
				const order_by_id = await route4me.Orders.get(order_id);
				console.log(`Read Order by id, id='${order_by_id.order_id}' and uuid='${order_by_id.order_uuid}`);

				// get Order by UUID
				const order_by_uuid = await route4me.Orders.get(order_uuid);
				console.log(`Read Order by uuid, id='${order_by_uuid.order_id}' and uuid='${order_by_uuid.order_uuid}`);
				
				// compare Orders
				if(JSON.stringify(order_by_id) == JSON.stringify(order_by_uuid)) {
					console.log("The Orders are equal.");
				} else {
					console.log("The Orders are not equal.");
				}

				// delete Order by UUID
				if(await route4me.Orders.remove(order_uuid)) {
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
						if(await route4me.Orders.remove(order_uuid)) {
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
