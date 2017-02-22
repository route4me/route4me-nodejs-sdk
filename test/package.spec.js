"use strict"

const pkg = require("../")
const helper  = require("./helper")

const pkgRoute4Me = require("../src/route4me")

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
		expect(pkg).have.deep.property("Route4Me.version").and.be.a("string")
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
			expect(route4me).to.be.an.instanceof(pkgRoute4Me)

			// expect(route4me.url_base).to.equal("http://route4me.com")
		})

		it("should be succeed without new", () => {
			const route4me = pkg(testApiKey)

			expect(route4me).to.be.an("object")
			expect(route4me).to.be.an.instanceof(pkgRoute4Me)

			// expect(route4me.url_base).to.equal("http://route4me.com")
		})
	})
})
