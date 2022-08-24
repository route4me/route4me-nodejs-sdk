const Route4Me = require("route4me-node");
const apiKey = "11111111111111111111111111111111";
const route4me = new Route4Me(apiKey);

/////////////////////////////////////////////////////////
// Create an Order
//
const data = {
	address_1: "1358 E Luzerne St, Philadelphia, PA 19124, US",
	cached_lat: 48.335991,
	cached_lng: 31.18287,
	address_alias: "Auto test address",
	address_city: "Philadelphia",
	day_scheduled_for_YYMMDD: "2018-05-16",
	EXT_FIELD_first_name: "Igor",
	EXT_FIELD_last_name: "Progman",
	EXT_FIELD_email: "progman@gmail.com",
	EXT_FIELD_phone: "380380380380",
	EXT_FIELD_custom_data: [{
		order_id: "10",
		name: "Bill Soul"
	}]
};

route4me.Orders.create(data, (err, data) => {
	console.log(data);
});


/////////////////////////////////////////////////////////
// Create an Order With Custom Field
//
// const data = {
// 	address_1: "1358 E Luzerne St, Philadelphia, PA 19124, US",
// 	cached_lat: 48.335991,
// 	day_scheduled_for_YYMMDD: "2019-10-11",
// 	cached_lng: 31.18287,
// 	address_alias: "Auto test address",
// 	custom_user_fields: [{
// 		order_custom_field_id: 93, 
// 		order_custom_field_value: "false"
// 	}]
// };

// route4me.Orders.create(data, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Create a Scheduled Order
//
// const data = {
// 	address_1: "318 S 39th St, Louisville, KY 40212, USA",
// 	cached_lat: 38.259326,
// 	cached_lng: -85.814979,
// 	curbside_lat: 38.259326,
// 	curbside_lng: -85.814979,
// 	address_alias: "318 S 39th St 40212",
// 	address_city: "Louisville",
// 	EXT_FIELD_first_name: "Lui",
// 	EXT_FIELD_last_name: "Carol",
// 	EXT_FIELD_email: "lcarol654@yahoo.com",
// 	EXT_FIELD_phone: "897946541",
// 	EXT_FIELD_custom_data: [{
// 		order_type: "scheduled order"
// 	}],
// 	day_scheduled_for_YYMMDD: "2017-12-20",
// 	local_time_window_end: 39000,
// 	local_time_window_end_2: 46200,
// 	local_time_window_start: 37800,
// 	local_time_window_start_2: 45000,
// 	local_timezone_string: "America/New_York",
// 	order_icon: "emoji/emoji-bank"
// };

// route4me.Orders.create(data, (err, data) => {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Add an Order to a Route
//


/////////////////////////////////////////////////////////
// Add an Order to an Optimization
//


/////////////////////////////////////////////////////////
// Get Single or Multiple Orders
//
// const order_id = 16637280;

// route4me.Orders.get(order_id, (err, data) => 
// {
// 	console.log(data);
// });

// and

// const order_ids = [16637280, 16637261, 4769732];

// route4me.Orders.list(order_ids, (err, data) => 
// {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Get Orders
// a) Get all the orders created under the specific Route4Me account
//
// route4me.Orders.list((err, data) => 
// {
// 	console.log(data);
// });

// b) Get the orders inserted on a specific date
//
// const criteria = { byAddDate: new Date("2022-04-17") };

// route4me.Orders.search(criteria, (err, data) => 
// {
// 	console.log(data);
// });

// c) Get the orders scheduled for a specific date
//
// const criteria = { byScheduledDate: new Date("2022-02-15") };

// route4me.Orders.search(criteria, (err, data) => 
// {
// 	console.log(data);
// });

// d) Get the orders showing only specific fields
//
// const options = {
// 	offset: 2,
// 	limit: 5,
// 	fields: "order_id, order_status_id"
// };

// route4me.Orders.search({}, options, (err, data) => 
// {
// 	console.log(data);
// });

// e) Get the orders that contain the specified text in any of its fields
//
// const criteria = { query: "TATIANA" };
// const options = { limit: 5 };

// route4me.Orders.search(criteria, options, (err, data) => 
// {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Update an Order
//
// const order_id = 16637280;
// const data = { 
// 	EXT_FIELD_first_name: "John",
// 	EXT_FIELD_last_name: "Doe",
// 	EXT_FIELD_email: "John@company.com"
// };

// route4me.Orders.update(order_id, data, (err, data) => 
// {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Update an Order With Custom Data
//
// const order_id = 16637280;
// const data = { 
// 	custom_user_fields: [{
// 		order_custom_field_id: 15, 
// 		order_custom_field_value: "true"
// 	}]
// };

// route4me.Orders.update(order_id, data, (err, data) => 
// {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Remove an Order
//
// const order_id = 16637280;

// route4me.Orders.remove(order_id, data, (err, data) => 
// {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Get User Custom Fields
//
// route4me.Orders.getOrderCustomFields((err, data) => 
// {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Add User Custom Field
//
// const data = {
// 	order_custom_field_name: "CustomField1",
// 	order_custom_field_label: "Custom Field 1",
// 	order_custom_field_type: "checkbox",
// 	order_custom_field_type_info: { short_label: "cFl1" }
// };

// route4me.Orders.createOrderCustomFields(data, (err, data) => 
// {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Update User Custom Field
//
// const data = {
// 	order_custom_field_id: 1291,
// 	order_custom_field_label: "Custom Field 2",
// 	order_custom_field_type: "checkbox",
// 	order_custom_field_type_info: { short_label: "cFl2" }
// };

// route4me.Orders.updateOrderCustomFields(data, (err, data) => 
// {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Remove User Custom Field
//
// const order_custom_field_id = 1291;

// route4me.Orders.removeOrderCustomFields(order_custom_field_id, (err, data) => 
// {
// 	console.log(data);
// });


/////////////////////////////////////////////////////////
// Archive an Order
//
// const body = {
// 	cursor: "",
// 	per_page: 10,
// 	filters: []
// };

// route4me.Orders.archive(body, (err, data) => 
// {
// 	console.log(data);
// });
