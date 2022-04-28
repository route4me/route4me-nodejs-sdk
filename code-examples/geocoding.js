const Route4Me = require("route4me-node");
const apiKey = "11111111111111111111111111111111";
const route4me = new Route4Me(apiKey);

/////////////////////////////////////////////////////////
// Forward Geocode Address
//
const address = "Los Angeles International Airport, CA"

route4me.Geocoding.forward(address, (err, data) => {
	console.log(data);
});


/////////////////////////////////////////////////////////
// Reverse Geocode Address
//
// const lat = 33.941588;
// const lng = -118.40853;

// route4me.Geocoding.reverse(lat, lng, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Batch Geocode Addresses
//
// const addresses = "Los Angeles International Airport, CA\n512,Florida Pl,Barberton,OH,44203\n3495,Purdue St,Cuyahoga Falls,OH,44221";

// route4me.Geocoding.batch(addresses, (err, data) => {
// 	console.log(data);
// });

// and 

// const addresses = "33.941588, -118.40853\n41.003573, -81.598666\n41.162977, -81.479135";

// route4me.Geocoding.batch(addresses, (err, data) => {
// 	console.log(data);
// });
