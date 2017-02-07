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
			saMock.get("*", (r) =>  { req = r; req.method = "GET";    return { body: {} } })
			saMock.post("*", (r) => { req = r; req.method = "POST";   return { body: {} } })
			saMock.put("*", (r) =>  { req = r; req.method = "PUT";    return { body: {} } })
		})

		afterEach(() => {
			saMock.clearRoutes()
		})

		describe("createRouteTracking", () => {
			beforeEach(() => {
				saMock.post("*", (r) =>  { req = r; req.method = "POST"; return { "body": { "status": true } } })
			})
			afterEach(() => {
				saMock.clearRoutes()
			})

			const testCases = [
				{ msg: "with aliases for input 1",
					trackingData: {
						memberId: 1,
						routeId: "114B01238180A4227FD187E128C056F5",
						course: 70,
						speed: 60,
						latitude: 55.6884868,
						longitude: 12.5366426,
						deviceType: "android_phone",
						deviceGuid: "HK5454H0K454564WWER445",
					} },
				{ msg: "with aliases for input 2",
					trackingData: {
						member_id: 1,
						route_id: "114B01238180A4227FD187E128C056F5",
						course: 70,
						speed: 60,
						lat: 55.6884868,
						lng: 12.5366426,
						device_type: "android_phone",
						device_guid: "HK5454H0K454564WWER445",
					} },
			]

			testCases.forEach((tc) => {
				it(`${tc.msg} should call route4me`, (done) => {
					resource.createRouteTracking(tc.trackingData, (err, res) => {
						expect(err).is.not.exist
						expect(res).is.exist
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
})
