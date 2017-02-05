"use strict"

const utils = require("../src/utils")
const errors   = require("../src/errors")

const helper  = require("./helper")

describe(helper.toSuiteName(__filename), () => {
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

					expect(act).to.be.an.instanceof(errors.Route4MeError)
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
						.throw(errors.Route4MeError)
				})
			})
		})
	})
})
