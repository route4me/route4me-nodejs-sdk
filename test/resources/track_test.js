var expect = require('chai').expect
  , route4me = require('../../lib/route4me')('11111111111111111111111111111111');

route4me.setBaseUrl('http://staging.route4me.com:8080');

describe('Track API', function() {
  it("should return right methods", function(done) {
    expect(route4me).to.contain.keys('Track');
    expect(route4me.Track).to.contain.keys('set');
    done();
  });

  it("api should return true", function(done) {
    var params = {
      format: 'json',
      member_id: 1,
      route_id: '0CDA1358186D616AFD39FEB579A64974',
      course: 1,
      speed: 120,
      lat: 41.8927521,
      lng: -109.0803888,
      device_type: 'iphone',
      device_guid: '196CF29ED924523E198009CD96DEADA3'
    };

    route4me.Track.set(params, function(err, status) {
      expect(status).to.equal(true);
      done();
    });
  });

  it("api should return error", function(done) {
    var params = {
      format: 'json',
      member_id: 1,
      course: 1,
      speed: 120,
      lat: 41.8927521,
      lng: -109.0803888,
      device_type: 'iphone',
      device_guid: '196CF29ED924523E198009CD96DEADA3'
    };

    route4me.Track.set(params, function(err, status) {
      expect(status).to.equal(false);
      done();
    });
  });
});

