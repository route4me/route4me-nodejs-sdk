"use strict"

const request = require("superagent")
const saMock  = require("superagent-mocker")(request)

const helper  = require("./../helper")

const route4me = require("./../../dist")

const testApiKey = "11111111111111111111111111111111"


describe(helper.toSuiteName(__filename), () => {
	describe("SDK methods", () => {
		const route4meClient = new route4me.Route4Me(testApiKey)
		const resource = route4meClient.Optimizations
		let req

		beforeEach(() => {
			req = null
			// TODO : mock in helper
			saMock.get("*", (r) =>  { req = r; req.method = "GET";    return {} })
			saMock.post("*", (r) => { req = r; req.method = "POST";   return {} })
			saMock.del("*", (r) =>  { req = r; req.method = "DELETE"; return {} })
			saMock.put("*", (r) =>  { req = r; req.method = "PUT";    return {} })
		})

		afterEach(() => {
			saMock.clearRoutes()
		})

		describe("get", () => {
			it("should call route4me", (done) => {
				resource.get(3, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req,
						"GET",
						route4meClient.baseUrl() + "/api.v4/optimization_problem.php",
						{ "optimization_problem_id": "3" },
						null
					)
					done()
				})
			})
		})

		describe("list", () => {
			it("should call route4me", (done) => {
				const options = {
					limit: 100,
					offset: 0
				}

				resource.list([1, 2, 3], options, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req, 
						"GET",
						route4meClient.baseUrl() + "/api.v4/optimization_problem.php",
						{ "states": "1,2,3", "limit": "100", "offset": "0" },
						null
					)
					done()
				})
			})

			it("should return error on invalid states", (done) => {
				const options = {
					limit: 100,
					//offset: 0,
				}

				resource.list(undefined, options, (err, res) => {
					expect(res).to.be.an('undefined')

					expect(err).is.not.null
					expect(err).is.instanceof(Error)
					expect(err).has.property("message")
						.that.matches(/argument/i)
					done()
				})
			})
		})

		describe("create", () => {
			it("should call route4me", (done) => {
				resource.create({ "param": 1 }, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req, 
						"POST",
						route4meClient.baseUrl() + "/api.v4/optimization_problem.php", 
						null, 
						{ "param": 1 }
					)
					//done()
				})
				done()
			})
		})

		describe("update", () => {
			it("should call route4me", (done) => {
				const opt_id = "0613EF353999F43E17B17DD07DDED59E"
				const opt_data = {
					"parameters": [],
				}
				const reoptimize = true

				resource.update(opt_id, opt_data, reoptimize, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req,
						"PUT",
						route4meClient.baseUrl() + "/api.v4/optimization_problem.php",
						{ 
							"optimization_problem_id": "0613EF353999F43E17B17DD07DDED59E",
							"reoptimize": "1",
						}, 
						{ "parameters": [] }
					)
					done()
				})
			})

			it("should call route4me when has 2 params", (done) => {
				const opt_id = "0613EF353999F43E17B17DD07DDED59E"
				const opt_data = {
					"parameters": [],
				}
				const reoptimize = true

				resource.update(opt_id, opt_data, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req,
						"PUT",
						route4meClient.baseUrl() + "/api.v4/optimization_problem.php",
						{
							"optimization_problem_id": "0613EF353999F43E17B17DD07DDED59E",
							"reoptimize": "0",
						},
						{ "parameters": [], }
					)
					done()
				})
			})
		})

		describe("remove", () => {
			it("should call route4me", (done) => {
				resource.remove(["0613EF353999F43E17B17DD07DDED59E"], (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req,
						"DELETE",
						route4meClient.baseUrl() + "/api.v4/optimization_problem.php",
						{ "optimization_problem_ids": "0613EF353999F43E17B17DD07DDED59E" },
						null
					)
					done()
				})
			})
		})

		describe("linkAddress", () => {
			it("should call route4me", (done) => {
				const id = 123
				const addresses = [{ "in-body": true, "route_destination_id": 11 }]
				const reoptimize = false

				resource.linkAddress(id, addresses, reoptimize, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req,
						"PUT",
						route4meClient.baseUrl() + "/api.v4/optimization_problem.php",
						{
							"optimization_problem_id": "123",
							"reoptimize": "0",
						},
						{ "addresses": [{ "route_destination_id": 11, "in-body": true }] }
					)
					done()
				})
			})

			it("should call route4me when has 2 params", (done) => {
				const id = 123
				const addresses = [{ "in-body": true, "route_destination_id": 11 }]
				const reoptimize = false

				resource.linkAddress(id, addresses, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req,
						"PUT",
						route4meClient.baseUrl() + "/api.v4/optimization_problem.php",
						{
							"optimization_problem_id": "123",
							"reoptimize": "0",
						},
						{ "addresses": [{ "route_destination_id": 11, "in-body": true }] }
					)
					done()
				})
			})
		})

		describe("unlinkAddress", () => {
			it("should call route4me", (done) => {
				const opt_id = 987
				const route_id = 543
				resource.unlinkAddress(opt_id, route_id, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req,
						"DELETE",
						route4meClient.baseUrl() + "/api.v4/address.php",
						{
							"optimization_problem_id": "987",
							"route_destination_id": "543",
						},
						null
					)
					done()
				})
			})
		})

		describe("createWithAdvancedConstraints", () => {
			const parameters = {
				algorithm_type: 9,
				rt: true,
				advanced_constraints: [{
						max_capacity: 200,
						tags: ["TAG001", "TAG002"],
					}, {
						max_capacity: 500,
						tags: ["TAG003"],
					}
				]
			};
			
			const addresses = [{ 
					lat: 38.202496,
					lng: -85.786514,
					tags: ["TAG001", "TAG002"]
				}, { 
					lat: 38.176067,
					lng: -85.824638,
					tags: ["TAG003"]
				}
			];

			it("should call createWithAdvancedConstraints without depots", (done) => {

				resource.createWithAdvancedConstraints({ parameters, addresses }, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req, 
						"POST",
						route4meClient.baseUrl() + "/api.v4/optimization_problem.php", 
						{ redirect: '0' }, 
						{
							parameters: {
								algorithm_type: 9,
								rt: true,
								advanced_constraints: [{
										max_capacity: 200,
										tags: ["TAG001", "TAG002"],
									}, {
										max_capacity: 500,
										tags: ["TAG003"],
									}
								]
							},
							addresses: [{ 
									lat: 38.202496,
									lng: -85.786514,
									tags: ["TAG001", "TAG002"]
								}, { 
									lat: 38.176067,
									lng: -85.824638,
									tags: ["TAG003"]
								}
							]
						}
					)
				})
				done()
			})

			it("should call createWithAdvancedConstraints without depots with redirect", (done) => {

				resource.createWithAdvancedConstraints({ parameters, addresses }, true, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req, 
						"POST",
						route4meClient.baseUrl() + "/api.v4/optimization_problem.php", 
						null, 
						{
							parameters: {
								algorithm_type: 9,
								rt: true,
								advanced_constraints: [{
										max_capacity: 200,
										tags: ["TAG001", "TAG002"],
									}, {
										max_capacity: 500,
										tags: ["TAG003"],
									}
								]
							},
							addresses: [{ 
									lat: 38.202496,
									lng: -85.786514,
									tags: ["TAG001", "TAG002"]
								}, { 
									lat: 38.176067,
									lng: -85.824638,
									tags: ["TAG003"]
								}
							]
						}
					)
				})
				done()
			})

			it("should call createWithAdvancedConstraints with depots", (done) => {

				const depots = [{
					address: "1604 PARKRIDGE PKWY, Louisville, KY, 40214",
					is_depot: true,
					lat: 38.141598,
					lng: -85.793846,
					time: 300
				}];
				
				resource.createWithAdvancedConstraints({ parameters, addresses, depots }, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest(req, 
						"POST",
						route4meClient.baseUrl() + "/api.v4/optimization_problem.php", 
						{ redirect: '0' }, 
						{
							parameters: {
								algorithm_type: 9,
								rt: true,
								advanced_constraints: [{
										max_capacity: 200,
										tags: ["TAG001", "TAG002"],
									}, {
										max_capacity: 500,
										tags: ["TAG003"],
									}
								]
							},
							addresses: [{ 
									lat: 38.202496,
									lng: -85.786514,
									tags: ["TAG001", "TAG002"]
								}, { 
									lat: 38.176067,
									lng: -85.824638,
									tags: ["TAG003"]
								}
							],
							depots: [{
								address: "1604 PARKRIDGE PKWY, Louisville, KY, 40214",
								is_depot: true,
								lat: 38.141598,
								lng: -85.793846,
								time: 300
							}]
						}
					)
				})
				done()
			})
		})
	})
})

