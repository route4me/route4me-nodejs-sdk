const Route4Me = require("route4me-node");
const apiKey = "11111111111111111111111111111111";
const route4me = new Route4Me(apiKey);

/////////////////////////////////////////////////////////
// Create an Optimization with advanced constraints
// Driver's Time Shift 
//

// General Route Parameters
const parameters = {
	algorithm_type: 9,					// ADVANCED_CVRP_TW,
	store_route: false,
	rt: true,
	parts: 3,
	route_name: "Driver Shift Example",
	route_time: 0,
	optimize: "Distance",
	distance_unit: "mi",
	device_type: "web",
	travel_mode: "Driving",
	vehicle_capacity: 100,
	vehicle_max_distance_mi: 10000,
	route_max_duration: 86400,
	advanced_constraints: [{
			// Schedule 1
			max_cargo_volume: 0.0,
			max_capacity: 200,
			members_count: 2,
			// Time Window Start:  2:00 am EST = 25200
			// Time Window End:   15:50 am EST = 75000
			available_time_windows: [[25200, 75000]],
			tags: ["TAG001", "TAG002"],
		}, {
			// Schedule 2
			max_cargo_volume: 0.0,
			max_capacity: 500,
			members_count: 3,
			// Time Window Start:  7:33 am EST = 45200
			// Time Window End:   10:16 am EST = 55000
			// Time Window Start: 12:13 am EST = 62000
			// Time Window End:   18:36 am EST = 85000
			available_time_windows: [[45200, 55000], [62000, 85000]],
			tags: ["TAG003"],
		}
	]
};

// Addresses
const addresses = [{ 
		address: "1407 MCCOY, Louisville, KY, 40215",
		lat: 38.202496,
		lng: -85.786514,
		time: 300,
		tags: ["TAG001", "TAG002"]
	}, { 
		address: "730 CECIL AVENUE, Louisville, KY, 40211",
		lat: 38.248684,
		lng: -85.821121,
		time: 300,
		tags: ["TAG001", "TAG002"]
	}, { 
		address: "4629 HILLSIDE DRIVE, Louisville, KY, 40216",
		lat: 38.176067,
		lng: -85.824638,
		time: 300,
		tags: ["TAG003"],
		time_window_start: 41348,
		time_window_end: 42261
	}
];

// Depots
const depots = [{
	address: "1604 PARKRIDGE PKWY, Louisville, KY, 40214",
	is_depot: true,
	lat: 38.141598,
	lng: -85.793846,
	time: 300
}];

route4me.Optimizations.createWithAdvancedConstraints({ parameters, addresses, depots }, (err, data) => {
	if(err) console.log(err);
	console.log(data);
});
