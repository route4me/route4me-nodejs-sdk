<a id="AutomaticTerritories" name="AutomaticTerritories"></a>

## AutomaticTerritories ℗

AutomaticTerritories facility

**Category**: AutomaticTerritories  
**Access**: private  
**See**: [https://route4me.io/docs/#address-book](https://route4me.io/docs/#address-book)  
**Since**: 1.0.16  

* [AutomaticTerritories](#AutomaticTerritories) ℗
    * [new AutomaticTerritories(requestManager)](#new_AutomaticTerritories_new)
    * [.createJob(addresses, [mode], [params], callback)](#AutomaticTerritories+createJob)
    * [.getJobStatus(jobId, callback)](#AutomaticTerritories+getJobStatus)
    * [.getJobResult(jobId, callback)](#AutomaticTerritories+getJobResult)

<a id="new_AutomaticTerritories_new" name="new_AutomaticTerritories_new"></a>

### new AutomaticTerritories(requestManager)

Constructor

**Returns**: [<code>AutomaticTerritories</code>](#AutomaticTerritories) - - AutomaticTerritories facility  

| Param | Type | Description |
| --- | --- | --- |
| requestManager | <code>RequestManager</code> | Request Manager |

<a id="AutomaticTerritories+createJob" name="AutomaticTerritories+createJob"></a>

### automaticTerritories.createJob(addresses, [mode], [params], callback)

Create job.

**Since**: 1.0.16  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| addresses | <code>Array.&lt;Object&gt;</code> |  | An array of the address objects. |
| addresses.id | <code>String</code> |  | Address ID. |
| addresses.lat | <code>Number</code> |  | Address latitude. |
| addresses.lng | <code>Number</code> |  | Address longitude. |
| [mode] | <code>Number</code> | <code>0</code> |  |
| [params] | <code>Array.&lt;String&gt;</code> | <code>[]</code> | An array of parameters. |
| callback | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AutomaticTerritories.AddressBookSearchResult&gt;</code> |  |  |

<a id="AutomaticTerritories+getJobStatus" name="AutomaticTerritories+getJobStatus"></a>

### automaticTerritories.getJobStatus(jobId, callback)

Check the asynchronous job status by specifying the 'job_id' path parameter.

**Since**: 1.0.16  

| Param | Type | Description |
| --- | --- | --- |
| jobId | <code>String</code> | Job ID to check status. |
| callback | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AutomaticTerritories.AddressBookSearchResult&gt;</code> |  |

<a id="AutomaticTerritories+getJobResult" name="AutomaticTerritories+getJobResult"></a>

### automaticTerritories.getJobResult(jobId, callback)

Get the asynchronous job result by specifying the 'job_id' path parameter.

**Since**: 1.0.16  

| Param | Type | Description |
| --- | --- | --- |
| jobId | <code>String</code> | Job ID to get result. |
| callback | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AutomaticTerritories.AddressBookSearchResult&gt;</code> |  |

