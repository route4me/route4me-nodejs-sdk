"use strict"

const request = require("superagent")
const saMock  = require("superagent-mocker")(request)

const helper  = require("./../helper")

const route4me = require("./../../dist")

const testApiKey = "11111111111111111111111111111111"


describe(helper.toSuiteName(__filename), () => {
	describe("SDK methods", () => {
		const route4meClient = new route4me.Route4Me(testApiKey)
		const resource = route4meClient.Orders
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
				"cached_lat": 48.335991,
				"cached_lng": 31.18287,
				"address_alias": "Auto test address",
				"address_city": "Philadelphia",
				"EXT_FIELD_first_name": "Igor",
				"EXT_FIELD_last_name": "Progman",
				"EXT_FIELD_email": "spam@route4me.com",
				"EXT_FIELD_phone": "380380380380",
				"EXT_FIELD_custom_data": [{
					"order_id": "10",
					"name": "Bill Soul"
				}],
			}

			it("should call route4me", (done) => {
				resource.create(data, (err, res) => {
					expect(err).not.exist
					expect(res).exist

					helper.expectRequest(req,
						"POST", "https://api.route4me.com/api.v4/order.php",
						{ },
						{
							"address_1": "1358 E Luzerne St, Philadelphia, PA 19124, US",
							"cached_lat": 48.335991,
							"cached_lng": 31.18287,
							"address_alias": "Auto test address",
							"address_city": "Philadelphia",
							"EXT_FIELD_first_name": "Igor",
							"EXT_FIELD_last_name": "Progman",
							"EXT_FIELD_email": "spam@route4me.com",
							"EXT_FIELD_phone": "380380380380",
							"EXT_FIELD_custom_data": [{
								"order_id": "10",
								"name": "Bill Soul"
							}],
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

			it("should call route4me", (done) => {
				resource.get(orderId, (err, res) => {
					expect(err).not.exist
					expect(res).exist

					helper.expectRequest(req,
						"GET", "https://api.route4me.com/api.v4/order.php", {
							"order_id": "7205711",
						},
						null
					)

					done()
				})
			})
		})

		describe("list", () => {
			describe("for one item", () => {
				beforeEach(() => {
					saMock.get("*",  (r) => {
						req = r
						req.method = "GET"
						return { body: { "order_id": 7205711 } }
					})
				})

				afterEach(() => {
					saMock.clearRoutes()
				})

				const orderIds = "7205711"

				it("should call route4me and receive an array", (done) => {
					resource.list(orderIds, (err, res) => {
						expect(err).not.exist
						expect(res).exist

						helper.expectRequest(req,
							"GET", "https://api.route4me.com/api.v4/order.php", {
								"order_id": "7205711",
							},
							null
						)

						expect(res).is.an("array")
						done()
					})
				})
			})

			describe("for N items", () => {
				beforeEach(() => {
					saMock.get("*",  (r) => {
						req = r
						req.method = "GET"
						return { body: { "results": [{ }, { }], "total": 2 } }
					})
				})

				afterEach(() => {
					saMock.clearRoutes()
				})

				const orderIds = "7205711, 7205712"

				it("should call route4me and receive an array", (done) => {
					resource.list(orderIds, (err, res) => {
						expect(err).not.exist
						expect(res).exist

						helper.expectRequest(req,
							"GET", "https://api.route4me.com/api.v4/order.php", {
								"order_id": "7205711,7205712",
							},
							null
						)

						expect(res).is.an("array")
						done()
					})
				})
			})
		})

		describe("search", () => {
			beforeEach(() => {
				saMock.get("*",  (r) => {
					req = r
					req.method = "GET"
					return { body: { "order_id": 7205711 } }
				})
			})

			afterEach(() => {
				saMock.clearRoutes()
			})

			const criteria = "Tbilisi"
			const options = {
				"limit": 25
			}

			it("should call route4me", (done) => {
				resource.search(criteria, options, (err, res) => {
					expect(err).not.exist
					expect(res).exist

					helper.expectRequest(req,
						"GET", "https://api.route4me.com/api.v4/order.php", {
							"query": "Tbilisi",
							"limit": "25",
							"redirect": "0",
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
					return { body: { } }
				})
			})

			afterEach(() => {
				saMock.clearRoutes()
			})

			const orderId = "7205711"
			const data = {
				"order_id": "34",
				"address_2": "Lviv",
				"EXT_FIELD_custom_data": [
					{
						"customer_no": 11
					}
				],
				"EXT_FIELD_phone": "032268593"
			}

			it("should call route4me", (done) => {
				resource.update(orderId, data, (err, res) => {
					expect(err).not.exist
					expect(res).exist

					helper.expectRequest(req,
						"PUT", "https://api.route4me.com/api.v4/order.php", {
							"redirect": "0",
						}, {
							"order_id": 7205711,
							"address_2": "Lviv",
							"EXT_FIELD_custom_data": [
								{
									"customer_no": 11
								}
							],
							"EXT_FIELD_phone": "032268593"
						}
					)

					done()
				})
			})
		})

		describe("remove", () => {
			beforeEach(() => {
				saMock.del("*",  (r) => {
					req = r
					req.method = "DELETE"
					return { body: { "status": true } }
				})
			})

			afterEach(() => {
				saMock.clearRoutes()
			})

			const orderIds = "7205711 , 7205713"

			it("should call route4me", (done) => {
				resource.remove(orderIds, (err, res) => {
					expect(err).not.exist
					expect(res).exist

					helper.expectRequest(req,
						"DELETE", "https://api.route4me.com/api.v4/order.php", {
							"redirect": "0",
						}, {
							"order_ids": [7205711, 7205713]
						}
					)

					done()
				})
			})
		})

		describe("createOrderCustomFields", () => {
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
				resource.createOrderCustomFields(data, (err, res) => {
					expect(err).not.exist
					expect(res).exist
					console.log("111111111");
					console.log(res);

					helper.expectRequest(req,
						"POST", "https://api.route4me.com/api.v4/order_custom_user_fields.php",
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

		describe("getOrderCustomFields", () => {
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
				resource.getOrderCustomFields(orderId, (err, res) => {
					expect(err).not.exist
					expect(res).exist

					helper.expectRequest(req,
						"GET", "https://api.route4me.com/api.v4/order_custom_user_fields.php", {
							"order_id": "7205711",
						},
						null
					)

					done()
				})
			})
		})
		describe("updateOrderCustomFields", () => {
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
				"custom_user_fields": [
				  {
					   "order_custom_field_id": 922,
					   "order_custom_field_value": "100"
				  }
				]			
			}

			it("orderCustomFields should call route4me", (done) => {
				resource.updateOrderCustomFields(orderId, data, (err, res) => {
					expect(err).not.exist
					expect(res).exist

					helper.expectRequest(req,
						"PUT", "https://api.route4me.com/api.v4/order_custom_user_fields.php", {
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
