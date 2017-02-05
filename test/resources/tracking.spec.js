"use strict"

const request = require("superagent")
const saMock  = require("superagent-mocker")(request)

const helper  = require("./../helper")

const Route4Me = require("../../src/route4me")

const testApiKey = "11111111111111111111111111111111"

describe(helper.toSuiteName(__filename), () => {
	describe("SDK methods", () => {
		const route4me = new Route4Me(testApiKey)
		const resource = route4me.Tracking
		let req

		beforeEach(() => {
			req = null
			// TODO : mock in helper
			saMock.get("*", (r) =>  { req = r; req.method = "GET";    return {} })
			saMock.post("*", (r) => { req = r; req.method = "POST";   return {} })
			saMock.put("*", (r) =>  { req = r; req.method = "PUT";    return {} })
		})

		afterEach(() => {
			saMock.clearRoutes()
		})

		describe("getAssetTracking", () => {
			it("should call route4me", (done) => {
				const tracking = "Q7G9P1L9"

				resource.getAssetTracking(tracking, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req,
						"GET", "https://route4me.com/api.v4/status.php",
						{
							"tracking": "Q7G9P1L9",
						},
						null
					)
					done()
				})
			})
		})

// start=$(date -d"2016-10-20T00:00" +%s)
// end=  $(date -d"2016-10-26T23:59" +%s)


		describe("getRouteTrackingHistory", () => {
			describe("with custom dates", () => {
				it("should call route4me", (done) => {
					const period = {
						from: new Date(Date.UTC(2016, 9, 20)),
						trim: new Date(Date.UTC(2016, 9, 26, 23, 59, 0))
					}
					const routeId = "814FB49CEA8188D134E9D4D4B8B0DAF7"

					resource.getRouteTrackingHistory(routeId, period, (err, res) => {
						expect(err).is.null
						expect(res).is.not.null
						helper.expectRequest(req,
							"GET", "https://route4me.com/get_device_location.php",
							{
								"route_id": "814FB49CEA8188D134E9D4D4B8B0DAF7",
								"time_period": "custom",
								"start_date": "1476921600",
								"end_date": "1477526340",
							},
							null
						)
						done()
					})
				})
			})

			describe("with predefined dates", () => {
				it("should call route4me", (done) => {
					const period = "today"
					const routeId = "814FB49CEA8188D134E9D4D4B8B0DAF7"

					resource.getRouteTrackingHistory(routeId, period, (err, res) => {
						expect(err).is.null
						expect(res).is.not.null
						helper.expectRequest(req,
							"GET", "https://route4me.com/get_device_location.php",
							{
								"route_id": "814FB49CEA8188D134E9D4D4B8B0DAF7",
								"time_period": "today",
							},
							null
						)
						done()
					})
				})
			})
		})

		describe("createRouteTracking", () => {
			beforeEach(() => {
				saMock.post("*", (r) =>  { req = r; req.method = "POST"; return { "body": { "status": true } } })
			})
			afterEach(() => {
				saMock.clearRoutes()
			})

			it("should call route4me", (done) => {
				const trackingData = {
					memberId: 1,
					routeId: "114B01238180A4227FD187E128C056F5",
					course: 70,
					speed: 60,
					latitude: 55.6884868,
					longitude: 12.5366426,
					deviceType: "android_phone",
					deviceGuid: "HK5454H0K454564WWER445",
				}

				resource.createRouteTracking(trackingData, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req,
						"POST", "https://route4me.com/track/set.php",
						{
							"frm": "JSON",
							"member_id": "1",
							"route_id": "114B01238180A4227FD187E128C056F5",
							"course": "70",
							"speed": "60",
							"lat": "55.6884868",
							"lng": "12.5366426",
							"device_type": "android_phone",
							"device_guid": "HK5454H0K454564WWER445",
						},
						null
					)
					done()
				})
			})
		})
	})
})
