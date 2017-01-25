"use strict"

// const _     = require("lodash")
// const sinon = require("sinon")

const request = require("superagent")
const saMock  = require("superagent-mocker")(request)
const helper  = require("./helper")

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
			saMock.post("*", (r) => { req = r; return {} })
			saMock.del("*", (r) => { req = r; return {} })
		})

		afterEach(() => {
			saMock.clearRoutes()
		})

		describe("list", () => {
			it("should call route4me", (done) => {
				resource.list([1, 2, 3], 100, null, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req, "GET", "https://route4me.com/api.v4/optimization_problem.php")
					done()
				})
			})

			it("should return error on invalid states", (done) => {
				resource.list(undefined, 100, null, (err, res) => {
					expect(res).is.empty

					expect(err).is.not.null
					expect(err).is.instanceof(Error)
					expect(err).has.property("message")
						.that.matches(/states/i)
					done()
				})
			})
		})

		describe("get", () => {
			it("should call route4me", (done) => {
				resource.get(3, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req, "GET", "https://route4me.com/api.v4/optimization_problem.php")
					done()
				})
			})
		})

		describe("create", () => {
			it("should call route4me", (done) => {
				resource.create({ "param": 1 }, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req, "POST", "https://route4me.com/api.v4/optimization_problem.php", { body: { "param": 1 } })
					done()
				})
			})
		})

		describe("remove", () => {
			it("should call route4me", (done) => {
				resource.remove(300, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req, "DELETE", "https://route4me.com/api.v4/optimization_problem.php", {})
					done()
				})
			})
		})
	})
})

