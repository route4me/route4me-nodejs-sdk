"use strict"

const utils = require("../dist/utils")
const errors = require("../dist/errors")

// // TODO: this will be required, when babel-error-inheritance will be solved.
// const errors   = require("../dist/errors")

const helper  = require("./helper")

describe(helper.toSuiteName(__filename), () => {
	describe("ILogger", () => {
		let log

		before(() => {
			log = new utils.ILogger()
		})

		it("should have debug method", () => {
			const act = log.debug()
			expect(act).is.undefined
		})

		it("should have info method", () => {
			const act = log.info()
			expect(act).is.undefined
		})

		it("should have warn method", () => {
			const act = log.warn()
			expect(act).is.undefined
		})

		it("should have error method", () => {
			const act = log.error()
			expect(act).is.undefined
		})
	})

	describe("CustomInternalPostProcessing", () => {
		it("should convert JSON status to boolean if status in res", () => {
			const act = utils.CustomInternalPostProcessing.fromJsonWithStatus(null, null, { text: "{\"status\":true}" })
			expect(act).is.true
		})

		it("should return Route4MeValidationError if data is null", () => {
			const act = utils.CustomInternalPostProcessing.fromJsonWithStatus(null, null, { text: "" })
			expect(act).to.be.an.instanceof(errors.Route4MeValidationError)
		})

		it("should convert JSON status to boolean if status in data", () => {
			const act = utils.CustomInternalPostProcessing.fromJsonWithStatus({ "status": true }, null, { text: "" })
			expect(act).is.true
		})

		it("should return Route4MeApiError if status false", () => {
			const act = utils.CustomInternalPostProcessing.fromJsonWithStatus({ "status": false }, null, { text: "", statusCode: 400, request: { url: "test.com" }})
			expect(act).to.be.an.instanceof(errors.Route4MeApiError)
		})
	})

	describe("get", () => {
		describe("without default value", () => {
			const testCases = [
				{ msg: "obj = null",  obj: null,            path: "name", exp: undefined },
				{ msg: "obj = undef", obj: undefined,       path: "name", exp: undefined },
				{ msg: "obj = empty", obj: { },             path: "name", exp: undefined },
				{ msg: "simple success case", obj: { name: 111 }, path: "name", exp: 111 },
			]

			testCases.forEach((tc) => {
				it(`${tc.msg}`, () => {
					const act = utils.get(tc.obj, tc.path)
					expect(act).is.equal(tc.exp)
				})
			})
		})

		describe("with default value", () => {
			const testCases = [
				{ msg: "obj = null",    obj: null,      path: "name", def: 1, exp: 1 },
				{ msg: "obj = undef",   obj: undefined,      path: "name", def: 2, exp: 2 },
				{ msg: "obj = empty",   obj: { },            path: "name", def: 3, exp: 3 },
				{ msg: "simple success case", obj: { name: 317 }, path: "name", exp: 317 },
			]

			testCases.forEach((tc) => {
				it(`${tc.msg}`, () => {
					const act = utils.get(tc.obj, tc.path, tc.def)
					expect(act).is.equal(tc.exp)
				})
			})
		})
	})

	describe("mapObject", () => {
		describe("simpleMap", () => {
			const testCases = [
				{ msg: "simple obj",    obj: { "name": 1 }, map: { "name": "X" }, exp: { "X": 1 } },
			]

			testCases.forEach((tc) => {
				it(`${tc.msg}`, () => {
					const act = utils.mapObject(tc.obj, tc.map)
					expect(act).is.deep.equal(tc.exp)
				})
			})
		})

		describe("idempotent", () => {
			const testCases = [
				{ msg: "null",      obj: null },
				{ msg: "undefined", obj: undefined },
			]

			testCases.forEach((tc) => {
				it(`${tc.msg}`, () => {
					const act = utils.mapObject(tc.obj, { "name": "NAME" })
					expect(act).is.deep.equal(tc.obj)
				})
			})
		})
	})

	describe("toStringArray", () => {
		describe("with one arg", () => {
			const testCases = [
				{ msg: "empty string", val: "", exp: [""] },
				{ msg: "number", val: 121, exp: ["121"] },
				{ msg: "string", val: "asdf", exp: ["asdf"] },
				{ msg: "CSV-string", val: "a,s, d,f", exp: ["a", "s", "d", "f"] },
			]

			testCases.forEach((tc) => {
				it(`${tc.msg} handled`, () => {
					const act = utils.toStringArray(tc.val)
					expect(act).eql(tc.exp)
				})
			})
		})

		describe("with two args", () => {
			const testCases = [
				{ msg: "empty string", val: "", trim: false, exp: [""] },
				{ msg: "number", val: 121, trim: false, exp: ["121"] },

				{ msg: "string", val: " asdf ", trim: false, exp: [" asdf "] },
				{ msg: "string", val: " asdf ", trim: true, exp: ["asdf"] },

				{ msg: "CSV-string", val: "  a,s, d,f	", trim: false, exp: ["  a", "s", " d", "f	"] },
				{ msg: "CSV-string", val: "  a,s, d,f	", trim: true, exp: ["a", "s", "d", "f"] },
			]

			testCases.forEach((tc) => {
				const trimstr = tc.trim ? "with" : "without"
				it(`${tc.msg} ${trimstr} trimming handled`, () => {
					const act = utils.toStringArray(tc.val, tc.trim)
					expect(act).eql(tc.exp)
				})
			})
		})

		describe("over invalid arguments", () => {
			const testCases = [
				{ msg: "Date", val: new Date(), trim: false },
				{ msg: "null", val: null, trim: false },
			]

			testCases.forEach((tc) => {
				it(`${tc.msg} cause error thrown`, () => {
					expect(() => {
						utils.toStringArray(tc.val, tc.trim)
					})
						// // TODO: use this code!!
						// .throw(errors.Route4MeError)
						.throw(Error)
				})
			})
		})
	})


	describe("toOptimizationStatesSafe", () => {
		[
			{ in: 1,             exp: "1",             msg: "number" },
			{ in: "1",           exp: "1",             msg: "string" },
			{ in: "1,2,2",       exp: "1,2",           msg: "comma separated string" },
			{ in: [1, 2, 2],       exp: "1,2",           msg: "array of numbers" },
			{ in: ["1", "2", "2"], exp: "1,2",           msg: "array of strings" },
		].forEach((tc) => {
			it(`should parse ${tc.msg}`, () => {
				const act = utils.toOptimizationStatesSafe(tc.in)

				expect(act).to.deep.equal(tc.exp)
			})
		});

		[
			{ in: -1,             exp: "",             msg: "number" },
			{ in: 1000,           exp: "",             msg: "number" },
			{ in: "-1",           exp: "",             msg: "string" },
			{ in: "1000",         exp: "",             msg: "string" },
			{ in: "-1,2,3,1000",  exp: "2,3",          msg: "comma separated string" },
			{ in: [-1, 2, 3, 1000], exp: "2,3",          msg: "array of numbers" },
			{ in: ["-1", "2", "3", "1000"], exp: "2,3",  msg: "array of strings" },
		].forEach((tc) => {
			it(`should keep states in [1,6] for ${tc.msg}`, () => {
				const act = utils.toOptimizationStatesSafe(tc.in)

				expect(act).to.deep.equal(tc.exp)
			})
		})

		describe("on invalid args", () => {
			const testCases = [
				{ in: null,             msg: "null" },
				{ in: undefined,        msg: "undefined" },
				{ in: new Date(),       msg: "Date" },
				{ in: false,            msg: "false" },
				{ in: true,             msg: "true" },
				{ in: {},               msg: "object" },
			]

			testCases.forEach((tc) => {
				it(`like ${tc.msg} should RETURN error`, () => {
					const act = utils.toOptimizationStatesSafe(tc.in)

					// // TODO: use this code!!
					// expect(act).to.be.an.instanceof(errors.Route4MeError)
					expect(act).to.be.an.instanceof(Error)
						.and.have.property("name", "Route4MeError")
				})
			})
		})
	})

	describe("toIsoDateString", () => {
		const testCases = [
			{ in: new Date(Date.UTC(2014, 2, 11)), exp: "2014-03-11" },
		]

		testCases.forEach((tc) => {
			it("should convert date", () => {
				const act = utils.toIsoDateString(tc.in)
				expect(act).to.equal(tc.exp)
			})
		})
	})
})
