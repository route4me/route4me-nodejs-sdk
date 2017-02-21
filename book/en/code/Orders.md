<a id="Orders" name="Orders"></a>

## Orders

Orders facility

**Category**: Orders  

* [Orders](#Orders)
    * [new Orders(requestManager)](#new_Orders_new)
    * [.create(data, [callback])](#Orders+create)
    * [.get(id, [callback])](#Orders+get)
    * [.list([ids], [callback])](#Orders+list)
    * [.remove(ids, [callback])](#Orders+remove)
    * [.update(id, data, [callback])](#Orders+update)
    * [.search(criteria, [options], [callback])](#Orders+search)

<a id="new_Orders_new" name="new_Orders_new"></a>

### new Orders(requestManager)

Constructor


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

Get an Order Details

**See**: [https://route4me.io/docs/#get-an-order-details](https://route4me.io/docs/#get-an-order-details)  
**Since**: 0.1.11  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Order ID |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Orders.Order&gt;</code> |  |

<a id="Orders+list" name="Orders+list"></a>

### orders.list([ids], [callback])

Get all the orders created under the specific Route4Me account

**See**: [https://route4me.io/docs/#get-orders-with-details](https://route4me.io/docs/#get-orders-with-details)  
**Since**: 0.1.11  

| Param | Type | Description |
| --- | --- | --- |
| [ids] | <code>number</code> &#124; <code>string</code> &#124; <code>Array.&lt;number&gt;</code> &#124; <code>Array.&lt;string&gt;</code> | Order IDs in one of the following form: * CSV-string * one ID as string * one ID as number * array of strings * array of numbers If you want to load all Orders: * **Don't pass** this parameter * **OR** pass `ids=undefined` * **OR** pass `ids=false` |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Orders.Orders&gt;</code> | [callback] |

<a id="Orders+remove" name="Orders+remove"></a>

### orders.remove(ids, [callback])

Remove an Order

**See**: [https://route4me.io/docs/#remove-an-order](https://route4me.io/docs/#remove-an-order)  
**Since**: 0.1.11  

| Param | Type | Description |
| --- | --- | --- |
| ids | <code>number</code> &#124; <code>string</code> &#124; <code>Array.&lt;number&gt;</code> &#124; <code>Array.&lt;string&gt;</code> | Order ID/IDs to remove in one of the following form: * CSV-string * one ID as string * one ID as number * array of strings * array of numbers |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="Orders+update" name="Orders+update"></a>

### orders.update(id, data, [callback])

Update an Order

**See**: [https://route4me.io/docs/#update-an-order](https://route4me.io/docs/#update-an-order)  
**Since**: 0.1.11  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Order ID |
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
| criteria | <code>string</code> &#124; <code>Object</code> | Searched text or searching criteria |
| [criteria.byAddDate] | <code>Date</code> | Date order was inserted |
| [criteria.byScheduledDate] | <code>Date</code> | Date order was scheduled for |
| [criteria.query] | <code>string</code> | The text searched for |
| [options] | <code>Object</code> | List-parameters |
| [options.limit] | <code>number</code> | List limit |
| [options.offset] | <code>number</code> | List offset |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Orders.Orders&gt;</code> |  |

