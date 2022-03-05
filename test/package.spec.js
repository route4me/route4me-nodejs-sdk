"use strict"

const pkg = require("./../dist")
const helper  = require("./helper")

const testApiKey = "11111111111111111111111111111111"

describe(helper.toSuiteName(__filename), () => {
	it("should export a function", () => {
		expect(pkg).to.be.a("function")
		expect(pkg).have.property("version")
			.that.is.a("string")
	})

	it("should export a Route4Me", () => {
		expect(pkg).have.property("Route4Me")
			.that.is.a("function")
		expect(pkg).has.deep.property("Route4Me.version").and.be.a("string")
	})

	it("should export a Route4MeError", () => {
		expect(pkg).have.property("Route4MeError")
			.that.is.a("function")
	})

	it("should export a Route4MeApiError", () => {
		expect(pkg).have.property("Route4MeApiError")
			.that.is.a("function")
	})

	describe("create an instance of Route4Me", () => {
		it("should be succeed with new", () => {
			const Route4Me = pkg
			const route4me = new Route4Me(testApiKey)

			expect(route4me).to.be.an("object")
			expect(route4me).to.be.an.instanceof(pkg.Route4Me)

			// expect(route4me.url_base).to.equal("http://route4me.com")
		})

		it("should be succeed without new", () => {
			const route4me = pkg(testApiKey)

			expect(route4me).to.be.an("object")
			expect(route4me).to.be.an.instanceof(pkg.Route4Me)

			// expect(route4me.url_base).to.equal("http://route4me.com")
		})
	})

	describe("create an instance of Route4MeApiError", () => {
		it("should be succeed with new", () => {
			const e = new pkg.Route4MeApiError("Test", { statusCode: 400, request: { url: "test.com"}}, 100);

			expect(e.name).is.equal("Route4MeApiError")
			expect(e.message).is.equal("Test")
			expect(e.statusCode).is.equal(400)
			expect(e.apiPath).is.equal("test.com")
			expect(e.innerError).is.equal(100)
		})
	})
})
