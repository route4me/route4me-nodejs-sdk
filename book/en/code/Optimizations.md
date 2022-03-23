<a id="Optimizations" name="Optimizations"></a>

## Optimizations ℗

Optimizations facility

**Category**: Optimizations  
**Access**: private  
**See**: [https://route4me.io/docs/#optimizations](https://route4me.io/docs/#optimizations)  
**Since**: 0.1.3  

* [Optimizations](#Optimizations) ℗
    * [new Optimizations(requestManager)](#new_Optimizations_new)
    * [.create(optimization, isRedirect, [callback])](#Optimizations+create)
    * [.get(id, [callback])](#Optimizations+get)
    * [.list(states, options, [callback])](#Optimizations+list)
    * [.update(id, data, [reoptimize], [callback])](#Optimizations+update)
    * [.remove(ids, [callback])](#Optimizations+remove)
    * [.linkAddress(id, addresses, [reoptimize], [callback])](#Optimizations+linkAddress)
    * [.unlinkAddress(id, addressId, [callback])](#Optimizations+unlinkAddress)

<a id="new_Optimizations_new" name="new_Optimizations_new"></a>

### new Optimizations(requestManager)

Constructor

**Returns**: [<code>Optimizations</code>](#Optimizations) - - Optimizations facility  

| Param | Type | Description |
| --- | --- | --- |
| requestManager | <code>RequestManager</code> | Request Manager |

<a id="Optimizations+create" name="Optimizations+create"></a>

### optimizations.create(optimization, isRedirect, [callback])

Create a new optimization

**See**: [https://route4me.io/docs/#create-an-optimization](https://route4me.io/docs/#create-an-optimization)  

| Param | Type | Description |
| --- | --- | --- |
| optimization | <code>jsonschema:Optimizations.CreateRequest</code> | Parameters for new optimization |
| isRedirect | <code>boolean</code> |  |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Optimizations.Response&gt;</code> |  |

<a id="Optimizations+get" name="Optimizations+get"></a>

### optimizations.get(id, [callback])

GET a single optimization by
[optimization_problem_id](Optimizations#get~id) parameter.

**See**: [https://route4me.io/docs/#get-an-optimization](https://route4me.io/docs/#get-an-optimization)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Optimization Problem ID |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Optimizations.Optimization&gt;</code> |  |

<a id="Optimizations+list" name="Optimizations+list"></a>

### optimizations.list(states, options, [callback])

GET all optimizations belonging to an user.

**See**: [https://route4me.io/docs/#get-optimizations](https://route4me.io/docs/#get-optimizations)  
**Todo**

- [ ] TODO: there is no JSON-schema for the response
- [ ] TODO: convert options to optional parameter


| Param | Type | Description |
| --- | --- | --- |
| states | <code>number</code> \| <code>string</code> \| <code>Array.&lt;string&gt;</code> \| <code>Array.&lt;number&gt;</code> | List of states [1..6] |
| options | <code>Object</code> | List-parameters |
| [options.limit] | <code>number</code> | List limit |
| [options.offset] | <code>number</code> | List offset |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Optimizations.Optimizations&gt;</code> |  |

<a id="Optimizations+update" name="Optimizations+update"></a>

### optimizations.update(id, data, [reoptimize], [callback])

Edit optimization

Re-optimize existing optimizations by changing some parameters or addresses.

**See**: [https://route4me.io/docs/#re-optimize-an-optimization](https://route4me.io/docs/#re-optimize-an-optimization)  
**Since**: 0.1.7  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>string</code> |  | Optimization Problem ID |
| data | <code>jsonschema:Optimizations.CreateRequest</code> |  | New values for `Optimization` |
| [reoptimize] | <code>boolean</code> | <code>false</code> | Determine, whether the `Optimization` should be reoptimized |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Optimizations.Response&gt;</code> |  |  |

<a id="Optimizations+remove" name="Optimizations+remove"></a>

### optimizations.remove(ids, [callback])

Remove an existing optimization belonging to an user.

**See**: [https://route4me.io/docs/#remove-an-optimization](https://route4me.io/docs/#remove-an-optimization)  
**Since**: 0.1.7  
**Todo**

- [ ] TODO: There is no schema for validation an output


| Param | Type | Description |
| --- | --- | --- |
| ids | <code>string</code> | Optimization Problem IDs |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Optimizations.RemoveResponse&gt;</code> |  |

**Example**  
```javascript
const response = {
	"status":true,
	"removed":1
}
```
<a id="Optimizations+linkAddress" name="Optimizations+linkAddress"></a>

### optimizations.linkAddress(id, addresses, [reoptimize], [callback])

Insert an address into an optimization, resulting in the recalculation of optimal routes.

**Tag**: Optimizations  
**Tag**: Addresses  
**See**: [https://route4me.io/docs/#insert-an-address-into-an-optimization](https://route4me.io/docs/#insert-an-address-into-an-optimization)  
**Since**: 0.1.7  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>string</code> |  | Optimization Problem ID |
| addresses | <code>Array.&lt;jsonschema:Addresses.Address&gt;</code> |  | Addresses array |
| [reoptimize] | <code>boolean</code> | <code>false</code> | Determine, whether the `Optimization` should be reoptimized |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Addresses.Addresses&gt;</code> |  |  |

<a id="Optimizations+unlinkAddress" name="Optimizations+unlinkAddress"></a>

### optimizations.unlinkAddress(id, addressId, [callback])

Remove a destination (an address) with specified route_destination_id
from an optimization problem with specified optimization_problem_id.

**Tag**: Optimizations  
**Tag**: Addresses  
**See**: [https://route4me.io/docs/#remove-an-address-from-an-optimization](https://route4me.io/docs/#remove-an-address-from-an-optimization)  
**Since**: 0.1.7  
**Todo**

- [ ] TODO: There is no schema for validation an output


| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Optimization Problem ID |
| addressId | <code>number</code> | Address ID |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Optimizations.UnlinkAddressResponse&gt;</code> |  |

**Example**  
```javascript
const response = {
	"deleted":true,
	"route_destination_id":1
}
```
