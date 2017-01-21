"use strict"

/**
 * Route4Me Module
 *
 * Index of exported objects
 */

const errors = require("./errors")
const route4me = require("./route4me")

module.exports = route4me
module.exports.Route4Me = route4me
module.exports.Route4MeError = errors.Route4MeError
