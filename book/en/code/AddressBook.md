<a id="AddressBook" name="AddressBook"></a>

## AddressBook

AddressBook facility

**Category**: AddressBook  

* [AddressBook](#AddressBook)
    * [new AddressBook(requestManager)](#new_AddressBook_new)
    * [.create(data, [callback])](#AddressBook+create)
    * [.getMany(ids, [callback])](#AddressBook+getMany)
    * [.list(options, [callback])](#AddressBook+list)
    * [.search(query, options, [callback])](#AddressBook+search)
    * [.update(id, data, [callback])](#AddressBook+update)
    * [.remove(ids, [callback])](#AddressBook+remove)

<a id="new_AddressBook_new" name="new_AddressBook_new"></a>

### new AddressBook(requestManager)

Constructor


| Param | Type | Description |
| --- | --- | --- |
| requestManager | <code>RequestManager</code> | Request Manager |

<a id="AddressBook+create" name="AddressBook+create"></a>

### addressBook.create(data, [callback])

Create a new AddressBook.

**See**: [https://route4me.io/docs/#create-a-location](https://route4me.io/docs/#create-a-location)  
**Since**: 0.1.8  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>jsonschema:AddressBook.AddressBook</code> | Valid AddressBook data. |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AddressBook.AddressBook&gt;</code> |  |

<a id="AddressBook+getMany" name="AddressBook+getMany"></a>

### addressBook.getMany(ids, [callback])

GET locations from an address book by a specified list of locations IDs.

**See**: [https://route4me.io/docs/#get-locations-by-ids](https://route4me.io/docs/#get-locations-by-ids)  
**Since**: 0.1.8  
**Todo**

- [ ] TODO: Parse response
- [ ] TODO: Remove this method in favor of `list` [https://github.com/route4me/route4me-nodejs-sdk/issues/41](https://github.com/route4me/route4me-nodejs-sdk/issues/41)


| Param | Type | Description |
| --- | --- | --- |
| ids | <code>number</code> &#124; <code>string</code> &#124; <code>Array.&lt;number&gt;</code> &#124; <code>Array.&lt;string&gt;</code> | Address IDs (as number, string, CSV-separated string, or an array of numbers, or an array of strings). |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AddressBook.AddressBookSearchResult&gt;</code> |  |

<a id="AddressBook+list" name="AddressBook+list"></a>

### addressBook.list(options, [callback])

GET all locations from a user’s address book.

**See**: [https://route4me.io/docs/#get-locations](https://route4me.io/docs/#get-locations)  
**Since**: 0.1.8  
**Todo**

- [ ] TODO: Parse response
- [ ] TODO: Describe ALL options (in one place, list+search)


| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | List-parameters |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AddressBook.AddressBookSearchResult&gt;</code> |  |

<a id="AddressBook+search" name="AddressBook+search"></a>

### addressBook.search(query, options, [callback])

Search an address book location by containing specified text in any
field/defined fields.

**See**

- [https://route4me.io/docs/#get-a-location](https://route4me.io/docs/#get-a-location)
- [https://route4me.io/docs/#location-search](https://route4me.io/docs/#location-search)

**Since**: 0.1.8  
**Todo**

- [ ] TODO: Parse response
- [ ] TODO: Describe ALL options (in one place, list+search)
- [ ] TODO: Handle the diffrerent format of the output (when fields are set,
see https://github.com/route4me/route4me-nodejs-sdk/issues/38)


| Param | Type | Description |
| --- | --- | --- |
| query | <code>string</code> | Searched text |
| options | <code>Object</code> | List-parameters |
| [options.limit] | <code>number</code> | List limit |
| [options.offset] | <code>number</code> | List offset |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AddressBook.AddressBookSearchResult&gt;</code> |  |

<a id="AddressBook+update" name="AddressBook+update"></a>

### addressBook.update(id, data, [callback])

UPDATE existing address book location parameters.

**See**: [https://route4me.io/docs/#update-a-location](https://route4me.io/docs/#update-a-location)  
**Since**: 0.1.8  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | AddressBook item ID |
| data | <code>jsonschema:AddressBook.AddressBook</code> | Valid AddressBook data. |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AddressBook.AddressBook&gt;</code> |  |

<a id="AddressBook+remove" name="AddressBook+remove"></a>

### addressBook.remove(ids, [callback])

REMOVE locations from an address book.

**See**: [https://route4me.io/docs/#remove-locations](https://route4me.io/docs/#remove-locations)  
**Since**: 0.1.8  
**Todo**

- [ ] TODO: There is no schema for the response
- [ ] TODO: parse the response


| Param | Type | Description |
| --- | --- | --- |
| ids | <code>number</code> &#124; <code>string</code> &#124; <code>Array.&lt;number&gt;</code> &#124; <code>Array.&lt;string&gt;</code> | locations IDs, CSV-string OR one ID as string OR one ID as number OR array of strings/numbers |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;boolean&gt;</code> |  |

**Example**  
```js
SampleResponse = {"status":true}
```
