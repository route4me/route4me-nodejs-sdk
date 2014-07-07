var _ = require('underscore')
  , uri = '/api.v4/route.php';

module.exports = function(route4me) {
  return {
    // RouteId, Params, callback
    get: function() {
      var args = [].slice.call(arguments);
      var callback = typeof args[args.length - 1] === 'function' && args.pop();
      var params = args[args.length - 1].toString() === '[object Object]' ? args.pop() : {};
      var route_id = args.pop();

      if ('undefined' !== typeof route_id) {
        params['route_id'] = route_id.toString(',')
      }

      params = _.pick(params, [
        'directions', 'route_path_output', 'original',
        'device_tracking_history', 'limit', 'offset',
        'route_id'
      ]);

      var options = {
        uri: route4me._generateUrl(uri)
      , qs: params
      };

      route4me._makeRequest(options, callback);
    }
  , update: function(route_id, params, callback) {
      var options = {
        uri: route4me._generateUrl(uri)
      , method: 'put'
      , qs: { route_id: route_id }
      , body: _.pick(params, ['addresses', 'parameters'])
      };

      route4me._makeRequest(options, callback);
    }
  , delete: function(route_id, callback) {
      var options = {
        uri: route4me._generateUrl(uri)
      , method: 'delete'
      , qs: { route_id: route_id.toString(',') }
      };

      route4me._makeRequest(options, function(err, data) {
        callback(err, data['deleted'] || false);
      });
    }
  }
};
