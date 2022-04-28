const Route4Me = require("route4me-node");
const apiKey = "11111111111111111111111111111111";
const route4me = new Route4Me(apiKey);

/////////////////////////////////////////////////////////
// Mark as Detected as Visited
//
const route_id = '252339DACA8C2547DA1146EAE2080028';
const route_dest_id = 785757406;

route4me.Addresses.markDetectedVisited(route_dest_id, route_id, false, (err, data) => {
	console.log(data);
});


/////////////////////////////////////////////////////////
// Mark as Detected as Departed
//
// const route_id = '252339DACA8C2547DA1146EAE2080028';
// const route_dest_id = 785617246;

// route4me.Addresses.markDetectedDeparted(route_dest_id, route_id, true, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Mark as Visited
//
// const route_id = '252339DACA8C2547DA1146EAE2080028';
// const route_dest_id = 785757406;
// const member_id = 1053088;

// route4me.Addresses.markVisited(route_dest_id, route_id, member_id, true, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Mark as Departed
//
// const route_id = '252339DACA8C2547DA1146EAE2080028';
// const route_dest_id = 785757406;
// const member_id = 1053088;

// route4me.Addresses.markDeparted(route_dest_id, route_id, member_id, true, (err, data) => {
// 	console.log(data);
// });
