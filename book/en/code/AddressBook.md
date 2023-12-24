<a id="AddressBook" name="AddressBook"></a>

## ~~AddressBook ℗~~

***Deprecated***

**Category**: AddressBook  
**Access**: private  
**See**: [AddressBookV5](AddressBookV5.html)

AddressBook facility  
**Since**: 0.1.8  

* ~~[AddressBook](#AddressBook) ℗~~
    * [new AddressBook(requestManager)](#new_AddressBook_new)
    * ~~[.create(data, [callback])](#AddressBook+create)~~
    * ~~[.getMany(ids, [callback])](#AddressBook+getMany)~~
    * ~~[.list(ids, [options], [callback])](#AddressBook+list)~~
    * ~~[.search(query, [options], [callback])](#AddressBook+search)~~
    * ~~[.update(id, data, [callback])](#AddressBook+update)~~
    * ~~[.remove(ids, [callback])](#AddressBook+remove)~~

<a id="new_AddressBook_new" name="new_AddressBook_new"></a>

### new AddressBook(requestManager)

**Returns**: [<code>AddressBook</code>](#AddressBook) - - AddressBook facility  

| Param | Type | Description |
| --- | --- | --- |
| requestManager | <code>RequestManager</code> | Request Manager |

<a id="AddressBook+create" name="AddressBook+create"></a>

### ~~addressBook.create(data, [callback])~~

***Deprecated***

**See**

- [AddressBookV5.addAddress](AddressBookV5.html#AddressBookV5+addAddress)

Create a new AddressBook.
- [https://route4me.io/docs/#create-a-location](https://route4me.io/docs/#create-a-location)

**Since**: 0.1.8  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>jsonschema:AddressBook.AddressBook</code> | Valid AddressBook data. |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AddressBook.AddressBook&gt;</code> |  |

<a id="AddressBook+getMany" name="AddressBook+getMany"></a>

### ~~addressBook.getMany(ids, [callback])~~

***Deprecated***

**See**

- [AddressBookV5.getAddresses](AddressBookV5.html#AddressBookV5+getAddresses)

GET locations from an address book by a specified list of locations IDs.
- [https://route4me.io/docs/#get-locations-by-ids](https://route4me.io/docs/#get-locations-by-ids)

**Since**: 0.1.8  
**Todo**

- [ ] TODO: Parse response
- [ ] TODO: Remove this method in favor of `list` [https://github.com/route4me/route4me-nodejs-sdk/issues/41](https://github.com/route4me/route4me-nodejs-sdk/issues/41)


| Param | Type | Description |
| --- | --- | --- |
| ids | <code>number</code> \| <code>string</code> \| <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;string&gt;</code> | Address IDs (as number, string, CSV-separated string, or an array of numbers, or an array of strings). |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AddressBook.AddressBookSearchResult&gt;</code> |  |

<a id="AddressBook+list" name="AddressBook+list"></a>

### ~~addressBook.list(ids, [options], [callback])~~

***Deprecated***

**See**

- [AddressBookV5.getAddressesPaginated](AddressBookV5.html#AddressBookV5+getAddressesPaginated)

GET all locations from a user’s address book.
- [https://route4me.io/docs/#get-locations](https://route4me.io/docs/#get-locations)

**Since**: 0.1.8  
**Todo**

- [ ] TODO: Parse response


| Param | Type | Description |
| --- | --- | --- |
| ids | <code>String</code> \| <code>Number</code> \| <code>Array.&lt;String&gt;</code> \| <code>Array.&lt;Number&gt;</code> | Order IDs |
| [options] | <code>Object</code> | List-parameters |
| [options.offset] | <code>Number</code> | List offset |
| [options.limit] | <code>Number</code> | List limit |
| [options.fields] | <code>String</code> | String of comma separated fields to return |
| [options.routed] | <code>Boolean</code> | Return routed or unrouted records |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AddressBook.AddressBookSearchResult&gt;</code> |  |

<a id="AddressBook+search" name="AddressBook+search"></a>

### ~~addressBook.search(query, [options], [callback])~~

***Deprecated***

**See**

- [AddressBookV5.getAddresses](AddressBookV5.html#AddressBookV5+getAddresses)

Search an address book location by containing specified text in any
field/defined fields.
- [https://route4me.io/docs/#get-a-location](https://route4me.io/docs/#get-a-location)
- [https://route4me.io/docs/#location-search](https://route4me.io/docs/#location-search)

**Since**: 0.1.8  
**Todo**

- [ ] TODO: Parse response
- [ ] TODO: Handle the diffrerent format of the output (when fields are set,
see https://github.com/route4me/route4me-nodejs-sdk/issues/38)


| Param | Type | Description |
| --- | --- | --- |
| query | <code>string</code> | Searched text |
| [options] | <code>Object</code> | List-parameters |
| [options.offset] | <code>Number</code> | List offset |
| [options.limit] | <code>Number</code> | List limit |
| [options.fields] | <code>String</code> | String of comma separated fields to return |
| [options.routed] | <code>Boolean</code> | Return routed or unrouted records |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AddressBook.AddressBookSearchResult&gt;</code> |  |

<a id="AddressBook+update" name="AddressBook+update"></a>

### ~~addressBook.update(id, data, [callback])~~

***Deprecated***

**See**

- [AddressBookV5.updateAddressById](AddressBookV5.html#AddressBookV5+updateAddressById)

UPDATE existing address book location parameters.
- [https://route4me.io/docs/#update-a-location](https://route4me.io/docs/#update-a-location)

**Since**: 0.1.8  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | AddressBook item ID |
| data | <code>jsonschema:AddressBook.AddressBook</code> | Valid AddressBook data. |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AddressBook.AddressBook&gt;</code> |  |

<a id="AddressBook+remove" name="AddressBook+remove"></a>

### ~~addressBook.remove(ids, [callback])~~

***Deprecated***

**See**

- [AddressBookV5.deleteAddressesByIds](AddressBookV5.html#AddressBookV5+deleteAddressesByIds)

REMOVE locations from an address book.
- [https://route4me.io/docs/#remove-locations](https://route4me.io/docs/#remove-locations)

**Since**: 0.1.8  
**Todo**

- [ ] TODO: There is no schema for the response
- [ ] TODO: parse the response


| Param | Type | Description |
| --- | --- | --- |
| ids | <code>number</code> \| <code>string</code> \| <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;string&gt;</code> | locations IDs, CSV-string OR one ID as string OR one ID as number OR array of strings/numbers |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;boolean&gt;</code> |  |

**Example**  
```javascript
SampleResponse = {"status":true}
```
