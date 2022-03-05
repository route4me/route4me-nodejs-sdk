<a id="Addresses" name="Addresses"></a>

## Addresses ℗

Addresses facility

**Category**: Addresses  
**Access**: private  
**See**: [https://route4me.io/docs/#addresses](https://route4me.io/docs/#addresses)  
**Since**: 0.1.8  

* [Addresses](#Addresses) ℗
    * [new Addresses(requestManager)](#new_Addresses_new)
    * [.get(id, routeId, [options], [callback])](#Addresses+get)
    * [.updateCustomData(id, routeId, customFields, [callback])](#Addresses+updateCustomData)
    * [.markDetectedDeparted(id, routeId, value, [callback])](#Addresses+markDetectedDeparted)
    * [.markDetectedVisited(id, routeId, value, [callback])](#Addresses+markDetectedVisited)
    * [.markVisited(id, routeId, memberId, value, [callback])](#Addresses+markVisited)
    * [.markDeparted(id, routeId, memberId, value, [callback])](#Addresses+markDeparted)

<a id="new_Addresses_new" name="new_Addresses_new"></a>

### new Addresses(requestManager)

Constructor

**Returns**: [<code>Addresses</code>](#Addresses) - - Addresses facility  

| Param | Type | Description |
| --- | --- | --- |
| requestManager | <code>RequestManager</code> | Request Manager |

<a id="Addresses+get" name="Addresses+get"></a>

### addresses.get(id, routeId, [options], [callback])

Get an Address from a Route

Get an address with specified `addressId` from a route with specified `routeId`.

**Tag**: Addresses  
**Tag**: Notes  
**See**

- [https://route4me.io/docs/#get-an-address-from-a-route](https://route4me.io/docs/#get-an-address-from-a-route)
- [https://route4me.io/docs/#get-notes](https://route4me.io/docs/#get-notes)

**Since**: 0.1.9  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>number</code> |  | Address ID |
| routeId | <code>string</code> |  | Route ID |
| [options] | <code>Object</code> |  | Additional options for `get` |
| [options.includeNotes] | <code>boolean</code> | <code>false</code> | Aquire address' notes |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Addresses.Address&gt;</code> |  |  |

<a id="Addresses+updateCustomData" name="Addresses+updateCustomData"></a>

### addresses.updateCustomData(id, routeId, customFields, [callback])

Update custom data of the address (as a route destination).

**Tag**: Routes  
**Tag**: Addresses  
**See**: [https://route4me.io/docs/#update-a-route](https://route4me.io/docs/#update-a-route)  
**Since**: 0.1.8  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Address ID |
| routeId | <code>string</code> | Route ID |
| customFields | <code>Object.&lt;string, string&gt;</code> | Any string dictionary |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Addresses.Address&gt;</code> |  |

<a id="Addresses+markDetectedDeparted" name="Addresses+markDetectedDeparted"></a>

### addresses.markDetectedDeparted(id, routeId, value, [callback])

Mark as Detected as Departed

The example refers to the process of marking an address as Detected as Departed.

This method affects:
* ++ **`is_departed`**
* ++ **`timestamp_last_departed`**

**See**: [https://route4me.io/docs/#mark-as-detected-as-departed](https://route4me.io/docs/#mark-as-detected-as-departed)  
**Since**: 0.1.9  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Address ID |
| routeId | <code>string</code> | Route ID |
| value | <code>boolean</code> | Actual value |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;Addresses.Address&gt;</code> |  |

<a id="Addresses+markDetectedVisited" name="Addresses+markDetectedVisited"></a>

### addresses.markDetectedVisited(id, routeId, value, [callback])

Mark as Detected as Visited

The example refers to the process of marking an address as Detected as Visited.

This method affects:
* ++ **`is_visited`**
* ++ **`timestamp_last_visited`**

**See**: [https://route4me.io/docs/#mark-as-detected-as-visited](https://route4me.io/docs/#mark-as-detected-as-visited)  
**Since**: 0.1.9  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Address ID |
| routeId | <code>string</code> | Route ID |
| value | <code>boolean</code> | Actual value |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;Addresses.Address&gt;</code> |  |

<a id="Addresses+markVisited" name="Addresses+markVisited"></a>

### addresses.markVisited(id, routeId, memberId, value, [callback])

Mark an address of a route as visited.

This method affects:
* ++ **`timestamp_last_visited`**
* -- `is_visited`

**See**: [https://route4me.io/docs/#mark-as-visited](https://route4me.io/docs/#mark-as-visited)  
**Since**: 0.1.9  
**Todo**

- [ ] HACK: method-conflict. API suggest to use "GET", SDK uses "PUT"


| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Address ID |
| routeId | <code>string</code> | Route ID |
| memberId | <code>number</code> | Member ID |
| value | <code>boolean</code> | Actual value |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;bool&gt;</code> |  |

<a id="Addresses+markDeparted" name="Addresses+markDeparted"></a>

### addresses.markDeparted(id, routeId, memberId, value, [callback])

Mark an address of a route as departed.

This method affects:
* ++ **`timestamp_last_departed`**
* -- `is_departed`

**See**: [https://route4me.io/docs/#mark-as-departed](https://route4me.io/docs/#mark-as-departed)  
**Since**: 0.1.9  
**Todo**

- [ ] HACK: method-conflict. API suggest to use "GET", SDK uses "PUT"


| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Address ID |
| routeId | <code>string</code> | Route ID |
| memberId | <code>number</code> | Member ID |
| value | <code>boolean</code> | Actual value |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;bool&gt;</code> |  |

