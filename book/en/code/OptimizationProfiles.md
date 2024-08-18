<a id="OptimizationProfiles" name="OptimizationProfiles"></a>

## OptimizationProfiles ℗

Optimization profiles

**Category**: OptimizationProfiles  
**Access**: private  
**See**: [https://route4me.io/docs/#create-an-optimization](https://route4me.io/docs/#create-an-optimization)  
**Since**: 1.2.0  

* [OptimizationProfiles](#OptimizationProfiles) ℗
    * [new OptimizationProfiles(requestManager)](#new_OptimizationProfiles_new)
    * [.list([callback])](#OptimizationProfiles+list)
    * [.save(data, [callback])](#OptimizationProfiles+save)
    * [.remove(data, [callback])](#OptimizationProfiles+remove)

<a id="new_OptimizationProfiles_new" name="new_OptimizationProfiles_new"></a>

### new OptimizationProfiles(requestManager)

Constructor

**Returns**: [<code>OptimizationProfiles</code>](#OptimizationProfiles) - - OptimizationProfiles facility  

| Param | Type | Description |
| --- | --- | --- |
| requestManager | <code>RequestManager</code> | Request Manager |

<a id="OptimizationProfiles+list" name="OptimizationProfiles+list"></a>

### optimizationProfiles.list([callback])

Get list of optimization profiles belong to the Route4Me account

**Since**: 1.2.0  

| Param | Type |
| --- | --- |
| [callback] | <code>OptimizationProfiles.ResponseMany</code> | 

<a id="OptimizationProfiles+save" name="OptimizationProfiles+save"></a>

### optimizationProfiles.save(data, [callback])

Save a OptimizationProfiles.

**Since**: 1.2.0  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | valid save data |
| data.items | <code>Array.&lt;object&gt;</code> | array of objects to save |
| data.items.guid | <code>string</code> | GUID |
| data.items.id | <code>string</code> | ID |
| data.items.parts | <code>Array.&lt;object&gt;</code> | aray of parts |
| data.items.parts.guid | <code>string</code> | GUID |
| data.items.parts.data | <code>object</code> | data |
| [callback] | <code>OptimizationProfiles.ResponseSave</code> |  |

<a id="OptimizationProfiles+remove" name="OptimizationProfiles+remove"></a>

### optimizationProfiles.remove(data, [callback])

Remove a OptimizationProfiles.

**Since**: 1.2.0  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | valid remove data |
| data.items | <code>Array.&lt;object&gt;</code> | array of objects to remove |
| data.items.id | <code>string</code> | ID |
| [callback] | <code>OptimizationProfiles.ResponseRemove</code> |  |

