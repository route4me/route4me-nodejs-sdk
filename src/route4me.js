"use strict"

const debug    = require("debug")("route4me")
const platform = require("platform")

const ActivityFeed    = require("./resources/activity-feed")
const Addresses       = require("./resources/addresses")
const AddressBook     = require("./resources/address-book")
const AvoidanceZones  = require("./resources/avoidance-zones")
const Geocoding       = require("./resources/geocoding")
const Members         = require("./resources/members")
const Notes           = require("./resources/notes")
const Optimizations   = require("./resources/optimizations")
const Orders          = require("./resources/orders")
const Routes          = require("./resources/routes")
const Territories     = require("./resources/territories")
const Tracking        = require("./resources/tracking")
const Vehicles        = require("./resources/vehicles")

const packageJson     = require("./../package.json")  // eslint-disable-line import/no-dynamic-require
const utils           = require("./utils")
const errors          = require("./errors")
const RequestManager  = require("./request-manager")

/**
 * Route4Me main SDK class
 *
 * The main purpose of this class: to provide an access to API-methods and to keep
 * chore and routine in the shadow as long as possible.
 *
 * With `route4me` instance you should get responses from API easy-peasy.
 *
 * Main members of the instanse of `Route4Me` class:
 *
 * * [ActivityFeed  ]{@link ActivityFeed}
 * * [Addresses     ]{@link Addresses}
 * * [AddressBook   ]{@link AddressBook}
 * * [AvoidanceZones]{@link AvoidanceZones}
 * * [Geocoding     ]{@link Geocoding}
 * * [Members       ]{@link Members}
 * * [Notes         ]{@link Notes}
 * * [Optimizations ]{@link Optimizations}
 * * [Orders        ]{@link Orders}
 * * [Routes        ]{@link Routes}
 * * [Territories   ]{@link Territories}
 * * [Tracking      ]{@link Tracking}
 * * [Vehicles      ]{@link Vehicles}
 *
 * Each member corresponds to an bunch of methods, described in API-documentation,
 * but the most methods in this SDK have unified names:
 *
 * * `create` - to create new entity
 * * `get` - to get **one** entity (usually, by ID)
 * * `list` - returns a list of **all** entities (sometimes with `limit` and `offset`)
 * * `update` - allows to edit entity
 * * `remove` - removes/deletes the entity
 * * `search` - obviously: allows to search items by a set of criteria
 *
 * For most use cases it is necessary:
 *
 * 1. Create `route4me` instance (with your API-key)
 * 2. Call the appropriate method
 * 3. Get the result (as JSON object)
 * 4. **PROFIT**
 *
 * @summary Route4Me main SDK class
 *
 * @category Route4Me
 */
class Route4Me {
	/**
	 * Create new API client
	 *
	 * @param  {string}  apiKey API KEY
	 * @param  {object}  [options] Additional options for new instance
	 * @param  {string}  [options.baseUrl="https://route4me.com"] Base URL for sending requests
	 * @param  {ILogger} [options.logger=null]   Logger facility
	 * @param  {boolean|function} [options.promise=false] Use promises instead of
	 * callbacks. Usage:
	 * * `false` means _no promises, use callbacks_;
	 * * `true` means _use global `Promise`_ as promises' constructor;
	 * * `constructor (function)` forces to use explicit Promise library.
	 * See also Examples section of this documentation.
	 *
	 * @param  {module:route4me-node~ValidationCallback} [options.validate=false]
	 * Validator for input and output parameters of the API methods. Set **falsey**
	 * value to skip autovalidation (in favor of manual check).
	 *
	 * @return {Route4Me}                  New API client
	 */
	constructor(apiKey, options) {
		const opt = {}

		// check options

		opt["baseUrl"]  = utils.get(options, "baseUrl", "https://route4me.com")
		opt["logger"]   = utils.get(options, "logger",   utils.noopLogger)
		opt["promise"]  = utils.get(options, "promise",  false)
		opt["validate"] = utils.get(options, "validate", false)

		// TODO: decide, whether this param could be configured
		opt["userAgent"] = `superagent/3.3.2 (${platform.name} ${platform.version}; Route4Me-${platform.name}/${Route4Me.version}) ${platform.description}`

		debug("init", opt)
		debug("version", Route4Me.version)

		if (!apiKey) {
			throw new errors.Route4MeError("'apiKey' is not set")
		}

		const req = new RequestManager(apiKey, opt)

		this._logger = opt["logger"]

		/**
		 * **ActivityFeed** related API calls
		 * @type {ActivityFeed}
		 * @since 0.1.12
		 */
		this.ActivityFeed = new ActivityFeed(req)
		/**
		 * **AddressBook** related API calls
		 * @type {AddressBook}
		 * @since 0.1.8
		 */
		this.AddressBook = new AddressBook(req)
		/**
		 * **Addresses** related API calls
		 * @type {Addresses}
		 * @since 0.1.8
		 */
		this.Addresses = new Addresses(req)
		/**
		 * **AvoidanceZones** related API calls
		 * @type {AvoidanceZones}
		 * @since 0.1.8
		 */
		this.AvoidanceZones = new AvoidanceZones(req)
		/**
		 * **Geocoding** related API calls
		 * @type {Geocoding}
		 * @since 0.1.9
		 */
		this.Geocoding = new Geocoding(req)
		/*
		 * **Members** related API calls
		 * @type {Members}
		 * @since 0.1.8
		 */
		this.Members = new Members(req)
		/**
		 * **Notes** related API calls
		 * @type {Notes}
		 * @since 0.1.9
		 */
		this.Notes = new Notes(req)
		/**
		 * **Optimizations** related API calls
		 * @type {Optimizations}
		 */
		this.Optimizations = new Optimizations(req)
		/**
		 * **Orders** related API calls
		 * @type {Orders}
		 */
		this.Orders = new Orders(req)
		/**
		 * **Routes** related API calls
		 * @type {Routes}
		 * @since 0.1.8
		 */
		this.Routes = new Routes(req)
		/**
		 * **Territories** related API calls
		 * @type {Territories}
		 */
		this.Territories = new Territories(req)
		/**
		 * **Tracking** related API calls
		 * @type {Tracking}
		 */
		this.Tracking = new Tracking(req)
		/**
		 * **Vehicles** related API calls
		 * @type {Vehicles}
		 */
		this.Vehicles = new Vehicles(req)

		this._logger.debug({ msg: "initialized", version: Route4Me.version })
	}

	/**
	 * Version of this API client
	 *
	 * @since 0.1.3
	 *
	 * @return {string} Version
	 * @static
	 * @readonly
	 */
	static get version() {
		return packageJson.version
	}
}

module.exports = Route4Me
