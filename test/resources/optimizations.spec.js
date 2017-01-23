"use strict"

const _     = require("lodash")

const sinon = require("sinon")
const request = require("superagent")
const saMock  = require("superagent-mocker")(request)

const Optimizations = require("../../lib/resources/optimizations")
const Route4Me = require("../../lib/route4me")

const testApiKey = "11111111111111111111111111111111"

describe("resources/optimizations.spec", () => {
	describe("SDK methods", () => {
		const route4me = new Route4Me(testApiKey)
		const resource = new Optimizations(route4me)
		let req = null

		beforeEach(() => {
			req = null
			saMock.get('*', (req) => req)
		})

		afterEach(()=>{
			saMock.clearRoutes()
		})

		describe("list", ()=> {
			it("should call route4me", (done) => {
				resource.list([1,2,3], 100, null, (err, res) => {
					//expect(requestStub.callCount).is.equal(1)
					expect(err).is.null
					expect(res).is.not.null

					expect(res).has.property("url")
						.and.is.equal("https://route4me.com/api.v4/optimization_problem.php")

					expect(res).has.property("body")
					expect(res).has.property("query")

					const q = res.query
					const b = res.body

					expect(q).has.property("states")
						.and.is.equal("1,2,3")
					expect(b).is.null
					done()
				})
			})

			it("should return error on invalid states", done => {
				resource.list(undefined, 100, null, (err, res) => {
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
