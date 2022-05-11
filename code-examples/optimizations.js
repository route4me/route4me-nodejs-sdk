const Route4Me = require("route4me-node");
const apiKey = "11111111111111111111111111111111";
const route4me = new Route4Me(apiKey);

/////////////////////////////////////////////////////////
// Create an Optimization
//
const params = {
	"addresses": [{
			"lng": -85.786514,
			"lat": 38.202496,
			"is_depot": false,
			"time": 300,
			"sequence_no": 2,
			"address": "1407 MCCOY, Louisville, KY, 40215"
		}, {
			"lng": -85.775558,
			"lat": 38.179806,
			"is_depot": false,
			"time": 300,
			"sequence_no": 7,
			"address": "4738 BELLEVUE AVE, Louisville, KY, 40215"
		}
	],
	"parameters": {
		"algorithm_type": 1,
		"device_type": "web",
		"distance_unit": "mi",
		"optimize": "Distance",
		"route_max_duration": 86400,
		"route_time": 0,
		"store_route": "true",
		"travel_mode": "Driving",
		"vehicle_capacity": 1,
		"vehicle_max_distance_mi": 10000
	}
};

route4me.Optimizations.create(params, false, (err, optimization) => {
	 console.log(optimization);
});


/////////////////////////////////////////////////////////
// Get an Optimization
//
// const opt_prob_id = '386BA8658CA375BFF1CE250B70932674';

// route4me.Optimizations.get(opt_prob_id, (err, optimization) => {
// 	console.log(optimization);
// });


/////////////////////////////////////////////////////////
// Get Optimizations
//
// const states = [1, 2, 3, 4, 5, 6];
// const options = { limit: 100, offset: 0 };

// route4me.Optimizations.list(states, options, (err, optimizations) => {
// 	console.log(optimizations);
// });


/////////////////////////////////////////////////////////
// Remove an Optimization
//
// const opt_prob_id = '386BA8658CA375BFF1CE250B70932674';

// route4me.Optimizations.remove(opt_prob_id, (err, status) => {
// 	console.log(status);
// });


/////////////////////////////////////////////////////////
// Insert an Address into an Optimization
//
// const opt_prob_id = '386BA8658CA375BFF1CE250B70932674';

// const params = {
// 	"addresses": [{
// 		"lng": -85.774864,
// 		"lat": 38.178844,
// 		"is_depot": false,
// 		"time": 300,
// 		"sequence_no": 3,
// 		"address": "4805 BELLEVUE AVE, Louisville, KY, 40215"
// 	}]
// };

// route4me.Optimizations.update(opt_prob_id, params, true, (err, status) => {
// 	console.log(status);
// });

// or

// route4me.Optimizations.linkAddress(opt_prob_id, params.addresses, false, (err, status) => {
// 	console.log(status);
// });


/////////////////////////////////////////////////////////
// Remove an Address from an Optimization
//
// const opt_prob_id = '386BA8658CA375BFF1CE250B70932674';
// const route_dest_id = 785684524;

// route4me.Optimizations.unlinkAddress(opt_prob_id, route_dest_id, (err, status) => {
// 	console.log(status);
// });


/////////////////////////////////////////////////////////
// Re-Optimize an Optimization
//
// const opt_prob_id = '386BA8658CA375BFF1CE250B70932674';
// const params = { "parameters": { "optimize": "timeWithTraffic" } };

// route4me.Optimizations.update(opt_prob_id, params, true, (err, status) => {
// 	console.log(err);
// 	console.log(status);
// });
