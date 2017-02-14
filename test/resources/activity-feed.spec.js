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
	})
})
