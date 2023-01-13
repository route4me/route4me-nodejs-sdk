<a id="Schedules" name="Schedules"></a>

## Schedules ℗

Schedule facility

**Category**: Schedules  
**Access**: private  
**Since**: 1.0.18  

* [Schedules](#Schedules) ℗
    * [new Schedules(requestManager)](#new_Schedules_new)
    * [.addSchedule(param, [callback])](#Schedules+addSchedule)
    * [.getSchedule(scheduleId, [callback])](#Schedules+getSchedule)
    * [.updateSchedule(scheduleId, param, [callback])](#Schedules+updateSchedule)
    * [.deleteSchedule(scheduleId, [withRoutes], [callback])](#Schedules+deleteSchedule)
    * [.getSchedules([options], [callback])](#Schedules+getSchedules)
    * [.getRouteSchedules([options], [callback])](#Schedules+getRouteSchedules)
    * [.addRouteSchedule(param, [callback])](#Schedules+addRouteSchedule)
    * [.getRouteSchedule(routeId, [callback])](#Schedules+getRouteSchedule)
    * [.updateRouteSchedule(routeId, param, [callback])](#Schedules+updateRouteSchedule)
    * [.deleteRouteSchedules(routeId, [callback])](#Schedules+deleteRouteSchedules)
    * [.deleteRouteSchedule(routeId, [callback])](#Schedules+deleteRouteSchedule)
    * [.replaceRouteSchedule(routeId, param, [callback])](#Schedules+replaceRouteSchedule)
    * [.getRouteSchedulePreview(routeId, start, end, [callback])](#Schedules+getRouteSchedulePreview)
    * [.isScheduledRouteCopy(routeId, [callback])](#Schedules+isScheduledRouteCopy)
    * [.getScheduledRoutesCopies(param, route_date, [callback])](#Schedules+getScheduledRoutesCopies)
    * [.addMasterRoute(param, [callback])](#Schedules+addMasterRoute)

<a id="new_Schedules_new" name="new_Schedules_new"></a>

### new Schedules(requestManager)

Constructor

**Returns**: [<code>Schedules</code>](#Schedules) - - Schedules facility  

| Param | Type | Description |
| --- | --- | --- |
| requestManager | <code>RequestManager</code> | Request Manager |

<a id="Schedules+addSchedule" name="Schedules+addSchedule"></a>

### schedules.addSchedule(param, [callback])

Create a new Schedule by sending the corresponding body payload.

**See**: [https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders](https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders)  
**Since**: 1.0.18  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| param | <code>object</code> |  |  |
| param.schedule_uid | <code>string</code> |  |  |
| param.root_member_id | <code>number</code> |  |  |
| param.name | <code>string</code> |  |  |
| param.schedule_blacklist | <code>Array.&lt;string&gt;</code> |  | Blacklisted dates as "YYYY-MM-DD". |
| [param.advance_interval] | <code>number</code> | <code>1</code> |  |
| [param.advance_schedule_interval_days] | <code>number</code> | <code>0</code> |  |
| param.schedule | <code>string</code> |  | Schedule as JSON string e.g. '{"enabled":true,"mode":"daily","daily":{"every":2}, "from":"2019-06-05","timestamp":1558538737}'. |
| param.timezone | <code>string</code> |  | Timezone as "America/New_York". |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |  |

<a id="Schedules+getSchedule" name="Schedules+getSchedule"></a>

### schedules.getSchedule(scheduleId, [callback])

Get the Schedule by specifying the 'schedule_uid' path parameter.

**See**: [https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders](https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders)  
**Since**: 1.0.18  

| Param | Type | Description |
| --- | --- | --- |
| scheduleId | <code>string</code> | Schedule ID. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="Schedules+updateSchedule" name="Schedules+updateSchedule"></a>

### schedules.updateSchedule(scheduleId, param, [callback])

Update the existing Schedule by sending the corresponding body payload.

**See**: [https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders](https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders)  
**Since**: 1.0.18  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| scheduleId | <code>string</code> |  | Schudele ID to update. |
| param | <code>object</code> |  |  |
| param.root_member_id | <code>number</code> |  |  |
| param.name | <code>string</code> |  |  |
| param.schedule_blacklist | <code>Array.&lt;string&gt;</code> |  | Blacklisted dates as "YYYY-MM-DD". |
| [param.advance_interval] | <code>number</code> | <code>1</code> |  |
| [param.advance_schedule_interval_days] | <code>number</code> | <code>0</code> |  |
| param.schedule | <code>string</code> |  | Schedule as JSON string e.g. '{"enabled":true,"mode":"daily","daily":{"every":2}, "from":"2019-06-05","timestamp":1558538737}'. |
| param.timezone | <code>string</code> |  | Timezone as "America/New_York". |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |  |

<a id="Schedules+deleteSchedule" name="Schedules+deleteSchedule"></a>

### schedules.deleteSchedule(scheduleId, [withRoutes], [callback])

Delete the specified Schedule with the option to delete the associated route.

**See**: [https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders](https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders)  
**Since**: 1.0.18  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| scheduleId | <code>string</code> |  | Schedule ID. |
| [withRoutes] | <code>boolean</code> | <code>false</code> | Delete the Schedule that matches the specified Schedule ID. If the deleted Schedule has one or multiple associated Routes, these Routes are also deleted. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |  |

<a id="Schedules+getSchedules" name="Schedules+getSchedules"></a>

### schedules.getSchedules([options], [callback])

Get the list of Schedules with or without pagination.

**See**: [https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders](https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders)  
**Since**: 1.0.18  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Paginated parameters |
| [options.with_pagination] | <code>bool</code> | <code>false</code> | Enable the paginated output. |
| [options.page] | <code>number</code> | <code>1</code> | Requested page. |
| [options.per_page] | <code>number</code> | <code>15</code> | Number of Schedules per page. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |  |

<a id="Schedules+getRouteSchedules" name="Schedules+getRouteSchedules"></a>

### schedules.getRouteSchedules([options], [callback])

Get the list of Route Schedules with or without pagination.

**See**: [https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders](https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders)  
**Since**: 1.0.18  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Paginated parameters |
| [options.with_pagination] | <code>bool</code> | <code>false</code> | Enable the paginated output. |
| [options.page] | <code>number</code> | <code>1</code> | Requested page. |
| [options.per_page] | <code>number</code> | <code>15</code> | Number of Route Schedules per page. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |  |

<a id="Schedules+addRouteSchedule" name="Schedules+addRouteSchedule"></a>

### schedules.addRouteSchedule(param, [callback])

Create a new Route Schedule by sending the corresponding body payload.

**See**: [https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders](https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders)  
**Since**: 1.0.18  

| Param | Type | Description |
| --- | --- | --- |
| param | <code>object</code> |  |
| param.route_id | <code>string</code> | Route ID. |
| param.schedule_uid | <code>string</code> | Schedule ID. |
| [param.member_id] | <code>number</code> | A unique ID of the root member. |
| [param.vehicle_id] | <code>string</code> | Vehicle ID. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="Schedules+getRouteSchedule" name="Schedules+getRouteSchedule"></a>

### schedules.getRouteSchedule(routeId, [callback])

Get the Route Schedule by specifying the Route ID path parameter.

**See**: [https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders](https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders)  
**Since**: 1.0.18  

| Param | Type | Description |
| --- | --- | --- |
| routeId | <code>string</code> | Route ID. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="Schedules+updateRouteSchedule" name="Schedules+updateRouteSchedule"></a>

### schedules.updateRouteSchedule(routeId, param, [callback])

Update the existing Route Schedule by sending the corresponding body payload.

**See**: [https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders](https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders)  
**Since**: 1.0.18  

| Param | Type | Description |
| --- | --- | --- |
| routeId | <code>string</code> | Route ID. |
| param | <code>object</code> |  |
| param.schedule_uid | <code>string</code> | Schedule ID. |
| param.member_id | <code>number</code> | A unique ID of the root member. |
| param.vehicle_id | <code>string</code> | Vehicle ID. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="Schedules+deleteRouteSchedules" name="Schedules+deleteRouteSchedules"></a>

### schedules.deleteRouteSchedules(routeId, [callback])

Delete the route schedules.

**See**: [https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders](https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders)  
**Since**: 1.0.18  

| Param | Type | Description |
| --- | --- | --- |
| routeId | <code>string</code> | Route ID. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="Schedules+deleteRouteSchedule" name="Schedules+deleteRouteSchedule"></a>

### schedules.deleteRouteSchedule(routeId, [callback])

Delete the specified route schedule.

**See**: [https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders](https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders)  
**Since**: 1.0.18  

| Param | Type | Description |
| --- | --- | --- |
| routeId | <code>string</code> | Route ID. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="Schedules+replaceRouteSchedule" name="Schedules+replaceRouteSchedule"></a>

### schedules.replaceRouteSchedule(routeId, param, [callback])

Replace the existing Route Schedule by sending the corresponding body payload.

**See**: [https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders](https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders)  
**Since**: 1.0.18  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| routeId | <code>string</code> |  | Route ID. |
| param | <code>object</code> |  |  |
| param.member_id | <code>number</code> |  | A unique ID of the root member. |
| param.vehicle_id | <code>string</code> |  | Vehicle ID. |
| param.schedule_uid | <code>string</code> |  | Schedule ID. |
| param.name | <code>string</code> |  |  |
| param.schedule_blacklist | <code>Array.&lt;string&gt;</code> |  | Blacklisted dates as YYYY-MM-DD |
| [param.advance_interval] | <code>number</code> | <code>1</code> |  |
| [param.advance_schedule_interval_days] | <code>number</code> | <code>0</code> |  |
| param.schedule | <code>string</code> |  | Schedule as JSON string e.g. '{"enabled":true,"mode":"daily","daily":{"every":2}, "from":"2019-06-05","timestamp":1558538737}'. |
| param.timezone | <code>string</code> |  | Timezone as "America/New_York". |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |  |

<a id="Schedules+getRouteSchedulePreview" name="Schedules+getRouteSchedulePreview"></a>

### schedules.getRouteSchedulePreview(routeId, start, end, [callback])

Get the Route Schedule preview by specifying the 'route_id' path parameter.

**See**: [https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders](https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders)  
**Since**: 1.0.18  

| Param | Type | Description |
| --- | --- | --- |
| routeId | <code>string</code> | Route ID. |
| start | <code>string</code> | Start date as YYYY-MM-DD |
| end | <code>string</code> | End date as YYYY-MM-DD |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="Schedules+isScheduledRouteCopy" name="Schedules+isScheduledRouteCopy"></a>

### schedules.isScheduledRouteCopy(routeId, [callback])

Check if the Scheduled Route was copied by specifying the 'routeId' path parameter.

**See**: [https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders](https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders)  
**Since**: 1.0.18  

| Param | Type | Description |
| --- | --- | --- |
| routeId | <code>string</code> | Route ID. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="Schedules+getScheduledRoutesCopies" name="Schedules+getScheduledRoutesCopies"></a>

### schedules.getScheduledRoutesCopies(param, route_date, [callback])

Get all routes copied from the specified Scheduled Route by sending
the corresponding body payload.

**See**: [https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders](https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders)  
**Since**: 1.0.18  

| Param | Type | Description |
| --- | --- | --- |
| param | <code>object</code> |  |
| param.route_id | <code>string</code> | Route ID. |
| param.schedule_id | <code>string</code> | Schedule ID. |
| route_date | <code>string</code> | Route date as YYYY-MM-DD. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="Schedules+addMasterRoute" name="Schedules+addMasterRoute"></a>

### schedules.addMasterRoute(param, [callback])

Create a new Master Route by sending the corresponding body payload.

**See**: [https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders](https://support.route4me.com/optimize-recurring-routes-and-schedule-delivery-for-repeat-orders)  
**Since**: 1.0.18  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| param | <code>object</code> |  |  |
| param.route_id | <code>string</code> |  | Route ID. |
| param.route_name | <code>string</code> |  |  |
| param.member_id | <code>number</code> |  | A unique ID of the root member. |
| param.vehicle_id | <code>string</code> |  | Vehicle ID. |
| param.name | <code>string</code> |  |  |
| param.schedule_blacklist | <code>Array.&lt;string&gt;</code> |  | Blacklisted dates as YYYY-MM-DD |
| [param.advance_interval] | <code>number</code> | <code>1</code> |  |
| [param.advance_schedule_interval_days] | <code>number</code> | <code>0</code> |  |
| param.schedule | <code>string</code> |  | Schedule as JSON string e.g. '{"enabled":true,"mode":"daily","daily":{"every":2}, "from":"2019-06-05","timestamp":1558538737}'. |
| param.timezone | <code>string</code> |  | Timezone as "America/New_York". |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |  |

