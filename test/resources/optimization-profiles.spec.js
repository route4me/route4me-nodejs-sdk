"use strict"

const request = require("superagent")
const saMock  = require("superagent-mocker")(request)

const helper  = require("./../helper")

const route4me = require("./../../dist")

const testApiKey = "11111111111111111111111111111111"


describe(helper.toSuiteName(__filename), () => {
	describe("SDK methods", () => {
		const route4meClient = new route4me.Route4Me(testApiKey)
		const resource = route4meClient.OptimizationProfiles
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

		describe("list", () => {

			it("list should call route4me", (done) => {
				resource.list((err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/optimization-profiles/data-list",
						null,
						null
					)
					done()
				})
			})
		})

		describe("save", () => {
			const data = {
				items: [{
					guid: "eaa",
					parts: [{
						guid: "pav",
						data: { "append_date_to_route_name": true }
					}],
					id: "f09e3d22-c1d6-473c-8494-41563034b85b"
				}]
			};

			it("save should call route4me", (done) => {
				resource.save(data, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/optimization-profiles/save-entities",
						null,
						data
					)
					done()
				})
			})
		})

		describe("remove", () => {
			const data = {
				items: [{
					id: "f09e3d22-c1d6-473c-8494-41563034b85b"
				}]
			};

			it("remove should call route4me", (done) => {
				resource.remove(data, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null

					helper.expectRequest(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/optimization-profiles/delete-entities",
						null,
						data
					)

					done()
				})
			})
		})
	})
})
