<a id="PodWorkflow" name="PodWorkflow"></a>

## PodWorkflow ℗

PodWorkflow facility

**Category**: PodWorkflow  
**Access**: private  
**See**: [https://route4me.io/docs/#platform-apis](https://route4me.io/docs/#platform-apis)  
**Since**: 1.0.28  

* [PodWorkflow](#PodWorkflow) ℗
    * [new PodWorkflow(requestManager)](#new_PodWorkflow_new)
    * [.addPodWorkflow(data, [done_actions], [failed_actions], [callback])](#PodWorkflow+addPodWorkflow)
    * [.getPodWorkflows([options], callback)](#PodWorkflow+getPodWorkflows)
    * [.getByGUID(workflowGuid, [callback])](#PodWorkflow+getByGUID)
    * [.updateByGUID(workflowGuid, data, callback)](#PodWorkflow+updateByGUID)
    * [.deleteByGUID(workflowGuid, callback)](#PodWorkflow+deleteByGUID)

<a id="new_PodWorkflow_new" name="new_PodWorkflow_new"></a>

### new PodWorkflow(requestManager)

Constructor

**Returns**: [<code>PodWorkflow</code>](#PodWorkflow) - - PodWorkflow facility  

| Param | Type | Description |
| --- | --- | --- |
| requestManager | <code>RequestManager</code> | Request Manager |

<a id="PodWorkflow+addPodWorkflow" name="PodWorkflow+addPodWorkflow"></a>

### podWorkflow.addPodWorkflow(data, [done_actions], [failed_actions], [callback])

Add a new Proof of Delivery Workflow by sending a body payload with
the corresponding parameters.

**See**: [https://route4me.io/docs/#platform-apis](https://route4me.io/docs/#platform-apis)  
**Since**: 1.0.28  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | PodWorkflow properties |
| data.workflow_id | <code>String</code> | PodWorkflow ID. |
| [data.root_member_id] | <code>Number</code> | Member ID. |
| data.is_enabled | <code>Boolean</code> | If true, the PodWorkflow is enabled. |
| data.is_default | <code>Boolean</code> | If true, the PodWorkflow is default. |
| data.title | <code>String</code> | The title of PodWorkflow. |
| [done_actions] | <code>Array.&lt;Object&gt;</code> | Array of done actions. |
| [done_actions.title] | <code>String</code> | Title of action. |
| [done_actions.type] | <code>String</code> | Type of action. Possible values:	"questionnaire", "signeeName", "singleChoice", "multiplyChoice" |
| [done_actions.required] | <code>String</code> | If true, the action is required. |
| [done_actions.options] | <code>Array.&lt;Object&gt;</code> | Array of options of the action. |
| [failed_actions] | <code>Array.&lt;Object&gt;</code> | Array of failed actions. |
| [failed_actions.title] | <code>String</code> | Title of action. |
| [failed_actions.type] | <code>String</code> | Type of action. Possible values:	"questionnaire", "signeeName", "singleChoice", "multiplyChoice" |
| [failed_actions.required] | <code>String</code> | If true, the action is required. |
| [failed_actions.options] | <code>Array.&lt;Object&gt;</code> | Array of options of the action. |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:PodWorkflow.PodWorkflowResponse&gt;</code> |  |

<a id="PodWorkflow+getPodWorkflows" name="PodWorkflow+getPodWorkflows"></a>

### podWorkflow.getPodWorkflows([options], callback)

List all PodWorkflows filtered by specifying the corresponding query parameters.

**See**: [https://route4me.io/docs/#platform-apis](https://route4me.io/docs/#platform-apis)  
**Since**: 1.0.28  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | List-parameters |
| [options.per_page] | <code>Number</code> | Number of PodWorkflows per page. |
| [options.cursor] | <code>String</code> |  |
| [options.search_query] | <code>String</code> | Search in the PodWorkflows by the corresponding query phrase. |
| [options.order_by] | <code>Array.&lt;String&gt;</code> | Array of pairs PodWorkflow field and its sorting direction, e.g.:	[["title", "asc"], ["last_updated_timestamp", "desc"]] |
| callback | <code>module:route4me-node~RequestCallback.&lt;jsonschema:PodWorkflow.SearchResult&gt;</code> |  |

<a id="PodWorkflow+getByGUID" name="PodWorkflow+getByGUID"></a>

### podWorkflow.getByGUID(workflowGuid, [callback])

Get the PodWorkflow by specifying the GIID.

**See**: [https://route4me.io/docs/#platform-apis](https://route4me.io/docs/#platform-apis)  
**Since**: 1.0.28  

| Param | Type | Description |
| --- | --- | --- |
| workflowGuid | <code>String</code> | PodWorkflow GUID. |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:PodWorkflow.PodWorkflowResponse&gt;</code> |  |

<a id="PodWorkflow+updateByGUID" name="PodWorkflow+updateByGUID"></a>

### podWorkflow.updateByGUID(workflowGuid, data, callback)

Update the PodWorkflow by specifying the GUID and by sending a body payload
with the corresponding PodWorkflow parameters.

**See**: [https://route4me.io/docs/#platform-apis](https://route4me.io/docs/#platform-apis)  
**Since**: 1.0.28  

| Param | Type | Description |
| --- | --- | --- |
| workflowGuid | <code>String</code> | PodWorkflow GUID. |
| data | <code>Object</code> | PodWorkflow properties, look for more information in addPodWorkflow |
| callback | <code>module:route4me-node~RequestCallback.&lt;jsonschema:PodWorkflow.PodWorkflowResponse&gt;</code> |  |

<a id="PodWorkflow+deleteByGUID" name="PodWorkflow+deleteByGUID"></a>

### podWorkflow.deleteByGUID(workflowGuid, callback)

Delete the PodWorkflow by specifying the GUID.

**See**: [https://route4me.io/docs/#platform-apis](https://route4me.io/docs/#platform-apis)  
**Since**: 1.0.28  

| Param | Type | Description |
| --- | --- | --- |
| workflowGuid | <code>String</code> | PodWorkflow GUID. |
| callback | <code>module:route4me-node~RequestCallback.&lt;jsonschema:PodWorkflow.PodWorkflowResponse&gt;</code> |  |

