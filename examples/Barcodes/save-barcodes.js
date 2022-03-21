"use strict"

const path = require("path")
const chai = require("chai")
const debug = require("debug")("route4me-node:examples")
require("../init-examples-suite")
const helper  = require("../../test/helper")

helper.describeIntegration(helper.toSuiteName(__filename), function T() {
	this.timeout(5000)
	this.slow(3000)
	it(path.basename(__filename), (done) => {
		// const Route4Me = require("route4me-node")
		const expect = chai.expect
		const apiKey   = "11111111111111111111111111111111"
		const route4me = new Route4Me(apiKey)
        
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

		route4me.AddressBarcodes.save(data, (err, res) => {
			debug("error  ", err)
			debug("result ", res)
			expect(err).is.null
			expect(res).exist
			console.log(res)
		})
		// TODO: remove `done` call from examples
		done()
	})
})
