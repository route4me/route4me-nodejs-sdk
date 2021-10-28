"use strict"

const path    = require("path")
const _       = require("lodash")

const runIntegrationTests = "1" === process.env["TEST_INTEGRATION"]
//const describeIntegration = runIntegrationTests ? describe : describe.skip
const describeIntegration = describe
function expectRequest(req, method, url, query, body, contentType /* , form */) {
	const ct = contentType || "application/json"

	expect(req).has.property("url")
		.and.is.equal(url)

	expect(req).has.property("method")
		.and.is.equal(method)

	expect(req).has.property("headers")
		.that.has.property("content-type", ct)

	// QUERY assertions
	expect(req).has.property("query")
		.with.property("api_key")
		.that.is.exist
		.that.not.oneOf(["null", "undefined", ""])

	const qs = _({})
		.merge(req.query)
		.omit("api_key")
		.value()

	if (query) {
		expect(qs).is.deep.equal(query)
	} else {
		expect(qs).is.empty
	}

	// BODY assertions
	if (body) {
		expect(req).has.property("body")
			.that.is.deep.equal(body)
	} else {
		expect(req).has.property("body")
			.and.is.null
	}

	// if (form) {
	// 	expect(req).has.property("form")
	// 		.that.is.deep.equal(form)
	// } else {
	// 	expect(req).has.not.property("form")
	// }
}

function toSuiteName(filename) {
	const ext = path.extname(filename)
	const re = new RegExp(`${ext}$`, "i")
	return path.relative(process.cwd(), filename)
		.replace(re, "")
		.toLowerCase()
}

exports.expectRequest = expectRequest
exports.describeIntegration = describeIntegration
exports.toSuiteName = toSuiteName
