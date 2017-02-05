"use strict"

const request = require("superagent")
const saMock  = require("superagent-mocker")(request)
const helper  = require("./../helper")

const Route4Me = require("../../src/route4me")

const testApiKey = "11111111111111111111111111111111"


describe("resources/routes.spec", () => {
	describe("SDK methods", () => {
		const route4me = new Route4Me(testApiKey)
		const resource = route4me.Routes
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

		describe("duplicate", () => {
			it("should call route4me", (done) => {
				resource.duplicate(131, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req, "POST", "https://route4me.com/actions/duplicate_route.php", {
						"route_id": "131",
						"to": "none" },
						null
					)
					done()
				})
			})
		})

		describe("merge", () => {
			const testCases = [
				{ msg: "for string parameter",
					ids: "abcde123",
					expBody: { "0": "abcde123" },
				},
				{ msg: "for CSV-string",
					ids: "56E8F6BF949670F0C0BBAC00590FD116 ,  A6DAA07A7D4737723A9C85E7C3BA2351",
					expBody: { "0": "56E8F6BF949670F0C0BBAC00590FD116", "1": "A6DAA07A7D4737723A9C85E7C3BA2351" }
				},
				{ msg: "for array of string",
					ids: ["56E8F6BF949670F0", "C0BBAC00590FD116", "123", "456"],
					expBody: { "0": "56E8F6BF949670F0", "1": "C0BBAC00590FD116", "2": "123", "3": "456" }
				},
			]

			testCases.forEach((tc) => {
				const m = `should call route4me ${tc.msg}`
				it(m, (done) => {
					resource.merge(tc.ids, (err, res) => {
						expect(err).is.null
						expect(res).is.not.null

						helper.expectRequest(req, "POST",
							"https://route4me.com/actions/merge_routes.php",
							{},
							tc.expBody
						)
						done()
					})
				})
			})
		})

		describe("get", () => {
			it("without options should call route4me", (done) => {
				resource.get(3, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req, "GET", "https://route4me.com/api.v4/route.php", {
						"route_id": "3" },
						null
					)
					done()
				})
			})

			describe("with option `includeTracking`", () => {
				it("should call route4me", (done) => {
					const options = {
						includeTracking: true
					}
					resource.get(11, options, (err, res) => {
						expect(err).is.null
						expect(res).is.not.null
						helper.expectRequest(req, "GET", "https://route4me.com/api.v4/route.php", {
							"route_id": "11",
							"device_tracking_history": "1",
						},
							null
						)
						done()
					})
				})
			})
		})

		describe("list", () => {
			it("should call route4me", (done) => {
				resource.list(17, 19, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req, "GET", "https://route4me.com/api.v4/route.php", {
						"limit": "17",
						"offset": "19" },
						null
					)
					done()
				})
			})
		})

		describe("remove", () => {
			const testCases = [
				{ msg: "for array parameter",      ids: [5, 3, "67"], expQs: { "route_id": "5,3,67" } },
				{ msg: "for number parameter",     ids: 896,          expQs: { "route_id": "896" } },
				{ msg: "for string parameter",     ids: "756af35",    expQs: { "route_id": "756af35" } },
				{ msg: "for CSV-string parameter",
					ids: "756af35, 12,   11, fd5612ab3",
					expQs: { "route_id": "756af35,12,11,fd5612ab3" }
				},
			]

			testCases.forEach((tc) => {
				it(`${tc.msg} should call route4me`, (done) => {
					resource.remove(tc.ids, (err, res) => {
						expect(err).is.null
						expect(res).is.not.null
						helper.expectRequest(req,
							"DELETE", "https://route4me.com/api.v4/route.php",
							tc.expQs,
							null
						)
						done()
					})
				})
			})
		})
	})
})
