"use strict"

const Ajv = require("ajv")

const Route4Me = require("../src/route4me")

const helper = require("./helper")

const jsonschemaOptimization = require("./REMOVE.Optimizations.Response.jsonschema")
const jsonschemaOptimizationMany = require("./REMOVE.Optimizations.ResponseMany.jsonschema")
const jsonschemaRouteParameters = require("./REMOVE.Route.Parameters.jsonschema")
const jsonschemaAddress = require("./REMOVE.Address.jsonschema")
const jsonschemaGeocoding = require("./REMOVE.Geocoding.jsonschema")
const jsonschemaNote = require("./REMOVE.Note.jsonschema")
const jsonschemaDirection = require("./REMOVE.Direction.jsonschema")
const jsonschemaDataObjectRoute = require("./REMOVE.DataObjectRoute.jsonschema")
const jsonschemaLinks = require("./REMOVE.Links.jsonschema")
const jsonschemaTrackingHistory = require("./REMOVE.TrackingHistory.jsonschema")

const testApiKey = "11111111111111111111111111111111"

describe(helper.toSuiteName(__filename), () => {
	const states = [1,2,3,4,5,6,7]
	const options = { limit: 10 }
	helper.describeIntegration("UNMOCKED Access to `Optimizations` list", function a() {
		this.timeout(5000)
		this.slow(4000)
		this.retries(3)

		let route4me

		describe("Without embed validation", () => {
			before(() => {
				route4me = new Route4Me(testApiKey)
			})

			it("should return a list of optimizations", (done) => {
				route4me.Optimizations.list(states, options, (err, res) => {
					expect(err).is.null
					expect(res).is.not.empty

					expect(res)
						.is.an("object")
						.that.has.property("optimizations")
						.has.deep.property("[0]")
							.that.is.an("object")
							.and.has.property("optimization_problem_id")

					// validate all optimizations with jsonShema
					res["optimizations"].forEach((opt) => {
						expect(opt).to.be.jsonSchema(jsonschemaOptimization)
					})

					done()
				})
			})
		})

		describe("With validation", () => {
			let validationCallCount

			function validate_onlyVehicleSchema(obj, schemaName) {
				validationCallCount += 1

				if ("Optimizations.Optimizations" !== schemaName) {
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
				ajv.addSchema(jsonschemaAddress, "Address")
				ajv.addSchema(jsonschemaNote, "Note")
				ajv.addSchema(jsonschemaDirection, "Direction")
				ajv.addSchema(jsonschemaDataObjectRoute, "DataObjectRoute")
				ajv.addSchema(jsonschemaLinks, "Links")
				ajv.addSchema(jsonschemaTrackingHistory, "TrackingHistory")

				ajv.addSchema(jsonschemaGeocoding, "Geocoding")
				ajv.addSchema(jsonschemaRouteParameters, "Route.Parameters")
				ajv.addSchema(jsonschemaOptimization, "Optimizations.Response")
				ajv.addSchema(jsonschemaOptimizationMany, "Optimizations.ResponseMany")

				const valid = ajv.validate("Optimizations.ResponseMany", obj)
				if (!valid) {
console.log(ajv.errors)
					return new Error(`Test validation error ${ajv.errors}`)
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

			it("should return a list of optimizations", (done) => {
				route4me.Optimizations.list(states, options, (err, res) => {
					expect(err).is.not.exist
					expect(res).exist
					expect(res)

					// errors will be detected on validation!

					expect(validationCallCount, "Uncaught AssertionError: expected validationCallCount to equal 1").to.equal(1)
					done()
				})
			})
		})
	})
})
