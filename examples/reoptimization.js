var api_key = '11111111111111111111111111111111'
  , route4me = require('..')(api_key)
  , addresses = require('./addresses.json');
  j

var problem_id: 'F2FEA85DA7EFCE180CAD70704816347A';
var params = {
  parameters: { reoptimize: true }
, addresses: addresses
, reoptimize: true
};

route4me.OptimizationProblem.update(problem_id, params, function(err, problem) {
  console.log(err, problem);
});
