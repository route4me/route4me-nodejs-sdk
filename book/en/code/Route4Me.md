<a id="ILogger" name="ILogger"></a>

## ILogger

ILogger interface

**Category**: Route4Me  
**Access**: public  

* [ILogger](#ILogger)
    * _instance_
        * [.debug([arg])](#ILogger+debug)
        * [.info([arg])](#ILogger+info)
        * [.warn([arg])](#ILogger+warn)
        * [.error([arg])](#ILogger+error)
    * _inner_
        * [~LoggerParams](#ILogger..LoggerParams)

<a id="ILogger+debug" name="ILogger+debug"></a>

### iLogger.debug([arg])

Debug


| Param | Type | Description |
| --- | --- | --- |
| [arg] | [<code>LoggerParams</code>](#ILogger..LoggerParams) \| <code>Error</code> \| <code>string</code> | Something to log |

<a id="ILogger+info" name="ILogger+info"></a>

### iLogger.info([arg])

Info


| Param | Type | Description |
| --- | --- | --- |
| [arg] | [<code>LoggerParams</code>](#ILogger..LoggerParams) \| <code>Error</code> \| <code>string</code> | Something to log |

<a id="ILogger+warn" name="ILogger+warn"></a>

### iLogger.warn([arg])

Warning


| Param | Type | Description |
| --- | --- | --- |
| [arg] | [<code>LoggerParams</code>](#ILogger..LoggerParams) \| <code>Error</code> \| <code>string</code> | Something to log |

<a id="ILogger+error" name="ILogger+error"></a>

### iLogger.error([arg])

Error


| Param | Type | Description |
| --- | --- | --- |
| [arg] | [<code>LoggerParams</code>](#ILogger..LoggerParams) \| <code>Error</code> \| <code>string</code> | Something to log |

<a id="ILogger..LoggerParams" name="ILogger..LoggerParams"></a>

### ILogger~LoggerParams

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [msg] | <code>string</code> | Message to log |
| [err] | <code>Error</code> | Error object, if error occured |

<a id="Route4Me" name="Route4Me"></a>

## Route4Me

Route4Me main SDK class

The main purpose of this class: to provide an access to API-methods and to keep
chore and routine in the shadow as long as possible.

With `route4me` instance you should get responses from API easy-peasy.

Main members of the instanse of `Route4Me` class:

* [ActivityFeed     ](ActivityFeed)
* [Addresses        ](Addresses)
* [AddressBook      ](AddressBook)
* [AddressBookV5    ](AddressBookV5)
* [AddressBarcodes  ](AddressBarcodes)
* [AvoidanceZones   ](AvoidanceZones)
* [Geocoding        ](Geocoding)
* [Members          ](Members)
* [Notes            ](Notes)
* [Optimizations    ](Optimizations)
* [Orders           ](Orders)
* [OrderCustomFields](OrderCustomFields)
* [Routes           ](Routes)
* [TeamManagement   ](TeamManagement)
* [Territories      ](Territories)
* [Tracking         ](Tracking)
* [Vehicles         ](Vehicles)

Each member corresponds to an bunch of methods, described in API-documentation,
but the most methods in this SDK have unified names:

* `create` - to create new entity
* `get` - to get **one** entity (usually, by ID)
* `list` - returns a list of **all** entities (sometimes with `limit` and `offset`)
* `update` - allows to edit entity
* `remove` - removes/deletes the entity
* `search` - obviously: allows to search items by a set of criteria

For most use cases it is necessary:

1. Create `route4me` instance (with your API-key)
2. Call the appropriate method
3. Get the result (as JSON object)
4. **PROFIT**

**Summary**: Route4Me main SDK class  
**Category**: Route4Me  

* [Route4Me](#Route4Me)
    * [new Route4Me(apiKey, [options])](#new_Route4Me_new)
    * _instance_
        * [.ActivityFeed](#Route4Me+ActivityFeed) : <code>ActivityFeed</code>
        * [.AddressBook](#Route4Me+AddressBook) : <code>AddressBook</code>
        * [.AddressBookV5](#Route4Me+AddressBookV5) : <code>AddressBookV5</code>
        * [.AddressBarcodes](#Route4Me+AddressBarcodes) : <code>AddressBarcodes</code>
        * [.Addresses](#Route4Me+Addresses) : <code>Addresses</code>
        * [.AvoidanceZones](#Route4Me+AvoidanceZones) : <code>AvoidanceZones</code>
        * [.Geocoding](#Route4Me+Geocoding) : <code>Geocoding</code>
        * [.Notes](#Route4Me+Notes) : <code>Notes</code>
        * [.Optimizations](#Route4Me+Optimizations) : <code>Optimizations</code>
        * [.Orders](#Route4Me+Orders) : <code>Orders</code>
        * [.Routes](#Route4Me+Routes) : <code>Routes</code>
        * [.TeamManagement](#Route4Me+TeamManagement) : <code>TeamManagement</code>
        * [.Territories](#Route4Me+Territories) : <code>Territories</code>
        * [.Tracking](#Route4Me+Tracking) : <code>Tracking</code>
        * [.Vehicles](#Route4Me+Vehicles) : <code>Vehicles</code>
        * [.version](#Route4Me+version) ⇒ <code>string</code>
        * [.baseUrl()](#Route4Me+baseUrl) ⇒ <code>string</code>
        * [.baseUrl5()](#Route4Me+baseUrl5) ⇒ <code>string</code>
    * _static_
        * [.version](#Route4Me.version) ⇒ <code>string</code>

<a id="new_Route4Me_new" name="new_Route4Me_new"></a>

### new Route4Me(apiKey, [options])

Create new API client

**Returns**: [<code>Route4Me</code>](#Route4Me) - New API client  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| apiKey | <code>string</code> |  | API KEY |
| [options] | <code>object</code> |  | Additional options for new instance |
| [options.baseUrl] | <code>string</code> | <code>&quot;https://api.route4me.com&quot;</code> | Base URL for sending requests |
| [options.baseUrl5] | <code>string</code> | <code>&quot;https://wh.route4me.com/modules&quot;</code> | Base URL for sending requests to backend API v.5 |
| [options.logger] | [<code>ILogger</code>](#ILogger) | <code></code> | Logger facility |
| [options.promise] | <code>boolean</code> \| <code>function</code> | <code>false</code> | Use promises instead of callbacks. Usage: * `false` means _no promises, use callbacks_; * `true` means _use global `Promise`_ as promises' constructor; * `constructor (function)` forces to use explicit Promise library. See also Examples section of this documentation. |
| [options.validate] | <code>module:route4me-node~ValidationCallback</code> | <code>false</code> | Validator for input and output parameters of the API methods. Set **falsey** value to skip autovalidation (in favor of manual check). |

<a id="Route4Me+ActivityFeed" name="Route4Me+ActivityFeed"></a>

### route4Me.ActivityFeed : <code>ActivityFeed</code>

**ActivityFeed** related API calls

**Since**: 0.1.12  
<a id="Route4Me+AddressBook" name="Route4Me+AddressBook"></a>

### route4Me.AddressBook : <code>AddressBook</code>

**AddressBook** related API calls

**Since**: 0.1.8  
<a id="Route4Me+AddressBookV5" name="Route4Me+AddressBookV5"></a>

### route4Me.AddressBookV5 : <code>AddressBookV5</code>

**AddressBookV5** related API calls

**Since**: 0.1.8  
<a id="Route4Me+AddressBarcodes" name="Route4Me+AddressBarcodes"></a>

### route4Me.AddressBarcodes : <code>AddressBarcodes</code>

**AddressBarcodes** related API calls

**Since**: 1.0.5  
<a id="Route4Me+Addresses" name="Route4Me+Addresses"></a>

### route4Me.Addresses : <code>Addresses</code>

**Addresses** related API calls

**Since**: 0.1.8  
<a id="Route4Me+AvoidanceZones" name="Route4Me+AvoidanceZones"></a>

### route4Me.AvoidanceZones : <code>AvoidanceZones</code>

**AvoidanceZones** related API calls

**Since**: 0.1.8  
<a id="Route4Me+Geocoding" name="Route4Me+Geocoding"></a>

### route4Me.Geocoding : <code>Geocoding</code>

**Geocoding** related API calls

**Since**: 0.1.9  
<a id="Route4Me+Notes" name="Route4Me+Notes"></a>

### route4Me.Notes : <code>Notes</code>

**Notes** related API calls

**Since**: 0.1.9  
<a id="Route4Me+Optimizations" name="Route4Me+Optimizations"></a>

### route4Me.Optimizations : <code>Optimizations</code>

**Optimizations** related API calls

<a id="Route4Me+Orders" name="Route4Me+Orders"></a>

### route4Me.Orders : <code>Orders</code>

**Orders** related API calls

<a id="Route4Me+Routes" name="Route4Me+Routes"></a>

### route4Me.Routes : <code>Routes</code>

**Routes** related API calls

**Since**: 0.1.8  
<a id="Route4Me+TeamManagement" name="Route4Me+TeamManagement"></a>

### route4Me.TeamManagement : <code>TeamManagement</code>

**TeamManagement** related API calls

<a id="Route4Me+Territories" name="Route4Me+Territories"></a>

### route4Me.Territories : <code>Territories</code>

**Territories** related API calls

<a id="Route4Me+Tracking" name="Route4Me+Tracking"></a>

### route4Me.Tracking : <code>Tracking</code>

**Tracking** related API calls

<a id="Route4Me+Vehicles" name="Route4Me+Vehicles"></a>

### route4Me.Vehicles : <code>Vehicles</code>

**Vehicles** related API calls

<a id="Route4Me+version" name="Route4Me+version"></a>

### route4Me.version ⇒ <code>string</code>

Version of this API client

**Returns**: <code>string</code> - Version  
**Read only**: true  
**Since**: 0.2.0  
<a id="Route4Me+baseUrl" name="Route4Me+baseUrl"></a>

### route4Me.baseUrl() ⇒ <code>string</code>

Base URL for sending requests

**Returns**: <code>string</code> - URL  
**Read only**: true  
**Since**: 1.0.9  
<a id="Route4Me+baseUrl5" name="Route4Me+baseUrl5"></a>

### route4Me.baseUrl5() ⇒ <code>string</code>

Base URL for sending requests to backend API v.5

**Returns**: <code>string</code> - URL  
**Read only**: true  
**Since**: 1.0.9  
<a id="Route4Me.version" name="Route4Me.version"></a>

### Route4Me.version ⇒ <code>string</code>

Version of this API client

**Returns**: <code>string</code> - Version  
**Read only**: true  
**Since**: 0.1.3  
<a id="ActivityTypeEnum" name="ActivityTypeEnum"></a>

## ActivityTypeEnum : <code>enum</code>

Enum for all known **activity type**.

**Category**: Route4Me  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| Undefined | <code>string</code> | <code>&quot;&quot;</code> |  |
| AreaAdded | <code>string</code> | <code>&quot;area-added&quot;</code> |  |
| AreaRemoved | <code>string</code> | <code>&quot;area-removed&quot;</code> |  |
| AreaUpdated | <code>string</code> | <code>&quot;area-updated&quot;</code> |  |
| GeofenceEntered | <code>string</code> | <code>&quot;geofence-entered&quot;</code> |  |
| GeofenceLeft | <code>string</code> | <code>&quot;geofence-left&quot;</code> |  |
| RouteDelete | <code>string</code> | <code>&quot;route-delete&quot;</code> |  |
| RouteOptimized | <code>string</code> | <code>&quot;route-optimized&quot;</code> |  |
| RouteOwnerChanged | <code>string</code> | <code>&quot;route-owner-changed&quot;</code> |  |
| DeleteDestination | <code>string</code> | <code>&quot;delete-destination&quot;</code> |  |
| DestinationOutSequence | <code>string</code> | <code>&quot;destination-out-sequence&quot;</code> |  |
| InsertDestination | <code>string</code> | <code>&quot;insert-destination&quot;</code> |  |
| MarkDestinationDeparted | <code>string</code> | <code>&quot;mark-destination-departed&quot;</code> |  |
| MarkDestinationVisited | <code>string</code> | <code>&quot;mark-destination-visited&quot;</code> |  |
| MoveDestination | <code>string</code> | <code>&quot;move-destination&quot;</code> |  |
| UpdateDestinations | <code>string</code> | <code>&quot;update-destinations&quot;</code> |  |
| AddressbookInsert | <code>string</code> | <code>&quot;addressbook-insert&quot;</code> | Get driver arrived early activities [https://route4me.io/docs/#driver-arrived-early](https://route4me.io/docs/#driver-arrived-early) |
| AddressbookUpdate | <code>string</code> | <code>&quot;addressbook-update&quot;</code> |  |
| AddressbookDelete | <code>string</code> | <code>&quot;addressbook-delete&quot;</code> |  |
| DriverArrivedEarly | <code>string</code> | <code>&quot;driver-arrived-early&quot;</code> |  |
| DriverArrivedLate | <code>string</code> | <code>&quot;driver-arrived-late&quot;</code> |  |
| DriverArrivedInTime | <code>string</code> | <code>&quot;driver-arrived-in-time&quot;</code> |  |
| DriverArrivedOnTime | <code>string</code> | <code>&quot;driver-arrived-on-time&quot;</code> |  |
| LocalGeofenceEntered | <code>string</code> | <code>&quot;local_geofence_entered&quot;</code> |  |
| LocalGeofenceLeft | <code>string</code> | <code>&quot;local_geofence_left&quot;</code> |  |
| MemberCreated | <code>string</code> | <code>&quot;member-created&quot;</code> |  |
| MemberDeleted | <code>string</code> | <code>&quot;member-deleted&quot;</code> |  |
| MemberModified | <code>string</code> | <code>&quot;member-modified&quot;</code> |  |
| NoteInsert | <code>string</code> | <code>&quot;note-insert&quot;</code> |  |
| UserMessage | <code>string</code> | <code>&quot;user_message&quot;</code> |  |
| ApprovedToExecute | <code>string</code> | <code>&quot;approved-to-execute&quot;</code> |  |
| RouteDuplicate | <code>string</code> | <code>&quot;route-duplicate&quot;</code> |  |
| RouteMerge | <code>string</code> | <code>&quot;route-merge&quot;</code> |  |
| OrderCreated | <code>string</code> | <code>&quot;order-created&quot;</code> |  |
| OrderUpdated | <code>string</code> | <code>&quot;order-updated&quot;</code> |  |
| OrderDeleted | <code>string</code> | <code>&quot;order-deleted&quot;</code> |  |
| UnapprovedToExecute | <code>string</code> | <code>&quot;unapproved-to-execute&quot;</code> |  |
| PickupBarcodeScanning | <code>string</code> | <code>&quot;pickup_barcode_scanning&quot;</code> |  |
| RouteCompleted | <code>string</code> | <code>&quot;route-completed&quot;</code> |  |
| RouteDestinationStatus | <code>string</code> | <code>&quot;route-destination-status&quot;</code> |  |
| RoutePaused | <code>string</code> | <code>&quot;route-paused&quot;</code> |  |
| RouteStarted | <code>string</code> | <code>&quot;route-started&quot;</code> |  |
| RouteUpdate | <code>string</code> | <code>&quot;route-update&quot;</code> |  |

