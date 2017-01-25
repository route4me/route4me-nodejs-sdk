"use strict"

const chai = require("chai")
const chai_jsonschema = require("chai-json-schema")


chai.use(chai_jsonschema)
// Validate multiple errors for one assert
chai.tv4.multiple = true

global.expect = chai.expect
