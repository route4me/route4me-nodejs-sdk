"use strict"

const request = require("superagent")
const saMock  = require("superagent-mocker")(request)

const helper  = require("../helper")

const route4me = require("./../../dist")

const testApiKey = "11111111111111111111111111111111"


describe(helper.toSuiteName(__filename), () => {
	describe("SDK methods", () => {
		const route4meClient = new route4me.Route4Me(testApiKey)
		const resource = route4meClient.Vehicles
		let req

		beforeEach(() => {
			req = null
			// TODO : mock in helper
			saMock.get("*",  (r) => { req = r; req.method = "GET";    return { "body": {} } })
			saMock.post("*", (r) => { req = r; req.method = "POST";   return { "body": {} } })
			saMock.del("*",  (r) => { req = r; req.method = "DELETE"; return { "body": {} } })
			saMock.put("*",  (r) => { req = r; req.method = "PUT";    return { "body": {} } })
		})

		afterEach(() => {
			saMock.clearRoutes()
		})

		describe("list", () => {
			it("should call route4me", (done) => {
				resource.list((err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"GET",
						route4meClient.baseUrl() + "/api.v4/vehicle.php",
						{},
						null
					)
					done()
				})
			})
		})
	})
})
