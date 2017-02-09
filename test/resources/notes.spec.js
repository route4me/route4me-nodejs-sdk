"use strict"

const request = require("superagent")
const saMock  = require("superagent-mocker")(request)

const helper  = require("./../helper")

const Route4Me = require("../../src/route4me")

const testApiKey = "11111111111111111111111111111111"

describe(helper.toSuiteName(__filename), () => {
	describe("SDK methods", () => {
		const route4me = new Route4Me(testApiKey)
		const resource = route4me.Notes
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

		describe("create", () => {
			beforeEach(() => {
				saMock.post("*", (r) =>  { req = r; req.method = "POST"; return { "body": { "status": true } } })
			})
			afterEach(() => {
				saMock.clearRoutes()
			})

			const testCases = [
				{ msg: "with string-note",
					data: {
						addressId: 167899269,
						routeId: "241466F15515D67D3F951E2DA38DE76D",
						deviceLatitude: 55.6884868,
						deviceLongitude: 12.5366426,
						deviceType: "android_phone",
						note: "Just a test note",
						type: "web",
					},
					expBody: {
						strNoteContents: "Just a test note"
					} },
			]

			testCases.forEach((tc) => {
				it(`${tc.msg} should call route4me`, (done) => {
					resource.create(tc.data, (err, res) => {
						expect(err).is.not.exist
						expect(res).is.exist
						helper.expectRequest(req,
							"POST", "https://route4me.com/actions/addroutenotes.php",
							{
								"address_id": "167899269",
								"route_id": "241466F15515D67D3F951E2DA38DE76D",
								"dev_lat": "55.6884868",
								"dev_lng": "12.5366426",
								"device_type": "android_phone",
								"strUpdateType": "web"
							},
							tc.expBody
						)
						done()
					})
				})
			})
		})
	})
})
