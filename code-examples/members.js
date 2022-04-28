const Route4Me = require("route4me-node");
const apiKey = "11111111111111111111111111111111";
const route4me = new Route4Me(apiKey);

/////////////////////////////////////////////////////////
// Authentication
//
const email = "John@company.com";
const password = "john_password";

route4me.Members.authenticate(email, password, (err, data) => {
	console.log(data);
});


/////////////////////////////////////////////////////////
// Member’s Sub-users
//
// route4me.Members.list((err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Validate a Session
//
// const member_id = 787544566;
// const session_guid = 4552222222;

// route4me.Members.validateSession(member_id, session_guid, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Register an Account
//
// const data = {
// 	accountPlan: "free",
// 	industry: "Gifting",
// 	firstName: "John",
// 	lastName: "Doe",
// 	email: "John@company.com",
// 	deviceType: "web",
// 	password: "john_password"
// };

// route4me.Members.registerAccount(data, (err, data) => {
// 	console.log(err);
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Get User’s Details
//
// const member_id = 787544566;

// route4me.Members.get(member_id, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Create a User
//
// const data = {
// 	hideRoutedAddresses: false,
// 	phone: "571-222-5555",
// 	zipcode: "22102",
// 	routeCount: null,
// 	email: "JohnDoe@company.com",
// 	hideVisitedAddresses: false,
// 	readonlyUser: false,
// 	type: "SUB_ACCOUNT_DISPATCHER",
// 	dateOfBirth: "2010",
// 	firstName: "John",
// 	password: "123456",
// 	hideNonfutureRoutes: false,
// 	lastName: "Doe",
// 	showAllVehicles: false,
// 	showAllDrivers: false
// };

// route4me.Members.create(data, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Update a User
//
// const member_id = 2288930;

// const data = {
// 	hideRoutedAddresses: false,
// 	phone: "571-222-6666",
// 	zipcode: "22102",
// 	routeCount: null,
// 	email: "JohnDoe@company.com",
// 	hideVisitedAddresses: false,
// 	readonlyUser: false,
// 	type: "SUB_ACCOUNT_DISPATCHER",
// 	dateOfBirth: "2010",
// 	firstName: "John",
// 	password: "1234567",
// 	hideNonfutureRoutes: false,
// 	lastName: "Doe",
// 	showAllVehicles: false,
// 	showAllDrivers: false
// };

// route4me.Members.update(member_id, data, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Add Custom Data to a User
//
// const member_id = 2288930;

// const data = {
// 	custom_data: {
// 		CustomKey1: "Custom value 1",
// 		CustomKey2: "Custom value 2"
// 	}
// };

// route4me.Members.addCustomData(member_id, data, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Remove a User
//
// const member_id = 2288930;

// route4me.Members.remove(member_id, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Add a New Configuration Key
//
// const member_id = 2288930;

// route4me.Members.remove(member_id, (err, data) => {
// 	console.log(data);
// });

/////////////////////////////////////////////////////////
// Add a New Configuration Key
//

/////////////////////////////////////////////////////////
// Add an Array of Configuration Keys
//

/////////////////////////////////////////////////////////
// Get All Configuration Data
//

/////////////////////////////////////////////////////////
// Get a Specific Configuration Key Value
//

/////////////////////////////////////////////////////////
// Remove a Configuration Key
//

/////////////////////////////////////////////////////////
// Update a Configuration Key Value
//

