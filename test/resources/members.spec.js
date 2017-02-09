"use strict"

const request = require("superagent")
const saMock  = require("superagent-mocker")(request)

const helper  = require("./../helper")

const Route4Me = require("../../src/route4me")

const testApiKey = "11111111111111111111111111111111"


describe(helper.toSuiteName(__filename), () => {
	describe("SDK methods", () => {
		const route4me = new Route4Me(testApiKey)
		const resource = route4me.Members
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

		describe("create", () => {
			const data = {
				"HIDE_ROUTED_ADDRESSES": "FALSE",
				"member_phone": "571-259-5939",
				"member_zipcode": "22102",
				"route_count": null,
				"member_email": "skrynkovskyy+newdispatcher@gmail.com",
				"HIDE_VISITED_ADDRESSES": "FALSE",
				"READONLY_USER": "FALSE",
				"member_type": "SUB_ACCOUNT_DISPATCHER",
				"date_of_birth": "2010",
				"member_first_name": "Clay",
				"member_password": "123456",
				"HIDE_NONFUTURE_ROUTES": "FALSE",
				"member_last_name": "Abraham",
				"SHOW_ALL_VEHICLES": "FALSE",
				"SHOW_ALL_DRIVERS": "FALSE"
			}

			it("should call route4me", (done) => {
				resource.create(data, (err, res) => {
					expect(err).not.exist
					expect(res).exist
					helper.expectRequest(req,
						"POST", "https://route4me.com/api.v4/user.php",
						{},
						data
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
						"GET", "https://route4me.com/api/member/view_users.php",
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
						"GET", "https://route4me.com/api.v4/user.php",
						{
							"member_id": 127
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

				"HIDE_ROUTED_ADDRESSES": "FALSE",
				"member_phone": "571-259-5939",
				"member_zipcode": "22102",
				"route_count": null,
				"member_email": "skrynkovskyy+newdispatcher@gmail.com",
				"HIDE_VISITED_ADDRESSES": "FALSE",
				"READONLY_USER": "FALSE",
				"member_type": "SUB_ACCOUNT_DISPATCHER",
				"date_of_birth": "2010",
				"member_first_name": "Clay",
				"member_last_name": "Abraham",
				"member_password": "123456",
				"HIDE_NONFUTURE_ROUTES": "FALSE",
				"SHOW_ALL_VEHICLES": "FALSE",
				"SHOW_ALL_DRIVERS": "FALSE"
			}

			it("should call route4me", (done) => {
				resource.update(8765, data, (err, res) => {
					expect(err).not.exist
					expect(res).exist
					helper.expectRequest(req,
						"PUT", "https://route4me.com/api.v4/user.php",
						{},
						{
							"member_id": 8765,
							"HIDE_ROUTED_ADDRESSES": "FALSE",
							"member_phone": "571-259-5939",
							"member_zipcode": "22102",
							"route_count": null,
							"member_email": "skrynkovskyy+newdispatcher@gmail.com",
							"HIDE_VISITED_ADDRESSES": "FALSE",
							"READONLY_USER": "FALSE",
							"member_type": "SUB_ACCOUNT_DISPATCHER",
							"date_of_birth": "2010",
							"member_first_name": "Clay",
							"member_last_name": "Abraham",
							"member_password": "123456",
							"HIDE_NONFUTURE_ROUTES": "FALSE",
							"SHOW_ALL_VEHICLES": "FALSE",
							"SHOW_ALL_DRIVERS": "FALSE"
						}
					)
					done()
				})
			})
		})

		describe("remove", () => {
			it("should call route4me", (done) => {
				resource.remove(81943, (err, res) => {
					expect(err).not.exist
					expect(res).exist
					helper.expectRequest(req,
						"DELETE", "https://route4me.com/api.v4/user.php",
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
						"POST", "https://route4me.com/actions/authenticate.php", {},
						{
							"strEmail": "man@ya.com",
							"strPassword": "12345",
						}
					)
					done()
				})
			})
		})

		describe("validateSession", () => {
			const sessionId = 4552222222
			const memberId = 787544566
			it("should call route4me", (done) => {
				resource.validateSession(sessionId, memberId, (err, res) => {
					expect(err).not.exist
					expect(res).exist
					helper.expectRequest(req,
						"GET", "https://route4me.com/datafeed/session/validate_session.php",
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
				"plan": "demoPlan",
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
						"POST", "https://route4me.com/actions/register_action.php",
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
