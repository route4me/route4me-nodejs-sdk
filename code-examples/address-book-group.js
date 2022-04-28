const Route4Me = require("route4me-node");
const apiKey = "11111111111111111111111111111111";
const route4me = new Route4Me(apiKey);

/////////////////////////////////////////////////////////
// Create a Group
//

route4me.AddressBook.create(data, (err, data) => {
	console.log(data);
});
