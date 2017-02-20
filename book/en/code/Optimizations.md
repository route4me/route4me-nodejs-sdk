<a name="Optimizations"></a>

## Optimizations
Optimizations facility

**Kind**: global class  
**Category**: Optimizations  

* [Optimizations](#Optimizations)
    * [new Optimizations(requestManager)](#new_Optimizations_new)
    * [.create(optimization, [callback])](#Optimizations+create)
    * [.get(id, [callback])](#Optimizations+get)
    * [.list(states, options, [callback])](#Optimizations+list)
    * [.remove(id, [callback])](#Optimizations+remove)
    * [.linkAddress(id, addresses, [reoptimize], [callback])](#Optimizations+linkAddress)
    * [.unlinkAddress(id, addressId, [callback])](#Optimizations+unlinkAddress)

<a name="new_Optimizations_new"></a>

### new Optimizations(requestManager)
Constructor


| Param | Type | Description |
| --- | --- | --- |
| requestManager | <code>RequestManager</code> | Request Manager |

<a name="Optimizations+create"></a>

### optimizations.create(optimization, [callback])
Create a new optimization

**Kind**: instance method of <code>[Optimizations](#Optimizations)</code>  
**See**: [https://route4me.io/docs/#create-an-optimization](https://route4me.io/docs/#create-an-optimization)  

| Param | Type | Description |
| --- | --- | --- |
| optimization | <code>jsonschema:Optimizations.CreateRequest</code> | Parameters for new optimization |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Optimizations.Response&gt;</code> |  |

<a name="Optimizations+get"></a>

### optimizations.get(id, [callback])
GET a single optimization by
[optimization_problem_id](Optimizations#get~id) parameter.

**Kind**: instance method of <code>[Optimizations](#Optimizations)</code>  
**See**: [https://route4me.io/docs/#get-an-optimization](https://route4me.io/docs/#get-an-optimization)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Optimization Problem ID |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Optimizations.Optimization&gt;</code> |  |

<a name="Optimizations+list"></a>

### optimizations.list(states, options, [callback])
GET all optimizations belonging to an user.

**Kind**: instance method of <code>[Optimizations](#Optimizations)</code>  
**See**: [https://route4me.io/docs/#get-optimizations](https://route4me.io/docs/#get-optimizations)  
**Todo**

- [ ] TODO: there is no JSON-schema for the response


| Param | Type | Description |
| --- | --- | --- |
| states | <code>number</code> &#124; <code>string</code> &#124; <code>Array.&lt;string&gt;</code> &#124; <code>Array.&lt;number&gt;</code> | List of states [1..6] |
| options | <code>Object</code> | List-parameters |
| [options.limit] | <code>number</code> | List limit |
| [options.offset] | <code>number</code> | List offset |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Optimizations.Optimizations&gt;</code> |  |

<a name="Optimizations+remove"></a>

### optimizations.remove(id, [callback])
Remove an existing optimization belonging to an user.

**Kind**: instance method of <code>[Optimizations](#Optimizations)</code>  
**See**: [https://route4me.io/docs/#remove-an-optimization](https://route4me.io/docs/#remove-an-optimization)  
**Since**: 0.1.7  
**Todo**

- [ ] TODO: There is no schema for validation an output


| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Optimization Problem ID |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Optimizations.RemoveResponse&gt;</code> |  |

**Example**  
```js
const response = {
	"status":true,
	"removed":1
}
```
<a name="Optimizations+linkAddress"></a>

### optimizations.linkAddress(id, addresses, [reoptimize], [callback])
Insert an address into an optimization, resulting in the recalculation of optimal routes.

**Kind**: instance method of <code>[Optimizations](#Optimizations)</code>  
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

<a name="Optimizations+unlinkAddress"></a>

### optimizations.unlinkAddress(id, addressId, [callback])
Remove a destination (an address) with specified route_destination_id
from an optimization problem with specified optimization_problem_id.

**Kind**: instance method of <code>[Optimizations](#Optimizations)</code>  
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
```js
const response = {
	"deleted":true,
	"route_destination_id":1
}
```
**documentation generated on Mon, 20 Feb 2017 21:17:17 GMT**
