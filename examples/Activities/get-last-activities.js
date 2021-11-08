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
        
        const today = new Date()
        var activitiesAfterTime = new Date()
        activitiesAfterTime.setDate(activitiesAfterTime.getDate() - 7)
        var origintime = new Date(1970, 1, 1, 0, 0, 0, 0)
        if (activitiesAfterTime < origintime)
            activitiesAfterTime = new Date(1970, 1, 1, activitiesAfterTime.getUTCHours(), activitiesAfterTime.getUTCMinutes(), activitiesAfterTime.getUTCSeconds())
        var diffspan = Math.floor((activitiesAfterTime.getTime() - origintime.getTime())/ 1000)

		const data = {			
            "limit": 10,
            "offset": 0,
            "start": diffspan
		}
		
		route4me.ActivityFeed.getactivities_example(data, (err, activity_feed) => {
			debug("error  ", err)
			debug("result ", activity_feed)
			expect(err).is.null
			expect(activity_feed).exist
			console.log(activity_feed)
		})
		// TODO: remove `done` call from examples
		done()
	})
})
