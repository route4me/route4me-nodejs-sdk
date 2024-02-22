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
				route4me.OrdersV5.remove(cleanup_uuid, (err, data) => {
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
			address_geo: {
				lat: "48.335991",
				lng: "31.18287",
			},
			phone: "380380380380",
			first_name: "John",
			last_name: "Doe",
			email: "some@company.com"
		};
		
		// create order
		route4me.OrdersV5.create(data, (err, data) => {
			debug("error  ", err)
			expect(err).is.null
			expect(res).exist

			if(err) {
				cleanup(err);
				return;
			}

			const order_uuid = data.order_uuid;
			console.log(`Create Order with uuid='${order_uuid}'`);
		
			// read order
			route4me.OrdersV5.get(order_uuid, (err, data) => {
				if(err) {
					cleanup(err, order_uuid);
					return;
				}
				console.log(`Read Order first_name is '${data.first_name}'`);

				// update order
				const order_data = {
					first_name: "Jane"
				};
				route4me.OrdersV5.update(order_uuid, order_data, (err, data) => {
					if(err) {
						cleanup(err, order_uuid);
						return;
					}
					console.log(`Update Order first_name is '${data.first_name}'`);

					// delete order
					route4me.OrdersV5.remove(order_uuid, (err, data) => {
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
