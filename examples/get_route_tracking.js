var api_key = '11111111111111111111111111111111'
  , route4me = require('..')(api_key);

var route_id = 'AC16E7D338B551013FF34266FE81A5EE'
  , params = { device_tracking_history: true };

route4me.Route.get(route_id, params, function(err, route) {
  console.log(err, route['tracking_history']);
});
