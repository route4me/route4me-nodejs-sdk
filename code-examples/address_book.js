const Route4Me = require("route4me-node");
const apiKey = "11111111111111111111111111111111";
const route4me = new Route4Me(apiKey);

/////////////////////////////////////////////////////////
// Create a Location
//
const data = {
	member_id: 177496,
	address_group: "",
	address_alias: "301 MARKET SHELL",
	address_1: "17205 RICHMOND TNPK, MILFORD, VA, 22514", 
	first_name: "Gela", 
	last_name: "Gorason", 
	address_email: "ggora@gmail.com", 
	address_phone_number: "8046335852", 
	address_city: "Tbilisi", 
	address_state_id: "TB", 
	address_country_id: "GEO", 
	address_zip: "00167", 
	cached_lat: "38.024654", 
	cached_lng: "-77.338814", 
	address_custom_data: {
		"sales rep id": "545", 
		"sales rep name": "Kellye Foster", 
		"retailer id": "173907"
	}
};

route4me.AddressBook.create(data, (err, data) => {
	console.log(data);
});


/////////////////////////////////////////////////////////
// Create a Scheduled Location
//
// const data = {
// 	address_1: "1604 PARKRIDGE PKWY, Louisville, KY, 40214",
// 	address_alias: "1604 PARKRIDGE PKWY 40214",
// 	address_group: "Scheduled daily",
// 	first_name: "Peter",
// 	last_name: "Newman",
// 	address_email: "pnewman6564@yahoo.com",
// 	address_phone_number: "65432178",
// 	cached_lat: 38.141598,
// 	cached_lng: -85.793846,
// 	curbside_lat: 38.141598,
// 	curbside_lng: -85.793846,
// 	address_city: "Louisville",
// 	address_custom_data: {
// 		scheduled: "yes",
// 		"service type": "publishing"
// 	},
// 	schedule: [{
// 		enabled: true,
// 		from: "2018-12-20",
// 		mode: "daily",
// 		daily: { every: 1 }
// 	}],
// 	service_time: 900
// };

// route4me.AddressBook.create(data, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Remove Locations
//
// const address_id = 81987290;

// route4me.AddressBook.remove(address_id, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Get a Location
//
// const query = "PARKRIDGE";
// const options = { limit: 5 };

// route4me.AddressBook.search(query, options, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Get Locations by IDs
//
// const address_ids = [74768810, 76975023];

// route4me.AddressBook.getMany(address_ids, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Get a Locations
//
// const options = { 
// 	offset: 10,
// 	limit: 5
// };

// route4me.AddressBook.search(null, options, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Location Search
// a) Get or search for some locations using the provided parameters.
//
// const query = "Belgium";

// const options = { 
// 	fields: "address_1,address_2",
// 	limit: 5
// };

// route4me.AddressBook.search(query, options, (err, data) => {
// 	console.log(data);
// });


// b) Display the locations included in the routes.
//
// const options = { routed: true };

// route4me.AddressBook.search(null, options, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Update a Location
//
// const address_id = 76975023;

// const data = {	
// 	member_id: 1053088,
// 	curbside_lat: 38.024654,
// 	curbside_lng: -77.338814,
// 	first_name: "Modified"
// };

// route4me.AddressBook.update(address_id, data, (err, data) => {
// 	console.log(err);
// 	console.log(data);
// });
