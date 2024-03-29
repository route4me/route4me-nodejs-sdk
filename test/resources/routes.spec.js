"use strict"

const request = require("superagent")
const saMock  = require("superagent-mocker")(request)

const helper  = require("./../helper")

const route4me = require("./../../dist")

const testApiKey = "11111111111111111111111111111111"


describe(helper.toSuiteName(__filename), () => {
	describe("SDK methods", () => {
		const route4meClient = new route4me.Route4Me(testApiKey)
		const resource = route4meClient.Routes
		let req

		beforeEach(() => {
			req = null
			// TODO : mock in helper
			saMock.get("*", (r) =>  { req = r; req.method = "GET";    return { body: {} } })
			saMock.post("*", (r) => { req = r; req.method = "POST";   return { body: {} } })
			saMock.del("*", (r) =>  { req = r; req.method = "DELETE"; return { body: {} } })
			saMock.put("*", (r) =>  { req = r; req.method = "PUT";    return { body: {} } })
		})

		afterEach(() => {
			saMock.clearRoutes()
		})

		describe("get", () => {
			it("without options should call route4me", (done) => {
				resource.get(3, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req,
						"GET",
						route4meClient.baseUrl() + "/api.v4/route.php",
						{ "route_id": "3" },
						null
					)
					done()
				})
			})

			describe("with option `includeTracking`", () => {
				it("should call route4me", (done) => {
					const options = {
						includeTracking: true
					}
					resource.get(11, options, (err, res) => {
						expect(err).is.null
						expect(res).is.not.null
						helper.expectRequest(req,
							"GET",
							route4meClient.baseUrl() + "/api.v4/route.php",
							{
								"route_id": "11",
								"device_tracking_history": "1",
							},
							null
						)
						done()
					})
				})
			})

			describe("with option `includeRoutePath`", () => {
				it("should call route4me", (done) => {
					const options = {
						includeRoutePath: true
					}
					resource.get(117, options, (err, res) => {
						expect(err).is.null
						expect(res).is.not.null
						helper.expectRequest(req,
							"GET",
							route4meClient.baseUrl() + "/api.v4/route.php",
							{
								"route_id": "117",
								"route_path_output": "Points",
							},
							null
						)
						done()
					})
				})
			})

			describe("with option `includeDirections`", () => {
				it("should call route4me", (done) => {
					const options = {
						includeDirections: true
					}
					resource.get(117, options, (err, res) => {
						expect(err).is.null
						expect(res).is.not.null
						helper.expectRequest(req,
							"GET",
							route4meClient.baseUrl() + "/api.v4/route.php",
							{
								"route_id": "117",
								"directions": "1"
							},
							null
						)
						done()
					})
				})
			})

			describe("with option `compressPathPoints`", () => {
				it("should call route4me", (done) => {
					const options = {
						compressPathPoints: true
					}
					resource.get(117, options, (err, res) => {
						expect(err).is.null
						expect(res).is.not.null
						helper.expectRequest(req,
							"GET",
							route4meClient.baseUrl() + "/api.v4/route.php",
							{
								"route_id": "117",
								"compress_path_points": "1"
							},
							null
						)
						done()
					})
				})
			})
		})

		describe("list", () => {
			it("should call route4me", (done) => {
				const options = {
					limit: 17,
					offset: 19,
				}

				resource.list(options, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req,
						"GET",
						route4meClient.baseUrl() + "/api.v4/route.php",
						{
							"limit": "17",
							"offset": "19"
						},
						null
					)
					done()
				})
			})

			it("should call route4me with date period", (done) => {
				const options = {
					limit: 17,
					offset: 19,
					startDate: "2022-01-01",
					endDate: "2022-04-30"
				}

				resource.list(options, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req,
						"GET",
						route4meClient.baseUrl() + "/api.v4/route.php",
						{
							"limit": "17",
							"offset": "19",
							"start_date": "2022-01-01",
							"end_date": "2022-04-30"
						},
						null
					)
					done()
				})
			})
		})

		describe("search", () => {
			it("should call route4me", (done) => {
				const query = "Tbilisi"

				resource.search(query, (err, res) => {
					expect(err).not.exist
					expect(res).exist
					helper.expectRequest(req,
						"GET",
						route4meClient.baseUrl() + "/api.v4/route.php",
						{ "query": "Tbilisi" },
						null
					)
					done()
				})
			})
		})

		describe("update", () => {
			const id = "5C15E83A4BE005BCD1537955D28D51D7"
			const data = {
				"parameters": {
					"member_id": "177496",
					"optimize": "Distance",
					"route_max_duration": "82400",
					"route_name": "updated 040516"
				}
			}

			it("should call route4me", (done) => {
				resource.update(id, data, (err, res) => {
					expect(err).not.exist
					expect(res).exist
					helper.expectRequest(req,
						"PUT",
						route4meClient.baseUrl() + "/api.v4/route.php", 
						{ "route_id": "5C15E83A4BE005BCD1537955D28D51D7" },
						data
					)
					done()
				})
			})
		})

		describe("remove", () => {
			const testCases = [
				{ msg: "for array parameter",      ids: [5, 3, "67"], expQs: { "route_id": "5,3,67" } },
				{ msg: "for number parameter",     ids: 896,          expQs: { "route_id": "896" } },
				{ msg: "for string parameter",     ids: "756af35",    expQs: { "route_id": "756af35" } },
				{ msg: "for CSV-string parameter",
					ids: "756af35, 12,   11, fd5612ab3",
					expQs: { "route_id": "756af35,12,11,fd5612ab3" }
				},
			]

			testCases.forEach((tc) => {
				it(`${tc.msg} should call route4me`, (done) => {
					resource.remove(tc.ids, (err, res) => {
						expect(err).is.null
						expect(res).is.not.null
						helper.expectRequest(req,
							"DELETE", 
							route4meClient.baseUrl() + "/api.v4/route.php",
							tc.expQs,
							null
						)
						done()
					})
				})
			})
		})

		describe("linkAddress", () => {
			const addresses = [
				{
					"address": "Cabo Rojo, Cabo Rojo 00623, Puerto Rico",
					"alias": "",
					"lat": 18.086627,
					"lng": -67.145735,
					"curbside_lat": 18.086627,
					"curbside_lng": -67.145735,
					"contact_id": null,
					"sequence_no": 14,
					"is_departed": false,
					"is_visited": false
				}
			]
			const options = {
				optimalPosition: true,
			}

			it("should call route4me", (done) => {
				resource.linkAddress("5C15E83A4BE005BCD1537955D28D51D7", addresses, options, (err, res) => {
					expect(err).not.exist
					expect(res).exist
					helper.expectRequest(req,
						"PUT",
						route4meClient.baseUrl() + "/api.v4/route.php",
						{ "route_id": "5C15E83A4BE005BCD1537955D28D51D7" },
						{
							"addresses": [
								{
									"address": "Cabo Rojo, Cabo Rojo 00623, Puerto Rico",
									"alias": "",
									"lat": 18.086627,
									"lng": -67.145735,
									"curbside_lat": 18.086627,
									"curbside_lng": -67.145735,
									"contact_id": null,
									"sequence_no": 14,
									"is_departed": false,
									"is_visited": false,
								}
							],
							"optimal_position": true
						}
					)
					done()
				})
			})

			it("should call route4me without options", (done) => {
				resource.linkAddress("5C15E83A4BE005BCD1537955D28D51D7", addresses, (err, res) => {
					expect(err).not.exist
					expect(res).exist
					helper.expectRequest(req,
						"PUT",
						route4meClient.baseUrl() + "/api.v4/route.php",
						{ "route_id": "5C15E83A4BE005BCD1537955D28D51D7" },
						{
							"addresses": [
								{
									"address": "Cabo Rojo, Cabo Rojo 00623, Puerto Rico",
									"alias": "",
									"lat": 18.086627,
									"lng": -67.145735,
									"curbside_lat": 18.086627,
									"curbside_lng": -67.145735,
									"contact_id": null,
									"sequence_no": 14,
									"is_departed": false,
									"is_visited": false,
								}
							],
							"optimal_position": true
						}
					)
					done()
				})
			})
		})

		describe("unlinkAddress", () => {
			beforeEach(() => {
				saMock.del("*",  (r) => {
					req = r
					req.method = "DELETE"
					return { body: { "deleted": true } }
				})
			})

			afterEach(() => {
				saMock.clearRoutes()
			})

			const testCases = [
				{ msg: "for simple address and route",
					id: 153,
					addressId: 1777,
					expQs: {
						"route_id": "153",
						"route_destination_id": "1777"
					} },
			]

			testCases.forEach((tc) => {
				it(`${tc.msg} should call route4me`, (done) => {
					resource.unlinkAddress(tc.id, tc.addressId, (err, res) => {
						expect(err).not.exist
						expect(res).exist
						helper.expectRequest(req,
							"DELETE",
							route4meClient.baseUrl() + "/api.v4/address.php",
							tc.expQs,
							null
						)
						done()
					})
				})
			})
		})

		describe("duplicate", () => {
			beforeEach(() => {
				saMock.post("*",  (r) => {
					req = r
					req.method = "POST"
					return { body: {
						"success": true,
						"optimization_problem_id": "ABCDEF12345"
					} }
				})
			})

			afterEach(() => {
				saMock.clearRoutes()
			})

			it("should call route4me", (done) => {
				resource.duplicate(131, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req,
						"POST",
						route4meClient.baseUrl() + "/actions/duplicate_route.php",
						{
							"route_id": "131",
							"to": "none"
						},
						null
					)
					done()
				})
			})
		})

		describe("merge", () => {
			beforeEach(() => {
				saMock.post("*",  (r) => {
					req = r
					req.method = "POST"
					return { body: {
						"success": true,
						"optimization_problem_id": "ABCDEF12345"
					} }
				})
			})

			afterEach(() => {
				saMock.clearRoutes()
			})

			const testCases = [
				{ msg: "for string parameter",
					ids: "abcde123",
					expBody: { "0": "abcde123" },
				},
				{ msg: "for CSV-string",
					ids: "56E8F6BF949670F0C0BBAC00590FD116 ,  A6DAA07A7D4737723A9C85E7C3BA2351",
					expBody: { "0": "56E8F6BF949670F0C0BBAC00590FD116", "1": "A6DAA07A7D4737723A9C85E7C3BA2351" }
				},
				{ msg: "for array of string",
					ids: ["56E8F6BF949670F0", "C0BBAC00590FD116", "123", "456"],
					expBody: { "0": "56E8F6BF949670F0", "1": "C0BBAC00590FD116", "2": "123", "3": "456" }
				},
			]

			testCases.forEach((tc) => {
				const m = `should call route4me ${tc.msg}`
				it(m, (done) => {
					resource.merge(tc.ids, (err, res) => {
						expect(err).is.null
						expect(res).is.not.null

						helper.expectRequest(req,
							"POST",
							route4meClient.baseUrl() + "/actions/merge_routes.php",
							{},
							tc.expBody
						)
						done()
					})
				})
			})
		})

		describe("share", () => {
			beforeEach(() => {
				saMock.post("*",  (r) => {
					req = r
					req.method = "POST"
					return { body: { "status": true } }
				})
			})

			afterEach(() => {
				saMock.clearRoutes()
			})

			const id = "5C15E83A4BE005BCD1537955D28D51D7"
			const email = "noreply@route4me.com"

			it("should call route4me", (done) => {
				resource.share(id, email, (err, res) => {
					expect(err).not.exist
					expect(res).exist
					helper.expectRequest(req,
						"POST", 
						route4meClient.baseUrl() + "/actions/route/share_route.php",
						{
							"response_format": "json",
							"route_id": "5C15E83A4BE005BCD1537955D28D51D7"
						},
						{ "recipient_email": "noreply@route4me.com" },
						"multipart/form-data"
					)

					// result expectation
					expect(res).true
					done()
				})
			})
		})

		describe("pullAddress", () => {
			beforeEach(() => {
				saMock.post("*",  (r) => {
					req = r
					req.method = "POST"
					return { body: { "success": true } }
				})
			})

			afterEach(() => {
				saMock.clearRoutes()
			})

			const id = "5C15E83A4BE005BCD1537955D28D51D7"
			const addressId = 167899269
			const afterAddressId = 167899270

			it("should call route4me with afterAddressId", (done) => {
				resource.pullAddress(id, addressId, afterAddressId, (err, res) => {
					expect(err).not.exist
					expect(res).exist
					helper.expectRequest(req,
						"POST",
						route4meClient.baseUrl() + "/actions/route/move_route_destination.php",
						{},
						{
							"to_route_id": "5C15E83A4BE005BCD1537955D28D51D7",
							"route_destination_id": 167899269,
							"after_destination_id": 167899270
						},
						"multipart/form-data"
					)
					done()
				})
			})

			it("should call route4me without afterAddressId", (done) => {
				resource.pullAddress(id, addressId, (err, res) => {
					expect(err).not.exist
					expect(res).exist
					helper.expectRequest(req,
						"POST",
						route4meClient.baseUrl() + "/actions/route/move_route_destination.php",
						{},
						{
							"to_route_id": "5C15E83A4BE005BCD1537955D28D51D7",
							"route_destination_id": 167899269
						},
						"multipart/form-data"
					)
					done()
				})
			})
		})

		describe("resequence", () => {
			const routeId = "8E20987CCC7CC8943FB279BBD8E5D226"
			const order = {
				167899269: 9
			}

			it("should call route4me", (done) => {
				resource.resequence(routeId, order, (err, res) => {
					expect(err).not.exist
					expect(res).exist

					helper.expectRequest(req,
						"PUT",
						route4meClient.baseUrl() + "/api.v4/route.php",
						{ "route_id": "8E20987CCC7CC8943FB279BBD8E5D226" },
						{
							"addresses": [
								{
									"route_destination_id": 167899269,
									"sequence_no": 9
								}
							]
						}
					)
					done()
				})
			})
		})

		describe("optimize", () => {
			beforeEach(() => {
				saMock.put("*",  (r) => {
					req = r
					req.method = "PUT"
					return { body: { "status": true } }
				})
			})

			afterEach(() => {
				saMock.clearRoutes()
			})

			const routeId = "8E20987CCC7CC8943FB279BBD8E5D226"
			const criteria = "Distance"

			it("should call route4me", (done) => {
				resource.optimize(routeId, criteria, (err, res) => {
					// Expectations about result
					expect(err).is.null
					expect(res).exist

					helper.expectRequest(req,
						"PUT",
						route4meClient.baseUrl() + "/api.v4/route.php",
						{ "route_id": "8E20987CCC7CC8943FB279BBD8E5D226" },
						{
							"disable_optimization": "0",
							"optimize": "Distance",
						},
						null
					)
					done()
				})
			})
		})

		describe("routeBreaks", () => {
			beforeEach(() => {
				saMock.post("*",  (r) => {
					req = r
					req.method = "POST"
					return { body: { "status": true } }
				})
			})

			afterEach(() => {
				saMock.clearRoutes()
			})

			const options = {
				route_id: ["5C15E83A4BE005BCD1537955D28D51D7"],
				breaks: [{
					type: "approximate_time_of_day",
					duration: 1000,
					params: [15]
				}],
				replace_existing_breaks: false
			};
			
			it("should call route4me", (done) => {
				resource.routeBreaks(options, (err, res) => {
					expect(err).not.exist
					expect(res).exist
					helper.expectRequest(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/route-breaks",
						{},
						{
							"route_id": ["5C15E83A4BE005BCD1537955D28D51D7"],
							"breaks": [{
								"type": "approximate_time_of_day",
								"duration": 1000,
								"params": [15]
							}],
							"replace_existing_breaks": false
						},
					)
					done()
				})
			})
		})

		describe("getStatus", () => {
			it("should call route4me", (done) => {
				const route_id = "252339DACA8C2547DA1146EAE2080028"
	
				resource.getStatus(route_id, (err, res) => {
					expect(err).not.exist
					expect(res).exist
					helper.expectRequest(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/route-status/252339DACA8C2547DA1146EAE2080028",
						null,
						null
					)
					done()
				})
			})
		})

		describe("rollbackStatus", () => {
			it("should call route4me", (done) => {
				const route_id = "252339DACA8C2547DA1146EAE2080028"
	
				resource.rollbackStatus(route_id, (err, res) => {
					expect(err).not.exist
					expect(res).exist
					helper.expectRequest(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/route-status/252339DACA8C2547DA1146EAE2080028/rollback",
						null,
						null
					)
					done()
				})
			})
		})

		describe("getHistoryStatus", () => {
			it("should call route4me with options", (done) => {
				const route_id = "252339DACA8C2547DA1146EAE2080028"
				const options = {
					order_by: "asc",
					start: 0,
					end: 1
				}
					
				resource.getHistoryStatus(route_id, options, (err, res) => {
					expect(err).not.exist
					expect(res).exist
					helper.expectRequest(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/route-status/252339DACA8C2547DA1146EAE2080028/history", {
							"order_by": "asc",
							"start": "0",
							"end": "1"
						},
						null
					)
					done()
				})
			})

			it("should call route4me without options", (done) => {
				const route_id = "252339DACA8C2547DA1146EAE2080028"
					
				resource.getHistoryStatus(route_id, (err, res) => {
					expect(err).not.exist
					expect(res).exist
					helper.expectRequest(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/route-status/252339DACA8C2547DA1146EAE2080028/history", 
						null,
						null
					)
					done()
				})
			})
		})

		describe("updateStatus", () => {
			const route_id = "252339DACA8C2547DA1146EAE2080028"
			const params = {
				"status": "paused",
				"lng": -85.774864,
				"lat": 38.178844,
				"event_timestamp": 15
			};
			
			it("should call route4me", (done) => {
				resource.updateStatus(route_id, params, (err, res) => {
					expect(err).not.exist
					expect(res).exist
					helper.expectRequest(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/route-status/252339DACA8C2547DA1146EAE2080028",
						{},
						{
							"status": "paused",
							"lng": -85.774864,
							"lat": 38.178844,
							"event_timestamp": 15
						},
					)
					done()
				})
			})
		})

		describe("setPlannedStatus", () => {
			const route_id = ["252339DACA8C2547DA1146EAE2080028"]
			
			it("should call route4me", (done) => {
				resource.setPlannedStatus(route_id, (err, res) => {
					expect(err).not.exist
					expect(res).exist
					helper.expectRequest(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/route-status/planned",
						{},
						{ route_ids: ["252339DACA8C2547DA1146EAE2080028"] },
					)
					done()
				})
			})
		})

		describe("routeStopStatus", () => {
			const destination_ids = [785757406]
			const status = "Empty"
			
			it("should call route4me", (done) => {
				resource.routeStopStatus(destination_ids, status, (err, res) => {
					expect(err).not.exist
					expect(res).exist
					helper.expectRequest(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/route-stop-status",
						{},
						{
							destination_ids: [785757406],
							status: "Empty"
						},
					)
					done()
				})
			})
		})

		describe("reoptimization", () => {
			const routeId = "8E20987CCC7CC8943FB279BBD8E5D226"

			it("should call route4me", (done) => {
				resource.reoptimization(routeId, (err, res) => {
					expect(err).not.exist
					expect(res).exist

					helper.expectRequest(req,
						"PUT",
						route4meClient.baseUrl() + "/api.v4/route.php",
						{
							"route_id": "8E20987CCC7CC8943FB279BBD8E5D226",
							"reoptimize": "true"
						},
						{}
					)
					done()
				})
			})
		})

		describe("reoptimizationRemainigStop", () => {
			const routeId = "8E20987CCC7CC8943FB279BBD8E5D226"

			it("should call route4me", (done) => {
				resource.reoptimizationRemainigStop(routeId, (err, res) => {
					expect(err).not.exist
					expect(res).exist

					helper.expectRequest(req,
						"PUT",
						route4meClient.baseUrl() + "/api.v4/route.php",
						{
							"route_id": "8E20987CCC7CC8943FB279BBD8E5D226",
							"reoptimize": "true",
							"remaining": "true"
						},
						{}
					)
					done()
				})
			})
		})
	})
})
