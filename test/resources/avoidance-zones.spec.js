"use strict"

const request = require("superagent")
const saMock  = require("superagent-mocker")(request)
const helper  = require("./../helper")

const Route4Me = require("../../src/route4me")

const testApiKey = "11111111111111111111111111111111"


describe("resources/avoidance-zones.spec", () => {
	describe("SDK methods", () => {
		const route4me = new Route4Me(testApiKey)
		const resource = route4me.AvoidanceZones
		let req

		beforeEach(() => {
			req = null
			saMock.get("*", (r) =>  { r.method = "GET";    req = r; return {} })
			saMock.post("*", (r) => { r.method = "POST";   req = r; return {} })
			saMock.del("*", (r) =>  { r.method = "DELETE"; req = r; return {} })
			saMock.put("*", (r) =>  { r.method = "PUT";    req = r; return {} })
		})

		afterEach(() => {
			saMock.clearRoutes()
		})

		describe("create", () => {
			// yup, even for Avoidance Zones` territory prefixes
			const data = {
				"territory_name": "Test Territory",
				"territory_color": "ff0000",
				"territory": {
					"type": "circle",
					"data": ["37.569752822786455,-77.47833251953125", "5000"]
				}
			}

			it("should call route4me", (done) => {
				resource.create(data, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req, "POST",
						"https://route4me.com/api.v4/avoidance.php", {},
						data
					)
					done()
				})
			})
		})

		describe("get", () => {
			it("should call route4me", (done) => {
				resource.get("adf123ADEDB", (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req,
						"GET", "https://route4me.com/api.v4/avoidance.php",
						{ "territory_id": "adf123ADEDB" },
						null
					)
					done()
				})
			})
		})

		describe("list", () => {
			it("should call route4me", (done) => {
				resource.list((err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req,
						"GET", "https://route4me.com/api.v4/avoidance.php",
						{},
						null
					)
					done()
				})
			})
		})

		describe("update", () => {
			// yup, even for Avoidance Zones` territory prefixes
			const data = {
				"territory_name": "Test Territory",
				"territory_color": "ff0000",
				"territory": {
					"type": "circle",
					"data": ["37.569752822786455,-77.47833251953125", "5000"]
				}
			}

			it("should call route4me", (done) => {
				resource.update("1234567", data, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req, "PUT",
						"https://route4me.com/api.v4/avoidance.php",
						{ "territory_id": "1234567" },
						data
					)
					done()
				})
			})
		})

		describe("remove", () => {
			it("should call route4me", (done) => {
				resource.remove("67adadada0", (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req,
						"DELETE", "https://route4me.com/api.v4/avoidance.php",
						{ "territory_id": "67adadada0" },
						null
					)
					done()
				})
			})
		})
	})
})
