<a id="Members" name="Members"></a>

## Members

Members facility

**Category**: Members  

* [Members](#Members)
    * [new Members(requestManager)](#new_Members_new)
    * [.create(data, [callback])](#Members+create)
    * [.list([callback])](#Members+list)
    * [.get(id, [callback])](#Members+get)
    * [.update(id, data, [callback])](#Members+update)
    * [.remove(id, [callback])](#Members+remove)
    * [.authenticate(email, password, [callback])](#Members+authenticate)
    * [.validateSession(id, sessionId, [callback])](#Members+validateSession)
    * [.registerAccount(data, [callback])](#Members+registerAccount)

<a id="new_Members_new" name="new_Members_new"></a>

### new Members(requestManager)

Constructor


| Param | Type | Description |
| --- | --- | --- |
| requestManager | <code>RequestManager</code> | Request Manager |

<a id="Members+create" name="Members+create"></a>

### members.create(data, [callback])

Create an User

**See**: [https://route4me.io/docs/#create-an-user](https://route4me.io/docs/#create-an-user)  
**Since**: 0.1.9  
**Todo**

- [ ] TODO: validate INPUT parameter with **custom** schema


| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Parameters of new user |
| data.hideRoutedAddresses | <code>string</code> | user parameter |
| data.phone | <code>string</code> | user parameter |
| data.zipcode | <code>string</code> | user parameter |
| data.routeCount | <code>number</code> | user parameter |
| data.email | <code>string</code> | user parameter |
| data.type | <code>string</code> | user parameter |
| data.dateOfBirth | <code>string</code> | user parameter |
| data.firstName | <code>string</code> | user parameter |
| data.password | <code>string</code> | user parameter |
| data.lastName | <code>string</code> | user parameter |
| data.readonlyUser | <code>boolean</code> | user parameter |
| data.hideVisitedAddresses | <code>boolean</code> | user parameter |
| data.hideRoutedAddresses | <code>boolean</code> | user parameter |
| data.hideNonfutureRoutes | <code>boolean</code> | user parameter |
| data.showAllVehicles | <code>boolean</code> | user parameter |
| data.showAllDrivers | <code>boolean</code> | user parameter |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Members.Member&gt;</code> |  |

**Example** *(Sample input)*  
```javascript
{
	"firstName": "Clay",
	"lastName": "Abraham",
	"phone": "571-259-5939",
	"zipcode": "22102",
	"routeCount": null,
	"email": "skrynkovskyy+newdispatcher@gmail.com",
	"type": "SUB_ACCOUNT_DISPATCHER",
	"dateOfBirth": 2010,
	"password": "123456",
	"readonlyUser": false,
	"hideVisitedAddresses": false,
	"hideRoutedAddresses": false,
	"hideNonfutureRoutes": false,
	"showAllVehicles": false,
	"showAllDrivers": false,
}
```
<a id="Members+list" name="Members+list"></a>

### members.list([callback])

Member’s Sub-users

View existing sub-users in a member’s account.

**See**: [https://route4me.io/docs/#members-sub-users](https://route4me.io/docs/#members-sub-users)  
**Since**: 0.1.9  
**Todo**

- [ ] TODO: there is no schema for response


| Param | Type |
| --- | --- |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Members.Members&gt;</code> | 

<a id="Members+get" name="Members+get"></a>

### members.get(id, [callback])

Get an User Details

**See**: [https://route4me.io/docs/#get-an-user-details](https://route4me.io/docs/#get-an-user-details)  
**Since**: 0.1.9  
**Todo**

- [ ] TODO: reformat output


| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Member ID |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Members.Member&gt;</code> |  |

<a id="Members+update" name="Members+update"></a>

### members.update(id, data, [callback])

Update an existing user.

**See**: [https://route4me.io/docs/#update-an-user](https://route4me.io/docs/#update-an-user)  
**Since**: 0.1.9  
**Todo**

- [ ] TODO: validate INPUT parameter with **custom** schema
- [ ] TODO: reformat output


| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Member ID |
| data | <code>Object</code> | Parameters of new user |
| data.hideRoutedAddresses | <code>string</code> | user parameter |
| data.phone | <code>string</code> | user parameter |
| data.zipcode | <code>string</code> | user parameter |
| data.routeCount | <code>number</code> | user parameter |
| data.email | <code>string</code> | user parameter |
| data.type | <code>string</code> | user parameter |
| data.dateOfBirth | <code>string</code> | user parameter |
| data.firstName | <code>string</code> | user parameter |
| data.password | <code>string</code> | user parameter |
| data.lastName | <code>string</code> | user parameter |
| data.readonlyUser | <code>boolean</code> | user parameter |
| data.hideVisitedAddresses | <code>boolean</code> | user parameter |
| data.hideRoutedAddresses | <code>boolean</code> | user parameter |
| data.hideNonfutureRoutes | <code>boolean</code> | user parameter |
| data.showAllVehicles | <code>boolean</code> | user parameter |
| data.showAllDrivers | <code>boolean</code> | user parameter |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Members.Member&gt;</code> |  |

**Example** *(Sample input)*  
```javascript
{
	"firstName": "Clay",
	"lastName": "Abraham",
	"phone": "571-259-5939",
	"zipcode": "22102",
	"routeCount": null,
	"email": "skrynkovskyy+newdispatcher@gmail.com",
	"type": "SUB_ACCOUNT_DISPATCHER",
	"dateOfBirth": 2010,
	"password": "123456",
	"readonlyUser": false,
	"hideVisitedAddresses": false,
	"hideRoutedAddresses": false,
	"hideNonfutureRoutes": false,
	"showAllVehicles": false,
	"showAllDrivers": false,
}
```
<a id="Members+remove" name="Members+remove"></a>

### members.remove(id, [callback])

Remove existing user from a member’s account.

**See**: [https://route4me.io/docs/#remove-an-user](https://route4me.io/docs/#remove-an-user)  
**Since**: 0.1.9  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Member ID |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Members.Member&gt;</code> |  |

<a id="Members+authenticate" name="Members+authenticate"></a>

### members.authenticate(email, password, [callback])

Authentication of a user with an email and password.

**See**: [https://route4me.io/docs/#authentication-aa](https://route4me.io/docs/#authentication-aa)  
**Since**: 0.1.9  
**Todo**

- [ ] TODO: reformat output


| Param | Type | Description |
| --- | --- | --- |
| email | <code>string</code> | Email of an user |
| password | <code>string</code> | Password |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Members.Member&gt;</code> |  |

<a id="Members+validateSession" name="Members+validateSession"></a>

### members.validateSession(id, sessionId, [callback])

Validate a Session

Check if a session is valid.

**See**: [https://route4me.io/docs/#validate-a-session](https://route4me.io/docs/#validate-a-session)  
**Since**: 0.1.9  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Member ID |
| sessionId | <code>string</code> | Session ID |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;number&gt;</code> |  |

<a id="Members+registerAccount" name="Members+registerAccount"></a>

### members.registerAccount(data, [callback])

Registration of a new account.

**See**: [https://route4me.io/docs/#register-an-account](https://route4me.io/docs/#register-an-account)  
**Since**: 0.1.9  
**Todo**

- [ ] TODO: reformat output


| Param | Type | Description |
| --- | --- | --- |
| data | <code>string</code> | Account parameters |
| data.accountPlan | <code>string</code> | Account parameter |
| data.industry | <code>string</code> | Account parameter |
| data.firstName | <code>string</code> | Account parameter |
| data.lastName | <code>string</code> | Account parameter |
| data.email | <code>string</code> | Account parameter |
| data.deviceType | <code>string</code> | Account parameter |
| data.password | <code>string</code> | Account parameter |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Members.Account&gt;</code> |  |

