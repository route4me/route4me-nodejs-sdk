"use strict"

const pkg = require("../")

describe("package.spec", () => {
	it("should export a function", () => {
		expect(pkg).to.be.a("function")
		expect(pkg).have.property("version").and.be.a("string")
	})

	it("should export a Route4Me", () => {
		expect(pkg).have.property("Route4Me")
			.and.be.a("function")
		expect(pkg).have.deep.property("Route4Me.version").and.be.a("string")
	})

	it("should export a Route4MeError", () => {
		expect(pkg).have.property("Route4MeError")
			.and.be.a("function")
	})
})
