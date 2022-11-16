"use strict"

const request = require("superagent")
const saMock  = require("superagent-mocker")(request)

const helper  = require("../helper")

const route4me = require("./../../dist")

const testApiKey = "11111111111111111111111111111111"


describe(helper.toSuiteName(__filename), () => {
	describe("SDK methods", () => {
		const route4meClient = new route4me.Route4Me(testApiKey)
		const resource = route4meClient.VehiclesV5
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

		describe("create", () => {
			const data = {
				member_id: 205318,
				vehicle_alias: 'FORD FIKUS',
				vehicle_vin: '1NPAX6EX50743',
				fuel_type: 'diesel'
			};

			it("should call route4me", (done) => {
				resource.create(data, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/vehicles",
						null,
						{
							member_id: 205318,
							vehicle_alias: 'FORD FIKUS',
							vehicle_vin: '1NPAX6EX50743',
							fuel_type: 'diesel'
						}
					)
					done()
				})
			})
		})

		describe("list", () => {
			const options = {
				page: 1,
				per_page: 10
			};

			it("should call route4me with options", (done) => {
				resource.list(options, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/vehicles",
						{
							"page": "1",
							"per_page": "10"
						},
						null
					)
					done()
				})
			})

			it("should call route4me without options", (done) => {
				resource.list((err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/vehicles",
						{},
						null
					)
					done()
				})
			})
		})

		describe("getVehiclesPaginated", () => {
			const options = {
				page: 1,
				per_page: 10,
				show: "all",
				search_query: "TST 15"
			};

			it("should call route4me with options", (done) => {
				resource.getVehiclesPaginated(options, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/vehicles/paginate",
						{
							"page": "1",
							"per_page": "10",
							"show": "all",
							"search_query": "TST 15"
						},
						null
					)
					done()
				})
			})

			it("should call route4me without options", (done) => {
				resource.getVehiclesPaginated((err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/vehicles/paginate",
						{},
						null
					)
					done()
				})
			})
		})

		describe("get", () => {
			const vehicle_id = "004ADB6E1335BA6BCE4FB8A89E6311";

			it("should call route4me", (done) => {
				resource.get(vehicle_id, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/vehicles/004ADB6E1335BA6BCE4FB8A89E6311",
						{},
						null
					)
					done()
				})
			})
		})

		describe("delete", () => {
			const vehicle_id = "004ADB6E1335BA6BCE4FB8A89E6311";

			it("should call route4me", (done) => {
				resource.delete(vehicle_id, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"DELETE",
						route4meClient.baseUrl5() + "/api/v5.0/vehicles/004ADB6E1335BA6BCE4FB8A89E6311",
						{},
						null
					)
					done()
				})
			})
		})

		describe("update", () => {
			const vehicle_id = "004ADB6E1335BA6BCE4FB8A89E6311";
			const data = {
				member_id: 205318,
				vehicle_alias: 'FORD F750 TST SUPER'
			};

			it("should call route4me", (done) => {
				resource.update(vehicle_id, data, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"PATCH",
						route4meClient.baseUrl5() + "/api/v5.0/vehicles/004ADB6E1335BA6BCE4FB8A89E6311",
						{},
						{
							member_id: 205318,
							vehicle_alias: 'FORD F750 TST SUPER'
						}
					)
					done()
				})
			})
		})

		describe("getTrack", () => {
			const vehicle_id = "004ADB6E1335BA6BCE4FB8A89E6311";
			const options = {
				start: "2020-01-01",
				end: "2022-12-31"
			};

			it("should call route4me with options", (done) => {
				resource.getTrack(vehicle_id, options, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/vehicles/004ADB6E1335BA6BCE4FB8A89E6311/track",
						{
							"start": "2020-01-01",
							"end": "2022-12-31"
						},
						null
					)
					done()
				})
			})

			it("should call route4me without options", (done) => {
				resource.getTrack(vehicle_id, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/vehicles/004ADB6E1335BA6BCE4FB8A89E6311/track",
						{},
						null
					)
					done()
				})
			})
		})

		describe("assign", () => {
			const data = {
				vehicle_id: "004ADB6E1335BA6BCE4FB8A89E6311",
				vehicle_license_plate: "CVH4561",
				assigned_member_id: 2288930,
				expires_at: 100
			};

			it("should call route4me", (done) => {
				resource.assign(data, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/vehicles/assign",
						null,
						{
							vehicle_id: "004ADB6E1335BA6BCE4FB8A89E6311",
							vehicle_license_plate: "CVH4561",
							assigned_member_id: 2288930,
							expires_at: 100
						}
					)
					done()
				})
			})
		})

		describe("getProfiles", () => {
			const options = {
				with_pagination: 1,
				page: 2,
				per_page: 10
			};

			it("should call route4me with options", (done) => {
				resource.getProfiles(options, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/vehicle-profiles",
						{
							"with_pagination": "1",
							"page": "2",
							"per_page": "10"
						},
						null
					)
					done()
				})
			})

			it("should call route4me without options", (done) => {
				resource.getProfiles((err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/vehicle-profiles",
						{},
						null
					)
					done()
				})
			})
		})

		describe("createProfile", () => {
			const data = {
				root_member_id: 205318,
				name: "temp-prof"
			};

			it("should call route4me", (done) => {
				resource.createProfile(data, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/vehicle-profiles",
						null,
						{
							root_member_id: 205318,
							name: "temp-prof"
						}
					)
					done()
				})
			})
		})

		describe("getProfile", () => {
			const profile_id = "004ADB6E1335BA6BCE4FB8A89E6311";

			it("should call route4me", (done) => {
				resource.getProfile(profile_id, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/vehicle-profiles/004ADB6E1335BA6BCE4FB8A89E6311",
						{},
						null
					)
					done()
				})
			})
		})

		describe("deleteProfile", () => {
			const profile_id = "004ADB6E1335BA6BCE4FB8A89E6311";

			it("should call route4me", (done) => {
				resource.deleteProfile(profile_id, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"DELETE",
						route4meClient.baseUrl5() + "/api/v5.0/vehicle-profiles/004ADB6E1335BA6BCE4FB8A89E6311",
						{},
						null
					)
					done()
				})
			})
		})

		describe("updateProfile", () => {
			const vehicle_id = "004ADB6E1335BA6BCE4FB8A89E6311";
			const data = {
				member_id: 205318,
				vehicle_alias: 'FORD F750 TST SUPER'
			};

			it("should call route4me", (done) => {
				resource.updateProfile(vehicle_id, data, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"PATCH",
						route4meClient.baseUrl5() + "/api/v5.0/vehicle-profiles/004ADB6E1335BA6BCE4FB8A89E6311",
						{},
						{
							member_id: 205318,
							vehicle_alias: 'FORD F750 TST SUPER'
						}
					)
					done()
				})
			})
		})

		describe("search", () => {
			const data = {
				vehicle_ids: ["004ADB6E1335BA6BCE4FB8A89E6311"],
				lat: 71,
				lng: 72
			};

			it("should call route4me", (done) => {
				resource.search(data, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/vehicles/search",
						{},
						{
							vehicle_ids: ["004ADB6E1335BA6BCE4FB8A89E6311"],
							lat: 71,
							lng: 72
						}
					)
					done()
				})
			})
		})

		describe("execute", () => {
			const data = {
				vehicle_ids: ["004ADB6E1335BA6BCE4FB8A89E6311"],
				lat: 71,
				lng: 72
			};

			it("should call route4me", (done) => {
				resource.execute(data, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/vehicles/execute",
						{},
						{
							vehicle_ids: ["004ADB6E1335BA6BCE4FB8A89E6311"],
							lat: 71,
							lng: 72
						}
					)
					done()
				})
			})
		})

		describe("getVehicleProfileByLicense", () => {
			const license = "1HDF56";

			it("should call route4me", (done) => {
				resource.getVehicleProfileByLicense(license, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/vehicles/license",
						{
							"vehicle_license_plate": "1HDF56"
						},
						null
					)
					done()
				})
			})
		})

		describe("location", () => {
			const vehicle_ids = ["004ADB6E1335BA6BCE4FB8A89E6311"];

			it("should call route4me", (done) => {
				resource.location(vehicle_ids, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/vehicles/location",
						{
							"ids": "004ADB6E1335BA6BCE4FB8A89E6311"
						},
						null
					)
					done()
				})
			})
		})

		describe("bulkUpdate", () => {
			const vehicles = [{
				vehicle_id: "004ADB6E1335BA6BCE4FB8A89E6311",
				vehicle_alias: 'FORD FIKUS',
				vehicle_vin: '1NPAX6EX50743',
				fuel_type: 'diesel'
			}];

			it("should call route4me", (done) => {
				resource.bulkUpdate(vehicles, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/vehicles/bulk/update",
						{},
						{
							vehicles: [{
								vehicle_id: "004ADB6E1335BA6BCE4FB8A89E6311",
								vehicle_alias: 'FORD FIKUS',
								vehicle_vin: '1NPAX6EX50743',
								fuel_type: 'diesel'
							}]
						}
					)
					done()
				})
			})
		})

		describe("bulkDelete", () => {
			const vehicle_ids = ["004ADB6E1335BA6BCE4FB8A89E6311"];

			it("should call route4me", (done) => {
				resource.bulkDelete(vehicle_ids, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/vehicles/bulk/delete",
						{
							"vehicle_ids": "004ADB6E1335BA6BCE4FB8A89E6311"
						},
						null
					)
					done()
				})
			})
		})

		describe("bulkActivate", () => {
			const vehicle_ids = ["004ADB6E1335BA6BCE4FB8A89E6311"];

			it("should call route4me with ids", (done) => {
				resource.bulkActivate(vehicle_ids, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/vehicles/bulk/activate",
						{
							"vehicle_ids": "004ADB6E1335BA6BCE4FB8A89E6311"
						},
						null
					)
					done()
				})
			})

			it("should call route4me without ids", (done) => {
				resource.bulkActivate((err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/vehicles/bulk/activate",
						{},
						null
					)
					done()
				})
			})
		})

		describe("bulkDeactivate", () => {
			const vehicle_ids = ["004ADB6E1335BA6BCE4FB8A89E6311"];

			it("should call route4me with ids", (done) => {
				resource.bulkDeactivate(vehicle_ids, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/vehicles/bulk/deactivate",
						{
							"vehicle_ids": "004ADB6E1335BA6BCE4FB8A89E6311"
						},
						null
					)
					done()
				})
			})

			it("should call route4me without ids", (done) => {
				resource.bulkDeactivate((err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/vehicles/bulk/deactivate",
						{},
						null
					)
					done()
				})
			})
		})

		describe("bulkRestore", () => {
			const vehicle_ids = ["004ADB6E1335BA6BCE4FB8A89E6311"];

			it("should call route4me with ids", (done) => {
				resource.bulkRestore(vehicle_ids, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/vehicles/bulk/restore",
						{
							"vehicle_ids": "004ADB6E1335BA6BCE4FB8A89E6311"
						},
						null
					)
					done()
				})
			})

			it("should call route4me without ids", (done) => {
				resource.bulkRestore((err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/vehicles/bulk/restore",
						{},
						null
					)
					done()
				})
			})
		})

		describe("syncPending", () => {
			const data = {
				vehicle_alias: 'FORD FIKUS',
				vehicle_vin: '1NPAX6EX50743'
			};

			it("should call route4me", (done) => {
				resource.syncPending(data, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/vehicles/sync/pending",
						{},
						{
							vehicle_alias: 'FORD FIKUS',
							vehicle_vin: '1NPAX6EX50743'
						}
					)
					done()
				})
			})
		})

		describe("jobTrackerStatus", () => {
			const job_id = "004ADB6E1335BA6BCE4FB8A89E6311";

			it("should call route4me", (done) => {
				resource.jobTrackerStatus(job_id, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/vehicles/job-tracker/status/004ADB6E1335BA6BCE4FB8A89E6311",
						{},
						null
					)
					done()
				})
			})
		})

		describe("jobTrackerResult", () => {
			const job_id = "004ADB6E1335BA6BCE4FB8A89E6311";

			it("should call route4me", (done) => {
				resource.jobTrackerResult(job_id, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/vehicles/job-tracker/result/004ADB6E1335BA6BCE4FB8A89E6311",
						{},
						null
					)
					done()
				})
			})
		})

		describe("listCapacityProfiles", () => {
			const options = {
				mergePagesParam: true,
				page: 1,
				per_page: 10,
				search_query: "TST 15"
			};

			it("should call route4me with options", (done) => {
				resource.listCapacityProfiles(options, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/vehicle-capacity-profiles",
						{
							"mergePagesParam": "true",
							"page": "1",
							"per_page": "10",
							"search_query": "TST 15"
						},
						null
					)
					done()
				})
			})

			it("should call route4me without options", (done) => {
				resource.listCapacityProfiles((err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/vehicle-capacity-profiles",
						{},
						null
					)
					done()
				})
			})
		})

		describe("createCapacityProfiles", () => {
			const data = {
				name: 'FORD FIKUS',
				vehicle_capacity_profile_id: '1NPAX6EX50743'
			};

			it("should call route4me", (done) => {
				resource.createCapacityProfiles(data, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/vehicle-capacity-profiles",
						{},
						{
							name: 'FORD FIKUS',
							vehicle_capacity_profile_id: '1NPAX6EX50743'
						}
					)
					done()
				})
			})
		})

		describe("getCapacityProfiles", () => {
			const profile_id = '1NPAX6EX50743'

			it("should call route4me", (done) => {
				resource.getCapacityProfiles(profile_id, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/vehicle-capacity-profiles/1NPAX6EX50743",
						{},
						null
					)
					done()
				})
			})
		})

		describe("deleteCapacityProfiles", () => {
			const profile_id = '1NPAX6EX50743'

			it("should call route4me", (done) => {
				resource.deleteCapacityProfiles(profile_id, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"DELETE",
						route4meClient.baseUrl5() + "/api/v5.0/vehicle-capacity-profiles/1NPAX6EX50743",
						{},
						null
					)
					done()
				})
			})
		})

		describe("updateCapacityProfiles", () => {
			const profile_id = '1NPAX6EX50743'
			const data = {
				root_member_id: 205318,
				name: "MAX CAP",
				max_volume: 15,
				max_volume_unit: "kg"
			};

			it("should call route4me", (done) => {
				resource.updateCapacityProfiles(profile_id, data, (err, res) => {
					expect(err).is.null
					expect(res).to.exist

					helper.expectRequest(req,
						"PATCH",
						route4meClient.baseUrl5() + "/api/v5.0/vehicle-capacity-profiles/1NPAX6EX50743",
						{},
						{
							root_member_id: 205318,
							name: "MAX CAP",
							max_volume: 15,
							max_volume_unit: "kg"
						}
					)
					done()
				})
			})
		})
	})
})
