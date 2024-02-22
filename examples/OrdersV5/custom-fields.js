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
				route4me.OrdersV5.removeOrderCustomField(cleanup_uuid, (err, data) => {
					if(err) {
						console.log("Error: cleanup, " + err);
						return;
					}
					if(data) {
						console.log(`CustomUserField with uuid=${cleanup_uuid} was cleaned up successful.`);
					} else {
						console.log(`CustomUserField with uuid=${cleanup_uuid} was not cleaned up.`);
					}
				});
			} 
		}
		
		const data = {
			order_custom_field_name: "CustomField_15",
			order_custom_field_label: "Custom Field 15",
			order_custom_field_type: "checkbox",
			order_custom_field_type_info: { short_label: "cFl_15" }
		};
				
		// create CustomUserField
		route4me.OrdersV5.createOrderCustomField(data, (err, data) => {
			debug("error  ", err)
			expect(err).is.null
			expect(res).exist

			if(err) {
				cleanup(err);
				return;
			}

			const ocf_uuid = data.data.order_custom_field_uuid;
			console.log(`Create CustomUserField with uuid='${ocf_uuid}'`);
		
			// read list of CustomUserFields
			route4me.OrdersV5.getOrderCustomFields((err, data) => {
				if(err) {
					cleanup(err, ocf_uuid);
					return;
				}
				console.log(`Read CustomUserFields list the length is '${data.data.length}'`);

				const found_res = data.data.find(item => item.order_custom_field_uuid === ocf_uuid);
				if(found_res) {
					console.log(`Found CustomUserField with uuid ${ocf_uuid} label is '${found_res.order_custom_field_label}'`);
		
					// update CustomUserFields
					const { order_custom_field_uuid, ...update_ocf } = found_res;
					update_ocf.order_custom_field_label = "Custom Field 16";
					route4me.OrdersV5.updateOrderCustomField(ocf_uuid, update_ocf, (err, data) => {
						if(err) {
							cleanup(err, ocf_uuid);
							return;
						}
						console.log(`Update CustomUserField label is '${data.data.order_custom_field_label}'`);

						// delete CustomUserFields
						route4me.OrdersV5.removeOrderCustomField(ocf_uuid, (err, data) => {
							if(err) {
								cleanup(err);
								return;
							}
							console.log(`CustomUserField with uuid=${ocf_uuid} was deleted successful.`);
						});
					});
				} else {
					console.log(`CustomUserField with uuid ${ocf_uuid} not found.'`);
				}
			});
		});

		// TODO: remove `done` call from examples
		done()
	})
})
