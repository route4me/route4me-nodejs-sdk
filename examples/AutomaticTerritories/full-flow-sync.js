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

		const addresses = require("./data/addresses_200.json")
		const mode = 1
		const params = [2]

		function createJobSync(addresses, mode, params) {
			return new Promise((resolve) => {
				route4me.AutomaticTerritories.createJob(addresses, mode, params, (err, data) => {
					if(err) throw err
					resolve(data)
				})
			})
		}

		function getJobStatusSync(jobID) {
			return new Promise((resolve) => {
				const hInterval = setInterval(() => {
					route4me.AutomaticTerritories.getJobStatus(jobID, (err, data) => {
						if(err) {
							clearInterval(hInterval)
							throw err
						}
						if(data.status === "processed") {
							clearInterval(hInterval)
							resolve(data)
						}
					})
				}, 10000)
			})
		}

		function getJobResultSync(jobID) {
			return new Promise((resolve) => {
				route4me.AutomaticTerritories.getJobResult(jobID, (err, data) => {
					if(err) throw err
					resolve(data)
				})
			})
		}

		function optimizationSync(params) {
			return new Promise((resolve) => {
				route4me.Optimizations.create(params, false, (err, data) => {
					if(err) throw err
					resolve(data)
				})
			})
		}

		(async () => {
			try {
				const job = await createJobSync(addresses, mode, params)
				await getJobStatusSync(job.job_id)
				const res = await getJobResultSync(job.job_id)
				debug("result ", res)
				expect(res).exist

				if(res) {
					const zone_0 = data.clusters[0].addresses_ids

					for(let i = 0; i < addresses.length; ++i) {
						addresses[i].original_route_id = (zone_0.includes(addresses[i].id) ? "ZONE - 0" : "ZONE - 1")
						addresses[i].time = 60
					}
					
					addresses.unshift({
						alias: "DEPOT",
						lat: 25.7559171435,
						lng: -80.317204775,
						is_depot: 1
					})
			
					const params = {
						parameters: {
							algorithm_type: 3,
							share_route: 0,
							store_route: 0,
							rt: 1,
							route_time: 46800,
							route_name: "Smart Zone Example",
							optimize: "Time",
							distance_unit: "mi",
							device_type: "web",
							travel_mode: "Driving",
							parts: 1,
							route_max_duration: 57600
						},
						addresses: addresses
					}
			
					const opts = await optimizationSync(params)

					debug("opts ", opts)
					expect(opts).exist
					console.log(opts)
				}
			}
			catch(err) {
				debug("error  ", err)
				expect(err).is.null
			}
		})()
		// TODO: remove `done` call from examples
		done()
	})
})
