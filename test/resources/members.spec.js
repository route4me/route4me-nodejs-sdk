"use strict"

const request = require("superagent")
const saMock  = require("superagent-mocker")(request)

const helper  = require("./../helper")

const route4me = require("./../../dist")

const testApiKey = "11111111111111111111111111111111"


describe(helper.toSuiteName(__filename), () => {
	describe("SDK methods", () => {
		const route4meClient = new route4me.Route4Me(testApiKey)
		const resource = route4meClient.Members
		let req

		beforeEach(() => {
			req = null
			// TODO : mock in helper
			saMock.get("*",  (r) => { req = r; req.method = "GET";    return { body: {} } })
			saMock.post("*", (r) => { req = r; req.method = "POST";   return { body: {} } })
			saMock.put("*",  (r) => { req = r; req.method = "PUT";    return { body: {} } })
		})

		afterEach(() => {
			saMock.clearRoutes()
		})

		describe("create", () => {
			const data = {
				"firstName": "Clay",
				"lastName": "Abraham",
				"phone": "571-259-5939",
				"zipcode": "22102",
				"routeCount": null,
				"email": "skrynkovskyy+newdispatcher@gmail.com",
				"type": "SUB_ACCOUNT_DISPATCHER",
				"dateOfBirth": 2010,
				"password": "123456",
				"readonlyUser": false,
				"hideVisitedAddresses": false,
				"hideRoutedAddresses": false,
				"hideNonfutureRoutes": false,
				"showAllVehicles": false,
				"showAllDrivers": false,
			}

			it("should call route4me", (done) => {
				resource.create(data, (err, res) => {
					expect(err).not.exist
					expect(res).exist
					helper.expectRequest(req,
						"POST", "https://api.route4me.com/api.v4/user.php",
						{},
						{
							"member_phone": "571-259-5939",
							"member_zipcode": "22102",
							"route_count": null,
							"member_email": "skrynkovskyy+newdispatcher@gmail.com",
							"member_type": "SUB_ACCOUNT_DISPATCHER",
							"date_of_birth": "2010",
							"member_first_name": "Clay",
							"member_password": "123456",
							"member_last_name": "Abraham",
							"READONLY_USER": "FALSE",
							"HIDE_VISITED_ADDRESSES": "FALSE",
							"HIDE_ROUTED_ADDRESSES": "FALSE",
							"HIDE_NONFUTURE_ROUTES": "FALSE",
							"SHOW_ALL_VEHICLES": "FALSE",
							"SHOW_ALL_DRIVERS": "FALSE",
						}
					)
					done()
				})
			})
		})

		describe("list", () => {
			it("should call route4me", (done) => {
				resource.list((err, res) => {
					expect(err).not.exist
					expect(res).exist
					helper.expectRequest(req,
						"GET", "https://api.route4me.com/api.v4/user.php",
						{},
						null
					)
					done()
				})
			})
		})

		describe("get", () => {
			it("should call route4me", (done) => {
				resource.get(127, (err, res) => {
					expect(err).not.exist
					expect(res).exist
					helper.expectRequest(req,
						"GET", "https://api.route4me.com/api.v4/user.php",
						{
							"member_id": "127"
						},
						null
					)
					done()
				})
			})
		})

		describe("update", () => {
			const data = {
				"member_id": 717171,
				"memberId": 828282,

				"firstName": "Clay",
				"lastName": "Abraham",
				"phone": "571-259-5939",
				"zipcode": "22102",
				"routeCount": null,
				"email": "skrynkovskyy+newdispatcher@gmail.com",
				"type": "SUB_ACCOUNT_DISPATCHER",
				"dateOfBirth": 2010,
				"password": "123456",
				"readonlyUser": false,
				"hideVisitedAddresses": false,
				"hideRoutedAddresses": false,
				"hideNonfutureRoutes": false,
				"showAllVehicles": false,
				"showAllDrivers": false,
			}

			it("should call route4me", (done) => {
				resource.update(8765, data, (err, res) => {
					expect(err).not.exist
					expect(res).exist
					helper.expectRequest(req,
						"PUT", "https://api.route4me.com/api.v4/user.php",
						{},
						{
							"member_id": 8765,

							"member_phone": "571-259-5939",
							"member_zipcode": "22102",
							"route_count": null,
							"member_email": "skrynkovskyy+newdispatcher@gmail.com",
							"member_type": "SUB_ACCOUNT_DISPATCHER",
							"date_of_birth": "2010",
							"member_first_name": "Clay",
							"member_password": "123456",
							"member_last_name": "Abraham",
							"READONLY_USER": "FALSE",
							"HIDE_VISITED_ADDRESSES": "FALSE",
							"HIDE_ROUTED_ADDRESSES": "FALSE",
							"HIDE_NONFUTURE_ROUTES": "FALSE",
							"SHOW_ALL_VEHICLES": "FALSE",
							"SHOW_ALL_DRIVERS": "FALSE",
						}
					)
					done()
				})
			})
		})

		describe("addCustomData", () => {
			const member_id = 2288930

			const data = {
				custom_data: {
					CustomKey1: "Custom value 1",
					CustomKey2: "Custom value 2"
				}
			}

			it("should call route4me", (done) => {
				resource.addCustomData(member_id, data, (err, res) => {
					expect(err).not.exist
					expect(res).exist
					helper.expectRequest(req,
						"PUT", "https://api.route4me.com/api.v4/user.php",
						{},
						{
							"member_id": 2288930,

							"custom_data": {
								"CustomKey1": "Custom value 1",
								"CustomKey2": "Custom value 2"
							}
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

			it("should call route4me", (done) => {
				resource.remove(81943, (err, res) => {
					expect(err).not.exist
					expect(res).exist
					helper.expectRequest(req,
						"DELETE", "https://api.route4me.com/api.v4/user.php",
						{},
						{
							"member_id": 81943
						}
					)
					done()
				})
			})
		})

		describe("authenticate", () => {
			const usr = "man@ya.com"
			const pwd = "12345"
			it("should call route4me", (done) => {
				resource.authenticate(usr, pwd, (err, res) => {
					expect(err).not.exist
					expect(res).exist
					helper.expectRequest(req,
						"POST", "https://api.route4me.com/actions/authenticate.php", {},
						{
							"strEmail": "man@ya.com",
							"strPassword": "12345",
							"format": "json",
						}
					)
					done()
				})
			})
		})

		describe("validateSession", () => {
			beforeEach(() => {
				saMock.get("*",  (r) => {
					req = r
					req.method = "GET"
					return { body: { "authenticated": true, "member_id": 1 } }
				})
			})

			afterEach(() => {
				saMock.clearRoutes()
			})

			const sessionId = 4552222222
			const memberId = 787544566
			it("should call route4me", (done) => {
				resource.validateSession(memberId, sessionId, (err, res) => {
					expect(err).not.exist
					expect(res).exist
					helper.expectRequest(req,
						"GET", "https://api.route4me.com/datafeed/session/validate_session.php",
						{
							"session_guid": "4552222222",
							"member_id": "787544566",
							"frmt": "json",
						},
						null
					)
					done()
				})
			})
		})

		describe("registerAccount", () => {
			const data = {
				"accountPlan": "demoPlan",
				"industry": "Gifting",
				"firstName": "Olman",
				"lastName": "Oland",
				"email": "ololol@outlook.com",
				"deviceType": "web",
				"password": "123456",
			}

			it("should call route4me", (done) => {
				resource.registerAccount(data, (err, res) => {
					expect(err).not.exist
					expect(res).exist
					helper.expectRequest(req,
						"POST", "https://api.route4me.com/actions/register_action.php",
						{
							"plan": "demoPlan",
						},
						{
							"strIndustry": "Gifting",
							"strFirstName": "Olman",
							"strLastName": "Oland",
							"strEmail": "ololol@outlook.com",
							"format": "json",
							"chkTerms": "1",
							"device_type": "web",
							"strPassword_1": "123456",
							"strPassword_2": "123456",
						}
					)
					done()
				})
			})
		})
	})
})
