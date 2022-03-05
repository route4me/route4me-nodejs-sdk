<a id="ActivityFeed" name="ActivityFeed"></a>

## ActivityFeed ℗

ActivityFeed facility

**Category**: ActivityFeed  
**Access**: private  
**See**: [https://route4me.io/docs/#activity-feed](https://route4me.io/docs/#activity-feed)  
**Since**: 0.1.12  

* [ActivityFeed](#ActivityFeed) ℗
    * [new ActivityFeed(requestManager)](#new_ActivityFeed_new)
    * [.ActivityTypeEnum](#ActivityFeed+ActivityTypeEnum)
    * [.create(data, [callback])](#ActivityFeed+create)
    * [.list(criteria, [options], [callback])](#ActivityFeed+list)
    * [.getactivities_example(data, [callback])](#ActivityFeed+getactivities_example)
    * [.logcustomactivity(data, [callback])](#ActivityFeed+logcustomactivity)

<a id="new_ActivityFeed_new" name="new_ActivityFeed_new"></a>

### new ActivityFeed(requestManager)

Constructor

**Returns**: [<code>ActivityFeed</code>](#ActivityFeed) - - ActivityFeed facility  

| Param | Type | Description |
| --- | --- | --- |
| requestManager | <code>RequestManager</code> | Request Manager |

<a id="ActivityFeed+ActivityTypeEnum" name="ActivityFeed+ActivityTypeEnum"></a>

### activityFeed.ActivityTypeEnum

Enumerable of all known activity type

**Todo**

- [ ] TODO: move to PACKAGE level (to make it easier for usage) see [https://github.com/route4me/route4me-nodejs-sdk/issues/40](https://github.com/route4me/route4me-nodejs-sdk/issues/40)

<a id="ActivityFeed+create" name="ActivityFeed+create"></a>

### activityFeed.create(data, [callback])

Log a Specific Message

This example demonstrates how to permanently store a specific message
directly to the activity feed. For example, this can be used for one or
two-way chat.

**The created activity will have `activityType === "user_message"`**

**See**: [https://route4me.io/docs/#log-a-specific-message](https://route4me.io/docs/#log-a-specific-message)  
**Since**: 0.1.12  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Activity Feed item |
| data.routeId | <code>string</code> | Route ID |
| data.message | <code>string</code> | A message text for logging into the activity feed |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="ActivityFeed+list" name="ActivityFeed+list"></a>

### activityFeed.list(criteria, [options], [callback])

Log a Specific Message

This example demonstrates how to permanently store a specific message
directly to the activity feed. For example, this can be used for one or
two-way chat.

**See**: [https://route4me.io/docs/#log-a-specific-message](https://route4me.io/docs/#log-a-specific-message)  
**Since**: 0.1.12  
**Todo**

- [ ] TODO: convert options to optional


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| criteria | <code>string</code> \| <code>Object</code> |  | Criteria for event filter. Depending on type will be considered as: * `string` - criteria is a string representation of [Activity type](ActivityTypeEnum) * `Object` - criteria is a set of filters, see below |
| [criteria.activityType] | <code>string</code> |  | [Activity type](ActivityTypeEnum) |
| [criteria.routeId] | <code>string</code> |  | Route ID |
| [options] | <code>Object</code> |  | Options for activity search |
| [options.limit] | <code>number</code> |  | List limit |
| [options.offset] | <code>number</code> |  | List offset |
| [options.includeTeamActivities] | <code>boolean</code> | <code>false</code> | Indicate, whether team activities should be included |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:ActivityFeed.ActivityFeedResult&gt;</code> |  |  |

<a id="ActivityFeed+getactivities_example" name="ActivityFeed+getactivities_example"></a>

### activityFeed.getactivities\_example(data, [callback])

Log a Specific Message

This example demonstrates how to permanently store a specific message
directly to the activity feed. For example, this can be used for one or
two-way chat.

**The created activity will have `activityType === "user_message"`**

**See**: [https://route4me.io/docs/#activity-feed](https://route4me.io/docs/#activity-feed)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Activity Feed parameter |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Routes.Route&gt;</code> |  |

<a id="ActivityFeed+logcustomactivity" name="ActivityFeed+logcustomactivity"></a>

### activityFeed.logcustomactivity(data, [callback])

Log a Specific Message

This example demonstrates how to permanently store a specific message
directly to the activity feed. For example, this can be used for one or
two-way chat.

**The created activity will have `activityType === "user_message"`**

**See**: [https://route4me.io/docs/#activity-feed](https://route4me.io/docs/#activity-feed)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Activity Feed parameter |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Routes.Route&gt;</code> |  |

