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
			try {
				// get default optimization profile id
				const data = await route4me.OptimizationProfiles.list();
				expect(data).exist

				const default_profile = data.items.find((item) => item.is_default);
				if(default_profile) {
		
					// save data
					const data = {
						items: [{
							guid: "eaa",
							parts: [{
								guid: "pav",
								data: { "append_date_to_route_name": true }
							}],
							id: default_profile.optimization_profile_id
						}]
					};
					const res = await route4me.OptimizationProfiles.save(data);
					expect(res).exist

					console.log(`Data for optimization_profile_id: '${default_profile.optimization_profile_id}' was saved successful.`);
				} else {
					console.log("Cannot find the default optimization profile id.");
				}
			}
			catch(err) {
				expect(err).exist
				// console.log("Error ", err);
			}
		})();

		// TODO: remove `done` call from examples
		done()
	})
})
