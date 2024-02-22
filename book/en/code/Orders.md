<a id="Orders" name="Orders"></a>

## Orders ℗

Orders facility

**Category**: Orders  
**Access**: private  
**See**: [https://route4me.io/docs/#orders](https://route4me.io/docs/#orders)  
**Since**: 0.1.11  

* [Orders](#Orders) ℗
    * [new Orders(requestManager)](#new_Orders_new)
    * [.create(data, [callback])](#Orders+create)
    * [.get(id, [callback])](#Orders+get)
    * [.list([ids], [callback])](#Orders+list)
    * [.remove(ids, [callback])](#Orders+remove)
    * [.update(id, data, [callback])](#Orders+update)
    * [.search(criteria, [options], [callback])](#Orders+search)
    * [.createOrderCustomFields(data, [callback])](#Orders+createOrderCustomFields)
    * [.getOrderCustomFields(id, [callback])](#Orders+getOrderCustomFields)
    * [.updateOrderCustomFields([id], data, [callback])](#Orders+updateOrderCustomFields)
    * [.removeOrderCustomFields(id, [callback])](#Orders+removeOrderCustomFields)
    * [.archive([data], [callback])](#Orders+archive)
    * [.history([orderId], [trackingNumber], [callback])](#Orders+history)

<a id="new_Orders_new" name="new_Orders_new"></a>

### new Orders(requestManager)

Constructor

**Returns**: [<code>Orders</code>](#Orders) - - Orders facility  

| Param | Type | Description |
| --- | --- | --- |
| requestManager | <code>RequestManager</code> | Request Manager |

<a id="Orders+create" name="Orders+create"></a>

### orders.create(data, [callback])

Create an Order

**See**: [https://route4me.io/docs/#create-an-order](https://route4me.io/docs/#create-an-order)  
**Since**: 0.1.11  
**Todo**

- [ ] TODO: use custom input format (well formatted)


| Param | Type | Description |
| --- | --- | --- |
| data | <code>jsonschema:Orders.OrderInput</code> | New order |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Orders.Order&gt;</code> |  |

**Example** *(Sample input)*  
```javascript

{
	"address_1": "1358 E Luzerne St, Philadelphia, PA 19124, US",
	"cached_lat"            : 48.335991,
	"cached_lng"            : 31.18287,
	"address_alias"         : "Auto test address",
	"address_city"          : "Philadelphia",
	"EXT_FIELD_first_name"  : "Igor",
	"EXT_FIELD_last_name"   : "Progman",
	"EXT_FIELD_email"       : "progman@gmail.com",
	"EXT_FIELD_phone"       : "380380380380",
	"EXT_FIELD_custom_data" : [
		{
			"order_id" : "10",
			"name"     : "Bill Soul"
		}
	]
}
```
<a id="Orders+get" name="Orders+get"></a>

### orders.get(id, [callback])

Get an Order Details by ID or by UUID

**See**: [https://route4me.io/docs/#get-an-order-details](https://route4me.io/docs/#get-an-order-details)  
**Since**: 1.1.0  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> \| <code>string</code> | Order ID as number or order UUID as HEX-string |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Orders.Order&gt;</code> |  |

<a id="Orders+list" name="Orders+list"></a>

### orders.list([ids], [callback])

Get all the orders created under the specific Route4Me account by IDs or by UUIDs

**See**: [https://route4me.io/docs/#get-orders-with-details](https://route4me.io/docs/#get-orders-with-details)  
**Since**: 1.1.0  

| Param | Type | Description |
| --- | --- | --- |
| [ids] | <code>number</code> \| <code>string</code> \| <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;string&gt;</code> | Order IDs or order UUIDs in one of the following form: * one UUID as HEX-string * UUIDs as CSV-HEX-string * UUIDs as array of HEX-strings * one ID as number * IDs as array of numbers If you want to load all Orders: * **Don't pass** this parameter * **OR** pass `ids=undefined` * **OR** pass `ids=false` |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Orders.Orders&gt;</code> | [callback] |

<a id="Orders+remove" name="Orders+remove"></a>

### orders.remove(ids, [callback])

Remove Orders by ID or by UUID

**See**: [https://route4me.io/docs/#remove-an-order](https://route4me.io/docs/#remove-an-order)  
**Since**: 1.1.0  

| Param | Type | Description |
| --- | --- | --- |
| ids | <code>number</code> \| <code>string</code> \| <code>Array.&lt;number&gt;</code> \| <code>Array.&lt;string&gt;</code> | Order IDs or order UUIDs in one of the following form: * one UUID as HEX-string * UUIDs as CSV-HEX-string * UUIDs as array of HEX-strings * one ID as number * IDs as array of numbers |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="Orders+update" name="Orders+update"></a>

### orders.update(id, data, [callback])

Update an Order by ID or by UUID

**See**: [https://route4me.io/docs/#update-an-order](https://route4me.io/docs/#update-an-order)  
**Since**: 1.1.0  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> \| <code>string</code> | Order ID as number or order UUID as HEX-string |
| data | <code>jsonschema:Orders.Order</code> | Order data |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Orders.Order&gt;</code> |  |

<a id="Orders+search" name="Orders+search"></a>

### orders.search(criteria, [options], [callback])

Search Orders

**See**: [https://route4me.io/docs/#search-orders](https://route4me.io/docs/#search-orders)  
**Since**: 0.1.11  
**Todo**

- [ ] TODO: Parse response
- [ ] TODO: Test timezone for this method [https://github.com/route4me/route4me-nodejs-sdk/issues/42](https://github.com/route4me/route4me-nodejs-sdk/issues/42)
- [ ] TODO: Handle the diffrerent format of the output (when fields are set,
see https://github.com/route4me/route4me-nodejs-sdk/issues/38)


| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>string</code> \| <code>Object</code> | Searched text or searching criteria |
| [criteria.byAddDate] | <code>Date</code> | Date order was inserted |
| [criteria.byScheduledDate] | <code>Date</code> | Date order was scheduled for |
| [criteria.query] | <code>string</code> | The text searched for |
| [options] | <code>Object</code> | List-parameters |
| [options.limit] | <code>number</code> | List limit |
| [options.offset] | <code>number</code> | List offset |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Orders.Orders&gt;</code> |  |

<a id="Orders+createOrderCustomFields" name="Orders+createOrderCustomFields"></a>

### orders.createOrderCustomFields(data, [callback])

Create an OrderCustomFields

**See**: [https://route4me.io/docs/#create-an-order-custom-fields](https://route4me.io/docs/#create-an-order-custom-fields)  
**Since**: 0.1.11  
**Todo**

- [ ] TODO: use custom input format (well formatted)


| Param | Type | Description |
| --- | --- | --- |
| data | <code>jsonschema:Orders.OrderInput</code> | New OrderCustomFields |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Orders.Response&gt;</code> |  |

**Example** *(Sample input)*  
```javascript
Order Type Checkbox
{
			"order_custom_field_name": "CustomField4",
			"order_custom_field_label": "Custom Field 4",
			"order_custom_field_type": "checkbox",
			"order_custom_field_type_info": {
				"short_label": "cFl4"
			}
		}
Order Type Dropdown
{
			"order_custom_field_name": "TEST",
			"order_custom_field_label": "MENU",
			"order_custom_field_type": "dropdown",
			"order_custom_field_short_caption": "MENU",
			"order_custom_field_type_info":
			{
				"short_caption": "MENU",
				"allowed_values":
				[
					"10",
					"20",
					"30",
					"40",
					"50",
					"70",
					"80",
					“100”
				]
			}
		}
```
<a id="Orders+getOrderCustomFields" name="Orders+getOrderCustomFields"></a>

### orders.getOrderCustomFields(id, [callback])

Get an Order Custom Fields Details

**See**: [https://route4me.io/docs/#get-an-order-details](https://route4me.io/docs/#get-an-order-details)  
**Since**: 0.1.11  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Order ID |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Orders.Response&gt;</code> |  |

<a id="Orders+updateOrderCustomFields" name="Orders+updateOrderCustomFields"></a>

### orders.updateOrderCustomFields([id], data, [callback])

Update an OrderCustomFields

**See**: [https://route4me.io/docs/#update-an-order-custom-fields](https://route4me.io/docs/#update-an-order-custom-fields)  
**Since**: 0.1.11  

| Param | Type | Description |
| --- | --- | --- |
| [id] | <code>number</code> | OrderCustomField ID, dummy parameter |
| data | <code>Object</code> | OrderCustomField data |
| data.order_custom_field_id | <code>number</code> | OrderCustomField ID to change |
| [data.order_custom_field_label] | <code>string</code> | new value of label of OrderCustomField |
| [data.order_custom_field_type] | <code>string</code> | new type of OrderCustomField |
| [data.order_custom_field_type_info] | <code>Object</code> | new value of label of OrderCustomField |
| [data.order_custom_field_type.short_label] | <code>string</code> | new value of short label of OrderCustomField |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Orders.Response&gt;</code> |  |

<a id="Orders+removeOrderCustomFields" name="Orders+removeOrderCustomFields"></a>

### orders.removeOrderCustomFields(id, [callback])

Remove an OrderCustomFields

**See**: [https://route4me.io/docs/#remove-user-custom-field](https://route4me.io/docs/#remove-user-custom-field)  
**Since**: 1.0.6  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | OrderCustomField ID |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Orders.Response&gt;</code> |  |

<a id="Orders+archive" name="Orders+archive"></a>

### orders.archive([data], [callback])

Get all the archive orders created under the specific Route4Me account

**See**: [https://route4me.io/docs](https://route4me.io/docs)  
**Since**: 1.0.4  

| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | Archive params |
| [data.cursor] | <code>string</code> | id of next page of orders, empty string on first call |
| [datap.er_page] | <code>number</code> | number of orders per page |
| [data.filters] | <code>Object</code> |  |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Orders.Orders&gt;</code> | [callback] |

<a id="Orders+history" name="Orders+history"></a>

### orders.history([orderId], [trackingNumber], [callback])

Get the orders history created under the specific Route4Me account

**See**: [https://route4me.io/docs](https://route4me.io/docs)  
**Since**: 1.0.4  

| Param | Type | Description |
| --- | --- | --- |
| [orderId] | <code>number</code> | Order ID |
| [trackingNumber] | <code>string</code> | Tracking number |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Orders.Orders&gt;</code> | [callback] |

