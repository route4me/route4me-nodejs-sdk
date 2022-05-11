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

			describe("for N items as string", () => {
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

			describe("for N items as Array", () => {
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

				const orderIds = [7205711, 7205712]

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

			describe("all routes", () => {
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

				it("should call route4me and receive an array", (done) => {
					resource.list((err, res) => {
						expect(err).not.exist
						expect(res).exist

						helper.expectRequest(req,
							"GET", "https://api.route4me.com/api.v4/order.php", {},
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

			it("should call route4me wihtout criteria", (done) => {
				resource.search(null, options, (err, res) => {
					expect(err).not.exist
					expect(res).exist

					helper.expectRequest(req,
						"GET", "https://api.route4me.com/api.v4/order.php", {
							"limit": "25",
							"redirect": "0",
						},
						null
					)

					done()
				})
			})

			it("should call route4me without options", (done) => {
				resource.search(criteria, (err, res) => {
					expect(err).not.exist
					expect(res).exist

					helper.expectRequest(req,
						"GET", "https://api.route4me.com/api.v4/order.php", {
							"query": "Tbilisi",
							"redirect": "0",
						},
						null
					)

					done()
				})
			})

			it("should call route4me with byAddDate, byScheduledDate", (done) => {
				let criteria = {
					byAddDate: new Date(Date.UTC(1970, 0, 1)),
					byScheduledDate: new Date(Date.UTC(1970, 0, 1))
				};

				resource.search(criteria, options, (err, res) => {
					expect(err).not.exist
					expect(res).exist

					helper.expectRequest(req,
						"GET", "https://api.route4me.com/api.v4/order.php", {
							"day_added_YYMMDD": "1970-01-01",
							"scheduled_for_YYMMDD": "1970-01-01",
							"limit": "25",
							"redirect": "0",
						},
						null
					)

					done()
				})
			})

			it("should call route4me with offset, fields", (done) => {
				options.offset = 0;
				options.fields = "";

				resource.search(null, options, (err, res) => {
					expect(err).not.exist
					expect(res).exist

					helper.expectRequest(req,
						"GET", "https://api.route4me.com/api.v4/order.php", {
							"fields": "",
							"limit": "25",
							"offset": "0",
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

		describe("archive", () => {
			beforeEach(() => {
				saMock.post("*",  (r) => {
					req = r
					req.method = "POST"
					return { body: { } }
				})
			})

			afterEach(() => {
				saMock.clearRoutes()
			})

			it("archive should call route4me", (done) => {
				resource.archive(null, (err, res) => {
					expect(err).not.exist
					expect(res).exist

					helper.expectRequest(req,
						"POST", "https://wh.route4me.com/modules/api/v5.0/orders/archive", {
						}
					)

					done()
				})
			})
		})
			
		describe("history", () => {
			beforeEach(() => {
				saMock.get("*",  (r) => {
					req = r
					req.method = "GET"
					return { body: { } }
				})
			})

			afterEach(() => {
				saMock.clearRoutes()
			})

			const orderId = 11105107
			const trackingNumber = "1"
			
			it("history should call route4me", (done) => {
				resource.history(orderId, trackingNumber, (err, res) => {
					expect(err).not.exist
					expect(res).exist

					helper.expectRequest(req,
						"GET", "https://wh.route4me.com/modules/api/v5.0/orders/history", {
							"order_id": "11105107",
							"tracking_number": "1"
						},
						null
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

			it("orderCustomFields for the one order, should call route4me", (done) => {
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

			it("orderCustomFields for all orders, should call route4me and ", (done) => {
				resource.getOrderCustomFields((err, res) => {
					expect(err).not.exist
					expect(res).exist

					helper.expectRequest(req,
						"GET", "https://api.route4me.com/api.v4/order_custom_user_fields.php", {
							"order_id": "0",
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

			it("orderCustomFields by field_id, should call route4me", (done) => {
				resource.updateOrderCustomFields(data, (err, res) => {
					expect(err).not.exist
					expect(res).exist

					helper.expectRequest(req,
						"PUT", "https://api.route4me.com/api.v4/order_custom_user_fields.php", {
							"redirect": "0",
						}, {
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

		describe("removeOrderCustomFields", () => {
			beforeEach(() => {
				saMock.del("*",  (r) => {
					req = r
					req.method = "DELETE"
					return { body: {} }
				})
			})

			afterEach(() => {
				saMock.clearRoutes()
			})

			const orderId = "507516"

			it("removeOrderCustomFields should call route4me", (done) => {
				resource.removeOrderCustomFields(orderId, (err, res) => {
					expect(err).not.exist
					expect(res).exist

					helper.expectRequest(req,
						"DELETE", "https://api.route4me.com/api.v4/order_custom_user_fields.php", {}, {
							"order_custom_field_id": 507516
						}
					)

					done()
				})
			})
		})
	})
})
