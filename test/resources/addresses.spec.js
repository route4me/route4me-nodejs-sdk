"use strict"

const request = require("superagent")
const saMock  = require("superagent-mocker")(request)

const helper  = require("./../helper")

const route4me = require("./../../dist")

const testApiKey = "11111111111111111111111111111111"


describe(helper.toSuiteName(__filename), () => {
	describe("SDK methods", () => {
		const route4meClient = new route4me.Route4Me(testApiKey)
		const resource = route4meClient.Addresses
		let req

		beforeEach(() => {
			req = null
			// TODO : mock in helper
			saMock.get("*", (r) =>  { req = r; req.method = "GET";    return {} })
			saMock.post("*", (r) => { req = r; req.method = "POST";   return {} })
			saMock.del("*", (r) =>  { req = r; req.method = "DELETE"; return {} })
			// saMock.put("*", (r) =>  { req = r; req.method = "PUT";    return {} })
		})

		afterEach(() => {
			saMock.clearRoutes()
		})

		describe("get", () => {
			it("should call route4me", (done) => {
				const options = { includeNotes: true }
				resource.get(167899269, "241466F15515D67D3F951E2DA38DE76D", options, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req,
						"GET", "https://api.route4me.com/api.v4/address.php",
						{
							"route_id": "241466F15515D67D3F951E2DA38DE76D",
							"route_destination_id": "167899269",
							"notes": "1",
						},
						null
					)
					done()
				})
			})
		})

		describe("updateCustomData", () => {
			beforeEach(() => {
				// TODO : mock in helper
				saMock.put("*", (r) =>  { req = r; req.method = "PUT"; return {} })
			})

			afterEach(() => {
				saMock.clearRoutes()
			})

			it("should call route4me", (done) => {
				const customFields = { "banana": false }

				resource.updateCustomData(31, 41, customFields, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req, "PUT", "https://api.route4me.com/api.v4/address.php", {
						"route_id": "41",
						"route_destination_id": "31" },
						{ "banana": false }
					)
					done()
				})
			})
		})

		describe("markDetectedVisited", () => {
			beforeEach(() => {
				// TODO : mock in helper
				saMock.put("*", (r) =>  { req = r; req.method = "PUT"; return {} })
			})

			afterEach(() => {
				saMock.clearRoutes()
			})

			it("should call route4me", (done) => {
				resource.markDetectedVisited(31, 41, true, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req,
						"PUT", "https://api.route4me.com/api.v4/address.php",
						{
							"route_destination_id": "31",
							"route_id": "41",
						},
						{
							"is_visited": true
						}
					)
					done()
				})
			})
		})

		describe("markDetectedDeparted", () => {
			beforeEach(() => {
				// TODO : mock in helper
				saMock.put("*", (r) =>  { req = r; req.method = "PUT"; return {} })
			})

			afterEach(() => {
				saMock.clearRoutes()
			})

			it("should call route4me", (done) => {
				resource.markDetectedDeparted(12, 13, false, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req,
						"PUT", "https://api.route4me.com/api.v4/address.php",
						{
							"route_destination_id": "12",
							"route_id": "13",
						},
						{
							"is_departed": false
						}
					)
					done()
				})
			})
		})

		describe("markVisited", () => {
			beforeEach(() => {
				// TODO : mock in helper
				saMock.put("*", (r) =>  { req = r; req.method = "PUT"; return { body: { status: true } } })
			})

			afterEach(() => {
				saMock.clearRoutes()
			})

			it("should call route4me", (done) => {
				resource.markVisited(31, 41, 51, true, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req,
						"PUT", "https://api.route4me.com/actions/address/update_address_visited.php",
						{
							"address_id": "31",
							"route_id": "41",
							"member_id": "51",
							"is_visited": "1",
						},
						null
					)
					done()
				})
			})
		})

		describe("markDeparted", () => {
			beforeEach(() => {
				// TODO : mock in helper
				saMock.put("*", (r) =>  { req = r; req.method = "PUT"; return { body: { status: true } } })
			})

			afterEach(() => {
				saMock.clearRoutes()
			})

			it("should call route4me", (done) => {
				resource.markDeparted(12, 13, 14, false, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req,
						"PUT", "https://api.route4me.com/api/route/mark_address_departed.php",
						{
							"address_id": "12",
							"route_id": "13",
							"member_id": "14",
							"is_departed": "0"
						},
						null
					)
					done()
				})
			})
		})
	})
})
