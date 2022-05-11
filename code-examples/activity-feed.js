const Route4Me = require("route4me-node");
const apiKey = "11111111111111111111111111111111";
const route4me = new Route4Me(apiKey);

/////////////////////////////////////////////////////////
// Get All Activities
//

route4me.ActivityFeed.list({}, (err, data) => {
	console.log(data);
});


/////////////////////////////////////////////////////////
// Get Team Activities on a Route
//
// const criteria = { routeId: '252339DACA8C2547DA1146EAE2080028' };
// const options = { includeTeamActivities: true };

// route4me.ActivityFeed.list(criteria, options, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Get Last Activities
//

/////////////////////////////////////////////////////////
// Log a Specific Message
//
// const data = {
// 	activity_type: "user_message", 
// 	activity_message: "Hello there!", 
// 	route_id: "252339DACA8C2547DA1146EAE2080028" 
// }

// route4me.ActivityFeed.logcustomactivity(data, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Area added
//
// const criteria = { activityType: 'AreaAdded' };

// route4me.ActivityFeed.list(criteria, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Area removed
//
// const criteria = { activityType: 'AreaRemoved' };

// route4me.ActivityFeed.list(criteria, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Area updated
//
// const criteria = { activityType: 'AreaUpdated' };

// route4me.ActivityFeed.list(criteria, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Destination deleted
//
// const criteria = { activityType: 'DeleteDestination' };

// route4me.ActivityFeed.list(criteria, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Destination out of sequence
//
// const criteria = { activityType: 'DestinationOutSequence' };

// route4me.ActivityFeed.list(criteria, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Driver arrived early
//
// const criteria = { activityType: 'DriverArrivedEarly' };

// route4me.ActivityFeed.list(criteria, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Driver arrived late
//
// const criteria = { activityType: 'DriverArrivedLate' };

// route4me.ActivityFeed.list(criteria, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Driver arrived on time
//
// const criteria = { activityType: 'DriverArrivedOnTime' };

// route4me.ActivityFeed.list(criteria, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Geofence entered
//
// const criteria = { activityType: 'GeofenceEntered' };

// route4me.ActivityFeed.list(criteria, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Geofence left
//
// const criteria = { activityType: 'GeofenceLeft' };

// route4me.ActivityFeed.list(criteria, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Destination inserted
//
// const criteria = { 
// 	routeId: '252339DACA8C2547DA1146EAE2080028',
// 	activityType: 'InsertDestination'
// };

// route4me.ActivityFeed.list(criteria, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Destination inserted (all)
//
// const criteria = { activityType: 'InsertDestination' };

// route4me.ActivityFeed.list(criteria, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Destination marked as departed
//
// const criteria = { 
// 	routeId: '252339DACA8C2547DA1146EAE2080028',
// 	activityType: 'MarkDestinationDeparted'
// };

// route4me.ActivityFeed.list(criteria, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Destination marked as departed (all)
//
// const criteria = { activityType: 'MarkDestinationDeparted' };

// route4me.ActivityFeed.list(criteria, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Destination marked as visited
//
// const criteria = { activityType: 'MarkDestinationVisited' };

// route4me.ActivityFeed.list(criteria, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Member created
//
// const criteria = { activityType: 'MemberCreated' };

// route4me.ActivityFeed.list(criteria, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Member deleted
//
// const criteria = { activityType: 'MemberDeleted' };

// route4me.ActivityFeed.list(criteria, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Member modified
//
// const criteria = { activityType: 'MemberModified' };

// route4me.ActivityFeed.list(criteria, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Destination moved (all)
//
// const criteria = { activityType: 'MoveDestination' };

// route4me.ActivityFeed.list(criteria, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Note inserted
//
// const criteria = { 
// 	routeId: '252339DACA8C2547DA1146EAE2080028',
// 	activityType: 'NoteInsert'
// };

// route4me.ActivityFeed.list(criteria, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Note inserted (all)
//
// const criteria = { activityType: 'NoteInsert' };

// route4me.ActivityFeed.list(criteria, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Route deleted
//
// const criteria = { activityType: 'RouteDelete' };

// route4me.ActivityFeed.list(criteria, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Route optimized (all)
//
// const criteria = { activityType: 'RouteOptimized' };

// route4me.ActivityFeed.list(criteria, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Route owner changed
//
// const criteria = { activityType: 'RouteOwnerChanged' };

// route4me.ActivityFeed.list(criteria, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Destination updated (all)
//
// const criteria = { activityType: 'UpdateDestinations' };

// route4me.ActivityFeed.list(criteria, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Get Activities By User
//
// const criteria = { memberId: 1053088 };

// route4me.ActivityFeed.list(criteria, (err, data) => {
// 	console.log(data);
// });
