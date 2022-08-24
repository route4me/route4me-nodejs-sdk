const Route4Me = require("route4me-node");
const apiKey = "11111111111111111111111111111111";
const route4me = new Route4Me(apiKey);

/////////////////////////////////////////////////////////
// Add Route Notes
//
const data = {
	routeId: '252339DACA8C2547DA1146EAE2080028',
	addressId: 785757406,
	deviceLatitude: 38.178844,
	deviceLongitude: -85.774864,
	deviceType: "web",
	note: "This sample note message 1.",
	file: null,
	type: null
};

route4me.Notes.create(data, (err, data) => {
	console.log(data);
});


/////////////////////////////////////////////////////////
// Add a Note File
// Не работает, нужен attach для form параметров
//
// const data = {
// 	routeId: '252339DACA8C2547DA1146EAE2080028',
// 	addressId: 785757406,
// 	deviceLatitude: 38.178844,
// 	deviceLongitude: -85.774864,
// 	deviceType: "web",
// 	note: null,
// 	file: "index.html",
// 	type: "ANY_FILE"
// };

// route4me.Notes.create(data, (err, data) => {
// 	console.log(err);
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Get Notes
//
// const route_id = '252339DACA8C2547DA1146EAE2080028';
// const route_dest_id = 785757406;
// const options = { includeNotes: true };

// route4me.Addresses.get(route_dest_id, route_id, options, (err, data) => {
// 	console.log(err);
// 	console.log(data);
// });
