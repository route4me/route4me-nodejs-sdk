var _ = require('underscore')
  , uri = '/api.v4/optimization_problem.php';

module.exports = function(route4me) {
  return {
    get: function(problem_id, params, callback) {
      var args = [].slice.call(arguments);
      var callback = typeof args[args.length - 1] === 'function' && args.pop();
      var params = args[args.length - 1].toString() === '[object Object]' ? args.pop() : {};
      var problem_id = args.pop();

      if ('undefined' !== typeof problem_id) {
        params['optimization_problem_id'] = problem_id.toString(',')
      }

      var options = {
        uri: route4me._generateUrl(uri)
      , qs: _.pick(params, [
          'optimization_problem_id', 'state', 'limit', 'offset'
        ])
      };

      route4me._makeRequest(options, function(err, optimization) {
        if (err) {
          return callback(err);
        }

        optimization = optimization['optimizations'] || optimization;
        callback(null, optimization);
      });
    }

  , optimize: function(params, callback) {
      var options = {
        uri: route4me._generateUrl(uri)
      , method: 'POST'
      , body: _.pick(params, ['addresses', 'parameters'])
      , qs: _.pick(params, [
          'directions', 'format', 'route_path_output',
          'optimized_callback_url'
        ])
      };

      route4me._makeRequest(options, callback);
    }

  , update: function(problem_id, params, callback) {
      params['optimization_problem_id'] = problem_id;

      var options = {
        uri: route4me._generateUrl(uri)
      , method: 'PUT'
      , qs: _.pick(params, [
          'directions', 'format', 'route_path_output', 'reoptimize',
          'optimized_callback_url', 'optimization_problem_id'
        ])
      , body: _.pick(params, ['addresses', 'parameters'])
      };

      route4me._makeRequest(options, callback);
    }

  , reoptimize: function(problem_id, callback) {
      this.update(problem_id, { reoptimize: true }, callback);
    }
  };
};
