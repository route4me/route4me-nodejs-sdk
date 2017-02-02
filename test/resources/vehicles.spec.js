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
			saMock.get("*", (r) =>  { r.method="GET";    req = r; return { "body" : { "val": true }} })
			saMock.post("*", (r) => { r.method="POST";   req = r; return {} })
			saMock.del("*", (r) =>  { r.method="DELETE"; req = r; return {} })
			saMock.put("*", (r) =>  { r.method="PUT";    req = r; return {} })
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
