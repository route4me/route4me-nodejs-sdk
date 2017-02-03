"use strict"

const request = require("superagent")
const sinon = require("sinon")
const saMock  = require("superagent-mocker")(request)
const helper  = require("./../helper")

const Route4Me = require("../../src/route4me")

const testApiKey = "11111111111111111111111111111111"


describe("resources/address-book.spec", () => {
	describe("SDK methods", () => {
		const route4me = new Route4Me(testApiKey)
		const resource = route4me.AddressBook
		let req

		beforeEach(() => {
			req = null
			// TODO : mock in helper
			saMock.get("*", (r) =>  { req = r; req.method = "GET";    return {} })
			saMock.post("*", (r) => { req = r; req.method = "POST";   return {} })
			saMock.del("*", (r) =>  { req = r; req.method = "DELETE"; return {} })
			saMock.put("*", (r) =>  { req = r; req.method = "PUT";    return {} })
		})

		afterEach(() => {
			saMock.clearRoutes()
		})

		describe("create", () => {
			const data = {
				"member_id": 177496,
				"address_group": "",
				"address_alias": "301 MARKET SHELL",
				"address_1": "17205 RICHMOND TNPK, MILFORD, VA, 22514",
				"first_name": "Gela",
				"last_name": "Gorason",
				"address_email": "ggora@gmail.com",
				"address_phone_number": "8046335852",
				"address_city": "Tbilisi",
				"address_state_id": "TB",
				"address_country_id": "GEO",
				"address_zip": "00167",
				"cached_lat": "38.024654",
				"cached_lng": "-77.338814",
				"address_custom_data": {
					"sales rep id": "545",
					"sales rep name": "Kellye Foster",
					"retailer id": "173907",
				}
			}

			it("should call route4me", (done) => {
				resource.create(data, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req,
						"POST", "https://route4me.com/api.v4/address_book.php", {},
						data
					)
					done()
				})
			})
		})

		describe("getMany", () => {
			const testCases = [
				{ msg: "for for number",
					ids: 152,
					expQuery: { "address_id": "152" },
				},
				{ msg: "for simple string",
					ids: "9761",
					expQuery: { "address_id": "9761" },
				},
				{ msg: "for array of numbers",
					ids: [123, 456],
					expQuery: { "address_id": "123,456" },
				},
				{ msg: "for array of strings",
					ids: ["181729", "9128191"],
					expQuery: { "address_id": "181729,9128191" },
				},
				{ msg: "for CSV-string",
					ids: "59783,78230,   11, 10005",
					expQuery: { "address_id": "59783,78230,11,10005" },
				},
			]

			testCases.forEach((tc) => {
				it(`${tc.msg} should call route4me`, (done) => {
					resource.getMany(tc.ids, (err, res) => {
						expect(err).is.null
						expect(res).is.not.null
						helper.expectRequest(req,
							"GET", "https://route4me.com/api.v4/address_book.php",
							tc.expQuery,
							null
						)
						done()
					})
				})
			})
		})

		describe("list", () => {
			let mock
			const options = {
				"offset": 3173,
			}

			before(() => {
				mock = sinon.mock(resource)
			})

			after(() => {
				mock.verify()
				mock.restore()
			})

			it("should be an alias for search", (done) => {
				mock.expects("search")
					.once()
					.withExactArgs(undefined, options, sinon.match.any)
					.callsArg(2) // call DONE (second argument)

				resource.list(options, (/* err, res */) => {
					done()
				})
			})
		})

		describe("search", () => {
			const options = {
				fields: ["first_name", "address_email"],
				routed: true, // false, undefined // display
				offset: 100,
				limit: 15,
			}
			const query = "dan"

			it("should call route4me", (done) => {
				resource.search(query, options, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req,
						"GET", "https://route4me.com/api.v4/address_book.php",
						{
							"query": "dan",
							"offset": "100",
							"limit": "15",
							"fields": "first_name,address_email",
							"display": "routed"
						},
						null
					)
					done()
				})
			})
		})

		describe("update", () => {
			const data = {
				"address_id": 6879135,
				"member_id": 1,
				"curbside_lat": 38.024654,
				"curbside_lng": -77.338814,
				"first_name": "Modified"
			}

			it("should call route4me", (done) => {
				resource.update(7364, data, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req,
						"PUT", "https://route4me.com/api.v4/address_book.php",
						{},
						{
							"address_id": 7364,
							"member_id": 1,
							"curbside_lat": 38.024654,
							"curbside_lng": -77.338814,
							"first_name": "Modified"
						}
					)
					done()
				})
			})
		})

		describe("remove", () => {
			const testCases = [
				{ msg: "for for number",
					ids: 152,
					expBody: { "address_ids": ["152"] },
				},
				{ msg: "for sinmple string",
					ids: "9761",
					expBody: { "address_ids": ["9761"] },
				},
				{ msg: "for array of numbers",
					ids: [123, 456],
					expBody: { "address_ids": ["123", "456"] },
				},
				{ msg: "for array of strings",
					ids: ["181729", "9128191"],
					expBody: { "address_ids": ["181729", "9128191"] },
				},
				{ msg: "for CSV-string",
					ids: "59783,78230,   11, 10005",
					expBody: { "address_ids": ["59783", "78230", "11", "10005"] },
				},
			]

			testCases.forEach((tc) => {
				it(`should call route4me ${tc.msg}`, (done) => {
					resource.remove(tc.ids, (err, res) => {
						expect(err).is.null
						expect(res).is.not.null

						helper.expectRequest(req,
							"DELETE", "https://route4me.com/api.v4/address_book.php",
							{},
							tc.expBody
						)

						done()
					})
				})
			})
		})
	})
})
