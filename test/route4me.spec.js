const Route4Me = require("../lib/route4me")

const testApiKey = "11111111111111111111111111111111"

describe("route4me.spec", () => {
	it("should run with new", () => {
		const route4me = new Route4Me(testApiKey)

		expect(route4me).to.be.an("object")
		expect(route4me).to.be.an.instanceof(Route4Me)

		// expect(route4me.url_base).to.equal("http://route4me.com")
	})

	describe("call constructor with wrong (empty) apiKey", () => {
		[null, undefined, false, ""].forEach((apiKey) => {
			it(`should raise when apiKey=${apiKey}`, () => {
				const fn = () => new Route4Me(apiKey)
				expect(fn).to.throw(/apikey is not set/i)
			})
		})
	})

	describe("methods", () => {
		it("getOptimizations", (done) => {
			const route4me = new Route4Me(testApiKey)
			route4me.getOptimizations(1, 1, 1, done)
		})
	})
})
