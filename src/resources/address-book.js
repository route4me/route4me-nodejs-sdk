"use strict"

const utils           = require("./../utils")

/**
 * AddressBook facility
 *
 * @category AddressBook
 */
class AddressBook {
	/**
	 * Constructor
	 *
	 * @see {@link https://route4me.io/docs/#address-book}
	 * @since 0.1.8
	 * @private
	 *
	 * @param  {RequestManager} requestManager - Request Manager
	 * @return {AddressBook}                   - AddressBook facility
	 */
	constructor(requestManager) {
		this.r = requestManager
	}

	/**
	 * Create a new AddressBook.
	 *
	 * @see {@link https://route4me.io/docs/#create-a-location}
	 * @since 0.1.8
	 *
	 * @param {jsonschema:AddressBook.AddressBook}  data       - Valid AddressBook data.
	 * @param {module:route4me-node~RequestCallback<jsonschema:AddressBook.AddressBook>}
	 *        [callback]
	 */
	create(data, callback) {
		return this.r._makeRequest({
			method: "POST",
			path: "/api.v4/address_book.php",
			body: data,
			validationContext: "AddressBook.AddressBook",
		}, callback)
	}

	/**
	 * GET locations from an address book by a specified list of locations IDs.
	 *
	 * @see {@link https://route4me.io/docs/#get-locations-by-ids}
	 * @since 0.1.8
	 *
	 * @todo TODO: Parse response
	 * @todo TODO: Remove this method in favor of `list` {@link https://github.com/route4me/route4me-nodejs-sdk/issues/41}
	 *
	 * @param {number|string|Array<number>|Array<string>} ids - Address IDs (as number,
	 * string, CSV-separated string, or an array of numbers, or an array of strings).
	 * @param {module:route4me-node~RequestCallback<jsonschema:AddressBook.AddressBookSearchResult>}
	 * [callback]
	 */
	getMany(ids, callback) {
		const _ids = utils.toIntArray(ids)

		return this.r._makeRequest({
			method: "GET",
			path: "/api.v4/address_book.php",
			qs: {
				"address_id": _ids,
			},
			validationContext: "AddressBook.AddressBookSearchResult",
		}, callback)
	}

	/**
	 * GET all locations from a user’s address book.
	 *
	 * @see {@link https://route4me.io/docs/#get-locations}
	 * @since 0.1.8
	 *
	 * @todo TODO: Parse response
	 * @todo TODO: Describe ALL options (in one place, list+search)
	 *
	 * @param {Object} options - List-parameters
	 * @param {module:route4me-node~RequestCallback<jsonschema:AddressBook.AddressBookSearchResult>}
	 * [callback]
	 */
	list(options, callback) {
		return this.search(undefined, options, callback)
	}

	/**
	 * Search an address book location by containing specified text in any
	 * field/defined fields.
	 *
	 * @see {@link https://route4me.io/docs/#get-a-location}
	 * @see {@link https://route4me.io/docs/#location-search}
	 * @since 0.1.8
	 *
	 * @todo TODO: Parse response
	 * @todo TODO: Describe ALL options (in one place, list+search)
	 * @todo TODO: Handle the diffrerent format of the output (when fields are set,
	 * see https://github.com/route4me/route4me-nodejs-sdk/issues/38)
	 *
	 * @param {string} query            - Searched text
	 * @param {Object} options          - List-parameters
	 * @param {number} [options.limit]  - List limit
	 * @param {number} [options.offset] - List offset
	 * @param {module:route4me-node~RequestCallback<jsonschema:AddressBook.AddressBookSearchResult>}
	 * [callback]
	 */
	search(query, options, callback) {
		const qs = {}
		if (null !== query && query !== undefined) {
			qs["query"] = query
		}
		// "query": "dan",
		// "offset": "100",
		// "limit": "15",
		// "fields": "first_name,address_email",
		// "routed": "routed"

		if ("offset" in options) {
			qs["offset"] = options.offset
		}

		if ("limit" in options) {
			qs["limit"] = options.limit
		}

		if ("fields" in options) {
			qs["fields"] = options.fields
		}

		if ("routed" in options && "boolean" === typeof options.routed) {
			qs["display"] = options.routed ? "routed" : "unrouted"
		}

		return this.r._makeRequest({
			method: "GET",
			path: "/api.v4/address_book.php",
			qs,
			validationContext: "AddressBook.AddressBookSearchResult",
		}, callback)
	}

	/**
	 * UPDATE existing address book location parameters.
	 *
	 * @see {@link https://route4me.io/docs/#update-a-location}
	 * @since 0.1.8
	 *
	 * @param {string}  id       - AddressBook item ID
	 * @param {jsonschema:AddressBook.AddressBook}  data  - Valid AddressBook data.
	 * @param {module:route4me-node~RequestCallback<jsonschema:AddressBook.AddressBook>}
	 *        [callback]
	 */
	update(id, data, callback) {
		const d = utils.clone(data)
		d["address_id"] = id

		return this.r._makeRequest({
			method: "PUT",
			path: "/api.v4/address_book.php",
			body: d,
			validationContext: "AddressBook.AddressBook",
		}, callback)
	}

	/**
	 * REMOVE locations from an address book.
	 *
	 * @see {@link https://route4me.io/docs/#remove-locations}
	 * @since 0.1.8
	 *
	 * @todo TODO: There is no schema for the response
	 * @example
	 * SampleResponse = {"status":true}
	 *
	 * @todo TODO: parse the response
	 *
	 * @param {number|string|Array<number>|Array<string>}  ids - locations IDs,
	 * CSV-string OR one ID as string OR one ID as number OR array of strings/numbers
	 * @param {module:route4me-node~RequestCallback<boolean>}
	 *     [callback]
	 */
	remove(ids, callback) {
		const pureIds = utils.toStringArray(ids)

		return this.r._makeRequest({
			method: "DELETE",
			path: "/api.v4/address_book.php",
			body: {
				"address_ids": pureIds,
			},
			validationContext: "AddressBook.RemoveSchema",
		}, callback)
	}
}

module.exports = AddressBook
