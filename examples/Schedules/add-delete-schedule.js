"use strict"

const path = require("path")
const debug = require("debug")("route4me-node:examples")
const chai = require("chai");
require("../init-examples-suite")
const helper  = require("../../test/helper")

helper.describeIntegration(helper.toSuiteName(__filename), function T() {
	this.timeout(5000)
	this.slow(3000)
	it(path.basename(__filename), (done) => {
		var expect = chai.expect;
		
		const apiKey   = "11111111111111111111111111111111"
		const route4me = new Route4Me(apiKey)
		const route_id = "66C2AC4A323053FF0A40FEB6918ACF5E"

		const s_param = {
			name: "The bestest schedule",
			schedule_blacklist: [],
			schedule: null,
			timezone: "UTC"
		};
		
		route4me.Schedules.addSchedule(s_param, (err, res) => {
			debug("error  ", err)
			debug("result ", res)

			expect(err).is.null
			expect(res).exist
			expect(res.data).exist
			expect(res.data[0]).exist
			expect(res.data[0].schedule_uid).exist

			const schedule_uid = res.data[0].schedule_uid;

			route4me.Schedules.addRouteSchedule({ route_id, schedule_uid }, (err, data) => {
				debug("error  ", err)
				debug("result ", res)

				expect(err).is.null
				expect(res).exist
			
				route4me.Schedules.getRouteSchedule(route_id, (err, res) => {
					debug("error  ", err)
					debug("result ", res)

					expect(err).is.null
					expect(res).exist
				
					route4me.Schedules.deleteRouteSchedules(route_id, (err, res) => {
						debug("error  ", err)
						debug("result ", res)

						expect(err).is.null
						expect(res).exist
						expect(res).is.true
					});
				});
			});
		})
		done();
	})
})
