"use strict"

// const _     = require("lodash")
// const sinon = require("sinon")

const request = require("superagent")
const saMock  = require("superagent-mocker")(request)

const Vehicles = require("../../src/resources/vehicles")
const Route4Me = require("../../src/route4me")

const testApiKey = "11111111111111111111111111111111"

describe("resources/vehicles.spec", () => {
	describe("SDK methods", () => {
		const route4me = new Route4Me(testApiKey)
		const resource = new Vehicles(route4me)
		let req

		beforeEach(() => {
			req = null
			saMock.get("*", (r) => { req = r; return { "body": {} } })
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
