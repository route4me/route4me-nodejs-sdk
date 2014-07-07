var _ = require('underscore')
  , uri = '/track/set.php';

module.exports = function(route4me) {
  return {
    set: function(params, callback) {
      var params = _.pick(params, [
        'format', 'member_id', 'route_id', 'tx_id', 'vehicle_id',
        'course', 'speed', 'lat', 'lng', 'altitude', 'device_type',
        'device_guid', 'device_timestamp', 'app_version'
      ]);

      var options = {
        uri: route4me._generateUrl(uri)
      , qs: params
      };

      route4me._makeRequest(options, function(err, data) {
        callback(err, data['status'] || false);
      });
    }
  };
};
