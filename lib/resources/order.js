const  _ = require('underscore');
const uri = '/api.v4/order.php';

module.exports = function(route4me) {
  return {
    new: function(body, callback) {
      const options = {
        uri: route4me._generateUrl(uri)
      , method: 'POST'
      , body: body
      , json: true
      };

      route4me._makeRequest(options, callback);
    },

    get: function(params, callback) {
      const allowedKeys = [
        'query', 'limit', 'offset', 'order_id', 'day_added_YYMMDD',
        'scheduled_for_YYMMDD', 'display', 'order_by', 'fields'
      ];

      const options = {
        uri: route4me._generateUrl(uri)
      , qs: _.pick(params, allowedKeys)
      };

      route4me._makeRequest(options, callback);
    },

    update: function(body, callback) {
      if (!body.order_id) {
        return callback(new Error('Order_id is not valid'));
      }

      const options = {
        uri: route4me._generateUrl(uri)
      , method: 'PUT'
      , body: body
      , json: true
      };

      route4me._makeRequest(options, callback);
    },

    delete: function(body, callback) {
      if (!body.order_ids || body.order_ids.length === 0) {
        return callback(new Error('Order_ids is not valid'));
      }

      const options = {
        uri: route4me._generateUrl(uri)
      , method: 'DELETE'
      , body: body
      , json: true
      };

      route4me._makeRequest(options, callback);
    }
  };
};
