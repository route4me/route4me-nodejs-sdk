"use strict"

const utils = require("../lib/utils")

describe("utils.test", () => {
	describe("parseStates", () => {
		[
			{ in: 1,             exp: "1",             msg: "number" },
			{ in: "1",           exp: "1",             msg: "string" },
			{ in: "1,2,2",       exp: "1,2",           msg: "comma separated string" },
			{ in: [1, 2, 2],       exp: "1,2",           msg: "array of numbers" },
			{ in: ["1", "2", "2"], exp: "1,2",           msg: "array of strings" },
		].forEach((tc) => {
			it(`should parse ${tc.msg}`, () => {
				const act = utils.parseStates(tc.in)

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
				const act = utils.parseStates(tc.in)

				expect(act).to.deep.equal(tc.exp)
			})
		});

		[
			{ in: null,             msg: "null" },
			{ in: undefined,        msg: "undefined" },
			{ in: new Date(),       msg: "Date" },
			{ in: false,            msg: "false" },
			{ in: true,             msg: "true" },
			{ in: {},               msg: "object" },
		].forEach((tc) => {
			it(`should return an Error on ${tc.msg}`, () => {
				const act = utils.parseStates(tc.in)

				expect(act).to.be.an.instanceof(Error)
			})
		})
	})
})
