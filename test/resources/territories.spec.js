"use strict"

const request = require("superagent")
const saMock  = require("superagent-mocker")(request)

const helper  = require("./../helper")

// eslint-disable-next-line import/no-dynamic-require
const route4me = require(`${packageRoot}`)

const testApiKey = "11111111111111111111111111111111"

describe(helper.toSuiteName(__filename), () => {
	describe("SDK methods", () => {
		const route4meClient = new route4me.Route4Me(testApiKey)
		const resource = route4meClient.Territories
		let req

		beforeEach(() => {
			req = null
			// TODO : mock in helper
			saMock.get("*", (r) =>  { req = r; req.method = "GET";    return {} })
			saMock.post("*", (r) => { req = r; req.method = "POST";   return {} })
			saMock.put("*", (r) =>  { req = r; req.method = "PUT";    return {} })
		})

		afterEach(() => {
			saMock.clearRoutes()
		})

		describe("create", () => {
			const data = {
				"territory_name": "Polygon Territory",
				"territory_color": "ff0000",
				"territory": {
					"type": "poly",
					"data": [
						"37.769752822786455,-77.67833251953125",
						"37.75886716305343,-77.68974800109863",
						"37.76641925847049,-77.66846199035645",
					]
				}
			}

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

		describe("get", () => {
			it("should call route4me", (done) => {
				const options = { includeAddresses: true }
				resource.get("596A2A44FE9FB19EEB9C3C072BF2D0BE", options, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req,
						"GET", "https://route4me.com/api.v4/territory.php",
						{
							"territory_id": "596A2A44FE9FB19EEB9C3C072BF2D0BE",
							"addresses": "1"
						},
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
						"GET", "https://route4me.com/api.v4/territory.php",
						{},
						null
					)
					done()
				})
			})
		})

		describe("update", () => {
			const data = {
				"territory_name": "Test Territory 12",
				"territory_color": "ff0000",
				"territory": {
					"type": "circle",
					"data": ["37.5697528227121212,-77.478332519151515", "4031"]
				}
			}

			it("should call route4me", (done) => {
				resource.update("39236C3A30F92CA338C41EB0978F9D8A", data, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req, "PUT",
						"https://route4me.com/api.v4/territory.php",
						{ "territory_id": "39236C3A30F92CA338C41EB0978F9D8A" },
						data
					)
					done()
				})
			})
		})

		describe("remove", () => {
			describe("normal case", () => {
				beforeEach(() => {
					saMock.del("*", (r) =>  { req = r; req.method = "DELETE"; return { "body": { "status": true } } })
				})
				afterEach(() => {
					saMock.clearRoutes()
				})

				it("should call route4me", (done) => {
					resource.remove("8506E4725A006B59D5CA2EA375E08B97", (err, res) => {
						expect(err).is.null
						expect(res).is.not.null
						helper.expectRequest(req,
							"DELETE", "https://route4me.com/api.v4/territory.php",
							{ "territory_id": "8506E4725A006B59D5CA2EA375E08B97" },
							null
						)
						done()
					})
				})
			})

			describe("non-existanse territory", () => {
				beforeEach(() => {
					saMock.del("*", (r) =>  { req = r; req.method = "DELETE"; return { "body": { "status": null } } })
				})
				afterEach(() => {
					saMock.clearRoutes()
				})

				it("should invoke callback with not empty error", (done) => {
					resource.remove("AAAAAAAAAAAAAAA9D5CA2EA375E08B97", (err, res) => {
						expect(err).to.exist
						expect(res).to.not.exist

						helper.expectRequest(req,
							"DELETE", "https://route4me.com/api.v4/territory.php",
							{ "territory_id": "AAAAAAAAAAAAAAA9D5CA2EA375E08B97" },
							null
						)
						expect(err).is.instanceof(route4me.Route4MeValidationError)
						expect(err).has.property("message")
							.that.match(/valid/i)
						done()
					})
				})
			})
		})
	})
})
