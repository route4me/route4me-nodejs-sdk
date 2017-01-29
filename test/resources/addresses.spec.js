"use strict"

const request = require("superagent")
const saMock  = require("superagent-mocker")(request)
const helper  = require("./helper")

const Resource = require("../../src/resources/addresses")
const Route4Me = require("../../src/route4me")

const testApiKey = "11111111111111111111111111111111"


describe("resources/addresses.spec", () => {
	describe("SDK methods", () => {
		const route4me = new Route4Me(testApiKey)
		const resource = new Resource(route4me)
		let req

		beforeEach(() => {
			req = null
			saMock.get("*", (r) =>  { req = r; return {} })
			saMock.post("*", (r) => { req = r; return {} })
			saMock.del("*", (r) =>  { req = r; return {} })
			saMock.put("*", (r) =>  { req = r; return {} })
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
