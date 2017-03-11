"use strict"

const path = require("path")
const chai = require("chai")
const chai_jsonschema = require("chai-json-schema")

chai.use(chai_jsonschema)
// Validate multiple errors for one assert
chai.tv4.multiple = true

global.packageRoot = path.resolve(path.join(__dirname, "..", "dist"))
global.expect = chai.expect
