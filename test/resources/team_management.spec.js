"use strict"

const request = require("superagent")
const saMock  = require("superagent-mocker")(request)

const helper  = require("./../helper")

const route4me = require("./../../dist")

const testApiKey = "11111111111111111111111111111111"


describe(helper.toSuiteName(__filename), () => {
	describe("SDK methods", () => {
		const route4meClient = new route4me.Route4Me(testApiKey)
		const resource = route4meClient.TeamManagement
		let req

		beforeEach(() => {
			req = null
			saMock.get("*", (r) => { req = r; req.method = "GET"; return { body: {} } })
			saMock.post("*", (r) => { req = r; req.method = "POST"; return { body: {} } })
			saMock.del("*", (r) => { req = r; req.method = "DELETE"; return { body: {} } })
			saMock.put("*", (r) => { req = r; req.method = "PUT"; return { body: {} } })
			saMock.patch("*", (r) => { req = r; req.method = "PATCH"; return { body: {} } })
		})

		afterEach(() => {
			saMock.clearRoutes()
		})

		describe("create", () => {
			const user = {
				new_password: "12345",
				member_first_name: "John",
				member_last_name: "Doe",
				member_email: "john_doe@company.com",
				member_company: "The Best Company",
				member_type: "SUB_ACCOUNT_DRIVER",
				OWNER_MEMBER_ID: 1058501
			};

			it("should call route4me", (done) => {
				resource.create(user, (err, res) => {
					expect(err).not.exist
					expect(res).exist
					helper.expectRequest5(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/team/users",
						null,
						{
							new_password: "12345",
							member_first_name: "John",
							member_last_name: "Doe",
							member_email: "john_doe@company.com",
							member_company: "The Best Company",
							member_type: "SUB_ACCOUNT_DRIVER",
							OWNER_MEMBER_ID: 1058501
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
					helper.expectRequest5(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/team/users",
						null,
						null
					)
					done()
				})
			})
		})

		describe("get", () => {
			it("should call route4me", (done) => {

				const member_id = 2355524

				resource.get(member_id, (err, res) => {
					expect(err).not.exist
					expect(res).exist
					helper.expectRequest5(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/team/users/2355524",
						null,
						null
					)
					done()
				})
			})
		})

		describe("delete", () => {
			it("should call route4me", (done) => {

				const member_id = 2355524

				resource.delete(member_id, (err, res) => {
					expect(err).not.exist
					expect(res).exist
					helper.expectRequest5(req,
						"DELETE",
						route4meClient.baseUrl5() + "/api/v5.0/team/users/2355524",
						null,
						null
					)
					done()
				})
			})
		})

		describe("update", () => {
			it("should call route4me", (done) => {

				const member_id = 2355524

				const user = {
					HIDE_ROUTED_ADDRESSES: true
				}

				resource.update(member_id, user, (err, res) => {
					expect(err).not.exist
					expect(res).exist
					helper.expectRequest5(req,
						"PATCH",
						route4meClient.baseUrl5() + "/api/v5.0/team/users/2355524",
						null,
						{
							HIDE_ROUTED_ADDRESSES: true
						}
					)
					done()
				})
			})
		})

		describe("bulkInsert", () => {
			const users = [{
				new_password: "12345",
				member_first_name: "John",
				member_last_name: "Doe",
				member_email: "john_doe@company.com",
				member_company: "The Best Company",
				member_type: "SUB_ACCOUNT_DRIVER",
				OWNER_MEMBER_ID: 1058501
			}]

			const options = {
				conflicts: "overwrite"
			}

			it("should call route4me bulkInsert with options", (done) => {
				resource.bulkInsert(users, options, (err, res) => {
					expect(err).not.exist
					expect(res).exist
					helper.expectRequest5(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/team/bulk-insert",
						{
							"conflicts": "overwrite"
						},
						{
							users: [{
								new_password: "12345",
								member_first_name: "John",
								member_last_name: "Doe",
								member_email: "john_doe@company.com",
								member_company: "The Best Company",
								member_type: "SUB_ACCOUNT_DRIVER",
								OWNER_MEMBER_ID: 1058501
							}]
						}
					)
					done()
				})
			})

			it("should call route4me bulkInsert without options", (done) => {
				resource.bulkInsert(users, (err, res) => {
					expect(err).not.exist
					expect(res).exist
					helper.expectRequest5(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/team/bulk-insert",
						null,
						{
							users: [{
								new_password: "12345",
								member_first_name: "John",
								member_last_name: "Doe",
								member_email: "john_doe@company.com",
								member_company: "The Best Company",
								member_type: "SUB_ACCOUNT_DRIVER",
								OWNER_MEMBER_ID: 1058501
							}]
						}
					)
					done()
				})
			})
		})
	})
})
