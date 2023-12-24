"use strict"

/**
 * PodWorkflow facility
 *
 * @category PodWorkflow
 * @since 1.0.28
 */
class PodWorkflow {
	/**
	 * Constructor
	 *
	 * @see {@link https://route4me.io/docs/#platform-apis}
	 * @private
	 *
	 * @param  {RequestManager} requestManager - Request Manager
	 * @return {PodWorkflow}                   - PodWorkflow facility
	 */
	constructor(requestManager) {
		this.r = requestManager
	}

	/**
	 * Add a new Proof of Delivery Workflow by sending a body payload with
	 * the corresponding parameters.
	 *
	 * @see {@link https://route4me.io/docs/#platform-apis}
	 * @since 1.0.28
	 *
	 * @param {Object}		data						- PodWorkflow properties
	 * @param {String}		data.workflow_id			- PodWorkflow ID.
	 * @param {Number}		[data.root_member_id]		- Member ID.
	 * @param {Boolean}		data.is_enabled				- If true, the PodWorkflow is enabled.
	 * @param {Boolean}		data.is_default				- If true, the PodWorkflow is default.
	 * @param {String}		data.title					- The title of PodWorkflow.
	 * @param {Object[]}	[done_actions]				- Array of done actions.
	 * @param {String}		[done_actions.title]		- Title of action.
	 * @param {String}		[done_actions.type]			- Type of action.
	 * Possible values:	"questionnaire", "signeeName", "singleChoice", "multiplyChoice"
	 *
	 * @param {String}		[done_actions.required]		- If true, the action is required.
	 * @param {Object[]}	[done_actions.options]		- Array of options of the action.
	 *
	 * @param {Object[]}	[failed_actions]				- Array of failed actions.
	 * @param {String}		[failed_actions.title]		- Title of action.
	 * @param {String}		[failed_actions.type]			- Type of action.
	 * Possible values:	"questionnaire", "signeeName", "singleChoice", "multiplyChoice"
	 *
	 * @param {String}		[failed_actions.required]		- If true, the action is required.
	 * @param {Object[]}	[failed_actions.options]	- Array of options of the action.
	 *
	 * @param {module:route4me-node~RequestCallback<jsonschema:
	 * PodWorkflow.PodWorkflowResponse>} [callback]
	 */
	addPodWorkflow(data, callback) {
		return this.r._makeRequest5({
			method: "POST",
			path: "/api/v5.0/workflows",
			body: data,
			validationContext: "PodWorkflow.PodWorkflowResponse",
		}, callback)
	}

	/**
	 * List all PodWorkflows filtered by specifying the corresponding query parameters.
	 *
	 * @see {@link https://route4me.io/docs/#platform-apis}
	 * @since 1.0.28
	 *
	 * @param {Object}		[options]				- List-parameters
	 * @param {Number}		[options.per_page	]	- Number of PodWorkflows per page.
	 * @param {String}		[options.cursor]
	 * @param {String}		[options.search_query]	- Search in the PodWorkflows by the
	 * corresponding query phrase.
	 *
	 * @param {String[]}	[options.order_by]		- Array of pairs PodWorkflow field
	 * and its sorting direction, e.g.:	[["title", "asc"], ["last_updated_timestamp", "desc"]]
	 *
	 * @param {module:route4me-node~RequestCallback<jsonschema:
	 * PodWorkflow.SearchResult>} callback
	 */
	getPodWorkflows(options, callback) {
		let opt = options || {}
		let cb = callback

		if (undefined === cb && "function" === typeof opt) {
			cb = opt
			opt = {}
		}

		return this.r._makeRequest5({
			method: "GET",
			path: "/api/v5.0/workflows",
			qs: opt,
			indices: true,
			validationContext: "PodWorkflow.ResponseAll",
		}, cb)
	}

	/**
	 * Get the PodWorkflow by specifying the GIID.
	 *
	 * @see {@link https://route4me.io/docs/#platform-apis}
	 * @since 1.0.28
	 *
	 * @param {String}	workflowGuid				- PodWorkflow GUID.
	 * @param {module:route4me-node~RequestCallback<jsonschema:
	 * PodWorkflow.PodWorkflowResponse>} [callback]
	 */
	getByGUID(workflowGuid, callback) {
		return this.r._makeRequest5({
			method: "GET",
			path: `/api/v5.0/workflows/${workflowGuid}`,
			validationContext: "PodWorkflow.PodWorkflowResponse",
		}, callback)
	}

	/**
	 * Update the PodWorkflow by specifying the GUID and by sending a body payload
	 * with the corresponding PodWorkflow parameters.
	 *
	 * @see {@link https://route4me.io/docs/#platform-apis}
	 * @since 1.0.28
	 *
	 * @param {String}	workflowGuid			- PodWorkflow GUID.
	 * @param {Object}	data					- PodWorkflow properties, look for more
	 * information in addPodWorkflow
	 *
	 * @param {module:route4me-node~RequestCallback<jsonschema:
	 * PodWorkflow.PodWorkflowResponse>} callback
	 */
	updateByGUID(workflowGuid, data, callback) {
		return this.r._makeRequest5({
			method: "PUT",
			path: `/api/v5.0/workflows/${workflowGuid}`,
			body: data,
			validationContext: "PodWorkflow.PodWorkflowResponse",
		}, callback)
	}

	/**
	 * Delete the PodWorkflow by specifying the GUID.
	 *
	 * @see {@link https://route4me.io/docs/#platform-apis}
	 * @since 1.0.28
	 *
	 * @param {String}	workflowGuid			- PodWorkflow GUID.
	 *
	 * @param {module:route4me-node~RequestCallback<jsonschema:
	 * PodWorkflow.PodWorkflowResponse>} callback
	 */
	deleteByGUID(workflowGuid, callback) {
		return this.r._makeRequest5({
			method: "DELETE",
			path: `/api/v5.0/workflows/${workflowGuid}`,
			validationContext: "PodWorkflow.PodWorkflowResponse",
		}, callback)
	}
}

module.exports = PodWorkflow
