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
| [arg] | <code>[LoggerParams](#ILogger..LoggerParams)</code> &#124; <code>Error</code> &#124; <code>string</code> | Something to log |

<a id="ILogger+info" name="ILogger+info"></a>

### iLogger.info([arg])

Info


| Param | Type | Description |
| --- | --- | --- |
| [arg] | <code>[LoggerParams](#ILogger..LoggerParams)</code> &#124; <code>Error</code> &#124; <code>string</code> | Something to log |

<a id="ILogger+warn" name="ILogger+warn"></a>

### iLogger.warn([arg])

Warning


| Param | Type | Description |
| --- | --- | --- |
| [arg] | <code>[LoggerParams](#ILogger..LoggerParams)</code> &#124; <code>Error</code> &#124; <code>string</code> | Something to log |

<a id="ILogger+error" name="ILogger+error"></a>

### iLogger.error([arg])

Error


| Param | Type | Description |
| --- | --- | --- |
| [arg] | <code>[LoggerParams](#ILogger..LoggerParams)</code> &#124; <code>Error</code> &#124; <code>string</code> | Something to log |

<a id="ILogger..LoggerParams" name="ILogger..LoggerParams"></a>

### ILogger~LoggerParams

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| msg | <code>string</code> | Message to log |
| err | <code>Error</code> | Error object, if error occured |

<a id="Route4Me" name="Route4Me"></a>

## Route4Me

Route4Me main SDK class

The main purpose of this class: to provide an access to API-methods and to keep
chore and routine in the shadow as long as possible.

With `route4me` instance you should get responses from API easy-peasy.

Main members of the instanse of `Route4Me` class:

* [ActivityFeed  ](ActivityFeed)
* [Addresses     ](Addresses)
* [AddressBook   ](AddressBook)
* [AvoidanceZones](AvoidanceZones)
* [Geocoding     ](Geocoding)
* [Members       ](Members)
* [Notes         ](Notes)
* [Optimizations ](Optimizations)
* [Orders        ](Orders)
* [Routes        ](Routes)
* [Territories   ](Territories)
* [Tracking      ](Tracking)
* [Vehicles      ](Vehicles)

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
        * [.Addresses](#Route4Me+Addresses) : <code>Addresses</code>
        * [.AvoidanceZones](#Route4Me+AvoidanceZones) : <code>AvoidanceZones</code>
        * [.Geocoding](#Route4Me+Geocoding) : <code>Geocoding</code>
        * [.Notes](#Route4Me+Notes) : <code>Notes</code>
        * [.Optimizations](#Route4Me+Optimizations) : <code>Optimizations</code>
        * [.Orders](#Route4Me+Orders) : <code>Orders</code>
        * [.Routes](#Route4Me+Routes) : <code>Routes</code>
        * [.Territories](#Route4Me+Territories) : <code>Territories</code>
        * [.Tracking](#Route4Me+Tracking) : <code>Tracking</code>
        * [.Vehicles](#Route4Me+Vehicles) : <code>Vehicles</code>
        * [.version](#Route4Me+version) ⇒ <code>string</code>
    * _static_
        * [.version](#Route4Me.version) ⇒ <code>string</code>

<a id="new_Route4Me_new" name="new_Route4Me_new"></a>

### new Route4Me(apiKey, [options])

Create new API client


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| apiKey | <code>string</code> |  | API KEY |
| [options] | <code>object</code> |  | Additional options for new instance |
| [options.baseUrl] | <code>string</code> | <code>&quot;\&quot;https://route4me.com\&quot;&quot;</code> | Base URL for sending requests |
| [options.logger] | <code>[ILogger](#ILogger)</code> | <code></code> | Logger facility |
| [options.promise] | <code>boolean</code> &#124; <code>function</code> | <code>false</code> | Use promises instead of callbacks. Usage: * `false` means _no promises, use callbacks_; * `true` means _use global `Promise`_ as promises' constructor; * `constructor (function)` forces to use explicit Promise library. See also Examples section of this documentation. |
| [options.validate] | <code>module:route4me-node~ValidationCallback</code> | <code>false</code> | Validator for input and output parameters of the API methods. Set **falsey** value to skip autovalidation (in favor of manual check). |

<a id="Route4Me+ActivityFeed" name="Route4Me+ActivityFeed"></a>

### route4Me.ActivityFeed : <code>ActivityFeed</code>

**ActivityFeed** related API calls

**Since**: 0.1.12  
<a id="Route4Me+AddressBook" name="Route4Me+AddressBook"></a>

### route4Me.AddressBook : <code>AddressBook</code>

**AddressBook** related API calls

**Since**: 0.1.8  
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
| DriverArrivedEarly | <code>string</code> | <code>&quot;driver-arrived-early&quot;</code> | Get driver arrived early activities [https://route4me.io/docs/#driver-arrived-early](https://route4me.io/docs/#driver-arrived-early) |
| DriverArrivedLate | <code>string</code> | <code>&quot;driver-arrived-late&quot;</code> |  |
| DriverArrivedOnTime | <code>string</code> | <code>&quot;driver-arrived-on-time&quot;</code> |  |
| MemberCreated | <code>string</code> | <code>&quot;member-created&quot;</code> |  |
| MemberDeleted | <code>string</code> | <code>&quot;member-deleted&quot;</code> |  |
| MemberModified | <code>string</code> | <code>&quot;member-modified&quot;</code> |  |
| NoteInsert | <code>string</code> | <code>&quot;note-insert&quot;</code> |  |
| UserMessage | <code>string</code> | <code>&quot;user_message&quot;</code> |  |

