const Route4Me = require("route4me-node");
const apiKey = "11111111111111111111111111111111";
const route4me = new Route4Me(apiKey);

/////////////////////////////////////////////////////////
// Add Addresses to Routes
// a) Add an address to the specified position
//
const route_id = '252339DACA8C2547DA1146EAE2080028';
const options = { optimalPosition: false };
const addresses = [{
		"lng": -85.774864,
		"lat": 38.178844,
		"is_depot": false,
		"time": 300,
		"address": "4805 BELLEVUE AVE, Louisville, KY, 40215"
}];

route4me.Routes.linkAddress(route_id, addresses, options, (err, data) => {
	console.log(data);
});

// b) add addresses into optimal positions
//
// const route_id = '252339DACA8C2547DA1146EAE2080028';
// const options = { optimalPosition: true };
// const addresses = [{
// 		"lng": -85.774864,
// 		"lat": 38.178844,
// 		"is_depot": false,
// 		"time": 300,
// 		"sequence_no": 1,
// 		"address": "4805 BELLEVUE AVE, Louisville, KY, 40215"
// }];

// route4me.Routes.linkAddress(route_id, addresses, options, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Remove Addresses from Routes
//
// const route_id = '252339DACA8C2547DA1146EAE2080028';
// const route_dest_id = 785757202;

// route4me.Routes.unlinkAddress(route_id, route_dest_id, (err, data) => {
// 	 console.log(data);
// });


/////////////////////////////////////////////////////////
// Get a Route
//
// const route_id = '252339DACA8C2547DA1146EAE2080028';

// route4me.Routes.get(route_id, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Get Multiple Routes
// a) Get a limited number of routes belonging to a user
//
// const route_id = '252339DACA8C2547DA1146EAE2080028';
// const options = {
// 	limit: 10,
// 	offset: 0	
// };

// route4me.Routes.list(options, (err, data) => {
// 	console.log(data);
// });

// b) Get the routes scheduled for the specified date range.
//
// const route_id = '252339DACA8C2547DA1146EAE2080028';
// const options = {
// 	startDate: "2022-01-01",
// 	endDate: "2022-04-30"
// };

// route4me.Routes.list(options, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Search Routes
// a) Get path points of a route
//
// const route_id = '252339DACA8C2547DA1146EAE2080028';
// const options = { includeRoutePath: true };

// route4me.Routes.get(route_id, options, (err, data) => {
// 	console.log(data);
// });

// b) Get the compressed path points of a route
//
// const route_id = '252339DACA8C2547DA1146EAE2080028';
// const options = { compressPathPoints: true };

// route4me.Routes.get(route_id, options, (err, data) => {
// 	console.log(data);
// });

// c) Get route directions
//
// const route_id = '252339DACA8C2547DA1146EAE2080028';
// const options = { includeDirections: true };

// route4me.Routes.get(route_id, options, (err, data) => {
// 	console.log(data);
// });

// d) Search the routes for a specified text
//
// route4me.Routes.search("Single", (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Get an Address from a Route
//
// const route_id = '252339DACA8C2547DA1146EAE2080028';
// const route_dest_id = 785617246;

// route4me.Addresses.get(route_dest_id, route_id, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Manually Resequence a Route
// a) Route resequence
//
// const route_id = '252339DACA8C2547DA1146EAE2080028';
// const order = { 
// 	785617246: 2, 
// 	785757406: 1
// };

// route4me.Routes.resequence(route_id, order, (err, data) => {
// 	console.log(data);
// });

// b) Resequence all destinations
//
// available under v.3 on url api.v3/route/reoptimize_2.php


/////////////////////////////////////////////////////////
// Move a Destination into a Route
//
// const route_id = '252339DACA8C2547DA1146EAE2080028';
// const addr_id = 785617246; 
// const addr_after_id = 785757406;

// route4me.Routes.pullAddress(route_id, addr_id, addr_after_id, (err, data) => {
// 	console.log(err);
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Remove Routes
//
// const route_id = '252339DACA8C2547DA1146EAE2080028';

// route4me.Routes.remove(route_id, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Merge Routes
//
// const ids = ['252339DACA8C2547DA1146EAE2080028', '276339DACA8C2547DA1146EAE2083427'];

// route4me.Routes.merge(ids, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Duplicate a Route
//
// const route_id = '252339DACA8C2547DA1146EAE2080028';

// route4me.Routes.duplicate(route_id, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Share Routes
//
// const route_id = '252339DACA8C2547DA1146EAE2080028';
// const email = "noreply@company.com";

// route4me.Routes.share(route_id, email, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Update a Route
// a) Update a route destination.
//
// const route_id = '252339DACA8C2547DA1146EAE2080028';
// const route_dest_id = 785757406
// const data = {
// 	first_name: "John",
// 	last_name: "Doe"
// };

// route4me.Addresses.updateCustomData(route_dest_id, route_id, data, (err, data) => {
// 	console.log(data);
// });

// b) Update the custom data of the route destinations.
//
// const route_id = '252339DACA8C2547DA1146EAE2080028';
// const route_dest_id = 785757406
// const data = {
// 	first_name: "John",
// 	last_name: "Doe"
// };

// route4me.Addresses.updateCustomData(route_dest_id, route_id, data, (err, data) => {
// 	console.log(data);
// });

// c) Update a route’s specified parameters.
//
// const route_id = '252339DACA8C2547DA1146EAE2080028';
// const data = {
// 	parameters: {
// 		vehicle_capacity: 5,
// 		route_email: "John@company.com"
// 	}
// };

// route4me.Routes.update(route_id, data, (err, data) => {
// 	console.log(data);
// });

// d) Recompute the route directions
//

// e) Unlink a route from master optimization
//

/////////////////////////////////////////////////////////
// Share Routes
//
// const params = {
// 	date_from_string: "2022-01-01",
// 	date_to_string: "2022-05-31"
// };

// route4me.Routes.get_schedule_calendar(params, (err, data) => {
// 	console.log(data);
// });
