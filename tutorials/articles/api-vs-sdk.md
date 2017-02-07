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
			<th><a href="https://route4me.io/docs/#get-an-address-from-a-route">
				Get an Address from a Route
			</a></th>
			<td>get an address</td>
			<td>{@link Addresses#get}</td>
		</tr>

		<tr>
			<th>Routes</th>
			<th><a href="https://route4me.io/docs/#update-a-route">
				Update a Route (a)
			</a></th>
			<td>updates custom data of a route destination</td>
			<td>{@link Addresses#updateCustomData}</td>
		</tr>

		<tr>
			<th>Notes</th>
			<th><a href="https://route4me.io/docs/#get-notes">
				Get Notes
			</a></th>
			<td>To get an address notes, just run with `includeNotes` option</td>
			<td>{@link Addresses#get}</td>
		</tr>

		<tr>
			<th>Tracking</th>
			<th><a href="https://route4me.io/docs/#get-route-tracking-data">
				Get Route Tracking Data (a)
			</a></th>
			<td>Get a device’s last location history.</td>
			<td>{@link Routes#get}</td>
		</tr>

	</tbody>
</table>

