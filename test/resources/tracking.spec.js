"use strict"

const request = require("superagent")
const saMock  = require("superagent-mocker")(request)

const helper  = require("./../helper")

const route4me = require("./../../dist")

const testApiKey = "11111111111111111111111111111111"


describe(helper.toSuiteName(__filename), () => {
	describe("SDK methods", () => {
		const route4meClient = new route4me.Route4Me(testApiKey)
		const resource = route4meClient.Tracking
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

		describe("getAssetTracking", () => {
			it("should call route4me", (done) => {
				const tracking = "Q7G9P1L9"

				resource.getAssetTracking(tracking, (err, res) => {
					expect(err).is.not.exist
					expect(res).is.exist
					helper.expectRequest(req,
						"GET", "https://api.route4me.com/api.v4/status.php",
						{
							"tracking": "Q7G9P1L9",
						},
						null
					)
					done()
				})
			})
		})

		describe("getRouteTrackingHistory", () => {
			describe("with custom dates", () => {
				const f = new Date(Date.UTC(2016, 9, 20))
				const t = new Date(Date.UTC(2016, 9, 26, 23, 59, 0))

				const testCases = [
					{ msg: "with input aliases 1",
						period: {
							from: f,
							trim: t,
						} },
					{ msg: "with input aliases 2",
						period: {
							start: f,
							end: t,
						} },
					{ msg: "with input aliases 3",
						period: {
							begin: f,
							finish: t,
						} },
				]
				const routeId = "814FB49CEA8188D134E9D4D4B8B0DAF7"

				testCases.forEach((tc) => {
					it(`${tc.msg} should call route4me`, (done) => {
						resource.getRouteTrackingHistory(routeId, tc.period, (err, res) => {
							expect(err).is.not.exist
							expect(res).is.exist
							helper.expectRequest(req,
								"GET", "https://api.route4me.com/get_device_location.php",
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
			})

			describe("with predefined dates", () => {
				const testCases = [
					{ msg: "with period as string", period: "today" },
					{ msg: "with period as object", period: { span: "today" } },
				]
				const routeId = "814FB49CEA8188D134E9D4D4B8B0DAF7"

				testCases.forEach((tc) => {
					it(`${tc.msg} should call route4me`, (done) => {
						resource.getRouteTrackingHistory(routeId, tc.period, (err, res) => {
							expect(err).is.not.exist
							expect(res).is.exist
							helper.expectRequest(req,
								"GET", "https://api.route4me.com/get_device_location.php",
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
		})

		describe("getAllUserLocations", () => {
			it("should call route4me", (done) => {

				resource.getAllUserLocations((err, res) => {
					expect(err).is.not.exist
					expect(res).is.exist
					helper.expectRequest(req,
						"GET", "https://api.route4me.com/api/track/view_user_locations.php", {},
						null
					)
					done()
				})
			})
		})

		describe("searchUserLocations", () => {
			it("should call route4me", (done) => {
				const query = "Tony"

				resource.searchUserLocations(query, (err, res) => {
					expect(err).is.not.exist
					expect(res).is.exist
					helper.expectRequest(req,
						"GET", "https://api.route4me.com/api/track/view_user_locations.php",{
							"query": "Tony"
						},
						null
					)
					done()
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
							"POST", "https://api.route4me.com/track/set.php",
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
