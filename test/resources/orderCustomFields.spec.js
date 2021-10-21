"use strict"

const request = require("superagent")
const saMock  = require("superagent-mocker")(request)

const helper  = require("../helper")

const route4me = require("../../dist")

const testApiKey = "11111111111111111111111111111111"


describe(helper.toSuiteName(__filename), () => {
	describe("orderCustomFields SDK methods", () => {
		const route4meClient = new route4me.Route4Me(testApiKey)
		const resource = route4meClient.OrderCustomFields		
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
				"order_custom_field_name": "CustomField4",
				"order_custom_field_label": "Custom Field 4",
				"order_custom_field_type": "checkbox",
				"order_custom_field_type_info": {
					"short_label": "cFl4"
				}
			}			
			it(" orderCustomFields should call route4me", (done) => {
				resource.create(data, (err, res) => {
					expect(err).not.exist
					expect(res).exist
					console.log("111111111");
					console.log(res);

					helper.expectRequest(req,
						"POST", "https://route4me.com/api.v4/order_custom_user_fields.php",
						{ },
						{
							"order_custom_field_name": "CustomField4",
							"order_custom_field_label": "Custom Field 4",
							"order_custom_field_type": "checkbox",
							"order_custom_field_type_info": {
								"short_label": "cFl4"
							}
						
						}
					)

					done()
				})
			})
		})

		describe("get", () => {
			beforeEach(() => {
				saMock.get("*",  (r) => {
					req = r
					req.method = "GET"
					return { body: {} }
				})
			})

			afterEach(() => {
				saMock.clearRoutes()
			})

			const orderId = 7205711

			it("orderCustomFields should call route4me", (done) => {
				resource.get(orderId, (err, res) => {
					expect(err).not.exist
					expect(res).exist

					helper.expectRequest(req,
						"GET", "https://route4me.com/api.v4/order_custom_user_fields.php", {
							"order_id": "7205711",
						},
						null
					)

					done()
				})
			})
		})
		describe("update", () => {
			beforeEach(() => {
				saMock.put("*",  (r) => {
					req = r
					req.method = "PUT"
					return { body: {}}
				})
			})

			afterEach(() => {
				saMock.clearRoutes()
			})

			const orderId = "507516"
			const data = {
				"order_id": 507516,
				"custom_user_fields": [
				  {
					   "order_custom_field_id": 922,
					   "order_custom_field_value": "100"
				  }
				]			
			}

			it("orderCustomFields should call route4me", (done) => {
				resource.update(orderId, data, (err, res) => {
					expect(err).not.exist
					expect(res).exist

					helper.expectRequest(req,
						"PUT", "https://route4me.com/api.v4/order_custom_user_fields.php", {
							"redirect": "0",
						}, {
							"order_id": 507516,
							"custom_user_fields": [
								{
									"order_custom_field_id": 922,
									"order_custom_field_value": "100"
								}
							]			
						}
					)

					done()
				})
			})
		})

	})
})
