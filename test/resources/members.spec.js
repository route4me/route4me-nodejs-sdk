"use strict"

const request = require("superagent")
const saMock  = require("superagent-mocker")(request)
const helper  = require("./../helper")

const Route4Me = require("../../src/route4me")

const testApiKey = "11111111111111111111111111111111"


describe.skip("resources/members.spec", () => {
	describe("SDK methods", () => {
		const route4me = new Route4Me(testApiKey)
		const resource = route4me.Members
		let req

		beforeEach(() => {
			req = null
			// TODO : mock in helper
			saMock.get("*", (r) =>  { req = r; req.method = "GET";    return {} })
			saMock.post("*", (r) => { req = r; req.method = "POST";   return {} })
			saMock.del("*", (r) =>  { req = r; req.method = "DELETE"; return {} })
			saMock.put("*", (r) =>  { req = r; req.method = "PUT";    return {} })
		})

		afterEach(() => {
			saMock.clearRoutes()
		})

		describe("create", () => {
			const data = {}
			it("should call route4me", (done) => {
				resource.create(data, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req,
						"POST", "https://route4me.com/api.v4/territory.php", {},
						data
					)
					done()
				})
			})
		})
	})
})
