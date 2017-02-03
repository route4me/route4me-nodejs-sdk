let api_key = "11111111111111111111111111111111",
	route4me = require("..")(api_key),
	addresses = require("./addresses.json");

const params = {
	addresses,
	parameters: {
		algorithm_type: 1,
		distance_unit: "mi",
		device_type: "web",
		optimize: "Distance",
		travel_mode: "Driving",
		route_max_duration: 86400,
		vehicle_capacity: 1,
		vehicle_max_distance_mi: 10000,
		rt: true,
	},
};

route4me.OptimizationProblem.optimize(params, (err, problem) => {
	console.log(err, problem);
});
