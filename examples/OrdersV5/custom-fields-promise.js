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
			order_custom_field_name: "CustomField_15",
			order_custom_field_label: "Custom Field 15",
			order_custom_field_type: "checkbox",
			order_custom_field_type_info: { short_label: "cFl_15" }
		};

		let ocf_uuid = undefined;

		// create CustomUserField
		route4me.OrdersV5.createOrderCustomField(data)
			.then(data => {
				expect(data).exist
				ocf_uuid = data.data.order_custom_field_uuid;
				console.log(`Create CustomUserField with uuid='${ocf_uuid}'`);
		
				// read list of CustomUserFields
				return route4me.OrdersV5.getOrderCustomFields();
			}).then(data => {
				console.log(`Read CustomUserFields list the length is '${data.data.length}'`);
		
				const found_res = data.data.find(item => item.order_custom_field_uuid === ocf_uuid);
				if(found_res) {
					console.log(`Found CustomUserField with uuid ${ocf_uuid} label is '${found_res.order_custom_field_label}'`);
		
					// update CustomUserFields
					const { order_custom_field_uuid, ...update_ocf } = found_res;
					update_ocf.order_custom_field_label = "Custom Field 16";
					return route4me.OrdersV5.updateOrderCustomField(ocf_uuid, update_ocf);
				} else {
					throw new Error(`CustomUserField with uuid ${ocf_uuid} not found.'`);
				}
			}).then(data => {
				console.log(`Update CustomUserField label is '${data.data.order_custom_field_label}'`);
		
				// delete CustomUserFields
				return route4me.OrdersV5.removeOrderCustomField(ocf_uuid);
			}).then(data => {
					console.log(`CustomUserField with uuid=${ocf_uuid} was deleted successful.`);
			}).catch(err => {
				expect(err).exist
				// console.log("Error ", err);
		
				if(ocf_uuid) {
					route4me.OrdersV5.removeOrderCustomField(ocf_uuid)
						.then(data => {
							console.log(`CustomUserField with uuid=${ocf_uuid} was cleaned up successful.`);
						}).catch(err => {
							console.log("Error: cleanup, " + err);
						})
				} 
			});

		// TODO: remove `done` call from examples
		done()
	})
})
