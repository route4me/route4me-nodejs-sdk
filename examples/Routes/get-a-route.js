"use strict"

const path = require("path")
const debug = require("debug")("route4me-node")

require("../init-examples-suite")

// const Route4Me = require("route4me-node")

describe(path.basename(__dirname), () => {
	it(path.basename(__filename), () => {

		const apiKey   = "11111111111111111111111111111111"
		const route4me = new Route4Me(apiKey)

		const routeId = "C896D0DB99C57B483D9F51B97260DCB5"
		route4me.Routes.get(routeId, (err, route) => {
			debug("error  ", err)
			debug("result ", route)

			expect(route).has.property("route_id", "C896D0DB99C57B483D9F51B97260DCB5")
		})

	})
})
