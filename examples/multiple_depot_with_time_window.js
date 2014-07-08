var api_key = '11111111111111111111111111111111'
  , route4me = require('..')(api_key)
  , addresses = require('./addresses.json');

var params = {
  addresses: addresses
, parameters:{
    algorithm_type: 3
  , distance_unit: 'mi'
  , device_type: 'web'
  , optimize: 'Distance'
  , travel_mode: 'Driving'
  , route_max_duration: 86400
  , vehicle_capacity: 50
  , vehicle_max_distance_mi: 10000
  , parts: 50
  }
};

route4me.OptimizationProblem.optimize(params, function(err, problem) {
  console.log(err, problem);
});
