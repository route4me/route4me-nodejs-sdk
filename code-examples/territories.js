const Route4Me = require("route4me-node");
const apiKey = "11111111111111111111111111111111";
const route4me = new Route4Me(apiKey);

/////////////////////////////////////////////////////////
// Create a Territory
// a) Create a new territory with a circular shape
//
const data = {
	territory_name: "Test Circle Territory",
	territory_color: "ff0000",
	territory: {
		type: "circle",
		data: ["37.569752822786455,-77.47833251953125", "5000"]
	}
};

route4me.Territories.create(data, (err, data) => {
	console.log(data);
});


// b) Create a new territory with a polygon shape
//
// const data = {
// 	territory_name: "Test Polygon Territory",
// 	territory_color: "ff0000",
// 	territory: {
// 		type: "poly",
// 		data: [
// 			"37.769752822786455,-77.67833251953125",
// 			"37.75886716305343,-77.68974800109863",
// 			"37.74763966054455,-77.6917221069336",
// 			"37.74655084306813,-77.68863220214844",
// 			"37.7502255383101,-77.68125076293945",
// 			"37.74797991274437,-77.67498512268066",
// 			"37.73327960206065,-77.6411678314209",
// 			"37.74430510679532,-77.63172645568848",
// 			"37.76641925847049,-77.66846199035645"
// 		]
// 	}
// };

// route4me.Territories.create(data, (err, data) => {
// 	console.log(data);
// });


// c) Create a new territory with a rectangular shape
//
// const data = {
// 	territory_name: "Test Rect Territory",
// 	territory_color: "ff0000",
// 	territory: {
// 		type: "rect",
// 		data: [
// 			"43.51668853502909,-109.3798828125", 
// 			"46.98025235521883,-101.865234375"
// 		]
// 	}
// };

// route4me.Territories.create(data, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Get a Territory
//
// const territory_id = "B3952ADA31C520D6D43F6DE3E8AAA2AC";

// const options = { 
// 	includeAddresses: true, 
// 	includeOrders: true
// };

// route4me.Territories.get(territory_id, options, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Get Multiple Territories
//
// route4me.Territories.get((err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Remove a Territory
//
// const territory_id = "B3952ADA31C520D6D43F6DE3E8AAA2AC";

// route4me.Territories.remove(territory_id, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Update a Territory
//
// const territory_id = "B3952ADA31C520D6D43F6DE3E8AAA2AC";

// const data = {
// 	territory_name: "Test Territory",
// 	territory: {
// 		type: "circle",
// 		data: ["37.569752822786455,-77.47833251953125", "5000"]
// 	}
// };

// route4me.Territories.update(territory_id, data, (err, data) => {
// 	console.log(data);
// });
