"use strict"

const request = require("superagent")
const saMock  = require("superagent-mocker")(request)

const helper  = require("./../helper")

const Route4Me = require("../../src/route4me")

const testApiKey = "11111111111111111111111111111111"


describe(helper.toSuiteName(__filename), () => {
	describe("SDK methods", () => {
		const route4me = new Route4Me(testApiKey)
		const resource = route4me.Orders
		let req

		describe("create", () => {
			beforeEach(() => {
				saMock.post("*",  (r) => {
					req = r
					req.method = "POST"
					return { body: {} }
				})
			})

			afterEach(() => {
				saMock.clearRoutes()
			})

			const data = {
				"address_1": "1358 E Luzerne St, Philadelphia, PA 19124, US",
				"cached_lat"            : 48.335991,
				"cached_lng"            : 31.18287,
				"address_alias"         : "Auto test address",
				"address_city"          : "Philadelphia",
				"EXT_FIELD_first_name"  : "Igor",
				"EXT_FIELD_last_name"   : "Progman",
				"EXT_FIELD_email"       : "spam@route4me.com",
				"EXT_FIELD_phone"       : "380380380380",
				"EXT_FIELD_custom_data" : [ {
					"order_id" : "10",
					"name"     : "Bill Soul"
				} ],
			}

			it("should call route4me", (done) => {
				resource.create(data, (err, res) => {
					expect(err).not.exist
					expect(res).exist

					helper.expectRequest(req,
						"POST", "https://route4me.com/api.v4/order.php",
						{ },
						{
							"address_1": "1358 E Luzerne St, Philadelphia, PA 19124, US",
							"cached_lat"            : 48.335991,
							"cached_lng"            : 31.18287,
							"address_alias"         : "Auto test address",
							"address_city"          : "Philadelphia",
							"EXT_FIELD_first_name"  : "Igor",
							"EXT_FIELD_last_name"   : "Progman",
							"EXT_FIELD_email"       : "spam@route4me.com",
							"EXT_FIELD_phone"       : "380380380380",
							"EXT_FIELD_custom_data" : [ {
								"order_id" : "10",
								"name"     : "Bill Soul"
							} ],
						}
					)

					done()
				})
			})
		})

	})
})
