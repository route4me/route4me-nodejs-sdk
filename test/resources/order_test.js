var expect = require('chai').expect
  , utils = require('../utils')
  , route4me = utils.route4me;

const Order = route4me.Order;

route4me.setBaseUrl('http://igor.route4me.com');

var order_id = null;
var day_added_YYMMDD = null;
var scheduled_for_YYMMDD = '2016-06-16';

describe('Order API', function() {
  it("Check methods", function(done) {
    expect(route4me).to.contain.keys('Order');
    expect(Order).to.contain.keys(['get', 'new', 'update', 'delete']);
    done();
  });

  it("Create new order", function(done) {
    var params = {
      'address_1': "106 Fulton St, Farmingdale, NY 11735, USA",
      'cached_lat': 40.730730,
      'cached_lng': -73.459283,
      'address_alias': 'BK Restaurant #: 17871 (test)',
      'EXT_FIELD_phone': '(212) 566-5132',
      'day_scheduled_for_YYMMDD': scheduled_for_YYMMDD
    };

    Order.new(params, function(err, json) {
      expect(err).to.be.null;
      expect(json).to.contain.keys([
        'order_id', 'address_1', 'address_alias', 'day_added_YYMMDD', 'day_scheduled_for_YYMMDD', 'cached_lat', 'cached_lng']);
      expect(json.order_id).to.not.be.empty;
      expect(json.cached_lat).to.be.equal(40.730730);
      expect(json.cached_lng).to.be.equal(-73.459283);
      expect(json.address_1).to.be.equal('106 Fulton St, Farmingdale, NY 11735, USA');
      expect(json.address_alias).to.be.equal('BK Restaurant #: 17871 (test)');
      expect(json.EXT_FIELD_phone).to.be.equal('(212) 566-5132');
      expect(json.day_scheduled_for_YYMMDD).to.be.equal(scheduled_for_YYMMDD);
      expect(json.is_pending).to.be.true;
      expect(json.is_started).to.be.false;
      expect(json.is_accepted).to.be.false;
      expect(json.is_completed).to.be.false;

      order_id = json.order_id;
      day_added_YYMMDD = json.day_added_YYMMDD;
      done();
    })
  });

  // it("Create new orders", function(done) {
  //   var params = [
  //     {
  //       'address_1': "106 Fulton St, Farmingdale, NY 11735, USA",
  //       'cached_lat': 40.730730,
  //       'cached_lng': -73.459283,
  //       'address_alias': 'BK Restaurant #: 17871 (test)',
  //       'EXT_FIELD_phone': '(212) 566-5132',
  //       'day_scheduled_for_YYMMDD': scheduled_for_YYMMDD
  //     },
  //     {
  //       'address_1': '325 Broadway, New York, NY 10007, USA',
  //       'cached_lat': 40.716150,
  //       'cached_lng': -74.005050,
  //       'address_alias': 'BK Restaurant #: 20333 (test)',
  //       'day_scheduled_for_YYMMDD': scheduled_for_YYMMDD
  //     },
  //   ];

  //   Order.new(params, function(err, json) {
  //     expect(err).to.be.null;

  //     var first_order = json.results[0];
  //     expect(json).to.contain.keys([
  //       'order_id', 'address_1', 'address_alias', 'day_added_YYMMDD', 'day_scheduled_for_YYMMDD', 'cached_lat', 'cached_lng']);
  //     expect(first_order.order_id).to.not.be.empty;
  //     expect(first_order.cached_lat).to.be.equal(40.730730);
  //     expect(first_order.cached_lng).to.be.equal(-73.459283);
  //     expect(first_order.address_1).to.be.equal('106 Fulton St, Farmingdale, NY 11735, USA');
  //     expect(first_order.address_alias).to.be.equal('BK Restaurant #: 17871 (test)');
  //     expect(first_order.EXT_FIELD_phone).to.be.equal('(212) 566-5132');
  //     expect(first_order.day_scheduled_for_YYMMDD).to.be.equal(scheduled_for_YYMMDD);
  //     expect(first_order.is_pending).to.be.true;
  //     expect(first_order.is_started).to.be.false;
  //     expect(first_order.is_accepted).to.be.false;
  //     expect(first_order.is_completed).to.be.false;

  //     var second_order = json.results[1];
  //     expect(json).to.contain.keys([
  //       'order_id', 'address_1', 'address_alias', 'day_added_YYMMDD', 'day_scheduled_for_YYMMDD', 'cached_lat', 'cached_lng']);
  //     expect(first_order.order_id).to.not.be.empty;
  //     expect(first_order.cached_lat).to.be.equal(40.716150);
  //     expect(first_order.cached_lng).to.be.equal(-74.005050);
  //     expect(first_order.address_1).to.be.equal('325 Broadway, New York, NY 10007, USA');
  //     expect(first_order.address_alias).to.be.equal('BK Restaurant #: 20333 (test)');
  //     expect(first_order.day_scheduled_for_YYMMDD).to.be.equal(scheduled_for_YYMMDD);
  //     expect(first_order.is_pending).to.be.true;
  //     expect(first_order.is_started).to.be.false;
  //     expect(first_order.is_accepted).to.be.false;
  //     expect(first_order.is_completed).to.be.false;

  //     done();
  //   })
  // });

  it("All orders", function(done) {
    Order.get({}, function(err, json) {
      expect(err).to.be.null;
      expect(json.results).to.be.instanceof(Array);
      expect(json.results).to.have.length.above(0);
      expect(json.total).to.be.above(0);
      order_id = json.results[0].order_id;
      scheduled_for_YYMMDD = json.results[0].scheduled_for_YYMMDD;
      day_added_YYMMDD = json.results[0].day_added_YYMMDD;

      done();
    });
  });

  it("Orders by query", function(done) {
    var params = { query: 'Farmingdale' };

    Order.get(params, function(err, json) {
      expect(err).to.be.null;
      expect(json.results).to.be.instanceof(Array);
      expect(json.results).to.have.length.above(0);
      expect(json.total).to.be.above(0);
      done();
    });
  });

  it("Order by id", function(done) {
    var params = { order_id: order_id };

    Order.get(params, function(err, json) {
      expect(err).to.be.null;
      expect(json).to.be.instanceof(Object);
      expect(json.order_id).to.be.equal(order_id)
      done();
    });
  });

  it("Order by scheduled_for_YYMMDD", function(done) {
    var params = { scheduled_for_YYMMDD: scheduled_for_YYMMDD };

    Order.get(params, function(err, json) {
      expect(err).to.be.null;
      expect(json.results).to.be.instanceof(Array);
      expect(json.results).to.have.length.above(0);
      expect(json.total).to.be.above(0);

      for (var i = 0; i < json.total; i++) {
        expect(json.results[i].scheduled_for_YYMMDD).to.be.equal(scheduled_for_YYMMDD)
      }

      done();
    });
  });

  it("Order by day_added_YYMMDD", function(done) {
    var params = { day_added_YYMMDD: day_added_YYMMDD };

    Order.get(params, function(err, json) {
      expect(err).to.be.null;
      expect(json.results).to.be.instanceof(Array);
      expect(json.results).to.have.length.above(0);
      expect(json.total).to.be.above(0);

      for (var i = 0; i < json.total; i++) {
        expect(json.results[i].day_added_YYMMDD).to.be.equal(day_added_YYMMDD)
      }

      done();
    });
  });

  it("Update order statuses", function(done) {
    var params = {
      order_id: order_id,
      is_accepted: true,
      is_started: true,
      is_completed: true
    };

    Order.update(params, function(err, json) {
      expect(err).to.be.null;
      expect(json.is_pending).to.be.true;
      expect(json.is_started).to.be.true;
      expect(json.is_accepted).to.be.true;
      expect(json.is_completed).to.be.true;

      done();
    })
  });

  it("Delete order", function(done) {
    var params = { order_ids: [order_id] };

    Order.delete(params, function(err, json) {
      expect(err).to.be.null;
      expect(json.status).to.be.true;

      var params = {order_id: order_id};
      Order.get(params, function(err) {
        expect(err).to.be.not.null;
        expect(err).to.be.instanceof(Error);
        expect(err.message).to.be.equal('Address not found');
        done();
      });
    })
  });
});
