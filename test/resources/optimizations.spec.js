"use strict"

const sinon = require("sinon")
const Optimizations = require("../../lib/resources/optimizations")

const testApiKey = "11111111111111111111111111111111"

describe("resources/optimizations.spec", () => {
	let route4me = null

	before( () => {
		route4me = sinon.spy()
	})

	it("list", (done) => {
		const rsc = new Optimizations(route4me)
		rsc.list(1, 1, 1, done)
	})
})
