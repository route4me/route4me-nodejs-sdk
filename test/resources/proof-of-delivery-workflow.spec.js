"use strict"

const request = require("superagent")
const saMock  = require("superagent-mocker")(request)

const helper  = require("./../helper")

const route4me = require("./../../dist")

const testApiKey = "11111111111111111111111111111111"


describe(helper.toSuiteName(__filename), () => {
	describe("SDK methods", () => {
		const route4meClient = new route4me.Route4Me(testApiKey)
		const resource = route4meClient.PodWorkflow
		let req

		beforeEach(() => {
			req = null
			saMock.get("*", (r) =>  { req = r; req.method = "GET";    return {} })
			saMock.post("*", (r) => { req = r; req.method = "POST";   return {} })
			saMock.del("*", (r) =>  { req = r; req.method = "DELETE"; return {} })
			saMock.put("*", (r) =>  { req = r; req.method = "PUT";    return {} })
		})

		afterEach(() => {
			saMock.clearRoutes()
		})

		describe("addPodWorkflow", () => {
			const data = {
				workflow_id: "workflow_super_ID", 
				is_enabled: true, 
				is_default: false, 
				title: "Super title",
				done_actions: [{
					"title": "Signee Name",
					"type": "signeeName",
					"required": true
				}]
			}

			it("should call route4me", (done) => {
				resource.addPodWorkflow(data, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest5(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/workflows",
						{},
						data
					)
					done()
				})
			})
		})

		describe("getPodWorkflows", () => {
			const options = {
				search_query: "workflow_super_ID"
			};

			it("getPodWorkflows should call route4me with options", (done) => {
				resource.getPodWorkflows(options, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest5(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/workflows",
						{ search_query: "workflow_super_ID" },
						null
					)
					done()
				})
			})

			it("getPodWorkflows should call route4me without options", (done) => {
				resource.getPodWorkflows((err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest5(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/workflows",
						null,
						null
					)
					done()
				})
			})
		})

		describe("getByGUID", () => {
			const guid = "FD2680AEE4F04EEBA601E489BFEAB43456";

			it("getByGUID should call route4me", (done) => {
				resource.getByGUID(guid, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest5(req,
						"GET",
						route4meClient.baseUrl5() + `/api/v5.0/workflows/${guid}`,
						null,
						null
					)
					done()
				})
			})
		})

		describe("updateByGUID", () => {
			const guid = "FD2680AEE4F04EEBA601E489BFEAB43456";
			const data = {
				workflow_id: "workflow_super_ID", 
				is_enabled: false, 
				is_default: false, 
				title: "Super title",
				done_actions: [{
					"title": "Signee Name",
					"type": "signeeName",
					"required": true
				}]
			}

			it("should call route4me", (done) => {
				resource.updateByGUID(guid, data, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest5(req,
						"PUT",
						route4meClient.baseUrl5() + `/api/v5.0/workflows/${guid}`,
						{},
						data
					)
					done()
				})
			})
		})

		describe("deleteByGUID", () => {
			const guid = "FD2680AEE4F04EEBA601E489BFEAB43456";

			it("should call route4me", (done) => {
				resource.deleteByGUID(guid, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null

					helper.expectRequest5(req,
						"DELETE",
						route4meClient.baseUrl5() + `/api/v5.0/workflows/${guid}`,
						{},
						null
					)

					done()
				})
			})
		})
	})
})
