<a id="VehiclesV5" name="VehiclesV5"></a>

## VehiclesV5 ℗

Vehicles facility API v5

**Category**: VehiclesV5  
**Access**: private  
**See**: [https://route4me.io/docs/#vehicles](https://route4me.io/docs/#vehicles)  
**Since**: 1.0.14  

* [VehiclesV5](#VehiclesV5) ℗
    * [new VehiclesV5(requestManager)](#new_VehiclesV5_new)
    * [.create(data, [callback])](#VehiclesV5+create)
    * [.list([options], [callback])](#VehiclesV5+list)
    * [.getVehiclesPaginated([options], [callback])](#VehiclesV5+getVehiclesPaginated)
    * [.get(vehicleId, [callback])](#VehiclesV5+get)
    * [.delete(vehicleId, [callback])](#VehiclesV5+delete)
    * [.update(vehicleId, data, [callback])](#VehiclesV5+update)
    * [.getTrack(vehicleId, [options], [callback])](#VehiclesV5+getTrack)
    * [.assign(data, [callback])](#VehiclesV5+assign)
    * [.getProfiles([options], [callback])](#VehiclesV5+getProfiles)
    * [.createProfile(data, [callback])](#VehiclesV5+createProfile)
    * [.getProfile(profileId, [callback])](#VehiclesV5+getProfile)
    * [.deleteProfile(profileId, [callback])](#VehiclesV5+deleteProfile)
    * [.updateProfile(vehicleId, data, [callback])](#VehiclesV5+updateProfile)
    * [.search(data, [callback])](#VehiclesV5+search)
    * [.execute(data, [callback])](#VehiclesV5+execute)
    * [.getVehicleProfileByLicense(vehicleLicensePlate, [callback])](#VehiclesV5+getVehicleProfileByLicense)
    * [.location(vehicleIds, [callback])](#VehiclesV5+location)
    * [.bulkUpdate(vehicles, [callback])](#VehiclesV5+bulkUpdate)
    * [.bulkDelete(vehicleIds, [callback])](#VehiclesV5+bulkDelete)
    * [.bulkActivate([vehicleIds], [callback])](#VehiclesV5+bulkActivate)
    * [.bulkDeactivate([vehicleIds], [callback])](#VehiclesV5+bulkDeactivate)
    * [.bulkRestore([vehicleIds], [callback])](#VehiclesV5+bulkRestore)
    * [.syncPending(data, [callback])](#VehiclesV5+syncPending)
    * [.jobTrackerStatus(jobId, [callback])](#VehiclesV5+jobTrackerStatus)
    * [.jobTrackerResult(jobId, [callback])](#VehiclesV5+jobTrackerResult)
    * [.listCapacityProfiles([options], [callback])](#VehiclesV5+listCapacityProfiles)
    * [.createCapacityProfiles(data, [callback])](#VehiclesV5+createCapacityProfiles)
    * [.getCapacityProfiles(id, [callback])](#VehiclesV5+getCapacityProfiles)
    * [.deleteCapacityProfiles(id, [callback])](#VehiclesV5+deleteCapacityProfiles)
    * [.updateCapacityProfiles(id, data, [callback])](#VehiclesV5+updateCapacityProfiles)

<a id="new_VehiclesV5_new" name="new_VehiclesV5_new"></a>

### new VehiclesV5(requestManager)

Constructor

**Returns**: [<code>VehiclesV5</code>](#VehiclesV5) - - Vehicles facility  

| Param | Type | Description |
| --- | --- | --- |
| requestManager | <code>RequestManager</code> | Request Manager |

<a id="VehiclesV5+create" name="VehiclesV5+create"></a>

### vehiclesV5.create(data, [callback])

Create a new Vehicle in the user"s account by sending the corresponding
body payload with the Vehicle parameters.
The paramater fuel_type is required in the vehicle creating process.

**See**: [https://route4me.io/docs/#get-vehicles](https://route4me.io/docs/#get-vehicles)  
**Since**: 1.0.14  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Vehicle properties. |
| data.vehicle_id | <code>String</code> | A unique identification 32-char string of the vehicle. |
| data.member_id | <code>Number</code> | An unique identification number of the member. |
| data.is_deleted | <code>Boolean</code> | If true, the vehicle is deleted. |
| data.vehicle_alias | <code>String</code> | Internal name of the vehicle. |
| data.vehicle_vin | <code>String</code> | Vehicle VIN number |
| data.vehicle_reg_state_id | <code>Number</code> | An ID of the state, where vehicle was registered. |
| data.vehicle_reg_country_id | <code>Number</code> | An ID of the country, where vehicle was registered. |
| data.vehicle_license_plate | <code>String</code> | A license plate of the vehicle |
| data.vehicle_type_id | <code>String</code> | Vehicle type ID Possible values:	"sedan", "suv", "pickup_truck", "van", "18wheeler", "cabin", "hatchback", 					"motorcyle", "waste_disposal", "tree_cutting", "bigrig", "cement_mixer", 					"livestock_carrier", "dairy","tractor_trailer" |
| data.timestamp_added | <code>String</code> | When the vehicle was added. |
| data.vehicle_make | <code>String</code> | Vehicle maker brend. Possible values:	"american coleman", "bmw", "chevrolet", "ford", "freightliner", "gmc", 					"hino", "honda", "isuzu", "kenworth", "mack", "mercedes-benz", "mitsubishi", 					"navistar", "nissan", "peterbilt", "renault", "scania", "sterling", "toyota", 					"volvo", "western star" |
| data.vehicle_model_year | <code>Number</code> | A year of the vehicle model. |
| data.vehicle_model | <code>String</code> | A model of the vehicle. |
| data.vehicle_year_acquired | <code>Number</code> | A year of the vehicle acquisition. |
| data.vehicle_cost_new | <code>Number</code> | A cost of the new vehicle. |
| data.purchased_new | <code>Boolean</code> | If true, the vehicle was purchased new. |
| data.license_start_date | <code>String</code> | A start date of the license. |
| data.license_end_date | <code>String</code> | An end date of the license. |
| data.is_operational | <code>Boolean</code> | If true, the vehicle is operational. |
| data.fuel_type | <code>String</code> | A type of the fuel. Possible values:	"unleaded 87", "unleaded 89", "unleaded 91", "unleaded 93", "diesel", 					"electric", "hybrid" |
| data.external_telematics_vehicle_id | <code>Number</code> | External telematics vehicle ID. |
| data.timestamp_removed | <code>Number</code> | When he vehicle was removed. |
| data.vehicle_profile_id | <code>Number</code> | Vehicle profile ID. |
| data.fuel_consumption_city | <code>Number</code> | Fuel consumption in the city area. |
| data.fuel_consumption_highway | <code>Number</code> | Fuel consumption in the highway area. |
| data.fuel_consumption_city_unit | <code>String</code> | Fuel consumption unit in the city area. |
| data.fuel_consumption_highway_unit | <code>String</code> | Fuel consumption unit in the highway area. |
| data.mpg_city | <code>Number</code> | Miles per gallon in the city area. |
| data.mpg_highway | <code>Number</code> | Miles per gallon in the highway area. |
| data.fuel_consumption_city_uf_value | <code>String</code> | Fuel consumption UF value in the city area. |
| data.fuel_consumption_highway_uf_value | <code>String</code> | Fuel consumption UF value in the highway area. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="VehiclesV5+list" name="VehiclesV5+list"></a>

### vehiclesV5.list([options], [callback])

Display the list of Vehicles.

**See**: [https://route4me.io/docs/#get-vehicles](https://route4me.io/docs/#get-vehicles)  
**Since**: 1.0.14  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Request options. |
| [options.page] | <code>Number</code> | <code>1</code> | The requested page. |
| [options.per_page] | <code>Number</code> | <code>100</code> | The number of Vehicles per page. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |  |

<a id="VehiclesV5+getVehiclesPaginated" name="VehiclesV5+getVehiclesPaginated"></a>

### vehiclesV5.getVehiclesPaginated([options], [callback])

Get the paginated list of Vehicles.

**See**: [https://route4me.io/docs/#get-vehicles](https://route4me.io/docs/#get-vehicles)  
**Since**: 1.0.14  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Request options. |
| [options.page] | <code>Number</code> | <code>1</code> | The requested page. |
| [options.per_page] | <code>Number</code> | <code>100</code> | The number of Vehicles per page. |
| [options.order_by] | <code>Array.&lt;String&gt;</code> |  | Sorting field and its sorting direction, e.g.:	[["vehicle_type_id", "asc"], ["vehicle_alias", "desc"]] |
| [options.show] | <code>String</code> | <code>&quot;active&quot;</code> | Choose a scope to get. Possible values:	"pending", "deleted", "all" and "active" |
| [options.search_query] | <code>String</code> |  | Search value. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |  |

<a id="VehiclesV5+get" name="VehiclesV5+get"></a>

### vehiclesV5.get(vehicleId, [callback])

Get the Vehicle by specifying the path parameter ID.

**See**: [https://route4me.io/docs/#get-vehicles](https://route4me.io/docs/#get-vehicles)  
**Since**: 1.0.14  

| Param | Type | Description |
| --- | --- | --- |
| vehicleId | <code>String</code> | Vehicle ID. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="VehiclesV5+delete" name="VehiclesV5+delete"></a>

### vehiclesV5.delete(vehicleId, [callback])

Delete the Vehicle by specifying the path parameter ID.

**See**: [https://route4me.io/docs/#get-vehicles](https://route4me.io/docs/#get-vehicles)  
**Since**: 1.0.14  

| Param | Type | Description |
| --- | --- | --- |
| vehicleId | <code>String</code> | Vehicle ID. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="VehiclesV5+update" name="VehiclesV5+update"></a>

### vehiclesV5.update(vehicleId, data, [callback])

Update the Vehicle by specifying the path parameter ID and by sending
the corresponding body payload with the Vehicle's parameters.

**See**: [https://route4me.io/docs/#get-vehicles](https://route4me.io/docs/#get-vehicles)  
**Since**: 1.0.14  

| Param | Type | Description |
| --- | --- | --- |
| vehicleId | <code>String</code> | Vehicle ID. |
| data | <code>Object</code> | Vehicle properties. |
| data.vehicle_id | <code>String</code> | A unique identification 32-char string of the vehicle. |
| data.member_id | <code>Number</code> | An unique identification number of the member. |
| data.is_deleted | <code>Boolean</code> | If true, the vehicle is deleted. |
| data.vehicle_alias | <code>String</code> | Internal name of the vehicle. |
| data.vehicle_vin | <code>String</code> | Vehicle VIN number |
| data.vehicle_reg_state_id | <code>Number</code> | An ID of the state, where vehicle was registered. |
| data.vehicle_reg_country_id | <code>Number</code> | An ID of the country, where vehicle was registered. |
| data.vehicle_license_plate | <code>String</code> | A license plate of the vehicle |
| data.vehicle_type_id | <code>String</code> | Vehicle type ID Possible values:	"sedan", "suv", "pickup_truck", "van", "18wheeler", "cabin", "hatchback", 					"motorcyle", "waste_disposal", "tree_cutting", "bigrig", "cement_mixer", 					"livestock_carrier", "dairy","tractor_trailer" |
| data.timestamp_added | <code>String</code> | When the vehicle was added. |
| data.vehicle_make | <code>String</code> | Vehicle maker brend. Possible values:	"american coleman", "bmw", "chevrolet", "ford", "freightliner", "gmc", 					"hino", "honda", "isuzu", "kenworth", "mack", "mercedes-benz", "mitsubishi", 					"navistar", "nissan", "peterbilt", "renault", "scania", "sterling", "toyota", 					"volvo", "western star" |
| data.vehicle_model_year | <code>Number</code> | A year of the vehicle model. |
| data.vehicle_model | <code>String</code> | A model of the vehicle. |
| data.vehicle_year_acquired | <code>Number</code> | A year of the vehicle acquisition. |
| data.vehicle_cost_new | <code>Number</code> | A cost of the new vehicle. |
| data.purchased_new | <code>Boolean</code> | If true, the vehicle was purchased new. |
| data.license_start_date | <code>String</code> | A start date of the license. |
| data.license_end_date | <code>String</code> | An end date of the license. |
| data.is_operational | <code>Boolean</code> | If true, the vehicle is operational. |
| data.fuel_type | <code>String</code> | A type of the fuel. Possible values:	"unleaded 87", "unleaded 89", "unleaded 91", "unleaded 93", "diesel", 					"electric", "hybrid" |
| data.external_telematics_vehicle_id | <code>Number</code> | External telematics vehicle ID. |
| data.timestamp_removed | <code>Number</code> | When he vehicle was removed. |
| data.vehicle_profile_id | <code>Number</code> | Vehicle profile ID. |
| data.fuel_consumption_city | <code>Number</code> | Fuel consumption in the city area. |
| data.fuel_consumption_highway | <code>Number</code> | Fuel consumption in the highway area. |
| data.fuel_consumption_city_unit | <code>String</code> | Fuel consumption unit in the city area. |
| data.fuel_consumption_highway_unit | <code>String</code> | Fuel consumption unit in the highway area. |
| data.mpg_city | <code>Number</code> | Miles per gallon in the city area. |
| data.mpg_highway | <code>Number</code> | Miles per gallon in the highway area. |
| data.fuel_consumption_city_uf_value | <code>String</code> | Fuel consumption UF value in the city area. |
| data.fuel_consumption_highway_uf_value | <code>String</code> | Fuel consumption UF value in the highway area. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="VehiclesV5+getTrack" name="VehiclesV5+getTrack"></a>

### vehiclesV5.getTrack(vehicleId, [options], [callback])

Get the Vehicle track by specifying the path parameter ID.

**See**: [https://route4me.io/docs/#get-vehicles](https://route4me.io/docs/#get-vehicles)  
**Since**: 1.0.14  

| Param | Type | Description |
| --- | --- | --- |
| vehicleId | <code>String</code> | Vehicle ID. |
| [options] | <code>Object</code> | Request options. |
| [options.start] | <code>String</code> | Filter by start date. |
| [options.end] | <code>String</code> | Filter by end date. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="VehiclesV5+assign" name="VehiclesV5+assign"></a>

### vehiclesV5.assign(data, [callback])

Temporary assign the vehicle to a member by sending the corresponding body payload.

**See**: [https://route4me.io/docs/#get-vehicles](https://route4me.io/docs/#get-vehicles)  
**Since**: 1.0.14  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Vehicle properties. |
| [data.vehicle_id] | <code>String</code> | A unique identification 32-char string of the vehicle. |
| [data.vehicle_license_plate] | <code>String</code> | A license plate of the vehicle |
| data.assigned_member_id | <code>Number</code> | A unique ID of a member assigned to the vehicle. |
| data.expires_at | <code>Number</code> | When will the assignment of a member to a vehicle expire (Unix timestamp). |
| [data.force-assignment] | <code>Boolean</code> | If true, the temporary assignment of a member to a vehicle will be forced. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="VehiclesV5+getProfiles" name="VehiclesV5+getProfiles"></a>

### vehiclesV5.getProfiles([options], [callback])

Get the list of Vehicle Profiles.

**See**: [https://route4me.io/docs/#get-vehicles](https://route4me.io/docs/#get-vehicles)  
**Since**: 1.0.14  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Request options. |
| [options.with_pagination] | <code>Number</code> | <code>1</code> | If equal to 0, the Vehicle Profiles list is not paginated, otherwise it is paginated. |
| [options.page] | <code>Number</code> | <code>1</code> | The requested page. |
| [options.per_page] | <code>Number</code> | <code>100</code> | The number of Vehicles per page. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |  |

<a id="VehiclesV5+createProfile" name="VehiclesV5+createProfile"></a>

### vehiclesV5.createProfile(data, [callback])

Create a new Vehicle Profile by sending the corresponding body payload with
the Vehicle Profile's parameters.
Note: If the profile is created with is_predefined = 1, you cannot update
or delete it later.

**See**: [https://route4me.io/docs/#get-vehicles](https://route4me.io/docs/#get-vehicles)  
**Since**: 1.0.14  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Profile properties. |
| data.vehicle_profile_id | <code>String</code> | A unique ID of the vehicle profile. |
| data.root_member_id | <code>Number</code> | A unique ID of the root member. |
| data.name | <code>String</code> | The name of a vehicle profile. |
| data.height | <code>Number</code> | The height of a vehicle. |
| data.width | <code>Number</code> | The width of a vehicle. |
| data.length | <code>Number</code> | The length of a vehicle. |
| data.weight | <code>Number</code> | The weight of a vehicle. |
| data.max_weight_per_axle | <code>Number</code> | The maximum weight that can be carrie per vehicle axle. |
| data.created_at | <code>String</code> | When the vehicle profile was created. |
| data.updated_at | <code>String</code> | When the vehicle profile was updated. |
| data.deleted_at | <code>String</code> | When the vehicle profile was deleted. |
| data.fuel_type | <code>String</code> | A type of the fuel. Possible values:	"unleaded 87", "unleaded 89", "unleaded 91", "unleaded 93", "diesel", 					"electric", "hybrid" |
| data.fuel_consumption_city | <code>Number</code> | Average fuel consumption in a city area. |
| data.fuel_consumption_highway | <code>Number</code> | Average fuel consumption in a highway area. |
| data.hazmat_type | <code>String</code> | A hazardous material type the vehicle carry. Possible values:	"general", "explosives", "flammable", "inhalants", "caustic", "radioactive" |
| data.is_predefined | <code>Boolean</code> | If true, the vehicle profile is predefined. Note: When is_predefined = true, a vehicle profile is not updatable or removable. |
| data.is_default | <code>Boolean</code> | If true, the vehicle profile is default. |
| data.height_units | <code>String</code> | The units in which the vehicle height is measured. |
| data.width_units | <code>String</code> | The units in which the vehicle height is measured. |
| data.length_units | <code>String</code> | The units in which the vehicle length is measured. |
| data.weight_units | <code>String</code> | The units in which the vehicle weight is measured. |
| data.max_weight_per_axle_units | <code>String</code> | The units in which the maximum weight per axle of a vehicle is measured. |
| data.fuel_consumption_city_unit | <code>String</code> | The units in which fuel consumption is measured in a city area. |
| data.fuel_consumption_highway_unit | <code>String</code> | The units in which fuel consumption is measured in a highway area. |
| data.height_uf_value | <code>String</code> | User-friendly value of a vehicle's height. |
| data.width_uf_value | <code>String</code> | User-friendly value of a vehicle's width. |
| data.length_uf_value | <code>String</code> | User-friendly value of a vehicle's length. |
| data.weight_uf_value | <code>String</code> | User-friendly value of a vehicle's weight. |
| data.max_weight_per_axle_uf_value | <code>String</code> | User-friendly value of a vehicle's maximum weight per axle. |
| data.fuel_consumption_city_uf_value | <code>String</code> | User-friendly value of a vehicle's fuel consumption in a city area. |
| data.fuel_consumption_highway_uf_value | <code>String</code> | User-friendly value of a vehicle's fuel consumption in a highway area. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="VehiclesV5+getProfile" name="VehiclesV5+getProfile"></a>

### vehiclesV5.getProfile(profileId, [callback])

Get the Vehicle Profile by specifying the path parameter ID.

**See**: [https://route4me.io/docs/#get-vehicles](https://route4me.io/docs/#get-vehicles)  
**Since**: 1.0.14  

| Param | Type | Description |
| --- | --- | --- |
| profileId | <code>Number</code> | Vehicle ID. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="VehiclesV5+deleteProfile" name="VehiclesV5+deleteProfile"></a>

### vehiclesV5.deleteProfile(profileId, [callback])

Delete the Vehicle Profile by specifying the path parameter ID
Note: If the profile is created with is_predefined=1, you cannot update or delete it later.

**See**: [https://route4me.io/docs/#get-vehicles](https://route4me.io/docs/#get-vehicles)  
**Since**: 1.0.14  

| Param | Type | Description |
| --- | --- | --- |
| profileId | <code>Number</code> | Vehicle ID. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="VehiclesV5+updateProfile" name="VehiclesV5+updateProfile"></a>

### vehiclesV5.updateProfile(vehicleId, data, [callback])

Update the Vehicle Profile by specifying the path parameter ID and by sending
the corresponding body payload with the Vehicle Profile's parameters.

**See**: [https://route4me.io/docs/#get-vehicles](https://route4me.io/docs/#get-vehicles)  
**Since**: 1.0.14  

| Param | Type | Description |
| --- | --- | --- |
| vehicleId | <code>String</code> | Vehicle ID. |
| data | <code>Object</code> | Profile properties. |
| data.vehicle_profile_id | <code>String</code> | A unique ID of the vehicle profile. |
| data.root_member_id | <code>Number</code> | A unique ID of the root member. |
| data.name | <code>String</code> | The name of a vehicle profile. |
| data.height | <code>Number</code> | The height of a vehicle. |
| data.width | <code>Number</code> | The width of a vehicle. |
| data.length | <code>Number</code> | The length of a vehicle. |
| data.weight | <code>Number</code> | The weight of a vehicle. |
| data.max_weight_per_axle | <code>Number</code> | The maximum weight that can be carrie per vehicle axle. |
| data.created_at | <code>String</code> | When the vehicle profile was created. |
| data.updated_at | <code>String</code> | When the vehicle profile was updated. |
| data.deleted_at | <code>String</code> | When the vehicle profile was deleted. |
| data.fuel_type | <code>String</code> | A type of the fuel. Possible values:	"unleaded 87", "unleaded 89", "unleaded 91", "unleaded 93", "diesel", 					"electric", "hybrid" |
| data.fuel_consumption_city | <code>Number</code> | Average fuel consumption in a city area. |
| data.fuel_consumption_highway | <code>Number</code> | Average fuel consumption in a highway area. |
| data.hazmat_type | <code>String</code> | A hazardous material type the vehicle carry. Possible values:	"general", "explosives", "flammable", "inhalants", "caustic", "radioactive" |
| data.is_predefined | <code>Boolean</code> | If true, the vehicle profile is predefined. Note: When is_predefined = true, a vehicle profile is not updatable or removable. |
| data.is_default | <code>Boolean</code> | If true, the vehicle profile is default. |
| data.height_units | <code>String</code> | The units in which the vehicle height is measured. |
| data.width_units | <code>String</code> | The units in which the vehicle height is measured. |
| data.length_units | <code>String</code> | The units in which the vehicle length is measured. |
| data.weight_units | <code>String</code> | The units in which the vehicle weight is measured. |
| data.max_weight_per_axle_units | <code>String</code> | The units in which the maximum weight per axle of a vehicle is measured. |
| data.fuel_consumption_city_unit | <code>String</code> | The units in which fuel consumption is measured in a city area. |
| data.fuel_consumption_highway_unit | <code>String</code> | The units in which fuel consumption is measured in a highway area. |
| data.height_uf_value | <code>String</code> | User-friendly value of a vehicle's height. |
| data.width_uf_value | <code>String</code> | User-friendly value of a vehicle's width. |
| data.length_uf_value | <code>String</code> | User-friendly value of a vehicle's length. |
| data.weight_uf_value | <code>String</code> | User-friendly value of a vehicle's weight. |
| data.max_weight_per_axle_uf_value | <code>String</code> | User-friendly value of a vehicle's maximum weight per axle. |
| data.fuel_consumption_city_uf_value | <code>String</code> | User-friendly value of a vehicle's fuel consumption in a city area. |
| data.fuel_consumption_highway_uf_value | <code>String</code> | User-friendly value of a vehicle's fuel consumption in a highway area. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="VehiclesV5+search" name="VehiclesV5+search"></a>

### vehiclesV5.search(data, [callback])

Search for the Vehicle by sending the corresponding body payload
with Vehicles ids and location.

**See**: [https://route4me.io/docs/#get-vehicles](https://route4me.io/docs/#get-vehicles)  
**Since**: 1.0.14  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Vehicle properties. |
| data.vehicle_ids | <code>Array.&lt;String&gt;</code> | An array of the vehicle IDs. |
| data.lat | <code>Number</code> | Latitude |
| data.lng | <code>Number</code> | Longitude |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="VehiclesV5+execute" name="VehiclesV5+execute"></a>

### vehiclesV5.execute(data, [callback])

Execute the Vehicle's Order by sending the corresponding body payload with
the corresponding  location, and Vehicle ID.

**See**: [https://route4me.io/docs/#get-vehicles](https://route4me.io/docs/#get-vehicles)  
**Since**: 1.0.14  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Vehicle properties. |
| data.vehicle_id | <code>String</code> | A unique identification 32-char string of the vehicle. |
| data.lat | <code>Number</code> | Latitude |
| data.lng | <code>Number</code> | Longitude |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="VehiclesV5+getVehicleProfileByLicense" name="VehiclesV5+getVehicleProfileByLicense"></a>

### vehiclesV5.getVehicleProfileByLicense(vehicleLicensePlate, [callback])

Get the Vehicle Profile by license plate.

**See**: [https://route4me.io/docs/#get-vehicles](https://route4me.io/docs/#get-vehicles)  
**Since**: 1.0.14  

| Param | Type | Description |
| --- | --- | --- |
| vehicleLicensePlate | <code>String</code> | A license plate of the vehicle |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="VehiclesV5+location" name="VehiclesV5+location"></a>

### vehiclesV5.location(vehicleIds, [callback])

Get the latest know vehicle's locations.

**See**: [https://route4me.io/docs/#get-vehicles](https://route4me.io/docs/#get-vehicles)  
**Since**: 1.0.14  

| Param | Type | Description |
| --- | --- | --- |
| vehicleIds | <code>Array.&lt;String&gt;</code> | Filter vehicles by ids. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="VehiclesV5+bulkUpdate" name="VehiclesV5+bulkUpdate"></a>

### vehiclesV5.bulkUpdate(vehicles, [callback])

Update the Vehicle list asynchronously by sending the corresponding body payload
with the Vehicles list with their parameters.

**See**: [https://route4me.io/docs/#get-vehicles](https://route4me.io/docs/#get-vehicles)  
**Since**: 1.0.14  

| Param | Type | Description |
| --- | --- | --- |
| vehicles | <code>Array.&lt;Object&gt;</code> | Vehicle properties. |
| vehicles.vehicle_id | <code>String</code> | A unique identification 32-char string of the vehicle. |
| vehicles.vehicle_alias | <code>String</code> | Internal name of the vehicle. |
| vehicles.vehicle_vin | <code>String</code> | Vehicle VIN number |
| vehicles.vehicle_reg_state_id | <code>Number</code> | An ID of the state, where vehicle was registered. |
| vehicles.vehicle_reg_country_id | <code>Number</code> | An ID of the country, where vehicle was registered. |
| vehicles.vehicle_license_plate | <code>String</code> | A license plate of the vehicle |
| vehicles.vehicle_type_id | <code>String</code> | Vehicle type ID Possible values:	"sedan", "suv", "pickup_truck", "van", "18wheeler", "cabin", "hatchback", 					"motorcyle", "waste_disposal", "tree_cutting", "bigrig", "cement_mixer", 					"livestock_carrier", "dairy","tractor_trailer" |
| vehicles.vehicle_make | <code>String</code> | Vehicle maker brend. Possible values:	"american coleman", "bmw", "chevrolet", "ford", "freightliner", "gmc", 					"hino", "honda", "isuzu", "kenworth", "mack", "mercedes-benz", "mitsubishi", 					"navistar", "nissan", "peterbilt", "renault", "scania", "sterling", "toyota", 					"volvo", "western star" |
| vehicles.vehicle_model_year | <code>Number</code> | A year of the vehicle model. |
| vehicles.vehicle_model | <code>String</code> | A model of the vehicle. |
| vehicles.vehicle_year_acquired | <code>Number</code> | A year of the vehicle acquisition. |
| vehicles.fuel_type | <code>String</code> | A type of the fuel. Possible values:	"unleaded 87", "unleaded 89", "unleaded 91", "unleaded 93", "diesel", 					"electric", "hybrid" |
| vehicles.vehicle_profile_id | <code>Number</code> | Vehicle profile ID. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="VehiclesV5+bulkDelete" name="VehiclesV5+bulkDelete"></a>

### vehiclesV5.bulkDelete(vehicleIds, [callback])

Delete the Vehicles from the list of their ids asynchronously.

**See**: [https://route4me.io/docs/#get-vehicles](https://route4me.io/docs/#get-vehicles)  
**Since**: 1.0.14  

| Param | Type | Description |
| --- | --- | --- |
| vehicleIds | <code>Array.&lt;String&gt;</code> | Vehicle IDs to delete. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="VehiclesV5+bulkActivate" name="VehiclesV5+bulkActivate"></a>

### vehiclesV5.bulkActivate([vehicleIds], [callback])

Activate the Vehicles from the list of their ids asynchronously.

**See**: [https://route4me.io/docs/#get-vehicles](https://route4me.io/docs/#get-vehicles)  
**Since**: 1.0.14  

| Param | Type | Description |
| --- | --- | --- |
| [vehicleIds] | <code>Array.&lt;String&gt;</code> | Array of the vehicle ids to activate. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="VehiclesV5+bulkDeactivate" name="VehiclesV5+bulkDeactivate"></a>

### vehiclesV5.bulkDeactivate([vehicleIds], [callback])

Deactivate the Vehicles from the list of their ids asynchronously.

**See**: [https://route4me.io/docs/#get-vehicles](https://route4me.io/docs/#get-vehicles)  
**Since**: 1.0.14  

| Param | Type | Description |
| --- | --- | --- |
| [vehicleIds] | <code>Array.&lt;String&gt;</code> | Array of the vehicle ids to deactivate. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="VehiclesV5+bulkRestore" name="VehiclesV5+bulkRestore"></a>

### vehiclesV5.bulkRestore([vehicleIds], [callback])

Restore the Vehicles from the list of their ids asynchronously.

**See**: [https://route4me.io/docs/#get-vehicles](https://route4me.io/docs/#get-vehicles)  
**Since**: 1.0.14  

| Param | Type | Description |
| --- | --- | --- |
| [vehicleIds] | <code>Array.&lt;String&gt;</code> | Array of the vehicle ids to restore. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="VehiclesV5+syncPending" name="VehiclesV5+syncPending"></a>

### vehiclesV5.syncPending(data, [callback])

Sync a Pending Vehicle from Telematics.
Sync the Vehicle by sending the corresponding body payload with the Vehicle's parameters
and by specifiying `vehicle_alias`, `r4m_telematics_gateway_connection_id`
and `r4m_telematics_gateway_vehicle_id` in this body payload.

**See**: [https://route4me.io/docs/#get-vehicles](https://route4me.io/docs/#get-vehicles)  
**Since**: 1.0.14  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Vehicle properties. |
| data.vehicle_alias | <code>String</code> | Internal name of the vehicle. |
| data.vehicle_vin | <code>String</code> | Vehicle VIN number |
| data.vehicle_reg_state_id | <code>Number</code> | An ID of the state, where vehicle was registered. |
| data.vehicle_reg_country_id | <code>Number</code> | An ID of the country, where vehicle was registered. |
| data.vehicle_license_plate | <code>String</code> | A license plate of the vehicle |
| data.vehicle_type_id | <code>String</code> | Vehicle type ID Possible values:	"sedan", "suv", "pickup_truck", "van", "18wheeler", "cabin", "hatchback", 					"motorcyle", "waste_disposal", "tree_cutting", "bigrig", "cement_mixer", 					"livestock_carrier", "dairy","tractor_trailer" |
| data.vehicle_make | <code>String</code> | Vehicle maker brend. Possible values:	"american coleman", "bmw", "chevrolet", "ford", "freightliner", "gmc", 					"hino", "honda", "isuzu", "kenworth", "mack", "mercedes-benz", "mitsubishi", 					"navistar", "nissan", "peterbilt", "renault", "scania", "sterling", "toyota", 					"volvo", "western star" |
| data.vehicle_model_year | <code>Number</code> | A year of the vehicle model. |
| data.vehicle_model | <code>String</code> | A model of the vehicle. |
| data.vehicle_year_acquired | <code>Number</code> | A year of the vehicle acquisition. |
| data.fuel_type | <code>String</code> | A type of the fuel. Possible values:	"unleaded 87", "unleaded 89", "unleaded 91", "unleaded 93", "diesel", 					"electric", "hybrid" |
| data.external_telematics_vehicle_id | <code>Number</code> | External telematics vehicle ID. |
| data.r4m_telematics_gateway_connection_id | <code>Number</code> | A unique ID of the Route4Me telematics gateway connection. |
| data.r4m_telematics_gateway_vehicle_id | <code>Number</code> | A unique ID of the Route4Me telematics gateway vehicle. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="VehiclesV5+jobTrackerStatus" name="VehiclesV5+jobTrackerStatus"></a>

### vehiclesV5.jobTrackerStatus(jobId, [callback])

View Job Tracker Status.

**See**: [https://route4me.io/docs/#get-vehicles](https://route4me.io/docs/#get-vehicles)  
**Since**: 1.0.14  

| Param | Type | Description |
| --- | --- | --- |
| jobId | <code>String</code> | Current Job ID.. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="VehiclesV5+jobTrackerResult" name="VehiclesV5+jobTrackerResult"></a>

### vehiclesV5.jobTrackerResult(jobId, [callback])

View Job Tracker Result.

**See**: [https://route4me.io/docs/#get-vehicles](https://route4me.io/docs/#get-vehicles)  
**Since**: 1.0.14  

| Param | Type | Description |
| --- | --- | --- |
| jobId | <code>String</code> | Current Job ID.. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="VehiclesV5+listCapacityProfiles" name="VehiclesV5+listCapacityProfiles"></a>

### vehiclesV5.listCapacityProfiles([options], [callback])

List all the Vehicle Capacity Profiles.
Filtering Data: Send Vehicle Capacity Profile attribute's name with
the corresponding value, e.g. max_volume = 99.99

**See**: [https://route4me.io/docs/#get-vehicles](https://route4me.io/docs/#get-vehicles)  
**Since**: 1.0.14  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Request options. |
| [options.mergePagesParam] | <code>Boolean</code> | <code>false</code> | Paginate all the data into one page only. |
| [options.page] | <code>Number</code> | <code>1</code> | The requested page. |
| [options.per_page] | <code>Number</code> | <code>100</code> | The number of Vehicles per page. |
| [options.order_by] | <code>Array.&lt;String&gt;</code> |  | Sorting field and its sorting direction, e.g.:	[["max_volume", "asc"], ["max_revenue", "desc"]] |
| [options.filters] | <code>String</code> |  | Search value. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |  |

<a id="VehiclesV5+createCapacityProfiles" name="VehiclesV5+createCapacityProfiles"></a>

### vehiclesV5.createCapacityProfiles(data, [callback])

Create a new Vehicle Capacity Profile.

**See**: [https://route4me.io/docs/#get-vehicles](https://route4me.io/docs/#get-vehicles)  
**Since**: 1.0.14  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Capacity profile properties. |
| data.vehicle_capacity_profile_id | <code>Number</code> | A unique ID of a vehicle capacity profile. |
| data.root_member_id | <code>Number</code> | A unique ID of the root member. |
| data.name | <code>string</code> | The name of a vehicle capacity profile. |
| data.max_volume | <code>Number</code> | The maximum volume a veicle can carry. |
| data.max_weight | <code>Number</code> | The maximum weight a vehicle can carry. |
| data.max_items_number | <code>Number</code> | The maximum number of items a vehicle can carry. |
| data.max_revenue | <code>Number</code> | The maximum revenue an owner company can gain from a vehicle. |
| data.max_volume_unit | <code>String</code> | A unit in which maximum volume is measured. |
| data.max_weight_unit | <code>String</code> | A unit in which maximum weight is measured. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="VehiclesV5+getCapacityProfiles" name="VehiclesV5+getCapacityProfiles"></a>

### vehiclesV5.getCapacityProfiles(id, [callback])

Get a Vehicle Capacity Profile by its ID.

**See**: [https://route4me.io/docs/#get-vehicles](https://route4me.io/docs/#get-vehicles)  
**Since**: 1.0.14  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>Number</code> | Vehicle Capacity Profile ID. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="VehiclesV5+deleteCapacityProfiles" name="VehiclesV5+deleteCapacityProfiles"></a>

### vehiclesV5.deleteCapacityProfiles(id, [callback])

Delete the Vehicle Capacity Profile by its ID.

**See**: [https://route4me.io/docs/#get-vehicles](https://route4me.io/docs/#get-vehicles)  
**Since**: 1.0.14  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>Number</code> | Vehicle Capacity Profile ID. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

<a id="VehiclesV5+updateCapacityProfiles" name="VehiclesV5+updateCapacityProfiles"></a>

### vehiclesV5.updateCapacityProfiles(id, data, [callback])

Update the Vehicle Capacity Profile by its ID.

**See**: [https://route4me.io/docs/#get-vehicles](https://route4me.io/docs/#get-vehicles)  
**Since**: 1.0.14  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>Number</code> | Vehicle Capacity Profile ID. |
| data | <code>Object</code> | Capacity profile properties. |
| data.vehicle_capacity_profile_id | <code>Number</code> | A unique ID of a vehicle capacity profile. |
| data.root_member_id | <code>Number</code> | A unique ID of the root member. |
| data.name | <code>Number</code> | The name of a vehicle capacity profile. |
| data.max_volume | <code>Number</code> | The maximum volume a veicle can carry. |
| data.max_weight | <code>Number</code> | The maximum weight a vehicle can carry. |
| data.max_items_number | <code>Number</code> | The maximum number of items a vehicle can carry. |
| data.max_revenue | <code>Number</code> | The maximum revenue an owner company can gain from a vehicle. |
| data.created_at | <code>String</code> | When the vehicle capacity profile was created. |
| data.updated_at | <code>String</code> | When the vehicle capacity profile was updated. |
| data.deleted_at | <code>String</code> | When the vehicle capacity profile was deleted. |
| data.max_volume_unit | <code>String</code> | A unit in which maximum volume is measured. |
| data.max_weight_unit | <code>String</code> | A unit in which maximum weight is measured. |
| [callback] | <code>module:route4me-node~RequestCallback</code> |  |

