"use strict"

/**
 * @module route4me-node
 */

const errors = require("./errors")
const route4me = require("./route4me")

module.exports = route4me
module.exports.Route4Me = route4me
module.exports.Route4MeError = errors.Route4MeError
module.exports.Route4MeApiError = errors.Route4MeApiError
