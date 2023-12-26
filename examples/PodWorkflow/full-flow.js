"use strict"

const path = require("path")
const chai = require("chai")
const debug = require("debug")("route4me-node:examples")
require("../init-examples-suite")
const helper  = require("../../test/helper")

helper.describeIntegration(helper.toSuiteName(__filename), function T() {
	this.timeout(5000)
	this.slow(3000)
	it(path.basename(__filename), (done) => {
		const expect = chai.expect
		const apiKey   = "11111111111111111111111111111111"
		const route4me = new Route4Me(apiKey)

		function cleanup(err, cleanup_guid) {
			debug("error  ", err)
			expect(err).exist

			if(cleanup_guid) {
				route4me.PodWorkflow.deleteByGUID(cleanup_guid, (err, res) => {
					debug("error  ", err)
					if(err) {
						console.log("Error: cleanup, " + err);
						return;
					}
					console.log(`PodWorkflow with GUID=${updated_pw.data.workflow_guid} was cleaned up successful.`);
				});
			} 
		}

		const data = {
			workflow_id: "workflow_super_ID", 
			is_enabled: false, 
			is_default: false, 
			title: "Super title from 15",
			done_actions: [{
				"title": "Signee Name",
				"type": "signeeName",
				"required": true
			}],
			failed_actions: [{
				"title": "Signee Name Failed",
				"type": "signeeName",
				"required": false
			}]
		};

		// create
		route4me.PodWorkflow.addPodWorkflow(data, (err, new_pw) => {
			debug("error  ", err)
			expect(err).is.null
			expect(res).exist

			if(err) {
				cleanup(err);
				return;
			}
			console.log(`Create PodWorkflow with GUID=${new_pw.data.workflow_guid}.`);

			// read
			route4me.PodWorkflow.getByGUID(new_pw.data.workflow_guid, (err, get_pw) => {	
				if(err) {
					cleanup(err, new_pw.data.workflow_guid);
					return;
				}

				// update
				data.title = "A new Super title from 15";
				route4me.PodWorkflow.updateByGUID(get_pw.data.workflow_guid, data, (err, updated_pw) => {
					if(err) {
						cleanup(err, get_pw.data.workflow_guid);
						return;
					}

					//delete
					route4me.PodWorkflow.deleteByGUID(updated_pw.data.workflow_guid, (err, res) => {
						if(err) {
							cleanup(err);
							return;
						}
						console.log(`PodWorkflow with GUID=${updated_pw.data.workflow_guid} was deleted successful.`);
					});
				});
			});
		});
		// TODO: remove `done` call from examples
		done()
	})
})
