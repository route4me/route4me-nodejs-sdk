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

		// get default optimization profile id
		route4me.OptimizationProfiles.list((err, data) => {
			debug("error  ", err)
			expect(err).is.null
			expect(data).exist

			if(err) {
				console.log("Error: list, " + err);
				return;
			}
		
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
				route4me.OptimizationProfiles.save(data, (err, data) => {
					debug("error  ", err)
					expect(err).is.null
					expect(data).exist

					if(err) {
						console.log("Error: save, " + err);
						return;
					}
					console.log(`Data for optimization_profile_id: '${default_profile.optimization_profile_id}' was saved successful.`);
				});
			} else {
				console.log("Cannot find the default optimization profile id.");
			}
		});

		// TODO: remove `done` call from examples
		done()
	})
})
