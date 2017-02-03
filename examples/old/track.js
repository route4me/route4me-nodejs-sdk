let api_key = "11111111111111111111111111111111",
	route4me = require("..")(api_key);

params = {
	format: "json",
	member_id: 1,
	route_id: "0CDA1358186D616AFD39FEB579A64974",
	course: 1,
	speed: 120,
	lat: 41.8927521,
	lng: -109.0803888,
	device_type: "iphone",
	device_guid: "036BFC6AC46F45153D7381BE321CB9235585FD83",
};

route4me.Track.set(params, (err, status) => {
	console.log(err, status);
});
