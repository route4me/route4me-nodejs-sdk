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

There are several differences between Node JS SDK and API methods: several
methods are moved among section. This is a list of such differences.

[API doc](https://route4me.io/docs/)

<table>
	<thead>
		<tr>
			<th>API section</th>
			<th>API method</th>
			<th>Description</th>
			<th>SDK method</th>
	</thead>
	<tbody>
		<tr>
			<th>Routes</th>
			<th>Update a Route (a)</th>
			<td>updates custom data of a route destination</td>
			<td>{@link Addresses#updateCustomData}</td>
		</tr>

		<tr>
			<th>Tracking</th>
			<th>Get Route Tracking Data (a)</th>
			<td>Get a device’s last location history.</td>
			<td>{@link Routes#get}</td>
		</tr>

	</tbody>
</table>

