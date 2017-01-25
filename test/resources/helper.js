"use strict"

function expectRequest(req, method, url, options) {
	expect(req).has.property("url")
		.and.is.equal(url)

	expect(req).has.property("method")
		.and.is.equal(method)

	const body = options && options.body
	if (body) {
		expect(req).has.property("body")
			.that.is.deep.equal(body)
	} else {
		expect(req).has.property("body")
			.and.is.null
	}

	expect(req).has.property("query")
		.with.property("api_key")
		.that.is.exist
		.that.not.oneOf(["null", "undefined", ""])
}

exports.expectRequest = expectRequest
