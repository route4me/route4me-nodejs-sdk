<a id="Geocoding" name="Geocoding"></a>

## Geocoding

Geocoding facility

**Category**: Geocoding  

* [Geocoding](#Geocoding)
    * [new Geocoding(requestManager)](#new_Geocoding_new)
    * [.forward(address, [callback])](#Geocoding+forward)
    * [.reverse(latitude, longitude, [callback])](#Geocoding+reverse)
    * ~~[.rapidGet(id, [callback])](#Geocoding+rapidGet)~~
    * ~~[.rapidSearch(criteria, options, [callback])](#Geocoding+rapidSearch)~~

<a id="new_Geocoding_new" name="new_Geocoding_new"></a>

### new Geocoding(requestManager)

Constructor


| Param | Type | Description |
| --- | --- | --- |
| requestManager | <code>RequestManager</code> | Request Manager |

<a id="Geocoding+forward" name="Geocoding+forward"></a>

### geocoding.forward(address, [callback])

Forward Geocode Address

Forward geocoding is the process of converting place name information
into latitude and longitude values.

**See**: [https://route4me.io/docs/#forward-geocode-address](https://route4me.io/docs/#forward-geocode-address)  
**Since**: 0.1.9  
**Todo**

- [ ] TODO: method-conflict. API suggest to use "POST", SDK uses "GET"


| Param | Type | Description |
| --- | --- | --- |
| address | <code>string</code> | Address to `geocode` |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Geocoding.Forward&gt;</code> |  |

<a id="Geocoding+reverse" name="Geocoding+reverse"></a>

### geocoding.reverse(latitude, longitude, [callback])

Reverse Geocode Address

With the reverse geocoding you can retrieve an address name from a geographical location
point (latitude, longitude). Using this method, you can get the nearest locations
to a specific address name. You can also get the larger scale objects (such as street
addresses, places, neighbourhoods, county, state or country) which include a specified
address.

**See**: [https://route4me.io/docs/#reverse-geocode-address](https://route4me.io/docs/#reverse-geocode-address)  
**Since**: 0.1.9  
**Todo**

- [ ] TODO: method-conflict. API suggest to use "POST", SDK uses "GET"


| Param | Type | Description |
| --- | --- | --- |
| latitude | <code>number</code> | Latitude of the geographic location |
| longitude | <code>number</code> | Longitude of the geographic location |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Geocoding.Reverse&gt;</code> |  |

<a id="Geocoding+rapidGet" name="Geocoding+rapidGet"></a>

### ~~geocoding.rapidGet(id, [callback])~~

***Deprecated***

Rapid Address Search by ID

Single address geocoding refers to the process of getting a geographic
address by address name sent with HTTP GET data.

**See**: [https://route4me.io/docs/#rapid-address-search](https://route4me.io/docs/#rapid-address-search)  
**Since**: 0.1.9  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Sequential number in addresses list. |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Geocoding.Rapid&gt;</code> |  |

<a id="Geocoding+rapidSearch" name="Geocoding+rapidSearch"></a>

### ~~geocoding.rapidSearch(criteria, options, [callback])~~

***Deprecated***

Rapid Address Search

**See**: [https://route4me.io/docs/#rapid-address-search](https://route4me.io/docs/#rapid-address-search)  
**Since**: 0.1.9  

| Param | Type | Description |
| --- | --- | --- |
| criteria | <code>Object</code> | Search criterias, such as `zipcode`, `house number` and other |
| [criteria.zipCode] | <code>number</code> &#124; <code>string</code> | Zip code of the area |
| [criteria.houseNumber] | <code>number</code> &#124; <code>string</code> | House number |
| options | <code>Object</code> | Search parameters |
| [options.offset] | <code>number</code> | Start search position |
| [options.limit] | <code>number</code> | Search results limitation |
| [callback] | <code>module:route4me-node~RequestCallback.&lt;jsonschema:Geocoding.Rapid&gt;</code> |  |

