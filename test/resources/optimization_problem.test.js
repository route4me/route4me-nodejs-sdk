let expect = require("chai").expect,
	utils = require("../utils"),
	addresses = utils.getAddresses(),
	route4me = utils.route4me;

describe("Optimization API", () => {
	it("should return right methods", (done) => {
		expect(route4me).to.contain.keys("OptimizationProblem");
		expect(route4me.OptimizationProblem).to.contain.keys(
      ["get", "optimize", "update", "reoptimize"]);

		done();
	});

	it("should create simple driver optimization route", (done) => {
		const params = {
			addresses,
			parameters: {
				algorithm_type: 1,
				device_type: "web",
				distance_unit: "mi",
				optimize: "Distance",
				travel_mode: "Driving",
				route_max_duration: 86400,
				vehicle_capacity: 1,
				vehicle_max_distance_mi: 10000,
			},
		};

		route4me.OptimizationProblem.optimize(params, (err, problem) => {
			expect(err).to.be.null;
			expect(problem).to.be.an("object");
			expect(problem.optimization_problem_id).to.be.an("string");
			expect(problem.state).to.equal(4);

			done();
		});
	});

	it("should create simple driver optimization route with round trip", (done) => {
		const params = {
			addresses,
			parameters: {
				algorithm_type: 1,
				device_type: "web",
				distance_unit: "mi",
				optimize: "Distance",
				travel_mode: "Driving",
				route_max_duration: 86400,
				vehicle_capacity: 1,
				vehicle_max_distance_mi: 10000,
				rt: true,
			},
		};

		route4me.OptimizationProblem.optimize(params, (err, problem) => {
			expect(err).to.be.null;
			expect(problem).to.be.an("object");
			expect(problem.optimization_problem_id).to.be.an("string");
			expect(problem.state).to.equal(4);
			expect(problem.parameters.rt).to.equal(true);

			done();
		});
	});

	it("should create multiple driver optimization route", (done) => {
		const params = {
			addresses,
			parameters: {
				algorithm_type: 3,
				device_type: "web",
				distance_unit: "mi",
				optimize: "Distance",
				travel_mode: "Driving",
				route_max_duration: 86400,
				vehicle_capacity: 50,
				vehicle_max_distance_mi: 10000,
				metric: 3,
				preferred_matrix_method: 2,
			},
		};

		route4me.OptimizationProblem.optimize(params, (err, problem) => {
			expect(err).to.be.null;
			expect(problem).to.be.an("object");
			expect(problem.optimization_problem_id).to.be.an("string");
			expect(problem.state).to.equal(4);

			done();
		});
	});

	it("should create optimization without optimization", (done) => {
		const params = {
			addresses,
			parameters: {
				algorithm_type: 1,
				disable_optimization: true,
			},
		};

		route4me.OptimizationProblem.optimize(params, (err, problem) => {
			expect(err).to.be.null;
			expect(problem).to.be.an("object");
			expect(problem.optimization_problem_id).to.be.an("string");
			expect(problem.state).to.equal(4);

			done();
		});
	});

	it("should return route info", (done) => {
		utils.createRoute((err, route) => {
			const problem_id = route.optimization_problem_id;

			route4me.OptimizationProblem.get(problem_id, (err, route) => {
				expect(err).to.be.null;
				expect(route.optimization_problem_id).to.equal(problem_id);
				done();
			});
		});
	});

	it("should return optimizations by state with limit", (done) => {
		const params = { state: 4, limit: 5 };
		route4me.OptimizationProblem.get(params, (err, routes) => {
			expect(err).to.be.null;
			expect(routes).to.have.length(5);
			done();
		});
	});
});
