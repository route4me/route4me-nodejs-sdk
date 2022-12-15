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
		// const Route4Me = require("route4me-node")
		const expect = chai.expect
		const apiKey   = "11111111111111111111111111111111"
		const route4me = new Route4Me(apiKey)

		const addresses = require("./data/addresses_200.json");
		const mode = 1;
		const params = [2];

		for(let i = 0; i < addresses.length; ++i) {
			addresses[i].original_route_id = (i < addresses.length / 2 ? "ZONE - 0" : "ZONE - 1");
			addresses[i].time = 60;
		}

		route4me.AutomaticTerritories.createJob(addresses, mode, params, (err, res) => {
			debug("error  ", err)
			debug("result ", res)
			expect(err).is.null
			expect(res).exist
			console.log(res)

			const jobID = data.job_id
			const hInterval = setInterval(() => {
				route4me.AutomaticTerritories.getJobStatus(jobID, (err, data) => {
					if(err) {
						console.log(err)
						return
					}
					console.log(data)
		
					if(data.status === "processed") {
						clearInterval(hInterval)
						route4me.AutomaticTerritories.getJobResult(jobID, (err, data) => {
							if(err) console.log(err)
							console.log(data)
						})
					}
				})
			}, 10000)
		})
		// TODO: remove `done` call from examples
		done()
	})
})
