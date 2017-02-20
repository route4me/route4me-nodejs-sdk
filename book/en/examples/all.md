# TOC

   - [examples/geocoding/forward-geocode-address](#examplesgeocodingforward-geocode-address)
   - [examples/notes/add-route-notes](#examplesnotesadd-route-notes)
   - [examples/optimizations/get-an-optimization](#examplesoptimizationsget-an-optimization)
   - [examples/route4me/options-promise-bluebird](#examplesroute4meoptions-promise-bluebird)
   - [examples/routes/get-a-route](#examplesroutesget-a-route)
   - [examples/routes/share-routes](#examplesroutesshare-routes)
   - [examples/tracking/get-route-tracking-data](#examplestrackingget-route-tracking-data)

<a name=""></a>
 
<a name="examplesgeocodingforward-geocode-address"></a>

# examples/geocoding/forward-geocode-address

forward-geocode-address.js.

```js
// const Route4Me = require("route4me-node")
const apiKey   = "11111111111111111111111111111111"
const route4me = new Route4Me(apiKey)
const address = "Los Angeles International Airport, CA"
route4me.Geocoding.forward(address, (err, coordinates) => {
	debug("error  ", err)
	debug("result ", coordinates)
	// Expectations about result
	expect(err).is.null
	expect(coordinates).is.not.empty
	expect(coordinates).to.have.length.at.least(1)
	const c = coordinates[0]
	expect(c).has.property("lat", 33.9415889)
	expect(c).has.property("lng", -118.40853)
	expect(c).has.property("original", "Los Angeles International Airport, CA")
	// TODO: remove `done` call from examples
	done()
})
```

<a name="examplesnotesadd-route-notes"></a>
# examples/notes/add-route-notes
<a name="examplesoptimizationsget-an-optimization"></a>
# examples/optimizations/get-an-optimization
get-an-optimization.js.

```js
// const Route4Me = require("route4me-node")
const apiKey   = "11111111111111111111111111111111"
const route4me = new Route4Me(apiKey)
const optimizationId = "07372F2CF3814EC6DFFAFE92E22771AA"
route4me.Optimizations.get(optimizationId, (err, optimization) => {
	debug("error  ", err)
	debug("result ", optimization)
	// Expectations about result
	expect(err).is.null
	expect(optimization).has.property("optimization_problem_id", "07372F2CF3814EC6DFFAFE92E22771AA")
	// TODO: remove `done` call from examples
	done()
})
```

<a name="examplesroute4meoptions-promise-bluebird"></a>
# examples/route4me/options-promise-bluebird
options-promise-bluebird.js.

```js
// const Route4Me = require("route4me-node")
const apiKey   = "11111111111111111111111111111111"
const route4me = new Route4Me(apiKey, {
	// this option change the behavior of the entire route4me
	// package: instead of callback-usage, all SDK methods will
	// return PROMISE, created by choosen library
	promise: require("bluebird")		// eslint-disable-line global-require, import/no-extraneous-dependencies
})
const address = "Los Angeles International Airport, CA"
return route4me.Geocoding.forward(address)
	.then((coordinates) => {
		debug("result ", coordinates)
		expect(coordinates).is.not.empty
		expect(coordinates).to.have.length.at.least(1)
	})
	.catch((err) => {
		// should never be called!
		expect(err).is.null
		debug("error  ", err)
	})
```

<a name="examplesroutesget-a-route"></a>
# examples/routes/get-a-route
get-a-route.js.

```js
// const Route4Me = require("route4me-node")
const apiKey   = "11111111111111111111111111111111"
const route4me = new Route4Me(apiKey)
const routeId = "C896D0DB99C57B483D9F51B97260DCB5"
route4me.Routes.get(routeId, (err, route) => {
	debug("error  ", err)
	debug("result ", route)
	// Expectations about result
	expect(err).is.null
	expect(route).has.property("route_id", "C896D0DB99C57B483D9F51B97260DCB5")
	// TODO: remove `done` call from examples
	done()
})
```

<a name="examplesroutesshare-routes"></a>
# examples/routes/share-routes
share-routes.js.

```js
// const Route4Me = require("route4me-node")
const apiKey   = "11111111111111111111111111111111"
const route4me = new Route4Me(apiKey)
const routeId = "3A2DD89E6E1A044B2098AD1313E3138C"
const email = "noreply@route4me.com"
route4me.Routes.share(routeId, email, (err, nothing) => {
	debug("error  ", err)
	debug("result ", nothing)
	// Expectations about result
	expect(err).is.null
	expect(nothing).true
	// TODO: remove `done` call from examples
	done()
})
```

<a name="examplestrackingget-route-tracking-data"></a>
# examples/tracking/get-route-tracking-data
get-route-tracking-data.js.

```js
// const Route4Me = require("route4me-node")
const apiKey   = "11111111111111111111111111111111"
const route4me = new Route4Me(apiKey)
const routeId = "32F63FD03B08A5754CF2D516198FC8BA"
const options = { includeTracking: true }
route4me.Routes.get(routeId, options, (err, route) => {
	debug("error  ", err)
	debug("result ", route)
	// Expectations about result
	expect(err).is.null
	expect(route).is.not.empty
	expect(route).has.property("route_id", "32F63FD03B08A5754CF2D516198FC8BA")
	expect(route).has.property("tracking_history")
		.that.is.an("array")
	// TODO: remove `done` call from examples
	done()
})
```

