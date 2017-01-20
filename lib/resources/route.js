let _ = require("underscore"),
	uri = "/api.v4/route.php";

module.exports = function (route4me) {
	return {
    // RouteId, Params, callback
		get() {
			const args = [].slice.call(arguments);
			const callback = typeof args[args.length - 1] === "function" && args.pop();
			let params = args[args.length - 1].toString() === "[object Object]" ? args.pop() : {};
			const route_id = args.pop();

			if (typeof route_id !== "undefined") {
				params["route_id"] = route_id.toString(",");
			}

			params = _.pick(params, [
				"directions", "route_path_output", "original",
				"device_tracking_history", "limit", "offset",
				"route_id",
			]);

			const options = {
				uri: route4me._generateUrl(uri),
				qs: params,
			};

			route4me._makeRequest(options, callback);
		},
		update(route_id, params, callback) {
			const options = {
				uri: route4me._generateUrl(uri),
				method: "PUT",
				qs: { route_id },
				body: _.pick(params, ["addresses", "parameters"]),
			};

			route4me._makeRequest(options, callback);
		},
		delete(route_id, callback) {
			const options = {
				uri: route4me._generateUrl(uri),
				method: "DELETE",
				qs: { route_id: route_id.toString(",") },
			};

			route4me._makeRequest(options, (err, data) => {
				callback(err, data["deleted"] || false);
			});
		},
	};
};
