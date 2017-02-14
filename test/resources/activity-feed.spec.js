"use strict"

const request = require("superagent")
const saMock  = require("superagent-mocker")(request)

const helper  = require("./../helper")

const Route4Me = require("../../src/route4me")

const testApiKey = "11111111111111111111111111111111"

describe(helper.toSuiteName(__filename), () => {
	describe("SDK methods", () => {
		const route4me = new Route4Me(testApiKey)
		const resource = route4me.ActivityFeed
		let req

		describe("ActivityTypeEnum", () => {
			it("should be a member", () => {
				expect(resource).have.property("ActivityTypeEnum")
			})

			it("should be an object", () => {
				expect(resource.ActivityTypeEnum).to.be.an("object")
			})

			it("should contain several items", () => {
				expect(resource.ActivityTypeEnum)
					.have.property("MarkDestinationDeparted", "mark-destination-departed")
				expect(resource.ActivityTypeEnum)
					.have.property("MarkDestinationVisited", "mark-destination-visited")
			})
		})

		describe("create", () => {
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

			it("should call route4me", (done) => {
				const data = {
					routeId: "5C15E83A4BE005BCD1537955D28D51D7",
					message: "test message",
				}

				resource.create(data, (err, res) => {
					expect(err).not.exist
					expect(res).exist
					helper.expectRequest(req,
						"POST", "https://route4me.com/api.v4/activity_feed.php",
						{},
						{
							"activity_type": "user_message",
							"activity_message": "test message",
							"route_id": "5C15E83A4BE005BCD1537955D28D51D7",
						}
					)
					done()
				})
			})
		})

		describe("list", () => {
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

			const criteria = {
				routeId: "5C15E83A4BE005BCD1537955D28D51D7",
			}

			const options = {
				includeTeamActivities: true,
				limit: 10,
			}

			it("should call route4me", (done) => {
				resource.list(criteria, options, (err, res) => {
					expect(err).not.exist
					expect(res).exist
					helper.expectRequest(req,
						"GET", "https://route4me.com/api/get_activities.php",
						{
							"route_id": "5C15E83A4BE005BCD1537955D28D51D7",

							"team": "true",
							"limit": "10",
						},
						null
					)
					done()
				})
			})
		})
	})
})
