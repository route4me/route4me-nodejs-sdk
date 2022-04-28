<a id="AddressBarcodes" name="AddressBarcodes"></a>

## AddressBarcodes ℗

AddressBarcodes facility

**Category**: AddressBarcodes  
**Access**: private  
**See**: [https://route4me.io/docs/#address-barcode](https://route4me.io/docs/#address-barcode)  
**Since**: 1.0.5  

* [AddressBarcodes](#AddressBarcodes) ℗
    * [new AddressBarcodes(requestManager)](#new_AddressBarcodes_new)
    * [.save(data, [callback])](#AddressBarcodes+save)
    * [.get(routeId, routeDestinationId, limit, cursor, [callback])](#AddressBarcodes+get)

<a id="new_AddressBarcodes_new" name="new_AddressBarcodes_new"></a>

### new AddressBarcodes(requestManager)

Constructor

**Returns**: [<code>AddressBarcodes</code>](#AddressBarcodes) - - AddressBarcodes facility  

| Param | Type | Description |
| --- | --- | --- |
| requestManager | <code>RequestManager</code> | Request Manager |

<a id="AddressBarcodes+save" name="AddressBarcodes+save"></a>

### addressBarcodes.save(data, [callback])

Save a AddressBarcodes.

**See**: [https://route4me.io/docs/#save-a-barcode](https://route4me.io/docs/#save-a-barcode)  
**Since**: 1.0.5  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | Valid AddressBarcodes data. |
| data.route_id | <code>string</code> | route ID. |
| data.route_destination_id | <code>number</code> | route destination ID. |
| data.barcodes | <code>array</code> | array of barcode objects. |
| data.barcodes.barcode | <code>string</code> | barcode data. |
| data.barcodes.lat | <code>number</code> | latitude. |
| data.barcodes.lng | <code>number</code> | longitude. |
| data.barcodes.timestamp_date | <code>number</code> | local date. |
| data.barcodes.timestamp_utc | <code>number</code> | UTC date. |
| data.barcodes.scanned_at | <code>string</code> | scan date as string "Y-M-D H:M:S". |
| data.barcodes.scan_type | <code>string</code> | barcode scan type. |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AddressBarcodes.AddressBarcodes&gt;</code> |  |

<a id="AddressBarcodes+get" name="AddressBarcodes+get"></a>

### addressBarcodes.get(routeId, routeDestinationId, limit, cursor, [callback])

Get address barcodes by a specified route ID.

**See**: [https://route4me.io/docs/#get-address-barcodes](https://route4me.io/docs/#get-address-barcodes)  
**Since**: 1.0.5  

| Param | Type | Description |
| --- | --- | --- |
| routeId | <code>string</code> | Route ID |
| routeDestinationId | <code>number</code> | Route destination ID |
| limit | <code>number</code> | Number of barcodes returning by request |
| cursor | <code>string</code> | Cursor ID, on first call must be null |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:AddressBarcodes.AddressBookSearchResult&gt;</code> |  |

