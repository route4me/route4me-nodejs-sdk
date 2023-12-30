"use strict"

const request = require("superagent")
const saMock  = require("superagent-mocker")(request)

const helper  = require("./../helper")
const route4me = require("./../../dist")

const testApiKey = "11111111111111111111111111111111"

describe(helper.toSuiteName(__filename), () => {
	describe("SDK methods", () => {
		const route4meClient = new route4me.Route4Me(testApiKey)
		const resource = route4meClient.AddressBarcodes
		let req

		beforeEach(() => {
			req = null
			saMock.get("*", (r) =>  { req = r; req.method = "GET";    return {} })
			saMock.post("*", (r) => { req = r; req.method = "POST";   return {} })
		})

		afterEach(() => {
			saMock.clearRoutes()
		})

		describe("get", () => {
			const routeId = "C50594BD37618FA8B28EE6A86FEFD9D1"
			const routeDestinationId = 2
			const limit = 10
			const cursor = "a"

			it("should call route4me", (done) => {

				resource.get(routeId, routeDestinationId, limit, cursor, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req,
						"GET", "https://wh.route4me.com/modules/api/v5.0/address-barcodes",
						{
							"route_id": "C50594BD37618FA8B28EE6A86FEFD9D1",
							"route_destination_id": "2",
							"limit": "10",
							"cursor": "a"
						},
						null
					)
					done()
				})
			})

			it("should call route4me without cursor", (done) => {

				resource.get(routeId, routeDestinationId, limit, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req,
						"GET", "https://wh.route4me.com/modules/api/v5.0/address-barcodes",
						{
							"route_id": "C50594BD37618FA8B28EE6A86FEFD9D1",
							"route_destination_id": "2",
							"limit": "10"
						},
						null
					)
					done()
				})
			})
		})

		describe("save", () => {
			const data = {
				barcodes: [{
					barcode: "some barcode",
					lat: 1,
					lng: 2,
					timestamp_date: 3,
					timestamp_utc: 4,
					scanned_at: "2022-03-17 00:01:02",
					scan_type: "QR-code"
				}, { 
					barcode: "ye some barcode",
					lat: 5,
					lng: 6,
					timestamp_date: 7,
					timestamp_utc: 8,
					scanned_at: "2022-03-18 01:02:03",
					scan_type: "QR-code"
				}],
				route_destination_id: 1,
				route_id: "C50594BD37618FA8B28EE6A86FEFD9D1"
			};

			it("should call route4me", (done) => {
				resource.save(data, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req,
						"POST", "https://wh.route4me.com/modules/api/v5.0/address-barcodes", {}, 
						data
					)
					done()
				})
			})
		})
	})
})
