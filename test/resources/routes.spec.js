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
			saMock.get("*", (r) =>  { r.method="GET";    req = r; return {} })
			saMock.post("*", (r) => { r.method="POST";   req = r; return {} })
			saMock.del("*", (r) =>  { r.method="DELETE"; req = r; return {} })
			saMock.put("*", (r) =>  { r.method="PUT";    req = r; return {} })
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
			it("should call route4me", (done) => {
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
			it("should call route4me for array parameter", (done) => {
				const options = {}
				resource.remove([5, 3, "67"], options, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req, "DELETE", "https://route4me.com/api.v4/route.php", {
						"route_id": "5,3,67" },
						null
					)
					done()
				})
			})

			it("should call route4me for number parameter", (done) => {
				const options = {}
				resource.remove(896, options, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req, "DELETE", "https://route4me.com/api.v4/route.php", {
						"route_id": "896" },
						null
					)
					done()
				})
			})

			it("should call route4me for simple string parameter", (done) => {
				const options = {}
				resource.remove("756af35", options, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req, "DELETE", "https://route4me.com/api.v4/route.php", {
						"route_id": "756af35" },
						null
					)
					done()
				})
			})

			it("should call route4me for CSV-string parameter", (done) => {
				const options = {}
				resource.remove("756af35, 12,   11, fd5612ab3", options, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req, "DELETE", "https://route4me.com/api.v4/route.php", {
						"route_id": "756af35,12,11,fd5612ab3" },
						null
					)
					done()
				})
			})
		})
	})
})
