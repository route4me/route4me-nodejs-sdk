"use strict"

const errors = require("./errors")
const Route4Me = require("./route4me")

/**
 * @module route4me-node
 * @type {Route4Me}
 */
module.exports = Route4Me

/**
 * @type {Route4Me}
 */
module.exports.Route4Me = Route4Me
/**
 * @type {Route4MeError}
 */
module.exports.Route4MeError = errors.Route4MeError
/**
 * @type {Route4MeApiError}
 */
module.exports.Route4MeApiError = errors.Route4MeApiError

/**
 * API-response callback
 *
 * @callback RequestCallback
 * @private
 * @param {Error}   err    Error (if ocurred)
 * @param {Object} [res]   Value returned by API (on success)
 */
