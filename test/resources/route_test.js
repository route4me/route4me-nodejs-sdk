var expect = require('chai').expect
  , utils = require('../utils')
  , route4me = utils.route4me;

var r = null
  , r2 = null;

describe('Route API', function() {
  before(function(done) {
    var params = {
      algorithm_type: 1
    , disable_optimization: false
    };

    utils.createRoute(params, function(err, optimization) {
      r = optimization['routes'][0];

      utils.createRoute(params, function(err, optimization) {
        r2 = optimization['routes'][0];
        done();
      });
    });
  });

  it("should return right methods", function(done) {
    expect(route4me).to.contain.keys('Route');
    expect(route4me.Route).to.contain.keys(['get', 'update', 'delete']);

    done();
  });

  it("should return route info by route_id", function(done) {
    route4me.Route.get(r.route_id, function (err, route) {
      expect(err).to.be.null;
      expect(route).to.contain.keys(['route_id', 'member_id']);
      expect(route.route_id).to.equal(r.route_id);
      expect(route.member_id).to.equal(1);

      done();
    });
  });

  it("should return routes info by list of route_id", function(done) {
    var route_ids = [
      r.route_id
    , r2.route_id
    ];

    route4me.Route.get(route_ids, function (err, routes) {
      expect(err).to.be.null;
      expect(routes).to.have.length(2)

      done();
    });
  });

  it("should return 10 routes", function (done) {
    var params = { limit: 10 };

    route4me.Route.get(params, function (err, routes) {
      expect(err).to.be.null;
      expect(routes).to.have.length(10)

      done();
    });
  });

  it("should update route_name", function (done) {
    var route_name = 'Route updated on ' + new Date();
    var params = {
      parameters: { route_name: route_name }
    };

    route4me.Route.update(r.route_id, params, function (err, route) {
      expect(err).to.be.null;
      expect(route.parameters.route_name).to.equal(route_name);

      done();
    });
  });

  it("should add address to route", function (done) {
    var params = {
      addresses: [
        {
          address: "10408 Rolling Ridge Dr, Spotsylvania, VA 22553"
        , lat: 38.246207
        , lng: -77.572255
        }
      ]
    };

    route4me.Route.update(r.route_id, params, function (err, route) {
      expect(err).to.be.null;
      expect(route.route_id).to.equal(r.route_id);

      done();
    });
  });

  it("should remove route", function(done) {
    route4me.Route.delete(r.route_id, function (err, deleted) {
      expect(err).to.be.null;
      expect(deleted).to.equal(true);

      done();
    });
  });
});
