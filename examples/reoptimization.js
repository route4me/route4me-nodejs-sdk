const Route4Me = require("..");
const addresses = require("./addresses.json");

const api_key = "11111111111111111111111111111111";

const route4me = new Route4Me(api_key);

const problem_id = "F2FEA85DA7EFCE180CAD70704816347A";
const params = {
	parameters: { reoptimize: true },
	addresses,
	reoptimize: true,
};

route4me.OptimizationProblem.update(problem_id, params, (err, problem) => {
	console.log(err, problem);
});
