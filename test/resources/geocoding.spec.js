"use strict"

const request = require("superagent")
const saMock  = require("superagent-mocker")(request)

const helper  = require("../helper")

const Route4Me = require("../../src/route4me")

const testApiKey = "11111111111111111111111111111111"

describe(helper.toSuiteName(__filename), () => {
	describe("SDK methods", () => {
		const route4me = new Route4Me(testApiKey)
		const resource = route4me.Geocoding
		let req

		beforeEach(() => {
			req = null
			// TODO : mock in helper
			saMock.get("*",  (r) => { req = r; req.method = "GET";    return { "body": {} } })
			saMock.post("*", (r) => { req = r; req.method = "POST";   return { "body": {} } })
			saMock.del("*",  (r) => { req = r; req.method = "DELETE"; return { "body": {} } })
			saMock.put("*",  (r) => { req = r; req.method = "PUT";    return { "body": {} } })
		})

		afterEach(() => {
			saMock.clearRoutes()
		})

		describe("forward", () => {
			it("should call route4me", (done) => {
				const address = "Los Angeles International Airport, CA"

				resource.forward(address, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req, "GET",
						"https://route4me.com/api/geocoder.php",
						{
							addresses: "Los Angeles International Airport, CA",
							format: "json",
						},
						null
					)

					done()
				})
			})
		})

		describe("reverse", () => {
			it("should call route4me", (done) => {
				const latitude = 33.945705
				const longitude = -118.391105

				resource.reverse(latitude, longitude, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req, "GET",
						"https://route4me.com/api/geocoder.php",
						{
							addresses: "33.945705,-118.391105",
							format: "json",
						},
						null
					)

					done()
				})
			})
		})

		describe("rapid", () => {
			describe("rapidGet", () => {
				it("should call route4me", (done) => {
					resource.rapidGet(121, (err, res) => {
						expect(err).is.null
						expect(res).to.exist

						helper.expectRequest(req, "GET",
							"https://rapid.route4me.com/street_data/121/",
							{},
							null
						)

						done()
					})
				})
			})

			describe("rapidSearch", () => {
				const testCases = [{
					msg: "for +lim +ofs +zip +hs",
					criteria: { zipcode: "00000", houseNumber: 111 },
					options: { limit: 333, offset: 222 },
					expUrl: "https://rapid.route4me.com/street_data/service/00000/111/222/333/",
				}, {
					msg: "for +lim +ofs +zip -hs",
					criteria: { zipcode: "00000" },
					options: { limit: 333, offset: 222 },
					expUrl: "https://rapid.route4me.com/street_data/zipcode/00000/222/333/",
				}, {
					msg: "for -lim -ofs +zip -hs",
					criteria: { zipcode: "10001" },
					options: null,
					expUrl: "https://rapid.route4me.com/street_data/zipcode/10001/",
				}, {
					msg: "for -lim -ofs -zip -hs",
					criteria: {},
					options: null,
					expUrl: "https://rapid.route4me.com/street_data/",
				}
				]

				testCases.forEach((tc) => {
					it(`${tc.msg} should call route4me`, (done) => {
						resource.rapidSearch(tc.criteria, tc.options, (err, res) => {
							expect(err).is.null
							expect(res).to.exist

							helper.expectRequest(req,
								"GET", tc.expUrl,
								{},
								null
							)

							done()
						})
					})
				}) // testCases forEach
			})
		})
	})
})
