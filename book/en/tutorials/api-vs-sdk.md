# API vs SDK

<!-- TODO: move style to JSDOC settings -->
<style>
table {
	border-spacing: 0;
	border-collapse: collapse;
}

table td, table th {
	padding : 0.3em;
	border: 1px solid black;
}
</style>

{% tag1 %}
IN DOC
{% endtag1 %}

There are several differences between Node JS SDK and API methods: several
methods are moved among section. This is a list of such differences.

[API doc](https://route4me.io/docs/)

| API section | API method | Description | Reason | SDK method |
| --- | --- | --- | --- | --- |
| Routes | <a href="https://route4me.io/docs/#get-an-address-from-a-route"> Get an Address from a Route </a> | get an address | Because this method just **gets an entity**. By convention of this SDK, such action is provided by `get` method. | {@link Addresses#get} |
| Routes | <a href="https://route4me.io/docs/#update-a-route"> Update a Route (a) </a> | updates custom data of a route destination | this method **modifies a field of an entity**. By convention of this SDK, such action is provided by `updateXXX` method. | {@link Addresses#updateCustomData} |
| Notes | <a href="https://route4me.io/docs/#get-notes"> Get Notes </a> | To get an address notes, just run with `includeNotes` option | This method can't be in {@link Notes} namespace, because it returns {@link jsonschema:Addresses.Address} entity. | {@link Addresses#get} |
| Tracking | <a href="https://route4me.io/docs/#get-route-tracking-data"> Get Route Tracking Data (a) </a> | Get a device’s last location history. | Actually this method returns a {@link Routes} | {@link Routes#get} |
