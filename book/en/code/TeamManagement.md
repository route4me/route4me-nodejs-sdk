<a id="TeamManagement" name="TeamManagement"></a>

## TeamManagement ℗

Notes facility

**Category**: TeamManagement  
**Access**: private  
**See**: [https://route4me.io/docs/#tracking](https://route4me.io/docs/#tracking)  
**Since**: 1.0.13  

* [TeamManagement](#TeamManagement) ℗
    * [new TeamManagement(requestManager)](#new_TeamManagement_new)
    * [.create(user, [callback])](#TeamManagement+create)
    * [.list([callback])](#TeamManagement+list)
    * [.get(id, [callback])](#TeamManagement+get)
    * [.delete(id, [callback])](#TeamManagement+delete)
    * [.update(id, user, [callback])](#TeamManagement+update)
    * [.bulkInsert(users, [options], [callback])](#TeamManagement+bulkInsert)

<a id="new_TeamManagement_new" name="new_TeamManagement_new"></a>

### new TeamManagement(requestManager)

Constructor

**Returns**: [<code>TeamManagement</code>](#TeamManagement) - - Team Management  

| Param | Type | Description |
| --- | --- | --- |
| requestManager | <code>RequestManager</code> | Request Manager |

<a id="TeamManagement+create" name="TeamManagement+create"></a>

### teamManagement.create(user, [callback])

Add a new sub-user to the Member account by sending the corresponding
body payload with the sub-users' parameters.

**See**: [https://virtserver.swaggerhub.com/Route4Me](https://virtserver.swaggerhub.com/Route4Me)  
**Since**: 1.0.13  

| Param | Type | Description |
| --- | --- | --- |
| user | <code>Object</code> | Sub-user properties. |
| user.new_password | <code>String</code> | Password. |
| user.new_member_picture | <code>String</code> | Member picture. |
| user.member_first_name | <code>String</code> | First name. |
| user.member_last_name | <code>String</code> | Last name. |
| user.member_email | <code>String</code> | E-mail. |
| user.member_company | <code>String</code> | Company. |
| user.member_type | <code>String</code> | Member type. |
| user.OWNER_MEMBER_ID | <code>Number</code> | Owner member ID. |
| user.member_phone | <code>String</code> | Phone. |
| user.date_of_birth | <code>String</code> | Date of birth. |
| user.user_reg_state_id | <code>Number</code> | User state ID. |
| user.user_reg_country_id | <code>Number</code> | User country ID. |
| user.DriverHourlyRate | <code>Number</code> | Drive hourly rate. |
| user.HIDE_ROUTED_ADDRESSES | <code>Boolean</code> | Hide routed addresses. |
| user.HIDE_VISITED_ADDRESSES | <code>Boolean</code> | Hide visited addresses. |
| user.HIDE_NONFUTURE_ROUTES | <code>Boolean</code> | Hide nonfuture routes. |
| user.READONLY_USER | <code>Boolean</code> | Readonly user. |
| user.SHOW_SUSR_ADDR | <code>Boolean</code> | Show sub-user addresses. |
| user.SHOW_SUSR_ORDERS | <code>Boolean</code> | Show sub-user orders. |
| user.SHOW_ALL_DRIVERS | <code>Boolean</code> | Show all drivers. |
| user.SHOW_ALL_VEHICLES | <code>Boolean</code> | Show all vehicles. |
| user.display_max_routes_future_days | <code>Boolean</code> | Display max routes. |
| user.vendor_id | <code>Number</code> | Vendoe ID. |
| user.driving_rate | <code>Number</code> | Driving rate. |
| user.working_rate | <code>Number</code> | Working rate. |
| user.mile_rate | <code>Number</code> | Mile rate. |
| user.idling_rate | <code>Number</code> | Idling rate. |
| user.timezone | <code>String</code> | Timezone. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="TeamManagement+list" name="TeamManagement+list"></a>

### teamManagement.list([callback])

View all existing sub-users associated with the Member’s account.

**See**: [https://virtserver.swaggerhub.com/Route4Me](https://virtserver.swaggerhub.com/Route4Me)  
**Since**: 1.0.13  

| Param | Type |
| --- | --- |
| [callback] | <code>module:route4me-node~RequestCallback</code> | 

<a id="TeamManagement+get" name="TeamManagement+get"></a>

### teamManagement.get(id, [callback])

Get the sub-user by specifying the path parameter ID.

**See**: [https://virtserver.swaggerhub.com/Route4Me](https://virtserver.swaggerhub.com/Route4Me)  
**Since**: 1.0.13  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>Number</code> | User ID. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="TeamManagement+delete" name="TeamManagement+delete"></a>

### teamManagement.delete(id, [callback])

Delete the sub-user by specifying the path parameter ID.

**See**: [https://virtserver.swaggerhub.com/Route4Me](https://virtserver.swaggerhub.com/Route4Me)  
**Since**: 1.0.13  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>Number</code> | User ID. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="TeamManagement+update" name="TeamManagement+update"></a>

### teamManagement.update(id, user, [callback])

Update the sub-user by specifying the path parameter ID and by sending the
corresponding body payload with the sub-user's parameters..

**See**: [https://virtserver.swaggerhub.com/Route4Me](https://virtserver.swaggerhub.com/Route4Me)  
**Since**: 1.0.13  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>Number</code> | User ID. |
| user | <code>Object</code> | Sub-user properties. |
| user.new_password | <code>String</code> | Password. |
| user.new_member_picture | <code>String</code> | Member picture. |
| user.member_first_name | <code>String</code> | First name. |
| user.member_last_name | <code>String</code> | Last name. |
| user.member_email | <code>String</code> | E-mail. |
| user.member_company | <code>String</code> | Company. |
| user.member_type | <code>String</code> | Member type. |
| user.OWNER_MEMBER_ID | <code>Number</code> | Owner member ID. |
| user.member_phone | <code>String</code> | Phone. |
| user.date_of_birth | <code>String</code> | Date of birth. |
| user.user_reg_state_id | <code>Number</code> | User state ID. |
| user.user_reg_country_id | <code>Number</code> | User country ID. |
| user.DriverHourlyRate | <code>Number</code> | Drive hourly rate. |
| user.HIDE_ROUTED_ADDRESSES | <code>Boolean</code> | Hide routed addresses. |
| user.HIDE_VISITED_ADDRESSES | <code>Boolean</code> | Hide visited addresses. |
| user.HIDE_NONFUTURE_ROUTES | <code>Boolean</code> | Hide nonfuture routes. |
| user.READONLY_USER | <code>Boolean</code> | Readonly user. |
| user.SHOW_SUSR_ADDR | <code>Boolean</code> | Show sub-user addresses. |
| user.SHOW_SUSR_ORDERS | <code>Boolean</code> | Show sub-user orders. |
| user.SHOW_ALL_DRIVERS | <code>Boolean</code> | Show all drivers. |
| user.SHOW_ALL_VEHICLES | <code>Boolean</code> | Show all vehicles. |
| user.display_max_routes_future_days | <code>Boolean</code> | Display max routes. |
| user.vendor_id | <code>Number</code> | Vendoe ID. |
| user.driving_rate | <code>Number</code> | Driving rate. |
| user.working_rate | <code>Number</code> | Working rate. |
| user.mile_rate | <code>Number</code> | Mile rate. |
| user.idling_rate | <code>Number</code> | Idling rate. |
| user.timezone | <code>String</code> | Timezone. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="TeamManagement+bulkInsert" name="TeamManagement+bulkInsert"></a>

### teamManagement.bulkInsert(users, [options], [callback])

Add multiple sub-users to the User account by sending the corresponding
body payload with the array of the sub-users' parameters

**See**: [https://virtserver.swaggerhub.com/Route4Me](https://virtserver.swaggerhub.com/Route4Me)  
**Since**: 1.0.13  

| Param | Type | Description |
| --- | --- | --- |
| users | <code>Array.&lt;Object&gt;</code> | Array of sub-user properties. |
| users[].new_password | <code>String</code> | Password. |
| users[].new_member_picture | <code>String</code> | Member picture. |
| users[].member_first_name | <code>String</code> | First name. |
| users[].member_last_name | <code>String</code> | Last name. |
| users[].member_email | <code>String</code> | E-mail. |
| users[].member_company | <code>String</code> | Company. |
| users[].member_type | <code>String</code> | Member type. |
| users[].OWNER_MEMBER_ID | <code>Number</code> | Owner member ID. |
| users[].member_phone | <code>String</code> | Phone. |
| users[].date_of_birth | <code>String</code> | Date of birth. |
| users[].user_reg_state_id | <code>Number</code> | User state ID. |
| users[].user_reg_country_id | <code>Number</code> | User country ID. |
| users[].DriverHourlyRate | <code>Number</code> | Drive hourly rate. |
| users[].HIDE_ROUTED_ADDRESSES | <code>Boolean</code> | Hide routed addresses. |
| users[].HIDE_VISITED_ADDRESSES | <code>Boolean</code> | Hide visited addresses. |
| users[].HIDE_NONFUTURE_ROUTES | <code>Boolean</code> | Hide nonfuture routes. |
| users[].READONLY_USER | <code>Boolean</code> | Readonly user. |
| users[].SHOW_SUSR_ADDR | <code>Boolean</code> | Show sub-user addresses. |
| users[].SHOW_SUSR_ORDERS | <code>Boolean</code> | Show sub-user orders. |
| users[].SHOW_ALL_DRIVERS | <code>Boolean</code> | Show all drivers. |
| users[].SHOW_ALL_VEHICLES | <code>Boolean</code> | Show all vehicles. |
| users[].display_max_routes_future_days | <code>Boolean</code> | Display max routes. |
| users[].vendor_id | <code>Number</code> | Vendoe ID. |
| users[].driving_rate | <code>Number</code> | Driving rate. |
| users[].working_rate | <code>Number</code> | Working rate. |
| users[].mile_rate | <code>Number</code> | Mile rate. |
| users[].idling_rate | <code>Number</code> | Idling rate. |
| users[].timezone | <code>String</code> | Timezone. |
| [options] | <code>Object</code> | Insert options. |
| [options.api_key] | <code>String</code> | User API key. |
| [options.conflicts] | <code>String</code> | Conflict resolving rule. Possible values: 'fail', 'overwrite' and 'skip'. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

