Route4Me NODEJS SDK
-------------------

Access Route4Me's logistics-as-a-service API using our Node.js SDK

## Installation

```
npm install --save route4me
```

## Usage example

### Single Driver Route Optimization

```javascript
var api_key = '11111111111111111111111111111111'
  , route4me = require('..')(api_key)
  , addresses = require('./addresses.json');

var params = {
  addresses: addresses
, parameters:{
    algorithm_type: 1
  , distance_unit: 'mi'
  , device_type: 'web'
  , optimize: 'Distance'
  , travel_mode: 'Driving'
  , route_max_duration: 86400
  , vehicle_capacity: 1
  , vehicle_max_distance_mi: 10000
  , rt: true
  }
};

route4me.OptimizationProblem.optimize(params, function(err, problem) {
  console.log(err, problem);
});
```

### Multiple Depot Multiple driver route optimization

```javascript
var api_key = '11111111111111111111111111111111'
  , route4me = require('..')(api_key)
  , addresses = require('./addresses.json');

var params = {
  addresses: addresses
, parameters:{
    algorithm_type: 4
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
```

## Tests

```
npm test
```
