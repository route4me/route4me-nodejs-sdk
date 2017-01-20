let expect = require("chai").expect,
	utils = require("../utils"),
	route4me = utils.route4me;

describe("Track API", () => {
	it("should return right methods", (done) => {
		expect(route4me).to.contain.keys("Track");
		expect(route4me.Track).to.contain.keys("set");
		done();
	});

	it("api should return true", (done) => {
		const params = {
			format: "json",
			member_id: 1,
			route_id: "0CDA1358186D616AFD39FEB579A64974",
			course: 1,
			speed: 120,
			lat: 41.8927521,
			lng: -109.0803888,
			device_type: "iphone",
			device_guid: "196CF29ED924523E198009CD96DEADA3",
		};

		route4me.Track.set(params, (err, status) => {
			expect(status).to.equal(true);
			done();
		});
	});

	it("api should return error", (done) => {
		const params = {
			format: "json",
			member_id: 1,
			course: 1,
			speed: 120,
			lat: 41.8927521,
			lng: -109.0803888,
			device_type: "iphone",
			device_guid: "196CF29ED924523E198009CD96DEADA3",
		};

		route4me.Track.set(params, (err, status) => {
			expect(status).to.equal(false);
			done();
		});
	});
});
