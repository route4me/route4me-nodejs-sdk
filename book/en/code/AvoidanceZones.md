<a id="AvoidanceZones" name="AvoidanceZones"></a>

## AvoidanceZones : <code>object</code>

AvoidanceZones facility

**Category**: AvoidanceZones  

| Param | Type | Description |
| --- | --- | --- |
| requestManager | <code>RequestManager</code> | Request Manager |


* [AvoidanceZones](#AvoidanceZones) : <code>object</code>
    * [.create(data, [callback])](#AvoidanceZones+create)
    * [.get(id, [callback])](#AvoidanceZones+get)
    * [.list([callback])](#AvoidanceZones+list)
    * [.update(id, data, [callback])](#AvoidanceZones+update)
    * [.remove(id, [callback])](#AvoidanceZones+remove)

<a id="AvoidanceZones+create" name="AvoidanceZones+create"></a>

### avoidanceZones.create(data, [callback])

Create an Avoidance Zone.

**See**: [https://route4me.io/docs/#duplicate-a-route](https://route4me.io/docs/#duplicate-a-route)  
**Since**: 0.1.8  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>jsonschema:AvoidanceZones.AvoidanceZone</code> | Valid Avoidance Zone data. |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AvoidanceZones.AvoidanceZone&gt;</code> |  |

<a id="AvoidanceZones+get" name="AvoidanceZones+get"></a>

### avoidanceZones.get(id, [callback])

GET a specified Avoidance Zone by ID.

**See**: [https://route4me.io/docs/#get-an-avoidance-zone](https://route4me.io/docs/#get-an-avoidance-zone)  
**Since**: 0.1.8  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Avoidance zone ID |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AvoidanceZones.AvoidanceZone&gt;</code> |  |

<a id="AvoidanceZones+list" name="AvoidanceZones+list"></a>

### avoidanceZones.list([callback])

GET all of the Avoidance Zones defined by a user.

**See**: [https://route4me.io/docs/#get-multiple-avoidance-zones](https://route4me.io/docs/#get-multiple-avoidance-zones)  
**Since**: 0.1.8  
**Todo**

- [ ] TODO: There is no schema for the response, but it is just an array of known schema


| Param | Type |
| --- | --- |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AvoidanceZones.AvoidanceZones&gt;</code> | 

<a id="AvoidanceZones+update" name="AvoidanceZones+update"></a>

### avoidanceZones.update(id, data, [callback])

UPDATE a specified Avoidance Zone.

**See**: [https://route4me.io/docs/#update-an-avoidance-zone](https://route4me.io/docs/#update-an-avoidance-zone)  
**Since**: 0.1.8  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Avoidance zone ID |
| data | <code>jsonschema:AvoidanceZones.AvoidanceZone</code> | Valid Avoidance Zone data. |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AvoidanceZones.AvoidanceZone&gt;</code> |  |

<a id="AvoidanceZones+remove" name="AvoidanceZones+remove"></a>

### avoidanceZones.remove(id, [callback])

DELETE a specified Avoidance Zone.

**See**: [https://route4me.io/docs/#remove-an-avoidance-zone](https://route4me.io/docs/#remove-an-avoidance-zone)  
**Since**: 0.1.8  
**Todo**

- [ ] TODO: There is no schema for the response
- [ ] TODO: parse the response


| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Avoidance zone ID |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AvoidanceZones.RemoveResponse&gt;</code> |  |

**Example**  
```js
SampleResponse = {"status":true}
```
