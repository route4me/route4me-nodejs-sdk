# Route4Me NodeJS/javascript SDK

NPM package: `route4me-node`

[![Build Status](https://travis-ci.org/route4me/route4me-nodejs-sdk.svg?branch=master)](https://travis-ci.org/route4me/route4me-nodejs-sdk)
[![Build status](https://ci.appveyor.com/api/projects/status/t292y0ywsri2x4el?svg=true)](https://ci.appveyor.com/project/maxkoryukov/route4me-nodejs-sdk-oga5i)

[![bitHound Overall Score](https://www.bithound.io/github/route4me/route4me-nodejs-sdk/badges/score.svg)](https://www.bithound.io/github/route4me/route4me-nodejs-sdk)
[![bitHound Dependencies](https://www.bithound.io/github/route4me/route4me-nodejs-sdk/badges/dependencies.svg)](https://www.bithound.io/github/route4me/route4me-nodejs-sdk/master/dependencies/npm)
[![codecov](https://codecov.io/gh/route4me/route4me-nodejs-sdk/branch/master/graph/badge.svg)](https://codecov.io/gh/route4me/route4me-nodejs-sdk)
[![NSP Status](https://nodesecurity.io/orgs/route4me/projects/5a353146-e6b4-4bc1-8108-f35517faadde/badge)](https://nodesecurity.io/orgs/route4me/projects/5a353146-e6b4-4bc1-8108-f35517faadde)
[![codebeat badge](https://codebeat.co/badges/79f229c5-27f7-4ab9-8503-2d6fc95052f9)](https://codebeat.co/projects/github-com-route4me-route4me-nodejs-sdk)

## Pre

This is official NodeJS/javascript SDK for Route4Me API.

**IMPORTANT:** trying to preserve consistent naming (`create`, `get`, `update`, `remove`) for methods, **SDK** has several differences with namespaces of the server API. For example, API method [Tracking::Get route tracking data](https://route4me.io/docs/#get-route-tracking-data) is implemented as [route4me.Routes.get]{@link Routes#get} with options. Full list of differences: [API vs SDK]{@tutorial api-vs-sdk}

## Install

```shell
npm install --save route4me-node
```

## Example

### Single Driver Route Optimization

**OBSOLETE**

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

**OBSOLETE**


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
