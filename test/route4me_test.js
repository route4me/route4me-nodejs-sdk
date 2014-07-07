var expect = require('chai').expect
  , Route4me = require('../lib/route4me');

describe('Route4me', function() {
  it("should run without new", function(done) {
    var route4me = Route4me('11111111111111111111111111111111');

    expect(route4me).to.contain.keys(['Track', 'Route', 'OptimizationProblem' , 'api_key', 'url_base']);
    expect(route4me.api_key).to.equal('11111111111111111111111111111111');
    expect(route4me.url_base).to.equal('http://route4me.com');
    done();
  });

  it("should run with new", function(done) {
    var route4me = new Route4me('22222222222222222222222222222222');

    expect(route4me).to.contain.keys(['Track', 'Route', 'OptimizationProblem' , 'api_key', 'url_base']);
    expect(route4me.api_key).to.equal('22222222222222222222222222222222');
    expect(route4me.url_base).to.equal('http://route4me.com');
    done();
  });

  it("should change base_url", function(done) {
    var route4me = new Route4me('22222222222222222222222222222222');

    route4me.setBaseUrl('http://support.route4me.com');
    expect(route4me.url_base).to.equal('http://support.route4me.com');
    done();
  });

  it("should return api_key", function(done){
    var route4me = new Route4me('22222222222222222222222222222222');

    expect(route4me.getApiKey()).to.equal('22222222222222222222222222222222');
    done();
  });

});
