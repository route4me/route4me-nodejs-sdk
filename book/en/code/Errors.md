## Classes

<table>
  <thead>
    <tr>
      <th>Global</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td><a href="#Route4MeError">Route4MeError</a></td>
    <td><p>The base type for all error-objects of this SDK</p>
</td>
    </tr>
<tr>
    <td><a href="#Route4MeApiError">Route4MeApiError</a></td>
    <td><p>Error received from the API-server</p>
</td>
    </tr>
<tr>
    <td><a href="#Route4MeValidationError">Route4MeValidationError</a></td>
    <td><p>Error occured during internal validation</p>
</td>
    </tr>
</tbody>
</table>

<a name="Route4MeError"></a>

## Route4MeError
The base type for all error-objects of this SDK

**Kind**: global class  
**Category**: Errors  
<a name="new_Route4MeError_new"></a>

### new Route4MeError(msg, innerError)
Create Route4MeError


| Param | Type | Description |
| --- | --- | --- |
| msg | <code>string</code> | [description] |
| innerError | <code>Error</code> | [description] |

<a name="Route4MeApiError"></a>

## Route4MeApiError
Error received from the API-server

**Kind**: global class  
**Category**: Errors  
<a name="new_Route4MeApiError_new"></a>

### new Route4MeApiError(msg, res, innerError)
Create Route4MeApiError


| Param | Type | Description |
| --- | --- | --- |
| msg | <code>string</code> | [description] |
| res | <code>Object</code> | [description] |
| innerError | <code>Error</code> | [description] |

<a name="Route4MeValidationError"></a>

## Route4MeValidationError
Error occured during internal validation

**Kind**: global class  
**Category**: Errors  

* [Route4MeValidationError](#Route4MeValidationError)
    * [new Route4MeValidationError(msg, data, innerError)](#new_Route4MeValidationError_new)
    * [.data](#Route4MeValidationError+data) : <code>\*</code>

<a name="new_Route4MeValidationError_new"></a>

### new Route4MeValidationError(msg, data, innerError)
Create Route4MeValidationError


| Param | Type | Description |
| --- | --- | --- |
| msg | <code>string</code> | Message |
| data | <code>\*</code> | Data under consideration |
| innerError | <code>Error</code> | Error, caused this error |

<a name="Route4MeValidationError+data"></a>

### route4MeValidationError.data : <code>\*</code>
Data under consideration

**Kind**: instance property of <code>[Route4MeValidationError](#Route4MeValidationError)</code>  
**documentation generated on Mon, 20 Feb 2017 21:17:16 GMT**
