"use strict"

const request = require("superagent")
const saMock  = require("superagent-mocker")(request)

const helper  = require("./../helper")

const route4me = require("./../../dist")

const testApiKey = "11111111111111111111111111111111"


describe(helper.toSuiteName(__filename), () => {
	describe("SDK methods", () => {
		const route4meClient = new route4me.Route4Me(testApiKey)
		const resource = route4meClient.AutomaticTerritories
		let req

		beforeEach(() => {
			req = null
			saMock.get("*", (r) =>  { req = r; req.method = "GET";    return {} })
			saMock.post("*", (r) => { req = r; req.method = "POST";   return {} })
			saMock.del("*", (r) =>  { req = r; req.method = "DELETE"; return {} })
			saMock.put("*", (r) =>  { req = r; req.method = "PUT";    return {} })
		})

		afterEach(() => {
			saMock.clearRoutes()
		})

		describe("createJob", () => {
			const addresses = [
				{ "id": "1", "lat": 39.86374, "lng": -86.199121 },
				{ "id": "6", "lat": 39.762472, "lng": -84.117212 }
			];
			
			const mode = 0;
			const params = []
			
			it("should call route4me", (done) => {
				resource.createJob(addresses, mode, params, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/automatic-territories",
						{},
						{
							addresses: [
								{ "id": "1", "lat": 39.86374, "lng": -86.199121 },
								{ "id": "6", "lat": 39.762472, "lng": -84.117212 }
							],
							mode: 0,
							params: []
						}
					)
					done()
				})
			})

			it("should call route4me without params", (done) => {
				resource.createJob(addresses, mode, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/automatic-territories",
						{},
						{
							addresses: [
								{ "id": "1", "lat": 39.86374, "lng": -86.199121 },
								{ "id": "6", "lat": 39.762472, "lng": -84.117212 }
							],
							mode: 0,
							params: []
						}
					)
					done()
				})
			})

			it("should call route4me without params and mode", (done) => {
				resource.createJob(addresses, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/automatic-territories",
						{},
						{
							addresses: [
								{ "id": "1", "lat": 39.86374, "lng": -86.199121 },
								{ "id": "6", "lat": 39.762472, "lng": -84.117212 }
							],
							mode: 0,
							params: []
						}
					)
					done()
				})
			})
		})

		describe("getJobStatus", () => {
			it("should call route4me", (done) => {
				const jobId = "85352155";

				resource.getJobStatus(jobId, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/automatic-territories/job-tracker/status/85352155",
						null,
						null
					)
					done()
				})
			})
		})

		describe("getJobResult", () => {
			it("should call route4me", (done) => {
				const jobId = "85352155";

				resource.getJobResult(jobId, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/automatic-territories/job-tracker/result/85352155",
						null,
						null
					)
					done()
				})
			})
		})
	})
})
