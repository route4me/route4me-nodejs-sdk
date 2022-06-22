"use strict"

const sinon = require("sinon")
const helper  = require("./helper")

const Route4Me = require("../dist").Route4Me
const RequestManager = require("../dist/request-manager");
const errors = require("../dist/errors")

const testApiKey = "11111111111111111111111111111111"

describe(helper.toSuiteName(__filename), () => {
	describe("instance API", () => {
		let route4me

		before(() => {
			route4me = new Route4Me(testApiKey)
		})

		it(":version", () => {
			expect(route4me).have.property("version")
				.that.is.a("string")
		})
	})

	describe("call constructor with wrong (empty) apiKey", () => {
		[null, undefined, false, ""].forEach((apiKey) => {
			it(`should raise when apiKey=${apiKey}`, () => {
				const fn = () => new Route4Me(apiKey)
				expect(fn).to.throw(/.?apikey.? is not set/i)
			})
		})
	})

	describe("options", () => {
		describe("logger", () => {
			it("should use passed logger", () => {
				const spy = sinon.spy()
				const testLogger = {
					debug() { spy("debug") },
					info() { spy("info") },
					warn() { spy("warn") },
					error() { spy("error") },
				}

				const route4me = new Route4Me(testApiKey, {
					logger: testLogger,
				})

				expect(route4me).is.not.null
				expect(spy.calledWith("debug")).is.true
				expect(spy.callCount).is.above(1)
			})
		})
	})

	describe("ResponseHandler", () => {
		const spy = sinon.spy();
		const opt = {
			"baseUrl": "test.com",
			"logger": {
				debug() { spy("debug") },
				info() { spy("info") },
				warn() { spy("warn") },
				error() { spy("error") },
			},
			"promise": true,
			"validate": true,
			"userAgent": "superagent"
		};

		describe("RequestManager", () => {
			it("should be succeed with new and Promise", () => {

				let rm = new RequestManager(testApiKey, opt);

				expect(rm).to.be.an.instanceof(RequestManager);
			});

			it("should be succeed with new and with function Promise", () => {

				opt.promise = (res, rej) => {};
				let rm = new RequestManager(testApiKey, opt);

				expect(rm).to.be.an.instanceof(RequestManager);
			});

			describe("_makeRequest", () => {
				it("should throw error without validationContext", () => {

					opt.method = "delete";
					let rm = new RequestManager(testApiKey, opt);

					try {
						let res = rm._makeRequest(opt, () => {});
					} catch(e) {
						expect(e).to.be.an.instanceof(errors.Route4MeError);
					}
				});

				it("should return error if something goes wrong", () => {

					opt.promise = true;
					opt.method = "delete";
					opt.validationContext = "fakedValidationContext";

					let rm = new RequestManager(testApiKey, opt);
					rm._makeRequest(opt)
					.then((res) => {
						// do something useful with res
					})
					.catch((err) => {
						expect(err).to.be.an.instanceof(errors.Route4MeApiError);
					});
				});
			});
		});
	});
})
