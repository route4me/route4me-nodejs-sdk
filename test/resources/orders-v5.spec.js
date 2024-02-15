"use strict"

const request = require("superagent")
const saMock  = require("superagent-mocker")(request)

const helper  = require("./../helper")
const route4me = require("./../../dist")

const testApiKey = "11111111111111111111111111111111"


describe(helper.toSuiteName(__filename), () => {
	describe("SDK methods", () => {
		const route4meClient = new route4me.Route4Me(testApiKey)
		const resource = route4meClient.OrdersV5
		let req

		describe("create", () => {
			beforeEach(() => {
				saMock.post("*",  (r) => {
					req = r
					req.method = "POST"
					return {}
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
				"first_name": "Igor",
				"last_name": "Progman",
				"email": "spam@route4me.com",
				"phone": "380380380380",
				"custom_data": [{
					"order_id": "10",
					"name": "Bill Soul"
				}],
			}

			it("should call route4me", (done) => {
				resource.create(data, (err, res) => {
					expect(err).not.exist
					expect(res).is.not.null

					helper.expectRequest(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/orders-platform/create",
						{},
						{
							"address_1": "1358 E Luzerne St, Philadelphia, PA 19124, US",
							"cached_lat": 48.335991,
							"cached_lng": 31.18287,
							"address_alias": "Auto test address",
							"address_city": "Philadelphia",
							"first_name": "Igor",
							"last_name": "Progman",
							"email": "spam@route4me.com",
							"phone": "380380380380",
							"custom_data": [{
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
					return {}
				})
			})

			afterEach(() => {
				saMock.clearRoutes()
			})

			const orderId = "ABCDEF0987654321"

			it("should call route4me", (done) => {
				resource.get(orderId, (err, res) => {
					expect(err).not.exist
					expect(res).is.not.null

					helper.expectRequest(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/orders-platform/ABCDEF0987654321",
						{}
					)
					done()
				})
			})
		})

		describe("search", () => {
			beforeEach(() => {
				saMock.post("*",  (r) => {
					req = r
					req.method = "POST"
					return {}
				})
			})

			afterEach(() => {
				saMock.clearRoutes()
			})

			const data = {
				filters: {
					order_ids: ["CCCCCA90F77841C693C656123F346AAA"]
				}
			}

			it("should call route4me", (done) => {
				resource.search(data, (err, res) => {
					expect(err).not.exist
					expect(res).is.not.null

					helper.expectRequest(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/orders-platform",
						{},
						{
							"filters": {
								"order_ids": ["CCCCCA90F77841C693C656123F346AAA"]
							}
						}
					)

					done()
				})
			})

			it("should call route4me wihtout parameters", (done) => {
				resource.search((err, res) => {
					expect(err).not.exist
					expect(res).is.not.null

					helper.expectRequest(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/orders-platform",
						{}
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
					return {}
				})
			})

			afterEach(() => {
				saMock.clearRoutes()
			})

			const orderId = "CCCCCA90F77841C693C656123F346AAA"
			const data = {
				"address_2": "Lviv",
				"custom_data": [{ "customer_no": 11 }],
				"phone": "032268593"
			}

			it("should call route4me", (done) => {
				resource.update(orderId, data, (err, res) => {
					expect(err).not.exist
					expect(res).is.not.null

					helper.expectRequest(req,
						"PUT",
						route4meClient.baseUrl5() + "/api/v5.0/orders-platform/CCCCCA90F77841C693C656123F346AAA",
						{},
						{
							"address_2": "Lviv",
							"custom_data": [{ "customer_no": 11 }],
							"phone": "032268593"
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
					return { body: { status: true }}
				})
			})

			afterEach(() => {
				saMock.clearRoutes()
			})

			const orderId = "CCCCCA90F77841C693C656123F346AAA"

			it("should call route4me", (done) => {
				resource.remove(orderId, (err, res) => {
					expect(err).not.exist
					expect(res).is.not.null

					helper.expectRequest(req,
						"DELETE",
						route4meClient.baseUrl5() + "/api/v5.0/orders-platform/CCCCCA90F77841C693C656123F346AAA",
						{}
					)
					done()
				})
			})
		})

		describe("batchUpdateByFilters", () => {
			beforeEach(() => {
				saMock.put("*",  (r) => {
					req = r
					req.method = "PUT"
					return { body: { status: true }}
				})
			})

			afterEach(() => {
				saMock.clearRoutes()
			})

			const params = {
				"data": {
					"address_2": "Lviv",
					"custom_data": [{ "customer_no": 11 }],
					"phone": "032268593"
				},
				"filters": {
					"order_ids": [
						"CCCCCA90F77841C693C656123F346AAA",
						"BBB8CA90F77841C693C656123F346AAA"
					]
				}
			}

			it("should call route4me", (done) => {
				resource.batchUpdateByFilters(params, (err, res) => {
					expect(err).not.exist
					expect(res).is.not.null

					helper.expectRequest(req,
						"PUT",
						route4meClient.baseUrl5() + "/api/v5.0/orders-platform/batch-update/filter",
						{},
						{
							"data": {
								"address_2": "Lviv",
								"custom_data": [{ "customer_no": 11 }],
								"phone": "032268593"
							},
							"filters": {
								"order_ids": [
									"CCCCCA90F77841C693C656123F346AAA",
									"BBB8CA90F77841C693C656123F346AAA"
								]
							}
						}
					)
					done()
				})
			})
		})

		describe("batchRemove", () => {
			beforeEach(() => {
				saMock.post("*",  (r) => {
					req = r
					req.method = "POST"
					return { body: { status: true }}
				})
			})

			afterEach(() => {
				saMock.clearRoutes()
			})

			const orderIds = [
				"CCCCCA90F77841C693C656123F346AAA",
				"BBB8CA90F77841C693C656123F346AAA"
			]

			it("should call route4me", (done) => {
				resource.batchRemove(orderIds, (err, res) => {
					expect(err).not.exist
					expect(res).is.not.null

					helper.expectRequest(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/orders-platform/batch-delete",
						{},
						{
							"order_ids": [
								"CCCCCA90F77841C693C656123F346AAA",
								"BBB8CA90F77841C693C656123F346AAA"
							]
						}
					)
					done()
				})
			})
		})

		describe("batchUpdate", () => {
			beforeEach(() => {
				saMock.post("*",  (r) => {
					req = r
					req.method = "POST"
					return {}
				})
			})

			afterEach(() => {
				saMock.clearRoutes()
			})

			const data = {
				"address_2": "Lviv",
				"custom_data": [{ "customer_no": 11 }],
				"phone": "032268593"
			}
			const orderIds = [
				"CCCCCA90F77841C693C656123F346AAA",
				"BBB8CA90F77841C693C656123F346AAA"
			]

			it("should call route4me with array of ids", (done) => {
				resource.batchUpdate(orderIds, data, (err, res) => {
					expect(err).not.exist
					expect(res).is.not.null

					helper.expectRequest(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/orders-platform/batch-update",
						{},
						{
							"data": {
								"address_2": "Lviv",
								"custom_data": [{ "customer_no": 11 }],
								"phone": "032268593"
							},
							"order_ids": [
								"CCCCCA90F77841C693C656123F346AAA",
								"BBB8CA90F77841C693C656123F346AAA"
							]
						}
					)
					done()
				})
			})
		})

		describe("batchCreate", () => {
			beforeEach(() => {
				saMock.post("*",  (r) => {
					req = r
					req.method = "POST"
					return { body: { status: true }}
				})
			})

			afterEach(() => {
				saMock.clearRoutes()
			})

			const orders = [{
				"address_1": "Lviv",
				"custom_data": [{ "customer_no": 11 }],
				"phone": "032268593"
			}, {
				"address_2": "Lviv",
				"custom_data": [{ "customer_no": 11 }],
				"phone": "032268593"
			}]

			it("should call route4me with array of ids", (done) => {
				resource.batchCreate(orders, (err, res) => {
					expect(err).not.exist
					expect(res).is.not.null

					helper.expectRequest(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/orders-platform/batch-create",
						{},
						{
							"data": [{
								"address_1": "Lviv",
								"custom_data": [{ "customer_no": 11 }],
								"phone": "032268593"
							}, {
								"address_2": "Lviv",
								"custom_data": [{ "customer_no": 11 }],
								"phone": "032268593"
							}],
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
					return {}
				})
			})

			afterEach(() => {
				saMock.clearRoutes()
			})

			const data = {
				"order_custom_field_name": "CustomField4",
				"order_custom_field_label": "Custom Field 4",
				"order_custom_field_type": "checkbox",
				"order_custom_field_type_info": { "short_label": "cFl4" }
			}			
			it(" orderCustomFields should call route4me", (done) => {
				resource.createOrderCustomFields(data, (err, res) => {
					expect(err).not.exist
					expect(res).is.not.null

					helper.expectRequest(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/orders-platform/order-custom-user-fields",
						{},
						{
							"order_custom_field_name": "CustomField4",
							"order_custom_field_label": "Custom Field 4",
							"order_custom_field_type": "checkbox",
							"order_custom_field_type_info": { "short_label": "cFl4" }
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
					return {}
				})
			})

			afterEach(() => {
				saMock.clearRoutes()
			})

			it("orderCustomFields should call route4me", (done) => {
				resource.getOrderCustomFields((err, res) => {
					expect(err).not.exist
					expect(res).is.not.null

					helper.expectRequest(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/orders-platform/order-custom-user-fields",
						{},
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
					return {}
				})
			})

			afterEach(() => {
				saMock.clearRoutes()
			})

			const uuid = "CCCCCA90F77841C693C656123F346AAA"
			const data = {
				"order_custom_field_id": 922,
				"order_custom_field_value": "100"
			}

			it("orderCustomFields should call route4me", (done) => {
				resource.updateOrderCustomFields(uuid, data, (err, res) => {
					expect(err).not.exist
					expect(res).is.not.null

					helper.expectRequest(req,
						"PUT",
						route4meClient.baseUrl5() + "/api/v5.0/orders-platform/order-custom-user-fields/CCCCCA90F77841C693C656123F346AAA",
						{},
						{
							"order_custom_field_id": 922,
							"order_custom_field_value": "100"
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
					return {}
				})
			})

			afterEach(() => {
				saMock.clearRoutes()
			})

			const uuid = "CCCCCA90F77841C693C656123F346AAA"

			it("removeOrderCustomFields should call route4me", (done) => {
				resource.removeOrderCustomFields(uuid, (err, res) => {
					expect(err).not.exist
					expect(res).is.not.null

					helper.expectRequest(req,
						"DELETE",
						route4meClient.baseUrl5() + "/api/v5.0/orders-platform/order-custom-user-fields/CCCCCA90F77841C693C656123F346AAA",
						{}
					)
					done()
				})
			})
		})
	})
})
