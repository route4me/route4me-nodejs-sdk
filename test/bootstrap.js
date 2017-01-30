"use strict"

const chai = require("chai")
const chai_jsonschema = require("chai-json-schema")

const runIntegrationTests = process.env["TEST_INTEGRATION"] === "1"


chai.use(chai_jsonschema)
// Validate multiple errors for one assert
chai.tv4.multiple = true

global.runIntegrationTests = runIntegrationTests
global.expect = chai.expect
