"use strict"

const request = require("superagent")
const saMock  = require("superagent-mocker")(request)

const helper  = require("../helper")

const route4me = require("./../../dist")

const testApiKey = "11111111111111111111111111111111"


describe(helper.toSuiteName(__filename), () => {
	describe("SDK methods", () => {
		const route4meClient = new route4me.Route4Me(testApiKey)
		const resource = route4meClient.Schedules
		let req

		beforeEach(() => {
			req = null
			saMock.get("*", (r) => { req = r; req.method = "GET"; return { "body": {} } })
			saMock.post("*", (r) => { req = r; req.method = "POST"; return { "body": {} } })
			saMock.del("*", (r) => { req = r; req.method = "DELETE"; return { "body": {} } })
			saMock.put("*", (r) => { req = r; req.method = "PUT"; return { "body": {} } })
			saMock.patch("*", (r) => { req = r; req.method = "PATCH"; return { "body": {} } })
		})

		afterEach(() => {
			saMock.clearRoutes()
		})

		describe("create Schedule", () => {
			const data = {
				schedule_uid: "1515E9A65DD2DEF79CAD7A7E68D91515",
				root_member_id: 15,
				name: "The bestest schedule 1",
				schedule_blacklist: [],
				schedule: null,
				timezone: "UTC"
			};

			it("should call route4me", (done) => {
				resource.addSchedule(data, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/recurring-routes/schedules",
						null,
						{
							schedule_uid: "1515E9A65DD2DEF79CAD7A7E68D91515",
							root_member_id: 15,
							name: "The bestest schedule 1",
							schedule_blacklist: [],
							schedule: null,
							timezone: "UTC"
						}
					)
					done()
				})
			})
		})

		describe("get Schedule", () => {
			const scheduleId = "1515E9A65DD2DEF79CAD7A7E68D91515";

			it("should call route4me", (done) => {
				resource.getSchedule(scheduleId, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/recurring-routes/schedules/1515E9A65DD2DEF79CAD7A7E68D91515",
						{},
						null
					)
					done()
				})
			})
		})

		describe("update Schedule", () => {
			const scheduleId = "1515E9A65DD2DEF79CAD7A7E68D91515";
			const data = { name: "The bestest schedule 3" };
			
			it("should call route4me", (done) => {
				resource.updateSchedule(scheduleId, data, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"PUT",
						route4meClient.baseUrl5() + "/api/v5.0/recurring-routes/schedules/1515E9A65DD2DEF79CAD7A7E68D91515",
						{},
						{
							name: "The bestest schedule 3"
						}
					)
					done()
				})
			})
		})

		describe("delete Schedule", () => {
			const scheduleId = "1515E9A65DD2DEF79CAD7A7E68D91515";

			it("should call route4me without withRoutes", (done) => {
				resource.deleteSchedule(scheduleId, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"DELETE",
						route4meClient.baseUrl5() + "/api/v5.0/recurring-routes/schedules/1515E9A65DD2DEF79CAD7A7E68D91515",
						{
							"with_routes": "false"
						},
						null
					)
					done()
				})
			})

			it("should call route4me with withRoutes", (done) => {
				resource.deleteSchedule(scheduleId, true, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"DELETE",
						route4meClient.baseUrl5() + "/api/v5.0/recurring-routes/schedules/1515E9A65DD2DEF79CAD7A7E68D91515",
						{
							"with_routes": "true"
						},
						null
					)
					done()
				})
			})
		})

		describe("list Schedules", () => {
			const options = {
				with_pagination: true,
				page: 1,
				per_page: 5
			}
			
			it("should call route4me with pagination options", (done) => {
				resource.getSchedules(options, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/recurring-routes/schedules/pagination",
						{
							"with_pagination": "true",
							"page": "1",
							"per_page": "5"
						},
						null
					)
					done()
				})
			})

			it("should call route4me without pagination", (done) => {
				resource.getSchedules((err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/recurring-routes/schedules",
						{},
						null
					)
					done()
				})
			})
		})

		describe("create RouteScedule", () => {
			const data = {
				route_id: "66C2AC4A323053FF0A40FEB6918ACF5E",
				schedule_uid: "1515E9A65DD2DEF79CAD7A7E68D91515"
			};

			it("should call route4me", (done) => {
				resource.addRouteSchedule(data, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/recurring-routes/route-schedules",
						null,
						{
							route_id: "66C2AC4A323053FF0A40FEB6918ACF5E",
							schedule_uid: "1515E9A65DD2DEF79CAD7A7E68D91515"
						}
					)
					done()
				})
			})
		})

		describe("list RouteSchedules", () => {
			const options = {
				with_pagination: true,
				page: 1,
				per_page: 5
			}
			
			it("should call route4me with pagination options", (done) => {
				resource.getRouteSchedules(options, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/recurring-routes/route-schedules/pagination",
						{
							"with_pagination": "true",
							"page": "1",
							"per_page": "5"
						},
						null
					)
					done()
				})
			})

			it("should call route4me without pagination", (done) => {
				resource.getRouteSchedules((err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/recurring-routes/route-schedules",
						{},
						null
					)
					done()
				})
			})
		})

		describe("get RouteSchedule", () => {
			const routeId = "66C2AC4A323053FF0A40FEB6918ACF5E";
	
			it("should call route4me", (done) => {
				resource.getRouteSchedule(routeId, (err, res) => {
					expect(err).is.null
					expect(res).to.exist
	
					helper.expectRequest(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/recurring-routes/route-schedules/66C2AC4A323053FF0A40FEB6918ACF5E",
						{},
						null
					)
					done()
				})
			})
		})

		describe("update RouteSchedule", () => {
			const routeId = "66C2AC4A323053FF0A40FEB6918ACF5E";
			const data = {
				schedule_uid: "1515E9A65DD2DEF79CAD7A7E68D91515",
				member_id: "1053088",
				vehicle_id: "061C7E7DCE3538AD2D0B047954F1F499"
			};
						
			it("should call route4me", (done) => {
				resource.updateRouteSchedule(routeId, data, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"PUT",
						route4meClient.baseUrl5() + "/api/v5.0/recurring-routes/route-schedules/66C2AC4A323053FF0A40FEB6918ACF5E",
						{},
						{
							schedule_uid: "1515E9A65DD2DEF79CAD7A7E68D91515",
							member_id: "1053088",
							vehicle_id: "061C7E7DCE3538AD2D0B047954F1F499"
						}
					)
					done()
				})
			})
		})

		describe("delete Route Schedules", () => {
			const routeId = "66C2AC4A323053FF0A40FEB6918ACF5E";

			it("should call route4me", (done) => {
				resource.deleteRouteSchedules(routeId, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"DELETE",
						route4meClient.baseUrl5() + "/api/v5.0/recurring-routes/route-schedules/66C2AC4A323053FF0A40FEB6918ACF5E",
						{},
						null
					)
					done()
				})
			})
		})

		describe("delete specified Route Schedule", () => {
			const routeId = "66C2AC4A323053FF0A40FEB6918ACF5E";

			it("should call route4me", (done) => {
				resource.deleteRouteSchedule(routeId, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"DELETE",
						route4meClient.baseUrl5() + "/api/v5.0/recurring-routes/route-schedules/66C2AC4A323053FF0A40FEB6918ACF5E/items",
						{},
						null
					)
					done()
				})
			})
		})

		describe("replace RouteSchedule", () => {
			const routeId = "66C2AC4A323053FF0A40FEB6918ACF5E";
			const data = {
				schedule_uid: "1515E9A65DD2DEF79CAD7A7E68D91515",
				member_id: "1053088",
				vehicle_id: "061C7E7DCE3538AD2D0B047954F1F499"
			};
						
			it("should call route4me", (done) => {
				resource.replaceRouteSchedule(routeId, data, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"PUT",
						route4meClient.baseUrl5() + "/api/v5.0/recurring-routes/route-schedules/replace/66C2AC4A323053FF0A40FEB6918ACF5E",
						{},
						{
							schedule_uid: "1515E9A65DD2DEF79CAD7A7E68D91515",
							member_id: "1053088",
							vehicle_id: "061C7E7DCE3538AD2D0B047954F1F499"
						}
					)
					done()
				})
			})
		})

		describe("preview RouteSchedule", () => {
			const routeId = "66C2AC4A323053FF0A40FEB6918ACF5E";
			const start = "2022-01-01";
			const end = "2023-12-31";
			
			it("should call route4me", (done) => {
				resource.getRouteSchedulePreview(routeId, start, end, (err, res) => {
					expect(err).is.null
					expect(res).to.exist
	
					helper.expectRequest(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/recurring-routes/route-schedules/66C2AC4A323053FF0A40FEB6918ACF5E/preview",
						{
							"start": "2022-01-01",
							"end": "2023-12-31"
						},
						null
					)
					done()
				})
			})
		})

		describe("is RouteSchedule was copied", () => {
			const routeId = "66C2AC4A323053FF0A40FEB6918ACF5E";
			
			it("should call route4me", (done) => {
				resource.isScheduledRouteCopy(routeId, (err, res) => {
					expect(err).is.null
					expect(res).to.exist
	
					helper.expectRequest(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/recurring-routes/scheduled-routes/is-copy/66C2AC4A323053FF0A40FEB6918ACF5E",
						{},
						null
					)
					done()
				})
			})
		})

		describe("get Scheduled Routes copies", () => {
			const data = {
				route_id: "66C2AC4A323053FF0A40FEB6918ACF5E",
				schedule_uid: "1515E9A65DD2DEF79CAD7A7E68D91515",
				route_date: "2023-01-01"
			};

			it("should call route4me", (done) => {
				resource.getScheduledRoutesCopies(data, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/recurring-routes/scheduled-routes/get-copies",
						null,
						{
							route_id: "66C2AC4A323053FF0A40FEB6918ACF5E",
							schedule_uid: "1515E9A65DD2DEF79CAD7A7E68D91515",
							route_date: "2023-01-01"
						}
					)
					done()
				})
			})
		})

		describe("get Scheduled Routes copies", () => {
			const data = {
				route_id: "66C2AC4A323053FF0A40FEB6918ACF5E",
				route_name: "The Bestest route",
				member_id: "1053088",
				vehicle_id: "061C7E7DCE3538AD2D0B047954F1F499",
				name: "The Bestest schedule",
				schedule_blacklist: [],
				schedule: null,
				timezone: "UTC"
			};
   
			it("should call route4me", (done) => {
				resource.addMasterRoute(data, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/recurring-routes/master-routes",
						null,
						{
							route_id: "66C2AC4A323053FF0A40FEB6918ACF5E",
							route_name: "The Bestest route",
							member_id: "1053088",
							vehicle_id: "061C7E7DCE3538AD2D0B047954F1F499",
							name: "The Bestest schedule",
							schedule_blacklist: [],
							schedule: null,
							timezone: "UTC"
						}
					)
					done()
				})
			})
		})
	})
})
