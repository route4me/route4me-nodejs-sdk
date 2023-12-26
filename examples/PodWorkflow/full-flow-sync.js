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

		// To use the Promise style instead of the Callback style send promise=true as an option.
		const route4me = new Route4Me(apiKey, {	promise: true });

		(async () => {
			let created_pw_guid = undefined;

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

			try {
				// create
				const new_pw = await route4me.PodWorkflow.addPodWorkflow(data);
				expect(new_pw).exist
				console.log(`Create PodWorkflow with GUID=${new_pw.data.workflow_guid}.`);

				created_pw_guid = new_pw.data.workflow_guid;

				// read
				const get_pw = await route4me.PodWorkflow.getByGUID(new_pw.data.workflow_guid);
		
				// update
				data.title = "A new Super title from 15";
				const updated_pw = await route4me.PodWorkflow.updateByGUID(get_pw.data.workflow_guid, data);
				
				//delete
				const res = await route4me.PodWorkflow.deleteByGUID(updated_pw.data.workflow_guid);
				expect(res).exist
				console.log(`PodWorkflow with GUID=${created_pw_guid} was deleted successful.`);
			}
			catch(err) {
				expect(err).exist
				// console.log("Error  ", err);

				if(created_pw_guid) {
					try {
						await route4me.PodWorkflow.deleteByGUID(created_pw_guid);
					}
					catch(err) {
						console.log("Error: cleanup, " + err);
					}
				} 
			}
		})();
		// TODO: remove `done` call from examples
		done()
	})
})
