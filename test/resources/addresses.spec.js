"use strict"

const request = require("superagent")
const saMock  = require("superagent-mocker")(request)
const helper  = require("./../helper")

const Route4Me = require("../../src/route4me")

const testApiKey = "11111111111111111111111111111111"


describe("resources/addresses.spec", () => {
	describe("SDK methods", () => {
		const route4me = new Route4Me(testApiKey)
		const resource = route4me.Addresses
		let req

		beforeEach(() => {
			req = null
			saMock.get("*", (r) =>  { r.method="GET";    req = r; return {} })
			saMock.post("*", (r) => { r.method="POST";   req = r; return {} })
			saMock.del("*", (r) =>  { r.method="DELETE"; req = r; return {} })
			saMock.put("*", (r) =>  { r.method="PUT";    req = r; return {} })
		})

		afterEach(() => {
			saMock.clearRoutes()
		})

		describe("updateCustomData", () => {
			it("should call route4me", (done) => {
				const customFields = { "banana": false }

				resource.updateCustomData(31, 41, customFields, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req, "PUT", "https://route4me.com/api.v4/address.php", {
						"route_id": "41",
						"route_destination_id": "31" },
						{ "banana": false }
					)
					done()
				})
			})
		})
	})
})
