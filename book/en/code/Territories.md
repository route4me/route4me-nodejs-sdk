<a id="Territories" name="Territories"></a>

## Territories ℗

Territories facility

**Category**: Territories  
**Access**: private  
**See**: [https://route4me.io/docs/#territories](https://route4me.io/docs/#territories)  
**Since**: 0.1.8  

* [Territories](#Territories) ℗
    * [new Territories(requestManager)](#new_Territories_new)
    * [.create(data, [callback])](#Territories+create)
    * [.get(id, [options], [callback])](#Territories+get)
    * [.list([callback])](#Territories+list)
    * [.update(id, data, [callback])](#Territories+update)
    * [.remove(id, [callback])](#Territories+remove)

<a id="new_Territories_new" name="new_Territories_new"></a>

### new Territories(requestManager)

Constructor

**Returns**: [<code>Territories</code>](#Territories) - - Territories facility  

| Param | Type | Description |
| --- | --- | --- |
| requestManager | <code>RequestManager</code> | Request Manager |

<a id="Territories+create" name="Territories+create"></a>

### territories.create(data, [callback])

Create a new Territory.

**See**: [https://route4me.io/docs/#create-a-territory](https://route4me.io/docs/#create-a-territory)  
**Since**: 0.1.8  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>jsonschema:Territories.Territory</code> | Valid Territory data. |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Territories.Territory&gt;</code> |  |

<a id="Territories+get" name="Territories+get"></a>

### territories.get(id, [options], [callback])

Get a specified Territory by ID.

**See**: [https://route4me.io/docs/#get-a-territory](https://route4me.io/docs/#get-a-territory)  
**Since**: 0.1.8  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>string</code> |  | Territory ID |
| [options] | <code>Object</code> |  | Additional options for `get` |
| [options.includeAddresses] | <code>boolean</code> | <code>false</code> | If true, enclosed addresses will be included in a response |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Territories.Territory&gt;</code> |  |  |

<a id="Territories+list" name="Territories+list"></a>

### territories.list([callback])

GET all of the Territories defined by a user.

**See**: [https://route4me.io/docs/#get-multiple-territories](https://route4me.io/docs/#get-multiple-territories)  
**Since**: 0.1.8  
**Todo**

- [ ] TODO: There is no schema for the response, but it is just an array of known schema


| Param | Type |
| --- | --- |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Territories.Territories&gt;</code> | 

<a id="Territories+update" name="Territories+update"></a>

### territories.update(id, data, [callback])

UPDATE a specified Territory.

**See**: [https://route4me.io/docs/#update-a-territory](https://route4me.io/docs/#update-a-territory)  
**Since**: 0.1.8  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Territory ID |
| data | <code>jsonschema:Territories.Territory</code> | Valid Territory data. |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Territories.Territory&gt;</code> |  |

<a id="Territories+remove" name="Territories+remove"></a>

### territories.remove(id, [callback])

DELETE a specified Territory.

**See**: [https://route4me.io/docs/#remove-a-territory](https://route4me.io/docs/#remove-a-territory)  
**Since**: 0.1.8  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Territory ID |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;boolean&gt;</code> |  |

