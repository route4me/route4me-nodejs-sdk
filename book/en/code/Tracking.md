<a id="Tracking" name="Tracking"></a>

## Tracking ℗

Tracking facility

**Category**: Tracking  
**Access**: private  
**See**: [https://route4me.io/docs/#tracking](https://route4me.io/docs/#tracking)  
**Since**: 0.1.8  

* [Tracking](#Tracking) ℗
    * [new Tracking(requestManager)](#new_Tracking_new)
    * [.getAssetTracking(tracking, [callback])](#Tracking+getAssetTracking)
    * [.getRouteTrackingHistory(routeId, period, [callback])](#Tracking+getRouteTrackingHistory)
    * [.createRouteTracking(trackingData, [callback])](#Tracking+createRouteTracking)

<a id="new_Tracking_new" name="new_Tracking_new"></a>

### new Tracking(requestManager)

Constructor

**Returns**: [<code>Tracking</code>](#Tracking) - - Tracking facility  

| Param | Type | Description |
| --- | --- | --- |
| requestManager | <code>RequestManager</code> | Request Manager |

<a id="Tracking+getAssetTracking" name="Tracking+getAssetTracking"></a>

### tracking.getAssetTracking(tracking, [callback])

Get Asset Tracking Data

**See**: [https://route4me.io/docs/#get-asset-tracking-data](https://route4me.io/docs/#get-asset-tracking-data)  
**Since**: 0.1.8  

| Param | Type | Description |
| --- | --- | --- |
| tracking | <code>string</code> | Tracking number |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Tracking.AssetTracking&gt;</code> |  |

<a id="Tracking+getRouteTrackingHistory" name="Tracking+getRouteTrackingHistory"></a>

### tracking.getRouteTrackingHistory(routeId, period, [callback])

Get a device’s location history from a time range.

**Be carefull:** custom dates are considered as in local timezone!

**See**: [https://route4me.io/docs/#get-route-tracking-data](https://route4me.io/docs/#get-route-tracking-data)  
**Since**: 0.1.8  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| routeId | <code>string</code> |  | Route ID |
| period | <code>string</code> \| <code>Object</code> |  | Time period. Object with `from` and `trim` dates, or one of predefined strings: * `today` * `yesterday` * `thismonth` * `7days` * `14days` * `30days` * `60days` * `90days` * `all_time` |
| [period.span] | <code>string</code> | <code>&quot;\&quot;custom\&quot;&quot;</code> | One of predefined strings (this is an another one way to determine it) |
| period.from | <code>Date</code> |  | Custom start date |
| period.trim | <code>Date</code> |  | Custom end date |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Tracking.TrackingHistory&gt;</code> |  |  |

<a id="Tracking+createRouteTracking" name="Tracking+createRouteTracking"></a>

### tracking.createRouteTracking(trackingData, [callback])

Insert Route Tracking Data

Set GPS position of a device.

**See**: [https://route4me.io/docs/#insert-route-tracking-data](https://route4me.io/docs/#insert-route-tracking-data)  
**Since**: 0.1.8  

| Param | Type | Description |
| --- | --- | --- |
| trackingData | <code>int</code> | Route Tracking Data |
| trackingData.memberId | <code>number</code> | Member ID |
| trackingData.routeId | <code>string</code> | Route ID |
| trackingData.course | <code>number</code> | Movement course |
| trackingData.speed | <code>number</code> | Movement speed |
| trackingData.latitude | <code>number</code> | Latitude |
| trackingData.longitude | <code>number</code> | Longitude |
| trackingData.deviceType | <code>string</code> | Device type |
| trackingData.deviceGuid | <code>string</code> | Device GUID |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

