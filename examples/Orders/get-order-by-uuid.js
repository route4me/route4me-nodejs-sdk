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
		const route4me = new Route4Me(apiKey)

		function cleanup(err, cleanup_uuid) {
			debug("error  ", err)
			expect(err).exist
		
			if(cleanup_uuid) {
				route4me.Orders.remove(cleanup_uuid, (err, data) => {
					if(err) {
						console.log("Error: cleanup, " + err);
						return;
					}
					if(data) {
						console.log(`Order with uuid=${cleanup_uuid} was cleaned up successful.`);
					} else {
						console.log(`Order with uuid=${cleanup_uuid} was not cleaned up.`);
					}
				});
			} 
		}
		
		const data = {
			address_1: "1358 E Luzerne St, Philadelphia, PA 19124, US",
			address_alias: "Auto test address",
			address_city: "Philadelphia",
			EXT_FIELD_first_name: "John",
			EXT_FIELD_last_name: "Doe",
			EXT_FIELD_email: "some@company.com",
			EXT_FIELD_phone: "380380380380"
		};
		
		// create order
		route4me.Orders.create(data, (err, data) => {
			debug("error  ", err)
			expect(err).is.null
			expect(res).exist

			if(err) {
				cleanup(err);
				return;
			}

			const order_id = data.order_id;
			const order_uuid = data.order_uuid;
			console.log(`Create Order with id='${order_id}' and uuid='${order_uuid}'`);
		
			// get Order by ID
			route4me.Orders.get(order_id, (err, order_by_id) => {
				if(err) {
					cleanup(err, order_by_id.order_id);
					return;
				}
				console.log(`Read Order by id, id='${order_by_id.order_id}' and uuid='${order_by_id.order_uuid}`);

				// get Order by UUID
				route4me.Orders.get(order_uuid, (err, order_by_uuid) => {
					if(err) {
						cleanup(err, order_by_uuid.order_id);
						return;
					}
					console.log(`Read Order by uuid, id='${order_by_uuid.order_id}' and uuid='${order_by_uuid.order_uuid}`);

					// compare Orders
					if(JSON.stringify(order_by_id) == JSON.stringify(order_by_uuid)) {
						console.log("The Orders are equal.");
					} else {
						console.log("The Orders are not equal.");
					}
		
					// delete Order by UUID
					route4me.Orders.remove(order_uuid, (err, data) => {
						if(err) {
							cleanup(err);
							return;
						}
						if(data) {
							console.log(`Order with uuid=${order_uuid} was deleted successful.`);
						} else {
							console.log(`Order with uuid=${order_uuid} was not deleted.`);
						}
							});
				});
			});
		});

		// TODO: remove `done` call from examples
		done()
	})
})
