const Route4Me = require("route4me-node");
const apiKey = "11111111111111111111111111111111";
const route4me = new Route4Me(apiKey);

/////////////////////////////////////////////////////////
// Get Asset Tracking Data
//
const tracking = "68XDVM3Z"

route4me.Tracking.getAssetTracking(tracking, (err, data) => {
	console.log(data);
});


/////////////////////////////////////////////////////////
// Get Route Tracking Data
// a) Get the device’s last location history.
//
// const route_id = '252339DACA8C2547DA1146EAE2080028';
// const options = { includeTracking: true };

// route4me.Routes.get(route_id, options, (err, data) => {
// 	console.log(data);
// });

// b) Get the device’s location history from a time range.
//
// const route_id = '252339DACA8C2547DA1146EAE2080028';
// const period = {
// 	time_period: "custom",
// 	from: new Date(Date.UTC(2016, 9, 20)),
// 	trim: new Date(Date.UTC(2016, 9, 26, 23, 59, 0))
// };

// const period = "all_time";

// route4me.Tracking.getRouteTrackingHistory(route_id, period, (err, data) => {
// 	console.log(err);
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Insert Route Tracking Data
//
// const data = {
// 	member_id: 1053088,
// 	route_id: '252339DACA8C2547DA1146EAE2080028',
// 	course: 70,
// 	speed: 60,
// 	lat: 55.6884868,
// 	lng: 12.5366426,
// 	device_type: "android_phone",
// 	device_guid: "HK5454H0K454564WWER445"
// };

// route4me.Tracking.createRouteTracking(data, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Get All User Locations
//
// route4me.Tracking.getAllUserLocations((err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Search User Locations
//
// const query = "Clay";

// route4me.Tracking.searchUserLocations(query, (err, data) => {
// 	console.log(data);
// });
