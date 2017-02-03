"use strict"

const request = require("superagent")
const saMock  = require("superagent-mocker")(request)

const Route4Me = require("../../src/route4me")

const testApiKey = "11111111111111111111111111111111"

describe("resources/vehicles.spec", () => {
	describe("SDK methods", () => {
		const route4me = new Route4Me(testApiKey)
		const resource = route4me.Vehicles
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

					expect(req).has.property("url")
						.and.is.equal("https://route4me.com/api/vehicles/view_vehicles.php")

					expect(req).has.property("method")
						.and.is.equal("GET")

					expect(req).has.property("body")
						.and.is.null
					expect(req).has.property("query")
						.and.has.property("api_key", testApiKey)

					done()
				})
			})
		})
	})
})
