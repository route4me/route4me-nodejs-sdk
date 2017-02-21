<a id="Notes" name="Notes"></a>

## Notes

Notes facility

**Category**: Notes  

* [Notes](#Notes)
    * [new Notes(requestManager)](#new_Notes_new)
    * [.create(data, [callback])](#Notes+create)

<a id="new_Notes_new" name="new_Notes_new"></a>

### new Notes(requestManager)

Constructor


| Param | Type | Description |
| --- | --- | --- |
| requestManager | <code>RequestManager</code> | Request Manager |

<a id="Notes+create" name="Notes+create"></a>

### notes.create(data, [callback])

Add Route Notes

* ADD Notes to a route.
* ADD Notes to a route using file uploading.

**See**

- [https://route4me.io/docs/#add-route-notes](https://route4me.io/docs/#add-route-notes)
- [https://route4me.io/docs/#add-a-note-file](https://route4me.io/docs/#add-a-note-file)

**Since**: 0.1.9  
**Todo**

- [ ] TODO: improve documentation about file attaching
- [ ] TODO: parse response (it is the Note wrapped into an additional object)


| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Note Data |
| data.routeId | <code>string</code> | Route ID |
| data.addressId | <code>number</code> | Address ID |
| data.deviceLatitude | <code>number</code> | Device latitude |
| data.deviceLongitude | <code>number</code> | Device longitude |
| data.deviceType | <code>string</code> | Device type |
| data.note | <code>string</code> | NOTE text |
| data.file | <code>blob</code> | FILE to use as a note |
| data.type | <code>string</code> | FILE/NOTE type. One of `DRIVER_IMG`, `VEHICLE_IMG`, `ADDRESS_IMG`, `CSV_FILE`, `XLS_FILE`, `ANY_FILE` |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Notes.NoteCreateResponse&gt;</code> |  |

