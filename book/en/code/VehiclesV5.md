<a id="VehiclesV5" name="VehiclesV5"></a>

## VehiclesV5 ℗

Vehicles facility

**Category**: VehiclesV5  
**Access**: private  
**See**: [https://route4me.io/docs/#vehicles](https://route4me.io/docs/#vehicles)  
**Since**: 1.0.14  

* [VehiclesV5](#VehiclesV5) ℗
    * [new VehiclesV5(requestManager)](#new_VehiclesV5_new)
    * [.list([callback])](#VehiclesV5+list)

<a id="new_VehiclesV5_new" name="new_VehiclesV5_new"></a>

### new VehiclesV5(requestManager)

Constructor

**Returns**: <code>Vehicles</code> - - Vehicles facility  

| Param | Type | Description |
| --- | --- | --- |
| requestManager | <code>RequestManager</code> | Request Manager |

<a id="VehiclesV5+list" name="VehiclesV5+list"></a>

### vehiclesV5.list([callback])

Get vehicles that belong to the Route4Me account

**See**: [https://route4me.io/docs/#get-vehicles](https://route4me.io/docs/#get-vehicles)  
**Todo**

- [ ] Fix error in API docs: there the method utilizes `POST`-http-method to get results


| Param | Type |
| --- | --- |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Vehicles.ResponseMany&gt;</code> | 

