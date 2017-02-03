const api_key = "11111111111111111111111111111111";
const Order = require("..")(api_key).Order;

// Create new order
const order_data = {
	address_1: "106 Fulton St, Farmingdale, NY 11735, USA",
	cached_lat: 40.730730,
	cached_lng: -73.459283,
	address_alias: "BK Restaurant #: 17871",
	EXT_FIELD_phone: "(212) 566-5132",
	day_scheduled_for_YYMMDD: "2016-07-01",
	EXT_FIELD_custom_data: {
		url: "http://www.bk.com/restaurants/ny/new-york/106-fulton-st-17871.html",
	},
};

Order.new(order_data, (err, response_json) => {
	if (err) {
		throw new Error(err);
	}

	const order_id = response_json.order_id;
	if (!order_id) {
		throw new Error("Order is undefined");
	}

  // Print order api response
	console.log("Order data:", response_json);

  // Update order
	const order_data = {
		order_id,
		is_accepted: true,
		is_started: true,
	};

	Order.update(order_data, (err, response_json) => {
		if (err) {
			throw new Error(err);
		}

		console.log("Updated order data:", response_json);

    // Remove order
		const order_data = { order_ids: [order_id] };
		Order.delete(order_data, (err, response_json) => {
			if (err) {
				throw new Error(err);
			}

			console.log("Delete status:", response_json.status);
		});
	});
});
