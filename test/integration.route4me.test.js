"use strict"

const Ajv = require("ajv")

const Route4Me = require("../src/route4me")
const jsonschemaVehicle = require("./REMOVE.Vehicles.Response.jsonschema")
const jsonschemaVehicleMany = require("./REMOVE.Vehicles.ResponseMany.jsonschema")

const testApiKey = "11111111111111111111111111111111"

const describeIntegration = runIntegrationTests ? describe : describe.skip

describe("integration.route4me.test", () => {

	describeIntegration("UNMOCKED Access to `Vehicles` list", function a() {
		this.timeout(5000)
		this.slow(3000)
		this.retries(3)

		let route4me

		describe("Without embed validation", () => {
			before(() => {
				route4me = new Route4Me(testApiKey)
			})

			it("should return a list of vehicles", (done) => {
				route4me.Vehicles.list((err, res) => {
					expect(err).is.null
					expect(res).is.not.empty

					expect(res)
						.is.an("array")
						.has.deep.property("[0]")
							.that.is.an("object")
							.and.has.property("vehicle_id")

					// validate all vehicles with jsonShema
					res.forEach((vehicle) => {
						expect(vehicle).to.be.jsonSchema(jsonschemaVehicle)
					})

					done()
				})
			})
		})

		describe("With validation", () => {
			let validationCallCount

			function validate_onlyVehicleSchema(obj, schemaName) {
				validationCallCount += 1

				if (schemaName !== "Vehicles.ResponseMany") {
					return new Error(`Unknown schema: ${schemaName}`)
				}

				const ajv = new Ajv({
					"allErrors": false,
					"verbose": true,
					"formats": {
						// HACK: week date validation. API doesn't add TIMEZONE to the value
						"date-time": /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s][0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?$/i,
					},
				})
				ajv.addSchema(jsonschemaVehicle, "Vehicles.Response")
				ajv.addSchema(jsonschemaVehicleMany, "Vehicles.ResponseMany")

				const valid = ajv.validate("Vehicles.ResponseMany", obj)
				if (!valid) {
					return new Error(ajv.errors)
				}

				return obj
			}

			before(() => {
				route4me = new Route4Me(testApiKey, {
					validate: validate_onlyVehicleSchema,
				})
			})

			beforeEach(() => {
				validationCallCount = 0
			})

			it("should return a list of vehicles", (done) => {
				route4me.Vehicles.list((err, res) => {
					expect(err).is.null
					expect(res).is.not.empty

					expect(res)
						.is.an("array")
						.has.deep.property("[0]")
							.that.is.an("object")
							.and.has.property("vehicle_id")

					expect(validationCallCount, "Uncaught AssertionError: expected validationCallCount to equal 1").to.equal(1)
					done()
				})
			})
		})
	})
})


// var answer = 43;

// // AssertionError: expected 43 to equal 42.
// expect(answer).to.equal(42);

// // AssertionError: topic [answer]: expected 43 to equal 42.
// expect(answer, 'topic [answer]').to.equal(42);
