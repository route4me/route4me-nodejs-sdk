"use strict"

// const _     = require("lodash")
// const sinon = require("sinon")

const request = require("superagent")
const saMock  = require("superagent-mocker")(request)

const Optimizations = require("../../src/resources/optimizations")
const Route4Me = require("../../src/route4me")

const testApiKey = "11111111111111111111111111111111"

describe("resources/optimizations.spec", () => {
	describe("SDK methods", () => {
		const route4me = new Route4Me(testApiKey)
		const resource = new Optimizations(route4me)
		let req

		beforeEach(() => {
			req = null
			saMock.get("*", (r) => { req = r; return {} })
		})

		afterEach(() => {
			saMock.clearRoutes()
		})

		describe("list", () => {
			it("should call route4me", (done) => {
				resource.list([1, 2, 3], 100, null, (err, res) => {
					// expect(requestStub.callCount).is.equal(1)
					expect(err).is.null
					expect(res).is.not.null

					expect(req).has.property("url")
						.and.is.equal("https://route4me.com/api.v4/optimization_problem.php")

					expect(req).has.property("body")
					expect(req).has.property("query")

					const q = req.query
					const b = req.body

					expect(q).has.property("states")
						.and.is.equal("1,2,3")
					expect(b).is.null
					done()
				})
			})

			it("should return error on invalid states", (done) => {
				resource.list(undefined, 100, null, (err, res) => {
					expect(res).is.empty

					expect(err).is.not.null
					expect(err).is.instanceof(Error)
					expect(err).has.property("message")
						.and.matches(/states/i)
					done()
				})
			})
		})
	})
})
